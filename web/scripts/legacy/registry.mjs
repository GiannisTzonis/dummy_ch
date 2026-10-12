// Moves people (jury members, mentors) and choirs that appear on more than one festival,
// masterclass or competition page into shared registries, keeping ONE version of each:
//   web/app/content/people.ts, web/app/content/choirs.ts      (generated)
// and rewrites those pages' content to refer to it (`...person("ambroz-copi", "en", { level: 3 })`).
//
//   node scripts/legacy/registry.mjs [--dry]     (run by import-all.mjs after the edition pages)
//
// Which version is kept: the one on the most recent page (newest information), unless
// registry-choices.json names another page for that id. An entry is a name heading with its
// photo and text; its English and Greek versions are paired by their photo.
// It also writes registry-substitutions.json: per route, the legacy text replaced by the kept
// version, so legacy:check can prove everything else is unchanged.
import fs from "node:fs"; import path from "node:path"; import { fileURLToPath } from "node:url";
const here = path.dirname(fileURLToPath(import.meta.url));
const web = path.resolve(here, "../..");
const DRY = process.argv.includes("--dry");
const cacheDir = path.join(here, ".cache");
const choices = fs.existsSync(path.join(here, "registry-choices.json")) ? JSON.parse(fs.readFileSync(path.join(here, "registry-choices.json"), "utf8")) : {};

const pages = fs.readdirSync(cacheDir).filter(f => f.endsWith(".json")).map(f => JSON.parse(fs.readFileSync(path.join(cacheDir, f), "utf8")));
const yearOf = page => +(page.match(/(\d{4})/) || [0, 0])[1];
const kindRank = page => page.startsWith("festivals") ? 2 : page.startsWith("masterclasses") ? 1 : 0;

