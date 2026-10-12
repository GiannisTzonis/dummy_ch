// Usage: node extract.mjs <legacy.html> [startText] [endText]
// Prints the legacy page's main content (header/footer removed) as RichText blocks, verbatim:
//   "paragraph"                 links become [text](href), <strong>/<b> become **text**, <br> becomes \n
//   { list: [...] }             <ul>/<ol>
//   { heading, level }          <h1>-<h6> (a link wrapping the heading becomes [text](href))
//   { img, href? }              image, with the link wrapping it if any
//   { anchor }                  an element id that some href="#id" on the page points to
// Blocks inside the theme sidebar (div.sidebar) carry side: true. The sidebar's recent-posts widget
// is emitted as { recent: [{ img, href, title, date }] }.
// startText/endText trim the output to the blocks between the first block containing startText
// and the first block containing endText (exclusive).
import { readLegacy } from "./source.mjs";
const [file, startText, endText] = process.argv.slice(2);
let html = readLegacy(file); // with the approved corrections applied
html = html.replace(/<head\b[\s\S]*?<\/head>/i, "").replace(/<!--[\s\S]*?-->/g, "")
  .replace(/<(script|style|noscript|svg)\b[\s\S]*?<\/\1>/gi, "")
  .replace(/<header\b[^>]*id="header"[\s\S]*?<\/header>/i, "").replace(/<footer\b[^>]*footer-area[\s\S]*?<\/footer>/i, "");
const referenced = new Set([...html.matchAll(/href="#([^"]+)"/g)].map(m => m[1]));

const ent = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " " };
const decode = s => s.replace(/&#x([0-9a-f]+);/gi, (_, x) => String.fromCodePoint(parseInt(x, 16)))
  .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(+d)).replace(/&([a-z]+);/gi, (m, n) => ent[n.toLowerCase()] ?? m);
const attr = (a, n) => { const m = a.match(new RegExp(`\\b${n}\\s*=\\s*"([^"]*)"`, "i")) || a.match(new RegExp(`\\b${n}\\s*=\\s*'([^']*)'`, "i")); return m ? decode(m[1]) : undefined; };

// --- tolerant tree builder ---
// spaces and parentheses would end a [text](url) link early
const enc = h => h.replace(/ /g, "%20").replace(/\(/g, "%28").replace(/\)/g, "%29");
const VOID = new Set(["img", "br", "hr", "input", "meta", "link", "source", "wbr"]);
const BLOCK = new Set(["p", "div", "ul", "ol", "li", "h1", "h2", "h3", "h4", "h5", "h6", "section", "article", "blockquote", "table", "tr", "td", "th", "figure", "figcaption", "dl", "dt", "dd", "hr", "aside", "nav", "main"]);
const root = { tag: "#root", attrs: "", children: [] }; const stack = [root];
for (const tok of html.split(/(<[a-zA-Z/!][^>]*>)/)) {
  if (!tok) continue;
  if (!tok.startsWith("<")) { stack[stack.length - 1].children.push(decode(tok)); continue; }
  const m = tok.match(/^<(\/?)([a-zA-Z0-9]+)\b([\s\S]*?)\/?>$/); if (!m) continue;
  const [, close, t, attrs] = m; const tag = t.toLowerCase();
  if (close) {
    const i = stack.map(n => n.tag).lastIndexOf(tag);
    if (i > 0) stack.length = i;
    continue;
  }
  const node = { tag, attrs, children: [] };
  // an open <p> is implicitly closed by a block-level element
  if (BLOCK.has(tag) && stack[stack.length - 1].tag === "p") stack.pop();
  stack[stack.length - 1].children.push(node);
  if (!VOID.has(tag)) stack.push(node);
}

// --- walk ---
const blocks = []; let buf = ""; let listItems = null;
const clean = s => s.replace(/[ \t\r\n]+/g, " ").replace(/ ?\u0001 ?/g, "\n").replace(/\*\*\s*\*\*/g, "").trim();
const hasText = s => /[\p{L}\p{N}]/u.test(s.replace(/\]\([^)]*\)/g, "]"));
function flush(ctx) {
  const t = clean(buf); buf = "";
  if (!t || !hasText(t)) return;
  if (listItems && ctx.inLi) listItems.push(t);
  // legacy CSS justifies every <p>; other text inherits text-center / text-right
  else push(ctx.align && !ctx.inP ? { p: t, align: ctx.align } : t, ctx);
}
function push(b, ctx) {
  if (ctx.side) b = typeof b === "string" ? { p: b, side: true } : { ...b, side: true };
  blocks.push(b);
}
const inlineText = (node) => { // text of a node with inline markup (used for headings and link labels)
  let s = "";
  for (const c of node.children) {
    if (typeof c === "string") s += c;
    else if (c.tag === "br") s += "\u0001";
    else if (c.tag === "strong" || c.tag === "b") s += "**" + inlineText(c) + "**";
    else if (c.tag === "a") { const href = attr(c.attrs, "href"); const inner = inlineText(c); s += href && hasText(inner) ? `[${clean(inner)}](${enc(href)})` : inner; }
    else if (c.tag !== "img") s += inlineText(c);
  }
  return s;
};
const imgsIn = n => n.tag === "img" ? [n] : n.children.filter(c => typeof c !== "string").flatMap(imgsIn);
const isBlocky = n => typeof n !== "string" && (BLOCK.has(n.tag) || n.children.some(isBlocky));
const textIn = n => typeof n === "string" ? n : n.children.map(textIn).join("");

