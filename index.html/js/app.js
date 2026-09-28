document.getElementById('footYear').textContent = new Date().getFullYear();

/* ================= CONFIG / CONSTANTS ================= */
const CATEGORIES = ["Sub Junior","Junior","Senior","General"];
const GROUPS = ["Junior Boys","Junior Girls","Senior Boys","Senior Girls"];
const ROUNDS = ["Heat 1","Heat 2","Final"];
const VENUES = ["Main Auditorium","Sports Ground","Masjid Hall","Library Hall","Multipurpose Hall","Classroom Block A"];
const TIMES = ["08:00","09:30","11:00","13:00","14:30","16:00"];
const CATEGORY_VENUES = {
  "Sub Junior": ["Masjid Hall","Main Auditorium"],
  "Junior": ["Multipurpose Hall","Library Hall"],
  "Senior": ["Main Auditorium","Masjid Hall"],
  "General": ["Main Auditorium","Multipurpose Hall"]
};
/* Official programme list — [code, name, category, type] where type:
   ST = Stage (Individual), SG = Stage (Group), NS = Non-Stage (Individual), NG = Non-Stage (Group) */
const OFFICIAL_PROGRAMS = [
  /* ---- 1. SUB JUNIOR ---- */
  ['01','HIFL','Sub Junior','ST'],
  ['02','QIRAATH','Sub Junior','ST'],
  ['03','SONG KND','Sub Junior','ST'],
  ['04','CHAIN STORY','Sub Junior','ST'],
  ['05','SONG MLM','Sub Junior','ST'],
  ['06','SONG BEARY','Sub Junior','ST'],
  ['07','SPEECH KND/BRY','Sub Junior','ST'],
  ['08','SPEECH ENG','Sub Junior','ST'],
  ['09','STORY TELLING','Sub Junior','ST'],
  ['10','NAANU KANNADIKA','Sub Junior','ST'],
  ['11','HAND WRITING ENG','Sub Junior','NS'],
  ['12','DIARY MAKING','Sub Junior','NS'],
  ['13','VISUALITH','Sub Junior','NS'],
  ['14','MEMORY TEST','Sub Junior','NS'],
  ['15','DICT SEARCH','Sub Junior','NS'],
  ['16','PENCIL DRAWING','Sub Junior','NS'],
  /* ['17','RUBIK CUBE','Sub Junior','NS'] — withdrawn from the fest.
     The record is preserved (code 17 stays reserved) and the migration
     below flips its status to CANCELLED instead of deleting it, so any
     historical registrations or results remain intact. */

  ['18','AZAN','Sub Junior','ST'],
  ['19','CROSS WORD','Sub Junior','NS'],
  ['21','SWARF IQ','Sub Junior','NS'],
  ['22','MATHS TALENT','Sub Junior','NS'],
  /* ---- 2. JUNIOR ---- */

  ['01','QIRAATH','Junior','ST'],
  ['02','HIFL','Junior','ST'],
  ['03','AZAN','Junior','ST'],
  ['04','SONG KND','Junior','ST'],
  ['05','SONG URD','Junior','ST'],
  ['06','SONG ARB','Junior','ST'],
  ['07','SPEECH KND','Junior','ST'],
  ['08','SPEECH ENG','Junior','ST'],
  ['09','SPEECH BRY','Junior','ST'],
  ['10','VAAZ [BRY]','Junior','ST'],
  ['11','DEVOTIONAL SONG','Junior','ST'],
  ['12','NAANU KANNADIKA','Junior','ST'],
  ['13','SWARF TALENT','Junior','NS'],
  ['14','ESSAY KND','Junior','NS'],
  ['15','ESSAY ENG','Junior','NS'],
  ['16','LNG MMRY TEST','Junior','NS'],
  ['17','DICT SEARCH [ARB]','Junior','NS'],
  ['18','AL MUTHARAKKIB','Junior','NS'],
  ['19','WAR OF WORDS [ENG]','Junior','NS'],
  ['20','MULAFALATH','Junior','NS'],
  ['21','TRANS ARB-MLM','Junior','NS'],
  ['22','TRANS ENG-KND','Junior','NS'],
  ['23','SPELLING B','Junior','NS'],
  ['24','COLOUR DRAWING','Junior','NS'],
  ['25','QUIZ','Junior','NS'],
  ['26','POSTER MAKING','Junior','NS'],
  ['27','READING HINDI','Junior','NS'],
  ['28','AL IBANATH','Junior','NS'],
  ['29','CALLIGRAPHY','Junior','NS'],
  ['30','BOOK REVIEW','Junior','NS'],
  ['31','PROOF READING','Junior','NS'],
  /* ---- 3. SENIOR ---- */
  ['01','QIRAATH','Senior','ST'],
  ['02','ANNOUNCEMENT','Senior','ST'],
  ['03','SONG MLM','Senior','ST'],
  ['04','SONG KND','Senior','ST'],
  ['05','SONG URD','Senior','ST'],
  ['06','SONG ARB','Senior','ST'],
  ['07','SPEECH BEARY','Senior','ST'],
  ['08','SPEECH ARB','Senior','ST'],
  ['09','MOTIVATIONAL TALK','Senior','ST'],
  ['10','SPEECH ENG','Senior','ST'],
  ['11','SPEECH URDU','Senior','ST'],
  ['12','PICK N TALK','Senior','ST'],
  ['13','VAAZ [BRY/MLM]','Senior','ST'],
  ['14','DEVOTIONAL SONG','Senior','ST'],
  ['15','HIFL','Senior','NS'],
  ['16','THE GENIUS','Senior','NS'],
  ['17','WAR OF WORDS ENG','Senior','NS'],
  ['18','GEO GIANT','Senior','NS'],
  ['19','POSTER DESIGN','Senior','NS'],
  ['20','PIC POETRY KND','Senior','NS'],
  ['21','THAHLEEL UL IBARATH','Senior','NS'],
  ['22','ESSAY ENG','Senior','NS'],
  ['23','ESSAY KND','Senior','NS'],
  ['24','TRANS ENG-KND','Senior','NS'],
  ['25','TRANS ARB-MLM','Senior','NS'],
  ['26','QUIZ','Senior','NS'],
  ['27','HEAD NOTE','Senior','NS'],
  ['28','CALLIGRAPHY','Senior','NS'],
  ['29','LIVE EXTOMPHORE','Senior','NS'],
  ['30','WAR OF WORD ARB','Senior','NS'],
  ['31','BOOK REVIEW','Senior','NS'],
  ['32','QUTHUBA','Senior','NS'],
  /* ---- 4. GENERAL (Stage & Mixed) ---- */
  ['01','PODCAST','General','ST'],
  ['02','THALASHE MASALA','General','NS'],
  ['03','DEBATE','General','NS'],
  ['04','SOOFI SONG','General','ST'],
  ['05','MASHUP SONG','General','ST'],
  ['06','MALAPAAT','General','ST'],
  ['07','SPEECH N SONG','General','ST'],
  ['08','GROUP SONG [S.B]','General','SG'],
  ['09','MASHUP SONG [J]','General','ST'],
  ['10','BURDHA N QAWALI','General','SG'],
  ['11','MUSHAARA','General','ST'],
  ['12','NEWSPAPER MAKING','General','NG'],
  ['13','COLLAGE','General','NG'],
  ['14','GARDEN MAKING','General','NG'],
  ['15','HADEETH QUIZ [J]','General','NS'],
  ['16','REVIEW THE SUNNAH','General','NS'],
  ['17','FACE TO FACE INT.','General','ST'],
  ['18','TEACHING PRESENT. THANAWU','General','ST']
];
const FEST_DATES = ["2026-07-22","2026-07-23","2026-07-24","2026-07-25","2026-07-26","2026-07-27","2026-07-28"];

/* ---- THANAWUUSH'26 · program & registration model ----
   Categories offered in the registration form. General is included:
   it carries open/individual programmes and its limits default to
   no minimums (admin-editable in Settings → Participation Limits). */
const PARTICIPATION_CATEGORIES = ["Sub Junior","Junior","Senior","General"];
const EVENT_TYPES = ["Stage","Non-Stage"];
const EVENT_STATUSES = ["ACTIVE","INACTIVE","CANCELLED"];
const REG_STATUSES = ["OPEN","CLOSED","CANCELLED"];
const REG_STATUS_VALUES = ["PENDING","APPROVED","REJECTED"];
/* Editable from Admin → Settings → Participation Limits. */
const DEFAULT_PARTICIPATION_LIMITS = {
  "Sub Junior":{ minStage:5, minNonStage:5, maxTotal:12 },
  "Junior":     { minStage:1, minNonStage:2, maxTotal:10 },
  "Senior":     { minStage:2, minNonStage:3, maxTotal:12 },
  "General":    { minStage:0, minNonStage:0, maxTotal:12 }
};
const HOUSES = [
  {name:"BAHRAYN", color:"#0E3B2E"},
  {name:"SADDAYN", color:"#8E1F2C"},
  {name:"SADAFAYN", color:"#14614A"},
  {name:"NAJDAYN", color:"#C9A227"}
];

const EXEC_CATEGORIES = [
  {key:'directors', label:'Directors'},
  {key:'officials', label:'Officials'},
  {key:'judges', label:'Judges'},
  {key:'volunteers', label:'Volunteers'},
  {key:'teamLeaders', label:'Team Leaders'}
];
const MEMBER_CATEGORIES = ['Senior','Junior','Sub Junior'];
const STAGE_INDIVIDUAL_PROGRAMS = OFFICIAL_PROGRAMS.filter(p=>p[2]==='General' && (p[3]==='ST'||p[3]==='SG')).map(p=>p[1]);
const STAGE_TEAM_PROGRAMS = OFFICIAL_PROGRAMS.filter(p=>p[3]==='SG').map(p=>p[1]);
const OFFSTAGE_INDIVIDUAL_PROGRAMS = OFFICIAL_PROGRAMS.filter(p=>p[2]==='General' && (p[3]==='NS'||p[3]==='NG')).map(p=>p[1]);
const OFFSTAGE_TEAM_PROGRAMS = OFFICIAL_PROGRAMS.filter(p=>p[3]==='NG').map(p=>p[1]);
function defaultRosterTeams(){ return ['BAHRAYN','SADDAYN','SADAFAYN','NAJDAYN']; }
function defaultTeamColors(){
  const colors = {};
  HOUSES.forEach(h=>{ colors[h.name] = h.color; });
  return colors;
}

/* Default festival identity — every value is editable from
   Admin → Branding and served dynamically to the frontend. */
const DEFAULT_FEST_BRANDING = {
  festName: "Thanawuush'26",
  festSubtitle: 'Darussalam Arts Fest 2k26',
  festTagline: 'The Clash of Talent',
  theme: {
    primary:      '#0E3B2E',
    primarySoft:  '#14614A',
    accent:       '#C9A227',
    accentSoft:   '#F0D27A',
    clash:        '#8E1F2C',
    background:   '#FBF7EE'
  }
};
/* Built-in SVG wordmark — a placeholder identity, NOT a hard-coded
   logo. Uploading a real logo in Admin → Branding replaces it
   everywhere at once (nav, hero, footer, share cards). */
const DEFAULT_FEST_LOGO_SVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 200" role="img" aria-label="Thanawuush 26 — The Clash of Talent"><defs><linearGradient id="twg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#F0D27A"/><stop offset="55%" stop-color="#C9A227"/><stop offset="100%" stop-color="#9A7615"/></linearGradient></defs><g fill="none" stroke="url(#twg)" stroke-width="7" stroke-linejoin="round"><path d="M28 44 L96 44 L62 106 Z"/><path d="M92 44 L92 106"/></g><text x="126" y="96" font-family="Georgia,serif" font-size="66" font-weight="700" fill="#F0D27A">THANAWUU<tspan fill="#C9A227">SH</tspan></text><text x="30" y="152" font-family="Georgia,serif" font-size="30" letter-spacing="6" fill="#F8EECF">ARTS FEST 2K26</text><text x="30" y="182" font-family="Georgia,serif" font-size="19" font-style="italic" fill="#C9A227">The Clash of Talent</text></svg>';
const FEST_LOGO_DATA_URL = 'data:image/svg+xml,' + encodeURIComponent(DEFAULT_FEST_LOGO_SVG);


/* ================= SUPABASE BACKEND =================
   Real shared backend: every visitor reads/writes the same live database,
   and changes sync to everyone automatically in real time. Uploaded
   photos/videos/songs go to Supabase Storage ('media' bucket).

   ▶ GET YOUR OWN VALUES: Supabase Dashboard → Settings → API →
     copy "Project URL" and the "anon public" key into the two lines below.
   ▶ ONE-TIME SETUP: run the SQL from README.txt in the SQL Editor.
     Until then the app saves to the local IndexedDB fallback (js/db.js). */
const SUPABASE_URL = 'https://cgpflyhjonmcfxenqsvo.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_FShbQRdmAevDFe8-VbbsKg_gcv9L6-P';
const sb = window.supabase
  ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
  : null; // CDN script missing → local fallback only

/* Built-in admin login (no Supabase Auth needed).
   Change these two lines to set a new admin email/password. */
const ADMIN_EMAIL = 'admin@gmail.com';
const ADMIN_PASSWORD = 'Admin@123';

const DB_OFFLINE_NOTICE =
  'Database unreachable — changes are saved in this browser only and won\'t sync to other devices.';
let OFFLINE_MODE = false;
function enterOfflineMode(){
  if(OFFLINE_MODE) return;
  OFFLINE_MODE = true;
  toast(DB_OFFLINE_NOTICE);
}

/* Reads a value: Supabase first, local IndexedDB fallback second. */
async function dbGet(key){
  if(!sb) return idbGet(key);
  try{
    const { data, error } = await sb.from('kv_store').select('value').eq('key', key).maybeSingle();
    if(error){ console.error('dbGet failed', key, error); return idbGet(key); }
    return data ? data.value : null;
  }catch(e){ console.error('dbGet failed', key, e); return idbGet(key); }
}
/* Writes a value: Supabase first, local IndexedDB fallback second. */
async function dbSet(key, val){
  if(!sb) return idbSet(key, val);
  try{
    const { error } = await sb.from('kv_store').upsert({ key, value: val, updated_at: new Date().toISOString() });
    if(!error) return true;
    console.error('dbSet failed', key, error);
  }catch(e){ console.error('dbSet failed', key, e); }
  enterOfflineMode();
  return idbSet(key, val);
}
/* Deletes a key: Supabase first, local IndexedDB fallback second. */
async function dbDelete(key){
  if(!sb) return idbDelete(key);
  try{
    const { error } = await sb.from('kv_store').delete().eq('key', key);
    if(!error) return true;
    console.error('dbDelete failed', key, error);
  }catch(e){ console.error('dbDelete failed', key, e); }
  return idbDelete(key);
}

/* ================= MEDIA UPLOADS (photos / videos / songs) =================
   Uploaded files go to the Supabase Storage 'media' bucket and get a real
   public URL back. If Supabase isn't available, the data URI is kept and
   saved to the local IndexedDB fallback instead. */
function dataUriToBlob(dataUri){
  const [header, base64] = dataUri.split(',');
  const mimeMatch = header.match(/data:(.*?);base64/);
  const mime = mimeMatch ? mimeMatch[1] : 'application/octet-stream';
  const byteChars = atob(base64);
  const byteNumbers = new Array(byteChars.length);
  for(let i=0;i<byteChars.length;i++){ byteNumbers[i] = byteChars.charCodeAt(i); }
  return { blob: new Blob([new Uint8Array(byteNumbers)], { type: mime }), mime };
}
async function storePhotoIfNeeded(value){
  if(!value || typeof value!=='string' || !value.startsWith('data:')) return value;
  if(!sb) return value; // no backend → keep data URI for the local DB
  try{
    const { blob, mime } = dataUriToBlob(value);
    const ext = (mime.split('/')[1] || 'bin').split('+')[0];
    const path = 'uploads/'+Date.now()+'-'+Math.random().toString(36).slice(2,8)+'.'+ext;
    const { error } = await sb.storage.from('media').upload(path, blob, { contentType: mime, upsert: false });
    if(error){ console.error('upload failed', error); toast('Upload failed — check your connection and try again.'); return value; }
    const { data } = sb.storage.from('media').getPublicUrl(path);
    return data.publicUrl;
  }catch(e){ console.error('upload failed', e); return value; }
}
async function maybeDeleteOldBlob(oldValue, newValue){
  if(!sb) return;
  if(oldValue && typeof oldValue==='string' && oldValue.includes('/storage/v1/object/public/media/') && oldValue!==newValue){
    const path = oldValue.split('/storage/v1/object/public/media/')[1];
    if(path){ try{ await sb.storage.from('media').remove([path]); }catch(e){ /* non-fatal */ } }
  }
}
function photoSrc(value){ return value || ''; }

/* ================= LIVE SYNC =================
   Supabase Realtime pushes every admin change to every open browser
   (all devices) within about a second. Local fallback writes sync
   across this browser's tabs via db.js. */
const KV_KEY_TO_STATE = {
  'df:events':'events', 'df:results':'results', 'df:points':'points',
  'df:highlights':'highlights', 'df:execMembers':'execMembers',
  'df:teamMembers':'teamMembers', 'df:settings':'settings',
  'df:registrations':'registrations'
};
function subscribeLiveSync(){
  if(sb){
    sb.channel('kv_store_live')
      .on('postgres_changes', { event:'*', schema:'public', table:'kv_store' }, (payload)=>{
        const row = payload.new || payload.old;
        if(!row) return;
        const prop = KV_KEY_TO_STATE[row.key];
        if(prop && payload.new){
          if(JSON.stringify(STATE[prop]) === JSON.stringify(payload.new.value)) return;
          STATE[prop] = payload.new.value;
          render();
        }
      })
      .subscribe();
  }
  idbOnUpdate((key, value)=>{
    const prop = KV_KEY_TO_STATE[key];
    if(!prop || value===undefined) return;
    if(JSON.stringify(STATE[prop]) === JSON.stringify(value)) return;
    STATE[prop] = value;
    render();
  });
}

/* ================= SEED GENERATION ================= */
function pad(n){ return n<10 ? '0'+n : ''+n; }
function generateSeedEvents(){
  const events = [];
  let idx = 0;
  const TYPE_LABEL = { ST:'Stage — Individual', SG:'Stage — Group', NS:'Non-Stage — Individual', NG:'Non-Stage — Group' };
  OFFICIAL_PROGRAMS.forEach(([code, name, cat, type], i)=>{
    idx++;
    const dayIndex = i % FEST_DATES.length;
    const venuePair = CATEGORY_VENUES[cat];
    const venue = venuePair[i % venuePair.length];
    const time = TIMES[i % TIMES.length];
    const programName = name;
    const fullName = code+' — '+name+' ['+cat+']';
    events.push({
      id: 'ev-'+code+'-'+cat.charAt(0)+(cat.indexOf(' ')>0?cat.charAt(cat.indexOf(' ')+1):''),
      name: fullName,
      programName: programName,
      slug: slugify(programName+'-'+cat),
      eventCode: code,
      category: cat,
      type: TYPE_LABEL[type] || type,
      eventType: (type==='ST'||type==='SG') ? 'Stage' : 'Non-Stage',
      date: FEST_DATES[dayIndex],
      time: time,
      venue: venue,
      status: 'ACTIVE',
      regStatus: 'OPEN',
      regStart: '',
      regEnd: '',
      maxParticipants: '',
      description: programDescription(name, cat, (type==='ST'||type==='SG') ? 'Stage' : 'Non-Stage'),
      rules: programRules(name, cat),
      participants: '',
      statusOverride: ''
    });
  });
  applyCancelledPrograms(events);
  return events;
}

/* Rubik's Cube is withdrawn — flagged, never deleted. */
const CANCELLED_PROGRAMS = ['RUBIK CUBE'];
function applyCancelledPrograms(events){
  events.forEach(ev=>{
    if(CANCELLED_PROGRAMS.some(p=>String(ev.programName||ev.name||'').toUpperCase().indexOf(p)>=0)){
      ev.status = 'CANCELLED';
      ev.regStatus = 'CANCELLED';
      ev.cancelledReason = 'Withdrawn from Thanawuush\'26 — this event is no longer part of the fest.';
    }
  });
  return events;
}

/* Enriches an existing events document in place with the fields the
   new registration / participation system relies on. Purely additive:
   existing keys are never overwritten and no record is removed. */
function migrateEventRecord(ev){
  if(!ev || typeof ev!=='object') return ev;
  if(!ev.programName){
    const n = String(ev.name||'');
    const m = n.match(/^\s*(\d+)\s*—\s*(.+?)\s*\[(.+?)\]\s*$/);
    ev.programName = m ? m[2] : n.replace(/\[[^\]]*\]/g,'').trim();
    if(m && !ev.eventCode) ev.eventCode = m[1];
  }
  if(!ev.eventCode){
    const m2 = String(ev.name||'').match(/^\s*(\d+)/);
    if(m2) ev.eventCode = m2[1];
  }
  if(!ev.eventType) ev.eventType = eventTypeOf(ev);
  if(!EVENT_STATUSES.includes(ev.status)) ev.status = 'ACTIVE';
  if(!REG_STATUSES.includes(ev.regStatus)) ev.regStatus = ev.status==='ACTIVE' ? 'OPEN' : 'CANCELLED';
  if(!ev.slug) ev.slug = slugify((ev.programName||ev.name)+'-'+(ev.category||''));
  if(!('regStart' in ev)) ev.regStart = '';
  if(!('regEnd' in ev)) ev.regEnd = '';
  if(!('maxParticipants' in ev)) ev.maxParticipants = '';
  if(!('description' in ev)) ev.description = '';
  if(!('rules' in ev)) ev.rules = '';
  return ev;
}
function migrateEvents(list){
  if(!Array.isArray(list)) return list;
  list.forEach(migrateEventRecord);
  applyCancelledPrograms(list);
  return list;
}

/* Fills any settings key introduced after the document was written. */
function migrateSettings(s){
  if(!s || typeof s!=='object') return defaultSettings();
  const d = defaultSettings();
  Object.keys(d).forEach(k=>{ if(!(k in s) || s[k]===null || s[k]===undefined) s[k] = d[k]; });
  if(!s.participationLimits || typeof s.participationLimits!=='object') s.participationLimits = JSON.parse(JSON.stringify(DEFAULT_PARTICIPATION_LIMITS));
  PARTICIPATION_CATEGORIES.forEach(cat=>{
    if(!s.participationLimits[cat] || typeof s.participationLimits[cat]!=='object') s.participationLimits[cat] = JSON.parse(JSON.stringify(DEFAULT_PARTICIPATION_LIMITS[cat]));
  });
  if(!s.theme || typeof s.theme!=='object') s.theme = Object.assign({}, DEFAULT_FEST_BRANDING.theme);
  Object.keys(DEFAULT_FEST_BRANDING.theme).forEach(k=>{ if(!s.theme[k]) s.theme[k] = DEFAULT_FEST_BRANDING.theme[k]; });
  if(!s.rosterTeams || !s.rosterTeams.length) s.rosterTeams = defaultRosterTeams();
  if(!s.teamColors || typeof s.teamColors!=='object') s.teamColors = defaultTeamColors();
  s.rosterTeams.forEach(t=>{ if(!s.teamColors[t]) s.teamColors[t] = '#0E3B2E'; });
  if(!s.pageBg || typeof s.pageBg!=='object') s.pageBg = d.pageBg;
  if(!s.pageHeadings || typeof s.pageHeadings!=='object') s.pageHeadings = d.pageHeadings;
  return s;
}
function programDescription(name, cat, type){
  return name + ' — a ' + String(type||'Stage').toLowerCase() + ' programme for the ' + cat + ' category at Thanawuush\'26, Darussalam Arts Fest 2k26.';
}
function programRules(name, cat){
  return [
    'Report to the venue 30 minutes before the scheduled time with your chest number.',
    'Only registered ' + cat + ' participants may compete in this programme.',
    'Time limit and judging criteria are announced by the coordinator on the day.',
    'Malpractice or unfair conduct leads to immediate disqualification.'
  ].join('\n');
}


function computeStatus(ev){
  if(ev.statusOverride){ return ev.statusOverride; }
  const today = new Date(); today.setHours(0,0,0,0);
  const evDate = new Date(ev.date+'T00:00:00');
  if(evDate.getTime() < today.getTime()) return 'Completed';
  if(evDate.getTime() === today.getTime()) return 'Ongoing';
  return 'Upcoming';
}

/* ============================================================
   EVENT MODEL — STAGE / NON-STAGE, STATUS & REGISTRATION
   ------------------------------------------------------------
   Events written by earlier versions of the app only had
   {name, category, type, date, time, venue, …}. Everything below
   is *derived*, so no data is lost and nothing needs re-entering.
   ============================================================ */
function slugify(s){
  return String(s||'').toLowerCase().normalize('NFKD').replace(/[^\w\s-]/g,'').trim()
    .replace(/[\s_]+/g,'-').replace(/-+/g,'-').slice(0,80) || 'event';
}
function programOfEvent(ev){
  /* the official programme record this event came from, if any */
  if(!ev) return null;
  const n = String(ev.programName || ev.name || '').toUpperCase();
  const cat = ev.category;
  return OFFICIAL_PROGRAMS.find(p=>p[2]===cat && p[1].toUpperCase()===n) || null;
}
/* ST / SG → Stage · NS / NG → Non-Stage. */
function eventTypeOf(ev){
  if(!ev) return 'Stage';
  if(EVENT_TYPES.includes(ev.eventType)) return ev.eventType;
  const prog = programOfEvent(ev);
  if(prog) return (prog[3]==='ST'||prog[3]==='SG') ? 'Stage' : 'Non-Stage';
  const t = String(ev.type||'').toLowerCase();
  if(t.indexOf('non-stage')>=0 || t.indexOf('off-stage')>=0 || t==='ns' || t==='ng') return 'Non-Stage';
  return 'Stage';
}
function eventStatusOf(ev){
  return EVENT_STATUSES.includes(ev && ev.status) ? ev.status : 'ACTIVE';
}
function isEventLive(ev){
  const st = eventStatusOf(ev);
  if(st==='CANCELLED' || st==='INACTIVE') return false;
  return computeStatus(ev) !== 'Completed';
}
function isEventCancelled(ev){ return eventStatusOf(ev)==='CANCELLED'; }
/* Public-facing list: cancelled / inactive events never appear, and
   they can never be registered for. */
function visibleEvents(){ return STATE.events.filter(isEventLive); }
/* Events a student may register for. Deliberately NOT date-gated:
   eligibility is controlled by the admin via event status (ACTIVE) and
   the registration flag (OPEN/CLOSED) — e.g. official programmes keep
   taking registrations after their fest date has passed, until the
   admin closes them. Callers still apply eventRegWindowOpen() so any
   explicit regStart/regEnd window set by the admin is honoured. */
function registrableEvents(){
  return STATE.events.filter(ev=>eventStatusOf(ev)==='ACTIVE' && eventRegStatus(ev)==='OPEN');
}
function eventSlug(ev){ return ev.slug || slugify(ev.name); }
function eventBySlug(slug){
  if(!slug) return null;
  const s = String(slug).toLowerCase();
  return STATE.events.find(e=>String(e.slug||'').toLowerCase()===s)
      || STATE.events.find(e=>slugify(e.name)===s)
      || STATE.events.find(e=>String(e.name||'').toLowerCase()===s)
      || null;
}
function eventRegStatus(ev){
  if(eventStatusOf(ev)!=='ACTIVE') return 'CANCELLED';
  const st = ev.regStatus;
  if(st && REG_STATUSES.includes(st)) return st;
  return 'OPEN';
}
function eventRegWindowOpen(ev){
  const st = eventRegStatus(ev);
  if(st!=='OPEN') return false;
  const today = new Date(); today.setHours(0,0,0,0);
  if(ev.regStart){
    const s = new Date(ev.regStart+'T00:00:00');
    if(s > today) return false;
  }
  if(ev.regEnd){
    const e = new Date(ev.regEnd+'T23:59:59');
    if(e < today) return false;
  }
  return true;
}
function eventRegClosedReason(ev){
  const st = eventRegStatus(ev);
  if(st==='CANCELLED') return 'This event has been cancelled.';
  if(st==='CLOSED') return 'Online registration for this event is closed.';
  const today = new Date(); today.setHours(0,0,0,0);
  if(ev.regStart && new Date(ev.regStart+'T00:00:00') > today) return 'Registration opens on ' + fmtDate(ev.regStart) + '.';
  if(ev.regEnd && new Date(ev.regEnd+'T23:59:59') < today) return 'Registration closed on ' + fmtDate(ev.regEnd) + '.';
  if(!isEventLive(ev)) return 'This event is no longer accepting registrations.';
  if(eventRegCount(ev) >= (Number(ev.maxParticipants)||Infinity))
    return 'This event has reached its maximum of ' + ev.maxParticipants + ' participants.';
  return '';
}
function eventRegCount(ev){
  return STATE.registrations.filter(r=>r.eventId===ev.id && r.status!=='REJECTED').length;
}
function eventsOfCategory(cat){ return visibleEvents().filter(e=>e.category===cat); }


function avatarUrl(seed){
  return 'https://api.dicebear.com/7.x/initials/svg?seed='+encodeURIComponent(seed)+'&backgroundColor=146b52,0b3d2e,b8892b&fontFamily=Georgia';
}

const STUDENT_NAMES = ["Ahmad Zaki","Fatima Noor","Yusuf Rahman","Amina Siddiqui","Bilal Hussain","Layla Ahmed","Omar Farooq","Zainab Malik","Hamza Iqbal","Maryam Yousuf","Ibrahim Aziz","Khadija Latif","Yasir Chaudhry","Sumaya Karim","Tariq Nasser"];
function generateSeedResults(events){
  const finals = events.filter(e => e.name.includes('(Final)') && computeStatus(e)==='Completed');
  const results = []; let hIdx = 0; let nIdx = 0;
  finals.forEach((ev, i)=>{
    const order = [HOUSES[hIdx%4], HOUSES[(hIdx+1)%4], HOUSES[(hIdx+2)%4]];
    hIdx++;
    const n1 = STUDENT_NAMES[nIdx%STUDENT_NAMES.length]; nIdx++;
    const n2 = STUDENT_NAMES[nIdx%STUDENT_NAMES.length]; nIdx++;
    const n3 = STUDENT_NAMES[nIdx%STUDENT_NAMES.length]; nIdx++;
    results.push({
      id: 'res-'+pad(i+1),
      eventName: ev.name,
      date: ev.date,
      firstTeam: order[0].name, firstWinner: n1, firstPhoto: avatarUrl(n1+ev.name+'1'),
      secondTeam: order[1].name, secondWinner: n2, secondPhoto: avatarUrl(n2+ev.name+'2'),
      thirdTeam: order[2].name, thirdWinner: n3, thirdPhoto: avatarUrl(n3+ev.name+'3')
    });
  });
  return results;
}

