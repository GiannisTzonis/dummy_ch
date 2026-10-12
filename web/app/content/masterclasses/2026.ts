import { masterclassSchema, type MasterclassInput } from "../types";
import { person } from "../people";
import { choir } from "../choirs";

const data: MasterclassInput = {
  slug: "2026",
  year: 2026,
  editionNumber: 7,
  isCurrentEdition: true,
  pageTitle: {
    en: "7th Masterclass for Choral Conductors 2026 | International Choral Festival of Preveza, Greece",
    el: "7ο Σεμινάριο & Εργαστήριο Χορωδιακής Διεύθυνσης 2026 | Διεθνές Χορωδιακό Φεστιβάλ Πρέβεζας",
  },
  // Listing/meta only -- the page itself shows the dates as printed in `content`.
  dates: {
    en: "6–8 July 2026 | Preveza, Greece",
    el: "6–8 Ιουλίου 2026 | Πρέβεζα, Ελλάδα",
  },
  poster: "/img/masterclass2026.webp",
  title: {
    en: "7th Masterclass for Choral Conductors 2026",
    el: "7ο Σεμινάριο & Εργαστήριο Χορωδιακής Διεύθυνσης 2026",
  },
  intro: { en: [], el: [] },
  content: {
    en: [
      {
        "list": [
          "6–8 July 2026 | Preveza, Greece"
        ]
      },
      {
        "img": "/img/masterclass2026.webp"
      },
      {
        "wide": true
      },
      {
        "heading": "Masterclass for Choral Conductors 2026",
        "level": 1,
        "align": "center"
      },
      {
        "heading": "6–8 July 2026 · Preveza, Greece",
        "level": 2,
        "align": "center"
      },
      "The International Choral Festival of Preveza invites choral conductors to a three-day intensive masterclass built around real rehearsal practice. In collaboration with the Ave Chamber Choir, participants will work directly with a distinguished ensemble, exploring conducting technique, musical interpretation, and communication in a practical and focused environment.",
      {
        "narrow": 6
      },
      {
        "heading": "What to Expect",
        "level": 3
      },
      {
        "list": [
          "- Conducting sessions with a chamber choir",
          "- Individual feedback from internationally active conductors",
          "- Repertoire analysis across historical periods",
          "- Intensive, hands-on rehearsal work"
        ]
      },
      "This masterclass is designed as a working laboratory for conductors who wish to deepen their artistic and technical approach.",
      {
        "narrow": 0
      },
      {
        "narrow": 6
      },
      {
        "heading": "The Experience",
        "level": 3
      },
      {
        "list": [
          "- Technique and ensemble work",
          "- Individual conducting sessions",
          "- Repertoire development",
          "- Full ensemble rehearsal"
        ],
        "align": "center"
      },
      "The masterclass concludes with a final working session with the choir.",
      {
        "narrow": 0
      },
      {
        "anchor": "mentors"
      },
      {
        "heading": "Mentors",
        "level": 2,
        "align": "center"
      },
      ...person("ambroz-copi", "en", {level: 3}),
      ...person("marco-antonio-garcia-de-paz", "en", {level: 3,align: "right"}),
      {
        "narrow": 10
      },
      {
        "heading": "Demonstrative Choir",
        "level": 1,
        "align": "center"
      },
      {
        "anchor": "demonstrative-choir"
      },
      {
        "anchor": "demonstrative-choir"
      },
      ...choir("ave-chamber-choir", "en", {level: 3,align: "center",heading: "[Ave Chamber Choir](https://kz-ave.si/?fbclid=IwVERDUARUSW5leHRuA2FlbQIxMABzcnRjBmFwcF9pZAo2NjI4NTY4Mzc5AAEecJr1JtxSLhxotE7AEEgZL1ZB0FYQ9gybsvRk8b0wD2L9g2vR4_QQ5CtRqIk_aem_f0BtwaGnoKNQLTpcJ-mMRw)"}),
      {
        "narrow": 0
      },
      {
        "narrow": 10
      },
      {
        "heading": "Programme",
        "level": 2,
        "align": "center"
      },
      {
        "anchor": "programme"
      },
      {
        "anchor": "programme"
      },
      {
        "heading": "Monday, 6 July 2026",
        "level": 4,
        "align": "center"
      },
      {
        "list": [
          "10:00–10:30 Welcome and introduction Presentation of the masterclass structure, participants, and repertoire",
          "10:30–11:30 Conducting technique session Fundamental principles of gesture, posture, and communication",
          "11:30–12:30 Practical work (active & passive participants) Basic conducting exercises and introductory work",
          "12:30–13:30 Repertoire study and discussion Approaches to style, phrasing, and interpretation",
          "13:30–16:30 Break",
          "16:30–18:00 Repertoire analysis and interpretative approach",
          "18:00–20:30 Conducting session (active participants)"
        ],
        "align": "center"
      },
      {
        "heading": "Tuesday, 7 July 2026",
        "level": 4,
        "align": "center"
      },
      {
        "list": [
          "10:00–10:30 Warm-up session with the choir",
          "10:30–13:30 Conducting session (active participants)",
          "13:30–16:30 Break",
          "16:30–18:00 Rehearsal technique Gesture, phrasing, and communication",
          "18:00–20:30 Conducting session (active participants)"
        ],
        "align": "center"
      },
      {
        "heading": "Wednesday, 8 July 2026",
        "level": 4,
        "align": "center"
      },
      {
        "list": [
          "10:00–10:30 Warm-up session with the choir",
          "10:30–13:00 Final conducting session (active participants)",
          "13:00–16:30 Break",
          "16:30–18:00 Final rehearsal",
          "18:00–19:00 Closing session"
        ],
        "align": "center"
      },
      {
        "heading": "Repertoire",
        "level": 3,
        "align": "center"
      },
      {
        "anchor": "repertoire"
      },
      {
        "anchor": "repertoire"
      },
      {
        "p": "The repertoire covers a wide stylistic range, from Renaissance polyphony to contemporary choral music. Participants will work on selected movements from the following repertoire.",
        "align": "center"
      },
      {
        "heading": "Renaissance",
        "level": 5,
        "align": "center"
      },
      {
        "list": [
          "Tomás Luis de Victoria (1548–1611) — Regina Caeli Laetare"
        ],
        "align": "center"
      },
      {
        "heading": "Romantic",
        "level": 5,
        "align": "center"
      },
      {
        "list": [
          "Sergei Rachmaninov (1873–1943) — Liturgy of St. John Chrysostom, Op. 31\nXII. Tebe Poem",
          "Joseph Rheinberger (1839–1901) — Mass in E-flat\nII. Gloria"
        ],
        "align": "center"
      },
      {
        "heading": "Contemporary Sacred",
        "level": 5,
        "align": "center"
      },
      {
        "list": [
          "Alfred Schnittke (1934–1998) — Three Sacred Hymns\nII. Gospodi Iisusye · III. Otche Nash",
          "Sergey Khvoshchinsky (1957) — Bogoroditse Devo",
          "Andrej Makor (1987) — Three Orthodox Hymns\nI. Bogoroditse Devo · II. Tebe Poem · III. Otche Nash",
          "Javier Busto (1949) — Ave Verum Corpus",
          "Levente Gyöngyösi (1975) — Laudate Dominum",
          "Ambrož Čopi (1973) — Two Solomon Songs of Love (Song of Songs)\nI. Until the Day is Cool · II. Awake, North Wind"
        ],
        "align": "center"
      },
      {
        "heading": "Contemporary Profane",
        "level": 5,
        "align": "center"
      },
      {
        "list": [
          "Jake Runestad (1986) — Let My Love Be Heard (Edward Everett Hale)",
          "Federica Lo Pinto (1997) — That I Did Always Love (Emily Dickinson)",
          "Ēriks Ešenvalds (1977) — My Love is Like a Red, Red Rose (Folk song from Scotland)",
          "Monica Nasti (1969) — Wings of Light – Ad Volandum Nati Sumus (2nd Prize – International Composers Competition of Preveza 2025)",
          "Daniele Nasti (1969) — Ode to the Universe (3rd Prize – International Composers Competition of Preveza 2025)"
        ],
        "align": "center"
      },
      {
        "heading": "Participation",
        "level": 3,
        "align": "center"
      },
      {
        "anchor": "participation"
      },
      {
        "anchor": "participation"
      },
      {
        "heading": "Active Participants",
        "level": 4,
        "align": "center"
      },
      {
        "list": [
          "Conduct the choir",
          "Receive individual feedback",
          "Participate in all sessions",
          "Limited places available",
          "Applications are reviewed on a rolling basis."
        ],
        "align": "center"
      },
      {
        "heading": "Passive Participants",
        "level": 4,
        "align": "center"
      },
      {
        "list": [
          "Access to all sessions",
          "Observation of all rehearsals",
          "Participation in discussions"
        ],
        "align": "center"
      },
      {
        "heading": "Fees",
        "level": 4,
        "align": "center"
      },
      {
        "p": "Early Bird (20 April – 20 May)",
        "align": "center"
      },
      {
        "list": [
          "Active: 60€",
          "Passive: 20€",
          "Students (Active): 40€",
          "Students (Passive): free of charge"
        ],
        "align": "center"
      },
      {
        "p": "Regular (21 May – 15 June)",
        "align": "center"
      },
      {
        "list": [
          "Active: 80€",
          "Passive: 30€",
          "Students (Active): 40€",
          "Students (Passive): free of charge"
        ],
        "align": "center"
      },
      {
        "heading": "Application & Registration",
        "level": 3,
        "align": "center"
      },
      {
        "anchor": "application-registration"
      },
      {
        "anchor": "application-registration"
      },
      {
        "heading": "Key Dates",
        "level": 4,
        "align": "center"
      },
      {
        "list": [
          "Applications open: 20 April 2026",
          "Early Bird deadline: 20 May 2026",
          "Final application deadline: 15 June 2026"
        ],
        "align": "center"
      },
      {
        "p": "prevezachoralfestival@gmail.com",
        "align": "center"
      },
      {
        "heading": "Application Instructions",
        "level": 5,
        "align": "center"
      },
      {
        "list": [
          "Active participants: Please send a short CV and (optionally) a video to the email below.",
          "Passive participants: Registration is possible via email."
        ],
        "align": "center"
      },
      {
        "p": "Contact: [prevezachoralfestival@gmail.com](mailto:prevezachoralfestival@gmail.com)",
        "align": "center"
      },
      {
        "heading": "Location",
        "level": 4,
        "align": "center"
      },
      {
        "p": "Preveza, Greece",
        "align": "center"
      },
      {
        "heading": "Part of",
        "level": 4,
        "align": "center"
      },
      {
        "p": "44th International Choral Festival of Preveza",
        "align": "center"
      },
      {
        "narrow": 0
      }
    ],
    el: [
      {
        "list": [
          "6–8 Ιουλίου 2026 | Πρέβεζα, Ελλάδα"
        ]
      },
      {
        "img": "/img/masterclass2026.webp"
      },
      {
        "wide": true
      },
      {
        "heading": "Σεμινάριο & Εργαστήριο Χορωδιακής Διεύθυνσης 2026",
        "level": 1,
        "align": "center"
      },
      {
        "heading": "6–8 Ιουλίου 2026 · Πρέβεζα, Ελλάδα",
        "level": 2,
        "align": "center"
      },
      "Το Διεθνές Χορωδιακό Φεστιβάλ Πρέβεζας προσκαλεί χορωδιακούς μαέστρους σε ένα τριήμερο εντατικό masterclass βασισμένο στην πρακτική πρόβα. Σε συνεργασία με τη Χορωδία Δωματίου Ave, οι συμμετέχοντες θα εργαστούν απευθείας με ένα διακεκριμένο σύνολο, εξερευνώντας τεχνική διεύθυνσης, μουσική ερμηνεία και επικοινωνία σε ένα πρακτικό και εστιασμένο περιβάλλον.",
      {
        "narrow": 6
      },
      {
        "heading": "Τι να Περιμένετε",
        "level": 3
      },
      {
        "list": [
          "- Συνεδρίες διεύθυνσης με χορωδία δωματίου",
          "- Ατομική ανατροφοδότηση από διεθνώς δραστήριους μαέστρους",
          "- Ανάλυση ρεπερτορίου σε ιστορικές περιόδους",
          "- Εντατική, πρακτική εργασία πρόβας"
        ]
      },
      "Αυτό το masterclass έχει σχεδιαστεί ως εργαστήριο εργασίας για μαέστρους που επιθυμούν να εμβαθύνουν την καλλιτεχνική και τεχνική τους προσέγγιση.",
      {
        "narrow": 0
      },
      {
        "narrow": 6
      },
      {
        "heading": "Η Εμπειρία",
        "level": 3
      },
      {
        "list": [
          "- Τεχνική και εργασία με σύνολο",
          "- Ατομικές συνεδρίες διεύθυνσης",
          "- Ανάπτυξη ρεπερτορίου",
          "- Πλήρης πρόβα συνόλου"
        ],
        "align": "center"
      },
      "Το masterclass ολοκληρώνεται με μια τελική συνεδρία εργασίας με τη χορωδία.",
      {
        "narrow": 0
      },
      {
        "anchor": "mentors"
      },
      {
        "heading": "Μέντορες",
        "level": 2,
        "align": "center"
      },
      ...person("ambroz-copi", "el", {level: 3}),
      ...person("marco-antonio-garcia-de-paz", "el", {level: 3,align: "right"}),
      {
        "narrow": 10
      },
      {
        "heading": "Υποδειγματική Χορωδία",
        "level": 1,
        "align": "center"
      },
      {
        "anchor": "demonstrative-choir"
      },
      {
        "anchor": "demonstrative-choir"
      },
      ...choir("ave-chamber-choir", "el", {level: 3,align: "center",heading: "[Χορωδία Δωματίου Ave](https://kz-ave.si/?fbclid=IwVERDUARUSW5leHRuA2FlbQIxMABzcnRjBmFwcF9pZAo2NjI4NTY4Mzc5AAEecJr1JtxSLhxotE7AEEgZL1ZB0FYQ9gybsvRk8b0wD2L9g2vR4_QQ5CtRqIk_aem_f0BtwaGnoKNQLTpcJ-mMRw)"}),
      {
        "narrow": 0
      },
      {
        "narrow": 10
      },
      {
        "heading": "Πρόγραμμα",
        "level": 2,
        "align": "center"
      },
      {
        "anchor": "programme"
      },
      {
        "anchor": "programme"
      },
      {
        "heading": "Δευτέρα, 6 Ιουλίου 2026",
        "level": 4,
        "align": "center"
      },
      {
        "list": [
          "10:00–10:30 Καλωσόρισμα και εισαγωγή Παρουσίαση της δομής του masterclass, των συμμετεχόντων και του ρεπερτορίου",
          "10:30–11:30 Συνεδρία τεχνικής διεύθυνσης Θεμελιώδεις αρχές χειρονομίας, στάσης και επικοινωνίας",
          "11:30–12:30 Πρακτική εργασία (ενεργοί & παθητικοί συμμετέχοντες) Βασικές ασκήσεις διεύθυνσης και εισαγωγική εργασία",
          "12:30–13:30 Μελέτη και συζήτηση ρεπερτορίου Προσεγγίσεις στιλ, φρασεολογίας και ερμηνείας",
          "13:30–16:30 Διάλειμμα",
          "16:30–18:00 Ανάλυση ρεπερτορίου και ερμηνευτική προσέγγιση",
          "18:00–20:30 Συνεδρία διεύθυνσης (ενεργοί συμμετέχοντες)"
        ],
        "align": "center"
      },
      {
        "heading": "Τρίτη, 7 Ιουλίου 2026",
        "level": 4,
        "align": "center"
      },
      {
        "list": [
          "10:00–10:30 Συνεδρία προθέρμανσης με τη χορωδία",
          "10:30–13:30 Συνεδρία διεύθυνσης (ενεργοί συμμετέχοντες)",
          "13:30–16:30 Διάλειμμα",
          "16:30–18:00 Τεχνική πρόβας Χειρονομία, φρασεολογία και επικοινωνία",
          "18:00–20:30 Συνεδρία διεύθυνσης (ενεργοί συμμετέχοντες)"
        ],
        "align": "center"
      },
      {
        "heading": "Τετάρτη, 8 Ιουλίου 2026",
        "level": 4,
        "align": "center"
      },
      {
        "list": [
          "10:00–10:30 Συνεδρία προθέρμανσης με τη χορωδία",
          "10:30–13:00 Τελική συνεδρία διεύθυνσης (ενεργοί συμμετέχοντες)",
          "13:00–16:30 Διάλειμμα",
          "16:30–18:00 Τελική πρόβα",
          "18:00–19:00 Κλείσιμο"
        ],
        "align": "center"
      },
      {
        "heading": "Ρεπερτόριο",
        "level": 3,
        "align": "center"
      },
      {
        "anchor": "repertoire"
      },
      {
        "anchor": "repertoire"
      },
      {
        "p": "Το ρεπερτόριο καλύπτει ένα ευρύ στυλιστικό φάσμα, από την αναγεννησιακή πολυφωνία έως τη σύγχρονη χορωδιακή μουσική. Οι συμμετέχοντες θα εργαστούν σε επιλεγμένα μέρη από το ακόλουθο ρεπερτόριο.",
        "align": "center"
      },
      {
        "heading": "Αναγέννηση",
        "level": 5,
        "align": "center"
      },
      {
        "list": [
          "Tomás Luis de Victoria (1548–1611) — Regina Caeli Laetare"
        ],
        "align": "center"
      },
      {
        "heading": "Ρομαντισμός",
        "level": 5,
        "align": "center"
      },
      {
        "list": [
          "Sergei Rachmaninov (1873–1943) — Λειτουργία του Αγίου Ιωάννου Χρυσοστόμου, Έργο 31\nXII. Tebe Poem",
          "Joseph Rheinberger (1839–1901) — Λειτουργία σε Mi♭\nII. Gloria"
        ],
        "align": "center"
      },
      {
        "heading": "Σύγχρονη Ιερή Μουσική",
        "level": 5,
        "align": "center"
      },
      {
        "list": [
          "Alfred Schnittke (1934–1998) — Τρεις Ιεροί Ύμνοι\nII. Gospodi Iisusye · III. Otche Nash",
          "Sergey Khvoshchinsky (1957) — Bogoroditse Devo",
          "Andrej Makor (1987) — Τρεις Ορθόδοξοι Ύμνοι\nI. Bogoroditse Devo · II. Tebe Poem · III. Otche Nash",
          "Javier Busto (1949) — Ave Verum Corpus",
          "Levente Gyöngyösi (1975) — Laudate Dominum",
          "Ambrož Čopi (1973) — Δύο Άσματα Αγάπης του Σολομώντα (Άσμα Ασμάτων)\nI. Until the Day is Cool · II. Awake, North Wind"
        ],
        "align": "center"
      },
      {
        "heading": "Σύγχρονη Κοσμική Μουσική",
        "level": 5,
        "align": "center"
      },
      {
        "list": [
          "Jake Runestad (1986) — Let My Love Be Heard (Edward Everett Hale)",
          "Federica Lo Pinto (1997) — That I Did Always Love (Emily Dickinson)",
          "Ēriks Ešenvalds (1977) — My Love is Like a Red, Red Rose (Σκωτσέζικο λαϊκό τραγούδι)",
          "Monica Nasti (1969) — Wings of Light – Ad Volandum Nati Sumus (2ο Βραβείο – Διεθνής Διαγωνισμός Συνθετών Πρέβεζας 2025)",
          "Daniele Nasti (1969) — Ode to the Universe (3ο Βραβείο – Διεθνής Διαγωνισμός Συνθετών Πρέβεζας 2025)"
        ],
        "align": "center"
      },
      {
        "heading": "Συμμετοχή",
        "level": 3,
        "align": "center"
      },
      {
        "anchor": "participation"
      },
      {
        "anchor": "participation"
      },
      {
        "heading": "Ενεργοί Συμμετέχοντες",
        "level": 4,
        "align": "center"
      },
      {
        "list": [
          "- Διεύθυνση χορωδίας",
          "- Λήψη ατομικής ανατροφοδότησης",
          "- Συμμετοχή σε όλες τις συνεδρίες",
          "- Περιορισμένες θέσεις διαθέσιμες",
          "- Οι αιτήσεις εξετάζονται σε κυλιόμενη βάση."
        ],
        "align": "center"
      },
      {
        "heading": "Παθητικοί Συμμετέχοντες",
        "level": 4,
        "align": "center"
      },
      {
        "list": [
          "- Πρόσβαση σε όλες τις συνεδρίες",
          "- Παρακολούθηση όλων των προβών",
          "- Συμμετοχή σε συζητήσεις"
        ],
        "align": "center"
      },
      {
        "heading": "Τέλη Συμμετοχής",
        "level": 4,
        "align": "center"
      },
      {
        "p": "Πρώιμη Εγγραφή (20 Απριλίου – 20 Μαΐου)",
        "align": "center"
      },
      {
        "list": [
          "Ενεργός: 60€",
          "Παθητικός: 20€",
          "Φοιτητές (ενεργοί): 40€",
          "Φοιτητές (παθητικοί): δωρεάν"
        ],
        "align": "center"
      },
      {
        "p": "Κανονική Εγγραφή (21 Μαΐου – 15 Ιουνίου)",
        "align": "center"
      },
      {
        "list": [
          "Ενεργός: 80€",
          "Παθητικός: 30€",
          "Φοιτητές (ενεργοί): 40€",
          "Φοιτητές (παθητικοί): δωρεάν"
        ],
        "align": "center"
      },
      {
        "heading": "Αίτηση & Εγγραφή",
        "level": 3,
        "align": "center"
      },
      {
        "anchor": "application-registration"
      },
      {
        "anchor": "application-registration"
      },
      {
        "heading": "Βασικές Ημερομηνίες",
        "level": 4,
        "align": "center"
      },
      {
        "list": [
          "Έναρξη αιτήσεων: 20 Απριλίου 2026",
          "Προθεσμία Πρώιμης Εγγραφής: 20 Μαΐου 2026",
          "Τελική προθεσμία αιτήσεων: 15 Ιουνίου 2026"
        ],
        "align": "center"
      },
      {
        "p": "prevezachoralfestival@gmail.com",
        "align": "center"
      },
      {
        "heading": "Οδηγίες Αίτησης",
        "level": 5,
        "align": "center"
      },
      {
        "list": [
          "Ενεργοί συμμετέχοντες: Παρακαλούμε να αποστείλετε σύντομο βιογραφικό σημείωμα και (προαιρετικά) βίντεο στο παρακάτω email.",
          "Παθητικοί συμμετέχοντες: Η εγγραφή γίνεται μέσω email."
        ],
        "align": "center"
      },
      {
        "p": "Email επικοινωνίας: [prevezachoralfestival@gmail.com](mailto:prevezachoralfestival@gmail.com)",
        "align": "center"
      },
      {
        "heading": "Τοποθεσία",
        "level": 4,
        "align": "center"
      },
      {
        "p": "Πρέβεζα, Ελλάδα",
        "align": "center"
      },
      {
        "heading": "Στο πλαίσιο",
        "level": 4,
        "align": "center"
      },
      {
        "p": "44ο Διεθνές Χορωδιακό Φεστιβάλ Πρέβεζας",
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
          "[Demonstrative Choir](#demonstrative-choir)",
          "[Programme](#programme)",
          "[Repertoire](#repertoire)",
          "[Participation](#participation)",
          "[Application & Registration](#application-registration)"
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
        "heading": "Panagiotis Galanis, Vice President",
        "level": 6
      },
      {
        "heading": "Silvia Soldatou, General Secretary",
        "level": 6
      },
      {
        "heading": "Ilias Katogiannis, Treasurer",
        "level": 6
      },
      {
        "heading": "Ioannis Ntitsos, Commissioner",
        "level": 6
      },
      {
        "heading": "Ioanna Kotsi, Commissioner",
        "level": 6
      },
      {
        "heading": "Maria Antoniou, Commissioner",
        "level": 6
      }
    ],
    el: [
      {
        "list": [
          "[Μέντορες](#mentors)",
          "[Υποδειγματική Χορωδία](#demonstrative-choir)",
          "[Πρόγραμμα](#programme)",
          "[Ρεπερτόριο](#repertoire)",
          "[Συμμετοχή](#participation)",
          "[Αίτηση & Εγγραφή](#application-registration)"
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
        "heading": "Παναγιώτης Γαλάνης, Αντιπρόεδρος",
        "level": 6
      },
      {
        "heading": "Σίλβια Σολδάτου, Γενική Γραμματέας",
        "level": 6
      },
      {
        "heading": "Ηλίας Κατωγιάννης, Ταμίας",
        "level": 6
      },
      {
        "heading": "Ιωάννης Ντίτσος, Επίτροπος",
        "level": 6
      },
      {
        "heading": "Ιωάννα Κώτση, Επίτροπος",
        "level": 6
      },
      {
        "heading": "Μαρία Αντωνίου, Επίτροπος",
        "level": 6
      }
    ],
  },
};

export default masterclassSchema.parse(data);
