// Smaller copies of every WebP under web/public/img, for cards and thumbnails:
//
//   node scripts/images/variants.mjs        make the missing ones (and redo any older than their source)
//   node scripts/images/variants.mjs --all  redo all of them
//
// name.webp -> name.w400.webp and name.w800.webp (400 / 800px wide, quality 80). An image already
// that narrow is copied as is, so every variant path exists and app/lib/img.ts can name it without
// a list. The pages pick a size with srcset (the original stays for the photo viewer and wide
// screens). Run after scripts/images/optimize.mjs; `npm run images:variants` does this.
import fs from "node:fs"; import path from "node:path"; import { fileURLToPath } from "node:url";
import sharp from "sharp";
sharp.cache(false);

const here = path.dirname(fileURLToPath(import.meta.url));
const imgDir = path.resolve(here, "../../public/img");
const WIDTHS = [400, 800];
const VARIANT = /\.w\d+\.webp$/i;
const all = process.argv.includes("--all");
const walk = (d, out = []) => { for (const f of fs.readdirSync(d)) { const p = path.join(d, f); fs.statSync(p).isDirectory() ? walk(p, out) : out.push(p); } return out; };

const sources = walk(imgDir).filter((f) => /\.webp$/i.test(f) && !VARIANT.test(f));
const sourceSet = new Set(sources.map((f) => f.toLowerCase()));
let made = 0, copied = 0, kept = 0, removed = 0;
for (const src of sources) {
  const { width = 0 } = await sharp(src).metadata();
  const srcTime = fs.statSync(src).mtimeMs;
  for (const w of WIDTHS) {
    const out = src.replace(/\.webp$/i, `.w${w}.webp`);
    if (!all && fs.existsSync(out) && fs.statSync(out).mtimeMs >= srcTime) { kept++; continue; }
    if (width <= w) { fs.copyFileSync(src, out); copied++; continue; }
    await sharp(src).resize({ width: w }).webp({ quality: 80, effort: 5 }).toFile(out);
    made++;
  }
}
// variants whose source is gone
for (const f of walk(imgDir).filter((f) => VARIANT.test(f)))
  if (!sourceSet.has(f.replace(/\.w\d+\.webp$/i, ".webp").toLowerCase())) { fs.unlinkSync(f); removed++; }
console.log(`${sources.length} images: ${made} resized, ${copied} copied (already small), ${kept} up to date, ${removed} stale removed`);