function walk(node, ctx) {
  for (const c of node.children) {
    if (typeof c === "string") { buf += c; continue; }
    const id = attr(c.attrs, "id"), cls = attr(c.attrs, "class") || "";
    if (id && referenced.has(id)) { flush(ctx); push({ anchor: id }, ctx); }
    if (/\brecent-posts-widget\b/.test(cls)) {
      flush(ctx);
      const heading = (c.children.find(x => typeof x !== "string" && /^h[1-6]$/.test(x.tag)));
      if (heading) push({ heading: clean(inlineText(heading)), level: +heading.tag[1] }, { ...ctx, side: true });
      const items = [];
      (function find(n) { for (const x of n.children) if (typeof x !== "string") {
        if (/\bsingle-recent-post\b/.test(attr(x.attrs, "class") || "")) {
          const img = imgsIn(x)[0]; const a = (function fa(n) { for (const y of n.children) if (typeof y !== "string") { if (y.tag === "a" && attr(y.attrs, "href")) return y; const r = fa(y); if (r) return r; } })(x);
          const h = (function fh(n) { for (const y of n.children) if (typeof y !== "string") { if (/^h[1-6]$/.test(y.tag)) return y; const r = fh(y); if (r) return r; } })(x);
          const p = (function fp(n) { for (const y of n.children) if (typeof y !== "string") { if (y.tag === "p" || y.tag === "span") return y; const r = fp(y); if (r) return r; } })(x);
          items.push({ img: img && attr(img.attrs, "src"), href: a && attr(a.attrs, "href"), title: h && clean(inlineText(h)), date: p && clean(inlineText(p)) });
        } else find(x); } })(c);
      push({ recent: items }, { ...ctx, side: true });
      continue;
    }
    if (/(^|\s)progress-table(\s|$)/.test(cls)) { // "countries / visits / percentages" statistics table
      flush(ctx);
      const kids = n => n.children.filter(x => typeof x !== "string");
      const cell = n => clean(inlineText(n));
      const head = kids(c).find(x => /\btable-head\b/.test(attr(x.attrs, "class") || ""));
      const rows = kids(c).filter(x => /\btable-row\b/.test(attr(x.attrs, "class") || "")).map(r => {
        const [serial, country, visits, pct] = kids(r);
        const bar = (function fb(n) { for (const y of kids(n)) { if (/progress-bar/.test(attr(y.attrs, "class") || "")) return y; const z = fb(y); if (z) return z; } })(pct);
        const width = bar && ((attr(bar.attrs, "style") || "").match(/width:\s*([\d.]+)%/) || [])[1];
        const flag = imgsIn(country)[0];
        return { serial: cell(serial), flag: flag ? attr(flag.attrs, "src") : undefined, country: cell(country), visits: cell(visits), percent: width ? +width : 0 };
      });
      push({ stats: { head: head ? kids(head).map(cell) : [], rows } }, ctx);
      continue;
    }
    const side = ctx.side || /\bsidebar\b/.test(cls);
    // Layout hints for images: a narrow Bootstrap column (col-*-1..4) holds a portrait
    // beside text; gallery markup holds thumbnails.
    const colMatch = cls.match(/\bcol-(?:sm|md|lg|xl)-(\d+)\b/);
    const align = /\btext-center\b|(^|\s)(collaborator|centered-container|wibble-download)(\s|$)/.test(cls) ? "center"
      : /\btext-right\b/.test(cls) ? "right" : /\btext-left\b/.test(cls) ? undefined : ctx.align;
    const sub = {
      ...ctx, side, align, col: colMatch ? +colMatch[1] : ctx.col,
      gallery: ctx.gallery || /\b(single-gallery|grid-item)\b/.test(cls),
      // a portrait sits alone in its narrow column; a column with its own text (a card) is not a portrait
      colText: colMatch ? hasText(textIn(c)) : ctx.colText,
    };
    if (c.tag === "br") { buf += "\u0001"; continue; }
    if (c.tag === "img") {
      flush(ctx); const src = attr(c.attrs, "src");
      const layout = sub.gallery || /grid-item/.test(cls) ? "gallery" : sub.col && sub.col <= 4 && !side && !sub.colText ? "side" : undefined;
      if (src) push({ img: src, ...(ctx.href ? { href: ctx.href } : {}), ...(layout ? { layout } : {}) }, sub);
      continue;
    }
    if (/^h[1-6]$/.test(c.tag)) {
      flush(ctx); let t = clean(inlineText(c));
      if (ctx.href && hasText(t) && !t.startsWith("[")) t = `[${t}](${enc(ctx.href)})`;
      if (hasText(t)) push({ heading: t, level: +c.tag[1], ...(sub.align ? { align: sub.align } : {}) }, sub);
      for (const im of imgsIn(c)) push({ img: attr(im.attrs, "src") }, sub);
      continue;
    }
    if (c.tag === "a") {
      const href = attr(c.attrs, "href");
      if (isBlocky(c) || imgsIn(c).length) { walk(c, { ...sub, href }); continue; } // link around blocks/images
      const inner = inlineText(c);
      buf += href && hasText(inner) ? `[${clean(inner)}](${enc(href)})` : inner;
      continue;
    }
    if (c.tag === "strong" || c.tag === "b") {
      if (isBlocky(c)) { walk(c, sub); continue; }
      buf += "**" + inlineText(c) + "**";
      for (const im of imgsIn(c)) { flush(ctx); push({ img: attr(im.attrs, "src") }, sub); }
      continue;
    }
    if (c.tag === "ul" || c.tag === "ol") {
      flush(ctx); const outer = listItems; listItems = [];
      walk(c, sub); flush({ ...sub, inLi: true });
      const items = listItems; listItems = outer;
      if (items.length) push({ list: items, ...(sub.align ? { align: sub.align } : {}) }, sub);
      continue;
    }
    if (c.tag === "li") {
      flush({ ...sub, inLi: true });
      const before = listItems ? listItems.length : 0;
      walk(c, { ...sub, inLi: true }); flush({ ...sub, inLi: true });
      // Bootstrap's font-weight-bold on the <li> makes the whole item bold
      if (listItems && /\b(font-weight-bold|fw-bold)\b/.test(cls))
        for (let k = before; k < listItems.length; k++) if (!/^\*\*[\s\S]*\*\*$/.test(listItems[k])) listItems[k] = `**${listItems[k]}**`;
      continue;
    }
    // Tailwind grid ("grid sm:grid-cols-2 lg:grid-cols-3"): each child is a column, like Bootstrap col-lg-N
    const tw = (cls.match(/\blg:grid-cols-(\d+)\b/) || cls.match(/\bmd:grid-cols-(\d+)\b/) || cls.match(/\bsm:grid-cols-(\d+)\b/) || [])[1];
    if (BLOCK.has(c.tag) && /(^|\s)grid(\s|$)/.test(cls) && tw && +tw > 1 && 12 % +tw === 0 && !side && !ctx.narrow) {
      flush(ctx);
      for (const child of c.children) {
        if (typeof child === "string") { buf += child; continue; }
        flush(sub);
        blocks.push({ region: "narrow", cols: 12 / +tw });
        walk({ tag: "#cell", attrs: "", children: [child] }, { ...sub, narrow: true }); flush({ ...sub, narrow: true });
        blocks.push({ region: "narrow-end" });
      }
      flush(sub);
      continue;
    }
    if (BLOCK.has(c.tag)) {
      // a centred, narrower Bootstrap column (e.g. the choirs section in col-lg-8)
      const lg = cls.match(/\bcol-lg-(\d+)\b/);
      const narrow = lg && +lg[1] < 12 && !side && !ctx.narrow && !/\bpost-list\b/.test(cls) ? +lg[1] : 0;
      const inner = { ...sub, ...(c.tag === "p" ? { inP: true } : {}), ...(narrow ? { narrow: true } : {}) };
      flush(ctx);
      if (narrow) blocks.push({ region: "narrow", cols: narrow });
      walk(c, inner); flush(inner);
      if (narrow) blocks.push({ region: "narrow-end" });
      // end of the theme's main column (beside the sidebar): what follows is full width
      if (/\bcol-lg-8\b/.test(cls) && /\bpost-list\b/.test(cls)) blocks.push({ region: "main-end" });
      continue;
    }
    walk(c, sub); // other inline elements (span, em, i, font, ...)
  }
}
walk(root, { side: false });
flush({ side: false });

let out = blocks;
if (startText) { const i = out.findIndex(b => JSON.stringify(b).includes(startText)); out = i < 0 ? [] : out.slice(i); }
if (endText) { const i = out.findIndex(b => JSON.stringify(b).includes(endText)); if (i >= 0) out = out.slice(0, i); }
// sidebar paragraphs were wrapped as {p, side}; plain strings stay strings
console.log("[\n" + out.map(b => "  " + JSON.stringify(b)).join(",\n") + "\n]");
