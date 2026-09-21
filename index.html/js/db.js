/* ============================================================
   DarussalamFest.com — OFFLINE FALLBACK LAYER (db.js)
   ------------------------------------------------------------
   The app's primary database is Supabase (see js/app.js). This
   file is the safety net: if Supabase is unreachable or not yet
   set up, data is saved here in a real local database (IndexedDB
   — the browser's built-in database, NOT localStorage) so the
   site keeps working. When Supabase comes back, it is used
   again automatically.

   Public API used by app.js:
     await idbGet(key)            — read (null if missing)
     await idbSet(key, val)       — write
     await idbDelete(key)         — delete
     idbOnUpdate(cb)              — local live-sync (tabs/windows)
   ============================================================ */
'use strict';

const DB_NAME     = 'darussalamfest_db';
const DB_VERSION  = 1;
const KV_STORE    = 'kv_store';  // key -> { key, value, updated_at }
const MEDIA_STORE = 'media';     // spare store for large binary blobs

let _db            = null;   // open IDBDatabase instance
let _dbFailed      = false;  // IndexedDB unavailable -> in-memory fallback
const _memoryStore = {};     // fallback store so the app never breaks
const _listeners   = [];     // live-sync callbacks
let _channel       = null;   // BroadcastChannel for cross-tab sync

/* ---------- open / create the database ---------- */
function initDB(){
  if(_db || _dbFailed) return Promise.resolve(_db);
  return new Promise((resolve)=>{
    let req;
    try{
      req = indexedDB.open(DB_NAME, DB_VERSION);
    }catch(e){
      _dbFailed = true;
      console.error('IndexedDB unavailable — using in-memory fallback.', e);
      resolve(null);
      return;
    }
    req.onupgradeneeded = (ev)=>{
      const db = ev.target.result;
      if(!db.objectStoreNames.contains(KV_STORE)){
        db.createObjectStore(KV_STORE, { keyPath: 'key' });
      }
      if(!db.objectStoreNames.contains(MEDIA_STORE)){
        db.createObjectStore(MEDIA_STORE, { keyPath: 'key' });
      }
    };
    req.onsuccess = ()=>{
      _db = req.result;
      // If another tab closes/deletes the database, reopen on next access.
      _db.onclose = ()=>{ _db = null; };
      resolve(_db);
    };
    req.onerror = req.onblocked = ()=>{
      _dbFailed = true;
      console.error('Could not open local database — using in-memory fallback.', req.error);
      resolve(null);
    };
  });
}

/* ---------- low-level helper ---------- */
function _idbReq(storeName, mode, fn){
  return new Promise((resolve, reject)=>{
    if(!_db){ reject(new Error('local database not open')); return; }
    let req;
    try{
      req = fn(_db.transaction(storeName, mode).objectStore(storeName));
    }catch(e){ reject(e); return; }
    req.onsuccess = ()=> resolve(req.result);
    req.onerror   = ()=> reject(req.error);
  });
}

/* ---------- public API ---------- */
async function idbGet(key){
  await initDB();
  if(_dbFailed) return (key in _memoryStore) ? _memoryStore[key] : null;
  try{
    const row = await _idbReq(KV_STORE, 'readonly', (s)=> s.get(key));
    return row ? row.value : null;
  }catch(e){
    console.error('idbGet failed', key, e);
    return (key in _memoryStore) ? _memoryStore[key] : null;
  }
}

async function idbSet(key, val){
  await initDB();
  let ok = true;
  if(_dbFailed){
    _memoryStore[key] = val;
  }else{
    try{
      await _idbReq(KV_STORE, 'readwrite', (s)=> s.put({ key, value: val, updated_at: new Date().toISOString() }));
    }catch(e){
      console.error('idbSet failed', key, e);
      _memoryStore[key] = val;
      ok = false;
    }
  }
  _notify(key, val, false);
  if(_channel){ try{ _channel.postMessage({ key, value: val }); }catch(e){ /* value not cloneable — skip */ } }
  return ok;
}

async function idbDelete(key){
  await initDB();
  let ok = true;
  if(_dbFailed){
    delete _memoryStore[key];
  }else{
    try{
      await _idbReq(KV_STORE, 'readwrite', (s)=> s.delete(key));
    }catch(e){
      console.error('idbDelete failed', key, e);
      delete _memoryStore[key];
      ok = false;
    }
  }
  _notify(key, undefined, false);
  if(_channel){ try{ _channel.postMessage({ key, value: undefined }); }catch(e){ /* ignore */ } }
  return ok;
}

/* ---------- live sync (same tab + other open tabs) ---------- */
function _notify(key, value, fromOtherTab){
  _listeners.forEach((cb)=>{ try{ cb(key, value, fromOtherTab); }catch(e){ console.error(e); } });
}

/* Register a listener; returns an unsubscribe function. */
function idbOnUpdate(cb){
  _listeners.push(cb);
  return ()=>{ const i = _listeners.indexOf(cb); if(i>=0) _listeners.splice(i,1); };
}

// Receive writes from other tabs/windows so every open view stays in sync.
if(typeof BroadcastChannel !== 'undefined'){
  _channel = new BroadcastChannel('darussalamfest_db');
  _channel.onmessage = (ev)=>{
    const { key, value } = ev.data || {};
    if(typeof key !== 'string') return;
    if(_dbFailed) _memoryStore[key] = value;
    _notify(key, value, true);
  };
}
