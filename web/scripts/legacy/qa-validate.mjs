// Checks a proofreading-fix module (scripts/legacy/qa/<name>.mjs) against the legacy pages:
// every entry is applied after the existing corrections (corrections.mjs), and must match
// exactly `count` times (default 1). Prints each entry's result; --show prints the changed text.
//
//   node scripts/legacy/qa-validate.mjs scripts/legacy/qa/<name>.mjs [more modules, applied in order] [--show]
import fs from "node:fs"; import path from "node:path"; import { fileURLToPath, pathToFileURL } from "node:url";
import { baseCorrections } from "./corrections.mjs";
import { correctionsFor, applyOne } from "./source.mjs";
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../../..");
const mods = process.argv.slice(2).filter(a => !a.startsWith("--")); const SHOW = process.argv.includes("--show");
const list = [];
for (const mod of mods) list.push(...(await import(pathToFileURL(path.resolve(mod)).href)).default);
const files = [...new Set(list.flatMap(c => { if (c.files === "*") throw new Error(`"*" not allowed: ${c.why}`); return c.files; }))];
const strip = s => s.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ");
let bad = 0;
for (const f of files) {
  const p = path.join(root, f);
  if (!fs.existsSync(p)) { console.log(`!! ${f}: no such legacy page`); bad++; continue; }
  let html = fs.readFileSync(p, "utf8");
  for (const c of correctionsFor(f, baseCorrections)) html = applyOne(html, c, f);
  for (const c of list.filter(c => c.files.includes(f))) {
    try {
      const out = applyOne(html, c, f);
      if (SHOW && out !== html) {
        let a = 0; while (a < html.length && html[a] === out[a]) a++;
        let b = 0; while (b < html.length - a && html[html.length - 1 - b] === out[out.length - 1 - b]) b++;
        console.log(`ok ${f} [${c.ids?.join(",") ?? ""}] ${c.why}\n   - ${strip(html.slice(Math.max(0, a - 60), html.length - b + 60)).slice(0, 600)}\n   + ${strip(out.slice(Math.max(0, a - 60), out.length - b + 60)).slice(0, 600)}`);
      }
      html = out;
    } catch (e) { console.log(`!! [${c.ids?.join(",") ?? ""}] ${e.message}`); bad++; }
  }
}
console.log(`${list.length} entries, ${files.length} pages, ${bad} problems`);
process.exit(bad ? 1 : 0);
