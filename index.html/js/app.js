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
  ['17','RUBIK CUBE','Sub Junior','NS'],
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
const HOUSES = [
  {name:"Zumurrud House", color:"#146B52"},
  {name:"Yaqut House", color:"#A23B2E"},
  {name:"Firoza House", color:"#2C7DA0"},
  {name:"Dhahab House", color:"#B8892B"}
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
function defaultRosterTeams(){ return ['Al-Furqan','An-Noor','Al-Huda']; }
function defaultTeamColors(){
  const colors = { 'Al-Furqan':'#146B52', 'An-Noor':'#A23B2E', 'Al-Huda':'#B8892B' };
  HOUSES.forEach(h=>{ colors[h.name] = h.color; });
  return colors;
}

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
  'df:teamMembers':'teamMembers', 'df:settings':'settings'
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
  const events = []; let idx = 0;
  const TYPE_LABEL = { ST:'Stage — Individual', SG:'Stage — Group', NS:'Non-Stage — Individual', NG:'Non-Stage — Group' };
  OFFICIAL_PROGRAMS.forEach(([code, name, cat, type], i)=>{
    idx++;
    const dayIndex = i % FEST_DATES.length;
    const venuePair = CATEGORY_VENUES[cat];
    const venue = venuePair[i % venuePair.length];
    const time = TIMES[i % TIMES.length];
    events.push({
      id: 'ev-'+code+'-'+cat.charAt(0)+(cat.indexOf(' ')>0?cat.charAt(cat.indexOf(' ')+1):''),
      name: code+' — '+name+' ['+cat+']',
      category: cat,
      type: TYPE_LABEL[type] || type,
      date: FEST_DATES[dayIndex],
      time: time,
      venue: venue,
      statusOverride: ''
    });
  });
  return events;
}

function computeStatus(ev){
  if(ev.statusOverride){ return ev.statusOverride; }
  const today = new Date(); today.setHours(0,0,0,0);
  const evDate = new Date(ev.date+'T00:00:00');
  if(evDate.getTime() < today.getTime()) return 'Completed';
  if(evDate.getTime() === today.getTime()) return 'Ongoing';
  return 'Upcoming';
}

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
    siteTitle: 'DarussalamFest.com',
    heroHeading: 'DarussalamFest.com',
    tabTitle: 'DarussalamFest.com',
    tagline: "Darussalam Institution's Annual Festival — a week of recitation, sport, art and knowledge, competed for house and honor.",
    aboutText: "DarussalamFest is the annual inter-house festival of Darussalam Institution, bringing together Qira'at, athletics, debate, science, arts and drama into a single week of friendly competition. Four houses — Zumurrud, Yaqut, Firoza and Dhahab — compete across 100+ events for the House Championship Shield, judged on skill, sportsmanship and adab.",
    contactEmail: 'festival@darussalamfest.com',
    contactPhone: '+1 (555) 019-2026',
    contactAddress: 'Darussalam Institution, Education Avenue, Your City',
    logoUrl: '',
    customPointColumns: [],
    pointsMusicUrl: '',
    pointsMusicAutoplay: true,
    homeMusicUrl: '',
    homeMusicAutoplay: true,
    pageHeadings: {
      events:'Festival Events', schedule:'Festival Schedule', points:'Points Table',
      results:'Event Results', winners:'Winners Gallery', highlights:'Highlights',
      exec:'Executive Members', teams:'Teams', about:'DarussalamFest',
      homeFeatured:'Featured Highlight', homePoints:'Current Points Table'
    },
    teamColors: defaultTeamColors(),
    rosterTeams: defaultRosterTeams(),
    hero: { type:'color', colorValue:'linear-gradient(160deg,#0B3D2E,#146B52 55%,#0B3D2E)', imageUrl:'', videoUrl:'', autoplay:false },
    pageBg: {
      events:{type:'color', value:'#FAF7EF'},
      schedule:{type:'color', value:'#FAF7EF'},
      points:{type:'color', value:'#FAF7EF'},
      results:{type:'color', value:'#FAF7EF'},
      winners:{type:'color', value:'#FAF7EF'},
      highlights:{type:'color', value:'#FAF7EF'},
      exec:{type:'color', value:'#FAF7EF'},
      teams:{type:'color', value:'#FAF7EF'},
      about:{type:'color', value:'#FAF7EF'},
      contact:{type:'color', value:'#FAF7EF'}
    }
  };
}

