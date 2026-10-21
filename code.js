'use strict';

/* ================= helpers ================= */
const $ = id => document.getElementById(id);
const fmtTime = ms => {
  const s = Math.max(0, Math.ceil(ms / 1000));
  return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0');
};
function toast(msg){
  const d = document.createElement('div');
  d.className = 'toast';
  d.textContent = msg;
  $('toasts').appendChild(d);
  setTimeout(() => { d.classList.add('out'); setTimeout(() => d.remove(), 450); }, 3800);
}

/* ================= ART (inline SVG) ================= */
function svgWrap(inner){ return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080">' + inner + '</svg>'; }
const PG = '<defs><linearGradient id="pg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ababab"/><stop offset="1" stop-color="#5e5e5e"/></linearGradient></defs>';
const MOUTH = '<path d="M310,640 C310,860 362,962 448,956 C508,951 534,760 540,618 C546,760 572,951 632,956 C718,962 870,860 870,640" fill="none" stroke="#101014" stroke-width="26" stroke-linecap="round"/>';
const PAWS = '<g fill="url(#pg)"><ellipse cx="312" cy="1038" rx="50" ry="46"/><ellipse cx="402" cy="1052" rx="42" ry="40"/><ellipse cx="688" cy="1052" rx="42" ry="40"/><ellipse cx="770" cy="1038" rx="50" ry="46"/></g>';
const F1 = svgWrap(PG
  + '<circle cx="540" cy="540" r="502" fill="#ffffff" stroke="#e2e3e8" stroke-width="9"/>' + PAWS
  + '<circle cx="282" cy="300" r="128" fill="#101014"/><circle cx="306" cy="228" r="30" fill="#fff"/><circle cx="348" cy="246" r="13" fill="#fff"/>'
  + '<circle cx="842" cy="300" r="128" fill="#101014"/><circle cx="866" cy="228" r="30" fill="#fff"/><circle cx="908" cy="246" r="13" fill="#fff"/>'
  + MOUTH + '<circle cx="540" cy="598" r="46" fill="#101014"/>');
function rivets(){
  let s = '<g fill="#0d0d10">';
  for(let y = 40; y <= 474; y += 62) s += '<circle cx="493" cy="' + y + '" r="11"/><circle cx="587" cy="' + y + '" r="11"/>';
  return s + '</g>';
}
const F2 = svgWrap(PG
  + '<circle cx="540" cy="540" r="520" fill="#cbcbcb"/>' + PAWS
  + '<path d="M511,10 H569 V576 A29,29 0 0 1 511,576 Z" fill="#0d0d10"/>' + rivets()
  + '<circle cx="285" cy="298" r="132" fill="#0d0d10"/><circle cx="285" cy="298" r="74" fill="#ff0000"/>'
  + '<circle cx="795" cy="298" r="132" fill="#0d0d10"/><circle cx="795" cy="298" r="74" fill="#ff0000"/>'
  + MOUTH + '<ellipse cx="540" cy="588" rx="50" ry="44" fill="#0d0d10"/>');

function pageLines(){
  let s = '';
  for(let y = 112; y <= 940; y += 46) s += '<rect x="938" y="' + y + '" width="52" height="5" rx="2.5" fill="#d9c489"/>';
  return s;
}
function wheels(r, cy){
  return '<circle cx="308" cy="' + cy + '" r="' + r + '" fill="#151515"/><circle cx="772" cy="' + cy + '" r="' + r + '" fill="#151515"/>';
}
function cover(){
  return '<rect x="926" y="76" width="76" height="910" rx="12" fill="#eeda9f"/>' + pageLines()
    + '<rect x="70" y="56" width="890" height="934" rx="24" fill="#7c4a1d"/>'
    + '<rect x="70" y="56" width="890" height="934" rx="24" fill="none" stroke="#5b3512" stroke-width="12"/>';
}
function paintingFrame(){ return '<rect x="174" y="340" width="692" height="548" fill="none" stroke="#8a642a" stroke-width="10"/>'; }

const BOOK1 = svgWrap(
  '<defs><linearGradient id="bs1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f2a65a"/><stop offset=".42" stop-color="#f7d9a4"/><stop offset=".72" stop-color="#a8d8ea"/><stop offset="1" stop-color="#e9f6f9"/></linearGradient></defs>'
  + wheels(40, 1012) + cover()
  + '<text x="450" y="252" font-family="Georgia,serif" font-size="100" font-weight="700" fill="#2b1a08" letter-spacing="12" text-anchor="middle">BOOK</text>'
  + '<rect x="148" y="314" width="744" height="600" fill="#caa24e"/>'
  + '<rect x="174" y="340" width="692" height="548" fill="url(#bs1)"/>'
  + '<circle cx="792" cy="466" r="48" fill="#ffe08a"/>'
  + '<ellipse cx="320" cy="416" rx="92" ry="26" fill="#fff" opacity=".85"/><ellipse cx="386" cy="398" rx="58" ry="20" fill="#fff" opacity=".85"/><ellipse cx="600" cy="376" rx="72" ry="22" fill="#fff" opacity=".7"/>'
  + '<path d="M174,690 Q340,580 470,650 Q610,724 866,634 L866,888 L174,888 Z" fill="#8fbb5e"/>'
  + '<path d="M174,768 Q360,686 560,754 Q724,810 866,736 L866,888 L174,888 Z" fill="#639a3e"/>'
  + '<path d="M540,888 C522,806 586,770 566,706 C552,664 576,634 596,594 L632,598 C614,662 570,672 586,716 C602,764 546,812 566,888 Z" fill="#4d9fd6"/>'
  + '<ellipse cx="240" cy="852" rx="62" ry="30" fill="#4c7d33"/><ellipse cx="312" cy="868" rx="46" ry="24" fill="#57903c"/><ellipse cx="802" cy="856" rx="54" ry="26" fill="#4c7d33"/>'
  + paintingFrame());

function pines(){
  let s = '';
  const xs = [210, 286, 362, 438, 514, 590, 666, 742, 818];
  xs.forEach((x, i) => {
    const y = 790 + ((i * 53) % 30), h = 130 + ((i * 97) % 80);
    s += '<path d="M' + x + ',' + y + ' L' + (x + 34) + ',' + (y - h) + ' L' + (x + 68) + ',' + y + ' Z" fill="' + (i % 2 ? '#1e4429' : '#275733') + '"/>';
  });
  return s;
}
const BOOK2 = svgWrap(
  '<defs><linearGradient id="bs2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#bcd7e4"/><stop offset="1" stop-color="#eef7f9"/></linearGradient></defs>'
  + wheels(40, 1012) + cover()
  + '<text x="420" y="252" font-family="Georgia,serif" font-size="100" font-weight="700" fill="#2b1a08" letter-spacing="12" text-anchor="middle">BOOK</text>'
  + '<text x="756" y="266" font-family="Segoe Script,cursive" font-size="150" font-style="italic" font-weight="900" fill="#e01f1f" transform="rotate(-8 756 246)">2</text>'
  + '<rect x="148" y="314" width="744" height="600" fill="#caa24e"/>'
  + '<rect x="174" y="340" width="692" height="548" fill="url(#bs2)"/>'
  + '<path d="M174,600 Q400,560 560,590 T866,570 L866,888 L174,888 Z" fill="#2f5d3a"/>'
  + pines()
  + '<path d="M174,742 Q430,694 640,730 T866,716 L866,888 L174,888 Z" fill="#5a8fb5"/>'
  + '<g fill="#8a5a2b"><rect x="330" y="796" width="190" height="34" rx="17" transform="rotate(-4 425 813)"/><rect x="590" y="812" width="170" height="30" rx="15" transform="rotate(3 675 827)"/></g>'
  + '<ellipse cx="252" cy="862" rx="52" ry="24" fill="#8d8d8d"/><ellipse cx="822" cy="856" rx="44" ry="20" fill="#9a9a9a"/>'
  + paintingFrame());

const GRIMOIRE = svgWrap(
  '<defs><linearGradient id="bs3" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#241245"/><stop offset="1" stop-color="#0a0614"/></linearGradient></defs>'
  + wheels(46, 1006)
  + '<rect x="926" y="76" width="76" height="910" rx="12" fill="#d9c489"/>' + pageLines()
  + '<rect x="70" y="56" width="890" height="934" rx="24" fill="#4a0f1e"/>'
  + '<rect x="70" y="56" width="890" height="934" rx="24" fill="none" stroke="#26040d" stroke-width="14"/>'
  + '<path d="M96,84 h62 v18 h-44 v44 h-18 Z" fill="#d9b45a"/><path d="M984,84 h-62 v18 h44 v44 h18 Z" fill="#d9b45a"/>'
  + '<path d="M96,962 h62 v-18 h-44 v-44 h-18 Z" fill="#d9b45a"/><path d="M984,962 h-62 v-18 h44 v-44 h18 Z" fill="#d9b45a"/>'
  + '<text x="450" y="252" font-family="Georgia,serif" font-size="100" font-weight="700" fill="#0d0508" letter-spacing="12" text-anchor="middle">BOOK</text>'
  + '<text x="454" y="256" font-family="Georgia,serif" font-size="100" font-weight="700" fill="#8f1030" letter-spacing="12" text-anchor="middle" opacity=".55">BOOK</text>'
  + '<rect x="148" y="314" width="744" height="600" fill="#1c0c14"/>'
  + '<rect x="174" y="340" width="692" height="548" fill="url(#bs3)"/>'
  + '<path d="M174,660 L340,470 L470,620 L600,500 L730,640 L866,530 L866,888 L174,888 Z" fill="#160b22"/>'
  + '<path d="M560,360 L470,520 L540,500 L450,700 L600,470 L530,486 L610,360 Z" fill="#f5d76e" opacity=".85"/>'
  + '<circle cx="672" cy="420" r="62" fill="#e01f1f"/><circle cx="672" cy="420" r="27" fill="#12060a"/>'
  + '<rect x="174" y="806" width="692" height="82" fill="#0d0817"/>'
  + '<rect x="174" y="340" width="692" height="548" fill="none" stroke="#d9b45a" stroke-width="10"/>');

const svgURI = s => 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(s);
const ART = {};
for(const [n, s] of [['f1', F1], ['f2', F2], ['book1', BOOK1], ['book2', BOOK2], ['grimoire', GRIMOIRE]]){
  const i = new Image();
  i.src = svgURI(s);
  ART[n] = i;
}

/* ================= config ================= */
const START_MONEY = 100, MONEY_RATE = 5, MONEY_CAP = 300, WALLET_COST = 50;
const CANNON_DMG = 30, CANNON_KB = 70, P_FIELD_MAX = 12, E_FIELD_MAX = 18;

const CATS = {
  cat: { name:'CAT', emoji:null, upBase:30, boxWait:60,
    locked:['cost','cd','range','spd'],
    f1:{hp:10, atk:2,  int:1.6, range:55, spd:30, cost:50, cd:2.5, kb:3, aoe:false, size:36, artSize:56, art:'f1'},
    f2:{hp:50, atk:20, int:1.4, range:62, spd:26, cost:50, cd:2.5, kb:3, aoe:false, size:46, artSize:66, art:'f2'},
    desc:'The very first cat. HP & ATK grow +10% per upgrade. After the 1st box it becomes MECHA CAT.' },
  wall: { name:'WALL', emoji:'🧱', upBase:25, boxWait:90,
    locked:['atk','range','spd','cost','cd'],
    f1:{hp:25, atk:1, int:2.2, range:42, spd:18, cost:75, cd:5, kb:1, aoe:false, size:36, artSize:46},
    desc:'Human shield. Only its HP grows — a wall stays a wall.' },
  warrior: { name:'WARRIOR', emoji:'🦝', upBase:40, boxWait:120,
    locked:['cost','cd','range'],
    f1:{hp:14, atk:6, int:2.0, range:62, spd:26, cost:150, cd:4.5, kb:2, aoe:false, size:36, artSize:46},
    desc:'Heavy melee hitter. HP, ATK and SPEED grow with upgrades.' },
  archer: { name:'ARCHER', emoji:'🦅', upBase:45, boxWait:150,
    locked:['hp','cost','cd'],
    f1:{hp:6, atk:5, int:2.4, range:220, spd:22, cost:200, cd:6, kb:4, aoe:false, proj:true, size:34, artSize:46},
    desc:'Glass-cannon sniper. Only ATK, RANGE and SPEED grow.' },
  titan: { name:'TITAN', emoji:'🦍', upBase:60, boxWait:180,
    locked:['cost','cd','spd','range'],
    f1:{hp:60, atk:14, int:3.0, range:72, spd:14, cost:400, cd:10, kb:3, aoe:true, size:46, artSize:56},
    desc:'Area-attack tank. HP & ATK grow; it stays slow and pricey.' },
};
const ROSTER = Object.keys(CATS);

const ETPL = {
  book1:    {name:'BOOK',     art:'book1', wheels:true, artSize:52, size:36, hp:7,   atk:3,  int:2.0, range:50,  spd:22, kb:3, aoe:false, reward:12},
  book2:    {name:'BOOK 2',   art:'book2', wheels:true, artSize:60, size:42, hp:30,  atk:10, int:2.6, range:55,  spd:18, kb:2, aoe:false, reward:30},
  grimoire: {name:'GRIMOIRE', art:'grimoire', wheels:true, artSize:88, size:62, hp:300, atk:18, int:3.0, range:110, spd:8, kb:2, aoe:true, reward:150},
};

const TUT = ['FIRST STEPS','PAGE TURNERS','HEAVY READING','THE BOOKMOBILE','FINAL EXAM'];
const TUTFLAVOR = [
  'The books have escaped the library. Send cats, hold the lane, topple their tower.',
  'More pages, more problems. Keep the pressure on.',
  'Something heavy is coming. WALLs buy time — use them.',
  'The bookmobile is rolling. Stay stacked, stay funded.',
  'FINAL EXAM. Something enormous is guarding the enemy tower.'
];
const WORLDS = [
  {name:'WORLD 1 · TUTORIAL', sub:'Five short stages. Learn to deploy, fight, and box your first cat.', levels:5, icon:'book1'},
  {name:'WORLD 2 · MEADOW LANE', sub:'The books march on — 10 stages of creeping pressure.', levels:10, icon:'book2'},
  {name:'WORLD 3 · ???', sub:'New enemies are being sketched…', levels:30, icon:'grimoire', soon:true},
];

/* ================= save ================= */
const SAVE_KEY = 'catclash_save_v3';
let Sv = null;
function saveSv(){ try{ localStorage.setItem(SAVE_KEY, JSON.stringify(Sv)); }catch(e){} }
function loadSave(){
  try{
    const raw = localStorage.getItem(SAVE_KEY);
    if(raw) Sv = JSON.parse(raw);
  }catch(e){}
  if(!Sv){
    Sv = { coins:150, stages:{}, notes:{}, cats:{} };
    try{ // migrate v0.2 cat level if it ever existed
      const old = +localStorage.getItem('catclash_catLv') || 0;
      if(old >= 1){
        Sv.cats.cat = old >= 10
          ? { up:0, tier:1, love:0, rest:null, lastDaily:'' }
          : { up: old - 1, tier:0, love:0, rest:null, lastDaily:'' };
      }
    }catch(e){}
  }
  Sv.stages = Sv.stages || {};
  Sv.notes  = Sv.notes  || {};
  Sv.cats   = Sv.cats   || {};
  for(const k of ROSTER) if(!Sv.cats[k]) Sv.cats[k] = { up:0, tier:0, love:0, rest:null, lastDaily:'' };
  saveSv();
}
function checkDaily(){
  const today = new Date().toDateString();
  for(const k of ROSTER){
    const sv = Sv.cats[k];
    if(sv.love >= 10 && sv.lastDaily !== today){
      const amt = 20 * sv.love;
      Sv.coins += amt; sv.lastDaily = today;
      toast('💌 ' + CATS[k].name + ' missed you today! +' + amt + '💰 (♥' + sv.love + ')');
    }
  }
  saveSv();
}

/* ================= progression ================= */
function worldCleared(wid){
  const w = WORLDS[wid];
  for(let l = 0; l < w.levels; l++) if(!Sv.stages[wid + '-' + l]) return false;
  return true;
}
function worldUnlocked(wid){ return wid === 0 || worldCleared(wid - 1); }
function boxUnlocked(){ return worldCleared(0); }
function countCleared(wid){
  let n = 0;
  for(let l = 0; l < WORLDS[wid].levels; l++) if(Sv.stages[wid + '-' + l]) n++;
  return n;
}

function catStats(key){
  const c = CATS[key], sv = Sv.cats[key];
  const evolved = key === 'cat' && sv.tier >= 1;
  const form = evolved ? c.f2 : c.f1;
  const exp = evolved ? (sv.tier - 1) * 10 + sv.up : sv.tier * 10 + sv.up;
  const mult = Math.pow(1.1, exp);
  const st = Object.assign({}, form);
  st.name = key === 'cat' ? (evolved ? 'MECHA CAT' : 'CAT') : c.name;
  st.emoji = c.emoji;
  st.img = form.art ? ART[form.art] : null;
  for(const k of ['hp','atk','spd','range']){
    if(c.locked.includes(k)) continue;
    st[k] = (k === 'hp' || k === 'atk')
      ? Math.max(1, Math.round(st[k] * mult))
      : Math.round(st[k] * mult * 10) / 10;
  }
  return st;
}
function upCost(key){ return Math.round(CATS[key].upBase * Math.pow(1.12, Sv.cats[key].tier * 10 + Sv.cats[key].up)); }

function tryUpgrade(key){
  const sv = Sv.cats[key];
  if(sv.rest || sv.up >= 10) return;
  const cost = upCost(key);
  if(Sv.coins < cost){ toast('Not enough coins! Clear stages to earn more.'); return; }
  Sv.coins -= cost; sv.up++; saveSv();
  if(sv.up >= 10) toast('📦 ' + CATS[key].name + ' has 10 upgrades banked — time for the box!');
  renderCats();
}
function sendBox(key){
  const c = CATS[key], sv = Sv.cats[key];
  if(sv.rest || !boxUnlocked() || sv.up < 10) return;
  sv.rest = { end: Date.now() + c.boxWait * 1000, type:'box' };
  saveSv(); toast('📦 ' + c.name + ' climbed into the cardboard box…'); renderCats();
}
function nap(key){
  const c = CATS[key], sv = Sv.cats[key];
  if(sv.rest || !boxUnlocked() || sv.tier < 1) return;
  sv.rest = { end: Date.now() + c.boxWait * 1000, type:'nap' };
  saveSv(); toast('💤 ' + c.name + ' curled up for a nap…'); renderCats();
}
function collectRest(key){
  const c = CATS[key], sv = Sv.cats[key];
  if(!sv.rest || Date.now() < sv.rest.end) return;
  if(sv.rest.type === 'box'){
    sv.tier++; sv.up = 0; sv.love++;
    const bonus = 50 + sv.tier * 25;
    Sv.coins += bonus;
    toast('📦 ' + c.name + ' finished resting! Tier +' + sv.tier + ', ♥ +1, +' + bonus + '💰');
    if(key === 'cat' && sv.tier === 1) toast('✨ CAT evolved into MECHA CAT! ✨');
  } else {
    const bonus = 30 + sv.tier * 15;
    Sv.coins += bonus;
    toast('💤 ' + c.name + ' woke up refreshed! +' + bonus + '💰');
  }
  sv.rest = null; saveSv(); renderCats();
}

/* ================= screens ================= */
let CUR = 'title', CURWORLD = 0, SEL = 'cat', restShownDone = false;
function syncCoins(){
  for(const el of document.querySelectorAll('.coinVal')) el.textContent = Sv.coins;
}
function show(id){
  CUR = id;
  for(const s of document.querySelectorAll('.screen')) s.classList.add('hidden');
  $('scr-' + id).classList.remove('hidden');
  syncCoins();
  if(id === 'worlds') renderWorlds();
  else if(id === 'levels') renderLevels();
  else if(id === 'cats') renderCats();
}
function renderWorlds(){
  const el = $('worldList'); el.innerHTML = '';
  WORLDS.forEach((w, i) => {
    const unlocked = worldUnlocked(i);
    const card = document.createElement('button');
    card.className = 'worldCard' + (unlocked && !w.soon ? '' : ' locked');
    card.innerHTML = '<img src="' + ART[w.icon].src + '"><div><div class="wName">' + w.name
      + '</div><div class="wSub">' + (w.soon ? w.sub : (unlocked ? w.sub : '🔒 Beat the previous world to unlock')) + '</div></div>'
      + '<div class="wProg">' + (w.soon ? 'SOON' : countCleared(i) + '/' + w.levels) + '</div>';
    card.onclick = () => {
      if(w.soon){ toast('🔒 This world is still being written…'); return; }
      if(!unlocked){ toast('🔒 Clear the previous world first!'); return; }
      CURWORLD = i; show('levels');
    };
    el.appendChild(card);
  });
}
function renderLevels(){
  const w = WORLDS[CURWORLD];
  $('lvlWorldName').textContent = w.name;
  $('lvlDesc').textContent = w.sub;
  const g = $('levelGrid'); g.innerHTML = '';
  for(let l = 0; l < w.levels; l++){
    const unlocked = l === 0 || !!Sv.stages[CURWORLD + '-' + (l - 1)];
    const cleared = !!Sv.stages[CURWORLD + '-' + l];
    const b = document.createElement('button');
    b.className = 'lvlBtn' + (cleared ? ' cleared' : (unlocked ? ' next' : ' locked'));
    b.innerHTML = '<span class="num">' + (l + 1) + '</span><span class="mark">' + (cleared ? '✔' : (unlocked ? '▶' : '🔒')) + '</span>';
    b.onclick = () => { if(!unlocked){ toast('🔒 Clear level ' + l + ' first!'); return; } startStage(CURWORLD, l); };
    g.appendChild(b);
  }
}
function renderCats(){
  syncCoins();
  const r = $('roster'); r.innerHTML = '';
  for(const k of ROSTER){
    const sv = Sv.cats[k], st = catStats(k);
    const b = document.createElement('button');
    b.className = 'rosterBtn' + (k === SEL ? ' sel' : '');
    const art = st.img ? '<img class="miniArt" src="' + st.img.src + '">' : '<span class="miniEm">' + CATS[k].emoji + '</span>';
    b.innerHTML = art + '<div><div class="rName">' + st.name + '</div><div class="rLv">+'
      + sv.tier + ' · ' + sv.up + '/10' + (sv.love ? ' · ♥' + sv.love : '') + '</div></div>';
    b.onclick = () => { SEL = k; renderCats(); };
    r.appendChild(b);
  }
  renderCatDetail();
}
function renderCatDetail(){
  const k = SEL, c = CATS[k], sv = Sv.cats[k], st = catStats(k);
  restShownDone = false;
  const art = st.img ? '<img class="bigArt" src="' + st.img.src + '">' : '<div class="bigArt emArt">' + c.emoji + '</div>';
  const shown = Math.min(10, sv.love);
  const hearts = '♥'.repeat(shown) + '<span class="dim">' + '♥'.repeat(10 - shown) + '</span>' + (sv.love > 10 ? ' +' + (sv.love - 10) : '');
  const loveShown = sv.love === 0
    ? '<span class="secret" title="A secret stat. Boxes feed it — at ♥10 the cat gifts you daily rewards that grow with love.">♥ ??</span>'
    : '<span class="secret" title="Secret stat: completed boxes feed it. At ♥10 the cat gifts you daily rewards that grow with love.">♥ ' + hearts + '</span>';
  const row = (lab, val, lock) => '<div class="stat' + (lock ? ' lockedS' : '') + '"><span>' + lab + (lock ? ' 🔒' : '') + '</span><b>' + val + '</b></div>';
  const stats =
    row('HP', st.hp, c.locked.includes('hp')) +
    row('ATK', st.atk, c.locked.includes('atk')) +
    row('RANGE', st.range, c.locked.includes('range')) +
    row('SPEED', st.spd, c.locked.includes('spd')) +
    row('COST', '$' + st.cost, c.locked.includes('cost')) +
    row('RELOAD', st.cd + 's', c.locked.includes('cd')) +
    row('KNOCKBACKS', st.kb, true) +
    row('ATK RATE', st.int + 's', true);
  const now = Date.now();
  let boxHtml = '';
  if(!boxUnlocked()){
    boxHtml = '<div class="boxCard"><div class="boxIco">📦🔒</div><div><b>Cardboard Box — locked</b><div class="small">Clear all 5 tutorial levels to unlock tiers, resting and Love.</div></div></div>';
  } else if(sv.rest){
    const done = now >= sv.rest.end;
    boxHtml = '<div class="boxCard resting"><div class="boxIco">' + (sv.rest.type === 'box' ? '📦' : '💤') + '</div><div><b>'
      + (sv.rest.type === 'box' ? 'BOXING' : 'NAPPING') + ' — <span id="restTime">' + (done ? 'DONE!' : fmtTime(sv.rest.end - now)) + '</span></b>'
      + '<div class="small">' + (sv.rest.type === 'box'
        ? 'Finishing promotes the tier (+1), raises Love (+1 ♥) and pays a bonus.'
        : 'A little nap — collect a coin bonus when he wakes up.') + '</div>'
      + (done ? '<button class="go small" id="collectBtn">COLLECT!</button>' : '') + '</div></div>';
  } else if(sv.up >= 10){
    boxHtml = '<div class="boxCard ready"><div class="boxIco">📦</div><div><b>READY FOR THE BOX!</b>'
      + '<div class="small">10 upgrades banked. Box time for ' + c.name + ': ' + fmtTime(c.boxWait * 1000)
      + '. Finishing promotes the tier, +1 ♥ and a bonus.</div>'
      + '<button class="go small" id="boxBtn">📦 SEND TO BOX</button></div></div>';
  } else {
    const canNap = sv.tier >= 1;
    boxHtml = '<div class="boxCard"><div class="boxIco">📦</div><div><b>NEXT BOX IN ' + (10 - sv.up) + ' UPGRADES</b>'
      + '<div class="small">Box time for ' + c.name + ': ' + fmtTime(c.boxWait * 1000)
      + '. Completed boxes raise the Tier, +1 ♥ and bonus coins.'
      + (canNap ? '<br>Tier +1 unlocked: <b>nap anytime</b> for small rewards.' : '') + '</div>'
      + (canNap ? '<button class="go small alt" id="napBtn">💤 NAP (' + fmtTime(c.boxWait * 1000) + ')</button>' : '')
      + '</div></div>';
  }
  const upDis = (sv.up >= 10 || !!sv.rest);
  $('catDetail').innerHTML =
    '<div class="cdHead">' + art + '<div>'
    + '<h3>' + st.name + (k === 'cat' && sv.tier >= 1 ? ' <span class="formTag">evolved</span>' : '') + '</h3>'
    + '<div class="tierLine">TIER <b>+' + sv.tier + '</b> · UPGRADES <b>' + Math.min(sv.up, 10) + '/10</b></div>'
    + '<div class="loveLine">LOVE ' + loveShown + '</div></div></div>'
    + '<div class="statsGrid">' + stats + '</div>'
    + '<div class="upRow"><button class="go small" id="upBtn"' + (upDis ? ' disabled' : '') + '>UPGRADE +10% · ' + upCost(k) + '💰</button>'
    + '<div class="upProg"><div class="upFill" style="width:' + (Math.min(sv.up, 10) * 10) + '%"></div></div></div>'
    + boxHtml;
  $('upBtn').onclick = () => tryUpgrade(k);
  const bb = $('boxBtn');   if(bb) bb.onclick = () => sendBox(k);
  const nb = $('napBtn');   if(nb) nb.onclick = () => nap(k);
  const cb = $('collectBtn'); if(cb) cb.onclick = () => collectRest(k);
}
function catsTick(){
  const sv = Sv.cats[SEL];
  if(sv.rest){
    const t = $('restTime');
    if(t) t.textContent = Date.now() >= sv.rest.end ? 'DONE!' : fmtTime(sv.rest.end - Date.now());
    if(Date.now() >= sv.rest.end && !restShownDone){ restShownDone = true; renderCatDetail(); }
  }
}

/* ================= battle: state & logic ================= */
const W = 960, H = 420, GROUND = 338;
let B = null, BT = null, PSTATS = null, ED = {}, PB = null, EB = null;
const DEPLOY = {};
let CANNON = null, CANNON_PCT = null;
/* DOM refs — filled in boot() */
let cvs, ctx, moneyEl, moneyCapEl, rateEl, walletBtn, walletCostEl, speedBtn,
    pHp, eHp, bannerEl, startOverlay, endOverlay, endTitle, endInfo;

function mkBase(side, hp){ return { side, isBase:true, x: side === 'p' ? 66 : 894, halfW:46, hp, maxHp:hp, size:0 }; }
function mkUnit(side, key){
  const st = side === 'p' ? PSTATS[key] : ED[key];
  const b = side === 'p' ? PB : EB, dir = side === 'p' ? 1 : -1;
  return { side, key, st, dir, size:st.size, halfW:st.size * .36,
    x: b.x + dir * (b.halfW + 24), hp:st.hp, maxHp:st.hp,
    atkT:.4, stun:0, kbs:0, kbFlash:0, lunge:0, bob:Math.random() * 6, roll:0, dead:false };
}
function moneyRate(){ return MONEY_RATE * (1 + .5 * (B.wallet - 1)); }
function moneyCap(){ return MONEY_CAP + 100 * (B.wallet - 1); }
function gainMoney(a, x){
  B.money = Math.min(moneyCap(), B.money + a);
  if(x != null) B.pops.push({ x, y:GROUND - 70, txt:'+$' + a, life:.9, col:'#7dff8e' });
}
function dealDamage(v, dmg, col, byPlayer){
  if(B.over) return;
  v.hp -= dmg;
  B.pops.push({ x:v.x + (Math.random() * 24 - 12), y:GROUND - (v.isBase ? 120 : v.st.artSize + 26), txt:String(dmg), life:.75, col });
  if(v.isBase) B.shake = Math.max(B.shake, .3);
  if(v.hp <= 0){
    if(v.isBase){ endGame(byPlayer); return; }
    v.dead = true;
    if(v.side === 'e'){ B.kills++; gainMoney(v.st.reward, v.x); }
  } else if(!v.isBase) knockCheck(v);
}
function knockCheck(v){
  const n = v.st.kb;
  if(v.kbs < n && v.hp / v.maxHp <= 1 - (v.kbs + 1) / n){
    v.kbs++; v.stun = .4; v.kbFlash = .4; v.atkT = Math.max(v.atkT, .3);
    let nx = v.x - v.dir * 55;
    if(v.side === 'p') nx = Math.max(nx, PB.x + PB.halfW + v.halfW);
    else               nx = Math.min(nx, EB.x - EB.halfW - v.halfW);
    v.x = nx;
  }
}
function updateUnit(u, dt){
  u.kbFlash = Math.max(0, u.kbFlash - dt);
  u.lunge   = Math.max(0, u.lunge - dt * 4);
  u.bob    += dt * 6;
  if(u.stun > 0){ u.stun -= dt; return; }
  u.atkT = Math.max(0, u.atkT - dt);
  const targets = u.side === 'p' ? B.eUnits.concat([EB]) : B.pUnits.concat([PB]);
  let nearest = null, nearestGap = 1e9; const group = [];
  for(const t of targets){
    if(t.hp <= 0) continue;
    const dx = (t.x - u.x) * u.dir;
    if(dx < -t.halfW) continue;
    const gap = dx - t.halfW;
    if(gap <= u.st.range){
      if(u.st.aoe) group.push(t);
      else if(gap < nearestGap){ nearestGap = gap; nearest = t; }
    }
  }
  const focus = u.st.aoe ? (group.length ? group : null) : (nearest ? [nearest] : null);
  if(focus){
    if(u.atkT <= 0){
      u.atkT = u.st.int; u.lunge = 1;
      for(const v of focus) dealDamage(v, u.st.atk, u.side === 'p' ? '#ffe98a' : '#ff9d9d', u.side === 'p');
      if(u.side === 'p') B.cannon = Math.min(100, B.cannon + 2.2);
      if(u.st.proj) B.shots.push({ x:u.x + u.dir * 16, y:GROUND - 24, dir:u.dir, life:u.st.range / 560 });
    }
    return;
  }
  u.x += u.st.spd * u.dir * dt;
}
function enforceQueues(){
  const ps = B.pUnits.slice().sort((a, b) => b.x - a.x);
  let limit = EB.x - EB.halfW;
  for(const u of ps){ u.x = Math.min(u.x, limit - u.halfW); limit = u.x - u.halfW; }
  const es = B.eUnits.slice().sort((a, b) => a.x - b.x);
  let elimit = PB.x + PB.halfW;
  for(const u of es){ u.x = Math.max(u.x, elimit + u.halfW); elimit = u.x + u.halfW; }
}
function fireCannon(){
  if(!B || B.cannon < 100 || B.over || !B.running) return;
  B.cannon = 0; B.shake = .5;
  const front = B.pUnits.length ? Math.max(...B.pUnits.map(u => u.x)) : PB.x + PB.halfW + 120;
  const cx = front + 70;
  B.fx.push({ x:cx, w:300, life:.35, max:.35 });
  for(const t of B.eUnits.concat([EB])){
    if(t.hp <= 0 || Math.abs(t.x - cx) > 150 + t.halfW) continue;
    dealDamage(t, CANNON_DMG, '#8fd6ff', true);
    if(!t.isBase){
      t.stun = Math.max(t.stun, .5); t.kbFlash = .4;
      t.x = Math.min(t.x + CANNON_KB, EB.x - EB.halfW + 14);
    }
  }
}
function banner(t){ bannerEl.textContent = t; B.bannerT = 2.4; }
function spawner(){
  const cfg = BT.cfg;
  while(B.waveI < cfg.waves.length && cfg.waves[B.waveI].t <= B.t){
    const wv = cfg.waves[B.waveI++];
    if(B.eUnits.length < E_FIELD_MAX) B.eUnits.push(mkUnit('e', wv.key));
  }
  if(cfg.boss && !B.bossDone && B.t >= cfg.boss.t){
    B.bossDone = true; B.eUnits.push(mkUnit('e', cfg.boss.key));
    banner('⚠️ ' + ED[cfg.boss.key].name + ' AWAKENS ⚠️');
  }
  if(!B.rageDone && EB.hp / EB.maxHp <= .3){
    B.rageDone = true;
    const rk = ED.book2 ? 'book2' : 'book1';
    if(B.eUnits.length < E_FIELD_MAX) B.eUnits.push(mkUnit('e', rk));
    if(B.eUnits.length < E_FIELD_MAX) B.eUnits.push(mkUnit('e', rk));
    banner('🚨 THE TOWER IS FURIOUS! 🚨');
  }
}
function step(dt){
  B.t += dt;
  B.money  = Math.min(moneyCap(), B.money + moneyRate() * dt);
  B.cannon = Math.min(100, B.cannon + dt * 1.1);
  spawner();
  for(const u of B.pUnits) updateUnit(u, dt);
  for(const u of B.eUnits) updateUnit(u, dt);
  enforceQueues();
  for(const u of B.pUnits.concat(B.eUnits)) if(u.st.wheels) u.roll += (u.st.spd * u.dir * dt) / (u.st.artSize * .45);
  B.pUnits = B.pUnits.filter(u => !u.dead);
  B.eUnits = B.eUnits.filter(u => !u.dead);
  for(const p of B.pops){ p.y -= 34 * dt; p.life -= dt; } B.pops = B.pops.filter(p => p.life > 0);
  for(const s of B.shots){ s.x += s.dir * 560 * dt; s.life -= dt; } B.shots = B.shots.filter(s => s.life > 0);
  for(const f of B.fx) f.life -= dt; B.fx = B.fx.filter(f => f.life > 0);
  B.shake = Math.max(0, B.shake - dt);
  if(B.bannerT > 0) B.bannerT -= dt;
  for(const k of ROSTER) B.cds[k] = Math.max(0, B.cds[k] - dt);
}
function endGame(win){
  if(B.over) return;
  B.over = true;
  let reward = 0, first = false;
  if(win){
    const id = BT.w + '-' + BT.l;
    first = !Sv.stages[id];
    reward = first ? BT.cfg.firstClear : BT.cfg.replay;
    if(first) Sv.stages[id] = true;
    Sv.coins += reward; saveSv();
    if(worldCleared(BT.w) && !Sv.notes['w' + BT.w]){
      Sv.notes['w' + BT.w] = true; saveSv();
      if(BT.w === 0) toast('🎉 TUTORIAL COMPLETE! 📦 The Cardboard Box is unlocked in CAT BASE!');
      else toast('🏁 WORLD COMPLETE! The next world is unlocked!');
    }
  }
  endTitle.textContent = win ? 'VICTORY! 🎉' : 'BASE DESTROYED...';
  endTitle.className = win ? 'win' : 'lose';
  endInfo.textContent = 'Time: ' + B.t.toFixed(0) + 's · Enemies defeated: ' + B.kills
    + (win ? ' · Reward: +' + reward + '💰' + (first ? ' (FIRST CLEAR!)' : '') : '');
  $('endC').classList.toggle('hidden', !win);
  $('endA').textContent = win ? 'CONTINUE ▶' : 'RETRY ↺';
  $('endB').textContent = win ? '↺ RETRY' : '⬅ LEVELS';
  $('endA').onclick = win ? () => show('levels') : retry;
  $('endB').onclick = win ? retry : () => show('levels');
  endOverlay.classList.remove('hidden');
  syncCoins();
}
function retry(){
  endOverlay.classList.add('hidden');
  initBattle();
  B.running = true;
}

/* ================= stage generation ================= */
function sched(start, gap, key, count){
  const a = []; let t = start;
  for(let i = 0; i < count; i++){ a.push({ t: Math.round(t * 10) / 10, key }); t += gap * (0.85 + Math.random() * 0.3); }
  return a;
}
function stageCfg(w, l){
  const c = { w, l, name:'', eBase:0, pBase:200, mult:1, firstClear:0, replay:0, waves:[], boss:null };
  if(w === 0){
    c.name = TUT[l];
    c.eBase = [120, 150, 180, 220, 260][l];
    c.firstClear = 120 + l * 40; c.replay = 20 + l * 5;
    c.waves = sched(2, [6.5, 5, 4.5, 3.8, 3.5][l], 'book1', 70);
    if(l === 1) c.waves.push({ t:30, key:'book1' }, { t:31.2, key:'book1' });
    if(l >= 2) c.waves = c.waves.concat(sched([28, 18, 12][l - 2], [26, 16, 12][l - 2], 'book2', l === 4 ? 8 : 6));
    if(l === 4) c.boss = { key:'grimoire', t:55, mult:1 };
  } else {
    c.name = 'MEADOW LANE ' + (l + 1);
    c.mult = 1 + 0.2 * l;
    c.eBase = 260 + 70 * l; c.pBase = 220;
    c.firstClear = 200 + l * 60; c.replay = 30 + l * 5;
    c.waves = sched(2, Math.max(2.2, 4 - l * 0.18), 'book1', 90)
      .concat(sched(10 + l * 2, Math.max(8, 15 - l), 'book2', 20));
    if(l === 9){ c.boss = { key:'grimoire', t:45, mult:1.8 }; c.waves = c.waves.concat(sched(60, 9, 'book2', 15)); }
  }
  c.waves.sort((a, b) => a.t - b.t);
  return c;
}
function buildED(cfg){
  ED = {};
  const m = cfg.mult || 1;
  const add = (k, mm) => {
    const t = ETPL[k];
    ED[k] = Object.assign({}, t, { hp:Math.round(t.hp * mm), atk:Math.round(t.atk * mm), reward:Math.round(t.reward * mm), img:ART[t.art] });
  };
  add('book1', m);
  if(!(cfg.w === 0 && cfg.l < 2)) add('book2', m);
  if(cfg.boss) add(cfg.boss.key, cfg.boss.mult || 1);
}
function startStage(w, l){
  BT = { w, l, cfg: stageCfg(w, l) };
  initBattle();
  $('stageTag').textContent = 'W' + (w + 1) + '-' + (l + 1);
  show('battle');
}
function initBattle(){
  const cfg = BT.cfg;
  buildED(cfg);
  B = { t:0, money:START_MONEY, wallet:1, speed:1, running:false, over:false, kills:0,
        cannon:0, shake:0, bannerT:0, bossDone:false, rageDone:false,
        pUnits:[], eUnits:[], cds:{}, shots:[], pops:[], fx:[], waveI:0 };
  for(const k of ROSTER) B.cds[k] = 0;
  PSTATS = {};
  for(const k of ROSTER) PSTATS[k] = catStats(k);
  PB = mkBase('p', cfg.pBase); EB = mkBase('e', cfg.eBase);
  const cb = DEPLOY.cat;
  if(PSTATS.cat.img) cb.artEl.src = PSTATS.cat.img.src;
  cb.nmEl.textContent = PSTATS.cat.name;
  cb.btn.title = PSTATS.cat.name + ' — $' + PSTATS.cat.cost + ' · ' + CATS.cat.desc;
  $('soStage').textContent = WORLDS[BT.w].name.split('·')[1].trim() + ' ' + (BT.l + 1) + ' — ' + cfg.name;
  $('soDesc').innerHTML = (BT.w === 0 ? TUTFLAVOR[BT.l] : 'The meadow is carpeted in runaway books.')
    + '<br>First clear: <b>+' + cfg.firstClear + '💰</b> · Replay: +' + cfg.replay + '💰';
  const en = $('soEnemies'); en.innerHTML = '';
  for(const k in ED){
    const d = ED[k];
    const s = document.createElement('span'); s.className = 'soEnemy';
    s.innerHTML = '<img src="' + d.img.src + '"><b>' + d.name + '</b><i>' + d.hp + 'HP ' + d.atk + 'ATK</i>' + (d.hp >= 300 ? ' ⚠️' : '');
    en.appendChild(s);
  }
  startOverlay.classList.remove('hidden');
  endOverlay.classList.add('hidden');
}

/* ================= battle rendering ================= */
function rr(x, y, w, h, r){ ctx.beginPath(); ctx.roundRect ? ctx.roundRect(x, y, w, h, r) : ctx.rect(x, y, w, h); }
function drawUnit(u){
  const st = u.st, y = GROUND;
  ctx.fillStyle = 'rgba(0,0,0,.16)';
  ctx.beginPath(); ctx.ellipse(u.x, y + 5, st.artSize * .42, 5, 0, 0, 7); ctx.fill();
  ctx.save();
  ctx.translate(u.x + u.lunge * 7 * u.dir, y + Math.sin(u.bob) * 2);
  if(st.wheels){ ctx.rotate(u.roll); }
  else{
    if(u.kbFlash > 0) ctx.rotate((Math.random() - .5) * .35);
    if(u.dir < 0) ctx.scale(-1, 1);
  }
  if(st.img && st.img.complete && st.img.naturalWidth){
    ctx.drawImage(st.img, -st.artSize / 2, -st.artSize, st.artSize, st.artSize);
  } else if(st.emoji){
    ctx.font = st.size + 'px "Segoe UI Emoji","Apple Color Emoji","Noto Color Emoji",sans-serif';
    ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
    ctx.fillText(st.emoji, 0, -6);
  } else {
    ctx.fillStyle = '#ddd'; ctx.beginPath(); ctx.arc(0, -st.artSize / 2, st.artSize / 2, 0, 7); ctx.fill();
  }
  ctx.restore();
  if(u.hp < u.maxHp){
    const w = Math.max(30, st.artSize * .9), f = Math.max(0, u.hp / u.maxHp);
    ctx.fillStyle = 'rgba(0,0,0,.45)'; ctx.fillRect(u.x - w / 2, y - st.artSize - 16, w, 5);
    ctx.fillStyle = f > .5 ? '#5ad35a' : f > .25 ? '#ffb84d' : '#ff5d5d';
    ctx.fillRect(u.x - w / 2, y - st.artSize - 16, w * f, 5);
  }
}
function drawBase(b, isPlayer){
  const x = b.x, w = 76, h = 124, top = GROUND - h, f = Math.max(0, b.hp / b.maxHp);
  ctx.fillStyle = 'rgba(0,0,0,.15)';
  ctx.beginPath(); ctx.ellipse(x, GROUND + 6, w * .62, 8, 0, 0, 7); ctx.fill();
  if(isPlayer){
    ctx.fillStyle = '#f0c05a'; rr(x - w / 2, top + 26, w, h - 26, 6); ctx.fill();
    ctx.fillStyle = '#e2574c';
    ctx.beginPath(); ctx.moveTo(x - w / 2 - 8, top + 30); ctx.lineTo(x, top - 14); ctx.lineTo(x + w / 2 + 8, top + 30); ctx.closePath(); ctx.fill();
    ctx.beginPath(); ctx.moveTo(x - w / 2 - 4, top + 8); ctx.lineTo(x - w / 2 + 8, top - 16); ctx.lineTo(x - w / 2 + 18, top + 10); ctx.closePath(); ctx.fill();
    ctx.beginPath(); ctx.moveTo(x + w / 2 + 4, top + 8); ctx.lineTo(x + w / 2 - 8, top - 16); ctx.lineTo(x + w / 2 - 18, top + 10); ctx.closePath(); ctx.fill();
    ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(x, top + 62, 17, 0, 7); ctx.fill();
    ctx.fillStyle = '#3a2f23';
    ctx.beginPath(); ctx.arc(x - 7, top + 58, 2.6, 0, 7); ctx.fill();
    ctx.beginPath(); ctx.arc(x + 7, top + 58, 2.6, 0, 7); ctx.fill();
    ctx.fillStyle = '#f49ab5';
    ctx.beginPath(); ctx.moveTo(x - 4, top + 66); ctx.lineTo(x + 4, top + 66); ctx.lineTo(x, top + 71); ctx.closePath(); ctx.fill();
  } else {
    ctx.fillStyle = '#4d4763'; rr(x - w / 2, top, w, h, 4); ctx.fill();
    ctx.fillStyle = '#3d3852';
    for(let i = -1; i <= 1; i++) ctx.fillRect(x + i * 24 - 8, top - 10, 16, 12);
    ctx.strokeStyle = '#2f2b40'; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.moveTo(x + w / 2 - 6, top - 10); ctx.lineTo(x + w / 2 - 6, top - 52); ctx.stroke();
    ctx.fillStyle = '#c0392b';
    ctx.beginPath(); ctx.moveTo(x + w / 2 - 6, top - 52); ctx.lineTo(x + w / 2 + 22, top - 45); ctx.lineTo(x + w / 2 - 6, top - 36); ctx.closePath(); ctx.fill();
    ctx.fillStyle = '#ffd9d9';
    ctx.beginPath(); ctx.moveTo(x - 16, top + 36); ctx.lineTo(x - 4, top + 42); ctx.lineTo(x - 15, top + 46); ctx.closePath(); ctx.fill();
    ctx.beginPath(); ctx.moveTo(x + 16, top + 36); ctx.lineTo(x + 4, top + 42); ctx.lineTo(x + 15, top + 46); ctx.closePath(); ctx.fill();
  }
  if(f < .6){
    ctx.strokeStyle = 'rgba(0,0,0,.35)'; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(x - 14, top + 40); ctx.lineTo(x - 4, top + 58); ctx.lineTo(x - 14, top + 74); ctx.stroke();
    if(f < .3){ ctx.beginPath(); ctx.moveTo(x + 16, top + 30); ctx.lineTo(x + 6, top + 52); ctx.lineTo(x + 18, top + 70); ctx.stroke(); }
  }
  const bw = 84;
  ctx.fillStyle = 'rgba(0,0,0,.5)'; ctx.fillRect(x - bw / 2, top - 26, bw, 7);
  ctx.fillStyle = isPlayer ? '#5ad35a' : '#ff5d5d'; ctx.fillRect(x - bw / 2, top - 26, bw * f, 7);
}
function draw(){
  ctx.clearRect(0, 0, W, H);
  ctx.save();
  if(B.shake > 0) ctx.translate((Math.random() - .5) * 10 * B.shake, (Math.random() - .5) * 10 * B.shake);
  const g = ctx.createLinearGradient(0, 0, 0, GROUND);
  g.addColorStop(0, '#9adcf5'); g.addColorStop(1, '#e8f7ff');
  ctx.fillStyle = g; ctx.fillRect(0, 0, W, GROUND);
  ctx.fillStyle = '#ffe9a8'; ctx.beginPath(); ctx.arc(120, 70, 34, 0, 7); ctx.fill();
  ctx.fillStyle = 'rgba(255,255,255,.85)';
  for(let i = 0; i < 3; i++){
    const cx = ((B.t * 10 + i * 340) % (W + 240)) - 120, cy = 52 + i * 26;
    ctx.beginPath(); ctx.ellipse(cx, cy, 46, 14, 0, 0, 7); ctx.ellipse(cx + 30, cy - 8, 30, 12, 0, 0, 7); ctx.fill();
  }
  ctx.fillStyle = '#7ec850'; ctx.fillRect(0, GROUND, W, H - GROUND);
  ctx.fillStyle = '#6ab043'; ctx.fillRect(0, GROUND, W, 10);
  ctx.fillStyle = '#5d9c3a'; ctx.fillRect(0, GROUND + 44, W, H - GROUND - 44);
  drawBase(PB, true); drawBase(EB, false);
  for(const u of B.eUnits) drawUnit(u);
  for(const u of B.pUnits) drawUnit(u);
  ctx.fillStyle = 'rgba(40,40,40,.85)';
  for(const s of B.shots){ ctx.beginPath(); ctx.arc(s.x, s.y, 3, 0, 7); ctx.fill(); }
  for(const f of B.fx){
    const a = Math.max(0, f.life / f.max);
    ctx.fillStyle = 'rgba(130,205,255,' + (.45 * a) + ')'; ctx.fillRect(f.x - f.w / 2, 40, f.w, GROUND - 34);
    ctx.fillStyle = 'rgba(255,255,255,' + (.6 * a) + ')';  ctx.fillRect(f.x - 5, 40, 10, GROUND - 34);
  }
  ctx.textAlign = 'center'; ctx.font = 'bold 14px system-ui';
  for(const p of B.pops){
    ctx.globalAlpha = Math.min(1, p.life * 2); ctx.fillStyle = p.col; ctx.fillText(p.txt, p.x, p.y);
  }
  ctx.globalAlpha = 1;
  ctx.restore();
}

/* ================= battle UI ================= */
function syncUI(){
  if(!B) return;
  moneyEl.textContent = Math.floor(B.money);
  moneyCapEl.textContent = ' /' + moneyCap();
  rateEl.textContent = '+' + moneyRate().toFixed(1) + '/s';
  walletCostEl.textContent = '$' + (WALLET_COST * B.wallet);
  walletBtn.disabled = B.money < WALLET_COST * B.wallet || B.over || !B.running;
  for(const k of ROSTER){
    const d = DEPLOY[k], cd = B.cds[k], st = PSTATS[k];
    d.cdEl.style.height = (cd > 0 ? cd / st.cd * 100 : 0) + '%';
    d.btn.classList.toggle('off', B.money < st.cost || cd > 0);
  }
  CANNON.style.setProperty('--fill', B.cannon.toFixed(0));
  CANNON.classList.toggle('ready', B.cannon >= 100);
  CANNON_PCT.textContent = Math.floor(B.cannon) + '%';
  pHp.style.width = (PB.hp / PB.maxHp * 100) + '%';
  eHp.style.width = (EB.hp / EB.maxHp * 100) + '%';
  bannerEl.classList.toggle('show', B.bannerT > 0);
}
function buildDeployBar(){
  const bar = $('bar'); bar.innerHTML = '';
  CANNON = document.createElement('button');
  CANNON.id = 'cannonBtn'; CANNON.title = 'Unleash when fully charged (C)';
  CANNON.innerHTML = '<div class="inner"><span>CANNON</span><span class="pct">0%</span></div>';
  CANNON.onclick = fireCannon;
  bar.appendChild(CANNON);
  CANNON_PCT = CANNON.querySelector('.pct');
  for(const k of ROSTER){
    const c = CATS[k];
    const btn = document.createElement('button');
    btn.className = 'unit'; btn.title = c.desc;
    btn.innerHTML = (c.f1.art ? '<img class="em" alt="">' : '<span class="em">' + c.emoji + '</span>')
      + '<span class="nm">' + c.name + '</span><span class="cost">$' + c.f1.cost + '</span><div class="cd"></div>';
    btn.onclick = () => deploy(k);
    bar.appendChild(btn);
    DEPLOY[k] = { btn, cdEl: btn.querySelector('.cd'), artEl: btn.querySelector('img.em'), nmEl: btn.querySelector('.nm') };
  }
  const spacer = document.createElement('div'); spacer.id = 'unitSpacer'; bar.appendChild(spacer);
}
function deploy(key){
  if(!B || !B.running || B.over) return;
  const st = PSTATS[key];
  if(B.cds[key] > 0 || B.money < st.cost || B.pUnits.length >= P_FIELD_MAX) return;
  B.money -= st.cost; B.cds[key] = st.cd;
  B.pUnits.push(mkUnit('p', key));
}
function toggleSpeed(){
  if(!B) return;
  B.speed = B.speed === 1 ? 2 : 1;
  speedBtn.textContent = '⏩ ×' + B.speed;
}

/* ================= boot ================= */
function boot(){
  /* canvas */
  cvs = $('cvs');
  ctx = cvs.getContext('2d');
  const dpr = Math.min(2, window.devicePixelRatio || 1);
  cvs.width = W * dpr; cvs.height = H * dpr; ctx.scale(dpr, dpr);

  /* DOM refs */
  moneyEl = $('money'); moneyCapEl = $('moneyCap'); rateEl = $('rate');
  walletBtn = $('walletBtn'); walletCostEl = $('walletCost'); speedBtn = $('speedBtn');
  pHp = $('pHp'); eHp = $('eHp'); bannerEl = $('banner');
  startOverlay = $('startOverlay'); endOverlay = $('endOverlay');
  endTitle = $('endTitle'); endInfo = $('endInfo');

  /* wiring */
  $('btnPlay').onclick = () => show('worlds');
  $('btnCats').onclick = () => show('cats');
  for(const b of document.querySelectorAll('[data-nav]')) b.onclick = () => show(b.dataset.nav);
  walletBtn.onclick = () => {
    if(!B || B.over || !B.running || B.money < WALLET_COST * B.wallet) return;
    B.money -= WALLET_COST * B.wallet; B.wallet++;
  };
  speedBtn.onclick = toggleSpeed;
  $('resetBtn').onclick = () => { initBattle(); B.running = true; };
  $('quitBtn').onclick = () => show('levels');
  $('startBtn').onclick = () => { startOverlay.classList.add('hidden'); B.running = true; };
  addEventListener('keydown', e => {
    if(CUR !== 'battle') return;
    const k = e.key.toLowerCase();
    if(k >= '1' && k <= '5'){ const key = ROSTER[+k - 1]; if(key) deploy(key); }
    else if(k === 'c') fireCannon();
    else if(k === 'w') walletBtn.click();
    else if(k === 'f') toggleSpeed();
  });

  buildDeployBar();
  $('titleCat').src = ART.f1.src;
  $('battleLogo').src = ART.f1.src;

  loadSave();
  checkDaily();
  show('title');

  let last = performance.now();
  const frame = now => {
    const dt = Math.min((now - last) / 1000, .05); last = now;
    if(CUR === 'battle' && B){
      if(B.running && !B.over) step(dt * B.speed);
      draw(); syncUI();
    } else if(CUR === 'cats'){
      catsTick();
    }
    requestAnimationFrame(frame);
  };
  requestAnimationFrame(frame);
}
if(document.readyState === 'loading') addEventListener('DOMContentLoaded', boot);
else boot();