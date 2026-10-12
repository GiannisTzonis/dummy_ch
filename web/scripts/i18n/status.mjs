// Translation status: per language and page, how much of the English has a current translation.
//
//   node scripts/i18n/status.mjs            all languages, summary per batch and page
//   node scripts/i18n/status.mjs fr 1       one language, one batch, with the missing units
import { loadContent, unitsOf, LANGS, web } from "./content.mjs";
import fs from "node:fs"; import path from "node:path";

const [onlyLang, onlyBatch] = process.argv.slice(2);
const content = await loadContent();
const memory = (lang) => {
  const dir = path.join(web, "app/content/translations", lang);
  const m = {};
  if (fs.existsSync(dir)) for (const f of fs.readdirSync(dir).filter((f) => f.endsWith(".json"))) Object.assign(m, JSON.parse(fs.readFileSync(path.join(dir, f), "utf8")));
  return m;
};

for (const lang of onlyLang ? [onlyLang] : LANGS) {
  const mem = memory(lang);
  console.log(`\n== ${lang}: ${Object.keys(mem).length} translations in memory`);
  for (const batch of [1, 2, 3]) {
    if (onlyBatch && +onlyBatch !== batch) continue;
    const pages = content.pages.filter((p) => p.batch === batch);
    let done = 0, total = 0;
    const rows = [];
    for (const p of pages) {
      const units = unitsOf(p, content);
      const missing = units.filter((u) => !(u.fp in mem));
      done += units.length - missing.length; total += units.length;
      rows.push(`  ${missing.length ? "  " : "ok"} ${p.id.padEnd(40)} ${units.length - missing.length}/${units.length}`);
      if (onlyLang && onlyBatch) for (const u of missing.slice(0, 5)) rows.push(`       missing ${u.fp} ${u.where} ${JSON.stringify(u.en).slice(0, 70)}`);
    }
    console.log(`batch ${batch}: ${done}/${total} units`);
    console.log(rows.join("\n"));
  }
}
