// Proofreading review fixes (approved 2026-10-12): F23, F24, F25, F26 (festival pages 2023-2026).
const EN23 = ["single-2023.html"], EL23 = ["single-2023Greek.html"];
const SEN23 = ["schedule2023.html"], SEL23 = ["schedule2023Greek.html"];
// phrase -> RegExp that tolerates the line breaks/indentation inside the legacy HTML
const W = (s, flags = "") => new RegExp(s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/ /g, "\\s+"), flags);
const NOT_IN_ALT = '(?<!alt="[^"]*)';
const EN24 = ["single-2024.html"], EL24 = ["single-2024Greek.html"];
const EN25 = ["single-2025.html"], EL25 = ["single-2025Greek.html"];
const EN26 = ["ICFP2026.html"], EL26 = ["ICFP2026-el.html"];

export default [
  // ---------------------------------------------------------------- F23 (2023)
  { ids: ["F23-01", "F23-02"], why: "Remove the duplicated Accommodation / Selection / Conditions sections of the competition part (they repeat the festival sections above and carried the stale 1 June 2021 deadline)",
    files: EN23, find: /<h3>Accommondation, Meals & Transport<\/h3>[\s\S]*?<\/ul>\s*<\/div>(?=\s*<br>\s*<h5 class="mt-30">All health)/, replace: "" },
  { ids: ["F23-01", "F23-02"], why: "Remove the duplicated Accommodation / Selection / Conditions sections of the competition part (they repeat the festival sections above and carried the stale 1 June 2021 deadline)",
    files: EL23, find: /<h3>Διαμονή, Φαγητό & Μεταφορά<\/h3>[\s\S]*?<\/ul>\s*<\/div>(?=\s*<br>\s*<h5 class="mt-30">Όλα τα μέτρα)/, replace: "" },
  { ids: ["F23-02"], why: "Second 'Application Procedure' is the competition one: name it so it no longer duplicates the festival section",
    files: EN23, find: /<h3>Application Procedure<\/h3>(\s*<br>\s*<h4>Registration - Participation Fees)/, replace: "<h3>Application Procedure for the Competition</h3>$1" },
  { ids: ["F23-02"], why: "Second application section is the competition one: name it so it no longer duplicates the festival section",
    files: EL23, find: "<h3>Διαδικασία Αίτησης</h3>", replace: "<h3>Διαδικασία Αίτησης για τον Διαγωνισμό</h3>" },
  { ids: ["F23-02"], why: "Registration-fee paragraph printed twice in the Greek competition section",
    files: EL23, find: /<h4 class="mt-40">Εγγραφή - Κόστος Συμμετοχής<\/h4>[\s\S]*?<\/p>\s*/, replace: "" },
  { ids: ["F23-04"], why: "Mistranslation of 'Pre-Festival Concert'", files: SEL23, find: "Προετοιμασία για το Φεστιβάλ", replace: "Προφεστιβαλική Συναυλία" },
  { ids: ["F23-05"], why: "Greek category letters in the prize list (Latin A-G)", files: EL23,
    apply: h => h.replace(/Κατηγορία ([A-G]): (\d+€ & 1ο Βραβείο)/g, (m, l, rest) => `Κατηγορία ${{ A: "Α", B: "Β", C: "Γ", D: "Δ", E: "Ε", F: "ΣΤ", G: "Ζ" }[l]}: ${rest}`) },
  { ids: ["F23-05"], why: "Category G is Ζ in Greek (Γ is Children's choirs)", files: EL23, find: "Κατηγορία Γ: Ελεύθερο πρόγραμμα", replace: "Κατηγορία Ζ: Ελεύθερο πρόγραμμα" },
  { ids: ["F23-05"], why: "Programme: Category G is Ζ in Greek (English: Category G)", files: SEL23, find: /(Ακουστικές πρόβες των χορωδιών|27ο Διεθνές Χορωδιακό Διαγωνισμός) – Κατηγορία Γ/g, replace: "$1 – Κατηγορία Ζ", count: 2 },
  { ids: ["F23-05"], why: "Programme: stray 'Κατηγορία Κ' (English: Category C = Γ)", files: SEL23, find: "Ακουστικές πρόβες των χορωδιών – Κατηγορία Κ", replace: "Ακουστικές πρόβες των χορωδιών – Κατηγορία Γ" },
  { ids: ["F23-06"], why: "Typo 'varous'", files: SEN23, find: "Street performances in varous places", replace: "Street performances in various places" },
  { ids: ["F23-06"], why: "Typo 'materialis'", files: EN23, find: "All the above materialis to be sent", replace: "All the above material is to be sent" },
  { ids: ["F23-07"], why: "The venue is the Open Garden Theatre (as on the 2026 page), not 'Guardian Theatre'", files: SEN23,
    find: /Parade of all the choirs to the open(\s+)<b>Guardian Theatre of Municipality of Preveza/, replace: "Parade of all the choirs to the$1<b>Open Garden Theatre of the Municipality of Preveza" },
  { ids: ["F23-08"], why: "Gender agreement: 27ος Διεθνής Χορωδιακός Διαγωνισμός", files: EL23, find: "27ο Διεθνές Χορωδιακός Διαγωνισμός", replace: "27ος Διεθνής Χορωδιακός Διαγωνισμός" },
  { ids: ["F23-08"], why: "Gender agreement: 27ος Διεθνής Χορωδιακός Διαγωνισμός", files: SEL23, find: "27ο Διεθνές Χορωδιακό Διαγωνισμός", replace: "27ος Διεθνής Χορωδιακός Διαγωνισμός", count: 5 },
  { ids: ["F23-09"], why: "Orthography 'λάβεται'", files: EL23, find: "για να λάβεται μέρος", replace: "για να λάβετε μέρος" },
  { ids: ["F23-09"], why: "Orthography 'υπ'όωιν'", files: EL23, find: "Σοβαρά υπ'όωιν λαμβάνονται", replace: "Σοβαρά υπόψη λαμβάνονται" },
  { ids: ["F23-09"], why: "Accent 'προγραμματιζόνται'", files: EL23, find: "προγραμματιζόνται από", replace: "προγραμματίζονται από" },
  { ids: ["F23-09"], why: "Accent 'απο'", files: EL23, find: "ηχογράφηση απο πρόσφατη", replace: "ηχογράφηση από πρόσφατη" },
  { ids: ["F23-09"], why: "Orthography 'επικοινωνείστε'", files: EL23, find: "Φυσικά επικοινωνείστε άμεσα", replace: "Φυσικά επικοινωνήστε άμεσα" },
  { ids: ["F23-10"], why: "'το Άκτιο' is neuter; airport codes stay Latin", files: EL23, find: "Από την Αθήνα (ΑΘΗ) στον Ακτίο (ΠΒΚ)", replace: "Από την Αθήνα (ATH) στο Άκτιο (PVK)" },
  { ids: ["F23-11"], why: "'διόδια' = road tolls; means entry fees", files: EL23, find: "Αυτό περιλαμβάνει τα διόδια εισόδου", replace: "Αυτό περιλαμβάνει τα τέλη συμμετοχής" },
  { ids: ["F23-12"], why: "English says 'Greek mainland'", files: EL23, find: /ανήκει στην ελληνική(\s+)επικράτεια, η Πρέβεζα/, replace: "ανήκει στην ηπειρωτική$1Ελλάδα, η Πρέβεζα" },
  { ids: ["F23-13"], why: "Leftover words in the sentence", files: EL23, find: /Εάν μια χορωδία το(\s+)εκτελέσει παράνομα έργα,/, replace: "Εάν μια χορωδία το$1κάνει," },
  { ids: ["F23-13"], why: "Broken phrase '(το οποίο συνημμένο)'", files: EL23, find: "(το οποίο συνημμένο)", replace: "(το οποίο επισυνάπτεται)" },
  { ids: ["F23-14"], why: "Syntax 'Χορωδίες με Ομοίων Φωνών'", files: EL23, find: "Χορωδίες με Ομοίων Φωνών", replace: "Χορωδίες Ομοίων Φωνών" },
  { ids: ["F23-14"], why: "'Αναμεικτές' -> 'Μικτές'", files: EL23, find: "Κατηγορία Α: Αναμεικτές χορωδίες", replace: "Κατηγορία Α: Μικτές χορωδίες" },
  { ids: ["F23-14"], why: "Syntax 'του συνθέτη γεννηθέντα'", files: EL23, find: "μια σύνθεση του συνθέτη γεννηθέντα μετά", replace: "μια σύνθεση συνθέτη γεννημένου μετά", count: 5 },
  { ids: ["F23-14"], why: "'τόξο' is neuter", files: EL23, find: /στον δραματικό τόξο/, replace: "στο δραματικό τόξο" },
  { ids: ["F23-15"], why: "Random capitals", files: EN23, find: "PRICE €20 FOR all Days.", replace: "Price €20 for all days." },
  { ids: ["F23-15"], why: "Random capitals", files: EL23, find: "ΤΙΜΗ € 20 ΓΙΑ όλες τις Ημέρες.", replace: "Τιμή € 20 για όλες τις ημέρες." },

  // ---------------------------------------------------------------- F24 (2024)
  { ids: ["F24-01"], why: "Greek heading on the English page", files: EN24, find: '<h1 class="mb-10">Συμμετοχές Χορωδιών</h1>', replace: '<h1 class="mb-10">Participating Choirs</h1>' },
  { ids: ["F24-02"], why: "Stray 'Μετάλλια' heading after the choirs (the section below is the festival introduction; English has no such heading)", files: EL24, find: /<h2>Μετάλλια<\/h2>\s*<br>\s*/, replace: "" },
  { ids: ["F24-04"], why: "Greek caption left at the end of the English bio", files: EN24, find: /\s+Graeme Langager, Καναδάς(?=\s*<\/p>)/, replace: "" },
  { ids: ["F24-05"], why: "'ο πήχης' is masculine", files: EL24, find: "ανεβάζουν το πήχη", replace: "ανεβάζουν τον πήχη" },
  { ids: ["F24-05"], why: "Accent 'ο όποιος'", files: EL24, find: "ο όποιος έχει ανεβάσει", replace: "ο οποίος έχει ανεβάσει" },
  { ids: ["F24-05"], why: "'τα διπλώματα' (neuter)", files: EL24, find: "τα πιστοποιητικά και οι διπλώματα", replace: "τα πιστοποιητικά και τα διπλώματα" },
  { ids: ["F24-05"], why: "'το μέρος' (neuter)", files: EL24, find: "θα κρίνει τον διαγωνιστικό μέρος", replace: "θα κρίνει το διαγωνιστικό μέρος" },
  { ids: ["F24-05"], why: "'στις χορωδίες'", files: EL24, find: "βραβεία στα χορωδία,", replace: "βραβεία στις χορωδίες," },
  { ids: ["F24-05"], why: "'πλήρη γεύματα' (neuter)", files: EL24, find: "Για 2 πλήρεις γεύματα", replace: "Για 2 πλήρη γεύματα" },
  { ids: ["F24-06"], why: "Candan Erçetin is a woman", files: EL24, find: /μια συναυλία με τον(\s+)καλλιτέχνη Candan Erçetin/, replace: "μια συναυλία με την$1καλλιτέχνιδα Candan Erçetin" },
  { ids: ["F24-07"], why: "Passion (Holy Week) music, not 'with passion'", files: EL24, find: /αρκετές συναυλίες με πάθος και(\s+)χριστουγεννιάτικη μουσική/, replace: "αρκετές συναυλίες με μουσική των Παθών και$1χριστουγεννιάτικη μουσική" },
  { ids: ["F24-08"], why: "Countries (and Preveza) in Greek on the Greek page", files: EL24,
    apply: h => h.replace("Tampere, Finland 2019", "Tampere, Φινλανδία 2019").replace("Preveza, Greece 2018", "Πρέβεζα, Ελλάδα 2018")
      .replace(/Llangollen, Great(\s+)Britain 2015/, "Llangollen, Μεγάλη$1Βρετανία 2015").replace("Neerpelt, Belgium 2014", "Neerpelt, Βέλγιο 2014").replace("Cantonigros, Spain –", "Cantonigros, Ισπανία –") },
  { ids: ["F24-09"], why: "Doubled word", files: EL24, find: "Χορωδίες Ομοίων Φωνών Φωνών", replace: "Χορωδίες Ομοίων Φωνών" },
  { ids: ["F24-10"], why: "Missing 'born' (English: composer born after 1970)", files: EL24, find: "μια σύνθεση συνθέτη μετά το 1970", replace: "μια σύνθεση συνθέτη γεννημένου μετά το 1970" },
  { ids: ["F24-11"], why: "'Free choice of intonation' mistranslated as harmonisation", files: EL24, find: "Επιλογή ελεύθερης εναρμόνισης (προσδιορισμένη", replace: "Ελεύθερη επιλογή τονικότητας (προσδιορισμένη", count: 7 },
  { ids: ["F24-12"], why: "'χοριστής' = dancer", files: EL24, find: "μεμονωμένο χοριστή", replace: "μεμονωμένο χορωδό" },
  { ids: ["F24-13"], why: "Broken syntax", files: EL24, find: /σε CD είτε να(\s+)αποστέλλουν με email/, replace: "σε CD ή$1μέσω email" },
  { ids: ["F24-13"], why: "Case agreement", files: EL24, find: "(μείον οποιεσδήποτε τραπεζικών χρεώσεων)", replace: "(μείον οποιεσδήποτε τραπεζικές χρεώσεις)" },
  { ids: ["F24-13"], why: "Verb agreement", files: EL24, find: "ενέργεια λάβει οι εκδότες.", replace: "ενέργεια αναλάβουν οι εκδότες." },
  { ids: ["F24-14"], why: "English title 'Pope' in Greek text (name kept in Latin script per client rule); 'Θεού' capitalised", files: EL24,
    find: "τον όρκο πίστης στον Pope John Paul II: “Διδάξτε τους ανθρώπους του θεού", replace: "τον όρκο πίστης στον Πάπα John Paul II: “Διδάξτε τους ανθρώπους του Θεού" },
  { ids: ["F24-15"], why: "'comprises of'", files: EN24, find: "it now comprises of more than", replace: "it now comprises more than" },
  { ids: ["F24-15", "F24-17"], why: "'Leading its 29th year' -> 'Entering'; add the dates the Greek gives (May 2023, June, three-year break)", files: EN24,
    apply: h => h.replace(/(\s+)Miltiades Kassaras, while it organized the 22nd Agria Choral Meeting\./, "$1Miltiades Kassaras in May 2023, while in June, after a three-year break, it organized the 22nd Agria Choral Meeting.")
      .replace("Leading its 29th year of activity", "Entering its 29th year of activity") },
  { ids: ["F24-15"], why: "One spelling: TrencaCors (heading)", files: EN24, find: "Òpera Prima. Trencacors grows", replace: "Òpera Prima. TrencaCors grows" },
  { ids: ["F24-15"], why: "One spelling: Pécs", files: EN24, find: "Cappella Quinqueecclesiensis, Pecs, Hungary", replace: "Cappella Quinqueecclesiensis, Pécs, Hungary" },
  { ids: ["F24-15"], why: "One spelling: Pécs", files: EL24, find: "Cappella Quinqueecclesiensis, Pecs, Ουγγαρία", replace: "Cappella Quinqueecclesiensis, Pécs, Ουγγαρία" },
  { ids: ["F24-15"], why: "One spelling: Mītava (as in the bio)", files: EN24, find: "Choir “Mitava”, Riga, Latvia", replace: "Choir “Mītava”, Riga, Latvia" },
  { ids: ["F24-15"], why: "One spelling: Mītava (as in the bio)", files: EL24, find: "Χορωδία “Mitava”, Ρίγα, Λετονία", replace: "Χορωδία “Mītava”, Ρίγα, Λετονία" },
  { ids: ["F24-16"], why: "'This fall' is out of date on the 2024 archive page", files: EN24, find: "This fall, they are invited to perform", replace: "In autumn 2024, they were invited to perform" },
  { ids: ["F24-16"], why: "'Φέτος το φθινόπωρο' is out of date on the 2024 archive page", files: EL24, find: "Φέτος το φθινόπωρο, είναι προσκεκλημένοι να", replace: "Το φθινόπωρο του 2024 ήταν προσκεκλημένοι να" },
  { ids: ["F24-18"], why: "One name for the I.J.C.: Διεθνής Κριτική Επιτροπή", files: EL24,
    apply: h => h.replace("Διεθνές Κριτική Επιτροπή I.J.C.", "Διεθνής Κριτική Επιτροπή I.J.C.")
      .replace("στη Διεθνή Επιτροπή Διαγωνισμού, εγγυώμενοι", "στη Διεθνή Κριτική Επιτροπή, εγγυώμενοι")
      .replace("από τη Διεθνή Επιτροπή Διαγωνισμού θα", "από τη Διεθνή Κριτική Επιτροπή θα")
      .replace("Διεθνής Επιτροπή Κριτών I.J.C.", "Διεθνής Κριτική Επιτροπή I.J.C.")
      .replace("Μια Διεθνής Επιτροπή Κριτών,", "Μια Διεθνής Κριτική Επιτροπή,") },

  // ---------------------------------------------------------------- F25 (2025)
  { ids: ["F25-01"], why: "Dates are 10-13 July (header, Greek, festival list); also drop the stray fragment left after the sentence", files: EN25,
    find: /The main festival will be held from 8 to 13 of July 2025 in Preveza\s+International Choral Composition Competition of Preveza/, replace: "The main festival will be held from 10 to 13 July 2025 in Preveza." },
  { ids: ["F25-02"], why: "Shiran Choir (Israel) showed the Portugal flag/country", files: EN25,
    find: /(Kalamata\s+2019\)<\/span>[\s\S]*?<span class="country-flag">)🇵🇹(<\/span>\s*<span>)Portugal/, replace: "$1🇮🇱$2Israel" },
  { ids: ["F25-03"], why: "Cut off mid-word", files: EN25, find: "Choral Activities at William Paterson Universit</p>", replace: "Choral Activities at William Paterson University.</p>" },
  { ids: ["F25-04"], why: "Cantus Atenas text cut off mid-word (completed from the English)", files: EL25,
    find: /πολιτισμική εξωστρέφεια,(\s+)αποτελώ<\/p>/, replace: "πολιτισμική εξωστρέφεια,$1αποτελώντας μια ξεχωριστή παρουσία στο σύγχρονο ελληνικό χορωδιακό τοπίο.</p>" },
  { ids: ["F25-05"], why: "Stray Latin 'ls'", files: EL25, find: /«Αρμονία» με ls(\s+)την συμμετοχή/, replace: "«Αρμονία» με$1τη συμμετοχή" },
  { ids: ["F25-06"], why: "English heading on the Greek page", files: EL25, find: "<h1>Participating Choirs</h1>", replace: "<h1>Συμμετέχουσες Χορωδίες</h1>" },
  { ids: ["F25-06"], why: "English label on the Greek page", files: EL25, find: '<div class="choir-conductor">Conductors: Grażyna', replace: '<div class="choir-conductor">Διευθύνουν: Grażyna' },
  { ids: ["F25-07"], why: "PRO ARTE highlight contradicted its own text (no Spain, no silver diploma)", files: EN25,
    find: "<span>Gold and Silver Diplomas in Spain, Croatia, France</span>", replace: "<span>Gold Diplomas in Croatia and Poland, Second Prize in France</span>" },
  { ids: ["F25-08"], why: "One spelling: Efthimiadis (as in the conductor line and on the 2019/2022 pages)", files: EN25, find: "conducted by Nikos St. Efthymiadis.", replace: "conducted by Nikos St. Efthimiadis." },
  { ids: ["F25-08"], why: "One spelling: Kostas Hatzis", files: EN25, find: "George Dalaras and Kostas Chatzis", replace: "George Dalaras and Kostas Hatzis" },
  { ids: ["F25-08"], why: "One spelling: Vagia Papagiannopoulou (as in the conductor line)", files: EN25, find: "Vágia Papagiannopoúlou", replace: "Vagia Papagiannopoulou", count: 2 },
  { ids: ["F25-08"], why: "One spelling: Nereides (as in the heading; heading kept so the entry keeps its identity)", files: EN25, find: "The “Niriídes” Women’s Choir", replace: "The “Nereides” Women’s Choir" },
  { ids: ["F25-10"], why: "Align the Greek with the English (and the 2023/2024 pages): a cappella, preferably sacred or folk works", files: EL25,
    find: /Κομμάτια(\s+)επιλογής κάθε χορωδίας θα ερμηνευτούν «a cappella» ή με τη συνοδεία οργάνων(\s+)μέσα σε 10-15 λεπτά\./,
    replace: "Κομμάτια$1επιλογής κάθε χορωδίας (κατά προτίμηση θρησκευτικά ή παραδοσιακά έργα) θα ερμηνευτούν «a cappella»$2μέσα σε 10-15 λεπτά." },
  { ids: ["F25-12"], why: "Missing article", files: EL25, find: "<p class=\"choir-description\">“Αριέττα” είναι χορωδία", replace: "<p class=\"choir-description\">Η “Αριέττα” είναι χορωδία" },
  { ids: ["F25-12"], why: "Missing article", files: EL25, find: "<p class=\"choir-description\"> Χορωδία ASTIBO ιδρύθηκε", replace: "<p class=\"choir-description\"> Η Χορωδία ASTIBO ιδρύθηκε" },
  { ids: ["F25-12"], why: "Missing article", files: EL25, find: "<p class=\"choir-description\"> BUMC Jazz Choir (BÜMK Caz Korosu) ιδρύθηκε", replace: "<p class=\"choir-description\"> Η BUMC Jazz Choir (BÜMK Caz Korosu) ιδρύθηκε" },
  { ids: ["F25-13"], why: "Accent 'Κυρίλλου'", files: EL25, find: "Αγίου Κύριλλου", replace: "Αγίου Κυρίλλου" },
  { ids: ["F25-13"], why: "Accent 'Βουλγάρων'", files: EL25, find: "Βούλγαρων και ξένων συνθετών", replace: "Βουλγάρων και ξένων συνθετών", count: 2 },
  { ids: ["F25-13"], why: "'Τον Ιούνιο'", files: EL25, find: "Το Ιούνιο του 2019,", replace: "Τον Ιούνιο του 2019," },
  { ids: ["F25-13"], why: "Agreement 'γυναικείες φωνές'", files: EL25, find: "— γυναικεία φωνές όλων", replace: "— γυναικείες φωνές όλων" },
  { ids: ["F25-13"], why: "Abbreviation 'κ.ά.'", files: EL25, find: "Σμύρνης, κα. Παρουσίασαν", replace: "Σμύρνης κ.ά. Παρουσίασαν" },
  { ids: ["F25-14"], why: "Stray comma", files: EL25, find: "παρουσιάσουν το, πρόγραμμά τους", replace: "παρουσιάσουν το πρόγραμμά τους" },
  { ids: ["F25-14"], why: "Space before comma; 'κάνοντάς μας'", files: EL25, find: "τα στάνταρ του , κάνοντας μας", replace: "τα στάνταρ του, κάνοντάς μας" },
  { ids: ["F25-14"], why: "'το φεστιβάλ' (neuter)", files: EL25, find: "στον φεστιβάλ μας", replace: "στο φεστιβάλ μας" },
  { ids: ["F25-15"], why: "Euro sign twice", files: EL25, find: /την κατάθεση των € 200, 00(\s+)€ που/, replace: "την κατάθεση των 200,00 €$1που" },
  { ids: ["F25-16"], why: "Towns in Greek on the Greek page", files: EL25,
    apply: h => h.replace('<div class="choir-location">Πρέσερς, Σλοβενία</div>', '<div class="choir-location">Πρέσεριε, Σλοβενία</div>')
      .replace('<div class="choir-location">Shtip, Βόρεια Μακεδονία</div>', '<div class="choir-location">Στιπ, Βόρεια Μακεδονία</div>')
      .replace('<div class="choir-location">Inowrocław, Πολωνία</div>', '<div class="choir-location">Ινοβρότσλαβ, Πολωνία</div>') },
  { ids: ["F25-17"], why: "Missing words", files: EN25, find: "by 1 May 2025 latest:", replace: "by 1 May 2025 at the latest:" },
  { ids: ["F25-18"], why: "Greek guillemets in English text -> English quotes", files: EN25, apply: h => h.replace(/«([^«»<]*)»/g, "“$1”") },

  // ---------------------------------------------------------------- F26 (2026)
  { ids: ["F26-02"], why: "Kla-sch is from Jan Długosz University (its bio); the Jagiellonian University is in Kraków", files: EN26,
    find: W("Vocal Quartet (Jagiellonian University)</span>"), replace: "Vocal Quartet (Jan Długosz University)</span>" },
  { ids: ["F26-04"], why: "Kla-sch competed in Preveza in 2024 = 28th Competition (the 28th Festival was 2010)", files: EN26,
    find: W("the Silver Medal at the 28th International Choral Festival in Preveza"), replace: "the Silver Medal at the 28th International Choral Competition in Preveza" },
  { ids: ["F26-04"], why: "Kla-sch competed in Preveza in 2024 = 28th Competition (the 28th Festival was 2010)", files: EL26,
    find: W("το Αργυρό Μετάλλιο στο 28ο Διεθνές Χορωδιακό Φεστιβάλ Πρέβεζας"), replace: "το Αργυρό Μετάλλιο στον 28ο Διεθνή Χορωδιακό Διαγωνισμό Πρέβεζας" },
  { ids: ["F26-06"], why: "'Street performances' rendered as 'routes'", files: EL26,
    apply: h => h.replace('<h4 class="text-xl font-semibold text-gray-900 mb-3">Δρομολόγια</h4>', '<h4 class="text-xl font-semibold text-gray-900 mb-3">Εμφανίσεις στην πόλη</h4>')
      .replace("Κατά τη διάρκεια των Δρομολογίων, συμμετέχουν", "Κατά τη διάρκεια των εμφανίσεων στην πόλη συμμετέχουν")
      .replace(/(διάρκεια\s+)των δρομολογίων είναι ενδεικτικά/, "$1των εμφανίσεων στην πόλη είναι ενδεικτικά") },
  { ids: ["F26-07"], why: "English heading on the Greek page", files: EL26,
    find: 'scroll-mt-[100px]">International Jury Committee</h2>', replace: 'scroll-mt-[100px]">Διεθνής Κριτική Επιτροπή</h2>' },
  { ids: ["F26-08"], why: "One spelling: Anelia Stefanova (as in the bios)", files: [...EN26, ...EL26], find: /Anelija(\s+)Stefanova/g, replace: "Anelia$1Stefanova", count: 2 },
  { ids: ["F26-08"], why: "One spelling: Elikonë Hysaj Shala (as in the bio)", files: [...EN26, ...EL26], find: /Elikona(\s+)Hysaj/g, replace: "Elikonë$1Hysaj", count: 4 },
  { ids: ["F26-08"], why: "One spelling: Lympouridis (as in the programme)", files: EN26, find: /Lymbouridis/g, replace: "Lympouridis", count: 2 },
  { ids: ["F26-08"], why: "Pianist is Dimitris Paschalis (Greek: Δημήτρης Πασχάλης)", files: EN26,
    apply: h => h.replace(/Dimitris(\s+)Paschali<\/span>/, "Dimitris$1Paschalis</span>").replace("accompanied by Dimitris Paschali.", "accompanied by Dimitris Paschalis.") },
  { ids: ["F26-08"], why: "One spelling: Παντελίνα Πασχάλη (as in the programme)", files: EL26, find: /Παντελίνα(\s+)Πασχαλή/g, replace: "Παντελίνα$1Πασχάλη", count: 2 },
  { ids: ["F26-09"], why: "Greek programme: Greek category letters, as in the Greek results (A-H -> Α Β Γ Δ Ε ΣΤ Ζ Η)", files: EL26,
    apply: h => {
      const G = { A: "Α", B: "Β", C: "Γ", D: "Δ", E: "Ε", F: "ΣΤ", G: "Ζ", H: "Η" };
      return h.replace(/(Κατηγορί(?:α|ες)\s+)([A-H](?:\s*(?:·|&amp;)\s*[A-H])*)(?=\s*(?:<\/span>|—))/g, (m, k, ls) => k + ls.replace(/[A-H]/g, l => G[l]))
        .replace(/(class="text-amber-600">\()([A-H])\)/g, (m, a, l) => `${a}${G[l]})`);
    } },
  { ids: ["F26-10"], why: "Sia's song is 'Angel by the Wings'", files: [...EN26, ...EL26], find: '"Angel of the Wings", Sia Furler', replace: '"Angel by the Wings", Sia Furler' },
  { ids: ["F26-12"], why: "Latin O in Greek 'Οι'", files: EL26, find: "Oι Essence of Elements παρουσιάζουν", replace: "Οι Essence of Elements παρουσιάζουν" },
  { ids: ["F26-13"], why: "'b.' in the Greek programme", files: EL26, find: /\(b\. /g, replace: "(γεν. ", count: 100 },
  { ids: ["F26-14"], why: "Invitation said the masterclasses would be announced 'in the coming days'; they were (Masterclass 2026, 6-8 July 2026)", files: EN26,
    find: W("Within the framework of the 44th International Choral Festival of Preveza, we will also announce in the coming days a new cycle of <span class=\"font-semibold\">masterclasses for choral conductors</span>."),
    replace: "Within the framework of the 44th International Choral Festival of Preveza, a new cycle of <span class=\"font-semibold\">masterclasses for choral conductors</span> is also held (6–8 July 2026)." },
  { ids: ["F26-14"], why: "Invitation said the masterclasses would be announced soon; they were (Masterclass 2026, 6-8 July 2026)", files: EL26,
    find: W("Στο πλαίσιο του 44ου Διεθνούς Χορωδιακού Φεστιβάλ Πρέβεζας, θα ανακοινωθεί σύντομα και νέος κύκλος <span class=\"font-semibold\">masterclass για μαέστρους χορωδίας</span>."),
    replace: "Στο πλαίσιο του 44ου Διεθνούς Χορωδιακού Φεστιβάλ Πρέβεζας πραγματοποιείται επίσης νέος κύκλος <span class=\"font-semibold\">masterclass για μαέστρους χορωδίας</span> (6–8 Ιουλίου 2026)." },
  { ids: ["F26-16"], why: "One spelling per choir name (as in each choir's heading): Sincoro, Belcantes, Okarina, Transilvania, Aoidon Fones", files: EN26,
    apply: h => h.replace(new RegExp(NOT_IN_ALT + "SinCoro(?!-choir)", "g"), "Sincoro").replace(/Sincoro(\s+)—(\s+)coro di Arcigay/, "Sincoro$1coro di Arcigay")
      .replace(new RegExp(NOT_IN_ALT + "BELCANTES|BelCantes", "g"), "Belcantes")
      .replace(new RegExp(NOT_IN_ALT + "OKARINA", "g"), "Okarina").replace(new RegExp(NOT_IN_ALT + "TRANSILVANIA", "g"), "Transilvania")
      .replace('font-bold text-gray-900">"Aoidón Fonés"</h4>', 'font-bold text-gray-900">"Aoidon Fones"</h4>') },
  { ids: ["F26-16"], why: "One spelling per choir name (as in each choir's heading): Sincoro, Belcantes, Okarina, Transilvania, Gøta", files: EL26,
    apply: h => h.replace(new RegExp(NOT_IN_ALT + "SinCoro(?!-choir)", "g"), "Sincoro").replace(/Sincoro(\s+)—(\s+)coro di Arcigay/, "Sincoro$1coro di Arcigay")
      .replace(new RegExp(NOT_IN_ALT + "BELCANTES|BelCantes", "g"), "Belcantes")
      .replace(new RegExp(NOT_IN_ALT + "OKARINA", "g"), "Okarina").replace(new RegExp(NOT_IN_ALT + "TRANSILVANIA", "g"), "Transilvania")
      .replace(/Νέων της πόλης Gøtu(\s+)ιδρύθηκε/, "Νέων της πόλης Gøta$1ιδρύθηκε") },
  { ids: ["F26-17"], why: "Makeblijde: translate the sentences missing from the Greek bio", files: EL26,
    apply: h => h.replace(W("Χορωδία της Χρονιάς 2005-2006, ενώ το 2008 προήχθη στην ανώτατη τιμητική κατηγορία στα Χορωδιακά Τουρνουά της Ανατολικής Φλάνδρας."),
        "Χορωδία της Χρονιάς 2005-2006, κερδίζοντας στον ίδιο διαγωνισμό και το βραβείο κοινού, ενώ το 2008 προήχθη στην ανώτατη τιμητική κατηγορία στα Χορωδιακά Τουρνουά της Ανατολικής Φλάνδρας, διάκριση που διατηρεί έκτοτε.")
      .replace(W("“Musica Eterna” στη Ρώμη το 2024."), "“Musica Eterna” στη Ρώμη το 2024, που επιβεβαιώνουν τη θέση της Makeblijde ανάμεσα στις κορυφαίες γυναικείες χορωδίες της Ευρώπης.") },
  { ids: ["F26-17"], why: "Gøta: translate the sentence missing from the Greek bio", files: EL26,
    find: W("στους Ευρωπαϊκούς Χορωδιακούς Αγώνες στο Aarhus."), replace: "στους Ευρωπαϊκούς Χορωδιακούς Αγώνες στο Aarhus. Στις διοργανώσεις αυτές η χορωδία έχει κατακτήσει αρκετές υψηλές διακρίσεις και τιμές." },
  { ids: ["F26-17"], why: "Sincoro: translate what is missing from the Greek bio", files: EL26,
    apply: h => h.replace(W("που προωθούν την ισότητα, την αποδοχή και τον πολιτισμό."), "που προωθούν την ισότητα, την ένταξη, τα δικαιώματα και τον πολιτισμό.")
      .replace(W("τη σύνθεση, την παραγωγή και τις pop/jazz χορωδιακές διασκευές."), "τη σύνθεση, την παραγωγή και τις pop/jazz χορωδιακές διασκευές. Στο έργο του με τη Sincoro τον πλαισιώνει ο συνδιευθυντής και πιανίστας Francesco Del Fra.") },
  { ids: ["F26-17"], why: "Okarina: translate the sentence missing from the Greek bio", files: EL26,
    find: W("Rame Lahaj Opera Festival και PriVocalFest."), replace: "Rame Lahaj Opera Festival και PriVocalFest. Αποτελεί επίσης μέρος της εκπαιδευτικής πλατφόρμας “Planet of Children” και συμμετέχει στο EduOpera, το εκπαιδευτικό πρόγραμμα της Όπερας του Κοσόβου." },
  { ids: ["F26-17"], why: "Transilvania: translate the sentences missing from the Greek bio", files: EL26,
    apply: h => h.replace(W("στη Ρουμανία, την Ουγγαρία και τη Σερβία. Μεταξύ"), "στη Ρουμανία, την Ουγγαρία και τη Σερβία. Το σύνολο έχει αποσπάσει σημαντικές διακρίσεις σε εθνικούς και διεθνείς διαγωνισμούς. Μεταξύ")
      .replace(W("στη Μουσική και Τέχνη του 20ού αιώνα."), "στη Μουσική και Τέχνη του 20ού αιώνα. Από το 2015 διδάσκει θεωρία της μουσικής και διευθύνει τη Χορωδία “Transilvania” και την Παιδική Χορωδία “Cristale” του Μουσικού Λυκείου “Tudor Ciortea”.") },
  { ids: ["F26-17"], why: "Ambrož Čopi (registry source festivals/2025): translate the jury/seminar sentence missing from the Greek bio", files: EL25,
    find: W("Βραβείο της Δημοκρατίας της Σλοβενίας για την Εκπαίδευση."), replace: "Βραβείο της Δημοκρατίας της Σλοβενίας για την Εκπαίδευση. Προσκαλείται τακτικά ως μέλος κριτικών επιτροπών σε χορωδιακούς διαγωνισμούς ανά τον κόσμο και συμμετέχει ενεργά ως εισηγητής σε σεμινάρια χορωδιακής μουσικής και masterclasses για μαέστρους και συνθέτες." },
];
