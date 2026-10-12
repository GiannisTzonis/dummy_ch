// Round flags for the language selector, in the style of the existing greece.webp and
// united-kingdom.webp (flat colours in a circle, a soft shaded crescent on the right):
// web/public/img/{france,italy,germany,spain}.webp, 512 x 512. Run once; then
// `npm run images:variants` for the smaller copies.
import sharp from "sharp";
import path from "node:path"; import { fileURLToPath } from "node:url";

const out = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../../public/img");
const WHITE = "#EEEEEE";
const vertical = (a, b, c) => `<rect width="171" height="512" fill="${a}"/><rect x="171" width="170" height="512" fill="${b}"/><rect x="341" width="171" height="512" fill="${c}"/>`;
const flags = {
  france: vertical("#2E52A4", WHITE, "#E5383B"),
  italy: vertical("#1F9152", WHITE, "#D7313C"),
  germany: `<rect width="512" height="171" fill="#2B2B2B"/><rect y="171" width="512" height="170" fill="#D9262B"/><rect y="341" width="512" height="171" fill="#F7C61C"/>`,
  // red, yellow (twice as wide), red
  spain: `<rect width="512" height="128" fill="#C8202F"/><rect y="128" width="512" height="256" fill="#F7C61C"/><rect y="384" width="512" height="128" fill="#C8202F"/>`,
};
const svg = (body) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
<defs><clipPath id="c"><circle cx="256" cy="256" r="256"/></clipPath></defs>
<g clip-path="url(#c)">${body}<path d="M256 0A256 256 0 0 1 256 512A104 256 0 0 0 256 0Z" fill="#000" opacity="0.07"/></g>
</svg>`;
for (const [name, body] of Object.entries(flags)) {
  await sharp(Buffer.from(svg(body))).resize(512, 512).webp({ quality: 90, alphaQuality: 100 }).toFile(path.join(out, `${name}.webp`));
  console.log(`${name}.webp`);
}
