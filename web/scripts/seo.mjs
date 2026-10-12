// Search-engine and sharing setup of the built site (web/build/client), run by `npm run build`
// after prerendering:
//   - every page gets a canonical link, hreflang links to its English/Greek twin (x-default:
//     English), a description where it has none (its own opening text; the legacy pages had empty
//     ones), and Open Graph / Twitter tags (title, description, address, picture) for link previews
//   - sitemap.xml (every page with its twin) and robots.txt
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
const FALLBACK = {
  en: "Official website of Armonia Choir and the International Choral Festival of Preveza, Greece: festivals, choral competitions, masterclasses for conductors and news.",
  el: "Επίσημος ιστότοπος της Χορωδίας Αρμονία και του Διεθνούς Χορωδιακού Φεστιβάλ Πρέβεζας: φεστιβάλ, χορωδιακοί διαγωνισμοί, σεμινάρια διεύθυνσης χορωδίας και νέα.",
};
const LOCALE = { en: "en_US", el: "el_GR" };
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
const pages = ["en", "el"].flatMap((l) => (fs.existsSync(path.join(out, l)) ? walk(path.join(out, l)) : []));
const routeOf = (file) => "/" + path.relative(out, path.dirname(file)).replace(/\\/g, "/") + "/";
const routes = new Set(pages.map(routeOf));
const twinOf = (route) => route.replace(/^\/(en|el)\//, (_, l) => `/${l === "en" ? "el" : "en"}/`);

const entries = [];
for (const file of pages) {
  let html = fs.readFileSync(file, "utf8").replace(MARK, "");
  const route = routeOf(file);
  const lang = route.startsWith("/el/") ? "el" : "en";
  const twin = routes.has(twinOf(route)) ? twinOf(route) : null;
  const en = lang === "en" ? route : twin, el = lang === "el" ? route : twin;

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
    `<link rel="canonical" href="${SITE}${route}">`,
    en && `<link rel="alternate" hreflang="en" href="${SITE}${en}">`,
    el && `<link rel="alternate" hreflang="el" href="${SITE}${el}">`,
    (en || route) && `<link rel="alternate" hreflang="x-default" href="${SITE}${en ?? route}">`,
    !/<meta name="description"/.test(html) && `<meta name="description" content="${esc(description)}">`,
    `<meta property="og:type" content="website">`,
    `<meta property="og:site_name" content="${lang === "el" ? "Χορωδία Αρμονία" : "Armonia Choir"}">`,
    `<meta property="og:locale" content="${LOCALE[lang]}">`,
    twin && `<meta property="og:locale:alternate" content="${LOCALE[lang === "en" ? "el" : "en"]}">`,
    `<meta property="og:title" content="${esc(title)}">`,
    `<meta property="og:description" content="${esc(description)}">`,
    `<meta property="og:url" content="${SITE}${route}">`,
    `<meta property="og:image" content="${esc(abs(img))}">`,
    `<meta name="twitter:card" content="summary_large_image">`,
  ].filter(Boolean);
  html = html.replace("</head>", `<!--seo-->\n${tags.join("\n")}\n<!--/seo--></head>`);
  fs.writeFileSync(file, html);
  entries.push({ route, en, el });
}

// sitemap.xml: English first, each page listed with its twin
const today = new Date().toISOString().slice(0, 10);
entries.sort((a, b) => (a.route.startsWith("/en/") === b.route.startsWith("/en/") ? a.route.localeCompare(b.route) : a.route.startsWith("/en/") ? -1 : 1));
const urls = entries.map(({ route, en, el }) => {
  const alt = [en && `    <xhtml:link rel="alternate" hreflang="en" href="${SITE}${en}"/>`, el && `    <xhtml:link rel="alternate" hreflang="el" href="${SITE}${el}"/>`].filter(Boolean);
  const prio = /^\/(en|el)\/$/.test(route) ? "1.0" : /\/(festival\/2026|masterclass\/2026)\/$/.test(route) ? "0.9" : "0.7";
  return `  <url>\n    <loc>${SITE}${route}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${prio}</priority>\n${alt.join("\n")}\n  </url>`;
});
fs.writeFileSync(path.join(out, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join("\n")}\n</urlset>\n`);
fs.writeFileSync(path.join(out, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`);

// 404.html: the app's fallback page, kept out of search results
const fallback = path.join(out, "__spa-fallback.html");
if (fs.existsSync(fallback)) {
  // (head tags only added, the title left alone: the app checks the page it starts on matches what it
  // would render. The marker tells it this page was served for an address that does not exist.)
  const page = fs.readFileSync(fallback, "utf8").replace("</head>", `<meta name="robots" content="noindex"><meta name="armonia-not-found" content="1"></head>`);
  fs.writeFileSync(path.join(out, "404.html"), page);
}
console.log(`seo: ${entries.length} pages tagged, sitemap.xml (${entries.length} URLs), robots.txt, 404.html`);