function generateSeedPoints(results){
  const totals = {}; HOUSES.forEach(h=> totals[h.name]=0);
  results.forEach(r=>{
    totals[r.firstTeam] = (totals[r.firstTeam]||0) + 10;
    totals[r.secondTeam] = (totals[r.secondTeam]||0) + 7;
    totals[r.thirdTeam] = (totals[r.thirdTeam]||0) + 5;
  });
  return HOUSES.map(h => {
    const T = totals[h.name]||0;
    const genIndividual = Math.round(T*0.4), genGroup = Math.round(T*0.35), genGeneral = Math.max(0, T-genIndividual-genGroup);
    const catSenior = Math.round(T*0.4), catJunior = Math.round(T*0.3), catSubJunior = Math.round(T*0.2), catGeneral = Math.max(0, T-catSenior-catJunior-catSubJunior);
    const evtStage = Math.round(T*0.55), evtNonStage = Math.max(0, T-evtStage);
    return { team: h.name, points: T, genIndividual, genGroup, genGeneral, catSenior, catJunior, catSubJunior, catGeneral, evtStage, evtNonStage };
  });
}

function generateSeedHighlights(){
  return [
    { id:'hl-01', title:'Opening Ceremony — Full Recap', eventName:'Opening Ceremony', date:'2026-07-22', type:'youtube', url:'M7lc1UVf-VE', featured:'yes' },
    { id:'hl-02', title:"Qira'at Finals — Best Moments", eventName:"Qira'at & Tilawah (Final)", date:'2026-07-24', type:'mp4', url:'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4', featured:'no' },
    { id:'hl-03', title:'Athletics Day Highlights', eventName:'Athletics & Track (Final)', date:'2026-07-24', type:'mp4', url:'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/friday.mp4', featured:'no' },
    { id:'hl-04', title:'Winners Announcement — Day 3', eventName:'Winner Announcement', date:'2026-07-25', type:'youtube', url:'M7lc1UVf-VE', featured:'no' },
    { id:'hl-05', title:'Closing Ceremony Teaser', eventName:'Closing Ceremony', date:'2026-07-28', type:'mp4', url:'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4', featured:'no' }
  ];
}

function generateSeedExecMembers(){
  return {
    directors: [
      {id:'dir-1', name:'Sheikh Abdullah Rahman', photo:''},
      {id:'dir-2', name:'Ustadha Amina Farouk', photo:''}
    ],
    officials: [
      {id:'off-1', name:'Ibrahim Aziz', photo:''},
      {id:'off-2', name:'Khadija Latif', photo:''},
      {id:'off-3', name:'Yasir Chaudhry', photo:''}
    ],
    judges: [
      {id:'jud-1', name:'Ustadh Bilal Hussain', photo:''},
      {id:'jud-2', name:'Sumaya Karim', photo:''},
      {id:'jud-3', name:'Tariq Nasser', photo:''},
      {id:'jud-4', name:'Zainab Malik', photo:''}
    ],
    volunteers: [
      {id:'vol-1', name:'Hamza Iqbal', photo:''},
      {id:'vol-2', name:'Maryam Yousuf', photo:''},
      {id:'vol-3', name:'Omar Farooq', photo:''},
      {id:'vol-4', name:'Layla Ahmed', photo:''},
      {id:'vol-5', name:'Yusuf Rahman', photo:''}
    ],
    teamLeaders: [
      {id:'lead-1', name:'Ahmad Zaki', photo:'', team:'Al-Furqan'},
      {id:'lead-2', name:'Fatima Noor', photo:'', team:'An-Noor'},
      {id:'lead-3', name:'Yusuf Chaudhry', photo:'', team:'Al-Huda'}
    ]
  };
}
function generateSeedTeamMembers(rosterTeams){
  const members = []; let nIdx = 0;
  rosterTeams.forEach((team, ti)=>{
    const base = (ti+1)*100 + 1;
    for(let i=0;i<6;i++){
      const name = STUDENT_NAMES[nIdx % STUDENT_NAMES.length]; nIdx++;
      const category = MEMBER_CATEGORIES[i % MEMBER_CATEGORIES.length];
      members.push({
        id: 'mem-'+team.replace(/[^a-zA-Z0-9]/g,'')+'-'+i,
        chestNumber: String(base+i),
        name, team, category,
        stageIndividual: STAGE_INDIVIDUAL_PROGRAMS[i % STAGE_INDIVIDUAL_PROGRAMS.length],
        stageTeam: STAGE_TEAM_PROGRAMS[i % STAGE_TEAM_PROGRAMS.length],
        offStageIndividual: OFFSTAGE_INDIVIDUAL_PROGRAMS[i % OFFSTAGE_INDIVIDUAL_PROGRAMS.length],
        offStageTeam: OFFSTAGE_TEAM_PROGRAMS[i % OFFSTAGE_TEAM_PROGRAMS.length]
      });
    }
  });
  return members;
}

function defaultSettings(){
  return {
    siteTitle: "Thanawuush'26 — Darussalam Arts Fest 2k26",
    heroHeading: "Thanawuush'26",
    tabTitle: "Thanawuush'26 — Darussalam Arts Fest 2k26",
    tagline: 'The Clash of Talent',
    aboutText: "Thanawuush'26 is the annual inter-house arts festival of Darussalam Institution, bringing together Qira'at, recitation, debate, art, calligraphy and elocution into a single week of friendly competition. The houses — Bahrayn, Saddayn, Sad afayn and Najdayn — compete across 100+ programmes for the House Championship Shield, judged on skill, sportsmanship and adab.",
    contactEmail: 'festival@darussalam.org',
    contactPhone: '+91 00000 00000',
    contactAddress: 'Darussalam Institution, Education Avenue, Your City',
    /* ---- fest branding (Admin → Branding) ---- */
    festName: DEFAULT_FEST_BRANDING.festName,
    festSubtitle: DEFAULT_FEST_BRANDING.festSubtitle,
    festTagline: DEFAULT_FEST_BRANDING.festTagline,
    theme: Object.assign({}, DEFAULT_FEST_BRANDING.theme),
    useDefaultLogo: true,
    /* ---- category-wise participation limits (Admin → Settings) ---- */
    participationLimits: JSON.parse(JSON.stringify(DEFAULT_PARTICIPATION_LIMITS)),
    logoUrl: '',
    customPointColumns: [],
    pointsMusicUrl: '',
    pointsMusicAutoplay: true,
    homeMusicUrl: '',
    homeMusicAutoplay: true,
    pageHeadings: {
      events:'Festival Events', schedule:'Festival Schedule', points:'Points Table',
      results:'Event Results', winners:'Winners Gallery', highlights:'Highlights',
      exec:'Executive Members', teams:'Teams', about:'Thanawuush\'26',
      homeFeatured:'Featured Highlight', homePoints:'Team Leaderboard',
      homeIndividual:'Individual Leaderboard', homeRegister:'Online Registration'
    },
    teamColors: defaultTeamColors(),
    rosterTeams: defaultRosterTeams(),
    hero: { type:'color', colorValue:'linear-gradient(160deg,#0E3B2E,#14614A 55%,#072019)', imageUrl:'', videoUrl:'', autoplay:false },
    pageBg: {
      events:{type:'color', value:'#FBF7EE'},
      schedule:{type:'color', value:'#FBF7EE'},
      points:{type:'color', value:'#FBF7EE'},
      results:{type:'color', value:'#FBF7EE'},
      winners:{type:'color', value:'#FBF7EE'},
      highlights:{type:'color', value:'#FBF7EE'},
      exec:{type:'color', value:'#FBF7EE'},
      teams:{type:'color', value:'#FBF7EE'},
      about:{type:'color', value:'#FBF7EE'},
      contact:{type:'color', value:'#FBF7EE'},
      register:{type:'color', value:'#FBF7EE'}
    }
  };
}

/* ---- settings helpers: always read through a normaliser so a
   settings document written by an older version of the app still
   behaves correctly (no field is ever assumed to exist). ---- */
function limits(){
  const stored = (STATE.settings && STATE.settings.participationLimits) || {};
  const out = {};
  PARTICIPATION_CATEGORIES.forEach(cat=>{
    const d = DEFAULT_PARTICIPATION_LIMITS[cat];
    const s = stored[cat] || {};
    const num = (v,fb)=>{ const n = Number(v); return isFinite(n) && n>=0 ? Math.round(n) : fb; };
    out[cat] = { minStage:num(s.minStage,d.minStage), minNonStage:num(s.minNonStage,d.minNonStage), maxTotal:num(s.maxTotal,d.maxTotal) };
  });
  return out;
}
function festName(){ return (STATE.settings && STATE.settings.festName) || DEFAULT_FEST_BRANDING.festName; }
function festSubtitle(){ return (STATE.settings && STATE.settings.festSubtitle) || DEFAULT_FEST_BRANDING.festSubtitle; }
function festTagline(){ return (STATE.settings && STATE.settings.festTagline) || DEFAULT_FEST_BRANDING.festTagline; }
/* The uploaded logo wins; otherwise the built-in placeholder mark. */
function festLogoSrc(){
  const u = STATE.settings && STATE.settings.logoUrl;
  return u ? photoSrc(u) : FEST_LOGO_DATA_URL;
}
/* Push the admin-configurable palette onto <html> as CSS variables,
   so the whole site re-themes without touching any stylesheet. */
function applyTheme(){
  const t = Object.assign({}, DEFAULT_FEST_BRANDING.theme, (STATE.settings && STATE.settings.theme) || {});
  const map = {
    '--tw-primary':t.primary, '--tw-primary-soft':t.primarySoft, '--tw-accent':t.accent,
    '--tw-accent-soft':t.accentSoft, '--tw-clash':t.clash, '--tw-bg':t.background
  };
  const root = document.documentElement;
  Object.keys(map).forEach(k=>{ if(map[k]) root.style.setProperty(k, map[k]); });
  const meta = document.querySelector('meta[name="theme-color"]');
  if(meta && t.primary) meta.setAttribute('content', t.primary);
}
/* Splits a title so the '26 gets the gold gradient treatment. */
function festNameHtml(size){
  const n = festName();
  const m = n.match(/^(.*?)(\d{2,4})$/);
  const cls = size ? ' style="font-size:'+size+'"' : '';
  if(m) return esc(m[1]) + '<span class="tw-year">'+esc(m[2])+'</span>';
  return esc(n);
}


/* ================= GLOBAL STATE ================= */
const STATE = {
  events: [], results: [], points: [], highlights: [], settings: null,
  execMembers: null, teamMembers: [], registrations: [],
  isAdmin: false, adminTab: 'events',
  filters: { q:'', category:'', date:'', venue:'' },
  resultFilters: { q:'', category:'', event:'', team:'' },
  regFilters: { q:'', event:'', category:'', team:'', status:'' },
  regCategory: PARTICIPATION_CATEGORIES[2],   // Senior — shown in the register form progress panel
  regSuccess: null,                          // confirmation payload after a successful submit
  individualCategory: PARTICIPATION_CATEGORIES[2],
  winnerFilter: 'all', teamSearch: '', tvViewMode: 'list',
  showCancelled: false, adminTeamSel: ''
};

/* Uploaded media is kept as-is (data URL saved straight into the local
   database). These hooks are kept so all existing call sites keep working. */
async function storePhotoIfNeeded(value){ return value || ''; }
async function maybeDeleteOldBlob(){ /* local database — nothing to clean up */ }

/* One-time migration: replace the old demo event list (old category names)
   with the official 4-category programme list. Runs once per browser. */
async function migrateEventsToOfficialPrograms(){
  if(await idbGet('df:migrated_official_programs')) return;
  const events = await dbGet('df:events');
  if(events && events.some(e=>!CATEGORIES.includes(e.category))){
    const fresh = generateSeedEvents();
    await dbSet('df:events', fresh);
    STATE.events = fresh;
  }
  await idbSet('df:migrated_official_programs', new Date().toISOString());
}

/* Additive migration — runs on every boot, writes only when something
   actually changed, and never removes an event, result or point. */
async function runDataMigrations(){
  let dirty = false;
  if(Array.isArray(STATE.events)){
    const before = JSON.stringify(STATE.events);
    migrateEvents(STATE.events);
    if(JSON.stringify(STATE.events) !== before){ await dbSet('df:events', STATE.events); dirty = true; }
  }
  if(STATE.settings){
    const before = JSON.stringify(STATE.settings);
    migrateSettings(STATE.settings);
    if(JSON.stringify(STATE.settings) !== before){ await dbSet('df:settings', STATE.settings); dirty = true; }
  }
  return dirty;
}

async function initializeSampleDataIfEmpty(){
  let count = 0;
  let events = await dbGet('df:events');
  if(!events){ events = generateSeedEvents(); await dbSet('df:events', events); STATE.events = events; count++; } else { STATE.events = events; }

  let results = await dbGet('df:results');
  if(!results){ results = generateSeedResults(STATE.events); await dbSet('df:results', results); STATE.results = results; count++; } else { STATE.results = results; }

  let points = await dbGet('df:points');
  if(!points){ points = generateSeedPoints(STATE.results); await dbSet('df:points', points); STATE.points = points; count++; } else { STATE.points = points; }

  let highlights = await dbGet('df:highlights');
  if(!highlights){ highlights = generateSeedHighlights(); await dbSet('df:highlights', highlights); STATE.highlights = highlights; count++; } else { STATE.highlights = highlights; }

  let settings = await dbGet('df:settings');
  if(!settings){ settings = defaultSettings(); await dbSet('df:settings', settings); STATE.settings = settings; count++; } else { STATE.settings = migrateSettings(settings); }
  if(!STATE.settings.rosterTeams || !STATE.settings.rosterTeams.length){ STATE.settings.rosterTeams = defaultRosterTeams(); }

  let execMembers = await dbGet('df:execMembers');
  if(!execMembers){ execMembers = generateSeedExecMembers(); await dbSet('df:execMembers', execMembers); STATE.execMembers = execMembers; count++; } else { STATE.execMembers = execMembers; }

  let teamMembers = await dbGet('df:teamMembers');
  if(!teamMembers){ teamMembers = generateSeedTeamMembers(STATE.settings.rosterTeams); await dbSet('df:teamMembers', teamMembers); STATE.teamMembers = teamMembers; count++; } else { STATE.teamMembers = teamMembers; }

  return count;
}
async function boot(){
  await migrateEventsToOfficialPrograms();
  let events = await dbGet('df:events');
  if(!events){ events = generateSeedEvents(); if(!sb || STATE.isAdmin) await dbSet('df:events', events); }
  STATE.events = events;

  let results = await dbGet('df:results');
  if(!results){ results = generateSeedResults(STATE.events); if(!sb || STATE.isAdmin) await dbSet('df:results', results); }
  STATE.results = results;

  let points = await dbGet('df:points');
  if(!points){ points = generateSeedPoints(STATE.results); if(!sb || STATE.isAdmin) await dbSet('df:points', points); }
  STATE.points = points;

  let highlights = await dbGet('df:highlights');
  if(!highlights){ highlights = generateSeedHighlights(); if(!sb || STATE.isAdmin) await dbSet('df:highlights', highlights); }
  STATE.highlights = highlights;

  let settings = await dbGet('df:settings');
  if(!settings){ settings = defaultSettings(); if(!sb || STATE.isAdmin) await dbSet('df:settings', settings); }
  STATE.settings = migrateSettings(settings);
  if(!STATE.settings.rosterTeams || !STATE.settings.rosterTeams.length){ STATE.settings.rosterTeams = defaultRosterTeams(); }

  let execMembers = await dbGet('df:execMembers');
  if(!execMembers){ execMembers = generateSeedExecMembers(); if(!sb || STATE.isAdmin) await dbSet('df:execMembers', execMembers); }
  STATE.execMembers = execMembers;

  let teamMembers = await dbGet('df:teamMembers');
  if(!teamMembers){ teamMembers = generateSeedTeamMembers(STATE.settings.rosterTeams); if(!sb || STATE.isAdmin) await dbSet('df:teamMembers', teamMembers); }
  STATE.teamMembers = teamMembers;

  let registrations = await dbGet('df:registrations');
  if(!registrations){ registrations = []; if(!sb || STATE.isAdmin) await dbSet('df:registrations', registrations); }
  STATE.registrations = Array.isArray(registrations) ? registrations : [];

  await runDataMigrations();
  applyTheme();

  subscribeLiveSync();

  if(!location.hash) location.hash = '#home';
  render();
  setupRevealObserver();
}

/* ================= UTIL ================= */
function fmtDate(d){
  const dt = new Date(d+'T00:00:00');
  return dt.toLocaleDateString('en-US', { weekday:'short', month:'short', day:'numeric', year:'numeric' });
}
function fmtTime(t){
  const [h,m] = t.split(':').map(Number);
  const ampm = h>=12 ? 'PM':'AM'; const hh = ((h+11)%12)+1;
  return hh+':'+pad(m)+' '+ampm;
}
function teamColor(name){
  return (STATE.settings.teamColors && STATE.settings.teamColors[name]) || '#146B52';
}
function brokenImagePlaceholder(){
  return "data:image/svg+xml," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 225"><rect width="400" height="225" fill="#DEEBE3"/><text x="200" y="118" font-family="sans-serif" font-size="15" fill="#0B3D2E" text-anchor="middle">Photo unavailable</text></svg>');
}
function starSVG(sizeClass){
  return '<svg viewBox="0 0 100 100"><g fill="none" stroke="currentColor" stroke-width="5"><polygon points="50,8 72,28 92,50 72,72 50,92 28,72 8,50 28,28"/><polygon points="50,24 66,34 76,50 66,66 50,76 34,66 24,50 34,34"/></g></svg>';
}
function brandMarkHtml(size, variant){
  const url = festLogoSrc();
  const dark = variant!=='light';
  const defaultSvg = dark
    ? `<svg width="${size}" height="${size}" viewBox="0 0 100 100"><rect width="100" height="100" rx="20" fill="#0E3B2E"/><g fill="none" stroke="#C9A227" stroke-width="6"><polygon points="50,10 71,29 90,50 71,71 50,90 29,71 10,50 29,29"/><polygon points="50,25 65,35 75,50 65,65 50,75 35,65 25,50 35,35"/></g></svg>`
    : `<svg width="${size}" height="${size}" viewBox="0 0 100 100"><g fill="none" stroke="#F0D27A" stroke-width="6"><polygon points="50,10 71,29 90,50 71,71 50,90 29,71 10,50 29,29"/><polygon points="50,25 65,35 75,50 65,65 50,75 35,65 25,50 35,35"/></g></svg>`;
  if(!url) return defaultSvg;
  return `<span style="display:inline-block;width:${size}px;height:${size}px;line-height:0;">
    <img src="${esc(url)}" alt="${esc(festName())} logo" style="width:${size}px;height:${size}px;object-fit:contain;border-radius:6px;display:block;" onerror="this.style.display='none'; this.nextElementSibling.style.display='inline-block';">
    <span style="display:none;line-height:0;">${defaultSvg}</span>
  </span>`;
}
function brandTextHtml(title){
  const idx = title.indexOf('Fest');
  if(idx>=0){
    return esc(title.slice(0,idx)) + '<span>' + esc(title.slice(idx, idx+4)) + '</span>' + esc(title.slice(idx+4));
  }
  return esc(title);
}
function updateBrand(){
  const nl = document.getElementById('navLogo'); if(nl) nl.innerHTML = brandMarkHtml(30,'nav');
  const fl = document.getElementById('footerLogo'); if(fl) fl.innerHTML = brandMarkHtml(26,'footer');
  const title = STATE.settings.siteTitle || festName();
  document.title = STATE.settings.tabTitle || title;
  const nt = document.getElementById('navBrandText'); if(nt) nt.innerHTML = brandTextHtml(festName());
  const ft = document.getElementById('footerBrandText');
  if(ft){
    const n = festName();
    const m = n.match(/^(.*?)(\d{2,4})$/);
    ft.innerHTML = m
      ? esc(m[1]) + '<span style="color:var(--tw-accent);">' + esc(m[2]) + '</span>'
      : esc(n);
  }
  const fs = document.getElementById('footSubtitle');
  if(fs) fs.textContent = festSubtitle() + ' — ' + festTagline();
}
function heading(key, fallback){
  return (STATE.settings.pageHeadings && STATE.settings.pageHeadings[key]) || fallback;
}
function badgeClass(status){
  return status==='Upcoming' ? 'badge-upcoming' : status==='Ongoing' ? 'badge-ongoing' : 'badge-completed';
}
/* Newly added events (createdAt set) always come first; older/seed events
   keep their normal date+time order. Used for the Events page, Schedule
   and the admin Events list. */
function compareEvents(a,b){
  const an = a.createdAt ? 0 : 1;
  const bn = b.createdAt ? 0 : 1;
  if(an!==bn) return an-bn;
  if(an===0){ return (b.createdAt-a.createdAt) || (a.date+a.time).localeCompare(b.date+b.time); }
  return (a.date+a.time).localeCompare(b.date+b.time);
}
function toast(msg){
  const el = document.createElement('div'); el.className='toast'; el.textContent = msg;
  document.getElementById('toastRoot').appendChild(el);
  setTimeout(()=> el.remove(), 2600);
}
function esc(s){ return (s||'').toString().replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }

/* ============================================================
   REGISTRATION ENGINE
   ------------------------------------------------------------
   The SAME validation runs before the form is rendered and again
   immediately before the record is written, against a freshly
   re-read copy of the events + registrations documents. The
   database is therefore the final authority — editing the HTML or
   calling the function directly cannot bypass any rule.
   ============================================================ */
function regIdentity(r){
  return String(r.regNumber||'').trim().toLowerCase();
}
/* All *counting* registrations for one student in one category. */
function registrationsOfStudent(regNo, category){
  const key = regIdentity({regNumber:regNo});
  if(!key) return [];
  return STATE.registrations.filter(r=>
    regIdentity(r)===key &&
    r.category===category &&
    r.status!=='REJECTED'
  );
}
/* Live participation progress for a student in a category. */
function participationProgress(regNo, category, freshRegs){
  const lim = limits()[category] || DEFAULT_PARTICIPATION_LIMITS.Senior;
  const pool = freshRegs || STATE.registrations;
  const key = regIdentity({regNumber:regNo});
  const mine = !key ? [] : pool.filter(r=>regIdentity(r)===key && r.category===category && r.status!=='REJECTED');
  const stage = mine.filter(r=>r.eventType==='Stage').length;
  const nonStage = mine.filter(r=>r.eventType!=='Stage').length;
  const total = stage + nonStage;
  return {
    category, stage, nonStage, total,
    minStage:lim.minStage, minNonStage:lim.minNonStage, maxTotal:lim.maxTotal,
    stageOk:stage>=lim.minStage, nonStageOk:nonStage>=lim.minNonStage,
    atMax:total>=lim.maxTotal,
    stageFull:stage>=lim.maxTotal, nonStageFull:nonStage>=lim.maxTotal
  };
}
/* Returns { ok, errors[], warnings[], progress } — errors block the
   registration, warnings are advisory only. */
