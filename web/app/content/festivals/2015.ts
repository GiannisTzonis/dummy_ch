import { festivalSchema, type FestivalInput } from "../types";
import { person } from "../people";

const data: FestivalInput = {
  slug: "2015",
  year: 2015,
  editionNumber: 33,
  isCurrentEdition: false,
  // Listing/meta only -- the page itself shows the dates as printed in `content`.
  dates: {
    en: "2–5 July 2015",
    el: "2–5 Ιουλίου 2015",
  },
  poster: "/img/poster-2015.webp",
  title: {
    en: "33rd International Choral Festival of Preveza",
    el: "33ο Διεθνές Χορωδιακό Φεστιβάλ Πρέβεζας",
  },
  intro: { en: [], el: [] },
  content: {
    en: [
      {
        "list": [
          "2 - 5 July 2015"
        ]
      },
      {
        "img": "/img/poster-2015.webp"
      },
      {
        "wide": true
      },
      {
        "heading": "International Jury Committee I.J.C.",
        "level": 2,
        "align": "center"
      },
      ...person("ambroz-copi", "en", {level: 3}),
      ...person("john-fitzpatrick", "en", {level: 3,align: "right"}),
      {
        "heading": "Antonis Kontogeorgiou",
        "level": 3
      },
      {
        "img": "/img/antonis karageorgiou.webp",
        "layout": "side"
      },
      "The maestro Antonis Kontogeorgiou was an iconic figure for vocal art and choral singing in Greece. Born in Thessaloniki in 1945, he studied theory, piano, and singing at the State Conservatory of Thessaloniki while also attending medical school at the University of Thessaloniki. He continued his musical studies in Munich and the Mozarteum summer academy in Salzburg.\n\nHe performed over 1,600 concerts in Greece and abroad as a soloist or conductor and collaborated with Greek and foreign orchestras and famous conductors. He conducted 142 choral works with orchestra, 1030 other choral works, 21 operas, and over 800 oratorios. Many Greek composers dedicated their works to him. He also directed many choirs, including the Athens Conservatory choir.",
      {
        "heading": "Lorenzo Donati",
        "level": 3,
        "align": "right"
      },
      "Composer and conductor, Lorenzo Donati studied composition with Camillo Togni (Scuola di Musica di Fiesole), Ennio Morricone (Accademia Chigiana), Pascal Dusapin (Accademia di Francia), Azio Corghi (Accademia Chigiana) and at Conservatory of Music of Firenze with Rosario Mirigliano and Romano Pezzati. He also studied choral conducting with Diego Fasolis, Gary Graden and Rinaldo Alessandrini, Ottavio Dantone, Carl Høgset, Roberto Gabbiani, Peter Neumann.\n\nHe performed at concerts with Insieme Vocale Vox Cordis, UT Insieme Vocale-Consonante, Hesperimenta Vocal Ensemble winning several national and international awards (Arezzo, Cantonigròs, Gorizia, Senlis, Tours, Varna, Vittorio Veneto).\n\nWith UT insieme vocale-consonante he won the European Grand Prix for Choral Singing 2016. In 2007 he won two first prizes at the International Competition for Choral Conductors (Bologna). He conducted Coro Giovanile Italiano (2011-2014), EuroChoir (2016-2017) and from 2016 he conducts the professional choir Coro della Cattedrale di Siena Guido Chigi Saracini in Siena.\n\nHe has been invited to conduct professional choirs like Turkish State Choir and Zbor Slovenske Filharmonije - Slovenian Philharmonic Choir. His compositions are being performed and published around the world and he receives commissions of new works from many choirs like Coro del Maggio Musicale Fiorentino, Grex Vocalis, Philippine Madrigal Singers, St. Jacob's Chamber Choir. He won first prizes in many international composition contest: Arezzo, Avellino, Gorizia, Rome, Vittorio Veneto.",
      {
        "img": "/img/lorenzo.webp",
        "layout": "side"
      }
    ],
    el: [
      {
        "list": [
          "2 - 5 Ιουλίου 2015"
        ]
      },
      {
        "img": "/img/poster-2015.webp"
      },
      {
        "wide": true
      },
      {
        "heading": "Διεθνής Επιτροπή Κριτών (I.J.C.)",
        "level": 2,
        "align": "center"
      },
      ...person("ambroz-copi", "el", {level: 3}),
      ...person("john-fitzpatrick", "el", {level: 3,align: "right"}),
      {
        "heading": "Αντώνης Κοντογεωργίου",
        "level": 3
      },
      {
        "img": "/img/antonis karageorgiou.webp",
        "layout": "side"
      },
      "Ο μαέστρος Αντώνης Κοντογεωργίου ήταν μια εμβληματική φυσιογνωμία για τη φωνητική τέχνη και το χορωδιακό τραγούδι στην Ελλάδα. Γεννημένος στη Θεσσαλονίκη το 1945, σπούδασε θεωρία, πιάνο και τραγούδι στο Κρατικό Ωδείο Θεσσαλονίκης ενώ παράλληλα φοιτούσε στην Ιατρική Σχολή του Πανεπιστημίου Θεσσαλονίκης. Συνέχισε τις μουσικές του σπουδές στο Μόναχο και στη Θερινή Ακαδημία του Mozarteum στο Σάλτσμπουργκ.\n\nΠραγματοποίησε πάνω από 1.600 συναυλίες στην Ελλάδα και στο εξωτερικό ως σολίστας ή μαέστρος και συνεργάστηκε με Ελληνικές και ξένες ορχήστρες και γνωστούς μαέστρους. Διηύθυνε 142 χορωδιακά έργα με ορχήστρα, 1030 άλλα χορωδιακά έργα, 21 όπερες και πάνω από 800 ορατόρια. Πολλοί Έλληνες συνθέτες αφιέρωσαν τα έργα τους σε αυτόν. Διηύθυνε επίσης πολλές χορωδίες, συμπεριλαμβανομένης της χορωδίας του Αθηναϊκού Ωδείου.",
      {
        "heading": "Lorenzo Donati",
        "level": 3,
        "align": "right"
      },
      "Συνθέτης και μαέστρος, ο Lorenzo Donati σπούδασε σύνθεση με τον Camillo Togni (Σχολή Μουσικής της Φιεζόλε), τον Ennio Morricone (Accademia Chigiana), τον Pascal Dusapin (Ακαδημία της Γαλλίας), τον Azio Corghi (Accademia Chigiana) και στο Ωδείο της Φλωρεντίας με τους Rosario Mirigliano και Romano Pezzati. Μελέτησε επίσης χορωδιακή διεύθυνση με τους Diego Fasolis, Gary Graden και Rinaldo Alessandrini, Ottavio Dantone, Carl Høgset, Roberto Gabbiani, Peter Neumann.\n\nΈχει εμφανιστεί σε συναυλίες με το Insieme Vocale Vox Cordis, το UT Insieme Vocale-Consonante, το Hesperimenta Vocal Ensemble κερδίζοντας αρκετά εθνικά και διεθνή βραβεία (Άρετζο, Καντονίγκρο, Γκορίτζια, Σανλί, Τουρ, Βάρνα, Βιτόριο Βένετο).\n\nΜε το UT insieme vocale-consonante κέρδισε το Ευρωπαϊκό Μεγάλο Βραβείο Χορωδιακού Τραγουδιού 2016. Το 2007 κέρδισε δύο πρώτα βραβεία στον Διεθνή Διαγωνισμό Χορωδιακών Διευθυντών (Μπολόνια). Διηύθυνε το Coro Giovanile Italiano (2011-2014), το EuroChoir (2016-2017) και από το 2016 διευθύνει την επαγγελματική χορωδία Coro della Cattedrale di Siena Guido Chigi Saracini στη Σιένα.\n\nΠροσκεκλημένος να διευθύνει επαγγελματικές χορωδίες όπως η Τουρκική Κρατική Χορωδία και ο Zbor Slovenske Filharmonije - Σλοβενική Φιλαρμονική Χορωδία. Οι συνθέσεις του εκτελούνται και δημοσιεύονται σε όλο τον κόσμο και δέχεται παραγγελίες για νέα έργα από πολλές χορωδίες όπως η Coro del Maggio Musicale Fiorentino, ο Grex Vocalis, οι Philippine Madrigal Singers, ο St. Jacob's Chamber Choir. Κέρδισε πρώτα βραβεία σε πολλούς διεθνείς διαγωνισμούς σύνθεσης: Άρετζο, Αβελίνο, Γκορίτζια, Ρώμη, Βιτόριο Βένετο.",
      {
        "img": "/img/lorenzo.webp",
        "layout": "side"
      }
    ],
  },
  aside: {
    en: [
      {
        "heading": "Organising Committee:",
        "level": 4
      },
      {
        "heading": "Apostolos Antoniou, President",
        "level": 6
      },
      {
        "heading": "Christina Kitsou, Vice President",
        "level": 6
      },
      {
        "heading": "Panagiotis Galanis, General Secretary",
        "level": 6
      },
      {
        "heading": "Vassiliki Sarri, Treasurer",
        "level": 6
      },
      {
        "heading": "Anna-Ypapanti Soldatou, Commissioner",
        "level": 6
      },
      {
        "heading": "Ioanna Kotsi, Commissioner",
        "level": 6
      },
      {
        "heading": "Kosmas Koronaios, Commissioner, Festival Director",
        "level": 6
      }
    ],
    el: [
      {
        "heading": "Οργανωτική Επιτροπή:",
        "level": 4
      },
      {
        "heading": "Απόστολος Αντωνίου, Πρόεδρος",
        "level": 6
      },
      {
        "heading": "Χριστίνα Κίτσου, Αντιπρόεδρος",
        "level": 6
      },
      {
        "heading": "Παναγιώτης Γαλάνης, Γενικός Γραμματέας",
        "level": 6
      },
      {
        "heading": "Βασιλική Σαρρή, Ταμίας",
        "level": 6
      },
      {
        "heading": "Άννα-Υπαπαντή Σολδάτου, Επίτροπος",
        "level": 6
      },
      {
        "heading": "Ιωάννα Κώτση, Επίτροπος",
        "level": 6
      },
      {
        "heading": "Κοσμάς Κορωναίος, Επίτροπος, Διευθυντής Φεστιβάλ",
        "level": 6
      }
    ],
  },
};

export default festivalSchema.parse(data);
