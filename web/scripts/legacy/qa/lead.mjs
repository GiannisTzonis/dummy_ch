// Proofreading review fixes (approved 2026-10-12): items found while applying the review, outside
// the reviewers' sections -- the choir texts shown from masterclass 2022 (registry source), and
// small errors noticed on neighbouring pages.
const R = s => new RegExp(s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/\s+/g, "\\s+"));

export default [
  {
    ids: ["K22-10"], why: "Gioldasi bio repeated two sentences of the Voci Contra Tempo paragraph",
    files: ["masterclass2022.html"],
    find: /(Female Vocal Ensemble\.) Even though the ensemble has been active for a short\s+time, Voci Contra Tempo[\s\S]*?Città di Fano”\. (Sofia has been)/,
    replace: "$1 $2",
  },
  {
    ids: ["K22-10"], why: "Gioldasi bio repeated two sentences of the Voci Contra Tempo paragraph",
    files: ["masterclass2022Greek.html"],
    find: /(Γυναικείας Χορωδίας\.) Παρόλο που το σύνολο δραστηριοποιείται[\s\S]*?di Fano'"\. (Η Σοφία έχει)/,
    replace: "$1 $2",
  },
  {
    ids: ["K22-14"], why: "Machine translation: 'έχει είσοδο σε επιτροπές κριτών' (has been a jury member)",
    files: ["masterclass2022Greek.html"],
    find: R("Η Σοφία έχει είσοδο σε επιτροπές κριτών σε"), replace: "Η Σοφία έχει διατελέσει μέλος κριτικών επιτροπών σε",
  },
  {
    ids: ["K22-14"], why: "Machine translation: 'Η χορωδία έχει καθοδήγηση από' (the choir is conducted by)",
    files: ["masterclass2022Greek.html"],
    apply: h => {
      const out = h.replace(/Η χορωδία έχει(\s+)καθοδήγηση από τη Σοφία Γιολδάση/, "Τη χορωδία διευθύνει$1η Σοφία Γιολδάση")
        .replace(/Η χορωδία έχει καθοδήγηση από την(\s+)<b>Κατερίνα Βασιλικού<\/b>/, "Τη χορωδία διευθύνει η$1<b>Κατερίνα Βασιλικού</b>");
      if ((out.match(/Τη χορωδία διευθύνει η/g) || []).length < 1) throw new Error("K22-14: no replacement");
      return out;
    },
  },
  {
    ids: ["K22-17"], why: "Greek conductor's name in Latin script on the Greek page",
    files: ["masterclass2022Greek.html"],
    find: "του μαέστρου Miltos Logiadis", replace: "του μαέστρου Μίλτου Λογιάδη",
  },
  { ids: [], why: "Accent: 'πρόβων' for 'προβών'", files: ["masterclass2019Greek.html"], find: "Οργάνωση των πρόβων", replace: "Οργάνωση των προβών" },
  { ids: [], why: "Latin 'E' in the Greek word 'Είναι' (Josu Elberdin bio)", files: ["icc2025Greek.html"], find: "Eίναι παγκοσμίως", replace: "Είναι παγκοσμίως" },
  // the same errors as a review finding, on pages the finding did not list
  { ids: ["F23-15"], why: "Random capitals", files: ["single-2024.html", "single-2025.html"], find: "PRICE €20 FOR all Days.", replace: "Price €20 for all days." },
  { ids: ["F23-15"], why: "Random capitals", files: ["single-2024Greek.html", "single-2025Greek.html"], find: "ΤΙΜΗ €20 ΓΙΑ όλες τις ημέρες.", replace: "Τιμή €20 για όλες τις ημέρες." },
  { ids: ["F24-12"], why: "'χοριστής' is a dancer: χορωδό", files: ["single-2021Greek.html"], find: /μεμονωμένο χοριστή(\s+)που/, replace: "μεμονωμένο χορωδό$1που" },
  { ids: ["F19-19"], why: "Certificate of Attendance", files: ["icc2022.html"], find: "Certification of Attendance", replace: "Certificate of Attendance", count: 3 },
  { ids: ["M26-04"], why: "Ēriks Ešenvalds", files: ["single-2018.html", "single-2018Greek.html"], find: "Eriks Ešenvalds", replace: "Ēriks Ešenvalds" },
  { ids: ["K22-05"], why: "Festival named after Aram Khachaturian", files: ["ourchoir.html"], find: /"Aram(\s+)Khatsaturian"/, replace: '"Aram$1Khachaturian"' },
  { ids: ["K22-05"], why: "Festival named after Aram Khachaturian; town in Greek", files: ["ourchoirGreek.html"], find: /“ Aram Khatsaturian”(\s+)στο Haskovo/, replace: "“Aram Khachaturian”$1στο Χάσκοβο" },
  {
    ids: [], why: "2018 Greek jury heading and link: same wording as the 2015-2017 Greek pages ('Διεθνής Επιτροπή Κριτών (I.J.C.)')",
    files: ["single-2018Greek.html"],
    apply: h => {
      const out = h.replace(">Διεθνές Κριτική Επιτροπή Ι.Ε.Δ.<", ">Διεθνής Επιτροπή Κριτών (I.J.C.)<")
        .replace(">Διεθνής Επιτροπή Διαιτησίας I.J.C.<", ">Διεθνής Επιτροπή Κριτών (I.J.C.)<");
      if ((out.match(/>Διεθνής Επιτροπή Κριτών \(I\.J\.C\.\)</g) || []).length !== 2) throw new Error("2018 jury heading: expected 2 replacements");
      return out;
    },
  },
];
