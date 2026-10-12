// Proofreading review: the open questions, settled for launch (2026-10-12) from the evidence on the
// pages themselves (and public sources where noted). Each "why" names the evidence; the choir can
// overrule any of them -- see MIGRATION.md, "Settled for launch".

// apply every [find, replace] pair once; fail if one is missing
const each = (...pairs) => h => pairs.reduce((out, [f, r]) => {
  const next = out.replace(f, r);
  if (next === out) throw new Error("not found: " + f);
  return next;
}, h);

export default [
  // M17-01: the 2017 schedule carried the 2019 dates (2-4 July). The weekdays (Tuesday-Thursday) and the
  // last evening's "Opening Ceremony" fit Tuesday 4 - Thursday 6 July 2017 (festival 6-9 July 2017),
  // the same pattern as 2018 (3-5 July, festival from 5 July) and 2019 (2-4 July, festival from 4 July).
  { ids: ["M17-01"], why: "2017 seminar dates: Tuesday 4 - Thursday 6 July 2017 (weekdays and opening ceremony)", files: ["masterclass2017.html"],
    apply: each(
      ["<a>2 - 4 July 2017</a>", "<a>4 - 6 July 2017</a>"],
      [/from 2nd to 4th July 2017\./, "from 4th to 6th July 2017."],
      ["<h4>Tuesday, July 2nd, 2017</h4>", "<h4>Tuesday, July 4th, 2017</h4>"],
      ["<h4>Wednesday, July 3rd, 2017</h4>", "<h4>Wednesday, July 5th, 2017</h4>"],
      ["<h4>Thursday, July 4th, 2017</h4>", "<h4>Thursday, July 6th, 2017</h4>"]) },
  { ids: ["M17-01"], why: "2017 seminar dates: Tuesday 4 - Thursday 6 July 2017 (weekdays and opening ceremony)", files: ["masterclass2017Greek.html"],
    apply: each(
      ["<a>2 - 4 Ιουλίου 2017</a>", "<a>4 - 6 Ιουλίου 2017</a>"],
      [/από τις 2 έως τις 4 Ιουλίου 2017\./, "από τις 4 έως τις 6 Ιουλίου 2017."],
      ["<h4>Τρίτη, 2 Ιουλίου 2017</h4>", "<h4>Τρίτη, 4 Ιουλίου 2017</h4>"],
      ["<h4>Τετάρτη, 3 Ιουλίου 2017</h4>", "<h4>Τετάρτη, 5 Ιουλίου 2017</h4>"],
      ["<h4>Πέμπτη, 4 Ιουλίου 2017</h4>", "<h4>Πέμπτη, 6 Ιουλίου 2017</h4>"]) },
  { ids: ["M17-01"], why: "2017 seminar dates in the Previous Masterclasses listing", files: ["previousMasteclasses.html"],
    find: "2 - 4 July 2017", replace: "4 - 6 July 2017" },
  { ids: ["M17-01"], why: "2017 seminar dates in the Previous Masterclasses listing", files: ["previousMasteclassesGreek.html"],
    find: "2 - 4 Ιουλίου 2017", replace: "4 - 6 Ιουλίου 2017" },

  // FEST-01: the 2022 page itself says "The 26th International Choir Competition, which was canceled
  // 2 years ago"; 2023 is the 27th, 2024 the 28th.
  { ids: ["FEST-01"], why: "2022 held the 26th competition (its own page); 2023 is the 27th", files: ["previousFestivals.html"],
    find: /(4 - 10 July 2022<\/p>[\s\S]*?<span>)27th International Choral Competition/, replace: "$126th International Choral Competition" },
  { ids: ["FEST-01"], why: "2022 held the 26th competition (its own page); 2023 is the 27th", files: ["previousFestivalsGreek.html"],
    find: /(Ιουλίου 2022<\/p>[\s\S]*?<span>)27ος Διεθνής Χορωδιακός Διαγωνισμός/, replace: "$126ος Διεθνής Χορωδιακός Διαγωνισμός" },

  // F21-01: no competition was held in 2021 -- the festival ran 7-10 July with five choirs "χωρίς
  // διαγωνισμό" (epirusgate.gr); the 26th, announced for 2021, took place in 2022. The 2021 page keeps
  // its invitation text (it announced the competition); the listing records what took place.
  { ids: ["F21-01"], why: "No competition in 2021: the 26th was held in 2022", files: ["previousFestivals.html"],
    find: /(5 - 11 July 2021<\/p>[\s\S]*?<ul class="space-y-2 mt-auto">)\s+<li class="text-gray-800 flex items-start font-semibold">\s+<span>26th International Choral Competition<\/span>\s+<\/li>/,
    replace: "$1" },
  { ids: ["F21-01"], why: "No competition in 2021: the 26th was held in 2022", files: ["previousFestivalsGreek.html"],
    find: /(Ιουλίου 2021<\/p>[\s\S]*?<ul class="space-y-2 mt-auto">)\s+<li class="text-gray-800 flex items-start font-semibold">\s+<span>26ος Διεθνής Χορωδιακός Διαγωνισμός<\/span>\s+<\/li>/,
    replace: "$1" },

  // F26-01: Aulon Naçi was born in 1983 (sq.wikipedia.org; the page's other entry says 1983 too).
  { ids: ["F26-01"], why: "Aulon Naçi was born in 1983", files: ["ICFP2026.html"],
    find: "Aulon Naçi (b. 1996)", replace: "Aulon Naçi (b. 1983)" },
  { ids: ["F26-01"], why: "Aulon Naçi was born in 1983", files: ["ICFP2026-el.html"],
    find: "Aulon Naçi (γεν. 1996)", replace: "Aulon Naçi (γεν. 1983)" },
  // F26-05: the youth choir of Gøtu kirkja, Gøta (sclfestival.org, kvf.fo), as its bio says.
  { ids: ["F26-05"], why: "Gøtu Kirkju Ungdómskór is from Gøta, as its bio says", files: ["ICFP2026.html", "ICFP2026-el.html"], count: 5,
    find: /(Ungdómskór(?: \(Gøta Church Youth Choir\))?<\/span>, )Toftir(\s+)FO/g, replace: "$1Gøta$2FO" },
  // F19-05: MoPZ Napev is from Batuje (zpzp.si, ajdovscina.si), as its bio says.
  { ids: ["F19-05"], why: "Male choir NAPEV is from Batuje, as its bio says", files: ["single-2019.html", "single-2022.html"],
    find: "Male choir NAPEV, Črniče, Slovenia", replace: "Male choir NAPEV, Batuje, Slovenia" },
  { ids: ["F19-05"], why: "Male choir NAPEV is from Batuje, as its bio says", files: ["single-2019Greek.html"],
    find: "Ανδρική χορωδία NAPEV, Τσέρνιτσε, Σλοβενία", replace: "Ανδρική χορωδία NAPEV, Μπατούγιε, Σλοβενία" },
  { ids: ["F19-05"], why: "Male choir NAPEV is from Batuje, as its bio says", files: ["single-2022Greek.html"],
    find: "Ανδρική χορωδία NAPEV, Τσρνίτσε, Σλοβενία", replace: "Ανδρική χορωδία NAPEV, Μπατούιε, Σλοβενία" },
  // F24-03: Vox Humana (Sfântu Gheorghe) won bronze in Athens 1996 and Rhodes 2001, as the English says
  // (musicweb-international.com, Rhodes 2001: 71.56 points, bronze).
  { ids: ["F24-03"], why: "Vox Humana: bronze in Athens 1996 and Rhodes 2001, as the English says", files: ["single-2024Greek.html"],
    apply: each(
      [/αργυρό(\s+)μετάλλιο(\s+)στην(\s+)Χορωδιακή(\s+)Ολυμπιάδα/, "χάλκινο$1μετάλλιο$2στην$3Χορωδιακή$4Ολυμπιάδα"],
      [/αργυρό(\s+)μετάλλιο(\s+)στον(\s+)Διεθνή(\s+)Χορωδιακό(\s+)Διαγωνισμό(\s+)της(\s+)Ρόδου/, "χάλκινο$1μετάλλιο$2στον$3Διεθνή$4Χορωδιακό$5Διαγωνισμό$6της$7Ρόδου"]) },
  // SW-01: "Eftathia" and "Ευταθία" are both one letter short of Efstathia / Ευσταθία; the other two
  // Greek forms (Ευτυχία, Ευθυμία) are different names. No public source gives it -- the choir to confirm.
  { ids: ["SW-01"], why: "Committee member: Efstathia Dimou", files: ["masterclass2023.html", "single-2023.html", "single-2024.html"],
    find: "<h6>Eftathia Dimou,", replace: "<h6>Efstathia Dimou," },
  { ids: ["SW-01"], why: "Committee member: Ευσταθία Δήμου", files: ["masterclass2023Greek.html"], find: "<h6>Ευθυμία Δήμου,", replace: "<h6>Ευσταθία Δήμου," },
  { ids: ["SW-01"], why: "Committee member: Ευσταθία Δήμου", files: ["single-2023Greek.html"], find: "<h6>Ευταθία Δήμου,", replace: "<h6>Ευσταθία Δήμου," },
  { ids: ["SW-01"], why: "Committee member: Ευσταθία Δήμου", files: ["single-2024Greek.html"], find: "<h6>Ευτυχία Δήμου,", replace: "<h6>Ευσταθία Δήμου," },

  // K22-01: the day's summary (EN and EL) and "rehearsed in the afternoon" give 3:00 p.m.; the 6:00 p.m.
  // was copied from the previous day's semi-final.
  { ids: ["K22-01"], why: "Finals rehearsal at 3:00 p.m., as in the day's summary", files: ["iccc2022.html"],
    find: /<b>6:00 p\.m\.<\/b>(\s+Finals - Rehearsal with Ambitus Choir)/, replace: "<b>3:00 p.m.</b>$1" },
  { ids: ["K22-01"], why: "Finals rehearsal at 3:00 p.m., as in the day's summary", files: ["iccc2022Greek.html"],
    find: /<b>6:00 μ\.μ\.<\/b>(\s+Τελικοί - Πρόβα με τη Χορωδία Ambitus)/, replace: "<b>3:00 μ.μ.</b>$1" },

  // K25-02: the Final Concert section (EN and EL) gives 8:30 p.m., as in 2022.
  { ids: ["K25-02"], why: "Final concert at 8:30 p.m., as in the Final Concert section", files: ["iccc2025.html"],
    find: "<li>8:00 p.m. - 3rd Round (Finals) / Part 2 - Concert", replace: "<li>8:30 p.m. - 3rd Round (Finals) / Part 2 - Concert" },
  { ids: ["K25-02"], why: "Final concert at 20:30, as in the Final Concert section", files: ["iccc2025Greek.html"],
    find: "<li>20:00 - 3ος Γύρος (Τελικός) / Μέρος 2ο", replace: "<li>20:30 - 3ος Γύρος (Τελικός) / Μέρος 2ο" },
];