const isHeading = b => b && typeof b === "object" && "heading" in b;
const isImg = b => b && typeof b === "object" && "img" in b;
const textOf = b => typeof b === "string" ? b : b?.p ?? (b?.list ? b.list.join("\n") : isHeading(b) ? b.heading : "");
const plain = s => s.replace(/\[([^\]]*)\]\([^)]*\)/g, "$1").replace(/\*\*/g, "").replace(/\s+/g, " ").trim();
const isLabel = b => typeof b === "string" && b.length < 40 && b === b.toUpperCase() && /\p{L}/u.test(b);
const SECTION = /jury|i\.j\.c|committee|participat|schedule|programme|mentors|demonstrat|medals|categor|repertoire|competition|festival|awards|prizes|κριτ|επιτροπ|συμμετ|πρόγραμμ|μέντορ|μετάλλ|κατηγορ|ρεπερτ|διαγωνισμ|φεστιβάλ|βραβε/i;
const CHOIR = /choir|chor|chorus|kórus|ensemble|singers|cantores|vox|voci|ambitus|χορωδ|σύνολο/i;
// spelling variants of the same name (legacy pages)
const ALIASES = { "marco a garcia de paz": "marco antonio garcia de paz", "klaus jurgen etzold": "klaus jurgen etzold", "dr justic smith": "justin smith" };
const keyOf = name => {
  let k = plain(name).replace(/[łŁ]/g, "l").replace(/[øØ]/g, "o").replace(/[đĐ]/g, "d").replace(/ß/g, "ss").replace(/ϋ/g, "ü").normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/ϋ/g, "u").toLowerCase()
    .replace(/^(dr|prof)\.?\s+/, "").replace(/[“”"«»'’]/g, "").replace(/[^a-z0-9]+/g, " ").trim();
  return ALIASES[k] ?? k;
};
// whole words, up to 48 characters
const slugOf = k => {
  let out = "";
  for (const w of k.split(" ")) { if (out && (out + "-" + w).length > 48) break; out = out ? out + "-" + w : w; }
  return out;
};
const imgKey = s => (s || "").split("/").pop().replace(/\.[^.]+$/, "").toLowerCase();

// entries of one language: heading + its blocks up to the next heading, label, marker, gallery
// photo or a second photo
function entries(blocks) {
  const out = [];
  blocks.forEach((b, i) => {
    if (!isHeading(b) || (b.level ?? 3) < 2) return;
    const name = plain(b.heading);
    if (name.length > 140 || SECTION.test(name) && !CHOIR.test(name)) return;
    let j = i + 1, photo = null, text = 0;
    for (; j < blocks.length; j++) {
      const x = blocks[j];
      if (x && typeof x === "object" && "anchor" in x) continue; // a jump-link target: stays on the page
      if (isHeading(x) || isLabel(x) || (x && typeof x === "object" && ("wide" in x || "narrow" in x || "stats" in x))) break;
      if (isImg(x)) { if (photo || x.layout === "gallery") break; photo = x; continue; }
      text += textOf(x).length;
    }
    const own = blocks.slice(i, j), isAnchor = x => x && typeof x === "object" && "anchor" in x;
    if (photo && text >= 150) out.push({ start: i, end: j, name, heading: b, photo: imgKey(photo.img), blocks: own.filter(x => !isAnchor(x)), anchors: own.filter(isAnchor) });
  });
  return out;
}

// pair EN/EL entries of each page by photo
const occ = []; // { page, en, el }
for (const p of pages) {
  const el = entries(p.el);
  for (const e of entries(p.en)) {
    // by photo; if the two pages use different photo files, by name (non-Greek names are in Latin
    // script on the Greek pages too)
    let g = el.filter(x => x.photo === e.photo);
    if (g.length !== 1) g = el.filter(x => keyOf(x.name) === keyOf(e.name));
    if (g.length === 1) occ.push({ page: p.page, file: p.file, en: e, el: g[0] });
  }
}
const groups = new Map();
for (const o of occ) groups.set(keyOf(o.en.name), [...(groups.get(keyOf(o.en.name)) ?? []), o]);
const registered = [...groups].filter(([, g]) => new Set(g.map(o => o.page)).size >= 2);

// Latin accented letters (é, ž, ł...) count for completeness; a Greek letter inside a Latin name
// (the legacy "Jϋrgen") counts against it
const latin = s => (s.match(/[À-ɏ]/g) || []).length;
const greekInLatin = s => /[A-Za-z]/.test(s) ? (s.match(/[Ͱ-Ͽ]/g) || []).length : 0;
const reg = { people: {}, choirs: {} };
const kept = new Map(); // occurrence -> id
for (const [k, g] of registered) {
  const id = slugOf(k);
  const kind = CHOIR.test(g[0].en.name) ? "choirs" : "people";
  // "fullest": the longest text (both languages), the most recent of equally long ones
  const size = o => ["en", "el"].reduce((n, l) => n + o[l].blocks.reduce((m, b) => m + textOf(b).length, 0), 0);
  const recent = (a, b) => yearOf(b.page) - yearOf(a.page) || kindRank(b.page) - kindRank(a.page);
  const pick = choices[id] === "fullest" ? [...g].sort((a, b) => size(b) - size(a) || recent(a, b))[0]
    : choices[id] ? g.find(o => o.page === choices[id]) : null;
  const best = pick ?? [...g].sort(recent)[0];
  // the name: the most complete spelling any page uses (accents kept, full first name), e.g.
  // "Marco Antonio García de Paz" rather than "Marco A. García de Paz" or "Marco Antonio Garcia"
  const fullest = lang => g.map(o => o[lang].heading.heading).filter(h => !/\]\(/.test(h))
    .sort((a, b) => latin(b) - latin(a) || greekInLatin(a) - greekInLatin(b) || b.length - a.length)[0];
  const named = lang => { const [h, ...rest] = best[lang].blocks; const n = fullest(lang); return n ? [{ ...h, heading: n }, ...rest] : best[lang].blocks; };
  reg[kind][id] = { name: plain(fullest("en") ?? best.en.heading.heading), source: best.page, en: named("en"), el: named("el") };
  for (const o of g) kept.set(o, { id, kind });
}

if (DRY) {
  for (const kind of ["people", "choirs"]) {
    console.log(`\n${kind}: ${Object.keys(reg[kind]).length}`);
    for (const [id, r] of Object.entries(reg[kind])) console.log(`  ${id.padEnd(44)} <- ${r.source.padEnd(28)} used on ${registered.find(([k]) => slugOf(k) === id)[1].map(o => o.page).join(", ")}`);
  }
  const single = [...groups].filter(([, g]) => new Set(g.map(o => o.page)).size < 2).length;
  console.log(`\noccurrences paired ${occ.length}, kept once (not repeated) ${single}`);
  process.exit(0);
}

// --- write the registries ------------------------------------------------------------------
const J = (v, ind) => JSON.stringify(v, null, 2).split("\n").join("\n" + ind);
const writeRegistry = (kind, fn, what) => {
  const body = Object.entries(reg[kind]).map(([id, r]) => `  ${JSON.stringify(id)}: {
    name: ${JSON.stringify(r.name)},
    source: ${JSON.stringify(r.source)}, // the page whose version is kept
    en: ${J(r.en, "    ")},
    el: ${J(r.el, "    ")},
  },
`).join("");
  fs.writeFileSync(path.join(web, `app/content/${kind}.ts`), `import type { RichBlock } from "./types";

// GENERATED by \`npm run legacy:import\` (scripts/legacy/registry.mjs) -- do not edit by hand.
// ${what} that appear on more than one festival/masterclass/competition page, kept ONCE: the
// version of the most recent page, or the page named in scripts/legacy/registry-choices.json.
// Pages refer to an entry with \`...${fn}(id, lang, { level, align })\`: the name heading (at that
// page's level and alignment), the photo and the text.
type Entry = { name: string; source: string; en: RichBlock[]; el: RichBlock[] };

export const ${kind}: Record<string, Entry> = {
${body}};

export function ${fn}(id: string, lang: "en" | "el", at: { level: number; align?: "center" | "right"; heading?: string }): RichBlock[] {
  const [first, ...rest] = ${kind}[id][lang];
  const name = at.heading ?? (first as { heading: string }).heading; // a page's own linked name
  return [{ heading: name, level: at.level, ...(at.align ? { align: at.align } : {}) } as RichBlock, ...rest];
}
`);
};
writeRegistry("people", "person", "Jury members and mentors");
writeRegistry("choirs", "choir", "Choirs");

// --- rewrite the pages' content, and record what was substituted ------------------------------
const subs = {};
const routeOf = page => {
  const [dir, slug] = page.split("/");
  return { festivals: `festival/${slug}`, masterclasses: `masterclass/${slug}`, competitions: `competition/${slug}` }[dir];
};
let replaced = 0;
for (const p of pages) {
  const mine = occ.filter(o => o.page === p.page && kept.has(o));
  if (!mine.length) continue;
  const out = {};
  for (const lang of ["en", "el"]) {
    const refs = [];
    const blocks = [...p[lang]];
    // from the end, so earlier indices stay valid
    for (const o of [...mine].sort((a, b) => b[lang].start - a[lang].start)) {
      const e = o[lang], { id, kind } = kept.get(o);
      // a name that links somewhere (the choir's website) is this page's own: it keeps it
      const at = { level: e.heading.level ?? 3, ...(e.heading.align ? { align: e.heading.align } : {}), ...(/\]\(/.test(e.heading.heading) ? { heading: e.heading.heading } : {}) };
      refs.push(`...${kind === "people" ? "person" : "choir"}(${JSON.stringify(id)}, "${lang}", ${JSON.stringify(at).replace(/"(\w+)":/g, "$1: ")})`);
      blocks.splice(e.start, e.end - e.start, { $ref: refs.length - 1 }, ...e.anchors);
      const s = (subs[`${lang}/${routeOf(p.page)}`] ??= { removed: [], added: [], removedImages: [] });
      s.removed.push(...e.blocks.map(textOf).filter(Boolean));
      s.added.push(...reg[kind][id][lang].map(textOf).filter(Boolean));
      s.removedImages.push(...e.blocks.filter(isImg).map(b => b.img));
      replaced++;
    }
    out[lang] = J(blocks, "    ").replace(/\{\s*"\$ref": (\d+)\s*\}/g, (_, n) => refs[+n]);
  }
  const file = path.join(path.resolve(web, ".."), p.file);
  let src = fs.readFileSync(file, "utf8");
  const a = src.indexOf("\n  content: {\n    en: "), b = src.indexOf("\n  },\n", a);
  src = src.slice(0, a) + `\n  content: {\n    en: ${out.en},\n    el: ${out.el},` + src.slice(b);
  const uses = ["person", "choir"].filter(fn => src.includes(`...${fn}(`));
  src = src.replace(/^(import [^\n]*\n)/, `$1${uses.map(fn => `import { ${fn} } from "../${fn === "person" ? "people" : "choirs"}";\n`).join("")}`);
  fs.writeFileSync(file, src);
}
fs.writeFileSync(path.join(here, "registry-substitutions.json"), JSON.stringify(subs, null, 1) + "\n");
console.log(`registry: ${Object.keys(reg.people).length} people, ${Object.keys(reg.choirs).length} choirs; ${replaced} copies replaced by references`);
