// Work packets for translating one batch into one language: the batch's English units not yet in
// that language's memory, each only once (text repeated across pages is translated once), split
// into packets of about SIZE units, in page order.
//
//   node scripts/i18n/pack.mjs <lang> <batch>   -> scripts/i18n/work/<lang>-b<batch>-<n>.in.json
//
// A packet is { lang, units: [{ fp, en, el?, where }] }. Its translation goes in the matching
// <...>.out.json as { "<fp>": <translation of en> } and is checked and taken into the memory by
// scripts/i18n/accept.mjs.
import { loadContent, unitsOf, LANGS, web } from "./content.mjs";
import fs from "node:fs"; import path from "node:path";

const SIZE = 60;
const [lang, batch] = process.argv.slice(2);
if (!LANGS.includes(lang) || !["1", "2", "3"].includes(batch)) {
  console.error("usage: node scripts/i18n/pack.mjs <fr|it|de|es> <1|2|3>");
  process.exit(1);
}
const content = await loadContent();
const memDir = path.join(web, "app/content/translations", lang);
const mem = {};
if (fs.existsSync(memDir)) for (const f of fs.readdirSync(memDir).filter((f) => f.endsWith(".json"))) Object.assign(mem, JSON.parse(fs.readFileSync(path.join(memDir, f), "utf8")));

const seen = new Map();
for (const p of content.pages.filter((p) => p.batch === +batch))
  for (const u of unitsOf(p, content)) {
    if (u.fp in mem) continue;
    if (seen.has(u.fp)) seen.get(u.fp).where += `, ${u.where}`;
    else seen.set(u.fp, { ...u });
  }
const units = [...seen.values()];
const work = path.join(web, "scripts/i18n/work");
fs.mkdirSync(work, { recursive: true });
let n = 0;
for (let i = 0; i < units.length; i += SIZE) {
  n++;
  const file = path.join(work, `${lang}-b${batch}-${String(n).padStart(2, "0")}.in.json`);
  fs.writeFileSync(file, JSON.stringify({ lang, units: units.slice(i, i + SIZE) }, null, 1));
}
const words = units.reduce((w, u) => w + JSON.stringify(u.en).split(/\s+/).length, 0);
console.log(`${lang} batch ${batch}: ${units.length} units to translate (~${words} words) in ${n} packets -> scripts/i18n/work/`);
