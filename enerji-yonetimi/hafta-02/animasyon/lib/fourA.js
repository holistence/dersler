'use strict';
// The four A's of energy security, shared by every chapter that names them (style.json components).
// Load after engine.js. Everything is drawn around its own origin and placed with x/y.

const FOUR_A = [
  { key: 'avail', name: 'Ulaşılabilirlik', en: 'Availability', color: '#d9822b', short: 'kaynak var' },
  { key: 'access', name: 'Erişilebilirlik', en: 'Accessibility', color: '#2f6fb5', short: 'engelsiz ulaşım' },
  { key: 'accept', name: 'Kabul edilebilirlik', en: 'Acceptability', color: '#3f8f4e', short: 'toplum ve çevre onayı' },
  { key: 'afford', name: 'Karşılanabilirlik', en: 'Affordability', color: '#8a4fb0', short: 'ödenebilir fiyat' },
];
const CORE_RED = '#c8423a';

// One icon per A, about 64 px across, centred on (0,0).
function aIcon(parent, i, { x = 0, y = 0, s = 1, o = 1, color = '#fff', sw = 4.5 } = {}) {
  const g = G(parent, { x, y, s, o });
  const line = { stroke: color, 'stroke-width': sw, fill: 'none', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' };
  if (i === 0) {        // a drop of oil over a ground line: the resource is there
    path(g, 'M0 -28C14 -10 19 0 19 8A19 19 0 0 1 -19 8C-19 0 -14 -10 0 -28Z', line);
    path(g, 'M-28 30H28', line);
  } else if (i === 1) { // a route from a point to an arrow head: reaching it
    mk('circle', { cx: -22, cy: 20, r: 6, fill: color }, g);
    path(g, 'M-22 20C-4 20 -14 -14 6 -14H22', line);
    path(g, 'M12 -24L24 -14L12 -4', line);
  } else if (i === 2) { // a leaf with its vein: accepted by society and nature
    path(g, 'M-22 24C-26 -6 -4 -26 26 -26C26 4 6 26 -22 24Z', line);
    path(g, 'M-22 24C-6 8 6 -4 16 -16', line);
  } else {              // a coin with the lira sign: a price that can be paid
    mk('circle', { cx: 0, cy: 0, r: 26, ...line }, g);
    T(g, '₺', { x: 0, y: 12, size: 34, fill: color, weight: 700, anchor: 'middle' });
  }
  return g;
}

// A rounded tile: coloured disc with the icon, the Turkish name, the English term under it.
function aTile(parent, i, { x = 0, y = 0, o = 1, s = 1, w = 330, en = true, size = 30 } = {}) {
  const a = FOUR_A[i], g = G(parent, { x, y, o, s });
  mk('rect', { x: -w / 2, y: -46, width: w, height: 92, rx: 46, fill: '#fff', stroke: a.color, 'stroke-width': 3 }, g);
  mk('circle', { cx: -w / 2 + 46, cy: 0, r: 38, fill: a.color }, g);
  aIcon(g, i, { x: -w / 2 + 46, y: 0, s: .78 });
  const tx = -w / 2 + 98;
  T(g, a.name, { x: tx, y: en ? -2 : 10, size, weight: 700, fill: a.color });
  if (en) T(g, a.en, { x: tx, y: 28, size: 20, weight: 500, fill: COL.dim });
  g._a = a;
  return g;
}

// The core node "ENERJİ GÜVENLİĞİ", centred.
function coreNode(parent, { x = 800, y = 450, o = 1, s = 1, r = 110 } = {}) {
  const g = G(parent, { x, y, o, s });
  mk('circle', { r, fill: '#fff', stroke: CORE_RED, 'stroke-width': 5 }, g);
  T(g, 'ENERJİ', { y: -6, size: r * .3, weight: 800, fill: CORE_RED, anchor: 'middle' });
  T(g, 'GÜVENLİĞİ', { y: r * .3, size: r * .3, weight: 800, fill: CORE_RED, anchor: 'middle' });
  return g;
}

// A 4A profile: one bar per A, values 0..1. profile.set(i, v, t0, dur) moves a bar on the beat clock;
// the bar's fill length and its value are the same number, so the picture never disagrees with itself.
const PROFILE_W = 460;
function aProfile(parent, title, vals, { x = 0, y = 0, o = 1, s = 1, w = PROFILE_W } = {}) {
  const g = G(parent, { x, y, o, s });
  if (title) T(g, title, { x: 0, y: -40, size: 34, weight: 700 });
  const bars = FOUR_A.map((a, i) => {
    const row = G(g, { y: i * 78 });
    mk('circle', { cx: 24, cy: 0, r: 24, fill: a.color }, row);
    aIcon(row, i, { x: 24, y: 0, s: .5, sw: 6 });
    T(row, a.name, { x: 60, y: 9, size: 25, weight: 600, fill: a.color });
    const bx = 300;
    mk('rect', { x: bx, y: -14, width: w, height: 28, rx: 14, fill: '#e6e3da' }, row);
    const fill = mk('rect', { x: bx, y: -14, width: 28, height: 28, rx: 14, fill: a.color }, row);
    put(fill, { a_width: Math.max(28, vals[i] * w) });
    return { row, fill };
  });
  // a bar's value on the beat clock: its fill length is the value, so the picture never disagrees with itself
  const set = (i, v, t0, dur = .8, ease = io) => tw(bars[i].fill, { a_width: Math.max(28, v * w) }, t0, dur, ease);
  return { g, bars, set, width: 300 + w };
}
