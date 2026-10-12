// Shows where text occurs in the legacy pages *after* the existing corrections, with the raw
// HTML around it -- use it to write exact `find` strings for a qa/<name>.mjs module.
//
//   node scripts/legacy/qa-show.mjs "<text or /regex/flags>" [page.html ...] [--ctx=300]
// Without pages: searches every legacy page at the repo root.
import fs from "node:fs"; import path from "node:path"; import { fileURLToPath } from "node:url";
import { baseCorrections } from "./corrections.mjs";
import { readLegacy } from "./source.mjs";
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../../..");
const args = process.argv.slice(2);
const ctx = +((args.find(a => a.startsWith("--ctx=")) || "--ctx=200").slice(6));
const [q, ...pages] = args.filter(a => !a.startsWith("--ctx="));
const m = q.match(/^\/(.*)\/([a-z]*)$/s);
const re = m ? new RegExp(m[1], m[2].includes("g") ? m[2] : m[2] + "g") : new RegExp(q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g");
const files = pages.length ? pages : fs.readdirSync(root).filter(f => f.endsWith(".html"));
for (const f of files) {
  const html = readLegacy(path.join(root, f), baseCorrections);
  const hits = [...html.matchAll(re)];
  if (!hits.length) continue;
  console.log(`=== ${f}: ${hits.length}`);
  for (const h of hits.slice(0, 20)) console.log(JSON.stringify(html.slice(Math.max(0, h.index - ctx), h.index + h[0].length + ctx)) + "\n");
}
