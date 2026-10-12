// Proofreading review fixes (approved 2026-10-12): HOME, FEST, CHOIR, COND, N-OTH (N-BNG is in the
// hand-written web/app/content/news/berlin-nikopolis-genk-2026.ts).
// Home-page entries mirror the hand edits of web/app/content/pages/home.ts (legacy:check compares the two).

const EN_FRANCE = ["france2024.html", "berlin2024Greek.html"]; // berlin2024Greek.html holds the English copy
const EL_FRANCE = ["france2024Greek.html", "berlin2024.html"]; // berlin2024.html holds the Greek copy

// FEST-03: official Greek names, in the style of the English column
const COUNTRIES_EL = {
  "Hellenic Republic": "Ελληνική Δημοκρατία",
  "Republic of Poland": "Δημοκρατία της Πολωνίας",
  "Republic of Bulgaria": "Δημοκρατία της Βουλγαρίας",
  "Czech Republic": "Τσεχική Δημοκρατία",
  "Romania": "Ρουμανία",
  "Hungary": "Ουγγαρία",
  "Ukraine": "Ουκρανία",
  "Republic of Serbia": "Δημοκρατία της Σερβίας",
  "Italian Republic": "Ιταλική Δημοκρατία",
  "Republic of Slovenia": "Δημοκρατία της Σλοβενίας",
  "Republic of Estonia": "Δημοκρατία της Εσθονίας",
  "Russian Federation": "Ρωσική Ομοσπονδία",
  "Republic of Cyprus": "Κυπριακή Δημοκρατία",
  "Republic of Latvia": "Δημοκρατία της Λετονίας",
  "Kingdom of Sweden": "Βασίλειο της Σουηδίας",
  "Federal Republic of Germany": "Ομοσπονδιακή Δημοκρατία της Γερμανίας",
  "Slovak Republic": "Σλοβακική Δημοκρατία",
  "Israel": "Ισραήλ",
  "Kingdom of Spain": "Βασίλειο της Ισπανίας",
  "Republic of Finland": "Δημοκρατία της Φινλανδίας",
  "Kingdom of Denmark": "Βασίλειο της Δανίας",
  "Republic of South Africa": "Δημοκρατία της Νότιας Αφρικής",
  "Republic of Lithuania": "Δημοκρατία της Λιθουανίας",
  "Republic of Moldova": "Δημοκρατία της Μολδαβίας",
  "United States of America": "Ηνωμένες Πολιτείες της Αμερικής",
  "Republic of Turkey": "Δημοκρατία της Τουρκίας",
  "Swiss Confederation": "Ελβετική Συνομοσπονδία",
  "Bosnia and Herzegovina": "Βοσνία και Ερζεγοβίνη",
  "Argentine Republic": "Δημοκρατία της Αργεντινής",
  "United Kingdom of Great Britain": "Ηνωμένο Βασίλειο της Μεγάλης Βρετανίας",
  "Republic of Austria": "Δημοκρατία της Αυστρίας",
  "Portuguese Republic": "Πορτογαλική Δημοκρατία",
  "Republic of the Philippines": "Δημοκρατία των Φιλιππινών",
  "Kingdom of Norway": "Βασίλειο της Νορβηγίας",
  "Taiwan": "Ταϊβάν",
  "Republic of North Macedonia": "Δημοκρατία της Βόρειας Μακεδονίας",
  "Federative Republic of Brazil": "Ομοσπονδιακή Δημοκρατία της Βραζιλίας",
  "People's Republic of China": "Λαϊκή Δημοκρατία της Κίνας",
  "Croatia": "Κροατία",
  "Venezuela": "Βενεζουέλα",
  "State of Qatar": "Κράτος του Κατάρ",
  "Republic of Colombia": "Δημοκρατία της Κολομβίας",
  "French Republic": "Γαλλική Δημοκρατία",
  "Republic of Indonesia": "Δημοκρατία της Ινδονησίας",
  "Ireland": "Ιρλανδία",
  "Republic of Korea": "Δημοκρατία της Κορέας",
};

// N-OTH-02: Greek country names in the English France 2024 list
const COUNTRIES_EN = { "Εσθονία": "Estonia", "Ισπανία": "Spain", "Ουγγαρία": "Hungary", "Καναδάς": "Canada",
  "Γαλλία & Ισπανία": "France & Spain", "Βραζιλία": "Brazil", "Γαλλία": "France", "ΗΠΑ": "USA" };

