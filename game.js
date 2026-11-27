import { LINES } from './lines.js';
import { URLS } from './audioMap.js';


const CSS = `
.tg{max-width:520px;margin:0 auto;--sand:#f6e3b0;direction:rtl;font-family:system-ui,'Segoe UI',Tahoma,sans-serif;background:linear-gradient(#8fd8ff 0,#c9efff 34%,#f6e3b0 34%,#f1d691 100%);border-radius:24px;min-height:620px;padding:12px;position:relative;overflow:hidden;user-select:none;-webkit-user-select:none;touch-action:manipulation;text-align:center;color:#244}
.tg *{box-sizing:border-box}
.tg button{font:inherit;border:0;cursor:pointer;-webkit-tap-highlight-color:transparent}
.tg .top{display:flex;align-items:center;justify-content:space-between;gap:8px;min-height:64px}
.tg .home{background:#fff;border-radius:18px;padding:10px 16px;font-size:26px;box-shadow:0 4px 0 #0002}
.tg .stars{font-size:26px;letter-spacing:2px}
.tg .title{font-size:30px;font-weight:800;margin:6px 0}
.tg .guide{display:flex;align-items:center;gap:10px;justify-content:center;margin:4px 0 10px}
.tg .guide img{width:84px;height:84px;border-radius:50%;border:4px solid #fff;background:#fff;object-fit:cover}
.tg .bubble{background:#fff;border-radius:22px;padding:10px 16px;font-size:26px;font-weight:700;max-width:300px;box-shadow:0 4px 0 #0002;cursor:pointer}
.tg .menu{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:8px}
.tg .lv{background:#fff;border-radius:26px;padding:14px 6px;font-size:22px;font-weight:800;box-shadow:0 6px 0 #0002;display:flex;flex-direction:column;align-items:center;gap:2px}
.tg .lv .ic{font-size:50px;line-height:1.1}.tg .lv small{font-size:15px;font-weight:600;color:#577}
.tg .choices{display:flex;flex-wrap:wrap;gap:14px;justify-content:center;margin:14px 0}
.tg .ch{background:#fff;border-radius:28px;min-width:104px;min-height:104px;font-size:60px;box-shadow:0 6px 0 #0002;display:flex;align-items:center;justify-content:center;padding:6px 12px;flex-direction:column;transition:transform .15s}
.tg .ch:active{transform:scale(.93)}
.tg .ch small{font-size:20px;font-weight:700}
.tg .dot{width:92px;height:92px;border-radius:50%;border:5px solid #fff;box-shadow:0 5px 0 #0002;padding:0}
.tg .shake{animation:tgshake .4s}.tg .pop{animation:tgpop .5s}
@keyframes tgshake{25%{transform:translateX(-10px)}75%{transform:translateX(10px)}}
@keyframes tgpop{50%{transform:scale(1.25) rotate(6deg)}}
.tg .big{font-size:110px;line-height:1.1;font-weight:800;color:#e0457b;text-shadow:0 4px 0 #fff}
.tg .shells{display:flex;flex-wrap:wrap;gap:6px;justify-content:center;font-size:48px;margin:6px 24px;min-height:64px}
.tg .shells span{cursor:pointer;display:inline-block}
.tg .shells span.on{transform:scale(1.3);filter:drop-shadow(0 0 6px gold)}
.tg .beach{display:flex;flex-wrap:wrap;gap:14px;justify-content:center;margin:10px}
.tg .item{font-size:64px;background:#ffffff88;border-radius:22px;width:96px;height:96px;display:flex;align-items:center;justify-content:center}
.tg .binrow{display:flex;align-items:center;justify-content:center;gap:12px}
.tg .binrow img{width:110px;height:110px;border-radius:24px;border:4px solid #fff}
.tg .card{width:92px;height:92px;border-radius:20px;font-size:52px;background:#ff9f43;color:#fff;box-shadow:0 5px 0 #0002;display:flex;align-items:center;justify-content:center}
.tg .card.up{background:#fff}.tg .card.done{background:#c8f7c5}
.tg .cards{display:grid;grid-template-columns:repeat(3,92px);gap:12px;justify-content:center;margin:12px 0}
.tg .cards.c4{grid-template-columns:repeat(4,76px)}.tg .cards.c4 .card{width:76px;height:76px;font-size:42px}
.tg .win{position:absolute;inset:0;background:#fffe;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;font-size:34px;font-weight:800;z-index:5}
.tg .win .row{font-size:70px}.tg .win button{background:#35c46b;color:#fff;border-radius:26px;padding:14px 34px;font-size:30px;font-weight:800;box-shadow:0 6px 0 #0003}
.tg .win img{width:140px;height:140px;border-radius:50%;border:5px solid #fff}
.tg .sound{background:#fff;border-radius:50%;width:52px;height:52px;font-size:26px}
`;

