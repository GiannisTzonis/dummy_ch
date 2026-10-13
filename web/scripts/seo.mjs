// Search-engine and sharing setup of the built site (web/build/client), run by `npm run build`
// after prerendering:
//   - every page gets a canonical link, hreflang links to its versions in the other languages
//     (x-default: English), a description where it has none (its own opening text; the legacy pages
//     had empty ones), and Open Graph / Twitter tags (title, description, address, picture)
//   - a page in French, Italian, German or Spanish not translated yet (it shows the English; its
//     loader adds the "armonia-fallback" marker) points search engines at the English page and is
//     left out of the sitemap and of the other pages' hreflang links
//   - sitemap.xml (every page with its versions) and robots.txt
//   - index.html (the root): a bare redirect to /en/
//   - 404.html, which GitHub Pages serves for any unknown address: the app starts there and shows
//     its "page not found" page in the address's language (root.tsx)
// Page addresses end in "/", as GitHub Pages serves them (the legacy redirect pages point there too).
//
//   node scripts/seo.mjs [build/client]
import fs from "node:fs"; import path from "node:path"; import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const web = path.resolve(here, "..");
const out = path.resolve(web, process.argv[2] ?? "build/client");
const SITE = "https://" + fs.readFileSync(path.join(web, "public/CNAME"), "utf8").trim();
const LOCALES = ["en", "el", "fr", "it", "de", "es"];
const FALLBACK = {
  en: "Official website of Armonia Choir and the International Choral Festival of Preveza, Greece: festivals, choral competitions, masterclasses for conductors and news.",
  el: "Επίσημος ιστότοπος της Χορωδίας Αρμονία και του Διεθνούς Χορωδιακού Φεστιβάλ Πρέβεζας: φεστιβάλ, χορωδιακοί διαγωνισμοί, σεμινάρια διεύθυνσης χορωδίας και νέα.",
  fr: "Site officiel du Chœur Armonia et du Festival choral international de Preveza, Grèce : festivals, concours de chant choral, masterclasses de direction et actualités.",
  it: "Sito ufficiale del Coro Armonia e del Festival corale internazionale di Preveza, Grecia: festival, concorsi corali, masterclass di direzione e notizie.",
  de: "Offizielle Website des Chors Armonia und des Internationalen Chorfestivals Preveza, Griechenland: Festivals, Chorwettbewerbe, Dirigier-Meisterkurse und Neuigkeiten.",
  es: "Sitio oficial del Coro Armonia y del Festival Coral Internacional de Preveza, Grecia: festivales, concursos corales, clases magistrales de dirección y noticias.",
};
const OG_LOCALE = { en: "en_US", el: "el_GR", fr: "fr_FR", it: "it_IT", de: "de_DE", es: "es_ES" };
const SITE_NAME = { en: "Armonia Choir", el: "Χορωδία Αρμονία", fr: "Chœur Armonia", it: "Coro Armonia", de: "Chor Armonia", es: "Coro Armonia" };
const MARK = /\n?<!--seo-->[\s\S]*?<!--\/seo-->/;

