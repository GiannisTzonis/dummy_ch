// Approved fixes to mistakes on the legacy pages (approved 2026-10-10, see MIGRATION.md).
//
// The migration copies the legacy HTML verbatim. These corrections are applied to the legacy
// HTML *before* it is imported or compared (see source.mjs), so `legacy:import` stays
// reproducible and `legacy:check` proves the new site equals the legacy site plus exactly these
// fixes. Each entry must match exactly `count` times in each listed file (default 1) or the
// import/check fails -- a correction can never silently stop applying.
//
// Entry: { why, files, find: string | RegExp, replace: string | fn, count? }
//    or: { why, files, apply: html => html }   (must change the file, unless optional: true)
// files: "*" applies to every legacy page.
import fs from "node:fs"; import path from "node:path"; import { fileURLToPath } from "node:url";
import { greekNames2, phrase } from "./greek-names-2.mjs";
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../../..");

// Exact on-disk spelling of a repo-relative path whose case may be wrong, or null.
const listing = new Map();
function exactCase(rel) {
  let dir = ROOT; const out = [];
  for (const part of rel.split("/")) {
    if (!listing.has(dir)) listing.set(dir, fs.existsSync(dir) && fs.statSync(dir).isDirectory() ? fs.readdirSync(dir) : []);
    const names = listing.get(dir);
    const hit = names.find(n => n === part) ?? names.find(n => n.normalize("NFC").toLowerCase() === part.normalize("NFC").toLowerCase());
    if (!hit) return null;
    out.push(hit); dir = path.join(dir, hit);
  }
  return out.join("/");
}

// Removes the <div> that starts with `open` (exact text), with everything nested in it.
function removeDiv(html, open) {
  const start = html.indexOf(open);
  if (start < 0) return html;
  const tags = /<\/?div\b[^>]*>/gi;
  tags.lastIndex = start;
  let depth = 0, m;
  while ((m = tags.exec(html))) {
    depth += m[0][1] === "/" ? -1 : 1;
    if (depth === 0) return html.slice(0, start) + html.slice(m.index + m[0].length);
  }
  return html;
}

const MARCO =/img\/Marco Antonio Garc(?:í|í)a de Paz\.jpeg/g; // some pages spell í decomposed
const FLAGS = { Turkey: "🇹🇷", Ukraine: "🇺🇦", Greece: "🇬🇷", Bulgaria: "🇧🇬", Italy: "🇮🇹", Portugal: "🇵🇹" };

