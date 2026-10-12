import { masterclassSchema, type MasterclassInput } from "../types";
import { person } from "../people";

const data: MasterclassInput = {
  slug: "2023",
  year: 2023,
  editionNumber: 6,
  // Listing/meta only -- the page itself shows the dates as printed in `content`.
  dates: {
    en: "1–4 July 2023",
    el: "1–4 Ιουλίου 2023",
  },
  poster: "/img/poster-master-23.webp",
  title: {
    en: "6th Choral Conducting Workshop & Seminar",
    el: "6ο Εργαστήριο & Σεμινάριο Διεύθυνσης Χορωδίας",
  },
  intro: { en: [], el: [] },
  content: {
    en: [
      {
        "list": [
          "1 - 4 July 2023"
        ]
      },
      {
        "img": "/img/poster-master-23.webp"
      },
      {
        "wide": true
      },
      {
        "heading": "In the frame of 41st International Choral Festival of Preveza masterclass for choral conductors will be held from July 1st – 4th.\n\nMentors will be internationally recognised conductors Ragnar Rasmussen and Urša Lah.",
        "level": 4,
        "align": "center"
      },
      {
        "heading": "The topics of the seminar are:",
        "level": 3,
        "align": "center"
      },
      {
        "anchor": "mentors"
      },
      {
        "list": [
          "Conducting technique with an emphasis on choral conducting",
          "Interpretation of various musical styles",
          "Group vocal technique",
          "Organization of the rehearsals",
          "Vocal technique",
          "Score analysis",
          "Conducting exercises",
          "Individual preparation of the scores with active participants"
        ],
        "align": "center"
      },
      {
        "heading": "Mentors",
        "level": 2,
        "align": "center"
      },
      ...person("ragnar-rasmussen", "en", {level: 3}),
      ...person("ursa-lah", "en", {level: 3,align: "right"}),
      {
        "anchor": "demonstrative_choirs23"
      },
      {
        "narrow": 10
      },
      {
        "heading": "Demonstrative Choirs",
        "level": 1,
        "align": "center"
      },
      {
        "heading": "“Utopia & Reality Chamber Choir“",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/Utopia&Reality Chamber Choir.webp"
      },
      "Utopia & Reality Chamber Choir is an international choir established in 2011 by two conductors, Ragnar Rasmussen (Norway) and Urša Lah (Slovenia). They have joined talented young singers from different countries in performing contemporary choral music. The aim of the project is to perform on a high artistic level, to encourage singers to think about the role of art in the society today, to explore different ways of affecting audiences, to develop young singers through establishing a strong role of the individual in the group and to raise up a sense of tolerance towards different nations through learning about their singing traditions.\n\nThe project has turned out as a success and Utopia&Reality has (as an invited choir or as “Artist in Residence”) performed memorably at numerous festivals, among them Nordlysfestivalen in Tromsø, Olavsfestdagene in Trondheim, Norway, the 12th China International Choral Festival in Beijing (where the choir was representing Europe), The City of Derry International Choral Festival, Northern Ireland, International Choral Festival in Preveza, Greece… In 2017 the choir was invited to perform a whole evening concert in Mariinsky Theatre in St. Petersburg and in 2019 it served as demonstrative ensemble for the World Choral Conducting Competition in Hong Kong in all three rounds.\n\nIn 2023, choir consists of singers coming from Slovenia, Norway, Italy, France, Ireland, Croatia, Sweden and Finland.",
      "A lot of time and attention will be dedicated to practical work with choir; the demonstrative ensemble will be international Utopia & Reality Chamber Choir.",
      {
        "anchor": "schedule23"
      },
      "The masterclass is addressed to conductors on different levels who would wish to improve their skills. Mentors will focus on individual progress and will adjust the literature to the level of participants.",
      "Participation can be active or passive. Participants who wish to be active are kindly asked to send their CV with specified experiences in choir conducting.",
      {
        "heading": "Schedule",
        "level": 2,
        "align": "center"
      },
      {
        "heading": "Saturday, July 1st 2023",
        "level": 4,
        "align": "center"
      },
      {
        "list": [
          "Arrival of the participants",
          "**04:00 - 08:00 p.m.** Introduction, Lectures with practical work: Vocal conducting for active and passive participants",
          "**08:00 - 10:00 p.m.** Individual lessons for active participants"
        ],
        "align": "center"
      },
      {
        "heading": "Sunday, July 2nd 2023",
        "level": 4,
        "align": "center"
      },
      {
        "list": [
          "**10:00 - 01:00 p.m.** Masterclass with demonstrative ensemble (active participants are conducting, passive are observing)",
          "**03:00 - 05:00 p.m.** Lectures with practical work: Conducting technique (active and passive participants)",
          "**05:00 - 05:15 p.m.** Break",
          "**05:15 - 08:00 p.m.** Masterclass with demonstrative ensemble (active participants are conducting, passive are observing)"
        ],
        "align": "center"
      },
      {
        "heading": "Monday, July 3rd 2023",
        "level": 4,
        "align": "center"
      },
      {
        "list": [
          "**10:00 - 01:00 p.m.** Masterclass with demonstrative ensemble (active participants are conducting, passive are observing)",
          "**03:00 - 06:00 p.m.** Masterclass with demonstrative ensemble (active participants are conducting, passive are observing)",
          "**06:00 - 08:00 p.m.** Meeting/consultations, individual work with active participants"
        ],
        "align": "center"
      },
      {
        "heading": "Tuesday, July 4th 2023",
        "level": 4,
        "align": "center"
      },
      {
        "anchor": "repertoire23"
      },
      {
        "list": [
          "**09:00 - 11:00 a.m.** Lectures with practical work: Group vocal technique, methodics for active and passive participants",
          "**11:00 - 01:00 p.m.** Masterclass with demonstrative ensemble (active participants are conducting, passive are observing)",
          "**05:00 p.m.** General rehearsal",
          "**08:00 p.m.** Concert conducted by active participants"
        ],
        "align": "center"
      },
      {
        "narrow": 0
      },
      {
        "narrow": 10
      },
      {
        "heading": "Repertoire of the Masterclass & Seminar",
        "level": 3,
        "align": "center"
      },
      {
        "list": [
          "Claudio Monteverdi: Zefiro torna",
          "Edward Elgar: My love dwelt in a Northern land",
          "Anton Bruckner: Os justi",
          "Hugo Wolf: Ergebung",
          "Sergej Rachmaninov: Bogorodice Devo",
          "Francis Poulenc: Quatre motets pour le temps de Noel",
          "Alfred Schnittke: Three sacred songs ( Bogorodice Devo, Gospodi Isuse, Otče naš )",
          "Knut Nystedt: I will greatly rejoice",
          "Knut Nystedt: Peace I leave with you",
          "Orbán György: Psalmus 126",
          "Ambrož Čopi: Preparate corda vestra",
          "Damijan Močnik: Verbum supernum prodiens",
          "Z. Randall Stroope: The Conversion of Saul",
          "James MacMillan: Data est mihi omnis potestas",
          "James MacMillan: O Radiant Dawn",
          "Edmund Rubbra: There is a Spirit"
        ],
        "align": "center"
      },
      {
        "img": "/img/masterclass23.webp"
      },
      {
        "heading": "The Conducting Workshop & Seminar is Suitable for:",
        "level": 5,
        "align": "center"
      },
      {
        "list": [
          "Early career conductors",
          "Conducting students with university/conservatory training in music",
          "Experienced conductors seeking to work with a high-level ensemble"
        ],
        "align": "center"
      },
      {
        "heading": "Fees:",
        "level": 5,
        "align": "center"
      },
      "Participation can be active or passive. The active participants will have the chance to work on the choral repertoire with the Utopia & Reality Chamber Choir. Participants who wish to be active are kindly asked to send their CV with specified experiences in choir conducting. Any videos or online links that show the active participants conducting a choir will be more than welcome (but it is not obligatory). In consultation with the workshop leaders there will be a selection of the active participants to conduct at the Final Concert (4th July).",
      {
        "list": [
          "Maximum number of active participants: 8",
          "Unlimited number of passive participants.",
          "Participation fee for active participants: 200€",
          "Participation fee for passive participants: 120€"
        ],
        "align": "center"
      },
      {
        "heading": "The Conducting Workshop & Seminar is open to active and passive participants.",
        "level": 5,
        "align": "center"
      },
      {
        "heading": "Participation is by pre-registration only.",
        "level": 5,
        "align": "center"
      },
      {
        "heading": "Hotel accommodation is not available during the seminar.",
        "level": 5,
        "align": "center"
      },
      {
        "narrow": 0
      }
    ],
    el: [
      {
        "list": [
          "1 - 4 Ιουλίου 2023"
        ]
      },
      {
        "img": "/img/poster-master-23.webp"
      },
      {
        "wide": true
      },
      {
        "heading": "Στο πλαίσιο του 41ου Διεθνούς Χορωδιακού Φεστιβάλ Πρέβεζας θα διεξαχθεί Masterclass για χορωδιακούς διευθυντές από 1 έως 4 Ιουλίου.\n\nΟι μέντορες θα είναι οι διεθνώς αναγνωρισμένοι διευθυντές Ragnar Rasmussen και Urša Lah.",
        "level": 4,
        "align": "center"
      },
      {
        "heading": "Τα θέματα του σεμιναρίου είναι:",
        "level": 3,
        "align": "center"
      },
      {
        "anchor": "mentors"
      },
      {
        "list": [
          "Τεχνική Διεύθυνσης με έμφαση στη χορωδιακή διεύθυνση",
          "Ερμηνεία διαφόρων μουσικών ρυθμών",
          "Ομαδική φωνητική τεχνική",
          "Οργάνωση των προβών",
          "Τεχνική φωνής",
          "Ανάλυση παρτιτούρας",
          "Διεύθυνση ασκήσεων",
          "Ατομική προετοιμασία των παρτιτούρων με ενεργούς συμμετέχοντες"
        ],
        "align": "center"
      },
      {
        "heading": "Μέντορες",
        "level": 2,
        "align": "center"
      },
      ...person("ragnar-rasmussen", "el", {level: 3}),
      ...person("ursa-lah", "el", {level: 3,align: "right"}),
      {
        "anchor": "demonstrative_choirs23"
      },
      {
        "narrow": 10
      },
      {
        "heading": "Υποδειγματικές Χορωδίες",
        "level": 1,
        "align": "center"
      },
      {
        "heading": "“Χορωδία Utopia & Reality“",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/Utopia&Reality Chamber Choir.webp"
      },
      "Η Χορωδία Utopia & Reality είναι μια διεθνής χορωδία που ιδρύθηκε το 2011 από δύο διευθυντές, το Ragnar Rasmussen (Νορβηγία) και την Urša Lah (Σλοβενία). Έχουν ενώσει ταλαντούχους νέους τραγουδιστές από διάφορες χώρες για την εκτέλεση σύγχρονης χορωδιακής μουσικής. Ο στόχος του έργου είναι να εκτελείται σε υψηλό καλλιτεχνικό επίπεδο, να ενθαρρύνει τους τραγουδιστές να σκεφτούν για τον ρόλο της τέχνης στη σύγχρονη κοινωνία, να εξερευνήσει διάφορους τρόπους επίδρασης στο κοινό, να αναπτύξει τους νέους τραγουδιστές μέσω της καθιέρωσης ενός ισχυρού ρόλου του ατόμου στην ομάδα και να αναδείξει ένα αίσθημα ανοχής προς διαφορετικές εθνικότητες μέσω της μάθησης για τις χορωδιακές τους παραδόσεις.\n\nΤο έργο έχει αποδειχθεί επιτυχές και η Utopia & Reality έχει (ως καλεσμένη χορωδία ή ως Artist in Residence) εμφανιστεί σε αξέχαστα φεστιβάλ, μεταξύ των οποίων το Nordlysfestivalen στο Τρομσό, το Olavsfestdagene στο Τρόντχαϊμ της Νορβηγίας, το 12ο Κινεζικό Διεθνές Χορωδιακό Φεστιβάλ στο Πεκίνο (όπου η χορωδία εκπροσώπησε την Ευρώπη), το City of Derry International Choral Festival στη Βόρεια Ιρλανδία, το Διεθνές Χορωδιακό Φεστιβάλ στην Πρέβεζα, την Ελλάδα… Το 2017 η χορωδία προσκλήθηκε να δώσει μία ολοκληρωμένη βραδινή συναυλία στο Mariinsky Theatre στην Αγία Πετρούπολη και το 2019 έλαβε μέρος ως υποδειγματικό σύνολο για τον Διεθνή Διαγωνισμό Χορωδιακής Διεύθυνσης στο Χονγκ Κονγκ σε όλους τους τρεις γύρους.\n\nΤο 2023, η χορωδία αποτελείται από τραγουδιστές που προέρχονται από Σλοβενία, Νορβηγία, Ιταλία, Γαλλία, Ιρλανδία, Κροατία, Σουηδία και Φινλανδία.",
      "Πολύς χρόνος και προσοχή θα αφιερωθεί στο πρακτικό έργο με τη χορωδία. Η υποδειγματική Χορωδία θα είναι η διεθνής Χορωδία Utopia & Reality.",
      {
        "anchor": "schedule23"
      },
      "Το Masterclass απευθύνεται σε διευθυντές σε διαφορετικά επίπεδα που επιθυμούν να βελτιώσουν τις δεξιότητές τους. Οι μέντορες θα επικεντρωθούν στην ατομική πρόοδο και θα προσαρμόσουν το ρεπερτόριο στο επίπεδο των συμμετεχόντων.",
      "Η συμμετοχή μπορεί να είναι ενεργή ή παθητική. Οι συμμετέχοντες που επιθυμούν να είναι ενεργοί παρακαλούνται να στείλουν το βιογραφικό τους με καθορισμένες εμπειρίες στη χορωδιακή διεύθυνση.",
      {
        "heading": "Πρόγραμμα",
        "level": 2,
        "align": "center"
      },
      {
        "heading": "Σάββατο, 1η Ιουλίου 2023",
        "level": 4,
        "align": "center"
      },
      {
        "list": [
          "Άφιξη των συμμετεχόντων",
          "**04:00 - 08:00 μ.μ.** Εισαγωγή, Διαλέξεις με πρακτική εργασία: Χορωδιακή διεύθυνση για ενεργούς και παθητικούς συμμετέχοντες",
          "**08:00 - 10:00 μ.μ.** Ατομικά μαθήματα για ενεργούς συμμετέχοντες"
        ],
        "align": "center"
      },
      {
        "heading": "Κυριακή, 2η Ιουλίου 2023",
        "level": 4,
        "align": "center"
      },
      {
        "list": [
          "**10:00 π.μ. - 01:00 μ.μ.** Masterclass με υποδειγματική χορωδία (οι ενεργοί συμμετέχοντες διευθύνουν, οι παθητικοί παρατηρούν)",
          "**03:00 - 05:00 μ.μ.** Διαλέξεις με πρακτική εργασία: Τεχνική διεύθυνσης (ενεργοί και παθητικοί συμμετέχοντες)",
          "**05:00 - 05:15 μ.μ.** Διάλειμμα",
          "**05:15 - 08:00 μ.μ.** Masterclass με υποδειγματική χορωδία (οι ενεργοί συμμετέχοντες διευθύνουν, οι παθητικοί παρατηρούν)"
        ],
        "align": "center"
      },
      {
        "heading": "Δευτέρα, 3η Ιουλίου 2023",
        "level": 4,
        "align": "center"
      },
      {
        "list": [
          "**10:00 π.μ. - 01:00 μ.μ.** Masterclass με υποδειγματική χορωδία (οι ενεργοί συμμετέχοντες διευθύνουν, οι παθητικοί παρατηρούν)",
          "**03:00 - 06:00 μ.μ.** Masterclass με υποδειγματική χορωδία (οι ενεργοί συμμετέχοντες διευθύνουν, οι παθητικοί παρατηρούν)",
          "**06:00 - 08:00 μ.μ.** Συνάντηση/συμβουλές, ατομική εργασία με ενεργούς συμμετέχοντες"
        ],
        "align": "center"
      },
      {
        "heading": "Τρίτη, 4η Ιουλίου 2023",
        "level": 4,
        "align": "center"
      },
      {
        "anchor": "repertoire23"
      },
      {
        "list": [
          "**09:00 - 11:00 π.μ.** Διαλέξεις με πρακτική εργασία: Ομαδική χορωδιακή τεχνική, μεθοδολογία για ενεργούς και παθητικούς συμμετέχοντες",
          "**11:00 π.μ. - 01:00 μ.μ.** Masterclass με υποδειγματική χορωδία (οι ενεργοί συμμετέχοντες διευθύνουν, οι παθητικοί παρατηρούν)",
          "**05:00 μ.μ.** Γενική πρόβα",
          "**08:00 μ.μ.** Συναυλία υπό τη διεύθυνση των ενεργών συμμετεχόντων"
        ],
        "align": "center"
      },
      {
        "narrow": 0
      },
      {
        "narrow": 10
      },
      {
        "heading": "Ρεπερτόριο Masterclass & Σεμιναρίου",
        "level": 3,
        "align": "center"
      },
      {
        "list": [
          "Claudio Monteverdi: Zefiro torna",
          "Edward Elgar: My love dwelt in a Northern land",
          "Anton Bruckner: Os justi",
          "Hugo Wolf: Ergebung",
          "Sergej Rachmaninov: Bogorodice Devo",
          "Francis Poulenc: Quatre motets pour le temps de Noel",
          "Alfred Schnittke: Three sacred songs ( Bogorodice Devo, Gospodi Isuse, Otče naš )",
          "Knut Nystedt: I will greatly rejoice",
          "Knut Nystedt: Peace I leave with you",
          "Orbán György: Psalmus 126",
          "Ambrož Čopi: Preparate corda vestra",
          "Damijan Močnik: Verbum supernum prodiens",
          "Z. Randall Stroope: The Conversion of Saul",
          "James MacMillan: Data est mihi omnis potestas",
          "James MacMillan: O Radiant Dawn",
          "Edmund Rubbra: There is a Spirit"
        ],
        "align": "center"
      },
      {
        "img": "/img/masterclass23.webp"
      },
      {
        "heading": "Το Εργαστήριο & Σεμινάριο Διεύθυνσης απευθύνεται σε:",
        "level": 5,
        "align": "center"
      },
      {
        "list": [
          "Διευθυντές στην αρχή της σταδιοδρομίας τους",
          "Φοιτητές διεύθυνσης με πανεπιστημιακή/ωδειακή μουσική εκπαίδευση",
          "Έμπειρους διευθυντές που επιθυμούν να εργαστούν με ένα σύνολο υψηλού επιπέδου"
        ],
        "align": "center"
      },
      {
        "heading": "Τέλη συμμετοχής:",
        "level": 5,
        "align": "center"
      },
      "Η συμμετοχή μπορεί να είναι ενεργή ή παθητική. Οι ενεργοί συμμετέχοντες θα έχουν την ευκαιρία να εργαστούν πάνω στο χορωδιακό ρεπερτόριο με τη Χορωδία Utopia & Reality. Οι συμμετέχοντες που επιθυμούν να είναι ενεργοί παρακαλούνται να στείλουν το βιογραφικό τους με αναλυτική αναφορά στην εμπειρία τους στη χορωδιακή διεύθυνση. Βίντεο ή σύνδεσμοι στο διαδίκτυο όπου οι ενεργοί συμμετέχοντες διευθύνουν χορωδία είναι ευπρόσδεκτα (χωρίς να είναι υποχρεωτικά). Σε συνεννόηση με τους υπεύθυνους του εργαστηρίου θα επιλεγούν οι ενεργοί συμμετέχοντες που θα διευθύνουν στην Τελική Συναυλία (4 Ιουλίου).",
      {
        "list": [
          "Μέγιστος αριθμός ενεργών συμμετεχόντων: 8",
          "Απεριόριστος αριθμός παθητικών συμμετεχόντων.",
          "Τέλος συμμετοχής για ενεργούς συμμετέχοντες: 200€",
          "Τέλος συμμετοχής για παθητικούς συμμετέχοντες: 120€"
        ],
        "align": "center"
      },
      {
        "heading": "Το Εργαστήριο & Σεμινάριο Διεύθυνσης είναι ανοιχτό σε ενεργούς και παθητικούς συμμετέχοντες.",
        "level": 5,
        "align": "center"
      },
      {
        "heading": "Η συμμετοχή γίνεται μόνο με προεγγραφή.",
        "level": 5,
        "align": "center"
      },
      {
        "heading": "Κατά τη διάρκεια του σεμιναρίου δεν υπάρχει δυνατότητα διαμονής σε ξενοδοχείο.",
        "level": 5,
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
          "[Mentors](#mentors)",
          "[Demonstrative Choirs](#demonstrative_choirs23)",
          "[Schedule](#schedule23)",
          "[Repertoire](#repertoire23)"
        ]
      },
      {
        "heading": "Organising Committee:",
        "level": 4
      },
      {
        "heading": "Kosmas Koronaios, President",
        "level": 6
      },
      {
        "heading": "Ioanna Kotsi, Vice President",
        "level": 6
      },
      {
        "heading": "Anna-Ypapanti Soldatou, General Secretary",
        "level": 6
      },
      {
        "heading": "Panagiotis Galanis, Treasurer",
        "level": 6
      },
      {
        "heading": "Giorgos Kardoutsos, Commissioner",
        "level": 6
      },
      {
        "heading": "Efstathia Dimou, Commissioner",
        "level": 6
      },
      {
        "heading": "Ioannis Tsandiris, Commissioner",
        "level": 6
      }
    ],
    el: [
      {
        "list": [
          "[Μέντορες](#mentors)",
          "[Υποδήγματικές Χορωδίες](#demonstrative_choirs23)",
          "[Πρόγραμμα](#schedule23)",
          "[Ρεπερτόριο](#repertoire23)"
        ]
      },
      {
        "heading": "Οργανωτική Επιτροπή:",
        "level": 4
      },
      {
        "heading": "Κοσμάς Κορωναίος, Πρόεδρος",
        "level": 6
      },
      {
        "heading": "Ιωάννα Κώτση, Αντιπρόεδρος",
        "level": 6
      },
      {
        "heading": "Άννα-Υπαπαντή Σολδάτου, Γενική Γραμματέας",
        "level": 6
      },
      {
        "heading": "Παναγιώτης Γαλάνης, Ταμίας",
        "level": 6
      },
      {
        "heading": "Γιώργος Καρδούτσος, Επίτροπος",
        "level": 6
      },
      {
        "heading": "Ευσταθία Δήμου, Επίτροπος",
        "level": 6
      },
      {
        "heading": "Ιωάννης Τσαντίρης, Επίτροπος",
        "level": 6
      }
    ],
  },
};

export default masterclassSchema.parse(data);
