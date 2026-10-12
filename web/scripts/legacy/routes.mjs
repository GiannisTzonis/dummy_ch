// Maps a legacy .html href to the new site's route (without locale prefix).
const table = {
  index: "", ourchoir: "/our-choir", ourconductor: "/our-conductor",
  previousFestivals: "/festivals", previousMasteclasses: "/masterclasses",
  berlin2024: "/news/berlin-2024", france2024: "/news/france-2024", erasmus: "/news/erasmus",
  saintpeter: "/news/saint-peter", cfn: "/news/cfn", report091225: "/news/december-2025",
  schedule2023: "/festival/2023", ICFP2026: "/festival/2026", "ICFP2026-el": "/festival/2026",
  icc2022: "/competition/composition-2022", icc2025: "/competition/composition-2025",
  iccc2022: "/competition/conducting-2022", iccc2025: "/competition/conducting-2025",
};
export function routeFor(href) {
  if (!href || /^(https?:|mailto:|tel:|#)/.test(href)) return href;
  const name = href.replace(/^\.?\//, "").replace(/\.html$/, "").replace(/Greek$/, "");
  if (name in table) return table[name] || "/";
  let m;
  if ((m = name.match(/^single-(\d{4})$/))) return `/festival/${m[1]}`;
  if ((m = name.match(/^masterclass(\d{4})$/))) return `/masterclass/${m[1]}`;
  throw new Error("no route for legacy href " + href);
}
