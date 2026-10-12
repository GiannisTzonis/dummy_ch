// Converts every JPEG/PNG under web/public/img to WebP and points the site at the new files.
//
//   node scripts/images/optimize.mjs            convert, then rewrite references
//   node scripts/images/optimize.mjs --refs     only rewrite references (run after legacy:import,
//                                               which writes the legacy .jpg/.png paths again)
//
// Photos: long edge capped at 2400px (above any screen the lightbox fills), quality 82.
// PNGs (logos, flags, posters with text): quality 90 with full-quality alpha; small ones are also
// tried lossless and the smaller file wins. EXIF orientation is applied before metadata is dropped.
// Files whose names differ only by extension or case (anelia.jpg / anelia.png) get the old
// extension in the new name (anelia-jpg.webp / anelia-png.webp) so neither overwrites the other.
// The old -> new paths are kept in webp-map.json (used by --refs and by legacy:check). The legacy
// originals stay in the repo-root img/ folder, so the converted files can always be rebuilt.
// Also removes macOS .DS_Store files, unfinished downloads (*.crdownload) and anything in
// public/img that no page references.
import fs from "node:fs"; import path from "node:path"; import { fileURLToPath } from "node:url";
import sharp from "sharp";
sharp.cache(false);

const here = path.dirname(fileURLToPath(import.meta.url));
const web = path.resolve(here, "../..");
const imgDir = path.join(web, "public/img");
const mapFile = path.join(here, "webp-map.json");
const RASTER = /\.(jpe?g|png)$/i;
const rel = p => path.relative(path.join(web, "public"), p).replace(/\\/g, "/");
const walk = (d, out = []) => { for (const f of fs.readdirSync(d)) { const p = path.join(d, f); fs.statSync(p).isDirectory() ? walk(p, out) : out.push(p); } return out; };

// Files that can reference images: content data, components, the redirect pages, vendor CSS.
const refFiles = () => [...walk(path.join(web, "app")).filter(f => /\.(tsx?|css)$/.test(f)),
  ...fs.readdirSync(path.join(web, "public")).filter(f => f.endsWith(".html")).map(f => path.join(web, "public", f)),
  ...walk(path.join(web, "public/vendor")).filter(f => f.endsWith(".css"))];

function rewriteRefs(map) {
  // longest first, so "img/a.png" never rewrites part of "img/aa.png" (each key is matched whole
  // anyway: it must be followed by a quote, bracket, whitespace or the end of a URL)
  const keys = Object.keys(map).sort((a, b) => b.length - a.length);
  const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  let changed = 0;
  for (const f of refFiles()) {
    const src = fs.readFileSync(f, "utf8");
    let out = src;
    for (const k of keys) for (const form of new Set([k, encodeURI(k)])) {
      const to = form === k ? map[k] : encodeURI(map[k]);
      out = out.replace(new RegExp(`(?<=[/"'(\\s]|^)${esc(form)}(?=["')\\s?#\\]]|$)`, "g"), to);
    }
    if (out !== src) { fs.writeFileSync(f, out); changed++; }
  }
  console.log(`references rewritten in ${changed} files`);
}

if (process.argv.includes("--refs")) { rewriteRefs(JSON.parse(fs.readFileSync(mapFile, "utf8"))); process.exit(0); }

// 1. junk
for (const f of walk(imgDir)) if (/(^|[\\/])\.DS_Store$|\.crdownload$/.test(f)) fs.rmSync(f);

// 2. unreferenced files (originals remain in the repo-root img/ folder)
// references as written and percent-decoded (links encode "(", Greek letters etc. in various ways)
const refText = refFiles().map(f => fs.readFileSync(f, "utf8")).join("\n");
const decoded = refText.replace(/(%[0-9a-f]{2})+/gi, m => { try { return decodeURIComponent(m); } catch { return m; } }).normalize("NFC");
// a size variant (name.w800.webp, scripts/images/variants.mjs) lives as long as its source
const referenced = p => { const r = rel(p).normalize("NFC").replace(/\.w\d+\.webp$/i, ".webp"); return refText.includes(r) || decoded.includes(r); };
let removed = 0;
for (const f of walk(imgDir)) if (!referenced(f)) { fs.rmSync(f); removed++; }
(function prune(d) { for (const f of fs.readdirSync(d)) { const p = path.join(d, f); if (fs.statSync(p).isDirectory()) { prune(p); if (!fs.readdirSync(p).length) fs.rmdirSync(p); } } })(imgDir);
console.log(`removed ${removed} unreferenced files`);

// 3. convert
const all = walk(imgDir);
const stemKey = p => p.replace(/\.[^.\\/]+$/, "").toLowerCase();
const stems = new Map();
for (const f of all) stems.set(stemKey(f), (stems.get(stemKey(f)) || 0) + 1);
const map = fs.existsSync(mapFile) ? JSON.parse(fs.readFileSync(mapFile, "utf8")) : {};
let before = 0, after = 0, n = 0;
for (const f of all.filter(f => RASTER.test(f))) {
  const ext = path.extname(f);
  const out = stems.get(stemKey(f)) > 1 ? f.slice(0, -ext.length) + "-" + ext.slice(1).toLowerCase() + ".webp" : f.slice(0, -ext.length) + ".webp";
  const png = /png$/i.test(ext);
  const size = fs.statSync(f).size;
  const input = fs.readFileSync(f); // not sharp(f): on Windows sharp keeps the file open
  const img = () => sharp(input, { failOn: "none" }).rotate().resize({ width: 2400, height: 2400, fit: "inside", withoutEnlargement: true });
  let buf = await img().webp(png ? { quality: 90, alphaQuality: 100, effort: 6 } : { quality: 82, effort: 6, smartSubsample: true }).toBuffer();
  if (png && size < 300_000) {
    const lossless = await img().webp({ lossless: true, effort: 6 }).toBuffer();
    if (lossless.length < buf.length) buf = lossless;
  }
  fs.writeFileSync(out, buf);
  map[rel(f)] = rel(out);
  fs.writeFileSync(mapFile, JSON.stringify(map, null, 1) + "\n"); // saved per file, so a failed run can resume
  fs.rmSync(f);
  before += size; after += buf.length; n++;
}
console.log(`converted ${n} images: ${(before / 1e6).toFixed(1)} MB -> ${(after / 1e6).toFixed(1)} MB`);

// 3b. WebP files that were already on the site and larger than the cap: same cap and quality
before = after = n = 0;
for (const f of walk(imgDir).filter(f => f.endsWith(".webp") && !Object.values(map).includes(rel(f)))) {
  const input = fs.readFileSync(f);
  const { width = 0, height = 0 } = await sharp(input).metadata();
  if (Math.max(width, height) <= 2400) continue; // so re-runs never re-encode a file twice
  const buf = await sharp(input).resize({ width: 2400, height: 2400, fit: "inside", withoutEnlargement: true }).webp({ quality: 82, effort: 6, smartSubsample: true }).toBuffer();
  if (buf.length >= input.length) continue;
  fs.writeFileSync(f, buf);
  before += input.length; after += buf.length; n++;
}
console.log(`recompressed ${n} existing WebP images: ${(before / 1e6).toFixed(1)} MB -> ${(after / 1e6).toFixed(1)} MB`);

// 4. references
rewriteRefs(map);
