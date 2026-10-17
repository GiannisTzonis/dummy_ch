// The lyre of the festival logo on its own, for the logo with the turning text (FestivalSeal):
// web/public/img/fest-logo-harp.webp, 800 x 800, transparent, the lyre exactly where it sits in
// fest-logo.webp (that logo's disc: centre 914, 867.5 and radius 782 px; the lyre lies within
// 390 px of the centre, the white text from 597 px out). Each pixel of the square is taken as a mix
// of the disc's navy and the lyre's teal, and becomes teal with that mix as its opacity, so the
// lyre's smoothed edges stay smooth on any background. Run once.
import sharp from "sharp";
import path from "node:path"; import { fileURLToPath } from "node:url";

const img = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../../public/img");
const NAVY = [51, 50, 137], TEAL = [2, 185, 173];
const SIZE = 800, left = 914 - SIZE / 2, top = 868 - SIZE / 2;

const { data } = await sharp(path.join(img, "fest-logo.webp"))
  .extract({ left, top, width: SIZE, height: SIZE })
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const d = TEAL.map((v, i) => v - NAVY[i]);
const dd = d.reduce((s, v) => s + v * v, 0);
const out = Buffer.alloc(SIZE * SIZE * 4);
for (let p = 0; p < SIZE * SIZE; p++) {
  const i = p * 4;
  const x = p % SIZE - SIZE / 2, y = Math.floor(p / SIZE) - SIZE / 2;
  // outside 400 px (the text ring) nothing is lyre
  const mix = Math.hypot(x, y) > 400 ? 0 : d.reduce((s, v, c) => s + v * (data[i + c] - NAVY[c]), 0) / dd;
  out.set([...TEAL, Math.round(Math.min(1, Math.max(0, mix)) * 255)], i);
}
await sharp(out, { raw: { width: SIZE, height: SIZE, channels: 4 } }).webp({ quality: 92, alphaQuality: 100 }).toFile(path.join(img, "fest-logo-harp.webp"));
console.log("fest-logo-harp.webp");