const COLORS = [
  ['أحمر', '#ee3b3b', 'c_red'], ['أصفر', '#ffd21f', 'c_yellow'], ['أزرق', '#2f7bff', 'c_blue'], ['أخضر', '#2fbf55', 'c_green'],
  ['برتقالي', '#ff9020', 'c_orange'], ['بنفسجي', '#9b4de0', 'c_purple'], ['وردي', '#ff7fb3', 'c_pink'],
  ['أبيض', '#ffffff', 'c_white'], ['أسود', '#222222', 'c_black'], ['بني', '#8b5a2b', 'c_brown'],
];
const NUMW = ['', 'واحد', 'اتنين', 'تلاتة', 'أربعة', 'خمسة', 'ستة', 'سبعة', 'تمانية', 'تسعة', 'عشرة'];
const NUMA = ['', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩', '١٠'];
const LETTERS = [
  ['أ', 'أرنب', '🐰', 'ألف'], ['ب', 'بطة', '🦆', 'باء'], ['ت', 'تمساح', '🐊', 'تاء'], ['ج', 'جمل', '🐪', 'جيم'],
  ['ح', 'حصان', '🐴', 'حاء'], ['س', 'سمكة', '🐟', 'سين'], ['ف', 'فراشة', '🦋', 'فاء'], ['ق', 'قمر', '🌙', 'قاف'],
  ['ك', 'كلب', '🐶', 'كاف'], ['ن', 'نجمة', '⭐', 'نون'],
];
const SHAPES                     = [
  ['دايرة', '<circle cx="50" cy="50" r="42"/>'],
  ['مربع', '<rect x="10" y="10" width="80" height="80" rx="6"/>'],
  ['مثلث', '<polygon points="50,8 94,90 6,90"/>'],
  ['نجمة', '<polygon points="50,6 62,38 96,38 68,58 79,92 50,71 21,92 32,58 4,38 38,38"/>'],
  ['قلب', '<path d="M50 90 C5 55 8 15 32 15 C44 15 50 25 50 30 C50 25 56 15 68 15 C92 15 95 55 50 90Z"/>'],
  ['مستطيل', '<rect x="4" y="25" width="92" height="50" rx="6"/>'],
];
const SHCOL = ['#ee3b3b', '#2f7bff', '#2fbf55', '#ff9020', '#9b4de0'];
const TRASH = ['🥤', '🍾', '🥫', '🧃', '🛍️', '🍌'];
const SHELLS = ['🐚', '⭐', '🦀'];
const MEM = ['🐢', '🐠', '🦆', '🐙', '🦋', '🐶'];

const LEVELS = [
  { ic: '🎨', name: 'الألوان', skill: 'تمييز الألوان' },
  { ic: '🔢', name: 'الأرقام', skill: 'العدّ' },
  { ic: '🔤', name: 'الحروف', skill: 'الحروف والكلمات' },
  { ic: '🔷', name: 'الأشكال', skill: 'الأشكال' },
  { ic: '🧹', name: 'نضّف الشاطئ', skill: 'الفرز والتركيز' },
  { ic: '🧠', name: 'الذاكرة', skill: 'تذكّر وتطابق' },
  { ic: '🦘', name: 'نطّ وخد النجوم', skill: 'التوقيت والعدّ' },
];

const rnd = (n        ) => Math.floor(Math.random() * n);
function shuffle   (a     )      { const b = a.slice(); for (let i = b.length - 1; i > 0; i--) { const j = rnd(i + 1); [b[i], b[j]] = [b[j], b[i]]; } return b; }
function pick   (a     , n        , not    )      { return shuffle(a.filter((x) => x !== not)).slice(0, n); }

export function mountGame(root             , imgs      ) {
  const st = document.createElement('style'); st.textContent = CSS; document.head.appendChild(st);
  const el = document.createElement('div'); el.className = 'tg'; root.appendChild(el);
  let mute = false; let timers           = [];
  let stars           = [0, 0, 0, 0, 0, 0, 0]; let raf = 0;
  try { const s = JSON.parse(localStorage.getItem('tg-stars') || 'null'); if (Array.isArray(s)) stars = s; } catch (e) { /* storage may be blocked */ }
  const save = () => { try { localStorage.setItem('tg-stars', JSON.stringify(stars)); } catch (e) { /* ignore */ } };

  let cur                          = null; let seq = 0;
  function tts(t        ) {
    try {
      const ss = (window       ).speechSynthesis; if (!ss) return;
      ss.cancel(); const u = new SpeechSynthesisUtterance(t); u.lang = 'ar-EG'; u.rate = 0.8; u.pitch = 1.3;
      const v = ss.getVoices().find((x     ) => /^ar/i.test(x.lang)); if (v) u.voice = v; ss.speak(u);
    } catch (e) { /* no voice available */ }
  }
  function say(...keys          ) {
    if (mute) return;
    seq++; const my = seq; if (cur) { cur.pause(); cur = null; }
    if (keys.some((k) => !URLS[k])) { tts(keys.map((k) => LINES[k] || k).join(' ')); return; }
    const playAt = (i        ) => {
      if (my !== seq || i >= keys.length) return;
      const a = new Audio(URLS[keys[i]]); cur = a; a.onended = () => window.setTimeout(() => playAt(i + 1), 60); a.onerror = () => playAt(i + 1);
      a.play().catch(() => { /* autoplay blocked until first tap */ });
    };
    playAt(0);
  }
  function applause() {
    if (mute) return;
    try {
      const AC = (window       ).AudioContext || (window       ).webkitAudioContext; const c = new AC();
      const len = c.sampleRate * 1.8; const buf = c.createBuffer(1, len, c.sampleRate); const d = buf.getChannelData(0);
      let clap = 0;
      for (let i = 0; i < len; i++) {
        if (i % Math.floor(c.sampleRate / 14) === 0 || Math.random() < 0.0008) clap = 1;
        clap *= 0.9965; const env = Math.min(1, i / 2000) * Math.max(0, 1 - i / len);
        d[i] = (Math.random() * 2 - 1) * clap * env * (0.5 + Math.random() * 0.5);
      }
      const src = c.createBufferSource(); src.buffer = buf;
      const f = c.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = 2200; f.Q.value = 0.6;
      const g = c.createGain(); g.gain.value = 0.9; src.connect(f); f.connect(g); g.connect(c.destination); src.start();
    } catch (e) { /* ignore */ }
  }
  function cheer() { applause(); later(() => say('pr_' + rnd(8)), 900); }
  function later(fn            , ms        ) { timers.push(window.setTimeout(fn, ms)); }
  function clear() { timers.forEach(clearTimeout); timers = []; cancelAnimationFrame(raf); }
  function beep(ok         ) {
    if (mute) return;
    try {
      const AC = (window       ).AudioContext || (window       ).webkitAudioContext; const c = new AC();
      const o = c.createOscillator(), g = c.createGain(); o.connect(g); g.connect(c.destination);
      o.frequency.value = ok ? 660 : 220; g.gain.value = 0.08; o.start(); o.stop(c.currentTime + (ok ? 0.18 : 0.12));
      if (ok) { const o2 = c.createOscillator(); o2.connect(g); o2.frequency.value = 880; o2.start(c.currentTime + 0.18); o2.stop(c.currentTime + 0.36); }
    } catch (e) { /* ignore */ }
  }

  function frame(title        , prompt        , keys          , body                      , lv        , round         ) {
    el.innerHTML = '';
    const top = document.createElement('div'); top.className = 'top';
    top.innerHTML = `<button class="home" aria-label="الرئيسية">🏠</button><div class="stars">${round || ''}</div><button class="sound" aria-label="الصوت">${mute ? '🔇' : '🔊'}</button>`;
    (top.querySelector('.home')               ).onclick = () => { clear(); menu(); };
    (top.querySelector('.sound')               ).onclick = (e) => { mute = !mute; (e.target               ).textContent = mute ? '🔇' : '🔊'; if (!mute) say(...keys); };
    el.appendChild(top);
    const t = document.createElement('div'); t.className = 'title'; t.textContent = `${LEVELS[lv].ic} ${title}`; el.appendChild(t);
    const g = document.createElement('div'); g.className = 'guide';
    g.innerHTML = `<img src="${[imgs.tia, imgs.doll, imgs.aser][lv % 3]}" alt=""><div class="bubble">${prompt}</div>`;
    (g.querySelector('.bubble')               ).onclick = () => say(...keys);
    el.appendChild(g);
    if (typeof body === 'string') { const d = document.createElement('div'); d.innerHTML = body; el.appendChild(d); } else el.appendChild(body);
    say(...keys);
  }

  function win(lv        ) {
    clear(); stars[lv] = Math.min(3, (stars[lv] || 0) + 1); save(); beep(true);
    const w = document.createElement('div'); w.className = 'win';
    w.innerHTML = `<img src="${imgs.tia}" alt=""><div>برافو يا بطل! 🎉</div><div class="row">⭐⭐⭐</div><button id="again">كمان مرة</button><button id="next" style="background:#2f7bff">اللعبة اللي بعدها</button>`;
    el.appendChild(w); applause(); later(() => say('win'), 700);
    (w.querySelector('#again')               ).onclick = () => start(lv);
    (w.querySelector('#next')               ).onclick = () => start((lv + 1) % LEVELS.length);
  }

  function menu() {
    clear(); el.innerHTML = '';
    const top = document.createElement('div'); top.className = 'top';
    top.innerHTML = `<div></div><button class="sound">${mute ? '🔇' : '🔊'}</button>`;
    (top.querySelector('.sound')               ).onclick = (e) => { mute = !mute; (e.target               ).textContent = mute ? '🔇' : '🔊'; };
    el.appendChild(top);
    const g = document.createElement('div'); g.className = 'guide';
    g.innerHTML = `<img src="${imgs.tia}" alt=""><img src="${imgs.aser}" alt=""><img src="${imgs.doll}" alt="">`;
    el.appendChild(g);
    const t = document.createElement('div'); t.className = 'title'; t.textContent = 'العب مع تيا وآسر'; el.appendChild(t);
    const m = document.createElement('div'); m.className = 'menu';
    LEVELS.forEach((l, i) => {
      const b = document.createElement('button'); b.className = 'lv';
      b.innerHTML = `<span class="ic">${l.ic}</span>${i + 1}. ${l.name}<small>${l.skill}</small><span>${'⭐'.repeat(stars[i] || 0) || '&nbsp;'}</span>`;
      b.onclick = () => start(i); m.appendChild(b);
    });
    el.appendChild(m);
    later(() => say('p_menu'), 300);
  }

  function choicesRow(opts                                                                               , onOk            ) {
    const row = document.createElement('div'); row.className = 'choices';
    shuffle(opts).forEach((o) => {
      const b = document.createElement('button'); b.className = 'ch ' + (o.cls || ''); b.innerHTML = o.html; if (o.style) b.setAttribute('style', o.style);
      b.onclick = () => {
        if (o.say) say(...o.say);
        if (o.ok) { b.classList.add('pop'); later(cheer, 900); later(onOk, 2600); row.querySelectorAll('button').forEach((x) => ((x                     ).disabled = true)); }
        else { b.classList.remove('shake'); void b.offsetWidth; b.classList.add('shake'); beep(false); later(() => say('tr_' + rnd(4)), 700); }
      };
      row.appendChild(b);
    });
    return row;
  }
  const ROUNDS = 5; const dots = (r        , n = ROUNDS) => '🟡'.repeat(r) + '⚪'.repeat(n - r);

  const CR = 8;
  function colors(r = 0) {
    if (r >= CR) return win(0);
    const n = r < 2 ? 2 : r < 5 ? 3 : 4; const pool = r < 2 ? COLORS.slice(0, 4) : r < 5 ? COLORS.slice(0, 7) : COLORS;
    const set = pick(pool, n); const ans = set[rnd(n)];
    const row = choicesRow(set.map((c) => ({ html: '', ok: c === ans, cls: 'dot', style: `background:${c[1]}`, say: [c[2]] })), () => colors(r + 1));
    frame('الألوان', `فين اللون ${ans[0]}؟`, ['q_where_color', ans[2]], row, 0, dots(r, CR));
  }

  function counting(r = 0) {
    if (r >= ROUNDS) return win(1);
    const n = r < 2 ? 1 + rnd(3) : r < 4 ? 3 + rnd(4) : 6 + rnd(5); const wrap = document.createElement('div');
    const sh = document.createElement('div'); sh.className = 'shells'; let c = 0;
    for (let i = 0; i < n; i++) { const s = document.createElement('span'); s.textContent = '🐚'; s.onclick = () => { if (s.classList.contains('on')) return; s.classList.add('on'); c++; say('n_' + c); }; sh.appendChild(s); }
    const opts = new Set        ([n]); while (opts.size < 3) { const x = Math.max(1, Math.min(10, n + rnd(5) - 2)); opts.add(x); }
    const row = choicesRow([...opts].map((x) => ({ html: `${NUMA[x]}<small>${NUMW[x]}</small>`, ok: x === n, say: ['n_' + x] })), () => counting(r + 1));
    wrap.appendChild(sh); wrap.appendChild(row);
    frame('الأرقام', 'عدّ الصدف معايا! دوس على كل صدفة', ['p_count'], wrap, 1, dots(r));
  }

  function letters(r = 0) {
    if (r >= ROUNDS) return win(2);
    const set = pick(LETTERS, 3); const ans = set[rnd(3)]; const wrap = document.createElement('div');
    wrap.innerHTML = `<div class="big">${ans[0]}</div>`;
    wrap.appendChild(choicesRow(set.map((x) => ({ html: `${x[2]}<small>${x[1]}</small>`, ok: x === ans, say: ['lw_' + LETTERS.indexOf(x)] })), () => letters(r + 1)));
    frame('الحروف', `حرف ${ans[3]}. فين ${ans[1]}؟`, ['q_letter', 'ln_' + LETTERS.indexOf(ans), 'q_where', 'lw_' + LETTERS.indexOf(ans)], wrap, 2, dots(r));
  }

  function shapes(r = 0) {
    if (r >= ROUNDS) return win(3);
    const n = r < 2 ? 2 : 3; const set = pick(SHAPES, n); const ans = set[rnd(n)]; const col = SHCOL[rnd(SHCOL.length)];
    const row = choicesRow(set.map((s) => ({ html: `<svg width="76" height="76" viewBox="0 0 100 100" fill="${col}">${s[1]}</svg>`, ok: s === ans, say: ['s_' + SHAPES.indexOf(s)] })), () => shapes(r + 1));
    frame('الأشكال', `فين ال${ans[0]}؟`, ['q_where', 's_' + SHAPES.indexOf(ans)], row, 3, dots(r));
  }

  function sorting(r = 0) {
    const nTrash = r === 0 ? 3 : 5; const nShell = r === 0 ? 1 : 3; let left = nTrash; let inBin = 0;
    const wrap = document.createElement('div');
    const bin = document.createElement('div'); bin.className = 'binrow';
    bin.innerHTML = `<img src="${imgs.bin}" alt=""><div class="bubble" id="cnt">٠</div>`;
    const beach = document.createElement('div'); beach.className = 'beach';
    const items = shuffle([...Array.from({ length: nTrash }, () => ({ e: TRASH[rnd(TRASH.length)], t: true })), ...Array.from({ length: nShell }, () => ({ e: SHELLS[rnd(SHELLS.length)], t: false }))]);
    items.forEach((it) => {
      const b = document.createElement('button'); b.className = 'item'; b.textContent = it.e;
      b.onclick = () => {
        if (it.t) { b.style.visibility = 'hidden'; inBin++; left--; (bin.querySelector('#cnt')               ).textContent = NUMA[inBin]; say('n_' + inBin); beep(true); if (!left) later(() => (r === 0 ? sorting(1) : win(4)), 1200); }
        else { b.classList.remove('shake'); void b.offsetWidth; b.classList.add('shake'); beep(false); say('shell_ok'); }
      };
      beach.appendChild(b);
    });
    wrap.appendChild(bin); wrap.appendChild(beach);
    frame('نضّف الشاطئ', 'لمّ الزبالة في الصندوق! سيب الصدف والنجوم', ['p_sort'], wrap, 4, dots(r === 0 ? 0 : 3));
  }

  function memory(r = 0) {
    const pairs = r === 0 ? 3 : 4; const faces = shuffle([...pick(MEM, pairs), ...[]]); const deck = shuffle([...faces, ...faces]);
    const g = document.createElement('div'); g.className = 'cards' + (pairs === 4 ? ' c4' : '');
    let first                           = null; let lock = false; let found = 0;
    deck.forEach((f) => {
      const b = document.createElement('button'); b.className = 'card'; b.textContent = '❓';
      b.onclick = () => {
        if (lock || b === first || b.classList.contains('done')) return;
        b.textContent = f; b.classList.add('up'); beep(true);
        if (!first) { first = b; return; }
        if (first.textContent === f) { first.classList.add('done'); b.classList.add('done'); found++; cheer(); first = null; if (found === pairs) later(() => (r === 0 ? memory(1) : win(5)), 1000); }
        else { lock = true; const a = first; first = null; later(() => { a.textContent = '❓'; b.textContent = '❓'; a.classList.remove('up'); b.classList.remove('up'); lock = false; }, 900); }
      };
      g.appendChild(b);
    });
    frame('الذاكرة', 'اقلب الكروت ودوّر على الصور المتشابهة', ['p_memory'], g, 5, dots(r === 0 ? 0 : 3));
  }

  function jump(r = 0) {
    const target = r === 0 ? 5 : 8; let got = 0; let y = 0; let vy = 0; let hurt = 0; let spawn = 0.8; let last = 0;
    const speed = r === 0 ? 130 : 170;
    const stage = document.createElement('div');
    stage.setAttribute('style', 'position:relative;height:250px;margin:8px 0;border-radius:20px;overflow:hidden;background:linear-gradient(#bfeaff 0,#bfeaff 70%,#e9cf8f 70%);touch-action:manipulation;cursor:pointer');
    const hero = document.createElement('img'); hero.src = r === 0 ? imgs.tia : imgs.aser; hero.alt = '';
    hero.setAttribute('style', 'position:absolute;left:30px;bottom:50px;width:68px;height:68px;border-radius:50%;border:3px solid #fff;background:#fff;object-fit:cover');
    stage.appendChild(hero);
    const cnt = document.createElement('div'); cnt.setAttribute('style', 'position:absolute;top:8px;right:12px;font-size:30px;font-weight:800;background:#fff9;border-radius:14px;padding:2px 12px');
    cnt.textContent = '⭐ ' + NUMA[0 + got] ; stage.appendChild(cnt);
    const things                                                  = [];
    const doJump = () => { if (y === 0) { vy = 520; beep(true); } };
    stage.addEventListener('pointerdown', doJump);
    frame('نطّ وخد النجوم', 'دوس على الشاشة عشان تيا تنط! انط فوق السلطعون وخد النجوم', ['p_jump'], stage, 6, dots(r === 0 ? 0 : 3));
    const upd = () => { cnt.textContent = '⭐ ' + (got ? NUMA[got] : '٠') + ' / ' + NUMA[target]; };
    upd();
    const W = () => stage.clientWidth || 320;
    const tick = (t        ) => {
      const dt = Math.min(0.05, last ? (t - last) / 1000 : 0.016); last = t;
      vy -= 1500 * dt; y = Math.max(0, y + vy * dt); if (y === 0 && vy < 0) vy = 0;
      hero.style.bottom = 50 + y + 'px';
      if (hurt > 0) { hurt -= dt; hero.style.opacity = Math.floor(hurt * 10) % 2 ? '0.4' : '1'; } else hero.style.opacity = '1';
      spawn -= dt;
      if (spawn <= 0) {
        spawn = 1.7 + Math.random() * 1.0; const star = Math.random() < 0.5; const e = document.createElement('div');
        e.textContent = star ? '⭐' : '🦀'; e.setAttribute('style', `position:absolute;font-size:44px;line-height:1;bottom:${star ? 50 + 70 + rnd(30) : 50}px;left:0`);
        stage.appendChild(e); things.push({ el: e, x: W() + 20, star });
      }
      for (let i = things.length - 1; i >= 0; i--) {
        const th = things[i]; th.x -= speed * dt; th.el.style.transform = `translateX(${th.x}px)`;
        const near = th.x > 14 && th.x < 100; const thY = th.star ? parseInt(th.el.style.bottom) - 50 : 0;
        if (near && !(hurt > 0)) {
          if (th.star ? Math.abs(y - thY) < 55 : y < 34) {
            if (th.star) { got++; upd(); say('n_' + got); th.el.remove(); things.splice(i, 1); if (got >= target) { later(() => (r === 0 ? jump(1) : win(6)), 900); cancelAnimationFrame(raf); return; } continue; }
            hurt = 1; say('tr_' + rnd(4)); th.el.remove(); things.splice(i, 1); continue;
          }
        }
        if (th.x < -60) { th.el.remove(); things.splice(i, 1); }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
  }

  function start(i        ) { clear(); [colors, counting, letters, shapes, sorting, memory, jump][i](0); }
  menu();
  return () => { clear(); el.remove(); st.remove(); };
}
