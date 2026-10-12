import { masterclassSchema, type MasterclassInput } from "../types";
import { person } from "../people";

const data: MasterclassInput = {
  slug: "2018",
  year: 2018,
  editionNumber: 2,
  // Listing/meta only -- the page itself shows the dates as printed in `content`.
  dates: {
    en: "3–5 July 2018",
    el: "3–5 Ιουλίου 2018",
  },
  poster: "/img/poster-2018.webp",
  title: {
    en: "2nd Choral Conducting Workshop & Seminar",
    el: "2ο Εργαστήριο & Σεμινάριο Διεύθυνσης Χορωδίας",
  },
  intro: { en: [], el: [] },
  content: {
    en: [
      {
        "list": [
          "3 - 5 July 2018"
        ]
      },
      {
        "img": "/img/poster-2018.webp"
      },
      {
        "wide": true
      },
      {
        "heading": "In the frame of the 36th International Choral Festival of Preveza a seminar for choral conductors will be held in Preveza from 3rd to 5th July 2018.",
        "level": 4,
        "align": "center"
      },
      {
        "heading": "The topics of the seminar are:",
        "level": 3,
        "align": "center"
      },
      {
        "list": [
          "Conducting technique with an emphasis on choral conducting",
          "Intonation in choir",
          "Interpretation of various musical styles",
          "Group vocal technique",
          "Organization of the rehearsals",
          "Vocal technique",
          "Score analysis",
          "Conducting exercises",
          "Individual preparation of the scores with active participants",
          "Presentation of new choral works from Slovenia (interesting also for composers)"
        ],
        "align": "center"
      },
      ...person("ambroz-copi", "en", {level: 3}),
      ...person("theodora-pavlovitch", "en", {level: 3,align: "right"}),
      {
        "narrow": 10
      },
      {
        "heading": "Schedule",
        "level": 2,
        "align": "center"
      },
      {
        "heading": "Tuesday, July 3rd, 2018",
        "level": 4,
        "align": "center"
      },
      {
        "list": [
          "**09:00 - 1:00 p.m.** Lectures along with practical work: Conducting technique - exercises for active and passive participants (with piano)",
          "**05:00 - 07:00 p.m.** Masterclass with the demonstrative ensemble ( active participants are conducting, while the passive ones are observing and rehearsing / learning ) Preveza.",
          "**08:00 - 10:00 p.m.** Individual lessons for active participants"
        ],
        "align": "center"
      },
      {
        "heading": "Wednesday, July 4th, 2018",
        "level": 4,
        "align": "center"
      },
      {
        "list": [
          "**9:00 - 01:00 p.m.** Lectures along with practical work",
          "**03:00 - 07:00 p.m.** Masterclass with the demonstrative ensemble (active participants are conducting, while the passive ones are observing and rehearsing / learning)",
          "**08:00 - 10:00 p.m.** Video evaluation of conducting of the active participants"
        ],
        "align": "center"
      },
      {
        "heading": "Thursday, July 5th, 2018",
        "level": 4,
        "align": "center"
      },
      {
        "list": [
          "**09:00 - 11:00 a.m.** Lectures along with practical work",
          "**11:00 - 01:00 p.m.** Masterclass with the demonstrative ensemble (active participants are conducting, while the passive ones are observing and rehearsing / learning)",
          "**03:00 - 05:00 p.m.** Individual consults to participants.",
          "**05:00 p.m.** General rehearsal",
          "**08:00 p.m.** Concert - Opening Ceremony of 36th ICF of Preveza."
        ],
        "align": "center"
      },
      "From Friday, 6th July 2018 to Sunday, 8th July 2018, the participants will have the opportunity to attend the 36th ICF of Preveza, in the frames of which the 24th international Choral Competition of Music will take place, but also to meet and discuss with conductors of the participating choirs, while the organizing committee of the festival will provide them with any kind of material they might need.",
      "The seminar is addressed to choir conductors, instructors who conduct choirs as well as students attending music studies and students attending Music Schools- Conservatories who get involved with choir (conducting)",
      "The Seminar will be led by the internationally renowned conductors Ambrož Čopi and Theodora Pavlovitch. A lot of time and special attention will be given to practical work with a demonstrative choir; the demonstrative ensemble will be the Academic Choir of the University of Primorska.",
      "The seminar is intended for beginners as well as established choral conductors. Participation can be active or passive. Participants who wish to be active are kindly asked to send their CV with specified experiences in choir conducting.",
      {
        "narrow": 0
      },
      {
        "img": "/img/gallery/masterclasses/masterclass 2018/1.webp",
        "href": "/img/gallery/masterclasses/masterclass%202018/1.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/masterclasses/masterclass 2018/2.webp",
        "href": "/img/gallery/masterclasses/masterclass%202018/1.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/masterclasses/masterclass 2018/3.webp",
        "href": "/img/gallery/masterclasses/masterclass%202018/3.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/masterclasses/masterclass 2018/4.webp",
        "href": "/img/gallery/masterclasses/masterclass%202018/4.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/masterclasses/masterclass 2018/5.webp",
        "href": "/img/gallery/masterclasses/masterclass%202018/5.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/masterclasses/masterclass 2018/6.webp",
        "href": "/img/gallery/masterclasses/masterclass%202018/6.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/masterclasses/masterclass 2018/7.webp",
        "href": "/img/gallery/masterclasses/masterclass%202018/7.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/masterclasses/masterclass 2018/8.webp",
        "href": "/img/gallery/masterclasses/masterclass%202018/8.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/masterclasses/masterclass 2018/9.webp",
        "href": "/img/gallery/masterclasses/masterclass%202018/9.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/masterclasses/masterclass 2018/10.webp",
        "href": "/img/gallery/masterclasses/masterclass%202018/10.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/masterclasses/masterclass 2018/11.webp",
        "href": "/img/gallery/masterclasses/masterclass%202018/11.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/masterclasses/masterclass 2018/12.webp",
        "href": "/img/gallery/masterclasses/masterclass%202018/12.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/masterclasses/masterclass 2018/13.webp",
        "href": "/img/gallery/masterclasses/masterclass%202018/13.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/masterclasses/masterclass 2018/14.webp",
        "href": "/img/gallery/masterclasses/masterclass%202018/14.webp",
        "layout": "gallery"
      }
    ],
    el: [
      {
        "list": [
          "3 - 5 Ιουλίου 2018"
        ]
      },
      {
        "img": "/img/poster-2018.webp"
      },
      {
        "wide": true
      },
      {
        "heading": "Στο πλαίσιο του 36ου Διεθνούς Χορωδιακού Φεστιβάλ Πρέβεζας θα πραγματοποιηθεί σεμινάριο για χορωδιακούς διευθυντές στην Πρέβεζα από 3 έως 5 Ιουλίου 2018.",
        "level": 4,
        "align": "center"
      },
      {
        "heading": "Τα θέματα του σεμιναρίου είναι:",
        "level": 3,
        "align": "center"
      },
      {
        "list": [
          "Τεχνική Διεύθυνσης με έμφαση στη χορωδιακή διεύθυνση",
          "Καθαρότητα τονισμού στη χορωδία",
          "Ερμηνεία διαφόρων μουσικών στυλ",
          "Ομαδική φωνητική τεχνική",
          "Οργάνωση των προβών",
          "Φωνητική τεχνική",
          "Ανάλυση παρτιτούρας",
          "Ασκήσεις διεύθυνσης",
          "Ατομική προετοιμασία των παρτιτούρων με ενεργούς συμμετέχοντες",
          "Παρουσίαση νέων χορωδιακών έργων από τη Σλοβενία (ενδιαφέρον και για συνθέτες)"
        ],
        "align": "center"
      },
      ...person("ambroz-copi", "el", {level: 3}),
      ...person("theodora-pavlovitch", "el", {level: 3,align: "right"}),
      {
        "narrow": 10
      },
      {
        "heading": "Πρόγραμμα",
        "level": 2,
        "align": "center"
      },
      {
        "heading": "Τρίτη, 3 Ιουλίου 2018",
        "level": 4,
        "align": "center"
      },
      {
        "list": [
          "**09:00 - 1:00 μ.μ.** Διαλέξεις μαζί με πρακτική εργασία: Τεχνική Διεύθυνσης - ασκήσεις για ενεργούς και παθητικούς συμμετέχοντες (με πιάνο)",
          "**05:00 - 07:00 μ.μ.** Masterclass με το υποδειγματικό σύνολο (οι ενεργοί συμμετέχοντες διευθύνουν, ενώ οι παθητικοί παρατηρούν και επαναλαμβάνουν / μαθαίνουν) Πρέβεζα.",
          "**08:00 - 10:00 μ.μ.** Ατομικά μαθήματα για τους ενεργούς συμμετέχοντες"
        ],
        "align": "center"
      },
      {
        "heading": "Τετάρτη, 4 Ιουλίου 2018",
        "level": 4,
        "align": "center"
      },
      {
        "list": [
          "**9:00 - 01:00 μ.μ.** Διαλέξεις μαζί με πρακτική εργασία",
          "**03:00 - 07:00 μ.μ.** Masterclass με το υποδειγματικό σύνολο (οι ενεργοί συμμετέχοντες διευθύνουν, ενώ οι παθητικοί παρατηρούν και επαναλαμβάνουν / μαθαίνουν)",
          "**08:00 - 10:00 μ.μ.** Βίντεο αξιολόγησης της διεύθυνσης των ενεργών συμμετεχόντων"
        ],
        "align": "center"
      },
      {
        "heading": "Πέμπτη, 5 Ιουλίου 2018",
        "level": 4,
        "align": "center"
      },
      {
        "list": [
          "**09:00 - 11:00 π.μ.** Διαλέξεις μαζί με πρακτική εργασία",
          "**11:00 - 01:00 μ.μ.** Masterclass με το υποδειγματικό σύνολο (οι ενεργοί συμμετέχοντες διευθύνουν, ενώ οι παθητικοί παρατηρούν και επαναλαμβάνουν / μαθαίνουν)",
          "**03:00 - 05:00 μ.μ.** Ατομικές συμβουλές προς τους συμμετέχοντες.",
          "**05:00 μ.μ.** Γενική πρόβα",
          "**08:00 μ.μ.** Συναυλία - Τελετή Έναρξης του 36ου Διεθνούς Χορωδιακού Φεστιβάλ Πρέβεζας."
        ],
        "align": "center"
      },
      "Από την Παρασκευή, 6 Ιουλίου 2018 έως την Κυριακή, 8 Ιουλίου 2018, οι συμμετέχοντες θα έχουν την ευκαιρία να παρακολουθήσουν το 36ο Διεθνές Χορωδιακό Φεστιβάλ Πρέβεζας, στα πλαίσια του οποίου θα πραγματοποιηθεί ο 24ος Διεθνής Χορωδιακός Διαγωνισμός, αλλά και να συναντηθούν και να συζητήσουν με διευθυντές χορωδιών που συμμετέχουν, ενώ η οργανωτική επιτροπή του φεστιβάλ θα τους παράσχει οποιοδήποτε είδος υλικού ίσως χρειαστούν.",
      "Το σεμινάριο απευθύνεται σε χορωδιακούς διευθυντές, εκπαιδευτές που διευθύνουν χορωδίες καθώς και φοιτητές που παρακολουθούν μουσικές σπουδές και μαθητές που παρακολουθούν Μουσικά Σχολεία- Ωδεία που ασχολούνται με τη χορωδία (διεύθυνση)",
      "Το σεμινάριο θα διεξαχθεί από τους διεθνώς αναγνωρισμένους διευθυντές χορωδίας Ambrož Čopi και Theodora Pavlovitch. Πολύς χρόνος και ειδική προσοχή θα δοθεί στην πρακτική εργασία με μια υποδειγματική χορωδία· το υποδειγματικό σύνολο θα είναι η Ακαδημαϊκή Χορωδία του Πανεπιστημίου της Πριμόρσκα.",
      "Το σεμινάριο απευθύνεται τόσο σε αρχάριους όσο και σε καθιερωμένους χορωδιακούς διευθυντές. Η συμμετοχή μπορεί να είναι ενεργή ή παθητική. Οι συμμετέχοντες που επιθυμούν να είναι ενεργοί καλούνται να αποστείλουν το βιογραφικό τους με τις συγκεκριμένες εμπειρίες στη διεύθυνση χορωδίας.",
      {
        "narrow": 0
      },
      {
        "img": "/img/gallery/masterclasses/masterclass 2018/1.webp",
        "href": "/img/gallery/masterclasses/masterclass%202018/1.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/masterclasses/masterclass 2018/2.webp",
        "href": "/img/gallery/masterclasses/masterclass%202018/1.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/masterclasses/masterclass 2018/3.webp",
        "href": "/img/gallery/masterclasses/masterclass%202018/3.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/masterclasses/masterclass 2018/4.webp",
        "href": "/img/gallery/masterclasses/masterclass%202018/4.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/masterclasses/masterclass 2018/5.webp",
        "href": "/img/gallery/masterclasses/masterclass%202018/5.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/masterclasses/masterclass 2018/6.webp",
        "href": "/img/gallery/masterclasses/masterclass%202018/6.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/masterclasses/masterclass 2018/7.webp",
        "href": "/img/gallery/masterclasses/masterclass%202018/7.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/masterclasses/masterclass 2018/8.webp",
        "href": "/img/gallery/masterclasses/masterclass%202018/8.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/masterclasses/masterclass 2018/9.webp",
        "href": "/img/gallery/masterclasses/masterclass%202018/9.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/masterclasses/masterclass 2018/10.webp",
        "href": "/img/gallery/masterclasses/masterclass%202018/10.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/masterclasses/masterclass 2018/11.webp",
        "href": "/img/gallery/masterclasses/masterclass%202018/11.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/masterclasses/masterclass 2018/12.webp",
        "href": "/img/gallery/masterclasses/masterclass%202018/12.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/masterclasses/masterclass 2018/13.webp",
        "href": "/img/gallery/masterclasses/masterclass%202018/13.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/masterclasses/masterclass 2018/14.webp",
        "href": "/img/gallery/masterclasses/masterclass%202018/14.webp",
        "layout": "gallery"
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
        "heading": "Theodora Pavlovitch",
        "level": 6
      },
      {
        "heading": "Klaus-Jürgen Etzold",
        "level": 6
      },
      {
        "heading": "Katerina Vassilikou",
        "level": 6
      },
      {
        "heading": "John Fitzpatrick",
        "level": 6
      },
      {
        "heading": "Ambrož Čopi",
        "level": 6
      },
      {
        "heading": "Jong-Won Park",
        "level": 6
      }
    ],
    el: [
      {
        "list": [
          "[Υποδειγματικές Χορωδίες](#demonstrative_choirs)",
          "[Πρόγραμμα](#schedule)",
          "[Συμμετέχοντες Διευθυντές](#competing)",
          "[Βραβεία, Πλακέτες & Διπλώματα](#awards)",
          "[Συλλογή Φωτογραφιών](#photos)"
        ]
      },
      {
        "heading": "Επιτροπή Κριτών",
        "level": 4
      },
      {
        "heading": "Theodora Pavlovitch",
        "level": 6
      },
      {
        "heading": "Klaus-Jürgen Etzold",
        "level": 6
      },
      {
        "heading": "Κατερίνα Βασιλικού",
        "level": 6
      },
      {
        "heading": "John Fitzpatrick",
        "level": 6
      },
      {
        "heading": "Ambrož Čopi",
        "level": 6
      },
      {
        "heading": "Jong-Won Park",
        "level": 6
      }
    ],
  },
};

export default masterclassSchema.parse(data);
