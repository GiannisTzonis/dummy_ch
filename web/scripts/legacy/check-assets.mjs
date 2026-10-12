// Usage: node check-assets.mjs <web/build/client>
// Lists every local src/href in the prerendered pages that points at a file missing from the build,
// and every in-site page link that points at a route with no prerendered page.
import fs from "node:fs"; import path from "node:path";
const root = process.argv[2];
// GitHub Pages (and the dev server) match file names case-sensitively; Windows does not.
const dirCache = new Map();
const existsExactCase = (base, rel) => {
  let dir = base;
  for (const part of rel.split("/").filter(Boolean)) {
    if (!dirCache.has(dir)) dirCache.set(dir, fs.existsSync(dir) && fs.statSync(dir).isDirectory() ? new Set(fs.readdirSync(dir).map(n => n.normalize("NFC"))) : new Set());
    if (!dirCache.get(dir).has(part.normalize("NFC"))) return false;
    dir = path.join(dir, part);
  }
  return true;
};
const files = [];
(function walk(d) { for (const f of fs.readdirSync(d)) { const p = path.join(d, f); fs.statSync(p).isDirectory() ? walk(p) : p.endsWith(".html") && files.push(p); } })(root);
const missing = new Map(), deadRoutes = new Map();
const note = (map, key, page) => map.set(key, (map.get(key) || new Set()).add(path.relative(root, page).replace(/\\/g, "/")));
for (const f of files) {
  const h = fs.readFileSync(f, "utf8").replace(/<script\b[\s\S]*?<\/script>/gi, "");
  // src/href, and every candidate of a srcset (the image size variants)
  const urls = [...[...h.matchAll(/(?:src|href)="(\/[^"#?]*)/g)].map((m) => m[1]),
    ...[...h.matchAll(/srcset="([^"]*)"/gi)].flatMap((m) => m[1].split(",").map((c) => c.trim().split(/\s+/)[0]).filter((u) => u.startsWith("/")))];
  for (const raw of urls) {
    const u = raw.replace(/&amp;/g, "&");
    if (u === "/" || u.startsWith("/assets/")) continue;
    let p; try { p = decodeURIComponent(u); } catch { p = u; }
    if (/^\/(en|el)(\/|$)/.test(u)) { if (!fs.existsSync(path.join(root, p, "index.html"))) note(deadRoutes, u, f); continue; }
    if (!existsExactCase(root, p)) note(missing, u, f);
  }
}
const show = (title, map) => { console.log(`\n${title}: ${map.size}`); for (const [u, s] of map) console.log(`  ${u}  <- ${[...s].slice(0, 3).join(", ")}${s.size > 3 ? ` +${s.size - 3}` : ""}`); };
console.log("pages scanned:", files.length);
show("Missing files", missing);
show("Links to routes with no page", deadRoutes);
// a missing file or dead link fails the run (the deploy workflow publishes nothing then)
if (missing.size || deadRoutes.size) process.exitCode = 1;