/* ================= GLOBAL STATE ================= */
const STATE = {
  events: [], results: [], points: [], highlights: [], settings: null,
  execMembers: null, teamMembers: [],
  isAdmin: false, adminTab: 'events',
  filters: { q:'', category:'', date:'', venue:'' },
  winnerFilter: 'all', teamSearch: '', tvViewMode: 'list'
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
  if(!settings){ settings = defaultSettings(); await dbSet('df:settings', settings); STATE.settings = settings; count++; } else { STATE.settings = settings; }
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
  STATE.settings = settings;
  if(!STATE.settings.rosterTeams || !STATE.settings.rosterTeams.length){ STATE.settings.rosterTeams = defaultRosterTeams(); }

  let execMembers = await dbGet('df:execMembers');
  if(!execMembers){ execMembers = generateSeedExecMembers(); if(!sb || STATE.isAdmin) await dbSet('df:execMembers', execMembers); }
  STATE.execMembers = execMembers;

  let teamMembers = await dbGet('df:teamMembers');
  if(!teamMembers){ teamMembers = generateSeedTeamMembers(STATE.settings.rosterTeams); if(!sb || STATE.isAdmin) await dbSet('df:teamMembers', teamMembers); }
  STATE.teamMembers = teamMembers;

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
  const url = photoSrc(STATE.settings.logoUrl);
  const defaultSvg = variant==='nav'
    ? `<svg width="${size}" height="${size}" viewBox="0 0 100 100"><rect width="100" height="100" rx="20" fill="#0B3D2E"/><g fill="none" stroke="#C7A028" stroke-width="6"><polygon points="50,10 71,29 90,50 71,71 50,90 29,71 10,50 29,29"/><polygon points="50,25 65,35 75,50 65,65 50,75 35,65 25,50 35,35"/></g></svg>`
    : `<svg width="${size}" height="${size}" viewBox="0 0 100 100"><g fill="none" stroke="#E9CE84" stroke-width="6"><polygon points="50,10 71,29 90,50 71,71 50,90 29,71 10,50 29,29"/><polygon points="50,25 65,35 75,50 65,65 50,75 35,65 25,50 35,35"/></g></svg>`;
  if(!url) return defaultSvg;
  return `<span style="display:inline-block;width:${size}px;height:${size}px;">
    <img src="${esc(url)}" alt="DarussalamFest logo" style="width:${size}px;height:${size}px;object-fit:contain;border-radius:6px;display:block;" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
    <span style="display:none;">${defaultSvg}</span>
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
  const title = STATE.settings.siteTitle || 'DarussalamFest.com';
  document.title = STATE.settings.tabTitle || title;
  const nt = document.getElementById('navBrandText'); if(nt) nt.innerHTML = brandTextHtml(title);
  const ft = document.getElementById('footerBrandText');
  if(ft){
    const idx = title.indexOf('Fest');
    ft.innerHTML = idx>=0
      ? esc(title.slice(0,idx)) + '<span style="color:#E9CE84;">' + esc(title.slice(idx, idx+4)) + '</span>' + esc(title.slice(idx+4))
      : esc(title);
  }
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

/* reveal-on-scroll */
let revealObserver = null;
function setupRevealObserver(){
  if(revealObserver) revealObserver.disconnect();
  revealObserver = new IntersectionObserver((entries)=>{
    entries.forEach(en=>{ if(en.isIntersecting){ en.target.classList.add('in'); revealObserver.unobserve(en.target); } });
  }, { threshold:.12 });
  document.querySelectorAll('.reveal').forEach(el=> revealObserver.observe(el));
}

/* ================= ROUTER ================= */
window.addEventListener('hashchange', render);
function currentRoute(){ return (location.hash||'#home').replace('#',''); }

function render(){
  updateBrand();
  const route = currentRoute();
  if(route==='tv'){ document.body.classList.add('tv-mode'); } else { document.body.classList.remove('tv-mode'); stopTVPolling(); }
  if(route==='points'){ ensurePointsMusic(); } else { stopPointsMusic(); }
  if(route==='home'){ ensureHomeMusic(); } else { stopHomeMusic(); }
  document.querySelectorAll('.nav-links a').forEach(a=>{
    a.classList.toggle('active', a.dataset.nav===route);
  });
  document.getElementById('navLinks').classList.remove('open');
  const app = document.getElementById('app');
  const pageBg = STATE.settings.pageBg[route];
  if(pageBg){
    app.style.background = pageBg.type==='image' ? ('center/cover no-repeat url("'+pageBg.value+'")') : pageBg.value;
  } else {
    app.style.background = '';
  }
  const renderers = { home:renderHome, events:renderEvents, schedule:renderSchedule, points:renderPoints, results:renderResults, winners:renderWinners, highlights:renderHighlights, exec:renderExec, teams:renderTeamsPage, about:renderAbout, contact:renderContact, admin:renderAdmin, tv:renderTV };
  const fn = renderers[route] || renderHome;
  app.innerHTML = fn();
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
    heroStyle = 'background:'+(hero.colorValue||'linear-gradient(160deg,#0B3D2E,#146B52 55%,#0B3D2E)')+';';
  }
  const upcoming = STATE.events.filter(e=>computeStatus(e)==='Upcoming').length;
  const ongoing = STATE.events.filter(e=>computeStatus(e)==='Ongoing').length;
  const completed = STATE.events.filter(e=>computeStatus(e)==='Completed').length;
  const featured = STATE.highlights.find(h=>h.featured==='yes') || STATE.highlights[0];

  return `
  <section class="hero" style="${heroStyle}">
    ${heroBgHtml}
    <div class="hero-pattern">${patternRepeat()}</div>
    <div class="container hero-inner">
      <div class="eyebrow" style="color:#E9CE84;">Darussalam Institution Presents</div>
      <h1>${esc(STATE.settings.heroHeading || STATE.settings.siteTitle)}</h1>
      <p class="tagline">${esc(STATE.settings.tagline)}</p>
      <div class="hero-actions">
        <a href="#events" class="btn btn-gold">Explore Events</a>
        <a href="#schedule" class="btn btn-outline">View Schedule</a>
        ${homeMusicToggleHtml()}
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="grid grid-4">
        <div class="stat-mini reveal"><b>${STATE.events.length}+</b><span>Total Events</span></div>
        <div class="stat-mini reveal"><b>${upcoming}</b><span>Upcoming</span></div>
        <div class="stat-mini reveal"><b>${ongoing}</b><span>Ongoing Today</span></div>
        <div class="stat-mini reveal"><b>${completed}</b><span>Completed</span></div>
      </div>
    </div>
  </section>

  <section class="section section-alt">
    <div class="container">
      <div class="section-head">
        <div class="eyebrow">Featured</div>
        <h2>${esc(heading('homeFeatured','Featured Highlight'))}</h2>
        <div class="divider"><span class="line"></span><span class="mark" style="color:var(--gold); width:16px;">${starSVG()}</span><span class="line"></span></div>
      </div>
      ${featured ? videoCardHtml(featured, true) : '<div class="empty-state">No highlight video yet.</div>'}
      <div style="text-align:center; margin-top:26px;"><a href="#highlights" class="btn btn-ghost">See all highlights →</a></div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="section-head">
        <div class="eyebrow">Standings</div>
        <h2>${esc(heading('homePoints','Current Points Table'))}</h2>
      </div>
      ${pointsTableHtml(STATE.points.slice().sort((a,b)=>b.points-a.points))}
      <div style="text-align:center; margin-top:22px;"><a href="#points" class="btn btn-ghost">Full points table →</a></div>
    </div>
  </section>
  `;
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
  let list = STATE.events.filter(e=>{
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
        <p>${STATE.events.length} events across ${CATEGORIES.length} categories, over ${FEST_DATES.length} days.</p>
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
function eventCardHtml(e){
  const status = computeStatus(e);
  return `<div class="card event-card reveal">
    <div class="event-top">
      <div>
        <div class="event-cat">${esc(e.category)}</div>
        <h3>${esc(e.name)}</h3>
      </div>
      <span class="badge ${badgeClass(status)}">${status}</span>
    </div>
    <div class="event-meta">
      <span>📅 ${fmtDate(e.date)}</span>
      <span>🕐 ${fmtTime(e.time)}</span>
      <span>📍 ${esc(e.venue)}</span>
      ${e.participants ? `<span>🧑‍🤝‍🧑 ${esc(e.participants)}</span>` : ''}
    </div>
    ${e.rules ? `<button class="btn btn-ghost btn-sm" style="margin-top:6px; align-self:flex-start;" data-action="view-event-rules" data-id="${e.id}">📋 View Rules</button>` : ''}
  </div>`;
}
function openEventRulesModal(id){
  const e = STATE.events.find(x=>x.id===id); if(!e) return;
  const rules = (e.rules||'').split('\n').map(r=>r.trim()).filter(Boolean);
  showModal(`
    <button class="modal-close" data-action="close-modal">×</button>
    <h3>${esc(e.name)} — Rules</h3>
    <ol style="padding-left:20px; display:flex; flex-direction:column; gap:10px; margin:0;">
      ${rules.map(r=>`<li>${esc(r)}</li>`).join('') || '<li>No specific rules published for this event.</li>'}
    </ol>
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
  const sorted = STATE.points.slice().sort((a,b)=>b.points-a.points);
  return `
  <section class="section">
    <div class="container">
      <div class="section-head">
        <div class="eyebrow">Standings</div>
        <h2>${esc(heading('points','Points Table'))}</h2>
        <p>Total points for each house, broken down by General, Category-wise and Event Type.</p>
        <div style="margin-top:14px; display:flex; gap:10px; justify-content:center; flex-wrap:wrap;"><a href="#tv" class="btn btn-primary btn-sm">📺 TV Display Mode</a>${pointsMusicToggleHtml()}</div>
      </div>
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

/* ================= RESULTS ================= */
function renderResults(){
  const sorted = STATE.results.slice().sort((a,b)=> b.date.localeCompare(a.date));
  return `
  <section class="section">
    <div class="container">
      <div class="section-head">
        <div class="eyebrow">Announced</div>
        <h2>${esc(heading('results','Event Results'))}</h2>
        <p>${sorted.length} result${sorted.length===1?'':'s'} announced so far.</p>
      </div>
      <div class="grid grid-3">
        ${sorted.map(r=>resultCardHtml(r)).join('') || '<div class="empty-state">No results announced yet.</div>'}
      </div>
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
function individualLeaderboardHtml(limit){
  const sorted = STATE.teamMembers.slice().sort((a,b)=>(b.points||0)-(a.points||0));
  const top = limit ? sorted.slice(0,limit) : sorted;
  const maxPts = sorted.length ? (sorted[0].points||0) : 0;
  return `<div class="card reveal" style="margin-bottom:30px;">
    <h3 style="margin-top:0;">🏆 Individual Leaderboard${limit && sorted.length>limit?' — Top '+limit:''}</h3>
    <div class="table-wrap"><table>
      <thead><tr><th>Rank</th><th>Chest No.</th><th>Name</th><th>Team</th><th>Category</th><th>Points</th><th></th></tr></thead>
      <tbody>
        ${top.map((m,i)=>{
          const isLeader = maxPts>0 && (m.points||0)===maxPts;
          return `<tr class="${isLeader?'pb-leader':''}">
            <td>${i+1}</td><td>${esc(m.chestNumber)}</td>
            <td>${isLeader?'👑 ':''}${esc(m.name)}</td>
            <td><span style="display:inline-flex;align-items:center;gap:6px;"><span style="width:9px;height:9px;border-radius:50%;background:${esc(teamColor(m.team))};display:inline-block;"></span>${esc(m.team)}</span></td>
            <td>${esc(m.category)}</td><td class="points-cell">${m.points||0}</td>
            <td><button class="icon-btn" data-action="open-celebration" data-name="${esc(m.name)}" data-group="${esc(m.team)}" data-category="${esc(m.category)}" data-position="${i+1}" data-points="${m.points||0}">🎉 Celebrate</button></td>
          </tr>`;
        }).join('') || `<tr><td colspan="7" style="color:var(--ink-soft);">No participants yet.</td></tr>`}
      </tbody>
    </table></div>
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
      ${individualLeaderboardHtml(10)}
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
    ['events','Events'], ['points','Points'], ['results','Results'],
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
          ${tabs.map(t=>`<button class="${STATE.adminTab===t[0]?'active':''}" data-action="admin-tab" data-tab="${t[0]}">${t[1]}</button>`).join('')}
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
function adminEvents(){
  const sorted = STATE.events.slice().sort(compareEvents);
  return `
  <div class="admin-toolbar"><h3 style="margin:0;">Events (${STATE.events.length})</h3><button class="btn btn-primary btn-sm" data-action="add-event">+ Add Event</button></div>
  <div class="table-wrap"><table>
    <thead><tr><th>Name</th><th>Category</th><th>Date</th><th>Time</th><th>Venue</th><th>Participants</th><th>Status</th><th></th></tr></thead>
    <tbody>
      ${sorted.map(e=>`
        <tr>
          <td>${esc(e.name)}</td><td>${esc(e.category)}</td><td>${e.date}</td><td>${fmtTime(e.time)}</td><td>${esc(e.venue)}</td>
          <td>${e.participants ? esc(e.participants) : '—'}</td>
          <td><span class="badge ${badgeClass(computeStatus(e))}">${computeStatus(e)}</span></td>
          <td><button class="icon-btn" data-action="edit-event" data-id="${e.id}">Edit</button><button class="icon-btn" data-action="delete-event" data-id="${e.id}">Delete</button></td>
        </tr>`).join('')}
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
  return `
  <h3>Site Content</h3>
  <div class="card" style="margin-bottom:22px;">
    <form data-action="save-site-settings">
      <div class="field"><label>Site Title <span style="font-weight:400;color:var(--ink-soft);">(nav bar &amp; footer)</span></label><input type="text" name="siteTitle" value="${esc(s.siteTitle)}"></div>
      <div class="field"><label>Homepage Hero Heading</label><input type="text" name="heroHeading" value="${esc(s.heroHeading||s.siteTitle)}"></div>
      <div class="field"><label>Browser Tab Title</label><input type="text" name="tabTitle" value="${esc(s.tabTitle||s.siteTitle)}"></div>
      <div class="field"><label>Logo <span style="font-weight:400;color:var(--ink-soft);">(leave blank to use the default mark)</span></label><input type="text" name="logoUrl" value="${esc(s.logoUrl||'')}" placeholder="Paste a photo URL — or upload a file below"><input type="file" accept="image/*" data-photo-target="logoUrl" style="margin-top:6px;width:100%;font-size:.8rem;"></div>
      <div class="field"><label>Tagline</label><textarea name="tagline">${esc(s.tagline)}</textarea></div>
      <div class="field"><label>About Text</label><textarea name="aboutText">${esc(s.aboutText)}</textarea></div>
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
      <div class="field"><label>Homepage — Points Table section</label><input type="text" name="homePoints" value="${esc(heading('homePoints','Current Points Table'))}"></div>
      <div class="field"><label>Events page</label><input type="text" name="events" value="${esc(heading('events','Festival Events'))}"></div>
      <div class="field"><label>Schedule page</label><input type="text" name="schedule" value="${esc(heading('schedule','Festival Schedule'))}"></div>
      <div class="field"><label>Points Table page</label><input type="text" name="points" value="${esc(heading('points','Points Table'))}"></div>
      <div class="field"><label>Results page</label><input type="text" name="results" value="${esc(heading('results','Event Results'))}"></div>
      <div class="field"><label>Winners Gallery page</label><input type="text" name="winners" value="${esc(heading('winners','Winners Gallery'))}"></div>
      <div class="field"><label>Highlights page</label><input type="text" name="highlights" value="${esc(heading('highlights','Highlights'))}"></div>
      <div class="field"><label>Executive Members page</label><input type="text" name="exec" value="${esc(heading('exec','Executive Members'))}"></div>
      <div class="field"><label>Teams page</label><input type="text" name="teams" value="${esc(heading('teams','Teams'))}"></div>
      <div class="field"><label>About page</label><input type="text" name="about" value="${esc(heading('about','DarussalamFest'))}"></div>
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
  {key:'name', label:'Event Name', type:'text'},
  {key:'category', label:'Category', type:'select', options:CATEGORIES},
  {key:'date', label:'Date', type:'date'},
  {key:'time', label:'Time', type:'time'},
  {key:'venue', label:'Venue', type:'select', options:VENUES},
  {key:'participants', label:'Participants (comma-separated names)', type:'text'},
  {key:'rules', label:'Event-Specific Rules (one per line, optional)', type:'textarea'},
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
  const ev = isEdit ? STATE.events.find(e=>e.id===id) : { name:'', category:CATEGORIES[0], date:FEST_DATES[0], time:TIMES[0], venue:VENUES[0], participants:'', rules:'', statusOverride:'' };
  const category = ev.category || CATEGORIES[0];
  const programs = OFFICIAL_PROGRAMS.filter(p=>p[2]===category);
  const currentProgram = eventProgramOf(ev.name, category);
  const isCustom = !!(ev.name && !currentProgram);
  const fields = EVENT_FIELDS.filter(f=>f.key!=='name' && f.key!=='category');
  showModal(`
    <button class="modal-close" data-action="close-modal">×</button>
    <h3>${isEdit?'Edit':'Add'} Event</h3>
    <form data-action="save-event" data-id="${id||''}">
      <div class="field">
        <label>Category (shows this category's events below)</label>
        <select name="category" id="evmCategory">${CATEGORIES.map(c=>`<option value="${esc(c)}" ${c===category?'selected':''}>${esc(c)}</option>`).join('')}</select>
      </div>
      <div class="field">
        <label>Event Name</label>
        <select name="evmProgram" id="evmProgram">${programs.map(p=>`<option value="${esc(p[1])}" ${p[1]===currentProgram?'selected':''}>${esc(p[1])}</option>`).join('')}</select>
      </div>
      <div class="field">
        <label style="display:flex;align-items:center;gap:8px;font-weight:500;"><input type="checkbox" id="evmCustom" ${isCustom?'checked':''}> Not in the list? Type the name manually</label>
        <input type="text" name="evmCustomName" id="evmCustomName" placeholder="e.g. XYZ Competition" value="${isCustom?esc(ev.name):''}" style="margin-top:8px;${isCustom?'':'display:none;'}">
      </div>
      ${fields.map(f=>fieldHtml(f, ev[f.key])).join('')}
      <div class="modal-actions">
        ${isEdit?'<button type="button" class="btn btn-danger btn-sm" data-action="delete-event" data-id="'+id+'">Delete</button>':''}
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
});

document.addEventListener('input', (e)=>{
  if(e.target.id==='evSearch'){ STATE.filters.q = e.target.value; renderEventsOnly(); }
  if(e.target.id==='teamSearchInput'){ STATE.teamSearch = e.target.value; renderTeamsOnly(); }
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