// chained replacements that each must match exactly once (or n times for a /g regex given as [re, n])
class Chk { constructor(h) { this.h = h; }
  replace(f, r) {
    const re = typeof f === "string" ? null : new RegExp(f.source, f.flags.includes("g") ? f.flags : f.flags + "g");
    const c = re ? (this.h.match(re) || []).length : this.h.split(f).length - 1;
    if (c !== 1 && !(re && f.flags.includes("g") && c > 0)) throw new Error(`"${f}" matched ${c} times`);
    this.h = re ? this.h.replace(re, r) : this.h.split(f).join(r); return this; } }
const chk = h => new Chk(h);
const must = (cond, msg) => { if (!cond) throw new Error(msg); };

export default [
  // ---------------------------------------------------------------- HOME (index.html / indexGreek.html)
  { ids: ["HOME-01", "HOME-06"], why: "Erasmus card date: the meeting was in November 2017 (not 13th November, 2013)",
    files: ["index.html"], find: "13th November, 2013", replace: "November 2017" },
  { ids: ["HOME-01", "HOME-06"], why: "Erasmus card date: the meeting was in November 2017 (not 13 November 2013)",
    files: ["indexGreek.html"], find: "13η Νοεμβρίου, 2013", replace: "Νοέμβριος 2017" },
  { ids: ["HOME-03"], why: "Stray '\".' after the 2nd composition competition title",
    files: ["indexGreek.html"], find: "2ος Διεθνής Διαγωνισμός Σύνθεσης Πρέβεζας\".", replace: "2ος Διεθνής Διαγωνισμός Σύνθεσης Πρέβεζας" },
  { ids: ["HOME-04"], why: "English month on the Greek page",
    files: ["indexGreek.html"], find: "class=\"date\">July, 2024</h6>", replace: "class=\"date\">Ιούλιος 2024</h6>" },
  { ids: ["HOME-05"], why: "Colloquial 'Δεκέμβρης' -> 'Δεκέμβριος', no comma", files: ["indexGreek.html"],
    find: "Δεκέμβρης, 2025", replace: "Δεκέμβριος 2025", count: 2 },
  { ids: ["HOME-06"], why: "One date style on the English home page (as in the 2026 cards: '28 September 2026')",
    files: ["index.html"], apply: h => chk(h)
      .replace("6 - 8 July, 2026", "6–8 July 2026")
      .replace(/December, 2025/g, "December 2025")
      .replace("class=\"date\">July, 2024<", "class=\"date\">July 2024<")
      .replace("1 - 7 July, 2024", "1–7 July 2024")
      .replace("29th May, 2023", "29 May 2023")
      .replace("24th June, 2023", "24 June 2023")
      .replace("29th March, 2019", "29 March 2019")
      .replace("5th October, 2017", "5 October 2017").h },
  { ids: ["HOME-06"], why: "Same date style on the Greek home page (as in the 2026 cards: '28 Σεπτεμβρίου 2026')",
    files: ["indexGreek.html"], apply: h => chk(h)
      .replace("6 - 8 Ιουλίου, 2026", "6–8 Ιουλίου 2026")
      .replace(/1 - 7 Ιουλίου, 2024/, "1–7 Ιουλίου 2024")
      .replace("29η Μαΐου, 2023", "29 Μαΐου 2023")
      .replace("24η Ιουνίου, 2023", "24 Ιουνίου 2023")
      .replace("29η Μαρτίου, 2019", "29 Μαρτίου 2019")
      .replace("5η Οκτωβρίου, 2017", "5 Οκτωβρίου 2017").h },

  // ---------------------------------------------------------------- FEST (previousFestivals*.html)
  { ids: ["FEST-02"], why: "Country table numbering: Finland was '08'; number the 46 rows 01-46",
    files: ["previousFestivals.html", "previousFestivalsGreek.html"], apply: h => {
      let n = 0;
      const out = h.replace(/<div class="serial">\d+<\/div>/g, () => `<div class="serial">${String(++n).padStart(2, "0")}</div>`);
      must(n === 46, `expected 46 numbered rows, found ${n}`);
      return out;
    } },
  { ids: ["FEST-03"], why: "Country names in Greek on the Greek page",
    files: ["previousFestivalsGreek.html"], apply: h => {
      let n = 0;
      const out = h.replace(/(alt="flag">\s*)([^\r\n<]+?)(\s*\r?\n)/g, (m, a, name, b) => {
        const el = COUNTRIES_EL[name.trim()];
        must(el, `no Greek name for "${name}"`);
        n++;
        return a + el + b;
      });
      must(n === 46, `expected 46 countries, found ${n}`);
      return out;
    } },
  { ids: ["FEST-04"], why: "Column header: these are participations (Greek: Συμμετοχές)",
    files: ["previousFestivals.html"], find: "<div class=\"visit\">Visits</div>", replace: "<div class=\"visit\">Participations</div>" },

  // ---------------------------------------------------------------- CHOIR (ourchoir*.html)
  { ids: ["CHOIR-01"], why: "Name: Anelia Stefanova", files: ["ourchoir.html"], find: "Stefanovova", replace: "Stefanova" },
  { ids: ["CHOIR-02"], why: "αρχιμουσικός = conductor", files: ["ourchoir.html"],
    find: "Greek-American archbishop Peter Tiboris", replace: "Greek-American conductor Peter Tiboris" },
  { ids: ["CHOIR-03"], why: "σολφέζ = solfège", files: ["ourchoir.html"],
    find: "theory of music & sophistication", replace: "music theory & solfège" },
  { ids: ["CHOIR-04"], why: "Latin O/A/T/M inside Greek words", files: ["ourchoirGreek.html"], apply: h => chk(h)
      .replace("«Oλος ο κόσμος", "«Όλος ο κόσμος")
      .replace("στην Aίθουσα «Aλεξάνδρα", "στην Αίθουσα «Αλεξάνδρα")
      .replace(/Tριάντη»(\s+)στο Mέγαρο/, "Τριάντη»$1στο Μέγαρο").h },
  { ids: ["CHOIR-05"], why: "Mistranslations (φιλόμουσοι Πρεβεζάνοι, παιδόκοσμος, ανέβασμα, έμψυχο υλικό)",
    files: ["ourchoir.html"], apply: h => chk(h)
      .replace("group of musical presenters with", "group of music-loving citizens of Preveza with")
      .replace("the choral ideal in the Preveza pedagogue and", "the choral ideal among the children of Preveza and")
      .replace(/participation in the upcoming Carmina Burana project by(\s+)Carl Orff,/, "participation in the staging of Carmina Burana by$1Carl Orff,")
      .replace("in the rise of C. Orff's", "in the staging of C. Orff's")
      .replace(/for the(\s+)renewal of their living material\./, "in order to$1renew its membership.").h },
  { ids: ["CHOIR-06"], why: "Errors: 'childrens choir', 'he collaborated', ':Armonia:', 'rcording', 'MILLENIUM', 'second awards'",
    files: ["ourchoir.html"], apply: h => chk(h)
      .replace("2012 childrens choir participated", "2012 the Children's Choir participated")
      .replace("where he collaborated", "where it collaborated")
      .replace(":Armonia: of Preveza", "\"Armonia\" of Preveza")
      .replace("the rcording of", "the recording of")
      .replace("the MILLENIUM events", "the MILLENNIUM events")
      .replace("5 second awards", "5 second prizes").h },
  { ids: ["CHOIR-06"], why: "Spelling MILLENNIUM (as further down the same page)", files: ["ourchoirGreek.html"],
    find: "για το MILLENIUM στον", replace: "για το MILLENNIUM στον" },
  { ids: ["CHOIR-07"], why: "Garbled sentences (Czechoslovakia/Bulgaria; missing full stop and subject)",
    files: ["ourchoir.html"], apply: h => chk(h)
      .replace(/In 1988 it gave concerts in the former(\s+)Czechoslovakia in 1989 and in Bulgaria\./, "In 1988 it gave concerts in the former$1Czechoslovakia and, in 1989, in Bulgaria.")
      .replace("Fortress of Corfu All these years has won", "Fortress of Corfu. All these years it has won").h },
  { ids: ["CHOIR-08", "COND-05"], why: "'Hymn to Liberty' by N. Mantzaros; Alkis Baltas",
    files: ["ourchoir.html"], apply: h => chk(h)
      .replace(/"YMNOS IN ELEFTHERIAN" in music Nik\. Majarou under the(\s+)direction of Mr\. Alkis Balta &/, "\"Hymn to Liberty\", music by N. Mantzaros, under the$1direction of Mr. Alkis Baltas &")
      .replace(/"Hymn(\s+)to Freedom" in the music of Nikolaos Mantzaros/, "\"Hymn$1to Liberty\" in the music of Nikolaos Mantzaros").h },
  { ids: ["CHOIR-09"], why: "Ραδιομέγαρο = Radio House; 'Puccini opera operas'", files: ["ourchoir.html"], apply: h => chk(h)
      .replace("in the Radio Spectrum of ERT", "at the ERT Radio House")
      .replace("in the Puccini opera operas", "in the staging of excerpts from Puccini operas").h },
  { ids: ["CHOIR-11"], why: "Latin T/o in Greek words", files: ["ourchoirGreek.html"], apply: h => chk(h)
      .replace("To 2012 συμμετείχε", "Το 2012 συμμετείχε")
      .replace("To 2014 συμμετείχε στο 10o φεστιβάλ", "Το 2014 συμμετείχε στο 10ο φεστιβάλ")
      .replace("από τον Κo Ανδρόνικο", "από τον κ. Ανδρόνικο").h },
  { ids: ["CHOIR-12"], why: "Greek typos", files: ["ourchoirGreek.html"], apply: h => chk(h)
      .replace("της ελληνκής επικράτειας", "της ελληνικής επικράτειας")
      .replace("Από το 1990 εώς το 2016", "Από το 1990 έως το 2016")
      .replace(/2016 εως σήμερα/, "2016 έως σήμερα")
      .replace("του καταξιωνου μουσικού", "του καταξιωμένου μουσικού")
      .replace("Νικ. Μάτζαρου", "Νικ. Μάντζαρου")
      .replace("μεγάλης ορχήστρα", "μεγάλης ορχήστρας")
      .replace("εκπροσωπόντας", "εκπροσωπώντας")
      .replace("Πρόπαιδική χορωδία", "Προπαιδική χορωδία").h },
  { ids: ["CHOIR-14"], why: "Chronological order: the 1988 item before the 1990 item",
    files: ["ourchoir.html", "ourchoirGreek.html"],
    find: /(<li>\s*<p>\s*(?:In 1990 it won|Το 1990 κατακτά)[\s\S]*?<\/li>)(\s*)(<li>\s*<p>\s*(?:In 1988 it gave|Το 1988 έδωσε)[\s\S]*?<\/li>)/,
    replace: "$3$2$1" },
  { ids: ["CHOIR-13"], why: "The two sections of the children's choir were detached at the end of the page: the Greek closing " +
      "paragraphs move before the chronological list, as on the English page, with the two sections listed right after 'τμήματα:'",
    files: ["ourchoirGreek.html"], apply: h => {
      const ektos = h.match(/\s*<li>\s*<p>\s*(Εκτός από τις συμμετοχές[\s\S]*?)\s*<\/p>\s*<\/li>/);
      must(ektos, "Εκτός item not found");
      const tail = h.match(/\s*<p>\s*Ως ενεργό κομμάτι[\s\S]*?(?=\s*<\/ul>)/);
      must(tail && tail.index > ektos.index, "closing paragraphs not found");
      const today = tail[0].match(/<p>\s*(Σήμερα στην Παιδική[\s\S]*?τμήματα:)\s*<li>\s*<p>\s*(Προπαιδική[\s\S]*?)\s*<\/p>\s*<\/li>\s*<li>\s*<p>\s*(Παιδική χορωδία συναυλιών)\s*<\/p>\s*<\/li>\s*<\/p>/);
      must(today, "'Σήμερα ... τμήματα:' block not found");
      const paras = tail[0].slice(0, today.index).trim(); // the two <p> before "Σήμερα"
      const I = "\r\n                        ";
      const block = `${I}<p>${I}    ${ektos[1]}${I}</p>${I}${paras.replace(/\r\n {28}/g, "\r\n                        ")}` +
        `${I}<p>${I}    ${today[1]}${I}</p>${I}<ul>${I}    <li>${I}        <p>${I}            ${today[2]}${I}        </p>${I}    </li>` +
        `${I}    <li>${I}        <p>${I}            ${today[3]}${I}        </p>${I}    </li>${I}</ul>`;
      let out = h.slice(0, tail.index) + h.slice(tail.index + tail[0].length); // remove the closing block (later in the page first)
      out = out.slice(0, ektos.index) + out.slice(ektos.index + ektos[0].length);
      const at = out.match(/<h2 class="pb-30">Παιδική Χορωδία Αρμονία<\/h2>\s*<p>[\s\S]*?<\/p>/);
      must(at, "children's choir intro not found");
      const pos = at.index + at[0].length;
      return out.slice(0, pos) + block + out.slice(pos);
    } },

  // ---------------------------------------------------------------- COND (ourconductor*.html)
  { ids: ["COND-01"], why: "Town: Neuchâtel", files: ["ourconductor.html"], find: "Niustelle of Switzerland", replace: "Neuchâtel, Switzerland" },
  { ids: ["COND-02"], why: "σολφέζ = solfège; 'με πρωτοβουλία της' = on her initiative", files: ["ourconductor.html"], apply: h => chk(h)
      .replace("on its own initiative", "on her initiative")
      .replace("music theory, solo and piano", "music theory, solfège and piano").h },
  { ids: ["COND-03"], why: "Missing space; Boys' Choir", files: ["ourconductor.html"], apply: h => chk(h)
      .replace("until today.She also", "until today. She also")
      .replace("Boy's Choir", "Boys' Choir").h },
  { ids: ["COND-03"], why: "Missing space", files: ["ourconductorGreek.html"], find: "σήμερα.Παράλληλα", replace: "σήμερα. Παράλληλα" },
  { ids: ["COND-04"], why: "Latin N/T/o in Greek words; typos in town names; διδάκτωρ", files: ["ourconductorGreek.html"], apply: h => chk(h)
      .replace("- N. Μάντζαρου", "- Ν. Μάντζαρου")
      .replace("To 2016 τελείωσε", "Το 2016 τελείωσε")
      .replace("Αρέρτσο", "Αρέτσο")
      .replace("Νιυρεγκιχάζα", "Νιρεγκιχάζα")
      .replace("υποψήφια διδάκτορ ", "υποψήφια διδάκτωρ ").h },
  { ids: ["COND-05"], why: "'Hymn to Liberty' – N. Mantzaros (as on Our Choir)", files: ["ourconductor.html"],
    find: /"Hymn of Freedom" - N\.(\s+)Mantzarou/, replace: "\"Hymn to Liberty\" - N.$1Mantzaros" },

  // ---------------------------------------------------------------- N-OTH: France 2024 (+ its copy berlin2024*)
  { ids: ["N-OTH-01"], why: "Closing paragraph copied from the 2019 CFN article: removed",
    files: EN_FRANCE, find: /\s*<p>\s*The International Choral Festival of Preveza thanks CFN[\s\S]*?<\/p>/, replace: "" },
  { ids: ["N-OTH-01"], why: "Closing paragraph copied from the 2019 CFN article: removed",
    files: EL_FRANCE, find: /\s*<p>\s*Το Διεθνές Χορωδιακό Φεστιβάλ Πρέβεζας ευχαριστεί το CFN[\s\S]*?<\/p>/, replace: "" },
  { ids: ["N-OTH-02"], why: "Country names in English on the English page", files: EN_FRANCE, apply: h => {
      let n = 0;
      const out = h.replace(/\((Γαλλία & Ισπανία|Εσθονία|Ισπανία|Ουγγαρία|Καναδάς|Βραζιλία|Γαλλία|ΗΠΑ)\)/g, (m, c) => (n++, `(${COUNTRIES_EN[c]})`));
      must(n === 11, `expected 11 countries, found ${n}`);
      return out;
    } },
  { ids: ["N-OTH-03"], why: "Choir name: Armonia", files: EN_FRANCE, find: "\"Harmonia,\" has returned", replace: "\"Armonia,\" has returned" },
  { ids: ["N-OTH-04"], why: "Pianist's surname: Apostolidou / Αποστολίδου, as in the choir's 2026 press release",
    files: EN_FRANCE, find: "Apostolidis", replace: "Apostolidou" },
  { ids: ["N-OTH-04"], why: "Pianist's surname: Αποστολίδου, as in the choir's 2026 press release",
    files: EL_FRANCE, find: /Αποστολίδη\)/, replace: "Αποστολίδου)" },
  { ids: ["N-OTH-05"], why: "Accents (κατά ×2); 'των πόλεων όπου τραγούδησε'", files: EL_FRANCE, apply: h => chk(h)
      .replace("κατα γενική ομολογία", "κατά γενική ομολογία")
      .replace("ορχήστρες κατα τις 2", "ορχήστρες κατά τις 2")
      .replace("των πόλεων που τραγούδησε", "των πόλεων όπου τραγούδησε").h },

  // ---------------------------------------------------------------- N-OTH: CFN
  { ids: ["N-OTH-09"], why: "Florilège; Marktoberdorf", files: ["cfn.html"], apply: h => chk(h)
      .replace("Florilége", "Florilège").replace("Markrtoberdorf", "Marktoberdorf").h },
  { ids: ["N-OTH-07", "N-OTH-08", "N-OTH-09", "N-OTH-10"], why: "Chamber Choir Competition (Marktoberdorf), Basel = Βασιλεία, " +
      "Florilège, vision = όραμα, Cork International Choral Festival, article of 'Διαγωνισμός'", files: ["cfnGreek.html"], apply: h => chk(h)
      .replace("του εύρους της όρασής της", "του εύρους του οράματός της")
      .replace(/το Κορκ(\s+)Χορωδιακό Φεστιβάλ, Ιρλανδία/, "το Cork$1International Choral Festival, Ιρλανδία")
      .replace("(Βασιλέας) Ελβετία", "(Βασιλεία) Ελβετία")
      .replace("Florilége", "Florilège")
      .replace(/το Διεθνής Διαγωνισμός Εκκλησιαστικής Χορωδίας,(\s+)\(Markrtoberdorf\)/, "ο Διεθνής Διαγωνισμός Χορωδιών Δωματίου,$1(Marktoberdorf)")
      .replace("το Διαγωνισμός Χορωδιών Tolosa", "ο Διαγωνισμός Χορωδιών Tolosa").h },

  // ---------------------------------------------------------------- N-OTH: Erasmus
  { ids: ["N-OTH-11"], why: "The meeting had already taken place: past tense; '10th and 11th'", files: ["erasmus.html"], apply: h => chk(h)
      .replace("10 th and 11 th", "10th and 11th")
      .replace("The meeting will be attended by", "The meeting was attended by")
      .replace("agenda will consist of", "agenda consisted of").h },
  { ids: ["N-OTH-11"], why: "The meeting had already taken place: past tense", files: ["erasmusGreek.html"], apply: h => chk(h)
      .replace("Στη συνάντηση θα παραστούν", "Στη συνάντηση παρέστησαν")
      .replace("το πρόγραμμά της θα αποτελείται από", "το πρόγραμμά της αποτελούνταν από").h },

  // ---------------------------------------------------------------- N-OTH: Saint Petersburg
  { ids: ["N-OTH-03"], why: "Choir name: Armonia", files: ["saintpeter.html"], find: "the Mixed Choir of Preveza \"Harmony\"", replace: "the Mixed Choir of Preveza \"Armonia\"" },
  { ids: ["N-OTH-12"], why: "Misplaced relative clause", files: ["saintpeter.html"],
    find: /Finally, all members of the jury spoke with particularly flattering comments, who were 6 professors from(\s+)various universities in Russia, Lithuania, Slovakia, and Croatia\./,
    replace: "Finally, all six members of the jury, professors from$1various universities in Russia, Lithuania, Slovakia and Croatia, were full of praise." },
  { ids: ["N-OTH-12"], why: "Misplaced relative clause", files: ["saintpeterGreek.html"],
    find: /Τέλος, όλα τα μέλη της επιτροπής μίλησαν με ιδιαίτερα επαινετικά σχόλια, οι οποίοι ήταν 6 καθηγητές από(\s+)διάφορα πανεπιστήμια της Ρωσίας, της Λιθουανίας, της Σλοβακίας και της Κροατίας\./,
    replace: "Τέλος, και τα έξι μέλη της κριτικής επιτροπής, καθηγητές από$1διάφορα πανεπιστήμια της Ρωσίας, της Λιθουανίας, της Σλοβακίας και της Κροατίας, εξέφρασαν ιδιαίτερα επαινετικά σχόλια." },

  // ---------------------------------------------------------------- N-OTH: December 2025
  { ids: ["N-OTH-13"], why: "Opening quotation mark missing", files: ["report091225.html"],
    find: "Priority to breastfeeding – Creating", replace: "“Priority to breastfeeding – Creating" },
  { ids: ["N-OTH-13"], why: "Opening quotation mark missing", files: ["report091225Greek.html"],
    find: "Προτεραιότητα στο θηλασμό – Δημιουργία", replace: "«Προτεραιότητα στο θηλασμό – Δημιουργία" },
  { ids: ["N-OTH-14"], why: "UK spelling, as in the 2026 posts", files: ["report091225.html"], apply: h => chk(h)
      .replace("had the honor of", "had the honour of")
      .replace("who honored the event", "who honoured the event")
      .replace("in favor of", "in favour of")
      .replace(/organized by/g, "organised by")
      .replace("Municipal Theater of Tyrnavos", "Municipal Theatre of Tyrnavos")
      .replace("present a program featuring", "present a programme featuring").h },
];