function validateRegistration(payload, opts){
  opts = opts || {};
  const errors = [];
  const warnings = [];
  const freshEvents = opts.events || STATE.events;
  const freshRegs = opts.registrations || STATE.registrations;

  const ev = freshEvents.find(e=>e.id===payload.eventId);
  if(!ev){ errors.push('That event could not be found. Please pick an event from the list.'); return {ok:false, errors, warnings, progress:null}; }

  /* --- event status --- */
  if(eventStatusOf(ev)==='CANCELLED'){ errors.push('This event has been cancelled and is no longer accepting registrations.'); }
  if(eventStatusOf(ev)==='INACTIVE'){ errors.push('This event is not open for registration at the moment.'); }
  const regStatus = eventRegStatus(ev);
  if(regStatus==='CANCELLED' && eventStatusOf(ev)!=='CANCELLED'){ errors.push('Registration for this event has been cancelled.'); }
  if(regStatus==='CLOSED'){ errors.push('Online registration for this event is closed. Please contact the coordinator.'); }

  /* --- registration window --- */
  const today = new Date(); today.setHours(0,0,0,0);
  if(ev.regStart && new Date(ev.regStart+'T00:00:00') > today) errors.push('Registration for this event opens on ' + fmtDate(ev.regStart) + '.');
  if(ev.regEnd && new Date(ev.regEnd+'T23:59:59') < today) errors.push('Registration for this event closed on ' + fmtDate(ev.regEnd) + '.');

  /* --- category eligibility --- */
  const category = payload.category;
  if(!PARTICIPATION_CATEGORIES.includes(category)) errors.push('Please choose a valid category: Sub Junior, Junior, Senior or General.');

  /* --- required fields --- */
  if(!String(payload.name||'').trim()) errors.push('Student name is required.');
  if(!regIdentity(payload)) errors.push('Registration number (chest number) is required.');
  if(!String(payload.team||'').trim()) errors.push('Team / House is required.');

  /* --- capacity --- */
  const taken = freshRegs.filter(r=>r.eventId===ev.id && r.status!=='REJECTED').length;
  const cap = Number(ev.maxParticipants);
  if(cap>0 && taken>=cap) errors.push('This event has reached its maximum of ' + cap + ' participants.');

  /* --- duplicate registration --- */
  const dup = freshRegs.find(r=>r.eventId===ev.id && regIdentity(r)===regIdentity(payload) && r.status!=='REJECTED');
  if(dup) errors.push('Registration number ' + payload.regNumber + ' is already registered for this event.');

  /* --- participation limits --- */
  let progress = null;
  if(PARTICIPATION_CATEGORIES.includes(category)){
    progress = participationProgress(payload.regNumber, category, freshRegs);
    if(progress.atMax){
      errors.push('Maximum program limit reached for your category — ' + category + ' allows ' + progress.maxTotal + ' programs in total.');
    }
    if(!progress.stageOk) warnings.push('You have ' + progress.stage + ' of the ' + progress.minStage + ' stage programs required for ' + category + '.');
    if(!progress.nonStageOk) warnings.push('You have ' + progress.nonStage + ' of the ' + progress.minNonStage + ' non-stage programs required for ' + category + '.');
  }
  return { ok:errors.length===0, errors, warnings, progress, event:ev };
}
function nextRegNumber(list, eventCode, category){
  const prefix = String(eventCode||'EV').toUpperCase().replace(/[^A-Z0-9]/g,'').slice(0,4) || 'EV';
  const catCode = { 'Sub Junior':'SJ', 'Junior':'JR', 'Senior':'SR' }[category] || 'GN';
  const base = prefix + '-' + catCode + '-';
  const used = new Set((list||[]).map(r=>String(r.regNo||'')));
  let i = 1;
  while(used.has(base + String(i).padStart(3,'0'))) i++;
  return base + String(i).padStart(3,'0');
}
function makeRegistrationId(){ return 'reg-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2,7); }

/* The authoritative write path: re-reads both documents, validates
   against them, then persists. */
async function submitRegistration(payload){
  const [freshEvents, freshRegs] = await Promise.all([ dbGet('df:events'), dbGet('df:registrations') ]);
  const events = Array.isArray(freshEvents) && freshEvents.length ? freshEvents : STATE.events;
  const regs = Array.isArray(freshRegs) ? freshRegs : STATE.registrations;
  const check = validateRegistration(payload, { events, registrations:regs });
  if(!check.ok) return check;
  const ev = check.event;
  const record = {
    id: makeRegistrationId(),
    regNo: nextRegNumber(regs, ev.eventCode, payload.category),
    eventId: ev.id,
    eventSlug: eventSlug(ev),
    eventName: ev.name,
    eventCode: ev.eventCode || '',
    eventType: eventTypeOf(ev),
    category: payload.category,
    name: String(payload.name||'').trim(),
    regNumber: String(payload.regNumber||'').trim(),
    team: String(payload.team||'').trim(),
    klass: String(payload.klass||'').trim(),
    phone: String(payload.phone||'').trim(),
    email: String(payload.email||'').trim(),
    notes: String(payload.notes||'').trim(),
    status: 'PENDING',
    createdAt: new Date().toISOString()
  };
  const next = regs.concat([record]);
  await dbSet('df:registrations', next);
  STATE.registrations = next;
  return { ok:true, errors:[], warnings:check.warnings, progress:check.progress, registration:record, event:ev };
}

/* ============================================================
   REGISTRATION LINKS & SHARING
   ============================================================ */
function siteBaseUrl(){
  return location.origin + location.pathname.replace(/[^/]*$/, '');
}
function eventRegUrl(ev){
  return siteBaseUrl() + '#/register/' + eventSlug(ev);
}
function genericRegUrl(){ return siteBaseUrl() + '#/register'; }
function whatsappShareUrl(text){
  return 'https://wa.me/?text=' + encodeURIComponent(text);
}
function eventShareText(ev){
  return 'Register for ' + (ev.programName || ev.name) + ' - ' + festName() + '\n\nRegistration Link:\n' + eventRegUrl(ev);
}
async function copyText(text, okMsg){
  try{ await navigator.clipboard.writeText(text); toast(okMsg||'Copied!'); }
  catch(err){
    const ta = document.createElement('textarea');
    ta.value = text; ta.style.position='fixed'; ta.style.opacity='0';
    document.body.appendChild(ta); ta.select();
    try{ document.execCommand('copy'); toast(okMsg||'Copied!'); }
    catch(e2){ toast('Could not copy — please copy the link manually.'); }
    ta.remove();
  }
}
function openShareEventModal(ev){
  const url = eventRegUrl(ev);
  const text = eventShareText(ev);
  const qrSrc = 'https://api.qrserver.com/v1/create-qr-code/?size=280x280&data=' + encodeURIComponent(url);
  showModal(`
    <button class="modal-close" data-action="close-modal">×</button>
    <h3 style="text-align:center;">Share this registration</h3>
    <div class="qr-box">
      <img src="${esc(qrSrc)}" alt="QR code for ${esc(ev.name)} registration">
      <p style="font-size:.85rem;color:var(--ink-soft);">${esc(ev.programName||ev.name)} · ${esc(eventTypeOf(ev))} · ${esc(ev.category)}</p>
      <div class="share-link-row">
        <input type="text" id="evRegLinkInput" readonly value="${esc(url)}">
        <button class="btn btn-primary btn-sm" data-action="copy-reg-link" data-id="${esc(ev.id)}">Copy</button>
      </div>
      <div style="display:flex; gap:10px; justify-content:center; margin-top:14px; flex-wrap:wrap;">
        <a class="share-btn wa" href="${esc(whatsappShareUrl(text))}" target="_blank" rel="noopener">📲 WhatsApp</a>
        <a class="share-btn" href="https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent('Register for '+(ev.programName||ev.name)+' - '+festName())}" target="_blank" rel="noopener">✈️ Telegram</a>
        <button class="share-btn" data-action="native-share-reg" data-id="${esc(ev.id)}">📤 Share via device…</button>
      </div>
      <p class="results-count" style="margin-top:12px;margin-bottom:0;">${eventRegCount(ev)} registered so far${ev.maxParticipants?' · maximum '+esc(ev.maxParticipants):''}</p>
    </div>
  `);
}

/* ============================================================
   REGISTRATION PAGE  (#/register  and  #/register/<event-slug>)
   ============================================================ */
function registrationBannerHtml(){
  const open = registrableEvents().filter(e=>eventRegWindowOpen(e));
  return `<div class="reg-banner">
    <h2>📝 Register for ${esc(festName())}</h2>
    <p>${open.length} programme${open.length===1?'':'s'} currently open for online registration. Choose an event, fill the form, and your entry reaches the admin panel instantly.</p>
    <div class="reg-actions">
      <a class="btn btn-gold" href="#/register">🖊️ Start Registration</a>
      <a class="btn btn-outline" href="#events">Browse all events</a>
    </div>
  </div>`;
}
function registrationProgressHtml(category, regNumber){
  const p = participationProgress(regNumber, category);
  const totalPct = p.maxTotal>0 ? Math.min(100, Math.round((p.total/p.maxTotal)*100)) : 0;
  return `<div class="prog-panel" id="regProgressHost">
    <h4>${esc(category)} Participation Requirement</h4>
    <p class="prog-note">${regNumber
      ? 'Live progress for registration number <b>' + esc(regNumber) + '</b>. Enter your registration number to track it.'
      : 'Enter your registration number (chest number) to see your live progress.'}</p>
    ${p.stage>=p.minStage && p.nonStage>=p.minNonStage
      ? '<div class="prog-alert ok">✓ Minimum requirement met for ' + esc(category) + '. You can still register until you reach ' + p.maxTotal + ' programs.</div>'
      : '<div class="prog-alert">Complete the minimums below to be eligible for the full programme list.</div>'}
    ${progressItemHtml('Stage Programs', p.stage, p.minStage, p.maxTotal, p.stageOk)}
    ${progressItemHtml('Non-Stage Programs', p.nonStage, p.minNonStage, p.maxTotal, p.nonStageOk)}
    <div class="prog-item">
      <div class="prog-top"><span>Total Programs</span><span class="${p.atMax?'short':'ok'}">${p.total} / ${p.maxTotal}</span></div>
      <div class="prog-track"><div class="prog-fill ${p.atMax?'full':'done'}" style="width:${totalPct}%"></div></div>
    </div>
    ${p.atMax ? '<div class="prog-alert">Maximum program limit reached for your category — ' + esc(category) + ' allows ' + p.maxTotal + ' programs in total.</div>' : ''}
  </div>`;
}
function progressItemHtml(label, val, min, max, ok){
  const pct = max>0 ? Math.max(3, Math.min(100, Math.round((val/max)*100))) : 0;
  const full = val>=max;
  return `<div class="prog-item">
    <div class="prog-top"><span>${ok?'✓':'○'} ${esc(label)}</span><span class="${ok?'ok':'short'}">${val} / ${min} minimum ${ok?'✓':''}</span></div>
    <div class="prog-track"><div class="prog-fill ${full?'full':(ok?'done':'')}" style="width:${pct}%"></div></div>
  </div>`;
}
/* Event-details card for the register page. Extracted so the change
   handlers below can re-render it when the selection changes. */
function registerEventDetailsHtml(ev){
  if(!ev) return '';
  return `<div class="card" style="margin-top:16px;">
    <h4 style="margin-top:0;">Event details</h4>
    <div class="event-meta">
      <span>📅 ${fmtDate(ev.date)}</span>
      <span>🕐 ${fmtTime(ev.time)}</span>
      <span>📍 ${esc(ev.venue)}</span>
      <span>${ev.maxParticipants ? '👥 Maximum '+esc(ev.maxParticipants)+' participants' : '👥 No participant limit'}</span>
    </div>
    ${ev.rules ? `<h4 style="margin:16px 0 6px;font-size:.9rem;">Rules</h4><ul style="font-size:.82rem;color:var(--ink-soft);padding-left:18px;margin:0;">${ev.rules.split('\n').filter(Boolean).map(r=>`<li>${esc(r.trim())}</li>`).join('')}</ul>` : ''}
    <div class="share-row" style="margin-top:16px;">
      <button class="share-btn wa" href="${esc(whatsappShareUrl(eventShareText(ev)))}" target="_blank" rel="noopener">📲 WhatsApp</button>
      <button class="share-btn" data-action="share-reg-link" data-id="${esc(ev.id)}">📤 Share</button>
    </div>
  </div>`;
}
/* Surgical updates (no full render — that would wipe the details the
   student has already typed). */
function updateRegEventDetails(){
  const evSel = document.getElementById('regEvent');
  if(!evSel) return;
  const ev = STATE.events.find(x=>x.id===evSel.value) || null;
  const wrap = document.getElementById('regEventDetailsWrap');
  if(wrap) wrap.innerHTML = registerEventDetailsHtml(ev);
}
function renderRegister(slug){
  if(STATE.regSuccess) return renderRegisterSuccess(STATE.regSuccess);
  const ev = slug ? eventBySlug(slug) : null;
  if(slug && !ev){
    return `<section class="section"><div class="container">
      <div class="empty-state" style="padding:70px 10px;">
        <h2 style="font-size:1.4rem;">Event not found</h2>
        <p>This registration link may have been removed or mistyped.</p>
        <a class="btn btn-primary" href="#/register">Browse open events</a>
      </div>
    </div></section>`;
  }
  if(ev && isEventCancelled(ev)){
    return `<section class="section"><div class="container">
      <div class="card" style="max-width:640px;margin:40px auto;text-align:center;">
        <div class="event-cat">${esc(ev.category)}</div>
        <h3 style="font-size:1.5rem;">${esc(ev.name)}</h3>
        <div class="prog-alert" style="text-align:left;margin-top:16px;">${esc(ev.cancelledReason||'This event has been cancelled and is no longer accepting registrations.')}</div>
        <div style="margin-top:18px;"><a class="btn btn-primary" href="#/register">View other open events</a></div>
      </div>
    </div></section>`;
  }
  /* Registration is gated by the admin's registration status
     (OPEN/CLOSED) and event status, NOT by the event date — past-dated
     programmes must stay registrable until the admin closes them. */
  const open = registrableEvents().filter(e=>eventRegWindowOpen(e));
  /* Category first: the student picks a category, then the Programme
     dropdown offers only that category's open programmes. Default to
     the previously chosen category, falling back to the first one
     that actually has open programmes. */
  let cat;
  if(ev){
    cat = ev.category;
  } else {
    cat = PARTICIPATION_CATEGORIES.includes(STATE.regCategory) ? STATE.regCategory : '';
    if(!cat || !open.some(x=>x.category===cat)){
      cat = PARTICIPATION_CATEGORIES.find(c=>open.some(x=>x.category===c)) || PARTICIPATION_CATEGORIES[0];
    }
  }
  const events = ev ? [ev] : open.filter(e=>e.category===cat);
  const sel = ev ? ev.id : (events[0] ? events[0].id : '');
  const selEvent = STATE.events.find(e=>e.id===sel) || null;
  const teams = STATE.settings.rosterTeams || [];

  return `<section class="section">
    <div class="container">
      <div class="section-head">
        <div class="eyebrow">${esc(festSubtitle())}</div>
        <h2>📝 ${ev ? esc(ev.programName || ev.name) : 'Online Registration'}</h2>
        <p>${ev ? esc(ev.description || 'Fill the form below to register for this programme.') : 'Choose a category, pick a programme, fill in your details, and submit. Your entry is saved to the database and visible in the admin panel immediately.'}</p>
        <div style="margin-top:12px;display:flex;gap:8px;justify-content:center;flex-wrap:wrap;">
          ${ev ? `<span class="chip chip-open">${esc(eventTypeOf(ev))}</span><span class="chip chip-stage">${esc(ev.category)}</span>` : ''}
        </div>
      </div>
      ${!open.length ? '<div class="empty-state" style="padding:60px 10px;">No programmes are currently open for registration. Please check back soon or contact the coordinator.</div>' : `
      <div class="reg-grid">
        <div class="reg-form">
          <form data-action="submit-registration" data-event-id="${esc(sel)}">
            <div class="field">
              <label>Category <span class="req">*</span></label>
              <select name="category" id="regCategorySelect" required>
                ${PARTICIPATION_CATEGORIES.map(c=>`<option value="${esc(c)}" ${c===cat?'selected':''}>${esc(c)}</option>`).join('')}
              </select>
            </div>
            <div class="field">
              <label>Programme <span class="req">*</span></label>
              <select name="eventId" id="regEvent" required>
                ${events.length
                  ? events.map(e=>`<option value="${esc(e.id)}" ${e.id===sel?'selected':''}>${esc(e.name)} — ${esc(eventTypeOf(e))}</option>`).join('')
                  : `<option value="">— No open programmes in ${esc(cat)} —</option>`}
              </select>
            </div>
            <div class="field-row">
              <div class="field">
                <label>Full Name <span class="req">*</span></label>
                <input type="text" name="name" required placeholder="e.g. AHMED ZAKI" autocomplete="name">
              </div>
              <div class="field">
                <label>Registration No. / Chest No. <span class="req">*</span></label>
                <input type="text" name="regNumber" id="regNumberInput" required placeholder="e.g. 101" autocomplete="off">
              </div>
            </div>
            <div class="field-row">
              <div class="field">
                <label>Team / House <span class="req">*</span></label>
                <select name="team" required>
                  <option value="">— Select team —</option>
                  ${teams.map(t=>`<option value="${esc(t)}">${esc(t)}</option>`).join('')}
                </select>
              </div>
              <div class="field">
                <label>Class / Grade</label>
                <input type="text" name="klass" placeholder="e.g. 9">
              </div>
            </div>
            <div class="field-row">
              <div class="field">
                <label>Phone (WhatsApp)</label>
                <input type="tel" name="phone" placeholder="e.g. +91 98765 43210" autocomplete="tel">
              </div>
              <div class="field">
                <label>Email <span style="font-weight:400;color:var(--ink-soft);">(optional)</span></label>
                <input type="email" name="email" placeholder="you@example.com" autocomplete="email">
              </div>
            </div>
            <div class="field">
              <label>Notes <span style="font-weight:400;color:var(--ink-soft);">(optional)</span></label>
              <textarea name="notes" placeholder="Anything the coordinator should know (e.g. group name, song details)"></textarea>
            </div>
            <div class="reg-actions" style="justify-content:flex-start;margin-top:6px;">
              <button class="btn btn-primary" type="submit">Register Now</button>
              <a class="btn btn-ghost" href="#events">Back to events</a>
            </div>
            <p class="results-count" style="margin-top:14px;margin-bottom:0;">Duplicate registrations, cancelled events and category program limits are all checked automatically when you submit.</p>
          </form>
        </div>
        <div>
          ${registrationProgressHtml(cat, '')}
          <div id="regEventDetailsWrap">${registerEventDetailsHtml(selEvent)}</div>
        </div>
      </div>`}
    </div>
  </section>`;
}
function renderRegisterSuccess(payload){
  const r = payload.registration, ev = payload.event;
  return `<section class="section"><div class="container">
    <div class="card reg-done" style="max-width:640px;margin:30px auto;">
      <div class="tick">✓</div>
      <h3>Registration Confirmed</h3>
      <p style="color:var(--ink-soft);">Your entry for <b>${esc(ev.programName||ev.name)}</b> has been saved and sent to the admin panel.</p>
      <div class="reg-code">${esc(r.regNo)}</div>
      <div class="results-count" style="margin-bottom:18px;">Please note this reference number. Keep a screenshot.</div>
      <div style="text-align:left;max-width:420px;margin:0 auto;">
        <div class="event-meta">
          <span>👤 ${esc(r.name)}</span>
          <span>🪪 ${esc(r.regNumber)}</span>
          <span>🏠 ${esc(r.team)}</span>
          <span>🎭 ${esc(r.eventType)}</span>
          <span>📂 ${esc(r.category)}</span>
          <span>🕐 ${new Date(r.createdAt).toLocaleString()}</span>
        </div>
      </div>
      <div class="reg-actions" style="margin-top:22px;">
        <a class="btn btn-primary" href="#/register/${esc(eventSlug(ev))}">Register for another program</a>
        <a class="btn btn-ghost" href="#events">Back to events</a>
        <button class="share-btn" data-action="share-reg-link" data-id="${esc(ev.id)}">📤 Share</button>
      </div>
    </div>
  </div></section>`;
}


/* reveal-on-scroll */
let revealObserver = null;
function setupRevealObserver(){
  if(revealObserver) revealObserver.disconnect();
  revealObserver = new IntersectionObserver((entries)=>{
    entries.forEach(en=>{ if(en.isIntersecting){ en.target.classList.add('in'); revealObserver.unobserve(en.target); } });
  }, { threshold:.12 });
  document.querySelectorAll('.reveal').forEach(el=> revealObserver.observe(el));
}

/* ================= ROUTER =================
   Hash routes. Registration deep links look like:
     #/register                → all open events
     #/register/<event-slug>   → one specific event
   A clean path (/register/<slug>) is also accepted and rewritten to
   the hash on boot, so links shared on WhatsApp / Instagram work. */
window.addEventListener('hashchange', render);
function currentRoute(){ return (location.hash||'#home').replace('#','').replace(/^\/+/,''); }
function normalizeIncomingRoute(){
  /* /register/slug → #/register/slug  (only when we are on our own path) */
  const p = location.pathname || '';
  const m = p.match(/\/register\/([A-Za-z0-9._~%-]+)\/?$/);
  if(m && !location.hash){
    const slug = decodeURIComponent(m[1]);
    const ev = eventBySlug(slug);
    location.replace(location.origin + location.pathname.replace(/\/register\/[^/]+\/?$/,'') + '#/register/' + (ev ? eventSlug(ev) : slug));
  }
}
function render(){
  updateBrand();
  let route = currentRoute();
  /* The confirmation view is only meant to survive its own re-render; any
     route change away from the register view discards it. */
  if(STATE.regSuccess && route!=='register' && !(route.indexOf('register/')===0 && route.slice('register/'.length)===STATE.regSuccess.eventSlug)){
    STATE.regSuccess = null;
  }
  if(route==='tv'){ document.body.classList.add('tv-mode'); } else { document.body.classList.remove('tv-mode'); stopTVPolling(); }
  if(route==='points'){ ensurePointsMusic(); } else { stopPointsMusic(); }
  if(route==='home'){ ensureHomeMusic(); } else { stopHomeMusic(); }
  document.querySelectorAll('.nav-links a').forEach(a=>{
    a.classList.toggle('active', a.dataset.nav===route || (a.dataset.nav==='register' && route.indexOf('register')===0));
  });
  document.getElementById('navLinks').classList.remove('open');
  const app = document.getElementById('app');
  const pageKey = route.indexOf('register')===0 ? 'register' : route;
  const pageBg = STATE.settings.pageBg[pageKey];
  if(pageBg){
    app.style.background = pageBg.type==='image' ? ('center/cover no-repeat url("'+pageBg.value+'")') : pageBg.value;
  } else {
    app.style.background = '';
  }
  const renderers = { home:renderHome, events:renderEvents, schedule:renderSchedule, points:renderPoints, results:renderResults, winners:renderWinners, highlights:renderHighlights, exec:renderExec, teams:renderTeamsPage, about:renderAbout, contact:renderContact, admin:renderAdmin, tv:renderTV };
  let html;
  if(route==='register' || route.indexOf('register/')===0){
    const slug = route.indexOf('register/')===0 ? route.slice('register/'.length).split('?')[0] : '';
    html = renderRegister(decodeURIComponent(slug||''));
  } else {
    const fn = renderers[route] || renderHome;
    html = fn();
  }
  app.innerHTML = html;
  window.scrollTo({top:0, behavior:'instant' in document.documentElement.style ? 'instant' : 'auto'});
  setupRevealObserver();
}

/* ================= HOME ================= */
function renderHome(){
  const hero = STATE.settings.hero;
  let heroBgHtml = '';
  let heroStyle = '';
  if(hero.type==='video' && hero.videoUrl){
    heroBgHtml = '<video class="hero-video" src="'+esc(hero.videoUrl)+'" '+(hero.autoplay!==false?'autoplay muted loop playsinline':'controls')+'></video><div class="hero-overlay"></div>';
  } else if(hero.type==='image' && hero.imageUrl){
    const resolvedHeroImg = photoSrc(hero.imageUrl);
    heroStyle = 'background:center/cover no-repeat url('+"'"+resolvedHeroImg+"'"+');';
    heroBgHtml = '<div class="hero-overlay"></div>';
  } else {
    heroStyle = 'background:'+(hero.colorValue||'linear-gradient(160deg,#0E3B2E,#14614A 55%,#072019)')+';';
  }
  const live = visibleEvents();
  const upcoming = live.filter(e=>computeStatus(e)==='Upcoming').length;
  const ongoing = live.filter(e=>computeStatus(e)==='Ongoing').length;
  const completed = live.filter(e=>computeStatus(e)==='Completed').length;
  const open = registrableEvents().filter(e=>eventRegWindowOpen(e)).length;
  const featured = STATE.highlights.find(h=>h.featured==='yes') || STATE.highlights[0];
  const featuredEvents = live.filter(e=>computeStatus(e)!=='Completed').slice(0,6);

  return `
  <section class="hero" style="${heroStyle}">
    ${heroBgHtml}
    <div class="hero-pattern">${patternRepeat()}</div>
    <div class="container hero-inner">
      <div class="fest-lockup">
        <img class="fest-logo" src="${esc(festLogoSrc())}" alt="${esc(festName())} — ${esc(festSubtitle())}" onerror="this.onerror=null;this.src='${esc(FEST_LOGO_DATA_URL)}';">
        <div class="fest-sub">${esc(festSubtitle())}</div>
        <h1 class="fest-name">${festNameHtml()}</h1>
        <div class="fest-tagline">${esc(festTagline())}</div>
      </div>
      <div class="hero-ribbon">🏆 ${STATE.settings.rosterTeams.length} Houses · ${live.length} Programmes · The Clash of Talent</div>
      <div class="hero-actions">
        <a href="#register" class="btn btn-gold">📝 Register Online</a>
        <a href="#events" class="btn btn-outline">Explore Events</a>
        <a href="#points" class="btn btn-outline">Point Table</a>
        ${homeMusicToggleHtml()}
      </div>
    </div>
  </section>

  <section class="section section-tight">
    <div class="container">
      <div class="stat-strip">
        <div class="stat-tile reveal"><b>${live.length}</b><span>Total Programmes</span></div>
        <div class="stat-tile reveal"><b>${upcoming}</b><span>Upcoming</span></div>
        <div class="stat-tile reveal"><b>${ongoing}</b><span>Ongoing Today</span></div>
        <div class="stat-tile reveal"><b>${completed}</b><span>Completed</span></div>
      </div>
    </div>
  </section>

  <section class="section section-alt">
    <div class="container">
      <div class="section-head">
        <div class="eyebrow">The Clash</div>
        <h2>🏆 ${esc(heading('homePoints','Team Leaderboard'))}</h2>
        <p>Live cumulative standings across all events — recalculated the moment a result is entered.</p>
      </div>
      ${teamLeaderboardShellHtml()}
      <div style="text-align:center; margin-top:24px;"><a href="#points" class="btn btn-ghost">Full point table →</a></div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="section-head">
        <div class="eyebrow">Individual Ranking</div>
        <h2>🥇 ${esc(heading('homeIndividual','Individual Leaderboard'))}</h2>
        <p>Top three in each category — Senior, Junior, Sub Junior and General, ranked separately.</p>
      </div>
      <div class="cat-tabs" id="indCatTabs">
        ${PARTICIPATION_CATEGORIES.map(c=>`<button class="cat-tab ${STATE.individualCategory===c?'active':''}" data-action="ind-category" data-val="${esc(c)}">${esc(c)}</button>`).join('')}
      </div>
      <div id="indLeaderboardHost">${individualTop3Html(STATE.individualCategory)}</div>
      <div style="text-align:center; margin-top:24px;"><a href="#teams" class="btn btn-ghost">All participants →</a></div>
    </div>
  </section>

  <section class="section section-alt">
    <div class="container">
      <div class="section-head">
        <div class="eyebrow">Online Registration</div>
        <h2>${esc(heading('homeRegister','Online Registration'))}</h2>
      </div>
      ${registrationBannerHtml()}
      ${featuredEvents.length ? `
        <div class="grid grid-3" style="margin-top:26px;">
          ${featuredEvents.map(e=>eventCardHtml(e)).join('')}
        </div>` : ''}
    </div>
  </section>

  ${featured ? `
  <section class="section">
    <div class="container">
      <div class="section-head">
        <div class="eyebrow">Featured</div>
        <h2>${esc(heading('homeFeatured','Featured Highlight'))}</h2>
        <div class="divider"><span class="line"></span><span class="mark" style="color:var(--gold); width:16px;">${starSVG()}</span><span class="line"></span></div>
      </div>
      ${videoCardHtml(featured, true)}
      <div style="text-align:center; margin-top:26px;"><a href="#highlights" class="btn btn-ghost">See all highlights →</a></div>
    </div>
  </section>` : ''}

  <section class="section section-alt">
    <div class="container">
      <div class="section-head">
        <div class="eyebrow">Search</div>
        <h2>${esc(heading('results','Event Results'))}</h2>
        <p>Look up any student by name, registration number, team or event.</p>
      </div>
      ${resultsSearchHtml(true)}
    </div>
  </section>
  `;
}

/* ============================================================
   TEAM LEADERBOARD — derived live from df:points.
   Rank is always recomputed; nothing here is hard-coded.
   ============================================================ */
function sortedTeamStandings(){
  return STATE.points.slice().sort((a,b)=>(b.points||0)-(a.points||0));
}
/* The team member with the highest individual points = the team leader. */
function teamLeaderName(team){
  const members = STATE.teamMembers.filter(m=>m.team===team && (m.points||0)>0);
  if(!members.length) return '';
  members.sort((a,b)=>(b.points||0)-(a.points||0));
  return members[0].name;
}
function teamLeaderboardShellHtml(){
  const sorted = sortedTeamStandings();
  if(!sorted.length) return '<div class="empty-state">The point table is empty. Results will appear here as soon as the admin applies points.</div>';
  const top = sorted.slice(0,3);
  const medal = ['🥇','🥈','🥉'];
  const rest = sorted.slice(3);
  const max = sorted[0].points||1;
  const slot = (p,i)=>{
    const cls = 'p-1'; const label = medal[i];
    const leader = teamLeaderName(p.team);
    return `<div class="podium-slot ${cls}">
      <div class="podium-medal">${label}</div>
      <div class="podium-team">${esc(p.team)}</div>
      ${leader?`<div class="podium-leader">Leader: ${esc(leader)}</div>`:'<div class="podium-leader" style="opacity:.6">Leader: —</div>'}
      <div class="podium-pts">${p.points||0} PTS</div>
    </div>`;
  };
  return `<div class="lb-shell">
    <h3 class="lb-title">🏆 Team Leaderboard</h3>
    <div class="lb-sub">Live cumulative standings across all events</div>
    <div class="lb-podium">
      ${top[1] ? slot(top[1],1) : '<div class="podium-slot p-2"></div>'}
      ${top[0] ? slot(top[0],0) : ''}
      ${top[2] ? slot(top[2],2) : '<div class="podium-slot p-3"></div>'}
    </div>
    ${rest.length ? `<div class="lb-list">
      ${rest.map((p,i)=>{
        const r = i+4;
        return `<div class="lb-row">
          <div class="lb-rank">#${r}</div>
          <div class="lb-dot" style="background:${esc(teamColor(p.team))}"></div>
          <div class="lb-body">
            <div class="lb-name">${esc(p.team)}</div>
            <div class="lb-leader">${teamLeaderName(p.team)?'Leader: '+esc(teamLeaderName(p.team)):'Leader: —'}</div>
            <div class="lb-bar" style="width:${Math.max(4, Math.round(((p.points||0)/max)*100))}%"></div>
          </div>
          <div class="lb-pts">${p.points||0} <span style="font-size:.6rem;letter-spacing:.12em">PTS</span></div>
        </div>`;
      }).join('')}
    </div>` : '<div class="lb-sub" style="margin:0">Complete ranking above — no further teams yet.</div>'}
  </div>`;
}

/* ============================================================
   INDIVIDUAL LEADERBOARD — top 3, strictly per category.
   Points come from df:teamMembers (auto-credited from results).
   ============================================================ */
function individualStandings(category){
  return STATE.teamMembers
    .filter(m=>m.category===category)
    .map(m=>Object.assign({}, m, { _points: Number(m.points)||0 }))
    .sort((a,b)=>b._points-a._points || String(a.name||'').localeCompare(String(b.name||'')));
}
function individualTop3Html(category){
  const top = individualStandings(category).slice(0,3);
  const medal = ['🥇','🥈','🥉'];
  if(!top.length){
    return '<div class="empty-state">No ' + esc(category) + ' participants yet. Once the admin enters results, the top three appear here automatically.</div>';
  }
  return `<div class="ind-grid">
    ${top.map((m,i)=>{
      const photo = photoSrc(m.photo) || avatarUrl(m.name||'participant');
      return `<div class="ind-card reveal ${i===0?'rank-1':''}" style="animation-delay:${i*90}ms">
        <div class="ind-medal">${medal[i]}</div>
        <img class="ind-avatar" src="${esc(photo)}" alt="${esc(m.name||'')}" onerror="this.onerror=null;this.src='${esc(avatarUrl(m.name||'p'))}';">
        <div class="ind-name">${esc(m.name||'—')}</div>
        <div class="ind-team">${m.chestNumber?esc(m.chestNumber)+' · ':''}${esc(m.team||'—')}</div>
        <div class="ind-pts">${m._points}<small>PTS</small></div>
      </div>`;
    }).join('')}
  </div>`;
}


function patternRepeat(){
  let cells = '';
  for(let i=0;i<24;i++){
    cells += `<g transform="translate(${(i%6)*140+30},${Math.floor(i/6)*140+30})"><polygon points="30,0 43,13 56,30 43,47 30,60 17,47 4,30 17,13" fill="none" stroke="#fff" stroke-width="2"/></g>`;
  }
  return `<svg width="100%" height="100%" viewBox="0 0 840 420" preserveAspectRatio="xMidYMid slice">${cells}</svg>`;
}

/* ================= EVENTS ================= */
function renderEvents(){
  const f = STATE.filters;
  const source = STATE.isAdmin ? STATE.events : visibleEvents();
  let list = source.filter(e=>{
    if(f.q && !e.name.toLowerCase().includes(f.q.toLowerCase())) return false;
    if(f.category && e.category !== f.category) return false;
    if(f.date && e.date !== f.date) return false;
    if(f.venue && e.venue !== f.venue) return false;
    return true;
  });
  const catOptions = CATEGORIES.map(c=>`<option value="${esc(c)}" ${f.category===c?'selected':''}>${esc(c)}</option>`).join('');
  const dateOptions = FEST_DATES.map(d=>`<option value="${d}" ${f.date===d?'selected':''}>${fmtDate(d)}</option>`).join('');
  const venueOptions = VENUES.map(v=>`<option value="${esc(v)}" ${f.venue===v?'selected':''}>${esc(v)}</option>`).join('');

  return `
  <section class="section">
    <div class="container">
      <div class="section-head">
        <div class="eyebrow">All Events</div>
        <h2>${esc(heading('events','Festival Events'))}</h2>
        <p>${list.length} programme${list.length===1?'':'s'} shown${STATE.isAdmin?' (cancelled events stay visible to admins)':''}.</p>
      </div>
      <div class="filterbar">
        <input type="text" id="evSearch" placeholder="Search event name…" value="${esc(f.q)}">
        <select id="evCategory"><option value="">All Categories</option>${catOptions}</select>
        <select id="evDate"><option value="">All Dates</option>${dateOptions}</select>
        <select id="evVenue"><option value="">All Venues</option>${venueOptions}</select>
        <button class="btn btn-ghost btn-sm" data-action="clear-event-filters">Clear</button>
      </div>
      <div class="results-count">${list.length} event${list.length===1?'':'s'} found</div>
      <div class="grid grid-3">
        ${list.map(e=>eventCardHtml(e)).join('') || '<div class="empty-state">No events match your filters.</div>'}
      </div>
    </div>
  </section>`;
}
function eventTypeChipHtml(ev){
  const t = eventTypeOf(ev);
  return `<span class="chip ${t==='Stage'?'chip-stage':'chip-nonstage'}">${t==='Stage'?'🎭':'📝'} ${esc(t)}</span>`;
}
function eventStatusChipHtml(ev){
  const st = eventStatusOf(ev);
  if(st!=='ACTIVE') return `<span class="chip chip-${st==='CANCELLED'?'cancelled':'inactive'}">${esc(st)}</span>`;
  const open = eventRegWindowOpen(ev);
  const rs = eventRegStatus(ev);
  const label = rs==='CANCELLED' ? 'CANCELLED' : (open ? 'REGISTRATION OPEN' : 'REGISTRATION CLOSED');
  const cls = rs==='CANCELLED' ? 'chip-cancelled' : (open ? 'chip-open' : 'chip-closed');
  return `<span class="chip ${cls}">${open?'● ':''}${esc(label)}</span>`;
}
function eventCardHtml(e){
  const status = computeStatus(e);
  const cancelled = isEventCancelled(e);
  const open = eventRegWindowOpen(e);
  const taken = eventRegCount(e);
  return `<div class="card event-card reveal" ${cancelled?'style="opacity:.72;"':''}>
    <div class="event-top">
      <div>
        <div class="event-cat">${esc(e.category)}${e.eventCode?' · No. '+esc(e.eventCode):''}</div>
        <h3>${esc(e.name)}</h3>
      </div>
      <span class="badge ${badgeClass(status)}">${status}</span>
    </div>
    <div style="display:flex;gap:6px;flex-wrap:wrap;margin:2px 0 4px;">
      ${eventTypeChipHtml(e)} ${eventStatusChipHtml(e)}
    </div>
    <div class="event-meta">
      <span>📅 ${fmtDate(e.date)}</span>
      <span>🕐 ${fmtTime(e.time)}</span>
      <span>📍 ${esc(e.venue)}</span>
      ${e.maxParticipants ? `<span>👥 ${taken} of ${esc(e.maxParticipants)} registered</span>` : (taken ? `<span>👥 ${taken} registered</span>` : '')}
    </div>
    ${e.description ? `<p style="font-size:.85rem;color:var(--ink-soft);margin:4px 0 0;">${esc(e.description)}</p>` : ''}
    ${cancelled
      ? `<div class="prog-alert" style="margin-top:10px;">${esc(e.cancelledReason||'This event has been cancelled.')}</div>`
      : `<div class="share-row" style="margin-top:12px;">
          ${open
            ? `<a class="btn btn-primary btn-sm" href="#/register/${esc(eventSlug(e))}">Register Now</a>`
            : `<button class="btn btn-ghost btn-sm" disabled>${esc(eventRegClosedReason(e)||'Registration Closed')}</button>`}
          ${e.rules ? `<button class="btn btn-ghost btn-sm" data-action="view-event-rules" data-id="${esc(e.id)}">📋 Rules</button>` : ''}
          <button class="share-btn" data-action="copy-reg-link" data-id="${esc(e.id)}">📋 Link</button>
          <button class="share-btn" data-action="share-reg-link" data-id="${esc(e.id)}">📤 Share</button>
        </div>`}
  </div>`;
}
function openEventRulesModal(id){
  const e = STATE.events.find(x=>x.id===id); if(!e) return;
  const rules = (e.rules||'').split('\n').map(r=>r.trim()).filter(Boolean);
  showModal(`
    <button class="modal-close" data-action="close-modal">×</button>
    <h3>${esc(e.name)}</h3>
    <p style="font-size:.85rem;color:var(--ink-soft);margin-top:-6px;">${esc(eventTypeOf(e))} · ${esc(e.category)}${isEventCancelled(e)?' · <b style="color:var(--danger)">CANCELLED</b>':''}</p>
    <h4 style="margin:14px 0 4px;font-size:.95rem;">About</h4>
    <p style="font-size:.88rem;">${esc(e.description||'No description published for this programme.')}</p>
    <h4 style="margin:16px 0 8px;font-size:.95rem;">Rules</h4>
    <ol style="padding-left:20px; display:flex; flex-direction:column; gap:10px; margin:0;">
      ${rules.map(r=>`<li>${esc(r)}</li>`).join('') || '<li>No specific rules published for this event.</li>'}
    </ol>
    <div class="modal-actions">
      ${isEventLive(e) ? `<a class="btn btn-primary btn-sm" href="#/register/${esc(eventSlug(e))}">Register for this event</a>` : ''}
    </div>
  `);
}

/* ================= SCHEDULE ================= */
function renderSchedule(){
  const grouped = {};
  STATE.events.forEach(e=>{ (grouped[e.date] = grouped[e.date]||[]).push(e); });
  // Days containing newly added events are pushed to the TOP of the schedule
  // (newest first), so a just-added event is never stuck at the bottom.
  // Days without new events stay in normal chronological order.
  const dateKeys = Object.keys(grouped).sort((a,b)=>{
    const na = Math.max(0, ...grouped[a].map(e=>e.createdAt||0));
    const nb = Math.max(0, ...grouped[b].map(e=>e.createdAt||0));
    if(na>0 || nb>0){ if(na>0 && nb>0) return nb-na; return na>0 ? -1 : 1; }
    return a.localeCompare(b);
  });
  return `
  <section class="section">
    <div class="container">
      <div class="section-head">
        <div class="eyebrow">Day By Day</div>
        <h2>${esc(heading('schedule','Festival Schedule'))}</h2>
        <p>${STATE.isAdmin ? 'Click Edit on any row to update its date, time or venue.' : 'Full running order for the week.'}</p>
      </div>
      ${dateKeys.map(d=>`
        <h3 style="margin:34px 0 12px;">${fmtDate(d)}</h3>
        <div class="table-wrap">
          <table>
            <thead><tr><th>Event</th><th>Time</th><th>Venue</th><th>Status</th>${STATE.isAdmin?'<th></th>':''}</tr></thead>
            <tbody>
              ${grouped[d].slice().sort(compareEvents).map(e=>`
                <tr>
                  <td>${esc(e.name)}</td>
                  <td>${fmtTime(e.time)}</td>
                  <td>${esc(e.venue)}</td>
                  <td><span class="badge ${badgeClass(computeStatus(e))}">${computeStatus(e)}</span></td>
                  ${STATE.isAdmin?`<td><button class="icon-btn" data-action="edit-event" data-id="${e.id}">Edit</button></td>`:''}
                </tr>`).join('')}
            </tbody>
          </table>
        </div>
      `).join('')}
    </div>
  </section>`;
}

/* ================= POINTS ================= */
function pointsTableHtml(sorted){
  const cols = STATE.settings.customPointColumns || [];
  return `<div class="table-wrap"><table>
    <thead><tr><th>Rank</th><th>Team / House</th><th>Points</th>${cols.map(c=>`<th>${esc(c.label)}</th>`).join('')}</tr></thead>
    <tbody>
      ${sorted.map((p,i)=>`
        <tr>
          <td><span class="rank-badge ${i===0?'rank-1':''}">${starSVG()}<span>${i+1}</span></span></td>
          <td><span style="display:inline-flex;align-items:center;gap:8px;"><span style="width:10px;height:10px;border-radius:50%;background:${esc(teamColor(p.team))};display:inline-block;"></span>${esc(p.team)}</span></td>
          <td class="points-cell">${p.points}</td>
          ${cols.map(c=>`<td>${esc(p[c.key]||'')}</td>`).join('')}
        </tr>`).join('')}
    </tbody>
  </table></div>`;
}
function categoryFieldMax(field){
  return Math.max(0, ...STATE.points.map(p=>p[field]||0));
}
function isCategoryLeader(field, val){
  const max = categoryFieldMax(field);
  return max>0 && (val||0)===max;
}
function catRowHtml(label, field, val){
  const lead = isCategoryLeader(field, val);
  return `<div class="pb-row ${lead?'pb-leader':''}"><span>${label} ${lead?'<span title="Leading">👑</span>':''}</span><b>${val||0}</b></div>`;
}
function pointsCardHtml(p, rank){
  const cols = STATE.settings.customPointColumns || [];
  return `<div class="card reveal">
    <div class="event-top">
      <div style="display:flex; align-items:center; gap:12px;">
        <span class="rank-badge ${rank===1?'rank-1':''}">${starSVG()}<span>${rank}</span></span>
        <span style="width:14px;height:14px;border-radius:50%;background:${esc(teamColor(p.team))};display:inline-block;"></span>
        <h3 style="margin:0;">${esc(p.team)}</h3>
      </div>
      <div class="points-cell" style="font-size:1.5rem;">${p.points||0}</div>
    </div>
    <div class="points-breakdown">
      <div class="pb-block">
        <div class="pb-title">Events-Category</div>
        ${catRowHtml('Individual','genIndividual',p.genIndividual)}
        ${catRowHtml('Group','genGroup',p.genGroup)}
        ${catRowHtml('General','genGeneral',p.genGeneral)}
      </div>
      <div class="pb-block">
        <div class="pb-title">Category-wise</div>
        ${catRowHtml('Senior','catSenior',p.catSenior)}
        ${catRowHtml('Junior','catJunior',p.catJunior)}
        ${catRowHtml('Sub Junior','catSubJunior',p.catSubJunior)}
        ${catRowHtml('General','catGeneral',p.catGeneral||0)}
      </div>
      <div class="pb-block">
        <div class="pb-title">Event Type</div>
        ${catRowHtml('Stage Events','evtStage',p.evtStage)}
        ${catRowHtml('Off-Stage Events','evtNonStage',p.evtNonStage)}
      </div>
      ${cols.length ? `<div class="pb-block"><div class="pb-title">More</div>${cols.map(c=>`<div class="pb-row"><span>${esc(c.label)}</span><b>${esc(p[c.key]||'')}</b></div>`).join('')}</div>` : ''}
    </div>
  </div>`;
}
function categoryLeadersStripHtml(){
  const fields = [{key:'catSenior', label:'Senior'},{key:'catJunior', label:'Junior'},{key:'catSubJunior', label:'Sub Junior'},{key:'catGeneral', label:'General'}];
  return `<div class="grid grid-3" style="margin-bottom:26px;">
    ${fields.map(f=>{
      const max = categoryFieldMax(f.key);
      const leaders = max>0 ? STATE.points.filter(p=>(p[f.key]||0)===max) : [];
      return `<div class="card reveal" style="text-align:center;">
        <div class="eyebrow">${f.label} Leader</div>
        ${leaders.length ? leaders.map(l=>`
          <div style="display:flex; align-items:center; justify-content:center; gap:8px; margin-top:8px;">
            <span style="width:12px;height:12px;border-radius:50%;background:${esc(teamColor(l.team))};display:inline-block;"></span>
            <h3 style="margin:0;font-size:1.1rem;">👑 ${esc(l.team)}</h3>
          </div>
          <div class="points-cell" style="margin-top:4px;">${max} pts</div>
        `).join('<div style="font-size:.75rem;color:var(--ink-soft);margin:2px 0;">tied with</div>') : `<p style="color:var(--ink-soft);font-size:.85rem;margin-top:8px;">No scores yet</p>`}
      </div>`;
    }).join('')}
  </div>`;
}
function pointsMusicToggleHtml(){
  if(!STATE.settings.pointsMusicUrl) return '';
  const audio = document.getElementById('pointsBgAudio');
  const playing = audio && !audio.paused;
  return `<button class="btn btn-ghost btn-sm" data-action="toggle-points-music">${playing?'🔊 Music On':'🔇 Music Off'}</button>`;
}
function homeMusicToggleHtml(){
  if(!STATE.settings.homeMusicUrl) return '';
  const audio = document.getElementById('homeBgAudio');
  const playing = audio && !audio.paused;
  return `<button class="btn btn-outline" data-action="toggle-home-music">${playing?'🔊 Music On':'🔇 Music Off'}</button>`;
}
function renderPoints(){
  const sorted = sortedTeamStandings();
  return `
  <section class="section">
    <div class="container">
      <div class="section-head">
        <div class="eyebrow">Standings</div>
        <h2>${esc(heading('points','Points Table'))}</h2>
        <p>Total points for each house, broken down by General, Category-wise and Event Type.</p>
        <div style="margin-top:14px; display:flex; gap:10px; justify-content:center; flex-wrap:wrap;"><a href="#tv" class="btn btn-primary btn-sm">📺 TV Display Mode</a>${pointsMusicToggleHtml()}</div>
      </div>
      ${teamLeaderboardShellHtml()}
      <div style="height:34px"></div>
      ${categoryLeadersStripHtml()}
      <div class="grid grid-3" style="grid-template-columns:1fr;">
        ${sorted.map((p,i)=>pointsCardHtml(p,i+1)).join('') || '<div class="empty-state">No teams yet.</div>'}
      </div>
    </div>
  </section>`;
}
function ensureBgMusic(audioId, url, autoplay){
  if(!url) return;
  let audio = document.getElementById(audioId);
  if(!audio){
    audio = document.createElement('audio');
    audio.id = audioId;
    audio.loop = true;
    audio.style.display = 'none';
    document.body.appendChild(audio);
  }
  if(audio.dataset.src !== url){ audio.src = url; audio.dataset.src = url; }
  if(autoplay !== false){
    const p = audio.play();
    if(p && p.catch){ p.catch(()=>{ showMusicPlayPrompt(audioId); }); }
  }
}
function stopBgMusic(audioId){
  const audio = document.getElementById(audioId);
  if(audio && !audio.paused) audio.pause();
  removeMusicPlayPrompt(audioId);
}
function ensurePointsMusic(){
  ensureBgMusic('pointsBgAudio', photoSrc(STATE.settings.pointsMusicUrl), STATE.settings.pointsMusicAutoplay);
}
function stopPointsMusic(){ stopBgMusic('pointsBgAudio'); }
function ensureHomeMusic(){
  ensureBgMusic('homeBgAudio', photoSrc(STATE.settings.homeMusicUrl), STATE.settings.homeMusicAutoplay);
}
function stopHomeMusic(){ stopBgMusic('homeBgAudio'); }
function showMusicPlayPrompt(audioId){
  const promptId = 'musicPlayPrompt_'+audioId;
  if(document.getElementById(promptId)) return;
  const btn = document.createElement('button');
  btn.id = promptId;
  btn.className = 'btn btn-gold music-prompt-btn';
  btn.textContent = '🎵 Tap to Play Music';
  btn.addEventListener('click', ()=>{
    const a = document.getElementById(audioId);
    if(a) a.play().catch(()=>{});
    btn.remove();
  });
  document.body.appendChild(btn);
}
function removeMusicPlayPrompt(audioId){
  const btn = document.getElementById('musicPlayPrompt_'+audioId);
  if(btn) btn.remove();
}

/* ================= TV DISPLAY MODE ================= */
let tvPollTimer = null;
let lastCelebrateTs = undefined;
async function startTVPolling(){
  if(tvPollTimer) return;
  if(lastCelebrateTs === undefined){
    const cel = await dbGet('df:celebrate');
    lastCelebrateTs = cel ? cel.ts : null;
  }
  tvPollTimer = setInterval(async ()=>{
    if(currentRoute()!=='tv'){ stopTVPolling(); return; }
    const freshPoints = await dbGet('df:points'); if(freshPoints) STATE.points = freshPoints;
    const cel = await dbGet('df:celebrate');
    if(cel && cel.ts && cel.ts !== lastCelebrateTs){
      lastCelebrateTs = cel.ts;
      playCelebration(cel.message || '🎉 Congratulations!');
    }
    render();
  }, 8000);
}
function stopTVPolling(){
  if(tvPollTimer){ clearInterval(tvPollTimer); tvPollTimer = null; }
  lastCelebrateTs = undefined;
}
function renderTV(){
  const sorted = STATE.points.slice().sort((a,b)=>b.points-a.points);
  const maxPoints = Math.max(1, ...sorted.map(p=>p.points||0));
  const mode = STATE.tvViewMode || 'list';
  startTVPolling();
  const listHtml = `
    <div class="tv-list">
      ${sorted.map((p,i)=>`
        <div class="tv-row">
          <div class="tv-rank">${i+1}</div>
          <div class="tv-dot" style="background:${esc(teamColor(p.team))};"></div>
          <div class="tv-team">${esc(p.team)}</div>
          <div class="tv-points">${p.points}</div>
        </div>`).join('') || '<div class="tv-team">No teams yet.</div>'}
    </div>`;
  const graphHtml = `
    <div class="tv-graph">
      ${sorted.map(p=>{
        const pct = Math.max(3, Math.round((p.points/maxPoints)*100));
        return `<div class="tv-bar-col">
          <div class="tv-bar-value">${p.points}</div>
          <div class="tv-bar" style="height:${pct}%; background:${esc(teamColor(p.team))};"></div>
          <div class="tv-bar-label">${esc(p.team)}</div>
        </div>`;
      }).join('') || '<div class="tv-team">No teams yet.</div>'}
    </div>`;
  return `
  <div class="tv-screen">
    <button class="btn btn-outline tv-exit" data-action="exit-tv">✕ Exit TV Mode</button>
    <div class="tv-header">
      <div class="eyebrow" style="color:#E9CE84;">Live Standings</div>
      <h1>${esc(STATE.settings.siteTitle)}</h1>
    </div>
    <div class="tv-toggle">
      <button class="${mode==='list'?'active':''}" data-action="tv-view" data-mode="list">📋 List</button>
      <button class="${mode==='graph'?'active':''}" data-action="tv-view" data-mode="graph">📊 Graph</button>
    </div>
    ${mode==='graph' ? graphHtml : listHtml}
    <div class="tv-footer-note">Updates automatically · Last refreshed ${new Date().toLocaleTimeString()}</div>
  </div>`;
}
function spawnConfetti(count){
  const colors = ['#C7A028','#146B52','#A23B2E','#2C7DA0','#E9CE84','#8B5CF6','#22D3A0','#ffffff'];
  for(let i=0;i<count;i++){
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.left = (Math.random()*100)+'vw';
    piece.style.background = colors[Math.floor(Math.random()*colors.length)];
    piece.style.animationDuration = (2.5+Math.random()*2)+'s';
    piece.style.animationDelay = (Math.random()*0.6)+'s';
    document.body.appendChild(piece);
    setTimeout(()=>piece.remove(), 5500);
  }
}
function playCelebration(message){
  const banner = document.createElement('div');
  banner.className = 'celebration-banner';
  banner.textContent = message;
  document.body.appendChild(banner);
  requestAnimationFrame(()=> banner.classList.add('show'));
  setTimeout(()=>{ banner.classList.remove('show'); setTimeout(()=>banner.remove(), 500); }, 4000);
  if(!prefersReducedMotion()) spawnConfetti(60);
}

/* ================= PREMIUM WINNER CELEBRATION SCREEN ================= */
function prefersReducedMotion(){
  return !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
}
function ordinal(n){
  if(n===undefined || n===null || isNaN(n)) return '—';
  const s = ['th','st','nd','rd'], v = n%100;
  return n+(s[(v-20)%10]||s[v]||s[0]);
}
function achievementBadge(position){
  const map = { 1:'🏆 Champion', 2:'🥈 Runner-up', 3:'🥉 Third Place' };
  return map[position] || '⭐ Achiever';
}
function ribbonLabel(position){ return position===1 ? 'CHAMPION' : 'WINNER'; }
function trophySVG(){
  return `<svg class="celebrate-trophy" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFF3C4"/>
        <stop offset="45%" stop-color="#F5D061"/>
        <stop offset="100%" stop-color="#B8892B"/>
      </linearGradient>
    </defs>
    <path d="M30 30 C10 30 10 55 30 58" fill="none" stroke="url(#goldGrad)" stroke-width="6" stroke-linecap="round"/>
    <path d="M90 30 C110 30 110 55 90 58" fill="none" stroke="url(#goldGrad)" stroke-width="6" stroke-linecap="round"/>
    <path d="M32 22 H88 C88 55 78 68 60 68 C42 68 32 55 32 22 Z" fill="url(#goldGrad)"/>
    <rect x="54" y="68" width="12" height="18" fill="url(#goldGrad)"/>
    <path d="M42 86 H78 L84 98 H36 Z" fill="url(#goldGrad)"/>
    <rect x="30" y="98" width="60" height="12" rx="4" fill="url(#goldGrad)"/>
    <path d="M40 26 C40 40 44 52 54 58" fill="none" stroke="rgba(255,255,255,.55)" stroke-width="3" stroke-linecap="round"/>
  </svg>`;
}
function spawnCelebrateParticles(container){
  if(!container) return;
  const colors = ['#F5D061','#8B5CF6','#22D3A0','#4F8FE8','#ffffff'];
  for(let i=0;i<26;i++){
    const p = document.createElement('div');
    p.className = 'celebrate-particle';
    const size = 4+Math.random()*8;
    p.style.width = size+'px'; p.style.height = size+'px';
    p.style.left = Math.random()*100+'%';
    p.style.background = colors[Math.floor(Math.random()*colors.length)];
    p.style.animationDuration = (6+Math.random()*6)+'s';
    p.style.animationDelay = (Math.random()*4)+'s';
    container.appendChild(p);
  }
}
function playSuccessChime(){
  try{
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if(!Ctx) return;
    const ctx = new Ctx();
    const now = ctx.currentTime;
    [523.25, 659.25, 783.99, 1046.5].forEach((f,i)=>{
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine'; osc.frequency.value = f;
      osc.connect(gain); gain.connect(ctx.destination);
      const t = now + i*0.12;
      gain.gain.setValueAtTime(0, t);
      gain.gain.linearRampToValueAtTime(0.18, t+0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, t+0.5);
      osc.start(t); osc.stop(t+0.55);
    });
  }catch(e){ /* audio unavailable — fail silently */ }
}
function celebrateEscHandler(e){ if(e.key==='Escape'){ closeCelebrationScreen(); } }
function openCelebrationScreen(data){
  closeCelebrationScreen();
  const reduce = prefersReducedMotion();
  const overlay = document.createElement('div');
  overlay.className = 'celebrate-overlay';
  overlay.setAttribute('role','dialog');
  overlay.setAttribute('aria-modal','true');
  overlay.setAttribute('aria-label','Congratulations '+(data.name||''));
  overlay.dataset.action = 'celebrate-backdrop';
  overlay.dataset.payload = JSON.stringify(data);
  const soundOn = STATE.celebrateSoundOn !== false;
  overlay.innerHTML = `
    <div class="celebrate-bg"></div>
    <div class="celebrate-particles" id="celebrateParticles"></div>
    <button class="celebrate-sound-toggle" data-action="celebrate-sound-toggle" aria-pressed="${soundOn}" title="Toggle celebration sound">${soundOn?'🔊':'🔇'}</button>
    <button class="celebrate-close" data-action="celebrate-close" aria-label="Close">✕</button>
    <div class="celebrate-card">
      ${trophySVG()}
      <div class="celebrate-ribbon">${ribbonLabel(data.position)}</div>
      <h1 class="celebrate-heading">Congratulations!</h1>
      <div class="celebrate-name">${esc(data.name||'')}</div>
      <div class="celebrate-meta-grid">
        <div class="celebrate-meta-item"><span>Group</span><b>${esc(data.group||'—')}</b></div>
        <div class="celebrate-meta-item"><span>Category</span><b>${esc(data.category||'—')}</b></div>
        <div class="celebrate-meta-item"><span>Position</span><b>${esc(ordinal(data.position))}</b></div>
        <div class="celebrate-meta-item"><span>Total Points</span><b>${esc(data.points!=null?String(data.points):'—')}</b></div>
      </div>
      <div class="celebrate-badge">${achievementBadge(data.position)}</div>
      <div class="celebrate-actions">
        <button class="glass-btn" data-action="celebrate-view-results">View Results</button>
        <button class="glass-btn" data-action="celebrate-download">⬇ Download Certificate</button>
        <button class="glass-btn" data-action="celebrate-close">Back to Dashboard</button>
      </div>
    </div>`;
  document.body.appendChild(overlay);
  document.body.style.overflow = 'hidden';
  if(!reduce){
    spawnCelebrateParticles(overlay.querySelector('#celebrateParticles'));
    spawnConfetti(90);
  }
  if(soundOn && !reduce){ playSuccessChime(); }
  const closeBtn = overlay.querySelector('.celebrate-close');
  if(closeBtn) closeBtn.focus();
  document.addEventListener('keydown', celebrateEscHandler);
}
function closeCelebrationScreen(){
  const overlay = document.querySelector('.celebrate-overlay');
  if(overlay) overlay.remove();
  document.body.style.overflow = '';
  document.removeEventListener('keydown', celebrateEscHandler);
}
function downloadCertificate(data){
  const canvas = document.createElement('canvas');
  canvas.width = 1200; canvas.height = 850;
  const ctx = canvas.getContext('2d');
  const grad = ctx.createLinearGradient(0,0,1200,850);
  grad.addColorStop(0,'#0B3D2E'); grad.addColorStop(.5,'#146B52'); grad.addColorStop(1,'#0B3D2E');
  ctx.fillStyle = grad; ctx.fillRect(0,0,1200,850);
  ctx.strokeStyle = '#F5D061'; ctx.lineWidth = 6; ctx.strokeRect(30,30,1140,790);
  ctx.strokeStyle = 'rgba(245,208,97,.5)'; ctx.lineWidth = 2; ctx.strokeRect(45,45,1110,760);
  ctx.textAlign = 'center';
  ctx.fillStyle = '#F5D061'; ctx.font = '700 30px Georgia, serif';
  ctx.fillText('CERTIFICATE OF ACHIEVEMENT', 600, 165);
  ctx.fillStyle = 'rgba(255,255,255,.85)'; ctx.font = '24px Georgia, serif';
  ctx.fillText('This certifies that', 600, 250);
  ctx.fillStyle = '#fff'; ctx.font = '700 58px Georgia, serif';
  ctx.fillText(data.name||'', 600, 335);
  ctx.font = '26px Georgia, serif'; ctx.fillStyle = 'rgba(255,255,255,.9)';
  const line2 = [achievementBadge(data.position).replace(/^[^\s]+\s/,''), data.category, data.group].filter(Boolean).join(' · ');
  ctx.fillText(line2, 600, 410);
  ctx.font = '22px Georgia, serif'; ctx.fillStyle = 'rgba(255,255,255,.75)';
  if(data.points!=null) ctx.fillText('Total Points: '+data.points, 600, 460);
  ctx.font = '20px Georgia, serif'; ctx.fillStyle = 'rgba(255,255,255,.65)';
  ctx.fillText('DarussalamFest.com — Darussalam Institution Annual Festival', 600, 730);
  ctx.font = '17px Georgia, serif';
  ctx.fillText(new Date().toLocaleDateString(), 600, 765);
  const link = document.createElement('a');
  link.download = (data.name||'certificate').replace(/[^a-z0-9]+/gi,'_').replace(/^_+|_+$/g,'')+'_certificate.png';
  link.href = canvas.toDataURL('image/png');
  link.click();
}

/* ================= RESULTS =================
   Search works across name, registration number, team/house, event
   and category. Results and registrations are both searched. */
function eventNamesInResults(){
  const seen = [];
  STATE.results.forEach(r=>{ if(r.eventName && seen.indexOf(r.eventName)<0) seen.push(r.eventName); });
  return seen.sort();
}
function allTeams(){ return (STATE.settings.rosterTeams||[]).slice().sort(); }
function resultsSearchHtml(compact){
  const f = STATE.resultFilters;
  return `<div class="search-shell" id="resultsSearchHost">
    <div class="search-row">
      <div class="search-input-wrap">
        <span class="ico">🔍</span>
        <input type="text" id="resSearch" class="search-input" placeholder="Enter student name / registration no. / team…" value="${esc(f.q)}" autocomplete="off">
        ${f.q ? '<button class="search-clear" data-action="clear-result-search" aria-label="Clear search">×</button>' : ''}
      </div>
    </div>
    <div class="filter-row">
      <select id="resCategory">
        <option value="">All Categories</option>
        ${PARTICIPATION_CATEGORIES.map(c=>`<option value="${esc(c)}" ${f.category===c?'selected':''}>${esc(c)}</option>`).join('')}
      </select>
      <select id="resEvent">
        <option value="">All Events</option>
        ${eventNamesInResults().map(n=>`<option value="${esc(n)}" ${f.event===n?'selected':''}>${esc(n)}</option>`).join('')}
      </select>
      <select id="resTeam">
        <option value="">All Teams</option>
        ${allTeams().map(t=>`<option value="${esc(t)}" ${f.team===t?'selected':''}>${esc(t)}</option>`).join('')}
      </select>
    </div>
    <div class="results-count" style="margin-top:12px;margin-bottom:0;">${resultsSearchCountHtml()}</div>
  </div>
  <div id="resultsSearchResults">${resultsSearchResultsHtml(compact)}</div>`;
}
function resultsSearchCountHtml(){
  if(!hasActiveResultSearch()) return '';
  const r = matchingResults().length;
  const g = matchingRegistrations().length;
  return `${r} result${r===1?'':'s'}${g?` · ${g} registration${g===1?'':'s'}`:''} found`;
}
function hasActiveResultSearch(){
  const f = STATE.resultFilters;
  return !!(f.q || f.category || f.event || f.team);
}
function matchText(hay, q){ return String(hay||'').toLowerCase().indexOf(q)>=0; }
function matchingResults(){
  const f = STATE.resultFilters;
  const q = f.q.trim().toLowerCase();
  return STATE.results.filter(r=>{
    if(f.event && r.eventName!==f.event) return false;
    const ev = STATE.events.find(e=>e.name===r.eventName);
    const evCat = ev ? ev.category : '';
    if(f.category && evCat!==f.category) return false;
    const teams = [r.firstTeam,r.secondTeam,r.thirdTeam].filter(Boolean);
    if(f.team && teams.indexOf(f.team)<0) return false;
    if(q){
      const names = [r.firstWinner,r.secondWinner,r.thirdWinner].filter(Boolean);
      const hit = names.some(n=>matchText(n,q)) || teams.some(t=>matchText(t,q)) || matchText(r.eventName,q);
      if(!hit) return false;
    }
    return true;
  }).sort((a,b)=> String(b.date).localeCompare(String(a.date)));
}
function matchingRegistrations(){
  const f = STATE.resultFilters;
  const q = f.q.trim().toLowerCase();
  if(!q) return [];
  return STATE.registrations.filter(r=>
    matchText(r.name,q) || matchText(r.regNumber,q) || matchText(r.regNo,q) ||
    matchText(r.team,q) || matchText(r.eventName,q) || matchText(r.category,q)
  ).slice(0,25);
}
function resultsSearchResultsHtml(compact){
  if(!hasActiveResultSearch()){
    if(compact) return '<div class="empty-state" style="padding:26px 10px;">Start typing to search results.</div>';
    return '';
  }
  const res = matchingResults();
  const regs = matchingRegistrations();
  if(!res.length && !regs.length){
    return '<div class="empty-state" style="padding:36px 10px;">No results match your search. Try a different name, registration number, team or event.</div>';
  }
  const regHtml = regs.length ? `
    <h3 style="margin:22px 0 10px;font-size:1.05rem;">Matching registrations (${regs.length})</h3>
    ${regs.map(r=>{
      const pos = r.status==='APPROVED'?'✓':(r.status==='REJECTED'?'✕':'…');
      return `<div class="res-hit">
        <div class="rh-pos">${pos}</div>
        <div class="rh-body">
          <div class="rh-name">${esc(r.name||'—')}</div>
          <div class="rh-meta">${esc(r.regNumber||'')} · ${esc(r.team||'')} · ${esc(r.category||'')} · ${esc(r.eventName||'')}</div>
        </div>
        <div class="reg-admin-id">${esc(r.regNo||'')}</div>
      </div>`;
    }).join('')}` : '';
  if(compact){
    return `${res.length ? `<div class="results-count" style="margin-bottom:10px;">${res.length} result${res.length===1?'':'s'} found</div>` : ''}
      ${res.map(r=>resultCardHtml(r)).join('')}${regHtml}`;
  }
  return `<div class="grid grid-3">
    ${res.map(r=>resultCardHtml(r)).join('') || '<div class="empty-state">No announced result matches.</div>'}
  </div>${regHtml}`;
}
function renderResults(){
  return `
  <section class="section">
    <div class="container">
      <div class="section-head">
        <div class="eyebrow">Announced</div>
        <h2>${esc(heading('results','Event Results'))}</h2>
        <p>${STATE.results.length} result${STATE.results.length===1?'':'s'} announced so far.</p>
      </div>
      ${resultsSearchHtml(false)}
    </div>
  </section>`;
}
function photoShareButtonHtml(photo, title, subtitle, small){
  return `<button class="${small?'icon-btn':'btn btn-ghost btn-sm'}" style="margin-top:${small?'4px':'10px'};" data-action="share-photo" data-photo="${esc(photo)}" data-title="${esc(title)}" data-subtitle="${esc(subtitle||'')}">📤${small?'':' Share Photo'}</button>`;
}
function resultCardHtml(r){
  return `<div class="card reveal">
    <div class="event-cat">Result · ${fmtDate(r.date)}</div>
    <h3>${esc(r.eventName)}</h3>
    <div class="podium-row">
      <div class="podium-item"><img class="podium-photo" src="${esc(photoSrc(r.firstPhoto))}" alt="" onerror="this.onerror=null;this.src='${esc(avatarUrl((r.firstWinner||r.firstTeam)+'1'))}';"><div class="podium-pos">1ST</div><div class="podium-name">${esc(r.firstWinner || r.firstTeam)}</div>${r.firstWinner?`<div class="event-cat" style="margin-top:2px;">${esc(r.firstTeam)}</div>`:''}${photoShareButtonHtml(photoSrc(r.firstPhoto), (r.firstWinner||r.firstTeam)+' — 1st Place', r.eventName, true)}</div>
      <div class="podium-item"><img class="podium-photo" src="${esc(photoSrc(r.secondPhoto))}" alt="" onerror="this.onerror=null;this.src='${esc(avatarUrl((r.secondWinner||r.secondTeam)+'2'))}';"><div class="podium-pos">2ND</div><div class="podium-name">${esc(r.secondWinner || r.secondTeam)}</div>${r.secondWinner?`<div class="event-cat" style="margin-top:2px;">${esc(r.secondTeam)}</div>`:''}${photoShareButtonHtml(photoSrc(r.secondPhoto), (r.secondWinner||r.secondTeam)+' — 2nd Place', r.eventName, true)}</div>
      <div class="podium-item"><img class="podium-photo" src="${esc(photoSrc(r.thirdPhoto))}" alt="" onerror="this.onerror=null;this.src='${esc(avatarUrl((r.thirdWinner||r.thirdTeam)+'3'))}';"><div class="podium-pos">3RD</div><div class="podium-name">${esc(r.thirdWinner || r.thirdTeam)}</div>${r.thirdWinner?`<div class="event-cat" style="margin-top:2px;">${esc(r.thirdTeam)}</div>`:''}${photoShareButtonHtml(photoSrc(r.thirdPhoto), (r.thirdWinner||r.thirdTeam)+' — 3rd Place', r.eventName, true)}</div>
    </div>
  </div>`;
}

/* ================= WINNERS GALLERY ================= */
function flattenWinners(){
  const out = [];
  STATE.results.forEach(r=>{
    out.push({event:r.eventName, name:r.firstWinner || r.firstTeam, team:r.firstTeam, hasWinnerName:!!r.firstWinner, pos:1, photo:photoSrc(r.firstPhoto), date:r.date});
    out.push({event:r.eventName, name:r.secondWinner || r.secondTeam, team:r.secondTeam, hasWinnerName:!!r.secondWinner, pos:2, photo:photoSrc(r.secondPhoto), date:r.date});
    out.push({event:r.eventName, name:r.thirdWinner || r.thirdTeam, team:r.thirdTeam, hasWinnerName:!!r.thirdWinner, pos:3, photo:photoSrc(r.thirdPhoto), date:r.date});
  });
  return out;
}
function renderWinners(){
  let winners = flattenWinners();
  if(STATE.winnerFilter !== 'all'){ winners = winners.filter(w=> w.pos === Number(STATE.winnerFilter)); }
  const posLabel = {1:'1ST',2:'2ND',3:'3RD'};
  return `
  <section class="section">
    <div class="container">
      <div class="section-head">
        <div class="eyebrow">Champions</div>
        <h2>${esc(heading('winners','Winners Gallery'))}</h2>
      </div>
      <div class="tabs-row" style="justify-content:center;">
        <button class="tab-btn ${STATE.winnerFilter==='all'?'active':''}" data-action="winner-filter" data-val="all">All</button>
        <button class="tab-btn ${STATE.winnerFilter==='1'?'active':''}" data-action="winner-filter" data-val="1">1st Place</button>
        <button class="tab-btn ${STATE.winnerFilter==='2'?'active':''}" data-action="winner-filter" data-val="2">2nd Place</button>
        <button class="tab-btn ${STATE.winnerFilter==='3'?'active':''}" data-action="winner-filter" data-val="3">3rd Place</button>
      </div>
      <div class="grid grid-4">
        ${winners.map(w=>`
          <div class="card winner-card reveal">
            <img src="${esc(w.photo)}" alt="" onerror="this.onerror=null;this.src='${esc(avatarUrl(w.name))}';">
            <span class="badge winner-pos-tag ${w.pos===1?'badge-ongoing':w.pos===2?'badge-upcoming':'badge-completed'}">${posLabel[w.pos]}</span>
            <h3 style="font-size:.95rem;">${esc(w.name)}</h3>
            <div class="event-meta" style="align-items:center;">${w.hasWinnerName?`<span>${esc(w.team)}</span>`:''}<span>${esc(w.event)}</span></div>
            ${photoShareButtonHtml(w.photo, w.name+' — '+posLabel[w.pos], w.event, false)}
          </div>`).join('') || '<div class="empty-state">No winners yet.</div>'}
      </div>
    </div>
  </section>`;
}

/* ================= HIGHLIGHTS ================= */
function videoCardHtml(h, big){
  const thumb = h.type==='youtube' ? ('https://img.youtube.com/vi/'+h.url+'/hqdefault.jpg') : (h.type==='photo' ? photoSrc(h.url) : '');
  return `<div class="card video-card reveal" data-action="play-video" data-id="${h.id}" style="${big?'max-width:720px;margin:0 auto;':''}">
    <div class="video-thumb">
      ${h.featured==='yes'?'<span class="featured-badge">Featured</span>':''}
      ${thumb ? `<img src="${esc(thumb)}" alt="" onerror="this.onerror=null;this.src='${esc(brokenImagePlaceholder())}';">` : `<div style="width:100%;height:100%;background:linear-gradient(135deg,#0B3D2E,#146B52);"></div>`}
      ${h.type==='photo' ? '' : `<div class="play-btn"><span class="play-icon"></span></div>`}
    </div>
    <div class="video-body">
      <h3>${esc(h.title)}</h3>
      <div class="video-meta">${esc(h.eventName)} · ${fmtDate(h.date)}</div>
    </div>
  </div>`;
}
function renderHighlights(){
  const sorted = STATE.highlights.slice().sort((a,b)=> b.date.localeCompare(a.date));
  return `
  <section class="section">
    <div class="container">
      <div class="section-head">
        <div class="eyebrow">Watch &amp; View</div>
        <h2>${esc(heading('highlights','Highlights'))}</h2>
        <p>Opening &amp; closing ceremonies, event action, winner announcements — in video and photo.</p>
      </div>
      <div class="grid grid-3">
        ${sorted.map(h=>videoCardHtml(h,false)).join('') || '<div class="empty-state">No videos uploaded yet.</div>'}
      </div>
    </div>
  </section>`;
}
function openVideoModal(id){
  const h = STATE.highlights.find(x=>x.id===id); if(!h) return;
  const player = h.type==='youtube'
    ? `<iframe src="https://www.youtube.com/embed/${h.url}?autoplay=1" allow="autoplay; encrypted-media" allowfullscreen></iframe>`
    : h.type==='photo'
    ? `<img src="${esc(photoSrc(h.url))}" style="width:100%;border-radius:10px;display:block;" onerror="this.onerror=null;this.src='${esc(brokenImagePlaceholder())}';">`
    : `<video src="${esc(photoSrc(h.url))}" controls autoplay></video>`;
  showModal(`
    <button class="modal-close" data-action="close-modal">×</button>
    <h3>${esc(h.title)}</h3>
    <div class="modal-video">${player}</div>
    <div class="video-meta" style="margin-top:12px;">${esc(h.eventName)} · ${fmtDate(h.date)}</div>
  `, true);
}

/* ================= EXECUTIVE MEMBERS ================= */
function execMemberCardHtml(m, hasTeam){
  const photo = photoSrc(m.photo) || avatarUrl(m.name);
  return `<div class="card winner-card reveal">
    <img src="${esc(photo)}" alt="" onerror="this.onerror=null;this.src='${esc(avatarUrl(m.name))}';">
    <h3 style="font-size:.95rem;">${esc(m.name)}</h3>
    ${m.post ? `<div class="event-cat" style="color:var(--gold);">${esc(m.post)}</div>` : ''}
    ${hasTeam ? `<div class="event-cat">${esc(m.team||'')}</div>` : ''}
  </div>`;
}
function renderExec(){
  const em = STATE.execMembers;
  return `
  <section class="section">
    <div class="container">
      <div class="section-head">
        <div class="eyebrow">Behind The Festival</div>
        <h2>${esc(heading('exec','Executive Members'))}</h2>
        <p>The people who plan, judge, run and volunteer at DarussalamFest.</p>
      </div>
      ${EXEC_CATEGORIES.map(c=>`
        <h3 style="margin:38px 0 16px;">${c.label}</h3>
        <div class="grid grid-4">
          ${(em[c.key]||[]).map(m=>execMemberCardHtml(m, c.key==='teamLeaders')).join('') || '<div class="empty-state">None added yet.</div>'}
        </div>
      `).join('')}
    </div>
  </section>`;
}

/* ================= TEAMS / MEMBER DIRECTORY ================= */
function memberMatchesSearch(m, q){
  q = q.trim().toLowerCase();
  if(!q) return false;
  return m.name.toLowerCase().includes(q) || String(m.chestNumber).toLowerCase().includes(q);
}
function memberProfileCardHtml(m){
  return `<div class="card reveal">
    <div class="event-cat" style="display:flex;align-items:center;gap:6px;"><span style="width:9px;height:9px;border-radius:50%;background:${esc(teamColor(m.team))};display:inline-block;"></span>${esc(m.team)} · ${esc(m.category)}</div>
    <div class="event-top">
      <h3 style="margin:0;">${esc(m.chestNumber)} — ${esc(m.name)}</h3>
      <div class="points-cell" style="font-size:1.3rem;">${m.points||0} pts</div>
    </div>
    <div class="points-breakdown" style="grid-template-columns:repeat(2,1fr);">
      <div class="pb-block">
        <div class="pb-title">Stage Programs</div>
        <div class="pb-row"><span>Individual</span><b>${esc(m.stageIndividual||'—')}</b></div>
        <div class="pb-row"><span>Group</span><b>${esc(m.stageTeam||'—')}</b></div>
      </div>
      <div class="pb-block">
        <div class="pb-title">Off-Stage Programs</div>
        <div class="pb-row"><span>Individual</span><b>${esc(m.offStageIndividual||'—')}</b></div>
        <div class="pb-row"><span>Group</span><b>${esc(m.offStageTeam||'—')}</b></div>
      </div>
    </div>
  </div>`;
}
function openMemberModal(id){
  const m = STATE.teamMembers.find(x=>x.id===id); if(!m) return;
  showModal(`<button class="modal-close" data-action="close-modal">×</button>${memberProfileCardHtml(m)}`);
}
function individualLeaderboardHtml(){
  const cat = STATE.individualCategory;
  const sorted = individualStandings(cat);
  return `<div class="card reveal" style="margin-bottom:30px;">
    <h3 style="margin-top:0;">🏆 Individual Leaderboard — ${esc(cat)}</h3>
    <div class="cat-tabs" style="justify-content:flex-start;margin-bottom:18px;">
      ${PARTICIPATION_CATEGORIES.map(c=>`<button class="cat-tab ${cat===c?'active':''}" data-action="ind-category" data-val="${esc(c)}">${esc(c)}</button>`).join('')}
    </div>
    <div class="ind-grid">
      ${sorted.slice(0,3).map((m,i)=>{
        const photo = photoSrc(m.photo) || avatarUrl(m.name||'participant');
        const medal = ['🥇','🥈','🥉'][i];
        return `<div class="ind-card ${i===0?'rank-1':''}">
          <div class="ind-medal">${medal}</div>
          <img class="ind-avatar" src="${esc(photo)}" alt="${esc(m.name||'')}" onerror="this.onerror=null;this.src='${esc(avatarUrl(m.name||'p'))}';">
          <div class="ind-name">${esc(m.name||'—')}</div>
          <div class="ind-team">${m.chestNumber?esc(m.chestNumber)+' · ':''}${esc(m.team||'—')}</div>
          <div class="ind-pts">${m._points}<small>PTS</small></div>
          <div style="margin-top:10px;"><button class="icon-btn" data-action="open-celebration" data-name="${esc(m.name||'')}" data-group="${esc(m.team||'')}" data-category="${esc(cat)}" data-position="${i+1}" data-points="${m._points}">🎉 Celebrate</button></div>
        </div>`;
      }).join('') || '<div class="empty-state" style="grid-column:1/-1;">No ' + esc(cat) + ' participants yet.</div>'}
    </div>
    ${sorted.length>3 ? `<p class="results-count" style="margin-top:14px;margin-bottom:0;">Showing the top 3 of ${sorted.length} ${esc(cat)} participants. Full rankings are listed per team below.</p>` : ''}
  </div>`;
}
function renderTeamsPage(){
  const q = STATE.teamSearch;
  const rosterTeams = STATE.settings.rosterTeams || [];
  if(q.trim()){
    const matches = STATE.teamMembers.filter(m=>memberMatchesSearch(m,q));
    return `
    <section class="section">
      <div class="container">
        <div class="section-head">
          <div class="eyebrow">Team Directory</div>
          <h2>${esc(heading('teams','Teams'))}</h2>
        </div>
        <div class="filterbar">
          <input type="text" id="teamSearchInput" placeholder="Type a name or chest number…" value="${esc(q)}">
          <button class="btn btn-ghost btn-sm" data-action="clear-team-search">Clear</button>
        </div>
        <div class="results-count">${matches.length} member${matches.length===1?'':'s'} found</div>
        <div class="grid grid-3">
          ${matches.map(m=>memberProfileCardHtml(m)).join('') || '<div class="empty-state">No member matches that name or chest number.</div>'}
        </div>
      </div>
    </section>`;
  }
  return `
  <section class="section">
    <div class="container">
      <div class="section-head">
        <div class="eyebrow">Team Directory</div>
        <h2>${esc(heading('teams','Teams'))}</h2>
        <p>Type a member's name or chest number below to see everything they're competing in.</p>
      </div>
      <div class="filterbar">
        <input type="text" id="teamSearchInput" placeholder="Type a name or chest number…" value="${esc(q)}">
      </div>
      ${individualLeaderboardHtml()}
      ${rosterTeams.map(team=>{
        const roster = STATE.teamMembers.filter(m=>m.team===team);
        return `
        <h3 style="margin:34px 0 12px; display:flex; align-items:center; gap:10px;"><span style="width:14px;height:14px;border-radius:50%;background:${esc(teamColor(team))};display:inline-block;"></span>${esc(team)}</h3>
        <div class="table-wrap">
          <table>
            <thead><tr><th>Chest No.</th><th>Name</th><th>Category</th><th>Points</th><th></th></tr></thead>
            <tbody>
              ${roster.map(m=>`
                <tr>
                  <td>${esc(m.chestNumber)}</td><td>${esc(m.name)}</td><td>${esc(m.category)}</td><td class="points-cell">${m.points||0}</td>
                  <td><button class="icon-btn" data-action="view-member" data-id="${m.id}">View Programs</button></td>
                </tr>`).join('') || `<tr><td colspan="5" style="color:var(--ink-soft);">No members added yet.</td></tr>`}
            </tbody>
          </table>
        </div>`;
      }).join('')}
    </div>
  </section>`;
}

/* ================= ABOUT ================= */
function renderAbout(){
  return `
  <section class="section">
    <div class="container about-grid">
      <div>
        <div class="eyebrow">About</div>
        <h2>${esc(heading('about','DarussalamFest'))}</h2>
        <p>${esc(STATE.settings.aboutText)}</p>
        <p>Every house carries a name and color drawn from precious things — a small reminder that effort, given sincerely, is itself valuable.</p>
        <div style="margin-top:16px;">
          ${HOUSES.map(h=>`<span class="house-chip"><span class="house-dot" style="background:${h.color}"></span>${esc(h.name)}</span>`).join('')}
        </div>
      </div>
      <div class="card reveal">
        <h3>At a glance</h3>
        <div class="event-meta" style="gap:10px;">
          <span>🗓️ ${fmtDate(FEST_DATES[0])} – ${fmtDate(FEST_DATES[FEST_DATES.length-1])}</span>
          <span>🏟️ ${VENUES.length} venues across campus</span>
          <span>🏆 ${CATEGORIES.length} event categories</span>
          <span>👥 ${HOUSES.length} competing houses</span>
        </div>
      </div>
    </div>
  </section>`;
}

/* ================= CONTACT ================= */
function renderContact(){
  return `
  <section class="section">
    <div class="container about-grid">
      <div class="card reveal">
        <h3>Send a message</h3>
        <form data-action="contact-form">
          <div class="field"><label>Name</label><input type="text" required></div>
          <div class="field"><label>Email or Phone Number</label><input type="text" required placeholder="you@example.com or +1 555 123 4567"></div>
          <div class="field"><label>Social Media Account <span style="font-weight:400;color:var(--ink-soft);">(optional)</span></label><input type="text" placeholder="@yourhandle on Instagram, Facebook, etc."></div>
          <div class="field"><label>Message</label><textarea required></textarea></div>
          <button class="btn btn-primary" type="submit">Send Message</button>
        </form>
      </div>
      <div class="card reveal">
        <h3>Contact Details</h3>
        <div class="event-meta" style="gap:12px;">
          <span>✉️ ${esc(STATE.settings.contactEmail)}</span>
          <span>📞 ${esc(STATE.settings.contactPhone)}</span>
          <span>📍 ${esc(STATE.settings.contactAddress)}</span>
        </div>
      </div>
    </div>
  </section>`;
}

/* ================= ADMIN ================= */
function renderAdmin(){
  if(!STATE.isAdmin){
    return `
    <section class="section">
      <div class="container">
        <div class="login-box">
          <h2>Admin Login</h2>
          <p style="text-align:center; color:var(--ink-soft); font-size:.85rem; margin-bottom:20px;">Manage events, schedule, points, results, winners and highlights.</p>
          <form data-action="admin-login">
            <div class="field"><label>Email</label><input type="email" name="email" required></div>
            <div class="field"><label>Password</label><input type="password" name="password" required></div>
            <button class="btn btn-primary" style="width:100%;" type="submit">Log In</button>
          </form>
          <div class="notice" style="margin-top:18px;">Default login: <b>admin@gmail.com</b> / <b>Admin@123</b> — change it anytime by editing <b>ADMIN_EMAIL</b> / <b>ADMIN_PASSWORD</b> in js/app.js.</div>
        </div>
      </div>
    </section>`;
  }
  const tabs = [
    ['events','Events'], ['registrations','Registrations'], ['branding','Branding'],
    ['points','Points'], ['results','Results'],
    ['highlights','Highlights'], ['executives','Executives'], ['teams','Teams'],
    ['backgrounds','Backgrounds'], ['settings','Settings']
  ];
  return `
  <section class="section">
    <div class="container">
      <div class="admin-toolbar">
        <h2 style="margin:0;">Admin Dashboard</h2>
        <div style="display:flex; gap:10px;">
          <button class="btn btn-ghost btn-sm" data-action="init-sample-data">🔧 Set Up Sample Data</button>
          <button class="btn btn-outline" style="color:var(--green-deep); border-color:var(--green-deep);" data-action="admin-logout">Log Out</button>
        </div>
      </div>
      <div class="admin-wrap">
        <div class="admin-side">
          ${tabs.map(t=>`<button class="${STATE.adminTab===t[0]?'active':''}" data-action="admin-tab" data-tab="${t[0]}">${t[1]}${t[0]==='registrations'&&STATE.registrations.length?' ('+STATE.registrations.length+')':''}</button>`).join('')}
        </div>
        <div class="admin-main">
          ${adminTabContent()}
        </div>
      </div>
    </div>
  </section>`;
}
function adminTabContent(){
  switch(STATE.adminTab){
    case 'events': return adminEvents();
    case 'registrations': return adminRegistrations();
    case 'branding': return adminBranding();
    case 'points': return adminPoints();
    case 'results': return adminResults();
    case 'highlights': return adminHighlights();
    case 'executives': return adminExecutives();
    case 'teams': return adminTeamsMgmt();
    case 'backgrounds': return adminBackgrounds();
    case 'settings': return adminSettings();
    default: return '';
  }
}

/* ---------------- ADMIN · FEST BRANDING ---------------- */
function adminBranding(){
  const s = STATE.settings;
  const t = Object.assign({}, DEFAULT_FEST_BRANDING.theme, s.theme||{});
  return `
  <h3>Fest Branding</h3>
  <div class="card" style="margin-bottom:22px;">
    <h4 style="margin-top:0;">Fest Logo</h4>
    <p style="font-size:.85rem;color:var(--ink-soft);margin-top:0;">Upload a transparent PNG / SVG / WebP. It replaces the mark in the website header, homepage hero, registration pages, result pages, event pages and the footer — everywhere at once. Nothing is hard-coded.</p>
    <div style="display:flex;gap:20px;align-items:center;flex-wrap:wrap;margin-bottom:16px;">
      <div style="text-align:center;">
        <div style="width:150px;height:110px;border:1px solid var(--line);border-radius:12px;background:var(--bg-alt);display:flex;align-items:center;justify-content:center;padding:8px;overflow:hidden;">
          <img src="${esc(festLogoSrc())}" alt="Current logo preview" style="max-width:100%;max-height:100%;object-fit:contain;" onerror="this.src='${esc(FEST_LOGO_DATA_URL)}';">
        </div>
        <div class="results-count" style="margin-top:6px;">Current logo preview</div>
      </div>
      <div style="flex:1;min-width:240px;">
        <form data-action="save-logo">
          <div class="field">
            <label>Upload Logo File</label>
            <input type="file" accept="image/png,image/svg+xml,image/webp,image/jpeg,image/*" data-photo-target="logoUrl" style="width:100%;font-size:.8rem;">
          </div>
          <div class="field">
            <label>Or paste a Logo URL</label>
            <input type="text" name="logoUrl" value="${esc(s.logoUrl||'')}" placeholder="https://…/logo.png">
          </div>
          <div class="reg-actions" style="justify-content:flex-start;">
            <button class="btn btn-primary btn-sm" type="submit">💾 Save Logo</button>
            ${s.logoUrl ? '<button class="btn btn-ghost btn-sm" type="button" data-action="reset-logo">Reset to default</button>' : ''}
          </div>
        </form>
      </div>
    </div>
  </div>
  <h3>Fest Details</h3>
  <div class="card" style="margin-bottom:22px;">
    <form data-action="save-fest-details">
      <div class="field-row" style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
        <div class="field"><label>Fest Name</label><input type="text" name="festName" value="${esc(festName())}"></div>
        <div class="field"><label>Fest Subtitle</label><input type="text" name="festSubtitle" value="${esc(festSubtitle())}"></div>
      </div>
      <div class="field"><label>Tagline</label><input type="text" name="festTagline" value="${esc(festTagline())}"></div>
      <div class="field"><label>Site Title <span style="font-weight:400;color:var(--ink-soft);">(nav bar &amp; footer)</span></label><input type="text" name="siteTitle" value="${esc(s.siteTitle||'')}"></div>
      <div class="field"><label>Browser Tab Title</label><input type="text" name="tabTitle" value="${esc(s.tabTitle||'')}"></div>
      <div class="field"><label>Tagline shown under the hero heading</label><textarea name="tagline">${esc(s.tagline||'')}</textarea></div>
      <button class="btn btn-primary btn-sm" type="submit">Save Fest Details</button>
    </form>
  </div>
  <h3>Colour Theme</h3>
  <div class="card">
    <p style="font-size:.85rem;color:var(--ink-soft);margin-top:0;">These six colours drive the entire site's design system — header, hero, buttons, cards, leaderboards, forms and footer all update instantly on save.</p>
    <form data-action="save-theme">
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;">
        <div class="field"><label>Primary</label><input type="color" name="primary" value="${esc(t.primary)}" style="width:100%;height:40px;padding:2px;"></div>
        <div class="field"><label>Secondary</label><input type="color" name="primarySoft" value="${esc(t.primarySoft)}" style="width:100%;height:40px;padding:2px;"></div>
        <div class="field"><label>Accent (Gold)</label><input type="color" name="accent" value="${esc(t.accent)}" style="width:100%;height:40px;padding:2px;"></div>
        <div class="field"><label>Accent Light</label><input type="color" name="accentSoft" value="${esc(t.accentSoft)}" style="width:100%;height:40px;padding:2px;"></div>
        <div class="field"><label>Clash (Crimson)</label><input type="color" name="clash" value="${esc(t.clash)}" style="width:100%;height:40px;padding:2px;"></div>
        <div class="field"><label>Background</label><input type="color" name="background" value="${esc(t.background)}" style="width:100%;height:40px;padding:2px;"></div>
      </div>
      <div class="reg-actions" style="justify-content:flex-start;">
        <button class="btn btn-primary btn-sm" type="submit">Save Theme</button>
        <button class="btn btn-ghost btn-sm" type="button" data-action="reset-theme">Reset to default palette</button>
      </div>
    </form>
  </div>`;
}

/* ---------------- ADMIN · REGISTRATIONS ---------------- */
function adminRegistrations(){
  const f = STATE.regFilters;
  const q = f.q.trim().toLowerCase();
  const list = STATE.registrations.slice().sort((a,b)=> String(b.createdAt).localeCompare(String(a.createdAt))).filter(r=>{
    if(f.event && r.eventName!==f.event) return false;
    if(f.category && r.category!==f.category) return false;
    if(f.team && r.team!==f.team) return false;
    if(f.status && r.status!==f.status) return false;
    if(q){
      const hit = [r.name,r.regNumber,r.regNo,r.team,r.eventName,r.klass,r.phone].some(v=>matchText(v,q));
      if(!hit) return false;
    }
    return true;
  });
  const eventNames = [];
  STATE.registrations.forEach(r=>{ if(r.eventName && eventNames.indexOf(r.eventName)<0) eventNames.push(r.eventName); });
  eventNames.sort();
  return `
  <div class="admin-toolbar">
    <h3 style="margin:0;">Registrations (${STATE.registrations.length})</h3>
    <div style="display:flex;gap:8px;">
      <button class="btn btn-ghost btn-sm" data-action="export-registrations">⬇ Export CSV</button>
      <button class="btn btn-primary btn-sm" data-action="add-registration">+ Add Manually</button>
    </div>
  </div>
  <div class="notice">Every online submission from the website lands here instantly. Use the filters to search, manage status, and export. Registration is validated against cancelled events, duplicate entries and category participation limits both on the form and again at save time.</div>
  <div class="search-shell">
    <div class="search-row">
      <div class="search-input-wrap">
        <span class="ico">🔍</span>
        <input type="text" id="regAdminSearch" class="search-input" placeholder="Search name, registration no, team, class, phone…" value="${esc(f.q)}">
      </div>
    </div>
    <div class="filter-row">
      <select id="regAdminEvent"><option value="">All Events</option>${eventNames.map(n=>`<option value="${esc(n)}" ${f.event===n?'selected':''}>${esc(n)}</option>`).join('')}</select>
      <select id="regAdminCategory"><option value="">All Categories</option>${PARTICIPATION_CATEGORIES.map(c=>`<option value="${esc(c)}" ${f.category===c?'selected':''}>${esc(c)}</option>`).join('')}</select>
      <select id="regAdminTeam"><option value="">All Teams</option>${allTeams().map(t=>`<option value="${esc(t)}" ${f.team===t?'selected':''}>${esc(t)}</option>`).join('')}</select>
    </div>
    <div class="filter-row" style="grid-template-columns:1fr;">
      <select id="regAdminStatus"><option value="">All Statuses</option>${REG_STATUS_VALUES.map(s=>`<option value="${s}" ${f.status===s?'selected':''}>${s}</option>`).join('')}</select>
    </div>
    <div class="results-count" style="margin-top:12px;margin-bottom:0;">${list.length} of ${STATE.registrations.length} registration${STATE.registrations.length===1?'':'s'}</div>
  </div>
  <div class="table-wrap"><table>
    <thead><tr><th>Student</th><th>Reg. ID</th><th>Category</th><th>Team</th><th>Event</th><th>Type</th><th>Date</th><th>Status</th><th>Actions</th></tr></thead>
    <tbody>
      ${list.map(r=>`
        <tr>
          <td><b>${esc(r.name||'—')}</b><div class="results-count" style="margin:0;">Chest ${esc(r.regNumber||'—')}${r.klass?' · Class '+esc(r.klass):''}</div></td>
          <td class="reg-admin-id">${esc(r.regNo||r.id||'—')}</td>
          <td>${esc(r.category||'—')}</td>
          <td>${esc(r.team||'—')}</td>
          <td>${esc(r.eventName||'—')}</td>
          <td><span class="chip ${r.eventType==='Stage'?'chip-stage':'chip-nonstage'}">${esc(r.eventType||'—')}</span></td>
          <td class="reg-admin-id">${r.createdAt?new Date(r.createdAt).toLocaleDateString():'—'}</td>
          <td><span class="chip ${r.status==='APPROVED'?'chip-open':r.status==='REJECTED'?'chip-cancelled':'chip-closed'}">${esc(r.status||'PENDING')}</span></td>
          <td>
            <button class="icon-btn" data-action="view-registration" data-id="${esc(r.id)}">View</button>
            <button class="icon-btn" data-action="edit-registration" data-id="${esc(r.id)}">Edit</button>
            <button class="icon-btn" data-action="delete-registration" data-id="${esc(r.id)}">Delete</button>
          </td>
        </tr>`).join('') || `<tr><td colspan="9" style="color:var(--ink-soft);">No registrations match your filters.</td></tr>`}
    </tbody>
  </table></div>`;
}
function registrationDetailsHtml(r){
  return `<div class="card">
    <div class="event-top">
      <div>
        <div class="event-cat">${esc(r.regNo||r.id||'')}</div>
        <h3 style="margin:0;">${esc(r.name||'—')}</h3>
      </div>
      <span class="chip ${r.status==='APPROVED'?'chip-open':r.status==='REJECTED'?'chip-cancelled':'chip-closed'}">${esc(r.status||'PENDING')}</span>
    </div>
    <div class="event-meta" style="margin-top:12px;">
      <span>🪪 Chest No.: ${esc(r.regNumber||'—')}</span>
      <span>🏠 Team: ${esc(r.team||'—')}</span>
      <span>📂 Category: ${esc(r.category||'—')}</span>
      <span>📚 Class: ${esc(r.klass||'—')}</span>
      <span>📞 Phone: ${esc(r.phone||'—')}</span>
      <span>✉️ Email: ${esc(r.email||'—')}</span>
      <span>🎭 Event: ${esc(r.eventName||'—')}</span>
      <span>🏷️ Event Type: ${esc(r.eventType||'—')}</span>
      <span>🕐 Registered: ${r.createdAt?new Date(r.createdAt).toLocaleString():'—'}</span>
    </div>
    ${r.notes?`<p style="font-size:.85rem;margin-top:12px;"><b>Notes:</b> ${esc(r.notes)}</p>`:''}
  </div>`;
}
function openViewRegistrationModal(id){
  const r = STATE.registrations.find(x=>x.id===id); if(!r) return;
  showModal(`
    <button class="modal-close" data-action="close-modal">×</button>
    <h3>Registration Details</h3>
    ${registrationDetailsHtml(r)}
    <div class="modal-actions">
      <button class="btn btn-ghost btn-sm" data-action="set-registration-status" data-id="${esc(r.id)}" data-status="REJECTED">Reject</button>
      <button class="btn btn-ghost btn-sm" data-action="set-registration-status" data-id="${esc(r.id)}" data-status="PENDING">Set Pending</button>
      <button class="btn btn-primary btn-sm" data-action="set-registration-status" data-id="${esc(r.id)}" data-status="APPROVED">Approve</button>
    </div>`);
}
function openEditRegistrationModal(id){
  const r = STATE.registrations.find(x=>x.id===id); if(!r) return;
  const fields = [
    {key:'name',label:'Student Name',type:'text'},
    {key:'regNumber',label:'Registration / Chest No.',type:'text'},
    {key:'team',label:'Team / House',type:'select',options:(STATE.settings.rosterTeams||[])},
    {key:'category',label:'Category',type:'select',options:PARTICIPATION_CATEGORIES},
    {key:'klass',label:'Class / Grade',type:'text'},
    {key:'phone',label:'Phone',type:'text'},
    {key:'email',label:'Email',type:'text'},
    {key:'notes',label:'Notes',type:'textarea'},
    {key:'status',label:'Status',type:'select',options:REG_STATUS_VALUES}
  ];
  showModal(`
    <button class="modal-close" data-action="close-modal">×</button>
    <h3>Edit Registration — ${esc(r.regNo||r.name||'')}</h3>
    <div class="notice">Event: ${esc(r.eventName||'—')} · ${esc(r.eventType||'')}. The programme and event type are set when the registration is created and are not editable here.</div>
    <form data-action="save-registration" data-id="${esc(id)}">
      ${fields.map(f=>fieldHtml(f, r[f.key])).join('')}
      <div class="modal-actions"><button type="submit" class="btn btn-primary btn-sm">Save</button></div>
    </form>`);
}
function openAddRegistrationModal(){
  const openEvents = STATE.events.filter(e=>isEventLive(e));
  if(!openEvents.length){ toast('No open events to register for.'); return; }
  const ev = openEvents[0];
  showModal(`
    <button class="modal-close" data-action="close-modal">×</button>
    <h3>Add Registration (Manual)</h3>
    <div class="notice">Use this for phone-in or paper registrations. The same category participation limits and duplicate checks are applied as for online submissions.</div>
    <form data-action="save-registration" data-id="">
      <div class="field"><label>Event <span class="req">*</span></label>
        <select name="eventId" id="adminRegEvent" required>
          ${openEvents.map(e=>`<option value="${esc(e.id)}" ${e.id===ev.id?'selected':''}>${esc(e.name)} — ${esc(eventTypeOf(e))}</option>`).join('')}
        </select>
      </div>
      <div class="field-row" style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
        <div class="field"><label>Student Name <span class="req">*</span></label><input type="text" name="name" required></div>
        <div class="field"><label>Registration / Chest No. <span class="req">*</span></label><input type="text" name="regNumber" required></div>
      </div>
      <div class="field-row" style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
        <div class="field"><label>Category <span class="req">*</span></label><select name="category" id="adminRegCategory">${PARTICIPATION_CATEGORIES.map(c=>`<option value="${esc(c)}">${esc(c)}</option>`).join('')}</select></div>
        <div class="field"><label>Team / House <span class="req">*</span></label><select name="team" id="adminRegTeam"><option value="">— Select —</option>${(STATE.settings.rosterTeams||[]).map(t=>`<option value="${esc(t)}">${esc(t)}</option>`).join('')}</select></div>
      </div>
      <div class="field"><label>Status</label><select name="status">${REG_STATUS_VALUES.map(s=>`<option value="${s}">${s}</option>`).join('')}</select></div>
      <div class="field"><label>Notes</label><textarea name="notes"></textarea></div>
      <div class="modal-actions"><button type="submit" class="btn btn-primary btn-sm">Save Registration</button></div>
    </form>`);
}
function exportRegistrationsCsv(){
  const f = STATE.regFilters;
  const q = f.q.trim().toLowerCase();
  const list = STATE.registrations.slice().sort((a,b)=> String(b.createdAt).localeCompare(String(a.createdAt))).filter(r=>{
    if(f.event && r.eventName!==f.event) return false;
    if(f.category && r.category!==f.category) return false;
    if(f.team && r.team!==f.team) return false;
    if(f.status && r.status!==f.status) return false;
    if(q && !([r.name,r.regNumber,r.regNo,r.team,r.eventName,r.klass,r.phone].some(v=>matchText(v,q)))) return false;
    return true;
  });
  if(!list.length){ toast('Nothing to export with the current filters.'); return; }
  const cols = ['Reg ID','Student Name','Chest No','Category','Team','Class','Event','Event Type','Status','Registered On','Phone','Email','Notes'];
  const cell = v => '"' + String(v==null?'':v).replace(/"/g,'""') + '"';
  const csv = [cols.join(',')].concat(list.map(r=>[
    r.regNo||r.id, r.name, r.regNumber, r.category, r.team, r.klass,
    r.eventName, r.eventType, r.status, r.createdAt||'', r.phone, r.email, r.notes
  ].map(cell).join(','))).join('\r\n');
  const blob = new Blob(['\ufeff' + csv], {type:'text/csv;charset=utf-8;'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'thanawuush26-registrations.csv';
  a.click();
  setTimeout(()=>URL.revokeObjectURL(a.href), 2000);
  toast('Exported ' + list.length + ' registration' + (list.length===1?'':'s') + '.');
}

function adminEvents(){
  const sorted = STATE.events.slice().sort(compareEvents);
  const live = sorted.filter(e=>eventStatusOf(e)==='ACTIVE');
  const cancelled = sorted.filter(e=>eventStatusOf(e)==='CANCELLED');
  const inactive = sorted.filter(e=>eventStatusOf(e)==='INACTIVE');
  return `
  <div class="admin-toolbar"><h3 style="margin:0;">Events (${STATE.events.length})</h3><div style="display:flex;gap:8px;">
    <button class="btn btn-ghost btn-sm" data-action="toggle-show-cancelled">${STATE.showCancelled?'Hide':'Show'} cancelled (${cancelled.length})</button>
    <button class="btn btn-primary btn-sm" data-action="add-event">+ Add Event</button>
  </div></div>
  <div class="notice">Every active event has its own shareable registration link. Use <b>Copy Registration Link</b> or <b>Share Registration</b> to send it to students on WhatsApp, Instagram or Telegram. Cancelled events stay in the database (historical registrations and results are preserved) but disappear from the public site and cannot accept new registrations.</div>
  ${eventAdminTableHtml(live, 'Active Events')}
  ${inactive.length && STATE.showCancelled ? eventAdminTableHtml(inactive, 'Inactive Events') : ''}
  ${cancelled.length && STATE.showCancelled ? eventAdminTableHtml(cancelled, 'Cancelled Events') : ''}`;
}
function eventAdminTableHtml(list, title){
  if(!list.length) return '';
  return `<h4 style="margin:22px 0 10px;">${esc(title)} (${list.length})</h4>
  <div class="table-wrap"><table>
    <thead><tr><th>Event</th><th>Code</th><th>Category</th><th>Type</th><th>Status</th><th>Registration</th><th>Registered</th><th>Share Link</th><th></th></tr></thead>
    <tbody>
      ${list.map(e=>{
        const st = eventStatusOf(e);
        const open = eventRegWindowOpen(e);
        return `
        <tr>
          <td><b>${esc(e.name)}</b><div class="results-count" style="margin:0;">${fmtDate(e.date)} · ${fmtTime(e.time)} · ${esc(e.venue)}</div></td>
          <td class="reg-admin-id">${esc(e.eventCode||'—')}</td>
          <td>${esc(e.category)}</td>
          <td><span class="chip ${eventTypeOf(e)==='Stage'?'chip-stage':'chip-nonstage'}">${esc(eventTypeOf(e))}</span></td>
          <td><span class="chip ${st==='ACTIVE'?'chip-active':st==='CANCELLED'?'chip-cancelled':'chip-inactive'}">${esc(st)}</span></td>
          <td><span class="chip ${open?'chip-open':'chip-closed'}">${open?'OPEN':esc(eventRegStatus(e))}</span></td>
          <td class="reg-admin-id">${eventRegCount(e)}${e.maxParticipants?' / '+esc(e.maxParticipants):''}</td>
          <td>
            <input type="text" class="link-field" readonly style="min-width:150px;font-size:.68rem;" value="${esc(eventRegUrl(e))}" aria-label="Registration link">
          </td>
          <td style="white-space:nowrap;">
            <button class="icon-btn" data-action="copy-reg-link" data-id="${esc(e.id)}">📋 Copy Link</button>
            <button class="icon-btn" data-action="share-reg-link" data-id="${esc(e.id)}">📤 Share</button><br>
            <button class="icon-btn" data-action="edit-event" data-id="${esc(e.id)}">Edit</button>
            <button class="icon-btn" data-action="set-event-status" data-id="${esc(e.id)}" data-status="CANCELLED">Cancel</button>
            <button class="icon-btn" data-action="set-event-status" data-id="${esc(e.id)}" data-status="INACTIVE">Deactivate</button>
            <button class="icon-btn" data-action="set-event-status" data-id="${esc(e.id)}" data-status="ACTIVE">Activate</button>
            <button class="icon-btn" data-action="delete-event" data-id="${esc(e.id)}">Delete</button>
          </td>
        </tr>`;
      }).join('')}
    </tbody>
  </table></div>`;
}
function adminPoints(){
  const sorted = STATE.points.slice().sort((a,b)=>b.points-a.points);
  const cols = STATE.settings.customPointColumns || [];
  return `
  <div class="admin-toolbar"><h3 style="margin:0;">Points Table</h3><div style="display:flex;gap:8px;"><a href="#tv" class="btn btn-ghost btn-sm">📺 TV Display</a><button class="btn btn-primary btn-sm" data-action="add-points">+ Add Team</button></div></div>
  <div class="card" style="margin-bottom:20px;">
    <h4 style="margin-top:0;">🎉 Celebration</h4>
    <p style="font-size:.85rem;color:var(--ink-soft);margin-top:0;">Trigger a confetti celebration on any TV Display currently open (e.g. at the venue) — useful for announcing an overall winner or a big milestone. It appears there within a few seconds.</p>
    <form data-action="trigger-celebration">
      <div class="field"><label>Message</label><input type="text" id="celebrateMsgInput" name="message" placeholder="🎉 Congratulations, Zumurrud House!" value="🎉 Congratulations!"></div>
      <div style="display:flex;gap:10px;">
        <button class="btn btn-primary btn-sm" type="submit">Send to TV Displays</button>
        <button class="btn btn-ghost btn-sm" type="button" data-action="preview-celebration">▶ Preview Here</button>
      </div>
    </form>
  </div>
  <div class="table-wrap"><table>
    <thead><tr><th>Rank</th><th>Color</th><th>Team</th><th>Points</th>${cols.map(c=>`<th>${esc(c.label)}</th>`).join('')}<th></th></tr></thead>
    <tbody>
      ${sorted.map((p,i)=>`
        <tr>
          <td>${i+1}</td>
          <td><input type="color" value="${esc(teamColor(p.team))}" title="Change color for ${esc(p.team)}" style="width:26px;height:26px;padding:0;border:none;background:none;cursor:pointer;" data-action="set-team-color" data-team="${esc(p.team)}"></td>
          <td>${esc(p.team)}</td><td class="points-cell">${p.points}</td>
          ${cols.map(c=>`<td>${esc(p[c.key]||'')}</td>`).join('')}
          <td><button class="icon-btn" data-action="edit-points" data-team="${esc(p.team)}">Edit</button><button class="icon-btn" data-action="delete-points" data-team="${esc(p.team)}">Delete</button></td>
        </tr>`).join('')}
    </tbody>
  </table></div>`;
}
function adminResults(){
  return `
  <div class="admin-toolbar"><h3 style="margin:0;">Results (${STATE.results.length})</h3><button class="btn btn-primary btn-sm" data-action="add-result">+ Add Result</button></div>
  <div class="notice">Set point values inside each result (Edit → "Points for 1st/2nd/3rd Place"), then click <b>Apply</b> below to credit those points to each team's total on the Points Table. Already-applied results show <b>Undo</b> instead, in case you need to reverse it.</div>
  <div class="table-wrap"><table>
    <thead><tr><th>Event</th><th>Date</th><th>1st</th><th>2nd</th><th>3rd</th><th>Points</th><th></th></tr></thead>
    <tbody>
      ${STATE.results.map(r=>`
        <tr>
          <td>${esc(r.eventName)}</td><td>${r.date}</td><td>${esc(r.firstWinner || r.firstTeam)}</td><td>${esc(r.secondWinner || r.secondTeam)}</td><td>${esc(r.thirdWinner || r.thirdTeam)}</td>
          <td>${r.firstPoints||0}/${r.secondPoints||0}/${r.thirdPoints||0}${r.pointsApplied?' <span class="badge badge-completed">Applied</span>':''}</td>
          <td>
            ${r.pointsApplied
              ? `<button class="icon-btn" data-action="undo-apply-points" data-id="${r.id}">Undo</button>`
              : `<button class="icon-btn" data-action="apply-points" data-id="${r.id}">Apply</button>`}
            <button class="icon-btn" data-action="edit-result" data-id="${r.id}">Edit</button><button class="icon-btn" data-action="delete-result" data-id="${r.id}">Delete</button>
          </td>
        </tr>`).join('')}
    </tbody>
  </table></div>`;
}
function adminHighlights(){
  return `
  <div class="admin-toolbar"><h3 style="margin:0;">Highlight Videos (${STATE.highlights.length})</h3><button class="btn btn-primary btn-sm" data-action="add-highlight">+ Add Video</button></div>
  <div class="table-wrap"><table>
    <thead><tr><th>Title</th><th>Event</th><th>Date</th><th>Type</th><th>Featured</th><th></th></tr></thead>
    <tbody>
      ${STATE.highlights.map(h=>`
        <tr>
          <td>${esc(h.title)}</td><td>${esc(h.eventName)}</td><td>${h.date}</td><td>${h.type}</td><td>${h.featured==='yes'?'★':'—'}</td>
          <td><button class="icon-btn" data-action="edit-highlight" data-id="${h.id}">Edit</button><button class="icon-btn" data-action="delete-highlight" data-id="${h.id}">Delete</button></td>
        </tr>`).join('')}
    </tbody>
  </table></div>`;
}
function adminExecutives(){
  const em = STATE.execMembers;
  return `
  <div class="admin-toolbar"><h3 style="margin:0;">Executive Members</h3></div>
  ${EXEC_CATEGORIES.map(c=>`
    <div class="admin-toolbar" style="margin-top:22px;"><h4 style="margin:0;">${c.label} (${(em[c.key]||[]).length})</h4><button class="btn btn-primary btn-sm" data-action="add-exec-member" data-cat="${c.key}">+ Add</button></div>
    <div class="table-wrap"><table>
      <thead><tr><th>Photo</th><th>Name</th><th>Post</th>${c.key==='teamLeaders'?'<th>Team</th>':''}<th></th></tr></thead>
      <tbody>
        ${(em[c.key]||[]).map(m=>`
          <tr>
            <td><img src="${esc(photoSrc(m.photo)||avatarUrl(m.name))}" style="width:36px;height:36px;border-radius:8px;object-fit:cover;" onerror="this.onerror=null;this.src='${esc(avatarUrl(m.name))}';"></td>
            <td>${esc(m.name)}</td>
            <td>${esc(m.post||'—')}</td>
            ${c.key==='teamLeaders'?`<td>${esc(m.team||'')}</td>`:''}
            <td><button class="icon-btn" data-action="edit-exec-member" data-cat="${c.key}" data-id="${m.id}">Edit</button><button class="icon-btn" data-action="delete-exec-member" data-cat="${c.key}" data-id="${m.id}">Delete</button></td>
          </tr>`).join('') || `<tr><td colspan="${c.key==='teamLeaders'?5:4}" style="color:var(--ink-soft);">None added yet.</td></tr>`}
      </tbody>
    </table></div>
  `).join('')}`;
}
function adminTeamsMgmt(){
  const rosterTeams = STATE.settings.rosterTeams || [];
  if(!STATE.adminTeamSel || !rosterTeams.includes(STATE.adminTeamSel)){ STATE.adminTeamSel = rosterTeams[0] || ''; }
  const sel = STATE.adminTeamSel;
  const members = STATE.teamMembers.filter(m=>m.team===sel);
  return `
  <div class="admin-toolbar"><h3 style="margin:0;">Teams</h3></div>
  <div class="card" style="margin-bottom:20px;">
    <h4 style="margin-top:0;">Manage Team Names</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:14px;">
      ${rosterTeams.map(t=>`<span class="house-chip"><span style="width:11px;height:11px;border-radius:50%;background:${esc(teamColor(t))};display:inline-block;vertical-align:middle;margin-right:6px;"></span>${esc(t)}<input type="color" value="${esc(teamColor(t))}" title="Change color for ${esc(t)}" style="width:22px;height:22px;padding:0;border:none;background:none;margin-left:8px;cursor:pointer;" data-action="set-team-color" data-team="${esc(t)}"><button type="button" class="icon-btn" style="margin-left:6px;padding:2px 7px;" data-action="delete-roster-team" data-team="${esc(t)}">✕</button></span>`).join('')}
    </div>
    <form data-action="add-roster-team">
      <div class="field"><label>New Team Name</label><input type="text" name="team" required placeholder="e.g. Al-Fajr"></div>
      <div class="field"><label>Team Color</label><input type="color" name="color" value="#146B52" style="width:60px;height:38px;padding:2px;"></div>
      <button class="btn btn-ghost btn-sm" type="submit">+ Add Team</button>
    </form>
  </div>
  <div class="tabs-row">
    ${rosterTeams.map(t=>`<button class="tab-btn ${sel===t?'active':''}" data-action="select-admin-team" data-team="${esc(t)}"><span style="width:9px;height:9px;border-radius:50%;background:${esc(teamColor(t))};display:inline-block;vertical-align:middle;margin-right:6px;"></span>${esc(t)}</button>`).join('')}
  </div>
  <div class="admin-toolbar"><h4 style="margin:0;">${esc(sel||'No team selected')} Members (${members.length})</h4><button class="btn btn-primary btn-sm" data-action="add-team-member" ${sel?'':'disabled'}>+ Add Member</button></div>
  <div class="table-wrap"><table>
    <thead><tr><th>Chest No.</th><th>Name</th><th>Category</th><th>Points</th><th>Stage (Ind. / Group)</th><th>Off-Stage (Ind. / Group)</th><th></th></tr></thead>
    <tbody>
      ${members.map(m=>`
        <tr>
          <td>${esc(m.chestNumber)}</td><td>${esc(m.name)}</td><td>${esc(m.category)}</td><td class="points-cell">${m.points||0}</td>
          <td>${esc(m.stageIndividual||'—')} / ${esc(m.stageTeam||'—')}</td>
          <td>${esc(m.offStageIndividual||'—')} / ${esc(m.offStageTeam||'—')}</td>
          <td><button class="icon-btn" data-action="edit-team-member" data-id="${m.id}">Edit</button><button class="icon-btn" data-action="delete-team-member" data-id="${m.id}">Delete</button></td>
        </tr>`).join('') || `<tr><td colspan="7" style="color:var(--ink-soft);">No members yet.</td></tr>`}
    </tbody>
  </table></div>`;
}
function adminBackgrounds(){
  const hero = STATE.settings.hero;
  const pages = Object.keys(STATE.settings.pageBg);
  return `
  <h3>Homepage Hero Background</h3>
  <div class="card" style="margin-bottom:26px;">
    <form data-action="save-hero">
      <div class="field"><label>Background Type</label>
        <select name="type">
          <option value="color" ${hero.type==='color'?'selected':''}>Color / Gradient</option>
          <option value="image" ${hero.type==='image'?'selected':''}>Image</option>
          <option value="video" ${hero.type==='video'?'selected':''}>Video</option>
        </select>
      </div>
      <div class="field"><label>Color / CSS Gradient value</label><input type="text" name="colorValue" value="${esc(hero.colorValue||'')}" placeholder="e.g. #0B3D2E or linear-gradient(...)"></div>
      <div class="field"><label>Image</label><input type="text" name="imageUrl" value="${esc(hero.imageUrl||'')}" placeholder="Paste a photo URL — or upload a file below"><input type="file" accept="image/*" data-photo-target="imageUrl" style="margin-top:6px;width:100%;font-size:.8rem;"></div>
      <div class="field"><label>Video URL (mp4)</label><input type="text" name="videoUrl" value="${esc(hero.videoUrl||'')}" placeholder="https://…mp4"></div>
      <div class="field"><label><input type="checkbox" name="autoplay" style="width:auto; display:inline-block; margin-right:6px;" ${hero.autoplay?'checked':''}> Auto-play homepage video (muted)</label></div>
      <button class="btn btn-primary btn-sm" type="submit">Save Hero</button>
    </form>
  </div>
  <h3>Per-Page Background</h3>
  <div class="grid grid-3">
    ${pages.map(p=>`
      <div class="card">
        <h4 style="text-transform:capitalize;">${p}</h4>
        <form data-action="save-page-bg" data-page="${p}">
          <div class="field"><label>Type</label>
            <select name="type">
              <option value="color" ${STATE.settings.pageBg[p].type==='color'?'selected':''}>Color</option>
              <option value="image" ${STATE.settings.pageBg[p].type==='image'?'selected':''}>Image</option>
            </select>
          </div>
          <div class="field"><label>Value (color or image URL)</label><input type="text" name="value" value="${esc(STATE.settings.pageBg[p].value)}"></div>
          <button class="btn btn-ghost btn-sm" type="submit">Save</button>
        </form>
      </div>
    `).join('')}
  </div>`;
}
function adminSettings(){
  const s = STATE.settings;
  const lim = limits();
  return `
  <h3>Participation Limits</h3>
  <div class="card" style="margin-bottom:22px;">
    <p style="font-size:.85rem;color:var(--ink-soft);margin-top:0;">Category-wise minimum and maximum program participation rules. These values are stored in the database and used by the registration form's live progress panel and by the validation that runs when a student submits — so no limits are ever hard-coded on the frontend.</p>
    <form data-action="save-participation-limits">
      <div class="table-wrap">
        <table>
          <thead><tr><th>Category</th><th>Min Stage Programs</th><th>Min Non-Stage Programs</th><th>Max Total Programs</th></tr></thead>
          <tbody>
            ${PARTICIPATION_CATEGORIES.map(c=>`
              <tr>
                <td><b>${esc(c)}</b></td>
                <td><input type="number" min="0" name="${esc(c)}|minStage" value="${lim[c].minStage}" style="width:100%;padding:8px 10px;border-radius:8px;border:1px solid var(--line);background:var(--bg);"></td>
                <td><input type="number" min="0" name="${esc(c)}|minNonStage" value="${lim[c].minNonStage}" style="width:100%;padding:8px 10px;border-radius:8px;border:1px solid var(--line);background:var(--bg);"></td>
                <td><input type="number" min="0" name="${esc(c)}|maxTotal" value="${lim[c].maxTotal}" style="width:100%;padding:8px 10px;border-radius:8px;border:1px solid var(--line);background:var(--bg);"></td>
              </tr>`).join('')}
          </tbody>
        </table>
      </div>
      <div class="reg-actions" style="justify-content:flex-start;margin-top:16px;">
        <button class="btn btn-primary btn-sm" type="submit">Save Limits</button>
        <button class="btn btn-ghost btn-sm" type="button" data-action="reset-limits">Reset to defaults</button>
      </div>
    </form>
  </div>
  <h3>Site Content</h3>
  <div class="card" style="margin-bottom:22px;">
    <form data-action="save-site-settings">
      <div class="field"><label>Logo <span style="font-weight:400;color:var(--ink-soft);">(leave blank to use the default mark — or upload in the Branding tab)</span></label><input type="text" name="logoUrl" value="${esc(s.logoUrl||'')}" placeholder="Paste a photo URL — or upload a file below"><input type="file" accept="image/*" data-photo-target="logoUrl" style="margin-top:6px;width:100%;font-size:.8rem;"></div>
      <div class="field"><label>Tagline shown under the hero heading</label><textarea name="tagline">${esc(s.tagline||'')}</textarea></div>
      <div class="field"><label>About Text</label><textarea name="aboutText">${esc(s.aboutText||'')}</textarea></div>
      <div class="field"><label>Contact Email</label><input type="text" name="contactEmail" value="${esc(s.contactEmail)}"></div>
      <div class="field"><label>Contact Phone</label><input type="text" name="contactPhone" value="${esc(s.contactPhone)}"></div>
      <div class="field"><label>Contact Address</label><input type="text" name="contactAddress" value="${esc(s.contactAddress)}"></div>
      <button class="btn btn-primary btn-sm" type="submit">Save Site Content</button>
    </form>
  </div>
  <h3>Admin Account</h3>
  <div class="card" style="margin-bottom:22px;">
    <p style="font-size:.85rem;color:var(--ink-soft);margin-top:0;">Admin login accepts <b>admin@gmail.com</b> / <b>Admin@123</b> by default (editable via ADMIN_EMAIL / ADMIN_PASSWORD at the top of js/app.js). Supabase Authentication accounts also work — add or reset those from your Supabase dashboard under <b>Authentication → Users</b>.</p>
  </div>
  <h3>Page Headings</h3>
  <div class="card" style="margin-bottom:22px;">
    <p style="font-size:.85rem;color:var(--ink-soft);margin-top:0;">Change the main heading shown at the top of each page.</p>
    <form data-action="save-page-headings">
      <div class="field"><label>Homepage — Featured Highlight section</label><input type="text" name="homeFeatured" value="${esc(heading('homeFeatured','Featured Highlight'))}"></div>
      <div class="field"><label>Homepage — Team Leaderboard section</label><input type="text" name="homePoints" value="${esc(heading('homePoints','Team Leaderboard'))}"></div>
      <div class="field"><label>Homepage — Individual Leaderboard section</label><input type="text" name="homeIndividual" value="${esc(heading('homeIndividual','Individual Leaderboard'))}"></div>
      <div class="field"><label>Homepage — Online Registration section</label><input type="text" name="homeRegister" value="${esc(heading('homeRegister','Online Registration'))}"></div>
      <div class="field"><label>Events page</label><input type="text" name="events" value="${esc(heading('events','Festival Events'))}"></div>
      <div class="field"><label>Schedule page</label><input type="text" name="schedule" value="${esc(heading('schedule','Festival Schedule'))}"></div>
      <div class="field"><label>Points Table page</label><input type="text" name="points" value="${esc(heading('points','Points Table'))}"></div>
      <div class="field"><label>Results page</label><input type="text" name="results" value="${esc(heading('results','Event Results'))}"></div>
      <div class="field"><label>Winners Gallery page</label><input type="text" name="winners" value="${esc(heading('winners','Winners Gallery'))}"></div>
      <div class="field"><label>Highlights page</label><input type="text" name="highlights" value="${esc(heading('highlights','Highlights'))}"></div>
      <div class="field"><label>Executive Members page</label><input type="text" name="exec" value="${esc(heading('exec','Executive Members'))}"></div>
      <div class="field"><label>Teams page</label><input type="text" name="teams" value="${esc(heading('teams','Teams'))}"></div>
      <div class="field"><label>About page</label><input type="text" name="about" value="${esc(heading('about','Thanawuush\'26'))}"></div>
      <button class="btn btn-primary btn-sm" type="submit">Save Headings</button>
    </form>
  </div>
  <h3>🎵 Homepage Music</h3>
  <div class="card" style="margin-bottom:22px;">
    <p style="font-size:.85rem;color:var(--ink-soft);margin-top:0;">Plays automatically when someone opens the homepage (most browsers require one tap first if they haven't interacted with the site yet — a "Tap to Play Music" button appears automatically in that case). A Play/Pause button is shown to visitors right in the hero section.</p>
    <form data-action="save-home-music">
      <div class="field"><label>Music URL</label><input type="text" name="homeMusicUrl" value="${esc(s.homeMusicUrl||'')}" placeholder="Paste an audio URL — or upload a file below"><input type="file" accept="audio/*" data-audio-target="homeMusicUrl" style="margin-top:6px;width:100%;font-size:.8rem;"></div>
      <div class="field"><label><input type="checkbox" name="homeMusicAutoplay" style="width:auto;display:inline-block;margin-right:6px;" ${s.homeMusicAutoplay!==false?'checked':''}> Autoplay when homepage opens</label></div>
      <button class="btn btn-primary btn-sm" type="submit">Save Music</button>
    </form>
  </div>
  <h3>🎵 Points Table Music</h3>
  <div class="card" style="margin-bottom:22px;">
    <p style="font-size:.85rem;color:var(--ink-soft);margin-top:0;">Plays automatically when someone opens the Points Table page (most browsers require one tap first if they haven't interacted with the site yet — a "Tap to Play Music" button appears automatically in that case).</p>
    <form data-action="save-points-music">
      <div class="field"><label>Music URL</label><input type="text" name="pointsMusicUrl" value="${esc(s.pointsMusicUrl||'')}" placeholder="Paste an audio URL — or upload a file below"><input type="file" accept="audio/*" data-audio-target="pointsMusicUrl" style="margin-top:6px;width:100%;font-size:.8rem;"></div>
      <div class="field"><label><input type="checkbox" name="pointsMusicAutoplay" style="width:auto;display:inline-block;margin-right:6px;" ${s.pointsMusicAutoplay!==false?'checked':''}> Autoplay when Points Table opens</label></div>
      <button class="btn btn-primary btn-sm" type="submit">Save Music</button>
    </form>
  </div>
  <h3>Customize Points Table</h3>
  <div class="card">
    <p style="font-size:.85rem;color:var(--ink-soft);margin-top:0;">Add extra columns to the Points Table (e.g. "Attendance", "Discipline Score", "Bonus"). New columns appear immediately on the public Points page and in each team's edit form.</p>
    ${(s.customPointColumns||[]).length ? `
      <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:16px;">
        ${(s.customPointColumns||[]).map(c=>`<span class="house-chip">${esc(c.label)}<button type="button" class="icon-btn" style="margin-left:6px;padding:2px 7px;" data-action="delete-point-column" data-key="${esc(c.key)}">✕</button></span>`).join('')}
      </div>` : ''}
    <form data-action="add-point-column">
      <div class="field"><label>New Column Name</label><input type="text" name="label" placeholder="e.g. Discipline Score" required></div>
      <button class="btn btn-ghost btn-sm" type="submit">+ Add Column</button>
    </form>
  </div>`;
}

/* ================= MODAL SYSTEM ================= */
function showModal(html, video){
  document.getElementById('modalRoot').innerHTML = `<div class="modal-backdrop" data-action="backdrop"><div class="modal ${video?'modal-video-wrap':''}" style="${video?'max-width:800px;':''}">${html}</div></div>`;
}
function closeModal(){ document.getElementById('modalRoot').innerHTML = ''; }

function fieldHtml(f, val){
  val = val===undefined || val===null ? '' : val;
  if(f.type==='select'){
    return `<div class="field"><label>${f.label}</label><select name="${f.key}">${f.options.map(o=>`<option value="${esc(o)}" ${val===o?'selected':''}>${o===''?'—':o}</option>`).join('')}</select></div>`;
  }
  if(f.type==='textarea'){
    return `<div class="field"><label>${f.label}</label><textarea name="${f.key}">${esc(val)}</textarea></div>`;
  }
  if(f.type==='photo'){
    return `<div class="field">
      <label>${f.label}</label>
      <input type="text" name="${f.key}" value="${esc(val)}" placeholder="Paste a photo URL — or upload a file below">
      <input type="file" accept="image/*" data-photo-target="${f.key}" style="margin-top:6px;width:100%;font-size:.8rem;">
      <div data-preview-for="${f.key}" style="margin-top:6px;">${val?`<img src="${esc(photoSrc(val))}" style="width:56px;height:56px;object-fit:cover;border-radius:8px;border:1px solid var(--line);" onerror="this.style.display='none';">`:''}</div>
    </div>`;
  }
  return `<div class="field"><label>${f.label}</label><input type="${f.type}" name="${f.key}" value="${esc(val)}"></div>`;
}
function resizeImageFile(file, maxDim, quality){
  return new Promise((resolve, reject)=>{
    const reader = new FileReader();
    reader.onerror = ()=>reject(reader.error||new Error('read failed'));
    reader.onload = ()=>{
      const img = new Image();
      img.onerror = ()=>reject(new Error('bad image'));
      img.onload = ()=>{
        let w = img.width, h = img.height;
        if(w>h){ if(w>maxDim){ h = Math.round(h*maxDim/w); w = maxDim; } }
        else { if(h>maxDim){ w = Math.round(w*maxDim/h); h = maxDim; } }
        const canvas = document.createElement('canvas');
        canvas.width = w; canvas.height = h;
        canvas.getContext('2d').drawImage(img, 0, 0, w, h);
        resolve(canvas.toDataURL('image/jpeg', quality));
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}

const EVENT_FIELDS = [
  {key:'eventCode', label:'Event Code', type:'text'},
  {key:'category', label:'Category', type:'select', options:CATEGORIES},
  {key:'eventType', label:'Event Type', type:'select', options:EVENT_TYPES},
  {key:'description', label:'Description', type:'textarea'},
  {key:'rules', label:'Event-Specific Rules (one per line)', type:'textarea'},
  {key:'date', label:'Date', type:'date'},
  {key:'time', label:'Time', type:'time'},
  {key:'venue', label:'Venue', type:'select', options:VENUES},
  {key:'status', label:'Event Status', type:'select', options:EVENT_STATUSES},
  {key:'regStatus', label:'Registration', type:'select', options:REG_STATUSES},
  {key:'regStart', label:'Registration Start', type:'date'},
  {key:'regEnd', label:'Registration End', type:'date'},
  {key:'maxParticipants', label:'Maximum Participants', type:'text'},
  {key:'participants', label:'Participants (comma-separated names)', type:'text'},
  {key:'statusOverride', label:'Manual Status Override', type:'select', options:['','Upcoming','Ongoing','Completed']}
];
function eventProgramOf(name, cat){
  const n = String(name||'').trim().toUpperCase();
  if(!n || !cat) return '';
  const match = OFFICIAL_PROGRAMS.find(p=>p[2]===cat && (p[1].toUpperCase()===n || n.includes(p[1].toUpperCase())));
  return match ? match[1] : '';
}
function openEventModal(id){
  const isEdit = !!id;
  const ev = isEdit ? STATE.events.find(e=>e.id===id) : {
    name:'', category:PARTICIPATION_CATEGORIES[0], eventType:'Stage', eventCode:'',
    date:FEST_DATES[0], time:TIMES[0], venue:VENUES[0], participants:'', description:'', rules:'',
    status:'ACTIVE', regStatus:'OPEN', regStart:'', regEnd:'', maxParticipants:'', statusOverride:''
  };
  const category = ev.category || CATEGORIES[0];
  const programs = OFFICIAL_PROGRAMS.filter(p=>p[2]===category);
  const currentProgram = eventProgramOf(ev.name, category) || (ev.programName || '');
  const isCustom = !!(ev.name && !currentProgram);
  const fields = EVENT_FIELDS.filter(f=>f.key!=='category' && f.key!=='eventType');
  showModal(`
    <button class="modal-close" data-action="close-modal">×</button>
    <h3>${isEdit?'Edit':'Add'} Event</h3>
    ${isEdit ? `<div class="notice">Registration link: <b>${esc(eventRegUrl(ev))}</b> — <button type="button" class="icon-btn" data-action="copy-reg-link" data-id="${esc(ev.id)}">📋 Copy</button> <button type="button" class="icon-btn" data-action="share-reg-link" data-id="${esc(ev.id)}">📤 Share</button><br>${eventRegCount(ev)} registration(s) recorded${isEventCancelled(ev)?' · <b style="color:var(--danger)">This event is CANCELLED — cancelling keeps all historical data intact.</b>':''}</div>` : ''}
    <form data-action="save-event" data-id="${id||''}">
      <div class="field">
        <label>Category (shows this category's programs below)</label>
        <select name="category" id="evmCategory">${CATEGORIES.map(c=>`<option value="${esc(c)}" ${c===category?'selected':''}>${esc(c)}</option>`).join('')}</select>
      </div>
      <div class="field-row" style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
        <div class="field">
          <label>Event Name</label>
          <select name="evmProgram" id="evmProgram">${programs.map(p=>`<option value="${esc(p[1])}" ${p[1]===currentProgram?'selected':''}>${esc(p[1])}</option>`).join('')}</select>
        </div>
        <div class="field">
          <label>Event Type <span class="req">*</span> <span style="font-weight:400;color:var(--ink-soft);">(used for participation limits)</span></label>
          <select name="eventType" id="evmEventType">
            ${EVENT_TYPES.map(t=>`<option value="${t}" ${t===eventTypeOf(ev)?'selected':''}>${t==='Stage'?'🎭 Stage':'📝 Non-Stage'}</option>`).join('')}
          </select>
        </div>
      </div>
      <div class="field">
        <label style="display:flex;align-items:center;gap:8px;font-weight:500;"><input type="checkbox" id="evmCustom" ${isCustom?'checked':''}> Not in the list? Type the name manually</label>
        <input type="text" name="evmCustomName" id="evmCustomName" placeholder="e.g. XYZ Competition" value="${isCustom?esc(ev.name):''}" style="margin-top:8px;${isCustom?'':'display:none;'}">
      </div>
      ${fields.map(f=>fieldHtml(f, ev[f.key])).join('')}
      <div class="modal-actions">
        ${isEdit?`<button type="button" class="btn btn-danger btn-sm" data-action="set-event-status" data-id="${id}" data-status="CANCELLED">Cancel Event</button><button type="button" class="btn btn-danger btn-sm" data-action="delete-event" data-id="${id}">Delete</button>`:''}
        <button type="submit" class="btn btn-primary btn-sm">Save Event</button>
      </div>
    </form>
  `);
}

const POINTS_FIELDS = [
  {key:'team', label:'Team / House', type:'text'},
  {key:'points', label:'Total Points', type:'number'},
  {key:'genIndividual', label:'General — Individual Points', type:'number'},
  {key:'genGroup', label:'General — Group Points', type:'number'},
  {key:'genGeneral', label:'General — General Points', type:'number'},
  {key:'catSenior', label:'Category-wise — Senior', type:'number'},
  {key:'catJunior', label:'Category-wise — Junior', type:'number'},
  {key:'catSubJunior', label:'Category-wise — Sub Junior', type:'number'},
  {key:'catGeneral', label:'Category-wise — General', type:'number'},
  {key:'evtStage', label:'Event Type — Stage Events', type:'number'},
  {key:'evtNonStage', label:'Event Type — Off-Stage Events', type:'number'}
];
function openPointsModal(team){
  const isEdit = !!team;
  const p = isEdit ? STATE.points.find(x=>x.team===team) : { team:'', points:0, genIndividual:0, genGroup:0, genGeneral:0, catSenior:0, catJunior:0, catSubJunior:0, catGeneral:0, evtStage:0, evtNonStage:0 };
  const cols = STATE.settings.customPointColumns || [];
  const fields = POINTS_FIELDS.concat(cols.map(c=>({key:c.key, label:c.label, type:'text'})));
  showModal(`
    <button class="modal-close" data-action="close-modal">×</button>
    <h3>${isEdit?'Edit':'Add'} Team Points</h3>
    <form data-action="save-points" data-orig="${team||''}">
      ${fields.map(f=>fieldHtml(f, p[f.key])).join('')}
      <div class="modal-actions"><button type="submit" class="btn btn-primary btn-sm">Save</button></div>
    </form>
  `);
}

const RESULT_FIELDS = [
  {key:'eventName', label:'Event Name', type:'text'},
  {key:'date', label:'Result Date', type:'date'},
  {key:'firstTeam', label:'1st Place Team/House', type:'text'},
  {key:'firstWinner', label:'1st Place Winner Name(s)', type:'text'},
  {key:'firstPhoto', label:'1st Place Photo', type:'photo'},
  {key:'firstPoints', label:'Points for 1st Place', type:'number'},
  {key:'secondTeam', label:'2nd Place Team/House', type:'text'},
  {key:'secondWinner', label:'2nd Place Winner Name(s)', type:'text'},
  {key:'secondPhoto', label:'2nd Place Photo', type:'photo'},
  {key:'secondPoints', label:'Points for 2nd Place', type:'number'},
  {key:'thirdTeam', label:'3rd Place Team/House', type:'text'},
  {key:'thirdWinner', label:'3rd Place Winner Name(s)', type:'text'},
  {key:'thirdPhoto', label:'3rd Place Photo', type:'photo'},
  {key:'thirdPoints', label:'Points for 3rd Place', type:'number'}
];
function openResultModal(id){
  const isEdit = !!id;
  const r = isEdit ? STATE.results.find(x=>x.id===id) : { eventName:'', date:FEST_DATES[0], firstTeam:'', firstWinner:'', firstPhoto:'', firstPoints:10, secondTeam:'', secondWinner:'', secondPhoto:'', secondPoints:7, thirdTeam:'', thirdWinner:'', thirdPhoto:'', thirdPoints:5 };
  showModal(`
    <button class="modal-close" data-action="close-modal">×</button>
    <h3>${isEdit?'Edit':'Add'} Result</h3>
    <div class="notice">Upload a photo directly from your device, or paste a photo URL instead. Leave blank to auto-generate a placeholder avatar. Set how many points each placement is worth — then use "Apply to Points Table" from the Results list to credit those points to each team's total.</div>
    <form data-action="save-result" data-id="${id||''}">
      ${RESULT_FIELDS.map(f=>fieldHtml(f, r[f.key])).join('')}
      <div class="modal-actions">
        ${isEdit?'<button type="button" class="btn btn-danger btn-sm" data-action="delete-result" data-id="'+id+'">Delete</button>':''}
        <button type="submit" class="btn btn-primary btn-sm">Save Result</button>
      </div>
    </form>
  `);
}

const HIGHLIGHT_FIELDS = [
  {key:'title', label:'Video Title', type:'text'},
  {key:'eventName', label:'Event Name', type:'text'},
  {key:'date', label:'Upload Date', type:'date'},
  {key:'type', label:'Type', type:'select', options:['youtube','mp4','photo']},
  {key:'url', label:'YouTube Video ID, MP4 URL, or Photo URL', type:'text'},
  {key:'featured', label:'Featured on Homepage', type:'select', options:['no','yes']}
];
function openHighlightModal(id){
  const isEdit = !!id;
  const h = isEdit ? STATE.highlights.find(x=>x.id===id) : { title:'', eventName:'', date:FEST_DATES[0], type:'youtube', url:'', featured:'no' };
  showModal(`
    <button class="modal-close" data-action="close-modal">×</button>
    <h3>${isEdit?'Edit':'Add'} Highlight Video</h3>
    <div class="notice">For YouTube, paste just the video ID (the part after v=). For MP4, paste a direct video file URL. For Photo, paste a direct image URL. Or upload a file directly below.</div>
    <form data-action="save-highlight" data-id="${id||''}">
      ${HIGHLIGHT_FIELDS.map(f=>fieldHtml(f, h[f.key])).join('')}
      <div class="field">
        <label>Upload File Directly <span style="font-weight:400;color:var(--ink-soft);">(short clips only — see note below)</span></label>
        <input type="file" accept="video/*,image/*" data-highlight-upload style="width:100%;font-size:.8rem;">
        <div class="notice" style="margin-top:8px;">Direct upload works for <b>clips under ~3.5MB each</b> — each uploaded video/photo gets its own storage slot, so this limit is per-file, not shared across your other videos. For longer footage, upload it to YouTube (free, unlimited length) and paste the video ID above instead — it plays exactly the same way here.</div>
      </div>
      <div class="modal-actions">
        ${isEdit?'<button type="button" class="btn btn-danger btn-sm" data-action="delete-highlight" data-id="'+id+'">Delete</button>':''}
        <button type="submit" class="btn btn-primary btn-sm">Save Video</button>
      </div>
    </form>
  `);
}

/* ================= EXECUTIVE MEMBER MODAL ================= */
function openExecMemberModal(cat, id){
  const isEdit = !!id;
  const list = STATE.execMembers[cat] || [];
  const catInfo = EXEC_CATEGORIES.find(c=>c.key===cat);
  const singular = catInfo.label.endsWith('s') ? catInfo.label.slice(0,-1) : catInfo.label;
  const m = isEdit ? list.find(x=>x.id===id) : { name:'', post:'', photo:'', team:(STATE.settings.rosterTeams||[])[0]||'' };
  const fields = [{key:'name', label:'Name', type:'text'},{key:'post', label:'Post / Designation', type:'text'},{key:'photo', label:'Photo', type:'photo'}];
  if(cat==='teamLeaders'){ fields.push({key:'team', label:'Team', type:'select', options:(STATE.settings.rosterTeams||[])}); }
  showModal(`
    <button class="modal-close" data-action="close-modal">×</button>
    <h3>${isEdit?'Edit':'Add'} ${esc(singular)}</h3>
    <form data-action="save-exec-member" data-cat="${cat}" data-id="${id||''}">
      ${fields.map(f=>fieldHtml(f, m[f.key])).join('')}
      <div class="modal-actions">
        ${isEdit?`<button type="button" class="btn btn-danger btn-sm" data-action="delete-exec-member" data-cat="${cat}" data-id="${id}">Delete</button>`:''}
        <button type="submit" class="btn btn-primary btn-sm">Save</button>
      </div>
    </form>
  `);
}

/* ================= TEAM MEMBER MODAL ================= */
const TEAM_MEMBER_FIELDS = [
  {key:'chestNumber', label:'Chest Number', type:'text'},
  {key:'name', label:'Name', type:'text'},
  {key:'category', label:'Category', type:'select', options:MEMBER_CATEGORIES},
  {key:'points', label:'Individual Points', type:'number'},
  {key:'stageIndividual', label:'Stage Programs — Individual', type:'text'},
  {key:'stageTeam', label:'Stage Programs — Group', type:'text'},
  {key:'offStageIndividual', label:'Off-Stage Programs — Individual', type:'text'},
  {key:'offStageTeam', label:'Off-Stage Programs — Group', type:'text'}
];
function openTeamMemberModal(id){
  const isEdit = !!id;
  const team = STATE.adminTeamSel;
  const m = isEdit ? STATE.teamMembers.find(x=>x.id===id) : { chestNumber:'', name:'', category:MEMBER_CATEGORIES[0], points:0, stageIndividual:'', stageTeam:'', offStageIndividual:'', offStageTeam:'' };
  showModal(`
    <button class="modal-close" data-action="close-modal">×</button>
    <h3>${isEdit?'Edit':'Add'} Team Member — ${esc(team)}</h3>
    <div class="notice">List more than one program separated by commas if a member has multiple in that slot.</div>
    <form data-action="save-team-member" data-id="${id||''}" data-team="${esc(team)}">
      ${TEAM_MEMBER_FIELDS.map(f=>fieldHtml(f, m[f.key])).join('')}
      <div class="modal-actions">
        ${isEdit?`<button type="button" class="btn btn-danger btn-sm" data-action="delete-team-member" data-id="${id}">Delete</button>`:''}
        <button type="submit" class="btn btn-primary btn-sm">Save Member</button>
      </div>
    </form>
  `);
}

/* ================= PHOTO SHARE (winners / results) ================= */
function openPhotoShareModal(photo, title, subtitle){
  showModal(`
    <button class="modal-close" data-action="close-modal">×</button>
    <h3 style="text-align:center;">${esc(title)}</h3>
    <div class="qr-box">
      <img src="${esc(photo)}" alt="" style="width:220px;height:220px;object-fit:cover;border-radius:10px;margin:0 auto 14px;border:4px solid #fff;box-shadow:var(--shadow);display:block;" onerror="this.onerror=null;this.src='${esc(brokenImagePlaceholder())}';">
      ${subtitle?`<p style="font-size:.85rem;color:var(--ink-soft);margin-top:-6px;margin-bottom:14px;">${esc(subtitle)}</p>`:''}
      <div class="share-link-row">
        <input type="text" id="photoShareLinkInput" readonly value="${esc(photo)}">
        <button class="btn btn-primary btn-sm" data-action="copy-photo-link">Copy Link</button>
      </div>
      <div style="display:flex; gap:10px; justify-content:center; margin-top:14px; flex-wrap:wrap;">
        <a class="btn btn-ghost btn-sm" href="${esc(photo)}" download target="_blank" rel="noopener">⬇ Download</a>
        <button class="btn btn-ghost btn-sm" data-action="native-share-photo" data-photo="${esc(photo)}" data-title="${esc(title)}" data-subtitle="${esc(subtitle||'')}">Share via device…</button>
      </div>
    </div>
  `);
}

/* ================= SHARE / QR ================= */
function openShareModal(){
  const url = location.origin + location.pathname;
  const qrSrc = 'https://api.qrserver.com/v1/create-qr-code/?size=280x280&color=11-61-46&data=' + encodeURIComponent(url);
  const canNativeShare = !!(navigator.share);
  showModal(`
    <button class="modal-close" data-action="close-modal">×</button>
    <h3 style="text-align:center;">Share DarussalamFest.com</h3>
    <div class="qr-box">
      <img src="${qrSrc}" alt="QR code linking to this website">
      <p style="font-size:.85rem;color:var(--ink-soft);">Scan to open the festival site instantly.</p>
      <div class="share-link-row">
        <input type="text" id="shareLinkInput" readonly value="${esc(url)}">
        <button class="btn btn-primary btn-sm" data-action="copy-share-link">Copy</button>
      </div>
      ${canNativeShare ? `<button class="btn btn-ghost btn-sm" style="margin-top:14px;" data-action="native-share">Share via device…</button>` : ''}
    </div>
  `);
}

/* Credits (or debits) the individual scoreboard from a result so the
   Individual Leaderboard is derived from results, not hand-typed.
   A winner is only credited when a roster member's name matches —
   nothing is invented, and the same pass is reversed on Undo. */
function creditIndividualPoints(result, sign){
  const winners = [
    { name: result.firstWinner,  team: result.firstTeam,  pts: Number(result.firstPoints)||0 },
    { name: result.secondWinner, team: result.secondTeam, pts: Number(result.secondPoints)||0 },
    { name: result.thirdWinner,  team: result.thirdTeam,  pts: Number(result.thirdPoints)||0 }
  ];
  let changed = false;
  winners.forEach(w=>{
    if(!w.name || !w.pts) return;
    const key = String(w.name).trim().toLowerCase();
    STATE.teamMembers.forEach(m=>{
      if(String(m.name||'').trim().toLowerCase() !== key) return;
      if(w.team && m.team && String(m.team) !== String(w.team)) return;
      m.points = Math.max(0, (Number(m.points)||0) + sign * w.pts);
      changed = true;
    });
  });
  return changed;
}
async function applyPointsToTables(result){
  const credits = [[result.firstTeam, result.firstPoints||0],[result.secondTeam, result.secondPoints||0],[result.thirdTeam, result.thirdPoints||0]];
  credits.forEach(([team, pts])=>{
    if(!team) return;
    let entry = STATE.points.find(p=>p.team===team);
    if(!entry){ entry = { team, points:0 }; STATE.points.push(entry); }
    entry.points = (entry.points||0) + pts;
  });
  const touched = creditIndividualPoints(result, +1);
  if(touched) await dbSet('df:teamMembers', STATE.teamMembers);
  await dbSet('df:points', STATE.points);
}
async function undoPointsFromTables(result){
  const debits = [[result.firstTeam, result.firstPoints||0],[result.secondTeam, result.secondPoints||0],[result.thirdTeam, result.thirdPoints||0]];
  debits.forEach(([team, pts])=>{
    if(!team) return;
    const entry = STATE.points.find(p=>p.team===team);
    if(entry){ entry.points = Math.max(0, (entry.points||0) - pts); }
  });
  const touched = creditIndividualPoints(result, -1);
  if(touched) await dbSet('df:teamMembers', STATE.teamMembers);
  await dbSet('df:points', STATE.points);
}

document.addEventListener('click', async (e)=>{
  const t = e.target.closest('[data-action]');
  if(!t) return;
  const action = t.dataset.action;

  if(action==='toggle-nav'){ document.getElementById('navLinks').classList.toggle('open'); return; }
  if(action==='exit-tv'){ location.hash = '#points'; return; }
  if(action==='tv-view'){ STATE.tvViewMode = t.dataset.mode; render(); return; }
  if(action==='toggle-points-music'){
    const audio = document.getElementById('pointsBgAudio');
    if(!audio) return;
    if(audio.paused){ audio.play().catch(()=>{ showMusicPlayPrompt('pointsBgAudio'); }); } else { audio.pause(); }
    render();
    return;
  }
  if(action==='toggle-home-music'){
    const audio = document.getElementById('homeBgAudio');
    if(!audio) return;
    if(audio.paused){ audio.play().catch(()=>{ showMusicPlayPrompt('homeBgAudio'); }); } else { audio.pause(); }
    render();
    return;
  }
  if(action==='preview-celebration'){
    const input = document.getElementById('celebrateMsgInput');
    playCelebration((input && input.value.trim()) || '🎉 Congratulations!');
    return;
  }
  if(action==='open-celebration'){
    openCelebrationScreen({
      name: t.dataset.name, group: t.dataset.group, category: t.dataset.category,
      position: Number(t.dataset.position), points: Number(t.dataset.points)
    });
    return;
  }
  if(action==='celebrate-backdrop' && e.target===t){ closeCelebrationScreen(); return; }
  if(action==='celebrate-close'){ closeCelebrationScreen(); return; }
  if(action==='celebrate-view-results'){ closeCelebrationScreen(); location.hash = '#results'; return; }
  if(action==='celebrate-download'){
    const overlay = t.closest('.celebrate-overlay');
    const payload = overlay ? JSON.parse(overlay.dataset.payload || '{}') : {};
    downloadCertificate(payload);
    return;
  }
  if(action==='celebrate-sound-toggle'){
    STATE.celebrateSoundOn = !(STATE.celebrateSoundOn !== false);
    t.textContent = STATE.celebrateSoundOn ? '🔊' : '🔇';
    t.setAttribute('aria-pressed', STATE.celebrateSoundOn);
    if(STATE.celebrateSoundOn && !prefersReducedMotion()) playSuccessChime();
    return;
  }
  if(action==='open-share'){ openShareModal(); return; }
  if(action==='share-photo'){ openPhotoShareModal(t.dataset.photo, t.dataset.title, t.dataset.subtitle); return; }
  if(action==='copy-photo-link'){
    const input = document.getElementById('photoShareLinkInput');
    try{ await navigator.clipboard.writeText(input.value); toast('Photo link copied!'); }
    catch(err){ input.select(); document.execCommand('copy'); toast('Photo link copied!'); }
    return;
  }
  if(action==='native-share-photo'){
    const photo = t.dataset.photo, title = t.dataset.title, subtitle = t.dataset.subtitle;
    try{
      const resp = await fetch(photo);
      const blob = await resp.blob();
      const file = new File([blob], 'photo.jpg', { type: blob.type || 'image/jpeg' });
      if(navigator.canShare && navigator.canShare({ files:[file] })){
        await navigator.share({ files:[file], title, text: subtitle });
        return;
      }
      throw new Error('file share unsupported');
    }catch(err){
      if(navigator.share){
        try{ await navigator.share({ title, text: subtitle, url: photo }); return; }
        catch(err2){ /* user cancelled */ return; }
      }
      toast('Sharing isn\'t supported on this device — use Copy Link or Download instead.');
    }
    return;
  }
  if(action==='copy-share-link'){
    const input = document.getElementById('shareLinkInput');
    try{ await navigator.clipboard.writeText(input.value); toast('Link copied!'); }
    catch(err){ input.select(); document.execCommand('copy'); toast('Link copied!'); }
    return;
  }
  if(action==='native-share'){
    const url = location.origin + location.pathname;
    try{ await navigator.share({ title:'DarussalamFest.com', text:'Check out the festival schedule, results and highlights!', url }); }
    catch(err){ /* user cancelled — no action needed */ }
    return;
  }
  if(action==='backdrop' && e.target===t){ closeModal(); return; }
  if(action==='close-modal'){ closeModal(); return; }
  if(action==='clear-event-filters'){ STATE.filters = {q:'',category:'',date:'',venue:''}; render(); return; }
  if(action==='winner-filter'){ STATE.winnerFilter = t.dataset.val; render(); return; }
  if(action==='play-video'){ openVideoModal(t.dataset.id); return; }
  if(action==='view-event-rules'){ openEventRulesModal(t.dataset.id); return; }

  if(action==='admin-tab'){ STATE.adminTab = t.dataset.tab; render(); return; }
  if(action==='admin-logout'){ STATE.isAdmin = false; render(); toast('Logged out.'); return; }
  if(action==='init-sample-data'){
    t.disabled = true; t.textContent = 'Setting up…';
    const count = await initializeSampleDataIfEmpty();
    render();
    toast(count>0 ? `Sample data saved (${count} section${count===1?'':'s'})!` : 'Data already exists — nothing to set up.');
    return;
  }

  if(action==='add-event'){ openEventModal(null); return; }
  if(action==='edit-event'){ openEventModal(t.dataset.id); return; }
  if(action==='delete-event'){
    if(!confirm('Delete this event? This cannot be undone.')) return;
    STATE.events = STATE.events.filter(x=>x.id!==t.dataset.id);
    await dbSet('df:events', STATE.events);
    closeModal(); render(); toast('Event deleted.'); return;
  }

  if(action==='add-points'){ openPointsModal(null); return; }
  if(action==='edit-points'){ openPointsModal(t.dataset.team); return; }
  if(action==='delete-points'){
    if(!confirm('Remove this team from the points table?')) return;
    STATE.points = STATE.points.filter(x=>x.team!==t.dataset.team);
    await dbSet('df:points', STATE.points);
    render(); toast('Team removed.'); return;
  }

  if(action==='add-result'){ openResultModal(null); return; }
  if(action==='edit-result'){ openResultModal(t.dataset.id); return; }
  if(action==='delete-result'){
    if(!confirm('Delete this result?')) return;
    const r = STATE.results.find(x=>x.id===t.dataset.id);
    if(r){ for(const k of ['firstPhoto','secondPhoto','thirdPhoto']){ await maybeDeleteOldBlob(r[k], null); } }
    STATE.results = STATE.results.filter(x=>x.id!==t.dataset.id);
    await dbSet('df:results', STATE.results);
    closeModal(); render(); toast('Result deleted.'); return;
  }
  if(action==='apply-points'){
    const r = STATE.results.find(x=>x.id===t.dataset.id);
    if(!r || r.pointsApplied) return;
    const credits = [[r.firstTeam, r.firstPoints||0],[r.secondTeam, r.secondPoints||0],[r.thirdTeam, r.thirdPoints||0]];
    credits.forEach(([team, pts])=>{
      if(!team) return;
      let entry = STATE.points.find(p=>p.team===team);
      if(!entry){ entry = { team, points:0 }; STATE.points.push(entry); }
      entry.points = (entry.points||0) + pts;
    });
    r.pointsApplied = true;
    await dbSet('df:results', STATE.results);
    await dbSet('df:points', STATE.points);
    render(); toast('Points applied to the Points Table.'); return;
  }
  if(action==='undo-apply-points'){
    const r = STATE.results.find(x=>x.id===t.dataset.id);
    if(!r || !r.pointsApplied) return;
    const debits = [[r.firstTeam, r.firstPoints||0],[r.secondTeam, r.secondPoints||0],[r.thirdTeam, r.thirdPoints||0]];
    debits.forEach(([team, pts])=>{
      if(!team) return;
      const entry = STATE.points.find(p=>p.team===team);
      if(entry){ entry.points = Math.max(0, (entry.points||0) - pts); }
    });
    r.pointsApplied = false;
    await dbSet('df:results', STATE.results);
    await dbSet('df:points', STATE.points);
    render(); toast('Points undone.'); return;
  }

  if(action==='add-highlight'){ openHighlightModal(null); return; }
  if(action==='edit-highlight'){ openHighlightModal(t.dataset.id); return; }
  if(action==='delete-highlight'){
    if(!confirm('Delete this video?')) return;
    const h = STATE.highlights.find(x=>x.id===t.dataset.id);
    if(h){ await maybeDeleteOldBlob(h.url, null); }
    STATE.highlights = STATE.highlights.filter(x=>x.id!==t.dataset.id);
    await dbSet('df:highlights', STATE.highlights);
    closeModal(); render(); toast('Video deleted.'); return;
  }

  if(action==='delete-point-column'){
    const key = t.dataset.key;
    if(!confirm('Remove this column from the Points Table? Its data will be lost.')) return;
    STATE.settings.customPointColumns = (STATE.settings.customPointColumns||[]).filter(c=>c.key!==key);
    STATE.points.forEach(p=>{ delete p[key]; });
    await dbSet('df:settings', STATE.settings);
    await dbSet('df:points', STATE.points);
    render(); toast('Column removed.'); return;
  }

  if(action==='add-exec-member'){ openExecMemberModal(t.dataset.cat, null); return; }
  if(action==='edit-exec-member'){ openExecMemberModal(t.dataset.cat, t.dataset.id); return; }
  if(action==='delete-exec-member'){
    if(!confirm('Remove this person?')) return;
    const cat = t.dataset.cat;
    const m = (STATE.execMembers[cat]||[]).find(x=>x.id===t.dataset.id);
    if(m){ await maybeDeleteOldBlob(m.photo, null); }
    STATE.execMembers[cat] = (STATE.execMembers[cat]||[]).filter(x=>x.id!==t.dataset.id);
    await dbSet('df:execMembers', STATE.execMembers);
    closeModal(); render(); toast('Removed.'); return;
  }

  if(action==='select-admin-team'){ STATE.adminTeamSel = t.dataset.team; render(); return; }
  if(action==='delete-roster-team'){
    const team = t.dataset.team;
    if(!confirm('Delete team "'+team+'"? All its members will be removed too.')) return;
    STATE.settings.rosterTeams = (STATE.settings.rosterTeams||[]).filter(x=>x!==team);
    if(STATE.settings.teamColors){ delete STATE.settings.teamColors[team]; }
    STATE.teamMembers = STATE.teamMembers.filter(m=>m.team!==team);
    if(STATE.adminTeamSel===team){ STATE.adminTeamSel = STATE.settings.rosterTeams[0] || ''; }
    await dbSet('df:settings', STATE.settings);
    await dbSet('df:teamMembers', STATE.teamMembers);
    render(); toast('Team deleted.'); return;
  }
  if(action==='add-team-member'){ openTeamMemberModal(null); return; }
  if(action==='edit-team-member'){ openTeamMemberModal(t.dataset.id); return; }
  if(action==='delete-team-member'){
    if(!confirm('Remove this member?')) return;
    STATE.teamMembers = STATE.teamMembers.filter(x=>x.id!==t.dataset.id);
    await dbSet('df:teamMembers', STATE.teamMembers);
    closeModal(); render(); toast('Member removed.'); return;
  }
  if(action==='view-member'){ openMemberModal(t.dataset.id); return; }
  if(action==='clear-team-search'){ STATE.teamSearch=''; render(); return; }

  /* ---- individual leaderboard category tabs ---- */
  if(action==='ind-category'){ STATE.individualCategory = t.dataset.val; render(); return; }

  /* ---- admin: toggle cancelled/inactive events ---- */
  if(action==='toggle-show-cancelled'){ STATE.showCancelled = !STATE.showCancelled; render(); return; }

  /* ---- event registration link: copy / share ---- */
  if(action==='copy-reg-link'){
    const ev = STATE.events.find(x=>x.id===t.dataset.id);
    if(!ev) return;
    copyText(eventRegUrl(ev), 'Registration link copied!'); return;
  }
  if(action==='share-reg-link'){
    const ev = STATE.events.find(x=>x.id===t.dataset.id);
    if(!ev) return;
    openShareEventModal(ev); return;
  }
  if(action==='native-share-reg'){
    const ev = STATE.events.find(x=>x.id===t.dataset.id);
    if(!ev || !navigator.share) return;
    try{ await navigator.share({ title:festName(), text:eventShareText(ev), url:eventRegUrl(ev) }); }
    catch(err){ /* user cancelled */ }
    return;
  }

  /* ---- event status management ---- */
  if(action==='set-event-status'){
    const ev = STATE.events.find(x=>x.id===t.dataset.id);
    if(!ev) return;
    ev.status = t.dataset.status;
    if(t.dataset.status==='CANCELLED'){
      ev.regStatus = 'CANCELLED';
      ev.cancelledReason = ev.cancelledReason || 'This event has been cancelled by the organiser.';
    } else if(t.dataset.status==='ACTIVE' && ev.regStatus==='CANCELLED'){
      ev.regStatus = 'OPEN';
    }
    await dbSet('df:events', STATE.events);
    closeModal(); render(); toast('Event status set to ' + t.dataset.status + '.'); return;
  }

  /* ---- registration management ---- */
  if(action==='view-registration'){ openViewRegistrationModal(t.dataset.id); return; }
  if(action==='edit-registration'){ openEditRegistrationModal(t.dataset.id); return; }
  if(action==='delete-registration'){
    if(!confirm('Delete this registration? This cannot be undone.')) return;
    STATE.registrations = STATE.registrations.filter(x=>x.id!==t.dataset.id);
    await dbSet('df:registrations', STATE.registrations);
    closeModal(); render(); toast('Registration deleted.'); return;
  }
  if(action==='add-registration'){ openAddRegistrationModal(); return; }
  if(action==='export-registrations'){ exportRegistrationsCsv(); return; }
  if(action==='set-registration-status'){
    const r = STATE.registrations.find(x=>x.id===t.dataset.id);
    if(!r) return;
    r.status = t.dataset.status;
    await dbSet('df:registrations', STATE.registrations);
    closeModal(); render(); toast('Registration status updated.'); return;
  }

  /* ---- branding resets ---- */
  if(action==='reset-logo'){
    STATE.settings.logoUrl = '';
    STATE.settings.useDefaultLogo = true;
    await dbSet('df:settings', STATE.settings);
    render(); toast('Logo reset to the default mark.'); return;
  }
  if(action==='reset-theme'){
    STATE.settings.theme = Object.assign({}, DEFAULT_FEST_BRANDING.theme);
    await dbSet('df:settings', STATE.settings);
    applyTheme(); render(); toast('Theme reset to the default palette.'); return;
  }
  if(action==='reset-limits'){
    STATE.settings.participationLimits = JSON.parse(JSON.stringify(DEFAULT_PARTICIPATION_LIMITS));
    await dbSet('df:settings', STATE.settings);
    render(); toast('Participation limits reset to defaults.'); return;
  }
  if(action==='clear-result-search'){ STATE.resultFilters.q=''; renderResultsOnly(); return; }
});

document.addEventListener('submit', async (e)=>{
  const form = e.target.closest('[data-action]');
  if(!form) return;
  e.preventDefault();
  const action = form.dataset.action;
  const data = Object.fromEntries(new FormData(form).entries());

  if(action==='trigger-celebration'){
    const message = (data.message||'').trim() || '🎉 Congratulations!';
    await dbSet('df:celebrate', { ts: Date.now(), message });
    toast('Celebration sent — TV displays will show it within a few seconds.');
    return;
  }

  if(action==='admin-login'){
    // Built-in admin login — credentials come from the ADMIN_EMAIL /
    // ADMIN_PASSWORD constants at the top of this file. No Supabase Auth
    // account is needed; the session lasts until you log out.
    if(String(data.email||'').trim().toLowerCase() === ADMIN_EMAIL && String(data.password||'') === ADMIN_PASSWORD){
      STATE.isAdmin = true; STATE.adminTab='events'; render(); toast('Welcome back, Admin!');
      return;
    }
    toast('Login failed: wrong email or password.');
    return;
  }

  if(action==='contact-form'){
    form.reset(); toast('Message sent — thank you! (Demo form)'); return;
  }

  if(action==='save-event'){
    const id = form.dataset.id;
    const customChecked = !!(form.querySelector('[name="evmCustom"]')||{}).checked;
    const customName = String((form.querySelector('[name="evmCustomName"]')||{}).value||'').trim();
    const program = String((form.querySelector('[name="evmProgram"]')||{}).value||'').trim();
    if(customChecked && customName){
      data.name = customName;
    } else {
      const prog = OFFICIAL_PROGRAMS.find(p=>p[1]===program && p[2]===data.category);
      data.name = prog ? (prog[0]+' — '+prog[1]+' ['+prog[2]+']') : program;
    }
    delete data.evmProgram; delete data.evmCustom; delete data.evmCustomName;
    if(!data.name){ toast('Please choose or type the event name.'); return; }
    if(id){
      const ev = STATE.events.find(x=>x.id===id);
      Object.assign(ev, data);
    } else {
      const newId = 'ev-'+Date.now();
      STATE.events.unshift({ id:newId, createdAt: Date.now(), ...data });
    }
    await dbSet('df:events', STATE.events);
    closeModal(); render(); toast('Event saved.'); return;
  }

  if(action==='save-points'){
    const orig = form.dataset.orig;
    ['points','genIndividual','genGroup','genGeneral','catSenior','catJunior','catSubJunior','catGeneral','evtStage','evtNonStage'].forEach(k=>{
      if(k in data) data[k] = Number(data[k])||0;
    });
    if(orig){
      const p = STATE.points.find(x=>x.team===orig);
      Object.assign(p, data);
    } else {
      STATE.points.push({ ...data });
    }
    await dbSet('df:points', STATE.points);
    closeModal(); render(); toast('Points saved.'); return;
  }

  if(action==='save-result'){
    const id = form.dataset.id;
    ['firstPhoto','secondPhoto','thirdPhoto'].forEach((k,i)=>{
      if(!data[k]){
        const winnerKey = ['firstWinner','secondWinner','thirdWinner'][i];
        const teamKey = ['firstTeam','secondTeam','thirdTeam'][i];
        const seed = data[winnerKey] || data[teamKey] || 'winner';
        data[k] = avatarUrl(seed+data.eventName+i);
      }
    });
    ['firstPoints','secondPoints','thirdPoints'].forEach(k=>{ if(k in data) data[k] = Number(data[k])||0; });
    const existingResult = id ? STATE.results.find(x=>x.id===id) : null;
    for(const k of ['firstPhoto','secondPhoto','thirdPhoto']){
      const oldVal = existingResult ? existingResult[k] : null;
      data[k] = await storePhotoIfNeeded(data[k]);
      await maybeDeleteOldBlob(oldVal, data[k]);
    }
    if(existingResult){
      Object.assign(existingResult, data);
    } else {
      STATE.results.push({ id:'res-'+Date.now(), pointsApplied:false, ...data });
    }
    await dbSet('df:results', STATE.results);
    closeModal(); render(); toast('Result saved — use Apply in the Results list to credit points.'); return;
  }

  if(action==='save-highlight'){
    const id = form.dataset.id;
    const existingHighlight = id ? STATE.highlights.find(x=>x.id===id) : null;
    const oldUrl = existingHighlight ? existingHighlight.url : null;
    data.url = await storePhotoIfNeeded(data.url);
    await maybeDeleteOldBlob(oldUrl, data.url);
    if(existingHighlight){
      Object.assign(existingHighlight, data);
    } else {
      STATE.highlights.push({ id:'hl-'+Date.now(), ...data });
    }
    if(data.featured==='yes'){
      STATE.highlights.forEach(h=>{ if(h.id!==(id||STATE.highlights[STATE.highlights.length-1].id)) h.featured='no'; });
    }
    await dbSet('df:highlights', STATE.highlights);
    closeModal(); render(); toast('Video saved.'); return;
  }

  if(action==='save-hero'){
    data.autoplay = !!data.autoplay;
    const oldImageUrl = STATE.settings.hero.imageUrl;
    data.imageUrl = await storePhotoIfNeeded(data.imageUrl);
    await maybeDeleteOldBlob(oldImageUrl, data.imageUrl);
    STATE.settings.hero = { ...STATE.settings.hero, ...data };
    await dbSet('df:settings', STATE.settings);
    render(); toast('Hero background updated.'); return;
  }

  if(action==='save-page-bg'){
    const page = form.dataset.page;
    STATE.settings.pageBg[page] = { type:data.type, value:data.value };
    await dbSet('df:settings', STATE.settings);
    render(); toast('Background updated for '+page+'.'); return;
  }

  if(action==='save-site-settings'){
    const oldLogoUrl = STATE.settings.logoUrl;
    if('logoUrl' in data){
      data.logoUrl = await storePhotoIfNeeded(data.logoUrl);
      await maybeDeleteOldBlob(oldLogoUrl, data.logoUrl);
    }
    Object.assign(STATE.settings, data);
    await dbSet('df:settings', STATE.settings);
    render(); toast('Site content updated.'); return;
  }

  if(action==='save-page-headings'){
    STATE.settings.pageHeadings = { ...(STATE.settings.pageHeadings||{}), ...data };
    await dbSet('df:settings', STATE.settings);
    render(); toast('Page headings updated.'); return;
  }

  if(action==='save-points-music'){
    const oldUrl = STATE.settings.pointsMusicUrl;
    data.pointsMusicUrl = await storePhotoIfNeeded(data.pointsMusicUrl);
    await maybeDeleteOldBlob(oldUrl, data.pointsMusicUrl);
    data.pointsMusicAutoplay = !!data.pointsMusicAutoplay;
    Object.assign(STATE.settings, data);
    await dbSet('df:settings', STATE.settings);
    render(); toast('Points Table music updated.'); return;
  }

  if(action==='save-home-music'){
    const oldUrl = STATE.settings.homeMusicUrl;
    data.homeMusicUrl = await storePhotoIfNeeded(data.homeMusicUrl);
    await maybeDeleteOldBlob(oldUrl, data.homeMusicUrl);
    data.homeMusicAutoplay = !!data.homeMusicAutoplay;
    Object.assign(STATE.settings, data);
    await dbSet('df:settings', STATE.settings);
    render(); toast('Homepage music updated.'); return;
  }

  if(action==='add-point-column'){
    const label = (data.label||'').trim();
    if(!label){ return; }
    const key = 'custom_'+label.toLowerCase().replace(/[^a-z0-9]+/g,'_').replace(/^_+|_+$/g,'')+'_'+Date.now().toString(36).slice(-4);
    STATE.settings.customPointColumns = (STATE.settings.customPointColumns||[]).concat([{key, label}]);
    await dbSet('df:settings', STATE.settings);
    render(); toast('Column added — set values from the Points tab.'); return;
  }

  if(action==='save-exec-member'){
    const cat = form.dataset.cat; const id = form.dataset.id;
    STATE.execMembers[cat] = STATE.execMembers[cat] || [];
    const list = STATE.execMembers[cat];
    const existingMember = id ? list.find(x=>x.id===id) : null;
    const oldPhoto = existingMember ? existingMember.photo : null;
    if('photo' in data){
      data.photo = await storePhotoIfNeeded(data.photo);
      await maybeDeleteOldBlob(oldPhoto, data.photo);
    }
    if(existingMember){
      Object.assign(existingMember, data);
    } else {
      list.push({ id: cat+'-'+Date.now(), ...data });
    }
    await dbSet('df:execMembers', STATE.execMembers);
    closeModal(); render(); toast('Saved.'); return;
  }

  if(action==='add-roster-team'){
    const team = (data.team||'').trim();
    if(!team) return;
    STATE.settings.rosterTeams = STATE.settings.rosterTeams || [];
    if(!STATE.settings.rosterTeams.includes(team)){ STATE.settings.rosterTeams.push(team); }
    STATE.settings.teamColors = STATE.settings.teamColors || {};
    STATE.settings.teamColors[team] = data.color || '#146B52';
    STATE.adminTeamSel = team;
    await dbSet('df:settings', STATE.settings);
    render(); toast('Team added.'); return;
  }

  if(action==='save-team-member'){
    const id = form.dataset.id; const team = form.dataset.team;
    data.team = team;
    data.points = Number(data.points)||0;
    if(id){
      const m = STATE.teamMembers.find(x=>x.id===id);
      Object.assign(m, data);
    } else {
      STATE.teamMembers.push({ id:'mem-'+Date.now(), ...data });
    }
    await dbSet('df:teamMembers', STATE.teamMembers);
    closeModal(); render(); toast('Member saved.'); return;
  }

  /* ---- student online registration ---- */
  if(action==='submit-registration'){
    const result = await submitRegistration(data);
    if(result.ok){
      result.eventSlug = eventSlug(result.event);
      STATE.regSuccess = result;
      render();
      toast('Registration submitted!');
      return;
    }
    toast('Registration could not be submitted:\n' + result.errors.join('\n'));
    return;
  }

  /* ---- admin branding / fest details ---- */
  if(action==='save-logo'){
    const oldLogoUrl = STATE.settings.logoUrl;
    data.logoUrl = await storePhotoIfNeeded(data.logoUrl);
    await maybeDeleteOldBlob(oldLogoUrl, data.logoUrl);
    STATE.settings.logoUrl = data.logoUrl;
    STATE.settings.useDefaultLogo = !data.logoUrl;
    await dbSet('df:settings', STATE.settings);
    updateBrand(); render(); toast('Logo saved.'); return;
  }
  if(action==='save-fest-details'){
    Object.assign(STATE.settings, data);
    await dbSet('df:settings', STATE.settings);
    updateBrand(); render(); toast('Fest details updated.'); return;
  }
  if(action==='save-theme'){
    STATE.settings.theme = Object.assign({}, DEFAULT_FEST_BRANDING.theme, data);
    await dbSet('df:settings', STATE.settings);
    applyTheme(); render(); toast('Theme saved.'); return;
  }

  /* ---- admin participation limits ---- */
  if(action==='save-participation-limits'){
    STATE.settings.participationLimits = STATE.settings.participationLimits || {};
    PARTICIPATION_CATEGORIES.forEach(cat=>{
      const d = DEFAULT_PARTICIPATION_LIMITS[cat];
      STATE.settings.participationLimits[cat] = {
        minStage: Number(data[cat+'|minStage'])||d.minStage,
        minNonStage: Number(data[cat+'|minNonStage'])||d.minNonStage,
        maxTotal: Number(data[cat+'|maxTotal'])||d.maxTotal
      };
    });
    await dbSet('df:settings', STATE.settings);
    render(); toast('Participation limits saved.'); return;
  }

  /* ---- admin registration (manual add / edit) ---- */
  if(action==='save-registration'){
    const id = form.dataset.id;
    if(id){
      const r = STATE.registrations.find(x=>x.id===id);
      if(r){ Object.assign(r, data); await dbSet('df:registrations', STATE.registrations); }
      closeModal(); render(); toast('Registration updated.'); return;
    }
    const result = await submitRegistration(data);
    if(result.ok){
      if(result.registration && data.status){
        result.registration.status = data.status;
        await dbSet('df:registrations', STATE.registrations);
      }
      closeModal(); render(); toast('Registration added!');
    } else {
      toast('Could not add registration:\n' + result.errors.join('\n'));
    }
    return;
  }
});

document.addEventListener('input', (e)=>{
  if(e.target.id==='evSearch'){ STATE.filters.q = e.target.value; renderEventsOnly(); }
  if(e.target.id==='teamSearchInput'){ STATE.teamSearch = e.target.value; renderTeamsOnly(); }
  if(e.target.id==='resSearch'){ STATE.resultFilters.q = e.target.value; currentRoute()==='results' ? renderResultsOnly() : refreshResultsSearch(); }
  if(e.target.id==='regAdminSearch'){ STATE.regFilters.q = e.target.value; renderAdminMainOnly(); }
});
document.addEventListener('change', (e)=>{
  if(e.target.id==='evCategory'){ STATE.filters.category = e.target.value; renderEventsOnly(); }
  if(e.target.id==='evmCategory'){
    const cat = e.target.value;
    const sel = document.getElementById('evmProgram');
    const opts = OFFICIAL_PROGRAMS.filter(p=>p[2]===cat).map(p=>p[1]);
    if(sel) sel.innerHTML = opts.map(p=>`<option value="${esc(p)}">${esc(p)}</option>`).join('');
    const cb = document.getElementById('evmCustom');
    if(cb) cb.checked = false;
    const ci = document.getElementById('evmCustomName');
    if(ci){ ci.value=''; ci.style.display='none'; }
  }
  if(e.target.id==='evmCustom'){
    const ci = document.getElementById('evmCustomName');
    if(ci) ci.style.display = e.target.checked ? '' : 'none';
  }
  if(e.target.id==='evDate'){ STATE.filters.date = e.target.value; renderEventsOnly(); }
  if(e.target.id==='evVenue'){ STATE.filters.venue = e.target.value; renderEventsOnly(); }

  /* ---- results filters ---- */
  if(e.target.id==='resCategory'){ STATE.resultFilters.category = e.target.value; renderResultsOnly(); }
  if(e.target.id==='resEvent'){ STATE.resultFilters.event = e.target.value; renderResultsOnly(); }
  if(e.target.id==='resTeam'){ STATE.resultFilters.team = e.target.value; renderResultsOnly(); }

  /* ---- admin registration filters ---- */
  if(e.target.id==='regAdminEvent'){ STATE.regFilters.event = e.target.value; renderAdminMainOnly(); }
  if(e.target.id==='regAdminCategory'){ STATE.regFilters.category = e.target.value; renderAdminMainOnly(); }
  if(e.target.id==='regAdminTeam'){ STATE.regFilters.team = e.target.value; renderAdminMainOnly(); }
  if(e.target.id==='regAdminStatus'){ STATE.regFilters.status = e.target.value; renderAdminMainOnly(); }

  /* ---- student registration form: category drives the programme list ---- */
  if(e.target.id==='regCategorySelect'){
    const cat = e.target.value;
    STATE.regCategory = cat;
    const evSel = document.getElementById('regEvent');
    const catEvents = registrableEvents().filter(x=>eventRegWindowOpen(x) && x.category===cat);
    if(evSel){
      evSel.innerHTML = catEvents.length
        ? catEvents.map(x=>`<option value="${esc(x.id)}">${esc(x.name)} — ${esc(eventTypeOf(x))}</option>`).join('')
        : `<option value="">— No open programmes in ${esc(cat)} —</option>`;
      if(catEvents.length) evSel.value = catEvents[0].id;
      const form = evSel.closest('form');
      if(form) form.dataset.eventId = evSel.value;
    }
    const prog = document.getElementById('regProgressHost');
    if(prog) prog.outerHTML = registrationProgressHtml(cat, '');
    updateRegEventDetails();
  }
  if(e.target.id==='regEvent'){
    const form = e.target.closest('form');
    if(form) form.dataset.eventId = e.target.value;
    updateRegEventDetails();
  }
  if(e.target.dataset && e.target.dataset.action==='set-team-color'){
    const team = e.target.dataset.team;
    STATE.settings.teamColors = STATE.settings.teamColors || {};
    STATE.settings.teamColors[team] = e.target.value;
    dbSet('df:settings', STATE.settings).then(()=>{ render(); toast('Team color updated.'); });
  }
  if(e.target.matches('input[type="file"][data-photo-target]')){
    const file = e.target.files && e.target.files[0];
    if(!file) return;
    const key = e.target.dataset.photoTarget;
    const form = e.target.closest('form') || document;
    const textInput = form.querySelector(`[name="${key}"]`);
    if(!textInput) return;
    resizeImageFile(file, 480, 0.65).then(dataUrl=>{
      textInput.value = dataUrl;
      const typeSelect = form.querySelector('select[name="type"]');
      if(key==='imageUrl' && typeSelect){ typeSelect.value = 'image'; }
      const preview = form.querySelector(`[data-preview-for="${key}"]`);
      if(preview){ preview.innerHTML = `<img src="${dataUrl}" style="width:56px;height:56px;object-fit:cover;border-radius:8px;border:1px solid var(--line);">`; }
      toast('Photo ready — click Save to apply.');
    }).catch(()=>{ toast('Could not read that photo — try a smaller file.'); });
  }
  if(e.target.matches('input[type="file"][data-highlight-upload]')){
    const file = e.target.files && e.target.files[0];
    if(!file) return;
    const MAX_BYTES = 3.5*1024*1024;
    if(file.size > MAX_BYTES){
      toast('That file is too large (over 3.5MB) — upload it to YouTube instead and paste the video ID.');
      e.target.value = '';
      return;
    }
    const form = e.target.closest('form') || document;
    const urlInput = form.querySelector('[name="url"]');
    const typeSelect = form.querySelector('select[name="type"]');
    const reader = new FileReader();
    reader.onload = ()=>{
      if(urlInput) urlInput.value = reader.result;
      if(typeSelect){ typeSelect.value = file.type.startsWith('video') ? 'mp4' : 'photo'; }
      toast('File ready — click Save Video to apply.');
    };
    reader.onerror = ()=>{ toast('Could not read that file — try a smaller one.'); };
    reader.readAsDataURL(file);
  }
  if(e.target.matches('input[type="file"][data-audio-target]')){
    const file = e.target.files && e.target.files[0];
    if(!file) return;
    const MAX_BYTES = 3.5*1024*1024;
    if(file.size > MAX_BYTES){
      toast('That audio file is too large (over 3.5MB) — try a shorter clip or host it elsewhere and paste the URL.');
      e.target.value = '';
      return;
    }
    const key = e.target.dataset.audioTarget;
    const form = e.target.closest('form') || document;
    const urlInput = form.querySelector(`[name="${key}"]`);
    const reader = new FileReader();
    reader.onload = ()=>{
      if(urlInput) urlInput.value = reader.result;
      toast('Audio ready — click Save to apply.');
    };
    reader.onerror = ()=>{ toast('Could not read that audio file — try a smaller one.'); };
    reader.readAsDataURL(file);
  }
});
function renderEventsOnly(){
  if(currentRoute()!=='events') return;
  const app = document.getElementById('app');
  const scrollY = window.scrollY;
  app.innerHTML = renderEvents();
  window.scrollTo(0, scrollY);
  setupRevealObserver();
  const s = document.getElementById('evSearch'); if(s){ s.focus(); s.setSelectionRange(s.value.length, s.value.length); }
}
function renderTeamsOnly(){
  if(currentRoute()!=='teams') return;
  const app = document.getElementById('app');
  const scrollY = window.scrollY;
  app.innerHTML = renderTeamsPage();
  window.scrollTo(0, scrollY);
  setupRevealObserver();
  const s = document.getElementById('teamSearchInput'); if(s){ s.focus(); s.setSelectionRange(s.value.length, s.value.length); }
}

function renderResultsOnly(){
  if(currentRoute()!=='results') return;
  const app = document.getElementById('app');
  const scrollY = window.scrollY;
  app.innerHTML = renderResults();
  window.scrollTo(0, scrollY);
  setupRevealObserver();
  const s = document.getElementById('resSearch'); if(s){ s.focus(); s.setSelectionRange(s.value.length, s.value.length); }
}
function refreshResultsSearch(){
  const sr = document.getElementById('resultsSearchResults');
  if(sr){ sr.innerHTML = resultsSearchResultsHtml(currentRoute()==='home'); }
  const rc = document.querySelector('#resultsSearchHost .results-count');
  if(rc){ rc.innerHTML = resultsSearchCountHtml(); }
}
function renderAdminMainOnly(){
  if(currentRoute()!=='admin') return;
  const host = document.querySelector('.admin-main');
  if(!host) return;
  const scrollY = window.scrollY;
  host.innerHTML = adminTabContent();
  window.scrollTo(0, scrollY);
  const s = document.getElementById('regAdminSearch'); if(s){ s.focus(); s.setSelectionRange(s.value.length, s.value.length); }
}

function recomputePointsFromResults(){
  const totals = {};
  STATE.points.forEach(p=> totals[p.team]=0);
  STATE.results.forEach(r=>{
    totals[r.firstTeam] = (totals[r.firstTeam]||0) + 10;
    totals[r.secondTeam] = (totals[r.secondTeam]||0) + 7;
    totals[r.thirdTeam] = (totals[r.thirdTeam]||0) + 5;
  });
  return Object.keys(totals).map(team=>({ team, points: totals[team] }));
}

boot();
