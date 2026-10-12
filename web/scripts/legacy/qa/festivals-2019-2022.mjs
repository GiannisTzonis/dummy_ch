// Proofreading review fixes (approved 2026-10-12): F19, F21, F22 (festival pages 2019, 2021, 2022).
// The participating-choir texts shown on /festival/2019 and /festival/2022 come from the 2022 page
// (app/content/choirs.ts, source festivals/2022), so their fixes go into single-2022*.html. Their
// headings are picked from all copies (registry "fullest" name), so heading fixes are applied to the
// 2019 and the 2022 copies alike. The 2019 results were copied onto the 2022 page: fixed on both.
const EN19 = ["single-2019.html"], EL19 = ["single-2019Greek.html"];
const EN21 = ["single-2021.html"], EL21 = ["single-2021Greek.html"];
const EN22 = ["single-2022.html"], EL22 = ["single-2022Greek.html"];
const EN = [...EN19, ...EN22], EL = [...EL19, ...EL22];

// a phrase as a RegExp in which every space matches any run of whitespace (legacy line breaks)
const R = (s, flags = "") => new RegExp(s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/ /g, "\\s+"), flags);

// apply fn to the <ol> that follows the results heading matching `head`
const inList = (h, head, fn) => {
  const m = h.match(head); if (!m) throw new Error(`heading ${head} not found`);
  const a = h.indexOf("<ol>", m.index), b = h.indexOf("</ol>", a);
  if (a < 0 || b < 0) throw new Error(`list after ${head} not found`);
  return h.slice(0, a) + fn(h.slice(a, b)) + h.slice(b);
};
// apply fn to the results part of the page (after the Medals heading)
const inResults = (h, fn) => {
  const i = h.search(/<h2>(Medals|Μετάλλια)<\/h2>/); if (i < 0) throw new Error("no Medals heading");
  return h.slice(0, i) + fn(h.slice(i));
};
const must = (s, re, to) => { if (!re.test(s)) throw new Error(`no match for ${re}`); return s.replace(re, to); };

// Category A: the conductors of East Sarajevo (Rade Radović) and Crescendo (Žiga Kert) were swapped
const swapCatA = head => h => inList(h, head, ol => {
  if ((ol.match(/Žiga Kert|Rade Radović/g) || []).length !== 2) throw new Error("Category A: expected two conductor names");
  return ol.replace(/Žiga Kert|Rade Radović/g, n => n === "Žiga Kert" ? "Rade Radović" : "Žiga Kert");
});

// Category F: Serebrovsky choir -> its conductor Julia Polyanovskaya; Solartissimo -> Nikos St. Efthymiadis,
// without the stray "(D1)"; the list re-sorted by score (certificate of attendance last)
const fixCatF = (head, fixLi) => h => inList(h, head, ol => {
  const lis = [...ol.matchAll(/<li[\s>][\s\S]*?<\/li>/g)];
  if (lis.length !== 5) throw new Error(`Category F: ${lis.length} entries`);
  const score = s => { const m = s.match(/(\d+)[.,](\d+)\s*(Points|Βαθμοί)/); return m ? +`${m[1]}.${m[2]}` : -1; };
  const fixed = lis.map(m => fixLi(m[0]));
  const sorted = fixed.map((s, i) => ({ s, i })).sort((x, y) => score(y.s) - score(x.s) || x.i - y.i).map(x => x.s);
  let out = "", at = 0;
  lis.forEach((m, i) => { out += ol.slice(at, m.index) + sorted[i]; at = m.index + m[0].length; });
  return out + ol.slice(at);
});
const catFEn = li =>
  /Serebrovsky/.test(li) ? must(li, /Conductor: Nemanja Savic/, "Conductor: Julia Polyanovskaya")
  : /Solartissimo/.test(li) ? must(must(li, /Conductor: Julia Polyanovskaya/, "Conductor: Nikos St. Efthymiadis"), / \(D1\)/, "")
  : li;
const catFEl = li =>
  /Serebrovsky/.test(li) ? must(li, /Διευθυντής: Nemanja Savić/, "Διευθύντρια: Julia Polyanovskaya")
  : /Solartissimo/.test(li) ? must(li, /Διευθ(?:υντής|ύντρια): Julia Polyanovskaya/, "Διευθυντής: Νίκος Στ. Ευθυμιάδης").replace(/ \(Δ1\)/, "")
  : li;

// Greek results: label "Διευθυντής" / "Διευθύντρια" by the conductor's gender
const genderLabels = h => inResults(h, r => r
  .replace(/Διευθυντής:(\s+)(Βασιλική Κατσούκα|Maria Gyuris|Delima Simamora|Anna Bramska|Δήμητρα Πίτσου|Anita Pavkovič)/g, "Διευθύντρια:$1$2")
  .replace(/Διευθύντρια:(\s+)(Νίκος Στ\. Ευθυμιάδης)/g, "Διευθυντής:$1$2"));

