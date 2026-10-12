// Image sizes. Every WebP under /img has 400px and 800px copies (name.w400.webp, name.w800.webp,
// made by scripts/images/variants.mjs), so a card or thumbnail downloads a small file and the
// original is kept for the photo viewer and wide screens.

const sizable = (src: string) => /^\/img\/.+\.webp$/i.test(src) && !/\.w\d+\.webp$/i.test(src);

// one fixed size: for images always shown small (logos, round flags, poster thumbnails)
export function sized(src: string, width: 400 | 800): string {
  return sizable(src) ? src.replace(/\.webp$/i, `.w${width}.webp`) : src;
}

// src + srcset + sizes for an <img>: the browser takes the smallest copy that fills the slot at
// the screen's pixel density. `sizes` is how wide the image is laid out, e.g. "(min-width: 768px)
// 50vw, 100vw".
export function responsive(src: string, sizes: string): { src: string; srcSet?: string; sizes?: string } {
  if (!sizable(src)) return { src };
  // in a srcset a space ends the address and a comma can end a candidate, and file names have both
  // ("Vytautas Miškinis.webp", "MATTHIAS SCHOBERWALTER, Austria.webp"):
  // each candidate is percent-encoded (an address already encoded is left as it is)
  const enc = (u: string) => (/%[0-9a-f]{2}/i.test(u) ? u : encodeURI(u)).replace(/,/g, "%2C"); // commas separate candidates
  return { src: sized(src, 800), srcSet: `${enc(sized(src, 400))} 400w, ${enc(sized(src, 800))} 800w, ${enc(src)} 1600w`, sizes };
}