export const baseCorrections = [
  // --- broken on the live site --------------------------------------------------------------
  {
    why: "Image/document path differs from the file only in upper/lower case -- 404 on GitHub Pages (e.g. img/KGBL.jpg is img/kgbl.jpg)",
    files: "*", optional: true,
    apply: h => h.replace(/(src|href)="(\/?)(img\/[^"#?]+)"/g, (m, attr, slash, rel) => {
      let decoded; try { decoded = decodeURIComponent(rel); } catch { decoded = rel; }
      const exact = exactCase(decoded);
      return exact && exact !== decoded && exact.toLowerCase() === decoded.toLowerCase() ? `${attr}="${slash}${exact}"` : m;
    }),
  },
  {
    why: "Greek 2025 rules downloads 404: link spells accents decomposed, files are named composed",
    files: ["single-2025Greek.html"],
    apply: h => h.replace(/href="([^"]*\.docx)"/g, (_, href) => `href="${href.normalize("NFC")}"`),
  },
  {
    why: "Missing photo: only img/vasilikou.webp exists",
    files: ["single-2018.html", "single-2018Greek.html", "single-2019.html", "single-2019Greek.html", "single-2021.html", "single-2021Greek.html"],
    find: "img/vasilikou.jpeg", replace: "img/vasilikou.webp",
  },
  {
    why: "Missing photo: the file is MarcoAntonioGarcíadePaz.jpeg",
    files: ["single-2019.html", "single-2019Greek.html", "single-2021.html", "single-2021Greek.html", "masterclass2019.html", "masterclass2019Greek.html"],
    find: MARCO, replace: "img/MarcoAntonioGarcíadePaz.jpeg",
  },
  {
    why: "Missing poster: img/poster-2021Greek.jpeg does not exist (the English page uses poster-2021.jpeg)",
    files: ["single-2023Greek.html"],
    find: "img/poster-2021Greek.jpeg", replace: "img/poster-2021.jpeg",
  },
  {
    why: "Missing flag: 'ven.pngnor' typo and no Venezuela flag existed (web/public/img/elements/ven.svg added)",
    files: ["previousFestivals.html", "previousFestivalsGreek.html"],
    find: "img/elements/ven.pngnor", replace: "img/elements/ven.svg",
  },
  {
    why: "Jump link to the jury section was missing its '#'",
    files: ["single-2018.html", "single-2018Greek.html"],
    find: 'href="ijc18"', replace: 'href="#ijc18"',
  },
  {
    why: "Gallery photo 2 opened photo 1",
    files: ["single-2019.html", "single-2019Greek.html"],
    find: /(href="img\/gallery\/festivals\/festival 2019\/)1\.jpg(">\s*<img class="grid-item" src="img\/gallery\/festivals\/festival 2019\/2\.jpg")/i,
    replace: "$12.jpg$2",
  },

  // --- wrong language / wrong link ----------------------------------------------------------
  {
    why: "English France 2024 page: 'Other News' box was in Greek and linked to Greek pages",
    files: ["france2024.html"],
    apply: h => h.replace(/<p>Άλλες Ειδήσεις<\/p>/g, "<p>Other News</p>")
      .replace(">Πρόγραμμα I.C.F.P 2023<", ">Schedule I.C.F.P 2023<")
      .replace(">2ο Βραβείο, Άγιος Πέτρος<", ">2nd prize, St Petersburg<")
      .replace(/schedule2023Greek\.html/g, "schedule2023.html").replace(/saintpeterGreek\.html/g, "saintpeter.html"),
  },
  {
    why: "Greek: Saint Petersburg is Αγία Πετρούπολη, not Άγιος Πέτρος (Saint Peter)",
    files: ["cfnGreek.html", "france2024Greek.html", "berlin2024.html"],
    find: ">2ο Βραβείο, Άγιος Πέτρος<", replace: ">2ο Βραβείο, Αγία Πετρούπολη<",
  },
  {
    why: "Greek: Saint Petersburg is Αγία Πετρούπολη, not Άγιος Πέτρος (Saint Peter)",
    files: ["saintpeterGreek.html"],
    find: /τον(\s+)Άγιο(\s+)Πέτρο, Ρωσία/, replace: "την$1Αγία$2Πετρούπολη, Ρωσία",
  },
  {
    why: "Erasmus 'Other News': the Masterclass 2026 link showed the 2023 poster and opened the 2023 page",
    files: ["erasmus.html"],
    find: /<a href="masterclass2023\.html">(\s*)<img class="fit-to-div" src="img\/poster-master-23\.jpeg"/,
    replace: '<a href="masterclass2026.html">$1<img class="fit-to-div" src="img/masterclass2026.jpg"',
  },
  {
    why: "Home news card for the 2024 festival: title linked to masterclass 2023",
    files: ["index.html", "indexGreek.html"],
    find: /<a href="masterclass2023\.html">(\s*<h4[^>]*>\s*42)/, replace: '<a href="single-2024.html">$1',
  },
  {
    why: "Typo: 'Chord' for 'Choral'",
    files: ["index.html"],
    find: "42nd International Chord Festival", replace: "42nd International Choral Festival",
  },
  {
    why: "Previous Masterclasses: titles linked to the wrong page (the photo link was right)",
    files: ["previousMasteclasses.html", "previousMasteclassesGreek.html"],
    apply: h => h.replace(/<div class="thumb">\s*<a href="([^"]+)">([\s\S]*?)<a href="[^"]+">(\s*<h4>)/g,
      (_, href, between, h4) => `<div class="thumb">\n            <a href="${href}">${between}<a href="${href}">${h4}`),
  },
  {
    why: "Previous Masterclasses: typo 'Coral' for 'Choral'",
    files: ["previousMasteclasses.html"],
    find: /Coral Conducting/g, replace: "Choral Conducting", count: 4,
  },
  {
    why: "Previous Masterclasses (Greek): 'Σεμινάριο και Σεμινάριο' for 'Εργαστήριο και Σεμινάριο'",
    files: ["previousMasteclassesGreek.html"],
    find: /Σεμινάριο και Σεμινάριο/g, replace: "Εργαστήριο και Σεμινάριο", count: 4,
  },
  {
    why: "Previous Masterclasses: 4th workshop showed the CFN logo and wrong dates (its page: poster-2021, 4 - 6 July 2021)",
    files: ["previousMasteclasses.html", "previousMasteclassesGreek.html"],
    apply: h => h.replace(/src="img\/cfn\.png"/, 'src="img/poster-2021.jpeg"')
      .replace("6 - 8 July 2021", "4 - 6 July 2021").replace("6 - 8 Ιουλίου 2021", "4 - 6 Ιουλίου 2021"),
  },
  {
    why: "Previous Masterclasses: 2nd and 1st workshops dated a year late (their pages: 3 - 5 July 2018, 2 - 4 July 2017)",
    files: ["previousMasteclasses.html", "previousMasteclassesGreek.html"],
    apply: h => h.replace("3 - 5 July 2019", "3 - 5 July 2018").replace("2 - 4 July 2018", "2 - 4 July 2017")
      .replace("3 - 5 Ιουλίου 2019", "3 - 5 Ιουλίου 2018").replace("2 - 4 Ιουλίου 2018", "2 - 4 Ιουλίου 2017"),
  },
  {
    why: "Previous Festivals: 2023 ran the 6th seminar (masterclass 2023 page), not the 5th",
    files: ["previousFestivals.html", "previousFestivalsGreek.html"],
    apply: h => h.replace("<span>5th Seminar for Choral Conductors</span>", "<span>6th Seminar for Choral Conductors</span>")
      .replace("<span>5ο Σεμινάριο Μαέστρων Χορωδιών</span>", "<span>6ο Σεμινάριο Μαέστρων Χορωδιών</span>"),
  },
  {
    why: "Previous Festivals: 2015 ran the 21st competition (2016 page says 22nd, 2017 says 23rd)",
    files: ["previousFestivals.html", "previousFestivalsGreek.html"],
    apply: h => {
      const last = (s, from, to) => { const i = s.lastIndexOf(from); return i < 0 ? s : s.slice(0, i) + to + s.slice(i + from.length); };
      return last(last(h, "<span>22nd International Choral Competition</span>", "<span>21st International Choral Competition</span>"),
        "<span>22ος Διεθνής Χορωδιακός Διαγωνισμός</span>", "<span>21ος Διεθνής Χορωδιακός Διαγωνισμός</span>");
    },
  },

  // --- typos --------------------------------------------------------------------------------
  { why: "Typo '33th'", files: ["single-2015.html"], find: "33th International", replace: "33rd International" },
  { why: "Typo '22rd'", files: ["single-2016.html"], find: "22rd International", replace: "22nd International" },
  { why: "Typo '42st'", files: ["single-2024.html"], find: "42st International", replace: "42nd International" },
  { why: "Typo '44rth'", files: ["ICFP2026.html"], find: "44rth International", replace: "44th International" },
  { why: "Stray 'GR' pasted after a sentence", files: ["ICFP2026.html"], find: "Carnegie Hall.GR", replace: "Carnegie Hall." },
  {
    why: "Typo 'Commisioner'",
    files: ["iccc2025.html", "ICFP2026.html", "masterclass2023.html", "masterclass2026.html", "single-2023.html", "single-2024.html", "single-2025.html"],
    find: /Commisioner/g, replace: "Commissioner", count: 2,
  },
  {
    why: "Typo 'Commisioner'",
    files: ["single-2015.html", "single-2016.html", "single-2017.html", "single-2018.html", "single-2019.html", "single-2021.html", "single-2022.html"],
    find: "Commisioner", replace: "Commissioner",
  },
  { why: "Her name is spelled 'Anelia' everywhere else", files: ["ourconductor.html"], find: "Anelija Stefanova", replace: "Anelia Stefanova" },
  { why: "'he' for 'she'", files: ["ourconductor.html"], find: "Since 1994 he has been living", replace: "Since 1994 she has been living" },
  { why: "'she' for 'he' (Alexandros Komnas)", files: ["iccc2022.html"], find: "At the same time she studied Acting", replace: "At the same time he studied Acting" },
  { why: "Heading misspells 'Tamas Szarka' (as in his bio)", files: ["iccc2022.html"], find: "<h3>Tommas Szarka</h3>", replace: "<h3>Tamas Szarka</h3>" },
  { why: "Typo 'TThe'", files: ["iccc2022.html"], find: "TThe Jury is empowered", replace: "The Jury is empowered" },
  { why: "Composer is Luke Mayernik (as in the prose below)", files: ["icc2022.html"], find: /Luce Mayernik/g, replace: "Luke Mayernik", count: 2 },
  { why: "Typos '04-30' and 'Ceremoney'", files: ["masterclass2022.html"], apply: h => h.replace("03:00 - 04-30 p.m.", "03:00 - 04:30 p.m.").replace("Award Giving Ceremoney", "Award Giving Ceremony") },
  { why: "Typo '04-30'", files: ["masterclass2022Greek.html"], find: "03:00 - 04-30 μ.μ.", replace: "03:00 - 04:30 μ.μ." },
  { why: "'Clauteverdi' for Claudio Monteverdi", files: ["masterclass2023.html", "masterclass2023Greek.html"], find: "Clauteverdi: Zefiro torna", replace: "Claudio Monteverdi: Zefiro torna" },
  { why: "'?' for the Greek semicolon '·'", files: ["masterclass2018Greek.html"], find: "επίδειγμα χορωδίας? το", replace: "επίδειγμα χορωδίας· το" },
  { why: "Greek page printed 'Greece' in English", files: ["single-2025Greek.html"], find: /(<span class="country-flag">🇬🇷<\/span>\s*<span>)Greece(<\/span>)/, replace: "$1Ελλάδα$2" },

  // --- wrong years (contradicting the page's own dates) --------------------------------------
  {
    why: "Masterclass 2018 schedule headers were the 2019 dates (page: 3 - 5 July 2018)",
    files: ["masterclass2018.html"],
    apply: h => h.replace("Tuesday, July 2nd, 2019", "Tuesday, July 3rd, 2018").replace("Wednesday, July 3rd, 2019", "Wednesday, July 4th, 2018").replace("Thursday, July 4th, 2019", "Thursday, July 5th, 2018"),
  },
  {
    why: "Masterclass 2018 schedule headers were the 2019 dates (page: 3 - 5 July 2018)",
    files: ["masterclass2018Greek.html"],
    apply: h => h.replace("Τρίτη, 2 Ιουλίου 2019", "Τρίτη, 3 Ιουλίου 2018").replace("Τετάρτη, 3 Ιουλίου 2019", "Τετάρτη, 4 Ιουλίου 2018").replace("Πέμπτη, 4 Ιουλίου 2019", "Πέμπτη, 5 Ιουλίου 2018"),
  },
  {
    why: "Tuesday/Wednesday schedule headers said 2021 (Monday and the page say 2022)",
    files: ["masterclass2022.html", "iccc2022.html"],
    apply: h => h.replace("July 5th, 2021", "July 5th, 2022").replace("July 6th, 2021", "July 6th, 2022"),
  },
  { why: "Tuesday/Wednesday schedule headers said 2021", files: ["masterclass2022Greek.html"], apply: h => h.replace("ΤΡΙΤΗ, 5η Ιουλίου, 2021", "ΤΡΙΤΗ, 5η Ιουλίου, 2022").replace("ΤΕΤΑΡΤΗ, 6η Ιουλίου, 2021", "ΤΕΤΑΡΤΗ, 6η Ιουλίου, 2022") },
  { why: "Tuesday/Wednesday schedule headers said 2021", files: ["iccc2022Greek.html"], apply: h => h.replace("ΤΡΙΤΗ, 5 Ιουλίου 2021", "ΤΡΙΤΗ, 5 Ιουλίου 2022").replace("ΤΕΤΑΡΤΗ, 6 Ιουλίου 2021", "ΤΕΤΑΡΤΗ, 6 Ιουλίου 2022") },
  {
    why: "Date range mixed years: the 2019 festival ran 4 - 7 July 2019",
    files: ["masterclass2019.html", "masterclass2019Greek.html"],
    apply: h => h.replace("5th July 2018 to Sunday", "5th July 2019 to Sunday").replace("5 Ιουλίου 2018 έως", "5 Ιουλίου 2019 έως"),
  },

  // --- copy-paste duplicates -----------------------------------------------------------------
  {
    why: "'Lyra' bio repeated its first sentence at the end",
    files: ["single-2018.html"],
    find: /Buzău town\.The chamber choir “Lyra” was founded in 1974[\s\S]*?, the conductor of the choir\./, replace: "Buzău town.",
  },
  {
    why: "'Registration - Participation Fees' heading and paragraph printed twice",
    files: ["single-2023.html", "single-2024.html"],
    find: /\s*<h4 class="mt-40">Registration - Participation Fees<\/h4>\s*<br>\s*<p>[\s\S]*?<\/p>/, replace: "",
  },
  {
    why: "First 'Organisation' heading repeated the Participation paragraph",
    files: ["single-2025.html"],
    find: /<h3>Organisation<\/h3>\s*<br>\s*<p>\s*All kinds of choirs can participate[\s\S]*?<\/p>\s*<br>\s*(?=<h3>Organisation<\/h3>)/, replace: "",
  },
  {
    why: "'Essence of Elements' bio printed twice (a short version, then the full one)",
    files: ["ICFP2026.html"],
    find: /<span>\s*Essence of Elements presents “The Four Elements”[\s\S]*?sound, image and emotion\.\s*<\/span>\s*/, replace: "",
  },
  {
    why: "'Essence of Elements' bio printed twice (a short version, then the full one)",
    files: ["ICFP2026-el.html"],
    find: /<span>\s*Το Essence of Elements παρουσιάζει το πρόγραμμα[\s\S]*?<\/span>\s*<span>[\s\S]*?<\/span>\s*<span>\s*Την καλλιτεχνική διεύθυνση[\s\S]*?<\/span>\s*/, replace: "",
  },
  {
    why: "Same 09:00 schedule slot printed three times",
    files: ["masterclass2022.html", "masterclass2022Greek.html"],
    find: /(<li class="schedule-events">\s*<b>09:00 - 10:00 [^<]*<\/b>\s*[^<]*Gary Graden[\s\S]*?<\/li>)(\s*\1)+/, replace: "$1",
  },
  {
    why: "Stray paragraph copied from a 2021 page (38th festival, July 2021) at the bottom of the 2023 page",
    files: ["masterclass2023.html"],
    find: /<blockquote class="generic-blockquote">\s*From 8th of July 2021 to 11th of July 2021[\s\S]*?<\/blockquote>/, replace: "",
  },
  {
    why: "Topic listed twice ('style' and 'styles')",
    files: ["masterclass2023.html"],
    find: /<li class="schedule-events">\s*Interpretation of various musical style\s*<\/li>\s*/, replace: "",
  },
  {
    why: "Topic listed twice",
    files: ["masterclass2023Greek.html"],
    find: /(<li class="schedule-events">\s*Ερμηνεία διαφόρων μουσικών ρυθμών\s*<\/li>)\s*\1/, replace: "$1",
  },

  // --- facts contradicting the page itself ---------------------------------------------------
  {
    why: "Choirs 13-18 showed '🇵🇹 Portugal' instead of the country in their own location line",
    files: ["single-2025.html"],
    apply: h => h.replace(/choir-location">([^<]*)<([\s\S]*?)<span class="country-flag">🇵🇹<\/span>(\s*)<span>Portugal<\/span>/g, (m, loc, between, ws) => {
      const country = loc.split(",").pop().trim();
      if (country === "Portugal" || /choir-location/.test(between) || !FLAGS[country]) return m;
      return `choir-location">${loc}<${between}<span class="country-flag">${FLAGS[country]}</span>${ws}<span>${country}</span>`;
    }),
  },

  // --- site structure (approved 2026-10-11) ---------------------------------------------------
  {
    why: "News pages: the per-page previous/next 'Other News' strip is replaced by the site-wide 'Other News' navigation (every other post, newest first, no duplicates)",
    files: ["cfn.html", "cfnGreek.html", "erasmus.html", "erasmusGreek.html", "saintpeter.html", "saintpeterGreek.html",
      "france2024.html", "france2024Greek.html", "berlin2024.html", "berlin2024Greek.html", "report091225.html", "report091225Greek.html"],
    find: /<section class="nav-area[\s\S]*?<\/section>/,
    replace: "",
  },

  {
    why: "Festival pages: the sidebar 'Recent Festivals / Recent Posts' list is replaced by the site-wide edition navigation (every other festival, newest first)",
    files: ["single-2015.html", "single-2015Greek.html", "single-2016.html", "single-2016Greek.html", "single-2017.html", "single-2017Greek.html",
      "single-2018.html", "single-2018Greek.html", "single-2019.html", "single-2019Greek.html", "single-2021.html", "single-2021Greek.html",
      "single-2022.html", "single-2022Greek.html", "single-2023.html", "single-2023Greek.html", "single-2024.html", "single-2024Greek.html",
      "single-2025.html", "single-2025Greek.html", "ICFP2026.html", "ICFP2026-el.html"],
    apply: h => removeDiv(h, '<div class="single-widget recent-posts-widget">'),
  },
  {
    why: "Masterclass and festival-schedule pages: the previous/next 'Other News' strip is replaced by the site-wide edition navigation",
    files: ["masterclass2023.html", "masterclass2026.html", "masterclass2026Greek.html", "schedule2023.html", "schedule2023Greek.html"],
    find: /<section class="nav-area[\s\S]*?<\/section>/,
    replace: "",
  },

  // --- new content (approved additions, not legacy mistakes) ---------------------------------
  {
    why: "New collaboration (2026-10-11): Musica Orbis, Prague Festival 2027 -- added after the last collaborator",
    files: ["index.html", "indexGreek.html"],
    find: /(<img src="\/img\/InfoChoirIndonesia\.png"[^>]*\/>\s*<\/a>\s*<\/div>)/,
    replace: `$1
        <div class="collaborator flibber-section flex flex-col items-center">
          <a href="https://www.musicaorbis.com/prague-festival/2027/" class="flex flex-col items-center">
            <h5 class="mb-2 mt-2 text-lg font-semibold">Musica Orbis</h5>
            <img src="/img/musica-orbis.png" alt="Musica Orbis" class="w-28 h-28 object-contain rounded" />
          </a>
        </div>`,
  },

  // --- client rule (2026-10-11): non-Greek names in Latin script on the Greek pages ------------
  // People, choirs/ensembles, composers and prizes named after people, spelled as on the English
  // page. Greek and Cypriot people, Greek choirs and place names stay in Greek. The list (and why
  // each entry) is in greek-names.json.
  ...JSON.parse(fs.readFileSync(path.join(path.dirname(fileURLToPath(import.meta.url)), "greek-names.json"), "utf8")).replacements
    .map(r => ({ why: `Non-Greek name in Latin script: ${r.note}`, files: [r.file], find: r.find, replace: r.replace, count: r.count })),
  // second part: non-Greek choir names, venues, works, festivals, organisations; towns stay Greek
  ...greekNames2.map(([files, find, replace, count]) => ({ why: `Original-language name on the Greek page: ${find} -> ${replace}`, files, find: phrase(find), replace, count })),
];

// Proofreading review fixes (approved 2026-10-12): one module per area, applied in this order
// (later modules were written against the text the earlier ones leave). Each entry lists the
// review finding IDs it resolves. Check a module with scripts/legacy/qa-validate.mjs.
const QA = ["festivals-2023-2026", "boilerplate", "bios", "festivals-2015-2018", "festivals-2019-2022", "competitions", "masterclasses", "pages-news", "lead", "answers"];
const qa = [];
for (const m of QA) qa.push(...(await import(`./qa/${m}.mjs`)).default);

export const corrections = [...baseCorrections, ...qa];