// Marco Antonio García de Paz: his Greek biography (as on the 2019 Greek page) was missing from the
// 2021 Greek jury; only his photo was left, inside Klaus-Jürgen Etzold's block
const GARCIA_EL = `
          </div>
        </div>
      </div>
      <hr />
      <div class="section-top-border text-right">
        <h3 class="mb-30">Marco Antonio García de Paz</h3>
        <div class="row">
          <div class="col-md-9">
            <p>
              Ο Marco Antonio García de Paz αποφοίτησε με τις καλύτερες
              βαθμολογίες στη διεύθυνση χορωδίας στο Ανώτατο Κέντρο Μουσικής
              της Χώρας των Βάσκων (Musikene). Ιδρυτής και ηγέτης της χορωδίας
              El León de Oro, τα εικοσιδύο χρόνια ύπαρξης του ο García de Paz
              έχει αναπτύξει μια εκτενή διεθνή καριέρα με το συγκρότημά του,
              πραγματοποιώντας έναν μεγάλο αριθμό συναυλιών στις ΗΠΑ, την
              Αφρική και αρκετές ευρωπαϊκές χώρες, σημαντικά βραβεία και
              ηχογραφήσεις με μεγάλες εταιρείες ηχογραφήσεων.
              <br />
              <br />
              Πρόσφατα, ο García de Paz συμμετείχε ως κριτής στους
              σημαντικότερους διαγωνισμούς τραγουδιού χορωδίας στην Ισπανία
              και την Ευρώπη. Επιπλέον, δίνει μαθήματα και εργαστήρια σχετικά
              με τη διεύθυνση χορωδίας και το "ανοικτό τραγούδι" τόσο σε
              εθνικό όσο και σε διεθνές επίπεδο, σε πολλές ευρωπαϊκές χώρες.
              Το 2015 προσκλήθηκε να διευθύνει τη Χορωδία της Radio Televisión
              Española (OCRTVE) σε ένα κονσέρτο στο Monumental Theater της
              Μαδρίτης, το οποίο μεταδόθηκε ζωντανά από την Radio Clásica της
              Radio Nacional de España.
              <br />
              <br />
              Καθ' όλη τη διάρκεια αυτού του έτους έχει συνεργαστεί με άλλες
              επαγγελματικές χορωδίες της χώρας του, όπως η Χορωδία της
              Κοινότητας της Μαδρίτης (ORCAM) και η Εθνική Χορωδία της
              Ισπανίας (CNE). Είναι κύριος καλεσμένος διευθυντής της Νεανικής
              Χορωδίας της Ανδαλουσίας (JCA). Οι άμεσες του επαγγελματικές
              υποχρεώσεις περιλαμβάνουν δεσμεύσεις στην Ισπανία, την Ιταλία,
              τη Γαλλία, τη Βουλγαρία ή την Ελλάδα
            </p>`.replace(/\n/g, "\r\n");

