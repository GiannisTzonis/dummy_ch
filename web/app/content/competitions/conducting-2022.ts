import { competitionSchema, type CompetitionInput } from "../types";
import { choir } from "../choirs";

const data: CompetitionInput = {
  slug: "conducting-2022",
  kind: "conducting",
  year: 2022,
  editionNumber: 1,
  // Listing/meta only -- the page itself shows the dates as printed in `content`.
  dates: {
    en: "4–6 July 2022",
    el: "4–6 Ιουλίου 2022",
  },
  poster: "/img/iccc2022.webp",
  title: {
    en: "1st International Choral Conductors' Competition of Preveza",
    el: "1ος Διεθνής Διαγωνισμός Διευθυντών Χορωδίας της Πρέβεζας",
  },
  intro: { en: [], el: [] },
  content: {
    en: [
      {
        "list": [
          "4 - 6 July 2022"
        ]
      },
      {
        "img": "/img/iccc2022.webp"
      },
      {
        "wide": true
      },
      {
        "anchor": "demonstrative_choirs"
      },
      "On the occasion of its 40th edition, the Preveza Choral Festival is organizing the biennial International Competition of Choral Conductors. Which will take place during the 4th-5th July 2022. In a wonderful atmosphere and ambience, ten selected conductors will showcase their skills of working with top Greek choirs Children’s Choir ‘’Armonia’’ Preveza, Voci Contra Tempo and Ambitus Choir. The competition will take place at Cultural Centre of Holy Metropolis and be judged by a jury of seven internationally renowned conductors.",
      {
        "narrow": 10
      },
      {
        "heading": "Demonstrative Choirs",
        "level": 1,
        "align": "center"
      },
      {
        "heading": "Children’s Choir “Armonia”",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/childrens-main.webp"
      },
      "The **Children’s Choir “Armonia”** of Preveza was founded in 1983 by the conductor Mr Andronikos Kourouklis and it is a section of the Choral Society “Armonia” of Preveza. Other conductors of the choir who greatly contributed to its brilliant course and success were Stavros Solomos and Valentin Stefanov. Since 1994, the choir has been directed by **Anelia Stefanova**. During its existence the choir has been awarded 2 first, 2 second and 2 third prizes in International Choral Competitions (Bulgaria, Greece, Italy, Switzerland, Hungary) and it has also been awarded twice as the best Greek Children’s choir in the International Choral Festival of Athens. It regularly performs in festivals both in Greece (Ioannina, Agrinio, Katerini, Kefalonia, Ermioni, Athens, Patras, Igoumenitsa, Parga, etc., Olympic Games ATHENS 2004) and abroad (International Choral Festival \"Aram Khachaturian\" in Haskovo (Bulgaria, 2003), International Festival in Rome (Italy, 2008), Easter Festival of Moscow (Russia, 2017) while it has participated in premieres of works and cooperated with renowned orchestras and soloists.",
      ...choir("voci-contra-tempo", "en", {level: 3,align: "center"}),
      ...choir("ambitus-choir", "en", {level: 3,align: "center"}),
      {
        "anchor": "schedule"
      },
      {
        "heading": "Schedule",
        "level": 2,
        "align": "center"
      },
      {
        "heading": "MONDAY, July 4th, 2022",
        "level": 4,
        "align": "center"
      },
      {
        "list": [
          "Obligatory piece: Panos Kosmidis (1990): Ta paidia kato ston kampo - Odos Oneiron ( Nikos Gkatsos, Manos Hatzidakis)",
          "Composition for rehearsal: Tine Bec (1993): Missa Pro Juventute ( Kyrie, Gloria )"
        ],
        "align": "center"
      },
      {
        "list": [
          "Obligatory piece: Robert Schumann (1810-1856): Der Wassermann ( Justinus Kerner )",
          "Composition for rehearsal: Giuseppe de Rosa (1973): Crucifixus"
        ],
        "align": "center"
      },
      {
        "list": [
          "**9:00 a.m.** Arrival, registration.",
          "10:00 a.m. Draw of order.",
          "**10:30 a.m.** I. Elimination round (Children’s Choir ‘’Armonia’’ Preveza).",
          "**11:00 a.m.** Rehearsal with Children’s Choir ‘’Armonia’’, Preveza",
          "**2:30 p.m.** Announcement of competitors for Semi-finals. Draw of order and compositions for Semi-finals.",
          "**6:00 p.m.** II. Semi-finals (Female Choir Voci Contra Tempo)",
          "**9:00 p.m.** Announcement of competitors for finals. Draw of order and compositions for finals."
        ],
        "align": "center"
      },
      {
        "heading": "TUESDAY, July 5th, 2022",
        "level": 4,
        "align": "center"
      },
      {
        "list": [
          "Obligatory piece: Salvo Gangi (1974): Hodie Christus Natus Est",
          "Three compositions drawn by lot.\nSubjects: Renaissance, Romantic & 20th Century"
        ],
        "align": "center"
      },
      {
        "anchor": "competing"
      },
      {
        "list": [
          "**3:00 p.m.** III. Finals / part 1 - Rehearsal with Ambitus Choir.",
          "**8:30 p.m.** III. Finals / part 2 – Public Concert (Ambitus Choir).",
          "**3:00 p.m.** Finals - Rehearsal with Ambitus Choir (conductor Katerina Vassilikou)",
          "**8.30 p.m.** Public concert with **Ambitus Choir**",
          "Each participant performs obligatory composition and three compositions, rehearsed in the afternoon with Ambitus Choir."
        ],
        "align": "center"
      },
      {
        "heading": "WEDNESDAY, July 6th, 2022",
        "level": 4,
        "align": "center"
      },
      {
        "list": [
          "**8:30 p.m.Prize Giving Ceremony**"
        ],
        "align": "center"
      },
      {
        "heading": "Competing Conductors",
        "level": 2,
        "align": "center"
      },
      {
        "heading": "Quentin Beer",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/quintin-beer.webp"
      },
      "Quentin Beer studied choral conducting with Patrick Russill at the Royal Academy of Music. He is Director of Music at Saint Peter’s College, Oxford and Saint Cuthbert’s Church Earl’s Court. With many years of experience in Conducting Choir and Orchestra, he has been awarded by the Royal Academy of Music as well as the Dima International Music Competition. Finally, he has collaborated with the Paris Orchestra Choir, with the Transylvania State Philharmonic Choir.",
      {
        "heading": "Martin Hellberg",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/martinhellberg.webp"
      },
      "Swedish conductor Martin Hellberg has studied Choir and Orchestra Conducting. He has participated in many choir festivals and competitions as a singer, producer, artistic director and conductor from 2008 until today, with the most important moment being the conductor of the Uppsala Choir in 2019.",
      {
        "heading": "Alexandros Komnas",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/komnas.webp"
      },
      "Alexandros Komnas was born in 1996, he graduated as an excellent student from the Department of Music Studies of the Ionian University with a specialization in “Choir Conducting”, alongside Professor Dimitris Ktistakis. At the same time he studied Acting with Natalia Kapodistria and Classical Song with Rosa Poulimenou and Ira Zerva. At the end of his studies he started working as a pianist accompanist and assistant conductor in the Rosarte Children and Youth Choir, under the direction of Rosie Mastrosavva. He has performed numerous concerts in Greece and abroad as a pianist, soloist, choir and conductor (ERT Choir, The Phantom of the Opera etc), while since February 2020 he is a member of the professional vocal ensemble 8tetto.",
      {
        "heading": "Olexandra Polytsia",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/olexandra.webp"
      },
      "Olexandra Polytsia has studied choral conducting, music management and early music. She has been conducting choirs throughout Europe since 2012 and she has been teaching and singing at the University of Graz in Austria since 2018.",
      {
        "heading": "Matthias Schoberwalter",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/MATTHIAS SCHOBERWALTER, Austria.webp"
      },
      "Matthias Schoberwalter was born in 1997 in Vienna. He has studied church music, conducting choir and orchestra. In 2015 he founded the choir Alea, he has participated in many choir festivals, concerts, opera and operetta performances. An important moment of his career was the concert that took place in the Cathedral of St. Stephen in Vienna in 2015.",
      {
        "heading": "Tamas Szarka",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/Szarka Tamás.webp"
      },
      "Tamas Szarka was born in 1994 in Hungary. He studied orchestral and choral conducting at the Budapest Academy of Music. In 2018 he won the first prize at the National Competition of Young Conductors in Budapest while in 2021 he was an official guest at the International Competition of Choir Directors.",
      {
        "heading": "Artūrs Švarcbahs",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/Artūrs Švarcbahs.webp"
      },
      "Originally from Latvia, Artūrs Švarcbahs is 22 years old, he has many years of experience as a conductor and chorister, with degrees in Choir Conducting and Classical Singing. One of his most important works as a conductor is the audiovisual work “Dabas Skanas” 2020.",
      {
        "heading": "Kristaps Solovjovs",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/Kristaps Solovjovs.webp"
      },
      "Kristaps Solovjovs was born in 2000 in Latvia. He studied choral singing at Riga’s Cathedral Choir School and he is currently studying Choral Conducting at the Latvian Academy of Music of Jāzeps Vītols. He has taken part in many choirs in Latvia as singer and musical conductor. In 2021, he won the 3rd place at the 1st Viacheslav Palkin International Choral Conductors Competition.",
      {
        "heading": "Hyunju Kwon",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/Hyunju Kwon.webp"
      },
      "Hyunju Kwon was born in Republic of Korea. She studied Choral Conducting at the National Korean University of Arts and at the University of Karlsruhe in Germany. Afterwards she finished her master’s degree in Orchestral Conducting at State University of Music and Performing Arts at Mannheim in Germany. She has taken part in various choirs in Germany as Conductor, Chorist and Soloist. In 2021 she won the 1st prize for choral conductors, at the Fosco Corti International Competition in Turin, Italy.",
      {
        "heading": "Gintare Barisaite",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/Gintare Barisaite.webp"
      },
      {
        "anchor": "awards"
      },
      "Gintare Barisaite – Mitkuviene was born in 1994, she began her professional musical path at the National M. K. Ciurlionis School of Art in 2001, where she studied piano and choral conducting for 12 years. She continued her studies of choral conducting at the Lithuanian Academy of Music and Theater. Gintare has taken part at many choir competitions all over Europe and she has performed with various famous singers and musicians. In 2019 at the 5th International Choir Festival and Competition of Lithuanian Music Patriarch Juozas Naujalis, dedicated to the 150th anniversary of Juozas Naujalis, she received the diploma of the best conductor of the competition.",
      {
        "heading": "Awards, Plaquettes & Diplomas",
        "level": 2,
        "align": "center"
      },
      {
        "heading": "Diplomas",
        "level": 3,
        "align": "center"
      },
      "All the participants will receive a diploma of participation. Special diplomas for participation in Semi-finals and Finals will be also given.",
      {
        "heading": "Awards",
        "level": 3,
        "align": "center"
      },
      {
        "heading": "Category A / Choral Conductors",
        "level": 4,
        "align": "center"
      },
      {
        "list": [
          "1st Place: 1000€, Festival Medal & Diploma",
          "2nd Place: 700€, Festival Medal & Diploma",
          "3rd Place: 500€, Festival Medal & Diploma",
          "**The Award of the Choir** for the most charismatic choral conductor at the Final concert of the 1st International Choral Conductors Competition of Preveza 2022, chosen by the Ambitus Choir (practical prize)"
        ],
        "align": "center"
      },
      {
        "heading": "Special Awards",
        "level": 3,
        "align": "center"
      },
      {
        "heading": "The Jury is empowered to assign the following awards:",
        "level": 4,
        "align": "center"
      },
      {
        "anchor": "photos"
      },
      {
        "list": [
          "Special Award for the most inspiring conductor",
          "Special Award for well-thought-out pedagogic approach with the choir (1st and 2nd Round)",
          "Special Award to the most promising young conductor (born after July 1997) of the competition",
          "Special Award the best performance of obligatory composition (Finals)",
          "Special Award to the best Greek conductor"
        ],
        "align": "center"
      },
      {
        "narrow": 0
      }
    ],
    el: [
      {
        "list": [
          "4 - 6 Ιουλίου 2022"
        ]
      },
      {
        "img": "/img/iccc2022.webp"
      },
      {
        "wide": true
      },
      {
        "anchor": "demonstrative_choirs"
      },
      "Με αφορμή την 40ή διοργάνωση του Φεστιβάλ Χορωδιών Πρέβεζας, διοργανώνεται ο Διεθνής Διαγωνισμός Διευθυντών Χορωδίας. Ο οποίος θα πραγματοποιηθεί στις 4-5 Ιουλίου 2022. Σε μια υπέροχη ατμόσφαιρα και περιβάλλον, δέκα επιλεγμένοι διευθυντές θα παρουσιάσουν τις δεξιότητές τους στην εργασία με τις κορυφαίες ελληνικές χορωδίες, Παιδική Χορωδία ''Αρμονία'' Πρέβεζα, Voci Contra Tempo και Χορωδία Ambitus. Ο διαγωνισμός θα λάβει χώρα στο Πολιτιστικό Κέντρο της Ιεράς Μητροπόλεως και θα κριθεί από μια επιτροπή επτά διεθνώς αναγνωρισμένων διευθυντών.",
      {
        "narrow": 10
      },
      {
        "heading": "Υποδειγματικές Χορωδίες",
        "level": 1,
        "align": "center"
      },
      {
        "heading": "Παιδική Χορωδία \"Αρμονία\"",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/childrens-main.webp"
      },
      "Η **Παιδική Χορωδία \"Αρμονία\"** της Πρέβεζας ιδρύθηκε το 1983 από τον διευθυντή κ. Ανδρόνικο Κουρούκλη και είναι μια ενότητα του Χορωδιακού Συλλόγου \"Αρμονία\" της Πρέβεζας. Άλλοι διευθυντές της χορωδίας που συνέβαλαν σημαντικά στη λαμπρή πορεία και την επιτυχία της ήταν οι Σταύρος Σολωμός και Valentin Stefanov. Από το 1994, η χορωδία έχει διευθύνει από την **Anelia Stefanova**. Κατά τη διάρκεια της ύπαρξής της, η χορωδία έχει βραβευθεί με 2 πρώτες, 2 δεύτερες και 2 τρίτες θέσεις σε Διεθνή Χορωδιακούς Διαγωνισμούς (Βουλγαρία, Ελλάδα, Ιταλία, Ελβετία, Ουγγαρία) και έχει βραβευθεί επίσης δύο φορές ως η καλύτερη Παιδική χορωδία της Ελλάδας στο Διεθνές Χορωδιακό Φεστιβάλ της Αθήνας. Πραγματοποιεί τακτικά εμφανίσεις σε φεστιβάλ τόσο στην Ελλάδα (Ιωάννινα, Αγρίνιο, Κατερίνη, Κεφαλονιά, Ερμιόνη, Αθήνα, Πάτρα, Ηγουμενίτσα, Πάργα, κλπ., Ολυμπιακοί Αγώνες ΑΘΗΝΑ 2004) και στο εξωτερικό (Διεθνές Χορωδιακό Φεστιβάλ \"Aram Khachaturian\" στο Χάσκοβο (Βουλγαρία, 2003), Διεθνές Φεστιβάλ στη Ρώμη (Ιταλία, 2008), Πάσχα Φεστιβάλ της Μόσχας (Ρωσία, 2017), ενώ έχει συμμετάσχει σε πρεμιέρες έργων και έχει συνεργαστεί με διάσημες ορχήστρες και σολίστες.",
      ...choir("voci-contra-tempo", "el", {level: 3,align: "center"}),
      ...choir("ambitus-choir", "el", {level: 3,align: "center"}),
      {
        "anchor": "schedule"
      },
      {
        "anchor": "schedule"
      },
      {
        "heading": "Πρόγραμμα",
        "level": 2,
        "align": "center"
      },
      {
        "heading": "ΔΕΥΤΕΡΑ, 4 Ιουλίου 2022",
        "level": 4,
        "align": "center"
      },
      {
        "list": [
          "Υποχρεωτικό έργο: Πάνος Κοσμίδης (1990): Τα παιδιά κάτω στον κάμπο - Οδός Ονείρων (Νίκος Γκάτσος, Μάνος Χατζιδάκις)",
          "Σύνθεση για πρόβα: Tine Bec (1993): Missa Pro Juventute (Κύριε, Δόξα)"
        ],
        "align": "center"
      },
      {
        "list": [
          "Υποχρεωτικό έργο: Robert Schumann (1810-1856): Der Wassermann (Justinus Kerner)",
          "Σύνθεση για πρόβα: Giuseppe de Rosa (1973): Crucifixus"
        ],
        "align": "center"
      },
      {
        "list": [
          "**9:00 π.μ.** Άφιξη, εγγραφή.",
          "**10:00 π.μ.** Κλήρωση σειράς.",
          "**10:30 π.μ.** Ι. Προκριματικός γύρος (Παιδική Χορωδία ‘’Αρμονία’’ Πρέβεζα).",
          "**11:00 π.μ.** Πρόβα με την Παιδική Χορωδία ‘’Αρμονία’’, Πρέβεζα",
          "**2:30 μ.μ.** Ανακοίνωση διαγωνιζομένων για Ημιτελικούς. Κλήρωση σειράς και συνθέσεις για Ημιτελικούς.",
          "**6:00 μ.μ.** ΙΙ. Ημιτελικοί (Γυναικεία Χορωδία Voci Contra Tempo)",
          "**9:00 μ.μ.** Ανακοίνωση διαγωνιζομένων για τους τελικούς. Κλήρωση σειράς και συνθέσεις για τους τελικούς."
        ],
        "align": "center"
      },
      {
        "heading": "ΤΡΙΤΗ, 5 Ιουλίου 2022",
        "level": 4,
        "align": "center"
      },
      {
        "list": [
          "Υποχρεωτικό έργο: Salvo Gangi (1974): Hodie Christus Natus Est",
          "Τρεις συνθέσεις που επιλέγονται με κλήρωση.\nΘέματα: Αναγέννηση, Ρομαντική & 20ός Αιώνας"
        ],
        "align": "center"
      },
      {
        "anchor": "competing"
      },
      {
        "list": [
          "**3:00 μ.μ.** ΙΙΙ. Τελικοί / μέρος 1 - Πρόβα με τη Χορωδία Ambitus.",
          "**8:30 μ.μ.** ΙΙΙ. Τελικοί / μέρος 2 - Δημόσια Συναυλία (Χορωδία Ambitus).",
          "**3:00 μ.μ.** Τελικοί - Πρόβα με τη Χορωδία Ambitus (διευθυντής Κατερίνα Βασιλικού)",
          "**8.30 μ.μ.** Δημόσια συναυλία με τη **Χορωδία Ambitus**",
          "Κάθε συμμετέχων ερμηνεύει υποχρεωτική σύνθεση και τρεις συνθέσεις, προετοιμασμένες το απόγευμα με την Χορωδία Ambitus."
        ],
        "align": "center"
      },
      {
        "heading": "ΤΕΤΑΡΤΗ, 6 Ιουλίου 2022",
        "level": 4,
        "align": "center"
      },
      {
        "list": [
          "**8:30 μ.μ.Τελετή Απονομής Βραβείων**"
        ],
        "align": "center"
      },
      {
        "heading": "Συμμετέχοντες Διευθυντές Χορωδίας",
        "level": 2,
        "align": "center"
      },
      {
        "heading": "Quentin Beer",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/quintin-beer.webp"
      },
      "Ο Quentin Beer σπούδασε διεύθυνση χορωδίας με τον Patrick Russill στη Βασιλική Ακαδημία Μουσικής. Είναι Διευθυντής Μουσικής στο Saint Peter’s College, Οξφόρδης και στη Saint Cuthbert’s Church, Earl’s Court. Με πολλά χρόνια εμπειρίας στη διεύθυνση χορωδίας και ορχήστρας, έχει βραβευθεί από τη Βασιλική Ακαδημία Μουσικής καθώς και από το Διεθνές Μουσικό Διαγωνισμό Dima. Τέλος, έχει συνεργαστεί με τη Χορωδία της Ορχήστρας του Παρισιού, με τη Χορωδία της Φιλαρμονικής Ορχήστρας της Τρανσυλβανίας.",
      {
        "heading": "Martin Hellberg",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/martinhellberg.webp"
      },
      "Ο Σουηδός διευθυντής χορωδίας Martin Hellberg έχει σπουδάσει διεύθυνση χορωδίας και ορχήστρας. Έχει συμμετάσχει σε πολλά φεστιβάλ και διαγωνισμούς ως τραγουδιστής, παραγωγός, καλλιτεχνικός διευθυντής και διευθυντής από το 2008 μέχρι σήμερα, με τη σημαντικότερη στιγμή να είναι η διεύθυνση της Χορωδίας του Ουψάλα το 2019.",
      {
        "heading": "Αλέξανδρος Κόμνας",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/komnas.webp"
      },
      "Ο Αλέξανδρος Κόμνας γεννήθηκε το 1996, αποφοίτησε με άριστα από το Τμήμα Μουσικών Σπουδών του Ιονίου Πανεπιστημίου με ειδίκευση στη \"Διεύθυνση Χορωδίας\", δίπλα στον καθηγητή Δημήτρη Κτίστακη. Ταυτόχρονα σπούδασε Ηθοποιία με τη Ναταλία Καποδίστρια και Κλασικό Τραγούδι με τη Ρόζα Πουλιμένου και την Ήρα Ζερβά. Στο τέλος των σπουδών του άρχισε να εργάζεται ως συνοδός πιανίστας και βοηθός διευθυντή στη Χορωδία Παιδιών και Νέων Rosarte, υπό τη διεύθυνση της Ρόζι Μαστροσάββα. Έχει δώσει πολλές συναυλίες στην Ελλάδα και στο εξωτερικό ως πιανίστας, σολίστ, χορωδός και διευθυντής (Χορωδία ΕΡΤ, Το Φάντασμα της Όπερας κ.α.), ενώ από τον Φεβρουάριο του 2020 είναι μέλος του επαγγελματικού φωνητικού συνόλου 8tetto.",
      {
        "heading": "Olexandra Polytsia",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/olexandra.webp"
      },
      "Η Olexandra Polytsia έχει σπουδάσει διεύθυνση χορωδίας, μουσική διοίκηση και παλαιά μουσική. Έχει διευθύνει χορωδίες σε όλη την Ευρώπη από το 2012 και διδάσκει και τραγουδάει στο Πανεπιστήμιο του Γκρατς στην Αυστρία από το 2018.",
      {
        "heading": "Matthias Schoberwalter",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/MATTHIAS SCHOBERWALTER, Austria.webp"
      },
      "Ο Matthias Schoberwalter γεννήθηκε το 1997 στη Βιέννη. Έχει σπουδάσει εκκλησιαστική μουσική, διεύθυνση χορωδίας και ορχήστρας. Το 2015 ίδρυσε τη χορωδία Alea, έχει συμμετάσχει σε πολλά φεστιβάλ χορωδιών, συναυλίες, όπερες και οπερέτες. Σημαντική στιγμή της καριέρας του ήταν η συναυλία που πραγματοποιήθηκε στη Μητροπολιτική Καθεδρική Εκκλησία του Αγίου Στεφάνου στη Βιέννη το 2015.",
      {
        "heading": "Tamas Szarka",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/Szarka Tamás.webp"
      },
      "Ο Tamas Szarka γεννήθηκε το 1994 στην Ουγγαρία. Έχει σπουδάσει διεύθυνση ορχήστρας και χορωδίας στην Ακαδημία Μουσικής του Βουδαπέστης. Το 2018 κέρδισε το πρώτο βραβείο στο Εθνικό Διαγωνισμό Νέων Διευθυντών Χορωδιών στη Βουδαπέστη ενώ το 2021 ήταν επίσημος καλεσμένος στο Διεθνή Διαγωνισμό Διευθυντών Χορωδιών.",
      {
        "heading": "Artūrs Švarcbahs",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/Artūrs Švarcbahs.webp"
      },
      "Από τη Λετονία ο Artūrs Švarcbahs είναι 22 ετών, έχει πολλά χρόνια εμπειρίας ως διευθυντής και χορωδός, με πτυχία στη Διεύθυνση Χορωδίας και το Κλασικό Τραγούδι. Ένα από τα πιο σημαντικά έργα του ως διευθυντή είναι το οπτικοακουστικό έργο “Dabas Skanas” 2020.",
      {
        "heading": "Kristaps Solovjovs",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/Kristaps Solovjovs.webp"
      },
      "Ο Kristaps Solovjovs γεννήθηκε το 2000 στη Λετονία, έχει σπουδάσει ως χορωδός στο Σχολείο Χορωδίας του Καθεδρικού της Ρίγα και επί του παρόντος σπουδάζει Διεύθυνση Χορωδίας στη Λετονική Ακαδημία Μουσικής του Jāzeps Vītols. Έχει συμμετάσχει σε πολλές χορωδίες στη Λετονία ως χορωδός και μουσικός διευθυντής. Το 2021 κέρδισε την 3η θέση στον 1ο Διεθνή Διαγωνισμό Χορωδιών Viacheslav Palkin.",
      {
        "heading": "Hyunju Kwon",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/Hyunju Kwon.webp"
      },
      "Η Hyunju Kwon γεννήθηκε στη Δημοκρατία της Κορέας. Έχει σπουδάσει Διεύθυνση Χορωδίας στο Εθνικό Κορεατικό Πανεπιστήμιο Τεχνών και στο Πανεπιστήμιο του Καρλσρούης στη Γερμανία. Στη συνέχεια ολοκλήρωσε το μεταπτυχιακό της στον Ορχηστρικό Διευθυντή στο Πανεπιστήμιο του Mannheim στη Γερμανία. Έχει συμμετάσχει σε διάφορες χορωδίες στη Γερμανία ως διευθυντής, χορωδός και σολίστ. Το 2021 κέρδισε το πρώτο βραβείο για διευθυντές χορωδιών στο Διεθνή Διαγωνισμό Χορωδιών Fosco Corti στο Τορίνο της Ιταλίας.",
      {
        "heading": "Gintare Barisaite",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/Gintare Barisaite.webp"
      },
      {
        "anchor": "awards"
      },
      "Η Gintare Barisaite - Mitkuviene γεννήθηκε το 1994, ξεκίνησε την επαγγελματική της πορεία στη Σχολή Τέχνης M. K. Ciurlionis της Λιθουανίας το 2001, όπου σπούδασε πιάνο και διεύθυνση χορωδίας για 12 χρόνια. Συνέχισε τις σπουδές της στη διεύθυνση χορωδίας στη Λιθουανική Ακαδημία Μουσικής και Θεάτρου. Η Gintare έχει λάβει μέρος σε πολλούς διαγωνισμούς χορωδιών σε όλη την Ευρώπη και έχει εμφανιστεί με διάφορους διάσημους τραγουδιστές και μουσικούς. Το 2019, στο 5ο Διεθνές Φεστιβάλ και Διαγωνισμό Χορωδιών του Λιθουανού Μουσικού Πατριάρχη Juozas Naujalis, που αφιερώθηκε στην 150η επέτειο του Juozas Naujalis, έλαβε το δίπλωμα του καλύτερου διευθυντή του διαγωνισμού.",
      {
        "heading": "Βραβεία, Πλακέτες & Διπλώματα",
        "level": 2,
        "align": "center"
      },
      {
        "heading": "Διπλώματα",
        "level": 3,
        "align": "center"
      },
      "Όλοι οι συμμετέχοντες θα λάβουν ένα δίπλωμα συμμετοχής. Θα δοθούν επίσης ειδικά διπλώματα για τη συμμετοχή στα Ημιτελικά και τα Τελικά.",
      {
        "heading": "Βραβεία",
        "level": 3,
        "align": "center"
      },
      {
        "heading": "Κατηγορία Α / Διευθυντές Χορωδιών",
        "level": 4,
        "align": "center"
      },
      {
        "list": [
          "1ο Βραβείο: 1000€, Μετάλλιο Φεστιβάλ & Δίπλωμα",
          "2ο Βραβείο: 700€, Μετάλλιο Φεστιβάλ & Δίπλωμα",
          "3ο Βραβείο: 500€, Μετάλλιο Φεστιβάλ & Δίπλωμα",
          "**Το Βραβείο της Χορωδίας** για τον πιο χαρισματικό διευθυντή χορωδίας στην τελική συναυλία του 1ου Διεθνούς Διαγωνισμού Διευθυντών Χορωδιών της Πρέβεζας 2022, επιλεγμένο από την Χορωδία Ambitus (πρακτικό βραβείο)"
        ],
        "align": "center"
      },
      {
        "heading": "Ειδικά Βραβεία",
        "level": 3,
        "align": "center"
      },
      {
        "heading": "Η Επιτροπή εξουσιοδοτείται να απονείμει τα ακόλουθα βραβεία:",
        "level": 4,
        "align": "center"
      },
      {
        "anchor": "photos"
      },
      {
        "list": [
          "Ειδικό Βραβείο για τον πιο εμπνευστικό διευθυντή",
          "Ειδικό Βραβείο για μια σκεπτόμενη παιδαγωγική προσέγγιση με τη χορωδία (1ος και 2ος γύρος)",
          "Ειδικό Βραβείο για τον πιο πολλά υποσχόμενο νέο διευθυντή (γεννημένος μετά τον Ιούλιο του 1997) του διαγωνισμού",
          "Ειδικό Βραβείο για την καλύτερη εκτέλεση της υποχρεωτικής σύνθεσης (Τελικά)",
          "Ειδικό Βραβείο για τον καλύτερο Έλληνα διευθυντή"
        ],
        "align": "center"
      },
      {
        "narrow": 0
      }
    ],
  },
  aside: {
    en: [
      {
        "list": [
          "[Demonstrative Choirs](#demonstrative_choirs)",
          "[Schedule](#schedule)",
          "[Competing Conductors](#competing)",
          "[Awards, Plaquettes & Diplomas](#awards)",
          "[Gallery](#photos)"
        ]
      },
      {
        "heading": "Jury Committee",
        "level": 4
      },
      {
        "heading": "Gary Graden",
        "level": 6
      },
      {
        "heading": "Vytautas Miškinis",
        "level": 6
      },
      {
        "heading": "Theodora Pavlovitch",
        "level": 6
      },
      {
        "heading": "Javier Busto",
        "level": 6
      },
      {
        "heading": "Ambrož Čopi",
        "level": 6
      },
      {
        "heading": "Rosie Mastrosavva",
        "level": 6
      },
      {
        "heading": "Aggeliki Ploka",
        "level": 6
      }
    ],
    el: [
      {
        "list": [
          "[Επίδειξη Χορωδιών](#demonstrative_choirs)",
          "[Πρόγραμμα](#schedule)",
          "[Συμμετέχοντες Διευθυντές](#competing)",
          "[Βραβεία, Πλακέτες & Διπλώματα](#awards)",
          "[Συλλογή](#photos)"
        ]
      },
      {
        "heading": "Επιτροπή Κριτών",
        "level": 4
      },
      {
        "heading": "Gary Graden",
        "level": 6
      },
      {
        "heading": "Vytautas Miškinis",
        "level": 6
      },
      {
        "heading": "Theodora Pavlovitch",
        "level": 6
      },
      {
        "heading": "Javier Busto",
        "level": 6
      },
      {
        "heading": "Ambrož Čopi",
        "level": 6
      },
      {
        "heading": "Ρόζι Μαστροσάββα",
        "level": 6
      },
      {
        "heading": "Αγγελική Πλόκα",
        "level": 6
      }
    ],
  },
};

export default competitionSchema.parse(data);
