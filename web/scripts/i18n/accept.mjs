// Takes checked translations into a language's memory.
//
//   node scripts/i18n/accept.mjs <lang> <batch> [--dry]
//
// Reads every scripts/i18n/work/<lang>-b<batch>-*.out.json with its .in.json, checks each unit
// (check.mjs), and adds the passing ones to app/content/translations/<lang>/b<batch>.json. A unit
// that fails stays out (its English shows) and is listed with the reasons; its fix goes back into
// the .out.json and this is run again. --dry checks without writing.
import fs from "node:fs"; import path from "node:path";
import { web, LANGS } from "./content.mjs";
import { checkUnit } from "./check.mjs";
import { createServer } from "vite";

const [lang, batch, flag] = process.argv.slice(2);
if (!LANGS.includes(lang) || !["1", "2", "3"].includes(batch)) {
  console.error("usage: node scripts/i18n/accept.mjs <fr|it|de|es> <1|2|3> [--dry]");
  process.exit(1);
}

// person and choir names (registries), which must appear as written
const vite = await createServer({ root: web, logLevel: "error", server: { middlewareMode: true, hmr: false, watch: null }, appType: "custom" });
const names = [];
try {
  for (const [file, key] of [["/app/content/people.ts", "people"], ["/app/content/choirs.ts", "choirs"]])
    for (const e of Object.values((await vite.ssrLoadModule(file))[key])) names.push(e.name);
} finally {
  await vite.close();
}

const work = path.join(web, "scripts/i18n/work");
const outs = fs.existsSync(work) ? fs.readdirSync(work).filter((f) => f.startsWith(`${lang}-b${batch}-`) && f.endsWith(".out.json")).sort() : [];
const memFile = path.join(web, "app/content/translations", lang, `b${batch}.json`);
const memory = fs.existsSync(memFile) ? JSON.parse(fs.readFileSync(memFile, "utf8")) : {};
let accepted = 0, failed = 0, warned = 0, missing = 0;
const report = [];
for (const f of outs) {
  const input = JSON.parse(fs.readFileSync(path.join(work, f.replace(".out.json", ".in.json")), "utf8"));
  let output;
  try {
    output = JSON.parse(fs.readFileSync(path.join(work, f), "utf8"));
  } catch (e) {
    report.push(`${f}: not valid JSON (${e.message})`);
    failed += input.units.length;
    continue;
  }
  for (const u of input.units) {
    if (!(u.fp in output)) { missing++; report.push(`${f} ${u.fp} missing  (${u.where.split(",")[0]})`); continue; }
    const { errors, warnings } = checkUnit(u.en, output[u.fp], names);
    if (errors.length) { failed++; report.push(`${f} ${u.fp} FAIL ${errors.join("; ")}  (${u.where.split(",")[0]})`); continue; }
    if (warnings.length) { warned++; report.push(`${f} ${u.fp} warn ${warnings.join("; ")}`); }
    memory[u.fp] = output[u.fp];
    accepted++;
  }
}
if (flag !== "--dry" && accepted) {
  fs.mkdirSync(path.dirname(memFile), { recursive: true });
  const sorted = Object.fromEntries(Object.keys(memory).sort().map((k) => [k, memory[k]]));
  fs.writeFileSync(memFile, JSON.stringify(sorted, null, 1) + "\n");
}
console.log(report.join("\n"));
console.log(`\n${lang} batch ${batch}: ${accepted} accepted${flag === "--dry" ? " (dry run)" : ` -> ${path.relative(web, memFile)}`}, ${failed} failed, ${missing} missing, ${warned} with warnings (${outs.length} packets)`);