export default [
  // ================================================================= results 2019 (copied onto 2022)
  { ids: ["F19-01", "F22-02"], why: "Category A: conductors swapped (Rade Radović conducts East Sarajevo, Žiga Kert conducts Crescendo)",
    files: EN, apply: swapCatA(/Category A \( Mixed Choirs \)/) },
  { ids: ["F19-01", "F22-02"], why: "Category A: conductors swapped (Rade Radović conducts East Sarajevo, Žiga Kert conducts Crescendo)",
    files: EL, apply: swapCatA(/Κατηγορία Α \(Μικτές Χορωδίες\)/) },
  { ids: ["F19-02", "F19-03", "F19-04", "F22-02"], why: "Category F: Serebrovsky choir's conductor is Julia Polyanovskaya, Solartissimo's is Nikos St. Efthymiadis (no D1 in this category); list re-sorted by score",
    files: EN, apply: fixCatF(/Category F \(Spiritual/, catFEn) },
  { ids: ["F19-02", "F19-03", "F19-04", "F19-32", "F22-02"], why: "Category ΣΤ: Serebrovsky choir's conductor is Julia Polyanovskaya, Solartissimo's is Nikos St. Efthymiadis (no Δ1 in this category); list re-sorted by score",
    files: EL, apply: fixCatF(/Κατηγορία ΣΤ \(Πνευματικές/, catFEl) },
  { ids: ["F19-32", "F22-02"], why: "Greek results: Διευθυντής / Διευθύντρια by the conductor's gender", files: EL, apply: genderLabels },

  { ids: ["F19-06", "F22-05"], why: "Typo 'Lasrissa'", files: EN, find: R("Modern Conservatory of Lasrissa"), replace: "Modern Conservatory of Larissa", count: 2 },
  { ids: ["F19-07", "F22-04"], why: "'1' missing in '1st prize'", files: EN, find: "Medal, st prize", replace: "Medal, 1st prize", count: 3 },
  { ids: ["F19-08", "F22-15"], why: "Greek capital Ε in the English heading 'Category E'", files: EN, find: "Category Ε (Youth choirs)", replace: "Category E (Youth choirs)" },
  { ids: ["F19-11"], why: "Missing space 'Academy,East Sarajevo'", files: EN, find: R("Music Academy,East Sarajevo"), replace: "Music Academy, East Sarajevo" },
  { ids: ["F19-19"], why: "'Certification of Attendance' -> 'Certificate of Attendance' (as elsewhere in the list)", files: EN, find: "Certification of Attendance", replace: "Certificate of Attendance" },
  { ids: ["F19-20"], why: "Plain transliteration of Greek names in the results (no Greek accents on Latin letters)", files: EN,
    apply: h => inResults(h, r => must(must(must(r, /Vasilikí Katsoúka/, "Vasiliki Katsouka"), /Níkos St\. Efthymiádis/, "Nikos St. Efthymiadis"), /Dímitra Pítsou – Diamantopoúlou/, "Dimitra Pitsou – Diamantopoulou")) },
  { ids: ["F22-03"], why: "Stray 'm=' in 'Gold Medal'", files: EN22, find: "Gold m=Medal", replace: "Gold Medal" },

  { ids: ["F19-29"], why: "'Ενορχηστρωμένες χορωδίες' (orchestrated) -> Χορωδίες Δωματίου (chamber choirs)", files: EL19,
    find: R("Κατηγορία Δ (Ενορχηστρωμένες Χορωδίες / Φωνητικά σύνολα)"), replace: "Κατηγορία Δ (Χορωδίες Δωματίου / Φωνητικά σύνολα)" },
  { ids: ["F19-29"], why: "'Ενορχηστρωμένη Χορωδία' -> Χορωδία Δωματίου", files: EL19, find: R("Ενορχηστρωμένη Χορωδία του Τμήματος"), replace: "Χορωδία Δωματίου του Τμήματος" },
  { ids: ["F19-29"], why: "'Επιμελητήριο Χορωδίας' (chamber of commerce) -> Χορωδία Δωματίου", files: EL19,
    find: R("απονέμεται στο Επιμελητήριο Χορωδίας της Μουσικής"), replace: "απονέμεται στη Χορωδία Δωματίου της Μουσικής" },
  { ids: ["F19-30"], why: "Category G is Ζ in Greek (Γ = C)", files: EL19, find: R("Κατηγορία Γ (Ελεύθερο πρόγραμμα"), replace: "Κατηγορία Ζ (Ελεύθερο πρόγραμμα" },
  { ids: ["F19-31"], why: "Gender agreement 'Χρυσή Μετάλλιο' -> Χρυσό Μετάλλιο (results)", files: EL19,
    apply: h => inResults(h, r => { if ((r.match(/Χρυσή Μετάλλιο/g) || []).length !== 3) throw new Error("expected 3"); return r.replace(/Χρυσή Μετάλλιο/g, "Χρυσό Μετάλλιο"); }) },
  { ids: ["F19-37"], why: "'Προσφωνητικό' -> Φωνητικό Σύνολο", files: EL19, find: "Γυναικείο Προσφωνητικό Σύνολο", replace: "Γυναικείο Φωνητικό Σύνολο" },
  { ids: ["F22-07"], why: "Sveta Trojica: one spelling (Σβέτα Τρόιτσα, as in the heading)", files: EL, find: "Σβέτα Τρογιτσά", replace: "Σβέτα Τρόιτσα" },
  { ids: ["F19-40"], why: "Płock is Πλοκ (results)", files: EL19, find: "Πλότσκ", replace: "Πλοκ", count: 2 },
  { ids: ["F19-40"], why: "Spišská Nová Ves: Σπίσκα Νόβα Βες (accent)", files: EL19, find: "Σπισκά Νόβα Βες", replace: "Σπίσκα Νόβα Βες" },

  // 2022 Greek results: category letters in Greek (Latin C, D and Γ for G were mixed in)
  { ids: ["F22-15"], why: "Greek category letters: C -> Γ", files: EL22, find: "Κατηγορία C (Χορωδίες Παιδιών)", replace: "Κατηγορία Γ (Χορωδίες Παιδιών)" },
  { ids: ["F22-09", "F22-15"], why: "'Χορωδίες Επιμέλειας' -> Χορωδίες Δωματίου (chamber choirs); D -> Δ", files: EL22,
    find: "Κατηγορία D (Χορωδίες Επιμέλειας / Φωνητικά Σύνολα)", replace: "Κατηγορία Δ (Χορωδίες Δωματίου / Φωνητικά Σύνολα)" },
  { ids: ["F22-15"], why: "Greek subcategory letters (D1/D2 -> Δ1/Δ2)", files: EL22,
    apply: h => inResults(h, r => { if ((r.match(/\(D[12]\)/g) || []).length !== 5) throw new Error("expected 5"); return r.replace(/\(D([12])\)/g, "(Δ$1)"); }) },
  { ids: ["F22-15"], why: "Category G is Ζ in Greek (Γ = C)", files: EL22, find: R("Κατηγορία Γ (Ελεύθερο πρόγραμμα αυθεντικής"), replace: "Κατηγορία Ζ (Ελεύθερο πρόγραμμα αυθεντικής" },
  { ids: ["F22-10"], why: "Pueri et Puellae Cantores Plocenses: full name, Πλοκ; Ex-aequo dropped (Ισόπαλο, as for Yamuger)", files: EL22,
    find: /Χορωδία Παιδιών και Κοριτσιών "Cantores Plocenses", Πλόκ,(\s+Πολωνία\s+<br \/>\s+Διευθύντρια: Anna Bramska\s+<br \/>\s+83\.00 Βαθμοί\s+<br \/>\s+Ασημένιο Μετάλλιο)/,
    replace: "Χορωδία Pueri et Puellae Cantores Plocenses, Πλοκ,$1 Ισόπαλο" },
  { ids: ["F22-10"], why: "Pueri et Puellae Cantores Plocenses: full name, Πλοκ", files: EL22,
    find: "Χορωδία Παιδιών και Κοριτσιών Cantores Plocenses, Πλόκ,", replace: "Χορωδία Pueri et Puellae Cantores Plocenses, Πλοκ," },
  { ids: ["F22-07"], why: "Kalisz: one spelling (Κάλις, as in the choir heading)", files: EL22, find: R("της Πόζναν στο Καλίσι,"), replace: "της Πόζναν στο Κάλις," },
  { ids: ["F22-07"], why: "Yekaterinburg: one spelling (Εκατερίνμπουργκ, as in the choir heading)", files: EL22, find: "Πανεπιστήμιο, Αικατερίνμπουργκ, Ρωσία", replace: "Πανεπιστήμιο, Εκατερίνμπουργκ, Ρωσία", count: 2 },

  // ================================================================= 2019 page
  { ids: ["F19-21"], why: "Greek sentence cut: 'είτε ...' without its second option (English: or as competitive choirs)", files: EL19,
    find: R("σε όλες τις εκδηλώσεις του φεστιβάλ. </p>"), replace: "σε όλες τις\r\n                                εκδηλώσεις του φεστιβάλ, είτε ως διαγωνιζόμενες χορωδίες.\r\n                            </p>" },
  { ids: ["F21-09"], why: "Garbled 'honored to have internationally been acclaimed experts of the field overseas' (same sentence as on the 2021 page)", files: EN19,
    find: R("we have been honored to have internationally been acclaimed experts of the field overseas."), replace: "we have been honored to host internationally acclaimed experts from abroad." },

  // East Sarajevo choir (its own text on each page, not in the shared registry)
  { ids: ["F19-11"], why: "Missing space 'etc.The'", files: EN, find: "Croatia, etc.The ensemble", replace: "Croatia, etc. The ensemble" },
  { ids: ["F19-13"], why: "Typos 'Helsinborg', 'Sebia'", files: EN, apply: h => must(must(h, R("such as Helsinborg, Sweden"), "such as Helsingborg, Sweden"), R("Festival of Niš, Sebia,"), "Festival of Niš, Serbia,") },
  { ids: ["F19-13"], why: "Typo 'Helsinborg'", files: EL22, find: "της Helsinborg, Σουηδία", replace: "της Helsingborg, Σουηδία" },
  { ids: ["F19-40"], why: "Monosyllable without accent: Νις", files: EL19, find: "Νίς", replace: "Νις", count: 3 },
  { ids: ["F19-40", "F22-06"], why: "Monosyllable without accent: Νις", files: EL22, find: "Νίς", replace: "Νις", count: 3 },

  // ================================================================= shared choir texts (2022 page = source)
  // headings (registry name = the "fullest" heading of all copies: fixed on both pages)
  { ids: ["F19-09"], why: "Doubled opening quote in the heading", files: EN19, find: "<h3>““Trakiiska Lira” Choir", replace: "<h3>“Trakiiska Lira” Choir" },
  { ids: ["F19-11"], why: "Missing space 'Gojdič,Vranov' (heading)", files: EN, find: R("bl. P. P. Gojdič,Vranov nad"), replace: "bl. P. P. Gojdič, Vranov nad" },
  { ids: ["F19-23"], why: "Nonsense Greek heading ('Επιμέλειας' / 'Εφημερίδα'): KGBL Chamber Choir", files: EL19,
    find: /<h3>\s*Χορωδία Επιμέλειας και Μπαλέτου του Κονσερβατορίου Μουσικής\s+της Λιουμπλιάνα, Σλοβενία\s*<\/h3>/,
    replace: "<h3>Χορωδία Δωματίου του Κονσερβατορίου Μουσικής και Μπαλέτου της Λιουμπλιάνας, Λιουμπλιάνα, Σλοβενία</h3>" },
  { ids: ["F19-22", "F19-23"], why: "Nonsense Greek heading ('Εφημερίδα' = newspaper): KGBL Chamber Choir", files: EL22,
    find: /<h3>\s*Εφημερίδα Μουσικής και Μπαλέτου του Μουσικού Κονσερβατορίου,\s+Λιουμπλιάνα, Σλοβενία\s*<\/h3>/,
    replace: "<h3>Χορωδία Δωματίου του Κονσερβατορίου Μουσικής και Μπαλέτου της Λιουμπλιάνας, Λιουμπλιάνα, Σλοβενία</h3>" },
  { ids: ["F19-35"], why: "'Ορχηστρική Χορωδία' (orchestral) is wrong: the choir's name is Charité Chor", files: EL19,
    find: "<h3>Ορχηστρική Χορωδία Charité, Βερολίνο, Γερμανία</h3>", replace: "<h3>Charité Chor, Βερολίνο, Γερμανία</h3>" },
  { ids: ["F19-35", "F22-06"], why: "The choir's name is Charité Chor", files: EL22,
    find: /<h3>\s*Χορωδιακό σύνολο της Κλινικής Charité, Βερολίνο, Γερμανία\s*<\/h3>/, replace: "<h3>Charité Chor, Βερολίνο, Γερμανία</h3>" },
  { ids: ["F19-40"], why: "Płock is Πλοκ (heading)", files: EL19, find: R("Cantores Plocenses, Πλόκ, Πολωνία"), replace: "Cantores Plocenses, Πλοκ, Πολωνία" },
  { ids: ["F19-40"], why: "Płock is Πλοκ (heading and text)", files: EL22, find: "Πουλόκ", replace: "Πλοκ", count: 3 },
  { ids: ["F19-40"], why: "Spišská Nová Ves: Σπίσκα Νόβα Βες (heading and text)", files: EL22, find: R("Σπίσκα Νέα Βέσ"), replace: "Σπίσκα Νόβα Βες", count: 3 },
  { ids: ["F22-07"], why: "Sveta Trojica: one spelling (Σβέτα Τρόιτσα), heading", files: EL22, find: R("«Vox Angelica», Σβέτα Τρογκίκα,"), replace: "«Vox Angelica», Σβέτα Τρόιτσα," },
  { ids: ["F19-26"], why: "The choir is Greek Catholic, not Orthodox (heading as on the 2019 page)", files: EL22,
    find: /<h3>\s*Ορθόδοξη Χορωδία Εκκλησίας Ευλογημένου P\. P\. Gojdič, Βρανοβ\s+ναντ Τοπλού, Σλοβακία\s*<\/h3>/,
    replace: "<h3>Χορωδία της Ελληνοκαθολικής Εκκλησίας bl. P. P. Gojdič, Βράνοβ ναντ Τοπλέου, Σλοβακία</h3>" },
  { ids: ["F22-07"], why: "Kalisz: one spelling (Κάλις)", files: EL22, find: R("της Πόζναν στην Καλίστη, Καλίστη, Πολωνία"), replace: "της Πόζναν στο Κάλις, Κάλις, Πολωνία" },

  // English texts
  { ids: ["F19-10"], why: "Bracket not closed", files: EN22, find: R("the Czech Republic, Serbia, etc. Its"), replace: "the Czech Republic, Serbia, etc.). Its" },
  { ids: ["F19-11"], why: "Missing space 'Rzeszów.It'", files: EN22, find: "Rzeszów.It has", replace: "Rzeszów. It has" },
  { ids: ["F19-11"], why: "Missing space '“Crescendo”was'", files: EN22, find: "Mixed Choir “Crescendo”was founded", replace: "Mixed Choir “Crescendo” was founded" },
  { ids: ["F19-12"], why: "Doubled period", files: EN22, find: "music school in Ptuj..", replace: "music school in Ptuj." },
  { ids: ["F19-12"], why: "Doubled period", files: EN22, find: "<b>Mrs. Hadar Zlatin.</b>.", replace: "<b>Mrs. Hadar Zlatin</b>." },
  { ids: ["F19-12"], why: "Doubled period", files: EN22, find: "<b>Mr. Luka Vetrih.</b>.", replace: "<b>Mr. Luka Vetrih</b>." },
  { ids: ["F19-13"], why: "Typo 'Valetta'", files: EN22, find: R("Competition in Valetta, Malta"), replace: "Competition in Valletta, Malta" },
  { ids: ["F19-13"], why: "'Mrs .Vassiliki' -> 'Mrs. Vassiliki'", files: EN22, find: "<b>Mrs .Vassiliki Katsouka", replace: "<b>Mrs. Vassiliki Katsouka" },
  { ids: ["F19-14"], why: "Polish instrumental case copied: the bassoonist is Nikodem Antosik", files: [...EN22, ...EL22], find: "Nikodem Antosikiem", replace: "Nikodem Antosik" },
  { ids: ["F19-15"], why: "Machine-translated sentences ('militates', 'compiles ... ceremonial', 'while In 2013')", files: EN22,
    find: R("It militates next to the church of the Death of the Blessed Virgin Mary in Vranov - Čemerné. It compiles Christian believers’ community of Greek Catholic and Roman Catholic ceremonial."),
    replace: "It is based at the church of the Dormition of the Blessed Virgin Mary in Vranov - Čemerné. It brings together a community of Christian believers of the Greek Catholic and Roman Catholic rites." },
  { ids: ["F19-15"], why: "'while In 2013' -> 'while in 2013'", files: EN22, find: R("tape recordings while In 2013"), replace: "tape recordings while in 2013" },
  { ids: ["F19-16"], why: "2016 was the 62nd Cork International Choral Festival (2019 = 65th, as the KGBL text says)", files: EN22, find: R("during the 60th Cork International Choral Festival"), replace: "during the 62nd Cork International Choral Festival" },
  { ids: ["F19-16"], why: "2016 was the 62nd Cork International Choral Festival (2019 = 65th)", files: EL22, find: R("στην Ιρλανδία κατά το 60ο"), replace: "στην Ιρλανδία κατά το 62ο" },
  { ids: ["F19-18"], why: "Year repeated; venue is the Odeon of Herodes Atticus", files: EN22,
    find: R("and also singing in 2012 at Herodion Atticus Theater with the Greek famous composer, Dionissis Savvopoulos in 2012."),
    replace: "and also singing at the Odeon of Herodes Atticus with the Greek famous composer, Dionissis Savvopoulos in 2012." },
  { ids: ["F19-18"], why: "Same in Greek: year repeated, garbled venue name", files: EL22,
    find: R("και το 2012 στο Ηρώδειο Θέατρο του Ηρωδείου Αττικού με τον διάσημο Έλληνα συνθέτη, Διονύση Σαββόπουλο το 2012."),
    replace: "και στο Ωδείο Ηρώδου του Αττικού με τον διάσημο Έλληνα συνθέτη, Διονύση Σαββόπουλο, το 2012." },
  { ids: ["F19-20"], why: "Plain transliteration (no Greek accents on Latin letters)", files: EN22, find: "<b>Mrs Dímitra Pítsou - Diamantopoúlou</b>", replace: "<b>Mrs Dimitra Pitsou - Diamantopoulou</b>" },

  // Greek texts
  { ids: ["F19-22", "F19-39"], why: "'Εφημερίδα' (newspaper) / 'Καμαρινή' for the KGBL Chamber Choir; 'απαιτητικά και απαιτητικά'", files: EL22,
    apply: h => must(must(must(h,
      R("Η Εφημερίδα Μουσικής και Μπαλέτου του Μουσικού Κονσερβατορίου ιδρύθηκε"), "Η Χορωδία Δωματίου του KGBL ιδρύθηκε"),
      R("Η Καμαρινή Χορωδία, που"), "Η Χορωδία Δωματίου, που"),
      R("τραγουδήσουν απαιτητικά και απαιτητικά χορωδιακά"), "τραγουδήσουν δύσκολα και απαιτητικά χορωδιακά") },
  { ids: ["F19-24"], why: "'Naša pesem' mistranslated as 'our tasty song'", files: EL22, find: R("\"Η Νόστιμη μας Τραγουδι\""), replace: "\"Naša pesem\" (\"Το τραγούδι μας\")" },
  { ids: ["F19-25"], why: "Garbled competition name (Fleischmann International Trophy, Cork International Choral Festival)", files: EL22,
    find: R("στο Διαγωνισμό Τροπαίου Διεθνούς Φεστιβάλ Χορωδιακής Συναυλίας του 65ου Διεθνούς Φεστιβάλ Χορωδιακής Κορκ, Ιρλανδία (2019)."),
    replace: "στον Διαγωνισμό Fleischmann International Trophy του 65ου Cork International Choral Festival, Ιρλανδία (2019)." },
  { ids: ["F19-26"], why: "The choir is Greek Catholic, not Orthodox; machine-translated sentences (as corrected in English)", files: EL22,
    find: R("Η Ορθόδοξη Χορωδία Εκκλησίας Ευλογημένου P. P. Gojdič ιδρύθηκε το 1990. Λαμβάνει χώρα δίπλα στην εκκλησία του θανάτου της ευλογημένης παρθένου Μαρίας στο Βρανοβ - Τσεμέρνε. Συντάσσει τη χριστιανική κοινότητα των ορθόδοξων και των ρωμαιοκαθολικών."),
    replace: "Η Χορωδία της Ελληνοκαθολικής Εκκλησίας bl. P. P. Gojdič ιδρύθηκε το 1990. Δραστηριοποιείται στον ναό της Κοίμησης της Θεοτόκου στο Βράνοβ - Τσεμέρνε. Συγκεντρώνει την κοινότητα των πιστών του ελληνοκαθολικού και του ρωμαιοκαθολικού τυπικού." },
  { ids: ["F19-27", "F22-06"], why: "Republic of Srpska, not Republic of Serbia", files: EL22, find: R("στη Δημοκρατία της Σερβίας και τη Βοσνία"), replace: "στη Δημοκρατία Σέρπσκα και τη Βοσνία" },
  { ids: ["F19-28"], why: "English: the conductor's MA concert (not a doctoral thesis)", files: EL22,
    find: R("η εκτέλεση της διδακτορικής διατριβής του διευθυντή τους"), replace: "η μεταπτυχιακή (MA) συναυλία του διευθυντή τους" },
  { ids: ["F19-31"], why: "'Χρυσό διπλώμα' -> δίπλωμα", files: EL22, find: "Χρυσό διπλώμα", replace: "Χρυσό δίπλωμα" },
  { ids: ["F19-31"], why: "'κάθως' -> καθώς", files: EL22, find: "δραστηριότητα, κάθως έχει", replace: "δραστηριότητα, καθώς έχει" },
  { ids: ["F19-31"], why: "'ψάλλμούς' -> ψαλμούς", files: EL22, find: "ψάλλμούς", replace: "ψαλμούς" },
  { ids: ["F19-31"], why: "'εναχολία' -> ενασχόληση", files: EL22, find: "Η κύρια εναχολία της", replace: "Η κύρια ενασχόλησή της" },
  { ids: ["F19-31"], why: "'Ρενασιστική εποχή' -> Αναγέννηση", files: EL22, find: R("από τη Ρενασιστική εποχή έως"), replace: "από την Αναγέννηση έως" },
  { ids: ["F19-17"], why: "2012 was the 18th competition (25th = 2019), not the 18th festival; same name as in English (ICCSM); chamber choirs", files: EL22,
    find: R("στην κατηγορία των μικρών χορωδιών στο 18ο Διεθνές Χορωδιακό Φεστιβάλ ICCP στην Πρέβεζα"),
    replace: "στην κατηγορία των χορωδιών δωματίου στον 18ο Διεθνή Χορωδιακό Διαγωνισμό ICCSM στην Πρέβεζα" },
  { ids: ["F19-33"], why: "'κοπάδια' (herds) for orange groves", files: EL22, find: R("από πυκνά κοπάδια των \"Πορτοκαλιών της Τζάφα\""), replace: "από πυκνούς πορτοκαλεώνες με τα \"Πορτοκάλια της Τζάφα\"" },
  { ids: ["F19-34"], why: "Two institutions merged into one (Weizmann Institute of Science; Faculty of Agriculture of the Hebrew University)", files: EL22,
    find: R("σπίτι του διάσημου Ινστιτούτου Weizmann για την Επιστήμη και τη Γεωργία της Αγροτικής Πανεπιστημιακής Σχολής του Εβραϊκού"),
    replace: "σπίτι του διάσημου Weizmann Institute of Science και της Γεωπονικής Σχολής του Εβραϊκού" },
  { ids: ["F19-36"], why: "'Πληκτροκομική' is not a word: Plucked String Orchestra = Ορχήστρα Νυκτών Εγχόρδων", files: EL22,
    find: R("την Πληκτροκομική Ορχήστρα του Δήμου"), replace: "την Ορχήστρα Νυκτών Εγχόρδων του Δήμου" },
  { ids: ["F19-38"], why: "Gender: the conductor and founder is a woman (Lucy Lee Lin)", files: EL22,
    find: R("Ο τρέχων διευθυντής είναι ο ιδρυτής της χορωδίας,"), replace: "Η σημερινή διευθύντρια είναι η ιδρύτρια της χορωδίας," },
  { ids: ["F19-39"], why: "Doubled word 'χορωδία Χορωδία': the choir is Chorus Iglovia", files: EL22, find: "Η χορωδία Χορωδία Iglovia", replace: "Η χορωδία Chorus Iglovia" },
  { ids: ["F19-41"], why: "Latin title in Greek letters; concerto rendered as 'concert'", files: EL22,
    find: R("Antosik - ΑΓΝΟΥΣ ΔΕΙ - συναυλία για το φαγκότο και τη χορωδία"), replace: "Antosik - AGNUS DEI - κοντσέρτο για φαγκότο και χορωδία" },
  { ids: ["F19-42", "F22-06"], why: "Name of the university: Ιόνιο Πανεπιστήμιο", files: EL22, find: R("του Πανεπιστημίου Ιονίων νήσων."), replace: "του Ιονίου Πανεπιστημίου." },
  { ids: ["F19-43", "F22-06"], why: "Venue name (Jakarta Symphony Hall, as in English)", files: EL22, find: R("στο Συμφωνικό Σαλόνι της Τζακάρτα"), replace: "στο Jakarta Symphony Hall" },
  { ids: ["F19-12"], why: "Doubled period", files: EL22, find: "σχολείο στο Πτούγι..", replace: "σχολείο στο Πτούγι." },
  { ids: ["F19-12"], why: "Doubled period", files: EL22, find: "<b>κα. Hadar Zlatin.</b>", replace: "<b>κα. Hadar Zlatin</b>" },
  { ids: ["F19-12"], why: "Doubled period", files: EL22, find: "<b>κ. Luka Vetrih.</b>", replace: "<b>κ. Luka Vetrih</b>" },
  { ids: ["F22-07"], why: "Kalisz: one spelling (Κάλις)", files: EL22, find: R("Τμήματος στην Καλίστη - του"), replace: "Τμήματος στο Κάλις - του" },
  { ids: ["F22-08"], why: "Gender: the professor is a woman (Lidia Chalińska)", files: EL22,
    find: /(Η χορωδία\s+διευθύνεται από) τον καθηγητή(\s+<b>Lidia Chalińska<\/b>)/, replace: "$1 την καθηγήτρια$2" },

  // ================================================================= 2022 page
  { ids: ["F22-01"], why: "The 40th festival is in July 2022", files: EN22, find: R("Mark your calendar for July 2021 to be part of the 40th"), replace: "Mark your calendar for July 2022 to be part of the 40th" },
  { ids: ["F22-01"], why: "The 40th festival is in July 2022", files: EL22, find: R("Σημειώστε στο ημερολόγιό σας τον Ιούλιο του 2021"), replace: "Σημειώστε στο ημερολόγιό σας τον Ιούλιο του 2022" },
  { ids: ["F22-11"], why: "Greek: the Forbes / holiday sentence of the 40th-festival item was missing", files: EL22,
    find: R("θα δίνονται σε διάφορα πολιτιστικά μέρη της περιοχής."),
    replace: "θα δίνονται σε διάφορα πολιτιστικά μέρη της περιοχής. Είναι μια ευκαιρία για τους συμμετέχοντες να συνδυάσουν την απόλαυση μιας όμορφης καλλιτεχνικής εκδήλωσης με τις διακοπές τους σε μια περιοχή που το Forbes, καθώς και άλλα διεθνή μέσα, κατατάσσουν στους δέκα κορυφαίους ταξιδιωτικούς προορισμούς αναψυχής." },
  { ids: ["F21-17"], why: "'όλοι τύποι χορωδιών' -> όλοι οι τύποι (as fixed on the 2021 page)", files: EL22, find: R("να συμμετέχουν όλοι τύποι χορωδιών"), replace: "να συμμετέχουν όλοι οι τύποι χορωδιών" },
  { ids: ["F22-12"], why: "'με κατασκευαστικό τρόπο' -> εποικοδομητικά", files: EL22, find: R("συμβουλεύουν με κατασκευαστικό τρόπο τις"), replace: "συμβουλεύουν εποικοδομητικά τις" },
  { ids: ["F22-12"], why: "'το συνέδριο' (the congress) -> η κριτική επιτροπή (the jury)", files: EL22, find: R("Επίσης, το συνέδριο αποτελείται"), replace: "Επίσης, η κριτική επιτροπή αποτελείται" },
  { ids: ["F22-12"], why: "'το πήχη' -> τον πήχη", files: EL22, find: R("ανεβάζουν το πήχη"), replace: "ανεβάζουν τον πήχη" },
  { ids: ["F22-14"], why: "'interlard it' -> 'complement it'", files: EN22, find: R("we decided to interlard it with two more events"), replace: "we decided to complement it with two more events" },
  { ids: ["F22-14"], why: "Broken phrasing 'and if not what else to give them a step towards'", files: EN22,
    find: R("in the area, and if not what else to give them a step towards"), replace: "in the area, and, above all, to take a step towards" },
  { ids: ["F22-14"], why: "Same broken phrasing in Greek ('αν όχι, να τους δώσουν ένα βήμα')", files: EL22,
    find: R("περιοχή και, αν όχι, να τους δώσουν ένα βήμα προς"), replace: "περιοχή και, πάνω απ' όλα, να κάνουν ένα βήμα προς" },
  { ids: ["F22-13"], why: "Greek persons in Latin on the Greek page", files: EL22,
    apply: h => must(must(h,
      R("ορχήστρας υπό τους A. Kontogeorgiou και M. Logiadis."), "ορχήστρας υπό τους Α. Κοντογεωργίου και Μ. Λογιάδη."),
      R("όπως οι Philip Ogden, Lucas Karytinos, Alkis Baltas, Myron Michailidis, Vyron Fidetzis και"), "όπως οι Philip Ogden, Λουκάς Καρυτινός, Άλκης Μπαλτάς, Μύρων Μιχαηλίδης, Βύρων Φιδετζής και") },

  // ================================================================= 2021 page
  { ids: ["F21-01"], why: "2021 is the 39th festival", files: EN21, find: R("attend the 38th ICF of Preveza"), replace: "attend the 39th ICF of Preveza" },
  { ids: ["F21-01"], why: "2021 is the 39th festival", files: EL21, find: R("να παρακολουθήσουν το 38ο Διεθνές"), replace: "να παρακολουθήσουν το 39ο Διεθνές" },
  { ids: ["F21-02"], why: "Greek jury: García de Paz's biography was missing (8 members in English, 7 in Greek); text as on the 2019 Greek page", files: EL21,
    find: /(Ζάγκρεμπ\/Κροατία\.\r\n\s*<\/p>)(\r\n\s*<\/div>\r\n\s*<div class="col-md-3">\r\n\s*<img src="img\/MarcoAntonioGarcíadePaz\.jpeg")/,
    replace: "$1" + GARCIA_EL.replace(/\$/g, "$$$$") + "$2" },
  { ids: ["F21-03"], why: "Greek said the results will be 'disputable'", files: EL21, find: R("θα είναι αμφισβητήσιμα και αναφαίρετα"), replace: "θα είναι οριστικά και αδιαμφισβήτητα" },
  { ids: ["F21-04"], why: "Prize money for a Category G that this page does not define (categories A-F)", files: EN21, find: /\r\n\s*<li>Category G: 400€ & 1st Prize<\/li>/, replace: "" },
  { ids: ["F21-04"], why: "Prize money for a 7th category ('Γ' twice) that this page does not define (categories Α-ΣΤ)", files: EL21,
    find: /(<li>Κατηγορία ΣΤ: 400€ & 1ο Βραβείο<\/li>)\r\n\s*<li>Κατηγορία Γ: 400€ & 1ο Βραβείο<\/li>/, replace: "$1" },
  { ids: ["F21-05"], why: "Typo 'Coral'", files: EN21, find: "4th Coral Conducting Workshop & Seminar", replace: "4th Choral Conducting Workshop & Seminar", count: 2 },
  { ids: ["F21-06"], why: "'have been accredit' -> 'accredited'", files: EN21, find: R("have been accredit to its"), replace: "have been accredited to its" },
  { ids: ["F21-06"], why: "'more that welcome' -> 'more than welcome'", files: EN21, find: R("be more that welcome"), replace: "be more than welcome" },
  { ids: ["F21-07"], why: "Ambrož Čopi (as in the jury heading)", files: EN21, find: R("by Ambroz Copi (Slovenia)"), replace: "by Ambrož Čopi (Slovenia)" },
  { ids: ["F21-07", "F21-19"], why: "Ambrož Čopi (as in the jury heading); Greek person in Greek: Σοφία Γιολδάση", files: EL21,
    find: R("των Ambroz Copi (Σλοβενία) και Sofia Gioldasi (Ελλάδα)."), replace: "των Ambrož Čopi (Σλοβενία) και Σοφίας Γιολδάση (Ελλάδα)." },
  { ids: ["F21-09"], why: "Garbled 'honored to have internationally been acclaimed experts of the field overseas'", files: EN21,
    find: R("we have been honored to have internationally been acclaimed experts of the field overseas."), replace: "we have been honored to host internationally acclaimed experts from abroad." },
  { ids: ["F21-10"], why: "Agreement: 38 ενδιαφέροντα και συναρπαστικά χρόνια", files: EL21, find: R("38 ενδιαφέροντες και συναρπαστικούς χρόνους"), replace: "38 ενδιαφέροντα και συναρπαστικά χρόνια" },
  { ids: ["F21-11"], why: "Transliterated 'mingling'", files: EL21, find: R("να απολαύσουν το μίξινγκ,"), replace: "να απολαύσουν τη γνωριμία," },
  { ids: ["F21-12"], why: "Adjective form: Διεθνής", files: EL21, find: "<h3>Διεθνές Επιτροπή Κριτών I.J.C.</h3>", replace: "<h3>Διεθνής Επιτροπή Κριτών I.J.C.</h3>" },
  { ids: ["F21-13"], why: "Category D = chamber choirs (μικτά = mixed)", files: EL21,
    find: R("Κατηγορία Δ: Μουσικές Συνόλου / Φωνητικά σύνολα (αναμικτά,"), replace: "Κατηγορία Δ: Χορωδίες Δωματίου / Φωνητικά σύνολα (μικτά," },
  { ids: ["F21-14"], why: "Case: συνθέτη γεννημένου", files: EL21, find: R("σύνθεση συνθέτη γεννημένο μετά"), replace: "σύνθεση συνθέτη γεννημένου μετά", count: 4 },
  { ids: ["F21-15"], why: "'Νεοσύστατους' (newly founded) -> early-career conductors", files: EL21, find: "<li>Νεοσύστατους διευθυντές</li>", replace: "<li>Διευθυντές στην αρχή της καριέρας τους</li>" },
  { ids: ["F21-15"], why: "'συντονιστική' -> ωδειακή (conservatory)", files: EL21, find: R("πανεπιστημιακή/συντονιστική εκπαίδευση"), replace: "πανεπιστημιακή/ωδειακή εκπαίδευση" },
  { ids: ["F21-15"], why: "'Εμπειροδίκους' -> Έμπειρους", files: EL21, find: R("Εμπειροδίκους διευθυντές"), replace: "Έμπειρους διευθυντές" },
  { ids: ["F21-16"], why: "'διαμερίσματων' (apartments, wrong accent) -> accommodation", files: EL21, find: R("πληρωμή όλων των διαμερίσματων και γευμάτων"), replace: "πληρωμή όλων των καταλυμάτων και γευμάτων" },
  { ids: ["F21-17"], why: "Gender: ένας θεσμός", files: EL21, find: R("είναι μια θεσμός υψηλής"), replace: "είναι ένας θεσμός υψηλής" },
  { ids: ["F21-17"], why: "'Όλοι τύποι' -> Όλοι οι τύποι", files: EL21, find: "Όλοι τύποι χορωδιών", replace: "Όλοι οι τύποι χορωδιών" },
  { ids: ["F21-17"], why: "Agreement: πρωτότυπες παρτιτούρες", files: EL21, find: "Έξι πρωτότυπα παρτιτούρες", replace: "Έξι πρωτότυπες παρτιτούρες" },
  { ids: ["F21-17"], why: "Accent: επιτεύγματα", files: EL21, find: "δραστηριότητες και επιτευγμάτα", replace: "δραστηριότητες και επιτεύγματα" },
  { ids: ["F21-18"], why: "Intonation: one term (επιτονισμός) instead of εντονισμός / εναρμόνιση / Εντονοποίηση", files: EL21,
    apply: h => {
      const n = s => (h.match(s) || []).length;
      if (n(/επιλογή εντονισμού/g) !== 4 || n(/επιλογή εναρμόνισης/g) !== 2 || n(/<li>Εντονοποίηση<\/li>/g) !== 1) throw new Error("intonation counts changed");
      return h.replace(/επιλογή εντονισμού/g, "επιλογή επιτονισμού").replace(/επιλογή εναρμόνισης/g, "επιλογή επιτονισμού").replace("<li>Εντονοποίηση</li>", "<li>Επιτονισμός</li>");
    } },
  { ids: ["F21-20"], why: "Organisation name as elsewhere on the page (Χορωδιακός Σύλλογος)", files: EL21, find: "Χορωδιακή Εταιρεία “Αρμονία” Πρέβεζας", replace: "Χορωδιακός Σύλλογος “Αρμονία” Πρέβεζας" },
];
