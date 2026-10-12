import { competitionSchema, type CompetitionInput } from "../types";
import { person } from "../people";

const data: CompetitionInput = {
  slug: "composition-2022",
  kind: "composition",
  year: 2022,
  editionNumber: 1,
  poster: "/img/conductors.webp",
  title: {
    en: "1st International Choral Composition Competition of Preveza",
    el: "1ος Διεθνής Χορωδιακός Διαγωνισμός Σύνθεσης Χορωδιών Πρέβεζας",
  },
  intro: { en: [], el: [] },
  content: {
    en: [
      {
        "narrow": 6
      },
      "The International Choral Festival of Preveza announces the International Choral Composition Competition of Preveza 2022 (ICCP 2022), the aim of which is to promote choral music through the creation of new and innovative choral repertoire for good level amateur Choirs. Participation is open to composers of any nationality and any age, whether professional or amateur.",
      {
        "heading": "Categories:",
        "level": 3
      },
      {
        "heading": "A - Mixed Choirs",
        "level": 5
      },
      {
        "heading": "B - Children's Choir",
        "level": 5
      },
      {
        "list": [
          "SATB or SMsATB a cappella, different body percussion can be used also.",
          "SSA or SMsA with or without accompaniment (piano), different body percussion can be used also."
        ]
      },
      {
        "narrow": 0
      },
      {
        "narrow": 6
      },
      {
        "img": "/img/conductors.webp"
      },
      {
        "narrow": 0
      },
      {
        "heading": "International Jury Committee I.J.C.",
        "level": 2,
        "align": "center"
      },
      ...person("ambroz-copi", "en", {level: 3}),
      ...person("vytautas-miskinis", "en", {level: 3,align: "right"}),
      ...person("javier-busto", "en", {level: 3}),
      ...person("ko-matsushita", "en", {level: 3,align: "right"}),
      {
        "narrow": 8
      },
      {
        "heading": "Medals",
        "level": 1,
        "align": "center"
      },
      {
        "heading": "Category A ( Mixed Choirs )",
        "level": 4,
        "align": "center"
      },
      {
        "list": [
          "Hodie Christus natus est Composer: Salvo Gangi\n90.63 Points\n1st Award, money prize of 700€ and a diploma",
          "О́тче наш (Otche nash)\nComposer: Luke Mayernik\n90.63 Points\n2nd Award, money prize of 550€ and a diploma",
          "Да исполнятся уста наша (Da ispolnyatsya usta nasha)\nComposer: Luke Mayernik\n90.63 Points\n3rd Award, money prize of 400€ and a diploma",
          "Descendit de cælis\nComposer: Giulio de Carlo\n90.63 Points\nCertificate of Attendance",
          "The gates to love\nComposer: Giorgos Koumaradios\n90.63 Points\nCertificate of Attendance",
          "Tebe poem\nComposer: Klara Mlakar\n90.63 Points\nCertificate of Attendance"
        ],
        "align": "center"
      },
      {
        "heading": "Category B (Children’s Choirs)",
        "level": 4,
        "align": "center"
      },
      {
        "list": [
          "Crucifixus\nComposer: Giuseppe de Rosa\n90.63 Points\n1st Award, money prize of 500€ and a diploma",
          "Waiting at the Window\nComposer: Claudio Ferrara\n83.00 Points\n2nd Award, money prize of 400€ and a diploma",
          "Pueri Hebraeorum\nComposer: Miguel Angel Musumano\n83.00 Points\n3rd Award, money prize of 300€ and a diploma"
        ],
        "align": "center"
      },
      {
        "heading": "Special Prizes",
        "level": 5,
        "align": "center"
      },
      {
        "list": [
          "To Klara Mlakar for the best composition written by participant born after January 14th, 1997",
          "To Luke Mayernik for the best Orthodox composition",
          "To Giorgos Koumaradios for the best composition written by Greek composer"
        ],
        "align": "center"
      },
      {
        "narrow": 0
      },
      {
        "heading": "Successful 1st Choral Composers Competition of Preveza 2022",
        "level": 3,
        "align": "center"
      },
      "The Organising Committee of the International Choral Festival of Preveza, on the occasion of its 40th edition, decided to enrich the festival with new content. The 1st International Choral Composers' Competition was organized with the desire to encourage the creation of new choral works. Organizer is pleased with the good response and twenty-six compositions received at the 1st International Composition Competition of Preveza 2022. The competition, which took place in two categories (A Category – Compositions for Mixed Choir and Category B – Compositions for children’s Choir) was attended by twenty composers from ten countries (Argentina, Canada, China, Cuba, Greece, Italy, Poland, Russia, Slovenia and USA).",
      "The jury, composed of the Ambrož Čopi (Slovenia), president of the jury and members of the jury Javier Busto (Spain), Ko Matsushita (Japan) and Vytautas Miškinis (Lithuania), highlighted the high level of some compositions received at the composers competition.",
      "For category A eighteen compositions arrived. The 1st Award and a prize of 700€ went to composer Salvo Gangi (Italy) for composition Hodie Christus natus est, which will be performed as a compulsory composition in the finals of the 1st International Choral Conductors Competition of Preveza 2022. Among the most successful composers at competition is Luke Mayernik (USA) whose compositions Otche nash and Da ispolnyatsya usta nasha received 2nd, a prize of 550€ and 3rd Award, a prize of 400€, and two sentences from the same Liturgy were also among the recommended works. The jury also recommended three other compositions for performance and publication at the Astrum Music Publishing House. Descendit de cælis by Giulio De Carlo (Italy), Tebe poem by Klara Mlakar (Slovenia) and The gates to love by Giorgos Koumaradios (Greece).",
      "Eight compositions arrived for the competition in category B. The composition Crucifixus written by composer Giuseppe de Rosa (Italy) stood out, which received the 1st Award, a prize of 500€ and performance at the international conducting competition in Preveza 2022. The 2nd Award, a prize of 400€ went to Claudio Ferrara (Italy) for the composition Waiting at the Window and the 3rd Award, a prize of 300€ received Miguel Angel Musumano (Argentina) for composition Pueri Hebraeorum.",
      "Among the youngest composers, aged 25 and under, Klara Mlakar (1999) convinced the jury with her composition and received a Special Award for the best composition written by participant born after January 14th, 1997. Luke Mayernik also received a Special Award for the best Orthodox composition. Giorgos Koumaradios also received Special Award for the best composition written by Greek composer",
      {
        "heading": "Ambrož Čopi (President of the jury):",
        "level": 5
      },
      "''I have been following the Preveza International Choir Festival for many years. Really exceptional organizational work, which allows the choirs good presentations, unforgettable memories, and experiences that they carry with them for a long time. I am happy that the addition of choirmasters and of competitions for composers and conductors to this year's edition raises this exceptional festival to an even higher level. It was with great satisfaction that we reviewed and evaluated the received compositions. Composers were limited to 4-5 voices in the A category and to 2-3 voices in the B category with the possibility of using the piano. Technically, the compositions had to be suitable for good choirs, thus enabling the wider applicability of the compositions. Within these limitations, however, a few compositions stood out for their artistic weight and were awarded. There were no notable experiments or excesses, but we gained quite a few interesting novelties, which the choirs would definitely like to include in their repertoire. The work of the jury took place in a good atmosphere and exchange of views. I thank all the members of the jury for their dedicated and professional work.''"
    ],
    el: [
      {
        "narrow": 6
      },
      "Το Διεθνές Χορωδιακό Φεστιβάλ Πρέβεζας ανακοινώνει τον 1ο Διεθνή Χορωδιακό Διαγωνισμό Σύνθεσης Χορωδιών Πρέβεζας 2022 (ΙΚΚΠ 2022), του οποίου ο στόχος είναι η προώθηση της χορωδιακής μουσικής μέσω της δημιουργίας καινοτόμου ρεπερτορίου για χορωδίες ερασιτεχνικού επιπέδου. Η συμμετοχή είναι ανοικτή σε συνθέτες οποιασδήποτε εθνικότητας και ηλικίας, είτε επαγγελματίες είτε ερασιτέχνες.",
      {
        "heading": "Κατηγορίες:",
        "level": 3
      },
      {
        "heading": "A - Μικτές Χορωδίες",
        "level": 5
      },
      {
        "heading": "B - Παιδικές Χορωδίες",
        "level": 5
      },
      {
        "list": [
          "SATB ή SMsATB α καπέλα. Μπορούν επίσης να χρησιμοποιηθούν διάφορα κρουστά σώματος (body percussion).",
          "SSA ή SMsA με ή χωρίς συνοδεία (πιάνο). Μπορούν επίσης να χρησιμοποιηθούν διάφορα κρουστά σώματος (body percussion)."
        ]
      },
      {
        "narrow": 0
      },
      {
        "narrow": 6
      },
      {
        "img": "/img/conductors.webp"
      },
      {
        "narrow": 0
      },
      {
        "heading": "Διεθνής Επιτροπή Κριτών Δ.Ε.Κ.",
        "level": 2,
        "align": "center"
      },
      ...person("ambroz-copi", "el", {level: 3}),
      ...person("vytautas-miskinis", "el", {level: 3,align: "right"}),
      ...person("javier-busto", "el", {level: 3}),
      ...person("ko-matsushita", "el", {level: 3,align: "right"}),
      {
        "narrow": 8
      },
      {
        "heading": "Μετάλλια",
        "level": 1,
        "align": "center"
      },
      {
        "heading": "Κατηγορία Α (Μικτές Χορωδίες)",
        "level": 4,
        "align": "center"
      },
      {
        "list": [
          "Hodie Christus natus est Συνθέτης: Salvo Gangi\n90.63 Βαθμοί\n1ο Βραβείο, χρηματικό έπαθλο 700€ και δίπλωμα",
          "О́тче наш (Otche nash)\nΣυνθέτης: Luke Mayernik\n90.63 Βαθμοί\n2ο Βραβείο, χρηματικό έπαθλο 550€ και δίπλωμα",
          "Да исполнятся уста наша (Da ispolnyatsya usta nasha)\nΣυνθέτης: Luke Mayernik\n90.63 Βαθμοί\n3ο Βραβείο, χρηματικό έπαθλο 400€ και δίπλωμα",
          "Descendit de cælis\nΣυνθέτης: Giulio de Carlo\n90.63 Βαθμοί\nΠιστοποιητικό Παρακολούθησης",
          "The gates to love\nΣυνθέτης: Γιώργος Κουμαραδιός\n90.63 Βαθμοί\nΠιστοποιητικό Παρακολούθησης",
          "Tebe poem\nΣυνθέτης: Klara Mlakar\n90.63 Βαθμοί\nΠιστοποιητικό Παρακολούθησης"
        ],
        "align": "center"
      },
      {
        "heading": "Κατηγορία Β (Παιδικές Χορωδίες)",
        "level": 4,
        "align": "center"
      },
      {
        "list": [
          "Crucifixus\nΣυνθέτης: Giuseppe de Rosa\n90.63 Βαθμοί\n1ο Βραβείο, χρηματικό έπαθλο 500€ και δίπλωμα",
          "Waiting at the Window\nΣυνθέτης: Claudio Ferrara\n83.00 Βαθμοί\n2ο Βραβείο, χρηματικό έπαθλο 400€ και δίπλωμα",
          "Pueri Hebraeorum\nΣυνθέτης: Miguel Angel Musumano\n83.00 Βαθμοί\n3ο Βραβείο, χρηματικό έπαθλο 300€ και δίπλωμα"
        ],
        "align": "center"
      },
      {
        "heading": "Ειδικά Βραβεία",
        "level": 5,
        "align": "center"
      },
      {
        "list": [
          "Στην Klara Mlakar για την καλύτερη σύνθεση που έγραψε συμμετέχουσα γεννημένη μετά τις 14 Ιανουαρίου 1997",
          "Στον Luke Mayernik για την καλύτερη Ορθόδοξη σύνθεση",
          "Στον Γιώργο Κουμαραδιό για την καλύτερη σύνθεση που έγραψε ελληνικός συνθέτης"
        ],
        "align": "center"
      },
      {
        "narrow": 0
      },
      {
        "heading": "Επιτυχής 1ος Διαγωνισμός Χορωδιακής Σύνθεσης Πρέβεζας 2022",
        "level": 3,
        "align": "center"
      },
      "Η Οργανωτική Επιτροπή του Διεθνούς Χορωδιακού Φεστιβάλ Πρέβεζας, με αφορμή την 40ή διοργάνωση του φεστιβάλ, αποφάσισε να εμπλουτίσει το φεστιβάλ με νέο περιεχόμενο. Ο 1ος Διεθνής Διαγωνισμός Χορωδιακών Συνθετών οργανώθηκε με την επιθυμία να προωθήσει τη δημιουργία νέων χορωδιακών έργων. Ο Οργανωτής χαίρεται για την καλή ανταπόκριση και τις είκοσι έξι συνθέσεις που λήφθηκαν στον 1ο Διεθνή Διαγωνισμό Σύνθεσης Πρέβεζας 2022. Ο διαγωνισμός, που πραγματοποιήθηκε σε δύο κατηγορίες (Κατηγορία Α - Συνθέσεις για Μικτή Χορωδία και Κατηγορία Β - Συνθέσεις για Χορωδία Παιδιών), συμμετείχαν είκοσι συνθέτες από δέκα χώρες (Αργεντινή, Καναδάς, Κίνα, Κούβα, Ελλάδα, Ιταλία, Πολωνία, Ρωσία, Σλοβενία και ΗΠΑ).",
      "Η κριτική επιτροπή, αποτελούμενη από τον Ambrož Čopi (Σλοβενία), πρόεδρο της κριτικής επιτροπής και μέλη της κριτικής επιτροπής Javier Busto (Ισπανία), Ko Matsushita (Ιαπωνία) και Vytautas Miškinis (Λιθουανία), υπογράμμισε το υψηλό επίπεδο ορισμένων συνθέσεων που λήφθηκαν στον διαγωνισμό των συνθετών.",
      "Για την κατηγορία Α έφτασαν δεκαοκτώ συνθέσεις. Το 1ο Βραβείο και ένα βραβείο 700€ απονεμήθηκε στον συνθέτη Salvo Gangi (Ιταλία) για τη σύνθεση Hodie Christus natus est, η οποία θα εκτελεστεί ως υποχρεωτική σύνθεση στους τελικούς του 1ου Διεθνούς Διαγωνισμού Διευθυντών Χορωδιών Πρέβεζας 2022. Ανάμεσα στους πιο επιτυχημένους συνθέτες στον διαγωνισμό είναι ο Luke Mayernik (ΗΠΑ) οι συνθέσεις του Otche nash και Da ispolnyatsya usta nasha έλαβαν το 2ο, ένα βραβείο 550€ και το 3ο Βραβείο, ένα βραβείο 400€, και δύο προτάσεις από την ίδια Λειτουργία ήταν επίσης ανάμεσα στα συνιστώμενα έργα. Η κριτική επιτροπή πρότεινε επίσης τρεις άλλες συνθέσεις για εκτέλεση και δημοσίευση στον εκδοτικό οίκο Astrum Music Publishing. Descendit de cælis από τον Giulio De Carlo (Ιταλία), Tebe poem από την Klara Mlakar (Σλοβενία) και The gates to love από τον Γιώργο Κουμαραδιό (Ελλάδα).",
      "Οκτώ συνθέσεις έφτασαν για τον διαγωνισμό στην κατηγορία Β. Η σύνθεση Crucifixus γραμμένη από τον συνθέτη Giuseppe de Rosa (Ιταλία) ξεχώρισε, η οποία έλαβε το 1ο Βραβείο, ένα βραβείο 500€ και εκτέλεση στο διεθνή διαγωνισμό διεύθυνσης στην Πρέβεζα 2022. Το 2ο Βραβείο, ένα βραβείο 400€ πήγε στον Claudio Ferrara (Ιταλία) για τη σύνθεση Waiting at the Window και το 3ο Βραβείο, ένα βραβείο 300€ έλαβε ο Miguel Angel Musumano (Αργεντινή) για τη σύνθεση Pueri Hebraeorum.",
      "Ανάμεσα στους νεότερους συνθέτες, η Klara Mlakar (1999) έπεισε την κριτική επιτροπή με τη σύνθεσή της και έλαβε Ειδικό Βραβείο για την καλύτερη σύνθεση που γράφτηκε από συμμετέχοντα γεννημένο μετά τις 14 Ιανουαρίου 1997. Ο Luke Mayernik επίσης έλαβε Ειδικό Βραβείο για την καλύτερη Ορθόδοξη σύνθεση. Ο Γιώργος Κουμαραδιός έλαβε επίσης Ειδικό Βραβείο για την καλύτερη σύνθεση που γράφτηκε από Έλληνα συνθέτη.",
      {
        "heading": "Ambrož Čopi (Πρόεδρος της κριτικής επιτροπής):",
        "level": 5
      },
      "\"Ακολουθώ το Διεθνές Φεστιβάλ Χορωδιών της Πρέβεζας εδώ και πολλά χρόνια. Πραγματικά εξαιρετικά οργανωμένος θεσμός, που επιτρέπει στις χορωδίες καλές παρουσιάσεις, αξέχαστες αναμνήσεις και εμπειρίες που μεταφέρουν μαζί τους για πολύ καιρό. Χαίρομαι που το φετινό Φεστιβάλ προσέθεσε χοροδιδασκάλους και διαγωνισμό για συνθέτες και διευθυντές, ανεβάζοντας αυτό το εξαίρετο φεστιβάλ σε ακόμα υψηλότερο επίπεδο. Αξιολογήσαμε και αναθεωρήσαμε τις ληφθείσες συνθέσεις με μεγάλη ικανοποίηση. Οι συνθέτες είχαν περιοριστεί σε 4-5 φωνές στην κατηγορία Α και σε 2-3 φωνές στην κατηγορία Β με δυνατότητα χρήσης πιάνου. Τεχνικά, οι συνθέσεις έπρεπε να είναι κατάλληλες για καλές χορωδίες, διευκολύνοντας έτσι την ευρύτερη εφαρμογή των συνθέσεων. Υπό τους περιορισμούς, ωστόσο, μερικές συνθέσεις σχεδιάστηκαν και βραβεύτηκαν με καλλιτεχνικό βάρος. Δεν υπήρχαν ορατές αναζητήσεις ή υπερβάσεις, αλλά κερδίσαμε αρκετές ενδιαφέρουσες καινοτομίες, που οι χορωδίες σίγουρα θα ήθελαν να συμπεριλάβουν στο ρεπερτόριό τους. Η συνεργασία της κριτικής επιτροπής έγινε σε καλή ατμόσφαιρα και ανταλλαγή απόψεων. Ευχαριστώ όλα τα μέλη της κριτικής επιτροπής για την αφοσίωση και τον επαγγελματισμό τους.\""
    ],
  },
};

export default competitionSchema.parse(data);
