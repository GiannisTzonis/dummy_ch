// Proofreading review fixes (approved 2026-10-12): C22, C25, K22, K25 (composition and conducting competitions 2022/2025).
const EN22 = ["icc2022.html"], EL22 = ["icc2022Greek.html"];
const EN25 = ["icc2025.html"], EL25 = ["icc2025Greek.html"];
const KEN22 = ["iccc2022.html"], KEL22 = ["iccc2022Greek.html"];
const KEN25 = ["iccc2025.html"], KEL25 = ["iccc2025Greek.html"];

export default [
  // ---------------------------------------------------------------- C22 composition 2022
  { ids: ["C22-01"], why: "Composers labelled 'Conductor:'", files: EN22, find: /Conductor: /g, replace: "Composer: ", count: 9 },
  { ids: ["C22-01"], why: "Composers labelled 'Διευθυντής:'", files: EL22, find: /Διευθυντής: /g, replace: "Συνθέτης: ", count: 9 },
  { ids: ["C22-02"], why: "Heading drops 'Composition'", files: EL22,
    find: "Επιτυχής 1ος Διαγωνισμός Χορωδιών Πρέβεζας 2022", replace: "Επιτυχής 1ος Διαγωνισμός Χορωδιακής Σύνθεσης Πρέβεζας 2022" },
  { ids: ["C22-03"], why: "Latin misspelling Haebreorum", files: [...EN22, ...EL22], find: /Haebreorum/g, replace: "Hebraeorum", count: 2 },
  { ids: ["C22-04"], why: "One spelling of the composer's name (Giorgos, as in the results)", files: EN22, find: /Yiorgos Koumaradios/g, replace: "Giorgos Koumaradios", count: 2 },
  { ids: ["C22-04"], why: "One spelling of the composer's name (Κουμαραδιός, as in the results)", files: EL22,
    apply: h => h.replace(/Γιώργο(\s+)Κουμαράδιο \(Ελλάδα\)/, "Γιώργο$1Κουμαραδιό (Ελλάδα)").replace("Ο Γιώργος Κουμαράδιος έλαβε", "Ο Γιώργος Κουμαραδιός έλαβε") },
  { ids: ["C22-05"], why: "Work titles translated in the results; keep the originals as in the prose", files: EL22,
    apply: h => h.replace(/(\s)Οι πύλες του έρωτα(\s)/, "$1The gates to love$2").replace(/(\s)Σε σένα ψάλλουμε(\s)/, "$1Tebe poem$2").replace(/(\s)Αναμένοντας στο παράθυρο(\s)/, "$1Waiting at the Window$2") },
  { ids: ["C22-06"], why: "Publisher name in Greek, unaccented", files: EL22, find: "στον Οίκο Εκδόσεων Αστρα Μουσική", replace: "στον εκδοτικό οίκο Astrum Music Publishing" },
  { ids: ["C22-07"], why: "Broken sentence in Čopi's statement", files: EN22,
    find: /I am happy that(\s+)choirmasters and a competition for composers and conductors added to this year's edition, raise(\s+)this exceptional festival/,
    replace: "I am happy that the addition of choirmasters and of competitions for composers and conductors to this year's edition$1raises$2this exceptional festival" },
  { ids: ["C22-07"], why: "'weightily designed', 'no visible searches'", files: EN22,
    find: /Subject to limitations, however, a few compositions were(\s+)artistically weightily designed and awarded\. There were no visible searches or excesses/,
    replace: "Within these limitations, however, a few compositions$1stood out for their artistic weight and were awarded. There were no notable experiments or excesses" },
  { ids: ["C22-08"], why: "Typo οργανωτμένος", files: EL22, find: /εξαιρετικά(\s+)οργανωτμένος/, replace: "εξαιρετικά$1οργανωμένος" },
  { ids: ["C22-08"], why: "Article: τον επαγγελματισμό", files: EL22, find: "και το επαγγελματισμό τους", replace: "και τον επαγγελματισμό τους" },
  { ids: ["C22-08"], why: "Participle gender: συμμετέχουσα", files: EL22, find: "που έγραψε συμμετέχοντας γεννημένη", replace: "που έγραψε συμμετέχουσα γεννημένη" },
  { ids: ["C22-09"], why: "Greek drops 'body percussion can be used'", files: EL22,
    apply: h => h.replace("SATB ή SMsATB α καπέλα.", "SATB ή SMsATB α καπέλα. Μπορούν επίσης να χρησιμοποιηθούν διάφορα κρουστά σώματος (body percussion).")
      .replace("SSA ή SMsA με ή χωρίς συνοδεία (πιάνο).", "SSA ή SMsA με ή χωρίς συνοδεία (πιάνο). Μπορούν επίσης να χρησιμοποιηθούν διάφορα κρουστά σώματος (body percussion).") },
  { ids: ["C22-11"], why: "2022 was the 40th edition of the festival, not its 40th anniversary", files: EN22, find: /on the occasion of its(\s+)40th anniversary/, replace: "on the occasion of its$140th edition" },
  { ids: ["C22-11"], why: "2022 was the 40th edition of the festival", files: EL22, find: "με αφορμή την 40η επέτειό της,", replace: "με αφορμή την 40ή διοργάνωση του φεστιβάλ," },
  { ids: ["C22-11"], why: "Same fact on the 2022 conducting page", files: KEN22, find: "On the occasion of its 40th anniversary", replace: "On the occasion of its 40th edition" },
  { ids: ["C22-11"], why: "Same fact on the 2022 conducting page", files: KEL22, find: "Με αφορμή την 40ή επέτειο του Φεστιβάλ", replace: "Με αφορμή την 40ή διοργάνωση του Φεστιβάλ" },

  // ---------------------------------------------------------------- C25 composition 2025
  { ids: ["C25-01"], why: "Brazil twice; Irland, Philipines", files: EN25,
    find: /Denmark, Irland, Brazil, USA, Philipines,(\s+)Belarus, Brazil, Mexico/, replace: "Denmark, Ireland, Brazil, USA, Philippines,$1Belarus, Mexico" },
  { ids: ["C25-02"], why: "Latin X/M/A inside Greek words", files: EL25,
    apply: h => h.replace(/Xρυσό Mετάλλιο/g, "Χρυσό Μετάλλιο").replace(/Aργυρό Mετάλλιο/g, "Αργυρό Μετάλλιο") },
  { ids: ["C25-04"], why: "Greek composers in Greek script on the Greek page (as in the special award above)", files: EL25,
    apply: h => h.replace(/Kalogeropoulos\s+Dionisis<\/span>/, "Καλογερόπουλος Διονύσης</span>").replace("Vavoulas Giorgos</span>", "Βαβούλας Γιώργος</span>") },
  { ids: ["C25-05"], why: "Space before comma", files: EL25, find: /την Ελλάδα\s+<\/span>,/, replace: "την Ελλάδα</span>," },
  { ids: ["C25-05"], why: "Closing quote before the last sentence and the date", files: EL25,
    apply: h => h.replace("μας εμπνέει διαρκώς.\"", "μας εμπνέει διαρκώς.").replace("<br>Πρέβεζα, 18 Φεβρουαρίου 2026", "<br>Πρέβεζα, 18 Φεβρουαρίου 2026\"") },

  // ---------------------------------------------------------------- K22 conducting 2022
  { ids: ["K22-02"], why: "Name: heading says Quentin", files: KEN22, find: "Quintin Beer studied", replace: "Quentin Beer studied" },
  { ids: ["K22-03"], why: "Greek capitals inside English words", files: KEN22, apply: h => h.replace("Ηe has", "He has").replace("Αfterwards she", "Afterwards she") },
  { ids: ["K22-04"], why: "Fosco Corti competition is held in Turin", files: KEN22, find: "at Turn of Italy.", replace: "in Turin, Italy." },
  { ids: ["K22-04"], why: "Fosco Corti competition is held in Turin", files: KEL22, find: "στο Turn της Ιταλίας.", replace: "στο Τορίνο της Ιταλίας." },
  { ids: ["K22-05"], why: "Spelling Khachaturian", files: [...KEN22, ...KEL22], find: /Khatsaturian/, replace: "Khachaturian" },
  { ids: ["K22-06"], why: "premiers -> premieres", files: KEN22, find: "participated in premiers of works", replace: "participated in premieres of works" },
  { ids: ["K22-06"], why: "choral conduction -> conducting", files: KEN22, find: /piano and(\s+)choral conduction for 12 years/, replace: "piano and$1choral conducting for 12 years" },
  { ids: ["K22-06"], why: "most perspective -> most promising", files: KEN22, find: /the(\s+)most perspective young conductor/, replace: "the$1most promising young conductor" },
  { ids: ["K22-06"], why: "Transliteration Ta paidia", files: KEN22, find: "Ta padia kato", replace: "Ta paidia kato" },
  { ids: ["K22-06"], why: "Schumann title Der Wassermann", files: [...KEN22, ...KEL22], find: /Der(\s+)Wasserman\b/, replace: "Der$1Wassermann" },
  { ids: ["K22-07"], why: "Garbled biography sentence", files: KEN22,
    find: /was born in 2000 at Latvia, he has studied choir singer at Riga’s(\s+)Cathedral Choir School and he is currently studying Choir Conductor at the Latvian/,
    replace: "was born in 2000 in Latvia. He studied choral singing at Riga’s$1Cathedral Choir School and he is currently studying Choral Conducting at the Latvian" },
  { ids: ["K22-09"], why: "Closing quote missing", files: KEN22, find: "<h3>Children’s Choir “Armonia</h3>", replace: "<h3>Children’s Choir “Armonia”</h3>" },
  { ids: ["K22-11"], why: "Word cut off", files: KEL22, find: "του Χορω Συλλόγου", replace: "του Χορωδιακού Συλλόγου" },
  { ids: ["K22-12"], why: "Not a word", files: KEL22, find: "επιλέγονται κληρωτίνος.", replace: "επιλέγονται με κλήρωση." },
  { ids: ["K22-13"], why: "'Public concert venue' -> public concert", files: KEL22, find: "Δημόσιος Συναυλιακός Χώρος (Χορωδία", replace: "Δημόσια Συναυλία (Χορωδία" },
  { ids: ["K22-15"], why: "Royal Academy of Music", files: KEL22,
    apply: h => h.replace("στην Ακαδημία Μουσικής του Βασιλικού Κολλεγίου.", "στη Βασιλική Ακαδημία Μουσικής.").replace(/βραβευθεί από την Ακαδημία Μουσικής καθώς/, "βραβευθεί από τη Βασιλική Ακαδημία Μουσικής καθώς") },
  { ids: ["K22-15"], why: "οπερέτες; concerto -> concert", files: KEL22,
    apply: h => h.replace("όπερες και όπερετες.", "όπερες και οπερέτες.").replace("ήταν το κονσέρτο που", "ήταν η συναυλία που") },
  { ids: ["K22-16"], why: "Article Η Επιτροπή", files: KEL22, find: "Το Επιτροπή εξουσιοδοτείται", replace: "Η Επιτροπή εξουσιοδοτείται" },
  { ids: ["K22-16"], why: "Κάθε συμμετέχων", files: KEL22, find: "Κάθε συμμετέχοντας ερμηνεύει", replace: "Κάθε συμμετέχων ερμηνεύει" },
  { ids: ["K22-16"], why: "'προοπτικό' -> πιο πολλά υποσχόμενο", files: KEL22, find: "για τον πιο προοπτικό νέο διευθυντή", replace: "για τον πιο πολλά υποσχόμενο νέο διευθυντή" },

  // ---------------------------------------------------------------- K25 conducting 2025
  { ids: ["K25-01"], why: "Competition runs 8-10 July (intro, Category B, prize-giving)", files: KEN25, find: "<a>8th-9th July 2025</a>", replace: "<a>8th-10th July 2025</a>" },
  { ids: ["K25-01"], why: "Competition runs 8-10 July", files: KEL25, find: "<a>8-9 Ιουλίου 2025</a>", replace: "<a>8-10 Ιουλίου 2025</a>" },
  // K25-05: the TPCC biography was printed four times and the demonstrative choirs twice; keep one of each
  // (the full TPCC text after the awards; the full KGBL/Armonia texts in the "Demonstrative Choirs" block).
  { ids: ["K25-05"], why: "Repeated TPCC description (short copy in Demonstrative Choirs)", files: KEN25,
    find: /\s*<h4 class="my-3">Taipei Philharmonic Chamber Choir<\/h4>[\s\S]*?<\/p>/, replace: "" },
  { ids: ["K25-05", "K25-04"], why: "Repeated TPCC description (short copy; its role statement is the reversed one)", files: KEL25,
    find: /\s*<h4 class="my-3">Taipei Philharmonic Chamber Choir<\/h4>[\s\S]*?<\/p>/, replace: "" },
  { ids: ["K25-05"], why: "Repeated TPCC description (3rd copy)", files: KEN25,
    find: /<h2 class="mb-4">Taipei Philharmonic Chamber Choir \(Taiwan\)<\/h2>(?:(?!<section)[\s\S])*?(?=<h2 class="mt-5 mb-4">Competition Program \/ Category - A)/, replace: "" },
  { ids: ["K25-05"], why: "Repeated TPCC description (4th copy)", files: KEN25,
    find: /<h2 class="mb-4">Taipei Philharmonic Chamber Choir \(Taiwan\)<\/h2>(?:(?!<section)[\s\S])*?(?=<h2 class="mt-5 mb-4">Demonstrative Choir \/ Category A)/, replace: "" },
  { ids: ["K25-05"], why: "Repeated TPCC description (3rd copy)", files: KEL25,
    find: /<h2 class="mb-4">Taipei Philharmonic Chamber Choir \(Ταϊβάν\)<\/h2>(?:(?!<section)[\s\S])*?(?=<h2 class="mt-5 mb-4">Πρόγραμμα Διαγωνισμού \/ Κατηγορία - A)/, replace: "" },
  { ids: ["K25-05"], why: "Repeated TPCC description (4th copy)", files: KEL25,
    find: /<h2 class="mb-4">Taipei Philharmonic Chamber Choir \(Ταϊβάν\)<\/h2>(?:(?!<section)[\s\S])*?(?=<h2 class="mt-5 mb-4">Υποδειγματική Χορωδία \/ Κατηγορία Α)/, replace: "" },
  { ids: ["K25-05"], why: "KGBL described twice: drop the short copy (all its facts are in the full description)", files: KEN25,
    find: /<h2 class="mt-5 mb-4">Demonstrative Choir \/ Category A<\/h2>[\s\S]*?(?=<h2 class="mt-5 mb-4">Competition Program \/ Category - B)/, replace: "" },
  { ids: ["K25-05"], why: "KGBL described twice: drop the short copy", files: KEL25,
    find: /<h2 class="mt-5 mb-4">Υποδειγματική Χορωδία \/ Κατηγορία Α<\/h2>[\s\S]*?(?=<h2 class="mt-5 mb-4">Πρόγραμμα Διαγωνισμού \/ Κατηγορία - Β)/, replace: "" },
  { ids: ["K25-05"], why: "Armonia described twice: drop the short copy, moving its facts that the full description lacks into it", files: KEN25,
    apply: h => h
      .replace(/<h2 class="mt-5 mb-4">Demonstrative Choir \/ Category B<\/h2>[\s\S]*?(?=<h2 class="mt-5 mb-4">Financial Obligations)/, "")
      .replace(/(\s+)children's choirs\.(\s+)<br><br>/, "$1children's choirs.$2<br><br>$1It was twice recognized as the best Greek children’s choir at the International Choral Festival of Athens. In October 2023, it won the gold medal and 1st place at the 18th International \"Gaude Cantem\" Competition in Poland. In 2024, it was selected for the Eurochestries International Festival in France, where it collaborated with youth orchestras and performed 10 concerts showcasing Greek repertoire.$2<br><br>") },
  { ids: ["K25-05"], why: "Armonia described twice: drop the short copy, moving its facts into the full description", files: KEL25,
    apply: h => h
      .replace(/<h2 class="mt-5 mb-4">Υποδειγματική Χορωδία \/ Κατηγορία Β<\/h2>[\s\S]*?(?=<h2 class="mt-5 mb-4">Οικονομικές Υποχρεώσεις)/, "")
      .replace(/(\s+)παιδική χορωδιακή μουσική\.(\s+)<br><br>/, "$1παιδική χορωδιακή μουσική.$2<br><br>$1Έχει αναδειχθεί δύο φορές καλύτερη ελληνική παιδική χορωδία στο Διεθνές Χορωδιακό Φεστιβάλ της Αθήνας. Τον Οκτώβριο του 2023 κέρδισε το χρυσό μετάλλιο και την 1η θέση στον 18ο Διεθνή Διαγωνισμό «Gaude Cantem» στην Πολωνία. Το 2024 επιλέχθηκε για το Διεθνές Φεστιβάλ Eurochestries στη Γαλλία, όπου συνεργάστηκε με νεανικές ορχήστρες και έδωσε 10 συναυλίες με ελληνικό ρεπερτόριο.$2<br><br>") },
  { ids: ["K25-03"], why: "Final-concert rule contradicts the finals rules (two obligatory + two drawn by lot)", files: KEN25,
    find: /Each participant performs(\s+)the obligatory composition and three rehearsed compositions\./,
    replace: "Each participant performs$1the two obligatory compositions and the two compositions drawn by lot." },
  { ids: ["K25-06"], why: "Greek has 3 of 7 special awards; no Scoring System, no Choir's Special Award", files: KEL25,
    find: /<h3 class="mt-4 mb-2">ΕΙΔΙΚΑ ΒΡΑΒΕΙΑ<\/h3>\s*<ul>\s*<li>Βραβείο Πιο Εμπνευσμένου Μαέστρου<\/li>\s*<li>Βραβείο Παιδαγωγικής Προσέγγισης<\/li>\s*<li>Βραβείο Υποσχόμενου Νέου Μαέστρου<\/li>\s*<\/ul>/,
    replace: [
      '<h3 class="mt-4 mb-2">Σύστημα Βαθμολόγησης</h3>',
      '                <p class="text-center">Η κριτική επιτροπή βαθμολογεί τους διαγωνιζόμενους με 0 έως 80 πόντους. Η χορωδία βαθμολογεί με 0 έως 20 πόντους. Στον τελικό γύρο δεν μεταφέρονται οι βαθμολογίες των προηγούμενων γύρων.</p>',
      '                <ul>',
      '                  <li>1ο Βραβείο: τουλάχιστον 90 πόντοι</li>',
      '                  <li>2ο Βραβείο: τουλάχιστον 85 πόντοι</li>',
      '                  <li>3ο Βραβείο: τουλάχιστον 80 πόντοι</li>',
      '                </ul>',
      '                <h3 class="mt-4 mb-2">ΕΙΔΙΚΑ ΒΡΑΒΕΙΑ</h3>',
      '                <p class="text-center">Η κριτική επιτροπή μπορεί να απονείμει τις ακόλουθες ειδικές διακρίσεις:</p>',
      '                <ul>',
      '                  <li>Βραβείο Πιο Εμπνευσμένου Μαέστρου</li>',
      '                  <li>Βραβείο Παιδαγωγικής Προσέγγισης</li>',
      '                  <li>Βραβείο Υποσχόμενου Νέου Μαέστρου (γεννημένου μετά τον Ιούλιο του 2000)</li>',
      '                  <li>Βραβείο Καλύτερης Ερμηνείας Σύγχρονης Σύνθεσης (Τελικός)</li>',
      '                  <li>Βραβείο Καλύτερης Ερμηνείας Αναγεννησιακής Σύνθεσης (Τελικός)</li>',
      '                  <li>Βραβείο Καλύτερης Ερμηνείας Ρομαντικής Σύνθεσης (Τελικός)</li>',
      '                  <li>Βραβείο Καλύτερου Έλληνα Μαέστρου</li>',
      '                </ul>',
      '                <p class="text-center"><em>Η κριτική επιτροπή μπορεί να προτείνει επιπλέον βραβεία.</em></p>',
      '                <h3 class="mt-4 mb-2">ΕΙΔΙΚΟ ΒΡΑΒΕΙΟ ΤΗΣ ΧΟΡΩΔΙΑΣ</h3>',
      '                <p class="text-center">Η Χορωδία Δωματίου KGBL θα απονείμει ειδικό πρακτικό βραβείο στον πιο χαρισματικό μαέστρο της Τελικής Συναυλίας.</p>',
    ].join("\r\n") },
  { ids: ["K25-07", "K25-09"], why: "Greek rounds 1-2 lack the rule; Obligatory (no rehearsal) vs Compulsory (rehearsed) distinguished", files: KEL25,
    apply: h => {
      const rule = (ind) => `<ul>\r\n${ind}  <li>Κάθε συμμετέχων διευθύνει το υποχρεωτικό κομμάτι (χωρίς πρόβα) και κάνει πρόβα 20 λεπτών στο υποχρεωτικό κομμάτι πρόβας και σε μία σύνθεση που κληρώνεται.</li>\r\n${ind}</ul>\r\n${ind}<h4 class="m-2">Λίστα συνθέσεων:</h4>`;
      return h
        .replace(/(<strong>Αναγεννησιακή μουσική<\/strong> - Μέγ\. 8 συμμετέχοντες<\/p>\r\n(\s*))<h4 class="m-2">Λίστα συνθέσεων:<\/h4>/, (m, a, ind) => a + rule(ind))
        .replace(/(<strong>Ρομαντική μουσική<\/strong> - Μέγ\. 8 συμμετέχοντες<\/p>\r\n(\s*))<h4 class="m-2">Λίστα συνθέσεων:<\/h4>/, (m, a, ind) => a + rule(ind))
        .replace("<li>Υποχρεωτικό κομμάτι: William Byrd", "<li>Υποχρεωτικό κομμάτι (χωρίς πρόβα): William Byrd")
        .replace("<li>Υποχρεωτικό κομμάτι: Giovanni Gabrieli", "<li>Υποχρεωτικό κομμάτι πρόβας: Giovanni Gabrieli")
        .replace("<li>Υποχρεωτικό κομμάτι: Gabriel Fauré", "<li>Υποχρεωτικό κομμάτι (χωρίς πρόβα): Gabriel Fauré")
        .replace("<li>Υποχρεωτικό κομμάτι: Giuseppe Verdi", "<li>Υποχρεωτικό κομμάτι πρόβας: Giuseppe Verdi");
    } },
  { ids: ["K25-07", "K25-03"], why: "Greek finals: list of compositions and final-concert rule missing", files: KEL25,
    apply: h => h
      .replace(/(δύο επιπλέον συνθέσεις που επιλέγονται με κλήρωση\.<\/p>\r\n(\s*))/, (m, a, ind) => a
        + `<h4 class="m-2">Λίστα συνθέσεων:</h4>\r\n${ind}<ul>\r\n${ind}  <li>Υποχρεωτικές συνθέσεις: Giovanni Gabrieli - <em>Jubilate Deo</em>, Giuseppe Verdi - <em>Pater Noster</em></li>\r\n`
        + `${ind}  <li>Συνθέσεις του 21ου αιώνα (με κλήρωση): Έργα των Tine Bec, Federica Lo Pinto, Andrej Makor, Klara Mlakar, Ambrož Čopi, Tadeja Vulc</li>\r\n${ind}</ul>\r\n${ind}`)
      .replace("<p class=\"text-center\">Δημόσια συναυλία με τη Χορωδία Δωματίου KGBL.</p>",
        "<p class=\"text-center\">Δημόσια συναυλία με τη Χορωδία Δωματίου KGBL. Κάθε συμμετέχων ερμηνεύει τις δύο υποχρεωτικές συνθέσεις και τις δύο συνθέσεις που κληρώθηκαν.</p>") },
  { ids: ["K25-08"], why: "Garbled round name (1st round is Renaissance)", files: KEN25, find: "Renaissance Music Romantic (1st Round)", replace: "Renaissance Music (1st Round)" },
  { ids: ["K25-08"], why: "1st round is Renaissance only", files: KEL25, find: "Αναγεννησιακή και Ρομαντική Μουσική (1ος Γύρος)", replace: "Αναγεννησιακή Μουσική (1ος Γύρος)" },
  { ids: ["K25-10"], why: "Spelling Teresa; 'in the Vatican' (only copy left after K25-05)", files: KEN25,
    find: /Blessed Mother Theresa(\s+)of Calcutta” in Vatican\./, replace: "Blessed Mother Teresa$1of Calcutta” in the Vatican." },
  { ids: ["K25-11"], why: "Conservatory named three ways: use the name of the choir descriptions", files: KEN25,
    find: /KGBL Chamber Choir of(\s+)the National Conservatory of Slovenia\./, replace: "KGBL Chamber Choir of$1the Conservatorium of Music and Ballet Ljubljana." },
  { ids: ["K25-11"], why: "Conservatory named three ways", files: KEL25,
    apply: h => h.replace("του Εθνικού Ωδείου Σλοβενίας", "του Κονσερβατορίου Μουσικής και Μπαλέτου της Λιουμπλιάνα")
      .replace(/του Κρατικού Ωδείου Μουσικής και Μπαλέτου της(\s+)Λιουμπλιάνα/, "του Κονσερβατορίου Μουσικής και Μπαλέτου της$1Λιουμπλιάνα") },
  { ids: ["K25-12"], why: "'Δοκιμή' for rehearsal -> Πρόβα", files: KEL25,
    apply: h => h.replace(/<li>Δοκιμή με την /g, "<li>Πρόβα με την ")
      .replace("<p class=\"text-center\">Δοκιμή με τη Χορωδία Δωματίου KGBL", "<p class=\"text-center\">Πρόβα με τη Χορωδία Δωματίου KGBL")
      .replace("εκτός από τη μεσημεριανή δοκιμή με τη χορωδία", "εκτός από την απογευματινή πρόβα με τη χορωδία")
      .replace("DVD από συναυλία και δοκιμή -", "DVD από συναυλία και πρόβα -") },
  { ids: ["K25-12", "K25-09"], why: "'κίνηση' -> μέρος; 'Αναγκαστικό' -> distinct compulsory term", files: KEL25,
    apply: h => h
      .replace(/διευθύνει την υποχρεωτική σύνθεση \(χωρίς πρόβα\) και πραγματοποιεί πρόβα 20 λεπτών(\s+)στην υποχρεωτική σύνθεση και μία κίνηση από την Petite Mass που κληρώνεται\./,
        "διευθύνει το υποχρεωτικό κομμάτι (χωρίς πρόβα) και πραγματοποιεί πρόβα 20 λεπτών$1στο υποχρεωτικό κομμάτι πρόβας και σε ένα μέρος της Petite Mass που κληρώνεται.")
      .replace("<li>Υποχρεωτικό κομμάτι: Konstantinos Matis", "<li>Υποχρεωτικό κομμάτι (χωρίς πρόβα): Konstantinos Matis")
      .replace("<li>Αναγκαστικό κομμάτι: Tasos Pappas", "<li>Υποχρεωτικό κομμάτι πρόβας: Tasos Pappas") },
  { ids: ["K25-13"], why: "Post cannot go to an e-mail address: give the postal address used elsewhere on the site", files: KEN25,
    find: /<li>By post or WeTransfer to(\s+)<a/, replace: "<li>By post (Choral Society “Armonia” of Preveza, P. O. Box 29, GR – 481 00, Preveza GREECE) or by WeTransfer to$1<a" },
  { ids: ["K25-13"], why: "Same in Greek", files: KEL25,
    find: /<li>Με ταχυδρομείο ή WeTransfer στο(\s+)<a/, replace: "<li>Με ταχυδρομείο (Χορωδία \"Αρμονία\" Πρέβεζας, Τ.Θ. 29, Τ.Κ. 481 00, Πρέβεζα ΕΛΛΑΔΑ) ή μέσω WeTransfer στο$1<a" },
];
