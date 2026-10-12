// Proofreading review fixes (approved 2026-10-12): M17, M18, M19, M21, M22, M23, M26, MX
// (masterclass pages 2017-2026 and the Previous Masterclasses listing).
//
// One naming scheme for the workshop (MX-02, M21-04): "Nth Choral Conducting Workshop & Seminar" /
// "Nο Εργαστήριο & Σεμινάριο Διεύθυνσης Χορωδίας" -- the form of the listing, its heading and most
// pages. The 2026 edition keeps its own title ("7th Masterclass for Choral Conductors 2026").
const I = "\r\n"; // legacy files use CRLF

export default [
  // ---------------------------------------------------------------- M17 (2017)
  { ids: ["M17-02"], why: "2017 was the 35th festival (the page says 35th twice)", files: ["masterclass2017.html"],
    find: "Opening Ceremony of 36th ICF", replace: "Opening Ceremony of 35th ICF" },
  { ids: ["M17-02"], why: "2017 was the 35th festival; accent on Έναρξης", files: ["masterclass2017Greek.html"],
    find: "Τελετή Εναρξης του 36ου ΔΧΦ", replace: "Τελετή Έναρξης του 35ου ΔΧΦ" },
  { ids: ["M17-03"], why: "Ordinal '23th'", files: ["masterclass2017.html"],
    find: "the 23th international Choral Competition of Music", replace: "the 23rd International Choral Competition" },
  { ids: ["M17-04"], why: "Case/gender of 'ο 23ος Διεθνής Χορωδιακός Διαγωνισμός'", files: ["masterclass2017Greek.html"],
    find: "θα πραγματοποιηθεί το 23ο Διεθνές Χορωδιακό Διαγωνισμό Μουσικής", replace: "θα πραγματοποιηθεί ο 23ος Διεθνής Χορωδιακός Διαγωνισμός" },
  { ids: ["M17-05"], why: "'Intonation' translated as 'intensity'", files: ["masterclass2017Greek.html"],
    find: "Εντονότητα στη χορωδία", replace: "Καθαρότητα τονισμού στη χορωδία" },
  { ids: ["M17-06"], why: "Space inside 'προβών'; accent of 'παρτιτουρών'", files: ["masterclass2017Greek.html"],
    apply: h => h.replace("Οργάνωση των πρόβ ων", "Οργάνωση των προβών").replace("των παρτιτούρων με τους", "των παρτιτουρών με τους") },
  { ids: ["M17-07"], why: "'Rehearse' translated as 'project' (x3)", files: ["masterclass2017Greek.html"],
    find: "παρακολουθούν και προβάλλουν / μαθαίνουν", replace: "παρακολουθούν και κάνουν πρόβα / μαθαίνουν", count: 3 },
  { ids: ["M17-08"], why: "Broken phrase / gender: 'ένα επίδειξης χορωδιακό σύνολο', 'ο Ακαδημαϊκός Χορωδιακός Σύνολο'", files: ["masterclass2017Greek.html"],
    apply: h => h.replace("με ένα επίδειξης χορωδιακό σύνολο·", "με ένα υποδειγματικό χορωδιακό σύνολο·")
      .replace(/θα είναι ο Ακαδημαϊκός(\s+)Χορωδιακός Σύνολο του Πανεπιστημίου/, "θα είναι η Ακαδημαϊκή$1Χορωδία του Πανεπιστημίου") },
  { ids: ["MX-02"], why: "One naming scheme for the workshop titles", files: ["masterclass2017Greek.html"],
    find: "1ο Εργαστήρι & Σεμινάριο Χορωδιακής Διεύθυνσης", replace: "1ο Εργαστήριο & Σεμινάριο Διεύθυνσης Χορωδίας" },

  // ---------------------------------------------------------------- M18 (2018)
  { ids: ["M18-01"], why: "'Intonation' translated as 'orchestration'", files: ["masterclass2018Greek.html"],
    find: "Ενορχήστρωση στη χορωδία", replace: "Καθαρότητα τονισμού στη χορωδία" },
  { ids: ["M18-02"], why: "Case/gender of the competition; 'οποιαδήποτε είδους'; 'επίδειγμα χορωδίας'", files: ["masterclass2018Greek.html"],
    apply: h => h.replace("θα πραγματοποιηθεί το 24ο διεθνές Χορωδιακό Διαγωνισμό Μουσικής", "θα πραγματοποιηθεί ο 24ος Διεθνής Χορωδιακός Διαγωνισμός")
      .replace("οποιαδήποτε είδους υλικό", "οποιοδήποτε είδος υλικού")
      .replace(/με ένα(\s+)επίδειγμα χορωδίας·/, "με μια$1υποδειγματική χορωδία·") },
  { ids: ["M18-03"], why: "Primorska, as elsewhere on the site", files: ["masterclass2018Greek.html"],
    find: /(Πανεπιστημίου\s+)της Πριμόριε\./, replace: "$1της Πριμόρσκα." },
  { ids: ["MX-02"], why: "One naming scheme for the workshop titles", files: ["masterclass2018Greek.html"],
    find: "2ο Σεμινάριο & Εργαστήριο Χορωδιακής Διεύθυνσης", replace: "2ο Εργαστήριο & Σεμινάριο Διεύθυνσης Χορωδίας" },

  // ---------------------------------------------------------------- M19 (2019)
  { ids: ["M19-01"], why: "Choir name read 'Music Ballet of Ljubljana'", files: ["masterclass2019Greek.html"],
    apply: h => h.replace(/του Μουσικού Μπαλέτου του Λιουμπλιάνα/g, "του Κονσερβατορίου Μουσικής και Μπαλέτου της Λιουμπλιάνα")
      .replace("στο Μουσικό και Μπαλέτο του Λιουμπλιάνα", "στο Κονσερβατόριο Μουσικής και Μπαλέτου της Λιουμπλιάνα") },
  { ids: ["M19-02"], why: "'Place' (ranking) translated as 'μέρος'", files: ["masterclass2019Greek.html"],
    apply: h => h.replace(/πρώτο μέρος/g, "πρώτη θέση").replace("δεύτερο μέρος", "δεύτερη θέση").replace("τρίτο μέρος", "τρίτη θέση") },
  { ids: ["M19-03"], why: "'Naša pesem' mistranslated", files: ["masterclass2019Greek.html"],
    find: /''Η(\s+)Επιτυχία μας'' \(Εμάς το τραγούδι\)/, replace: "''Naša$1pesem'' (Το τραγούδι μας)" },
  { ids: ["M19-04"], why: "'Intonation' translated as 'orchestration'", files: ["masterclass2019Greek.html"],
    find: "Ενορχήστρωση στο χορωδιακό σύνολο", replace: "Καθαρότητα τονισμού στο χορωδιακό σύνολο" },
  { ids: ["M19-05"], why: "'Commissioned' translated as 'edited'", files: ["masterclass2019Greek.html"],
    apply: h => h.replace("η χορωδία είχε επιμεληθεί πολλούς εξέχοντες", "η χορωδία ανέθεσε χορωδιακά έργα σε πολλούς εξέχοντες")
      .replace(/Andrej Makor για τα χορωδιακά τους έργα και ενθάρρυνε/, "Andrej Makor και ενθάρρυνε") },
  { ids: ["M19-06"], why: "Typos: Talinn, achivements, Swizerland, successfuly", files: ["masterclass2019.html"],
    apply: h => h.replace("competition Talinn (Estonia", "competition Tallinn (Estonia").replace("various achivements at", "various achievements at")
      .replace("Montreux (Swizerland, 2014)", "Montreux (Switzerland, 2014)").replace("The choir successfuly performed", "The choir successfully performed") },
  { ids: ["M19-06"], why: "Typo: Talinn", files: ["masterclass2019Greek.html"],
    find: "Χορωδιών Talinn (Εσθονία", replace: "Χορωδιών Tallinn (Εσθονία" },
  { ids: ["M19-07"], why: "Gender 'την υποδειγματική χορωδία'; ';' for the Greek '·'", files: ["masterclass2019Greek.html"],
    apply: h => h.replace(/Masterclass με το υποδειγματική χορωδία/g, "Masterclass με την υποδειγματική χορωδία")
      .replace(/χορωδιακό σύνολο; το(\s+)υποδειγματική χορωδία θα είναι/, "χορωδιακό σύνολο· η$1υποδειγματική χορωδία θα είναι") },
  { ids: ["M19-08"], why: "Same choir listed twice (KGBL = the Conservatory of Music and Ballet Ljubljana): merge into one entry", files: ["masterclass2019.html"],
    find: /<h3>"The Chamber choir KGBL"<\/h3>\s*<br>\s*/, replace: "" },
  { ids: ["M19-08"], why: "Same choir listed twice: merge into one entry", files: ["masterclass2019Greek.html"],
    find: /<h3>"Η Χορωδία Δωματίου KGBL"<\/h3>\s*<br>\s*/, replace: "" },

  // ---------------------------------------------------------------- M21 (2021)
  { ids: ["M21-02", "M21-03"], why: "'εασίτερες' is not a word; 'literature' means repertoire; 'συλλογικότητα' for ensemble", files: ["masterclass2021Greek.html"],
    apply: h => h.replace("να μάθουν για νέα λογοτεχνία", "να γνωρίσουν νέο ρεπερτόριο")
      .replace(/να δοκιμάσουν(\s+)τις εασίτερες συλλογικές εργασίες\./, "να δοκιμαστούν$1σε ευκολότερο ρεπερτόριο.")
      .replace("με μια συλλογικότητα υψηλού επιπέδου", "με ένα σύνολο υψηλού επιπέδου") },
  { ids: ["M21-04", "MX-02"], why: "One name for the workshop (title and intro)", files: ["masterclass2021.html"],
    apply: h => h.replace("<h1>4th Choral Conducting Workshop and Seminar</h1>", "<h1>4th Choral Conducting Workshop & Seminar</h1>")
      .replace(/the 4th Choral Conducting Seminar and Masterclass,/, "the 4th Choral Conducting Workshop & Seminar,") },
  { ids: ["M21-04", "MX-02"], why: "One name for the workshop (title and intro)", files: ["masterclass2021Greek.html"],
    apply: h => h.replace("<h1>4ο Εργαστήρι και Σεμινάριο Χορωδιακής Διεύθυνσης</h1>", "<h1>4ο Εργαστήριο & Σεμινάριο Διεύθυνσης Χορωδίας</h1>")
      .replace(/το 4ο Σεμινάριο και Masterclass Χορωδιακής(\s+)Διεύθυνσης,/, "το 4ο Εργαστήριο & Σεμινάριο Διεύθυνσης$1Χορωδίας,") },

  // ---------------------------------------------------------------- M22 (2022)
  { ids: ["M22-01", "M22-02", "M22-03"], why: "Latin work titles machine-translated: keep the original titles", files: ["masterclass2022Greek.html"],
    apply: h => h.replace("Άγιος (από τη Μεσσηνιακή Μέσα)", "Sanctus (από τη Missa Augusta)")
      .replace("Javier Busto (1949): Αλληλούια Παρθένε Μαρία", "Javier Busto (1949): Ave Maria")
      .replace("Giuseppe de Rosa (1973): Σταυροπάθεια Νικητής", "Giuseppe de Rosa (1973): Crucifixus Νικητής")
      .replace("Vytautas Miškinis (1954): Χαίρε Βασίλισσα των Ουρανών", "Vytautas Miškinis (1954): Ave Regina Coelorum")
      .replace("Salvo Gangi (1974): Σήμερον Χριστός Γεννάται", "Salvo Gangi (1974): Hodie Christus Natus Est")
      .replace("Ambrož Čopi (1973): Αλληλούια, Υμνήσατε τον Κύριον & Πάντα τα Έθνη", "Ambrož Čopi (1973): Alleluia, Laudate Dominum & Omnes Gentes")
      .replace("Vytautas Miškinis (1954): Άσοτε Τω Κυρίω", "Vytautas Miškinis (1954): Cantate Domino")
      .replace("Gioachino Rossini (1792–1868): Ω Θεία Μυστήριο", "Gioachino Rossini (1792–1868): O Salutaris Hostia")
      .replace("Anton Bruckner (1824–1896): Ενταύθα η Τοποθεσία", "Anton Bruckner (1824–1896): Locus Iste")
      .replace("Maurice Durufle (1902–1986): Πού Είναι η Αγάπη", "Maurice Duruflé (1902–1986): Ubi Caritas") },
  { ids: ["M22-04"], why: "'Βύκα' for 'Μπήκα'; accent of 'Άσμα'", files: ["masterclass2022Greek.html"],
    apply: h => h.replace("Σε Καινούργια Βάρκα Βύκα", "Σε Καινούργια Βάρκα Μπήκα").replace("Ασμά Ασμάτων", "Άσμα Ασμάτων") },
  { ids: ["M22-05"], why: "Stray 'V' and spelling of Ivan Kavaldzhiev (as on the Greek page)", files: ["masterclass2022.html"],
    find: "VIvan Kavaldijev (1891–1959)", replace: "Ivan Kavaldzhiev (1891–1959)" },
  { ids: ["M22-06"], why: "'Manual technique' (conducting gesture) translated as 'manual labour'", files: ["masterclass2022Greek.html"],
    find: "Βασικές αρχές χειρωνακτικής τεχνικής", replace: "Βασικές αρχές τεχνικής χειρονομίας" },
  { ids: ["M22-07"], why: "Accent: Γιολδάση (x4)", files: ["masterclass2022Greek.html"],
    find: /Γιολδασή/g, replace: "Γιολδάση", count: 4 },
  { ids: ["M22-08"], why: "Ordinal gender '56ος'; dates '4η έως 6η'; 'Άλλη μίας καινοτομία'", files: ["masterclass2022Greek.html"],
    apply: h => h.replace("56ο Διεθνής Διαγωνισμός", "56ος Διεθνής Διαγωνισμός")
      .replace("από τις 4η έως τις 6η Ιουλίου", "από 4 έως 6 Ιουλίου")
      .replace(/Κατά τη διάρκεια των(\s+)4η-6η Ιουλίου 2022,/, "Από 4 έως$16 Ιουλίου 2022,")
      .replace("Άλλη μίας καινοτομία", "Μία ακόμη καινοτομία") },
  { ids: ["M22-10"], why: "'Meet Composer', 'Great Rehearsal', '12:00 a.m.', 'Durufle'", files: ["masterclass2022.html"],
    apply: h => h.replace(/Meet Composer \(/g, "Meet the Composer (")
      .replace("Great Rehearsal for Final Concert", "General Rehearsal for Final Concert")
      .replace("<b>10:00 - 12:00 a.m.</b>", "<b>10:00 - 12:00 p.m.</b>")
      .replace("Maurice Durufle (1902–1986)", "Maurice Duruflé (1902–1986)") },
  { ids: ["M22-10"], why: "Same errors on the Greek page: 'Μεγάλη πρόβα' (General rehearsal), '12:00 π.μ.'", files: ["masterclass2022Greek.html"],
    apply: h => h.replace("Μεγάλη πρόβα για την Τελική Συναυλία", "Γενική πρόβα για την Τελική Συναυλία")
      .replace("<b>10:00 - 12:00 π.μ.</b>", "<b>10:00 - 12:00 μ.μ.</b>") },
  { ids: ["MX-02"], why: "One naming scheme for the workshop (title and intro)", files: ["masterclass2022.html"],
    apply: h => h.replace(/(<h1>\s+)5th Choral Conducting Workshop and Seminar(\s+<\/h1>)/, "$15th Choral Conducting Workshop & Seminar$2")
      .replace(/the 5th Choral(\s+)Conducting Seminar and Masterclass,/, "the 5th Choral$1Conducting Workshop & Seminar,") },
  { ids: ["MX-02"], why: "One naming scheme for the workshop (title and intro)", files: ["masterclass2022Greek.html"],
    apply: h => h.replace(/(<h1>\s+)5ο Εργαστήριο και Σεμινάριο Διεύθυνσης Χορωδίας(\s+<\/h1>)/, "$15ο Εργαστήριο & Σεμινάριο Διεύθυνσης Χορωδίας$2")
      .replace(/το 5ο(\s+)Σεμινάριο και Masterclass Χορωδίας,/, "το 5ο$1Εργαστήριο & Σεμινάριο Διεύθυνσης Χορωδίας,") },

  // ---------------------------------------------------------------- M23 (2023)
  { ids: ["M23-01", "M23-02", "M23-04"], why: "Fees text copied from 2021: the 2023 demonstrative choir is Utopia & Reality (mixed), the final concert is on 4 July; 'more that welcome'", files: ["masterclass2023.html"],
    apply: h => h.replace(/to work(\s+)on equal voices choral repertoire with the Female Vocal Ensemble Voci Contra Tempo\./, "to work$1on the choral repertoire with the Utopia & Reality Chamber Choir.")
      .replace(/to conduct at the Final Concert \(7th July\)\./, "to conduct at the Final Concert (4th July).")
      .replace("will be more that welcome", "will be more than welcome") },
  { ids: ["M23-04"], why: "Typos: Theathre, Artic, 'memorable performed at the numerous', 'The 12.'", files: ["masterclass2023.html"],
    apply: h => h.replace("Mariinsky Theathre", "Mariinsky Theatre").replace("Artic Philharmonic", "Arctic Philharmonic")
      .replace("memorable performed at the numerous festivals", "performed memorably at numerous festivals")
      .replace("Norway, The 12. China", "Norway, the 12th China") },
  { ids: ["M23-05"], why: "Latin: 'omnis potestas'", files: ["masterclass2023.html", "masterclass2023Greek.html"],
    find: "Data est mihi omnes potestas", replace: "Data est mihi omnis potestas" },
  { ids: ["M23-06"], why: "Typos 'Masteclass' (x5), 'υποδήγματική', 'δείγματικό'", files: ["masterclass2023Greek.html"],
    apply: h => h.replace(/Masteclass με υποδειγματική/g, "Masterclass με υποδειγματική")
      .replace(/Η υποδήγματική(\s+)Χορωδία/, "Η υποδειγματική$1Χορωδία")
      .replace("ως δείγματικό σύνολο", "ως υποδειγματικό σύνολο") },
  { ids: ["M23-07"], why: "Machine translation: City of Derry festival name, 'ολονύκτια' (all-night), 'διοργανώτρια' (Artist in Residence)", files: ["masterclass2023Greek.html"],
    apply: h => h.replace(/το Φεστιβάλ(\s+)Χορωδιακής Πόλης του Ντέρι στη/, "το City of Derry$1International Choral Festival στη")
      .replace("μία ολονύκτια συναυλία", "μία ολοκληρωμένη βραδινή συναυλία")
      .replace(/ή ως(\s+)διοργανώτρια\)/, "ή ως$1Artist in Residence)") },
  { ids: ["M23-08"], why: "'απευθυνμένο από', 'βιβλιογραφία' for repertoire, 'διεύθυνση της χορωδιακής διεύθυνσης'", files: ["masterclass2023Greek.html"],
    apply: h => h.replace("Το Masterclass είναι απευθυνμένο από διευθυντές", "Το Masterclass απευθύνεται σε διευθυντές")
      .replace("προσαρμόσουν τη βιβλιογραφία στο επίπεδο", "προσαρμόσουν το ρεπερτόριο στο επίπεδο")
      .replace(/στη(\s+)διεύθυνση της χορωδιακής διεύθυνσης\./, "στη$1χορωδιακή διεύθυνση.") },
  { ids: ["M23-10"], why: "Heading and mentors line printed twice: keep the first", files: ["masterclass2023.html"],
    apply: h => h.replace(/<h4 class="text-center">\s*In the frame of 41st International Choral Festival of Preveza masterclass for choral conductors\s+will be held from July 1st – 4th\.\s*<\/h4>\s*/, "")
      .replace(/<h5 class="text-center">Mentors will be internationally recognised conductors Ragnar Rasmussen and\s+Urša Lah\.<\/h5>\s*<br>\s*<br>\s*/, "") },
  { ids: ["M23-10"], why: "Heading and mentors line printed twice: keep the first", files: ["masterclass2023Greek.html"],
    apply: h => h.replace(/<h4 class="text-center">\s*Στο πλαίσιο του 41ου Διεθνούς Χορωδιακού Φεστιβάλ Πρέβεζας θα πραγματοποιηθεί Masterclass για\s+χορωδιακούς διευθυντές από την 1η έως τη 4η Ιουλίου\.\s*<\/h4>\s*/, "")
      .replace(/<h5 class="text-center">Οι μέντορες θα είναι διεθνώς αναγνωρισμένοι διευθυντές χορωδίας Ragnar\s+Rasmussen και Urša Lah\.<\/h5>\s*<br>\s*<br>\s*/, "") },
  { ids: ["M23-03"], why: "Greek-only notes (open to active and passive participants, pre-registration, no hotel) added in English", files: ["masterclass2023.html"],
    find: /(<li>Participation fee for passive participants: 120€<\/li>\s*<\/ul>)/,
    replace: "$1" + I + "                        <br>" + I +
      "                        <h5>The Conducting Workshop & Seminar is open to active and passive participants.</h5>" + I +
      "                        <br>" + I +
      "                        <h5>Participation is by pre-registration only.</h5>" + I +
      "                        <br>" + I +
      "                        <h5>Hotel accommodation is not available during the seminar.</h5>" },
  { ids: ["M23-03", "M23-09"], why: "English-only 'Suitable for' and fees added in Greek; the three notes in sentence case, doubled 'Σεμινάριο' removed", files: ["masterclass2023Greek.html"],
    find: /<div class="text-center">\s*<h5>Το Σεμινάριο Διεύθυνσης & Σεμινάριο Είναι Ανοιχτό Για Τους Ενεργούς Και Παθητικούς\s+Συμμετέχοντες\.<\/h5>\s*<br>\s*<h5>Η Συμμετοχή Είναι Μόνο Με Προεγγραφή\.<\/h5>\s*<br>\s*<h5>Κατά Τη Διάρκεια Του Σεμιναρίου Δεν Υπάρχει Δυνατότητα Διαμονής Στο Ξενοδοχείο\.<\/h5>/,
    replace: [
      `<div class="text-center">`,
      `                        <h5>Το Εργαστήριο & Σεμινάριο Διεύθυνσης απευθύνεται σε:</h5>`,
      `                        <br>`,
      `                        <ul>`,
      `                            <li>Διευθυντές στην αρχή της σταδιοδρομίας τους</li>`,
      `                            <li>Φοιτητές διεύθυνσης με πανεπιστημιακή/ωδειακή μουσική εκπαίδευση</li>`,
      `                            <li>Έμπειρους διευθυντές που επιθυμούν να εργαστούν με ένα σύνολο υψηλού επιπέδου</li>`,
      `                        </ul>`,
      `                    </div>`,
      `                    <br>`,
      `                    <div class="mt-20 text-center">`,
      `                        <h5>Τέλη συμμετοχής:</h5>`,
      `                        <p>`,
      `                            Η συμμετοχή μπορεί να είναι ενεργή ή παθητική. Οι ενεργοί συμμετέχοντες θα έχουν την ευκαιρία να εργαστούν`,
      `                            πάνω στο χορωδιακό ρεπερτόριο με τη Χορωδία Utopia & Reality. Οι συμμετέχοντες που επιθυμούν να είναι`,
      `                            ενεργοί παρακαλούνται να στείλουν το βιογραφικό τους με αναλυτική αναφορά στην εμπειρία τους στη χορωδιακή`,
      `                            διεύθυνση. Βίντεο ή σύνδεσμοι στο διαδίκτυο όπου οι ενεργοί συμμετέχοντες διευθύνουν χορωδία είναι`,
      `                            ευπρόσδεκτα (χωρίς να είναι υποχρεωτικά). Σε συνεννόηση με τους υπεύθυνους του εργαστηρίου θα επιλεγούν`,
      `                            οι ενεργοί συμμετέχοντες που θα διευθύνουν στην Τελική Συναυλία (4 Ιουλίου).`,
      `                        </p>`,
      `                        <br>`,
      `                        <ul>`,
      `                            <li>Μέγιστος αριθμός ενεργών συμμετεχόντων: 8</li>`,
      `                            <li>Απεριόριστος αριθμός παθητικών συμμετεχόντων.</li>`,
      `                            <li>Τέλος συμμετοχής για ενεργούς συμμετέχοντες: 200€</li>`,
      `                            <li>Τέλος συμμετοχής για παθητικούς συμμετέχοντες: 120€</li>`,
      `                        </ul>`,
      `                        <br>`,
      `                        <h5>Το Εργαστήριο & Σεμινάριο Διεύθυνσης είναι ανοιχτό σε ενεργούς και παθητικούς συμμετέχοντες.</h5>`,
      `                        <br>`,
      `                        <h5>Η συμμετοχή γίνεται μόνο με προεγγραφή.</h5>`,
      `                        <br>`,
      `                        <h5>Κατά τη διάρκεια του σεμιναρίου δεν υπάρχει δυνατότητα διαμονής σε ξενοδοχείο.</h5>`,
    ].join(I) },
  { ids: ["MX-02"], why: "One naming scheme for the workshop titles", files: ["masterclass2023.html"],
    find: /(<h1>\s+)6th Choral Conducting Seminar and Masterclass(\s+<\/h1>)/, replace: "$16th Choral Conducting Workshop & Seminar$2" },
  { ids: ["MX-02"], why: "One naming scheme for the workshop titles", files: ["masterclass2023Greek.html"],
    find: /(<h1>\s+)6ο Σεμινάριο και Masterclass Χορωδιακής Διεύθυνσης(\s+<\/h1>)/, replace: "$16ο Εργαστήριο & Σεμινάριο Διεύθυνσης Χορωδίας$2" },

  // ---------------------------------------------------------------- M26 (2026)
  { ids: ["M26-01"], why: "Composer's name is Levente Gyöngyösi", files: ["masterclass2026.html", "masterclass2026Greek.html"],
    find: "Levente Gyöngyöshi (1975)", replace: "Levente Gyöngyösi (1975)" },
  { ids: ["M26-02"], why: "Accents: 'στιλ', 'προβών'", files: ["masterclass2026Greek.html"],
    apply: h => h.replace("Προσεγγίσεις στύλ,", "Προσεγγίσεις στιλ,").replace("Παρακολούθηση όλων των πρόβων", "Παρακολούθηση όλων των προβών") },
  { ids: ["M26-04"], why: "Ēriks Ešenvalds (macron); one transliteration 'Tebe Poem' (as in XII. Tebe Poem, Otche Nash)", files: ["masterclass2026.html", "masterclass2026Greek.html"],
    apply: h => h.replace("Eriks Ešenvalds (1977)", "Ēriks Ešenvalds (1977)").replace("II. Tebe Pojem ·", "II. Tebe Poem ·") },
  { ids: ["M26-05"], why: "Number agreement 'Φοιτητές (ενεργοί/παθητικοί)'; 'Παρακαλούμε να αποστείλετε'", files: ["masterclass2026Greek.html"],
    apply: h => h.replace(/Φοιτητές \(Ενεργός\)/g, "Φοιτητές (ενεργοί)").replace(/Φοιτητές \(Παθητικός\)/g, "Φοιτητές (παθητικοί)")
      .replace(/Παρακαλούμε(\s+)αποστείλετε σύντομο/, "Παρακαλούμε να$1αποστείλετε σύντομο") },

  // ---------------------------------------------------------------- MX (Previous Masterclasses listing)
  { ids: ["MX-01"], why: "7th workshop (6 - 8 July 2026) was commented out of the listing: show it", files: ["previousMasteclasses.html", "previousMasteclassesGreek.html"],
    apply: h => h.replace(/<!-- (<div class="col-lg-4 col-md-6 single-exhibition">\s*<div class="thumb">\s*<a href="masterclass2026(?:Greek)?\.html">[\s\S]*?<\/div>) -->/, "$1") },
  { ids: ["MX-02"], why: "One naming scheme: 'Εργαστήριο & Σεμινάριο' (as the heading and the newer entries)", files: ["previousMasteclassesGreek.html"],
    find: /(<h4>[1-4]ο Εργαστήριο) και (Σεμινάριο Διεύθυνσης Χορωδίας<\/h4>)/g, replace: "$1 & $2", count: 4 },
];