const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const decode = (s) => s.replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&");
const text = (h) => decode(h.replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();
const abs = (u) => SITE + encodeURI(decodeURI(u)).replace(/,/g, "%2C");
// a description: whole words up to ~155 characters
function clip(s, max = 155) {
  if (s.length <= max) return s;
  const cut = s.slice(0, max + 1).replace(/\s+\S*$/, "");
  return cut.replace(/[\s,;:–-]+$/, "") + "…";
}

const walk = (d, acc = []) => {
  for (const f of fs.readdirSync(d)) {
    const p = path.join(d, f);
    if (fs.statSync(p).isDirectory()) walk(p, acc);
    else if (f === "index.html") acc.push(p);
  }
  return acc;
};
const pages = LOCALES.flatMap((l) => (fs.existsSync(path.join(out, l)) ? walk(path.join(out, l)) : []));
const routeOf = (file) => "/" + path.relative(out, path.dirname(file)).split(path.sep).join("/") + "/";
const langOf = (route) => route.split("/")[1];
const swap = (route, l) => route.replace(/^\/[a-z]{2}\//, `/${l}/`);

const htmlOf = new Map(pages.map((f) => [routeOf(f), fs.readFileSync(f, "utf8").replace(MARK, "")]));
const fallbackRoutes = new Set([...htmlOf].filter(([, h]) => /<meta name="armonia-fallback"/.test(h)).map(([r]) => r));
// the page's versions in each language that has it translated: { en: "/en/...", fr: "/fr/...", ... }
const versions = (route) => Object.fromEntries(LOCALES.map((l) => [l, swap(route, l)]).filter(([, r]) => htmlOf.has(r) && !fallbackRoutes.has(r)));

const entries = [];
for (const file of pages) {
  const route = routeOf(file);
  let html = htmlOf.get(route);
  const lang = langOf(route);
  const isFallback = fallbackRoutes.has(route);
  const alt = isFallback ? {} : versions(route);
  const canonical = isFallback ? swap(route, "en") : route;

  const title = decode(html.match(/<title>([^<]*)<\/title>/)?.[1] ?? "Armonia Choir");
  const main = (html.match(/<main\b[\s\S]*?<\/main>/)?.[0] ?? html).replace(/<(script|style|nav|header|footer|aside)\b[\s\S]*?<\/\1>/g, "");
  let description = decode(html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? "");
  if (!description) {
    // the first real paragraph of the page (not a date line, caption or button label)
    // (innermost blocks only: an outer box would bring the date line and title along)
    const paras = [...main.matchAll(/<(p|div)\b[^>]*>((?:(?!<(?:p|div|h[1-6]|ul|ol|li|section|article|figure)\b)[\s\S])*?)<\/\1>/g)]
      .map((m) => text(m[2])).filter((t) => t.length >= 80);
    description = clip(paras[0] ?? FALLBACK[lang]);
    html = html.replace(/<meta name="description" content=""\s*\/?>/, "");
  }
  // the page's picture for link previews (full size): its poster (the image named after the page),
  // else its first photo, else the logo; never the site logo or a flag icon
  const imgs = [...main.matchAll(/<img\b[^>]*>/g)]
    .map((m) => ({ src: decode(m[0].match(/\bsrc="(\/img\/[^"]+)"/)?.[1] ?? "").replace(/\.w\d+\.webp$/, ".webp"), alt: decode(m[0].match(/\balt="([^"]*)"/)?.[1] ?? "") }))
    .filter((i) => i.src && !/\/(logo|fest-logo)\.|united-kingdom|\/greece\.webp/i.test(i.src));
  const img = (imgs.find((i) => i.alt && title.startsWith(i.alt)) ?? imgs[0])?.src ?? "/img/logo.webp";

  const tags = [
    `<link rel="canonical" href="${SITE}${canonical}">`,
    ...Object.entries(alt).map(([l, r]) => `<link rel="alternate" hreflang="${l}" href="${SITE}${r}">`),
    alt.en && `<link rel="alternate" hreflang="x-default" href="${SITE}${alt.en}">`,
    !/<meta name="description"/.test(html) && `<meta name="description" content="${esc(description)}">`,
    `<meta property="og:type" content="website">`,
    `<meta property="og:site_name" content="${SITE_NAME[lang]}">`,
    `<meta property="og:locale" content="${OG_LOCALE[isFallback ? "en" : lang]}">`,
    ...Object.keys(alt).filter((l) => l !== lang).map((l) => `<meta property="og:locale:alternate" content="${OG_LOCALE[l]}">`),
    `<meta property="og:title" content="${esc(title)}">`,
    `<meta property="og:description" content="${esc(description)}">`,
    `<meta property="og:url" content="${SITE}${canonical}">`,
    `<meta property="og:image" content="${esc(abs(img))}">`,
    `<meta name="twitter:card" content="summary_large_image">`,
  ].filter(Boolean);
  html = html.replace("</head>", `<!--seo-->\n${tags.join("\n")}\n<!--/seo--></head>`);
  fs.writeFileSync(file, html);
  if (!isFallback) entries.push({ route, alt });
}

// sitemap.xml: English first, then the other languages; each page listed with its versions
const today = new Date().toISOString().slice(0, 10);
entries.sort((a, b) => LOCALES.indexOf(langOf(a.route)) - LOCALES.indexOf(langOf(b.route)) || a.route.localeCompare(b.route));
const urls = entries.map(({ route, alt }) => {
  const links = Object.entries(alt).map(([l, r]) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${SITE}${r}"/>`);
  const prio = /^\/[a-z]{2}\/$/.test(route) ? "1.0" : /\/(festival\/2027|festival\/2026|masterclass\/2026)\/$/.test(route) ? "0.9" : "0.7";
  return `  <url>\n    <loc>${SITE}${route}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${prio}</priority>\n${links.join("\n")}\n  </url>`;
});
fs.writeFileSync(path.join(out, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join("\n")}\n</urlset>\n`);
fs.writeFileSync(path.join(out, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`);

// 404.html: the app's fallback page, kept out of search results
const spa = path.join(out, "__spa-fallback.html");
if (fs.existsSync(spa)) {
  // (head tags only added, the title left alone: the app checks the page it starts on matches what it
  // would render. The marker tells it this page was served for an address that does not exist.)
  const page = fs.readFileSync(spa, "utf8").replace("</head>", `<meta name="robots" content="noindex"><meta name="armonia-not-found" content="1"></head>`);
  fs.writeFileSync(path.join(out, "404.html"), page);
}
// index.html (the site's root, and the legacy /index.html): a bare redirect to the English home, like
// the legacy redirect pages. Prerendered, it was the whole app (scripts, styles, fonts) loaded only to
// move on, which a first visit then paid for twice.
fs.writeFileSync(
  path.join(out, "index.html"),
  `<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<title>Armonia Choir | International Choral Festival of Preveza, Greece</title>\n<link rel="canonical" href="${SITE}/en/">\n<meta http-equiv="refresh" content="0; url=/en/">\n<script>location.replace("/en/" + location.search + location.hash);</script>\n</head>\n<body><a href="/en/">${SITE}/en/</a></body>\n</html>\n`
);
console.log(`seo: ${pages.length} pages tagged (${fallbackRoutes.size} not yet translated, pointed at the English), sitemap.xml (${entries.length} URLs), robots.txt, 404.html, index.html (redirect)`);
