import { festivalSchema, type FestivalInput } from "../types";
import { person } from "../people";

const data: FestivalInput = {
  slug: "2016",
  year: 2016,
  editionNumber: 34,
  isCurrentEdition: false,
  // Listing/meta only -- the page itself shows the dates as printed in `content`.
  dates: {
    en: "7–10 July 2016",
    el: "7–10 Ιουλίου 2016",
  },
  poster: "/img/poster-2016.webp",
  title: {
    en: "34th International Choral Festival of Preveza",
    el: "34ο Διεθνές Χορωδιακό Φεστιβάλ Πρέβεζας",
  },
  intro: { en: [], el: [] },
  content: {
    en: [
      {
        "list": [
          "7 - 10 July 2016"
        ]
      },
      {
        "img": "/img/poster-2016.webp"
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
      ...person("theodora-pavlovitch", "en", {level: 3,align: "right"}),
      ...person("ragnar-rasmussen", "en", {level: 3}),
      {
        "heading": "Miguel Ángel Felipe",
        "level": 3,
        "align": "right"
      },
      "Miguel Ángel Felipe is the Director of Choral Activities and Associate Professor of Music at the University of Arizona. He has also held similar positions at various other universities and served as President-Elect of the National Collegiate Choral Organization.\n\nFelipe is a supporter of new music and lesser-known masterpieces and has commissioned extensively, focusing on choral innovations in Indonesia and Southeast Asia. He has also established the Boston Choral Ensemble Commission Competition, the Northeast's largest choral commissioning project.\n\nFelipe's research areas have expanded to new choral pedagogies in higher education, addressing justice and the influence of choral societies in cultural development. Felipe is a proud member of various music organizations and has studied with renowned conductors and educators.",
      {
        "img": "/img/Felipe-Miguel.webp",
        "layout": "side"
      },
      {
        "heading": "David Means",
        "level": 3
      },
      {
        "img": "/img/david means.webp",
        "layout": "side"
      },
      "USC Thornton Choral & Sacred Music alumnus David Means (DMA ’97, choral music) is the founder of the Valley Choral Artists, South Texas’s first semi-professional chamber choir. He formed the ensemble in 2013 after he was appointed Director of Choral Studies at the University of Texas Rio Grande Valley.",
      {
        "anchor": "medals16"
      },
      "Following a highly successful 2015 performance of selections from Handel’s Messiah, the Valley Choral Artists raised sufficient funds to repeat the program in 2016. That year it hoped to raise $20,000 to fund its first full season, so that the Valley Choral Artists could officially become a professional ensemble in South Texas. According to Means, “It will be the beginning of what I hope will become the area’s premier music making ensemble.”",
      {
        "narrow": 8
      },
      {
        "heading": "22nd International Choral Competition",
        "level": 3,
        "align": "center"
      },
      {
        "heading": "Medals",
        "level": 2,
        "align": "center"
      },
      {
        "heading": "Category A ( Mixed Choirs )",
        "level": 4,
        "align": "center"
      },
      {
        "list": [
          "“Ambitus”, Athens, Greece\nConductor: Katerina Vassilikou\n92.60 Points\nGold Medal, 1st prize and money award 500€",
          "“Vox Animae”, Le Landeron, Switzerland\nConductor: Bernard Guye\n88.60 Points\nSilver Medal",
          "“Elefteria”, Chisinau, Republic of Moldova\nConductor: Corina Mirza\n79.20 Points\nBronze Medal",
          "“The Baruch Brothers”, Belgrade, Serbia\nConductor: Stefan Zekic\n79.20 Points\nBronze Medal",
          "\"English Concert Singers\", United Kingdom\nConductor: Roy Wales\n78.60 Points\nBronze Medal",
          "“Trison”, Braila, Romania\nConductors: Marcica Lupu & Stefan Lupu\n70.00 Points\nBronze Medal"
        ],
        "align": "center"
      },
      {
        "heading": "Category B (Equal Voices' Choirs)",
        "level": 4,
        "align": "center"
      },
      {
        "list": [
          "\"Te Deum Laudamus\", Bucharest, Romania\nConductor: Priest Zaharia Matei\n93.40 Points\nGold medal, 1st prize & money award 400€"
        ],
        "align": "center"
      },
      {
        "heading": "Category C (Children's Choirs)",
        "level": 4,
        "align": "center"
      },
      {
        "list": [
          "\"Motyli Šumperk\", Šumperk, Czech Republic\nConductor: Tomas Motýl - Helena Stojaníková\n90.60 Points\nGold Medal, 1st prize and money award 400€"
        ],
        "align": "center"
      },
      {
        "heading": "Category D (Chamber Choirs & Vocal Ensembles)",
        "level": 4,
        "align": "center"
      },
      {
        "list": [
          "“Ambitus”, Athens, Greece\nConductor: Katerina Vassilikou\n90.20 Points\nGold medal, 1st prize & money award 300€",
          "\"Te Deum Laudamus\", Bucharest, Romania\nConductor: Priest Zaharia Matei\n89.20 Points\nSilver Medal",
          "\"Voices of Orpheus\", Sofia, Bulgaria\nConductor: Venezia Karamanova\n86.20 Points\nSilver Medal",
          "\"Elefteria\", Chisinau, Republic of Moldova\nConductor: Corina Mirza\n78.20 Points\nBronze Medal",
          "\"Lavirint\" ,Zaječar, Serbia\nConductor: Željka Aleksić\n71.00 Points\nBronze Medal"
        ],
        "align": "center"
      },
      {
        "heading": "Special Prizes",
        "level": 5,
        "align": "center"
      },
      {
        "anchor": "gallery16"
      },
      {
        "list": [
          "Special prize for the best performance of Orthodox music was awarded to **\"Te Deum Laudamus\"**, Bucharest, Romania, Conductor: **Priest Zaharia Matei** for the performance of «Doamne, buzele mele» (Prayer) arranged by Sabin Dragoi (1894-1968).",
          "Special prize for the best programming was awarded to **Mr. Bernard Guye**, Le Landeron, Switzerland",
          "Special prize for the best choral pedagogy was awarded to **Mrs. Helena Stojaníková**, Šumperk, Czech Republic"
        ],
        "align": "center"
      },
      {
        "narrow": 0
      },
      {
        "img": "/img/gallery/festivals/festival 2016/1.webp",
        "href": "/img/gallery/festivals/festival%202016/1.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2016/2.webp",
        "href": "/img/gallery/festivals/festival%202016/2.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2016/3.webp",
        "href": "/img/gallery/festivals/festival%202016/3.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2016/4.webp",
        "href": "/img/gallery/festivals/festival%202016/4.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2016/5.webp",
        "href": "/img/gallery/festivals/festival%202016/5.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2016/6.webp",
        "href": "/img/gallery/festivals/festival%202016/6.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2016/7.webp",
        "href": "/img/gallery/festivals/festival%202016/7.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2016/8.webp",
        "href": "/img/gallery/festivals/festival%202016/8.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2016/9.webp",
        "href": "/img/gallery/festivals/festival%202016/9.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2016/10.webp",
        "href": "/img/gallery/festivals/festival%202016/10.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2016/11.webp",
        "href": "/img/gallery/festivals/festival%202016/11.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2016/12.webp",
        "href": "/img/gallery/festivals/festival%202016/12.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2016/13.webp",
        "href": "/img/gallery/festivals/festival%202016/13.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2016/14.webp",
        "href": "/img/gallery/festivals/festival%202016/14.webp",
        "layout": "gallery"
      }
    ],
    el: [
      {
        "list": [
          "7 - 10 Ιουλίου 2016"
        ]
      },
      {
        "img": "/img/poster-2016.webp"
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
      ...person("theodora-pavlovitch", "el", {level: 3,align: "right"}),
      ...person("ragnar-rasmussen", "el", {level: 3}),
      {
        "heading": "Miguel Ángel Felipe",
        "level": 3,
        "align": "right"
      },
      "Ο Miguel Ángel Felipe είναι Διευθυντής Χορωδιών και Αναπληρωτής Καθηγητής Μουσικής στο Πανεπιστήμιο της Αριζόνα. Έχει επίσης υπηρετήσει σε παρόμοιες θέσεις σε διάφορα άλλα πανεπιστήμια και υπηρέτησε ως Εκλεγμένος Πρόεδρος (President-Elect) του Εθνικού Κολεγιακού Χορωδιακού Οργανισμού.\n\nΟ Felipe είναι υποστηρικτής της νέας μουσικής και \"λιγότερο γνωστών\" αριστουργημάτων και έχει επιτελέσει εκτεταμένες παραγγελίες, επικεντρώνοντας στις χορωδιακές καινοτομίες στην Ινδονησία και τη Νοτιοανατολική Ασία. Έχει επίσης ιδρύσει το Διαγωνισμό Επιτροπής Χορωδίας της Βοστώνης.\n\nΟι ερευνητικοί τομείς του Felipe έχουν διευρυνθεί σε νέες χορωδιακές παιδαγωγικές στο πανεπιστήμιο, αντιμετωπίζοντας τη δικαιοσύνη και την επιρροή των χορωδιακών κοινωνιών στην πολιτιστική ανάπτυξη. Ο Felipe είναι περήφανο μέλος διαφόρων μουσικών οργανώσεων και έχει μελετήσει με διάσημους διευθυντές και εκπαιδευτές.",
      {
        "img": "/img/Felipe-Miguel.webp",
        "layout": "side"
      },
      {
        "heading": "David Means",
        "level": 3
      },
      {
        "img": "/img/david means.webp",
        "layout": "side"
      },
      "Ο απόφοιτος του USC Thornton Choral & Sacred Music, David Means (DMA ’97, χορωδιακή μουσική), είναι ο ιδρυτής του Valley Choral Artists, του πρώτου ημι-επαγγελματικού χορωδιακού σχήματος στο Νότιο Τέξας. Δημιούργησε το σύνολο το 2013 μετά την ανάθεσή του ως Διευθυντής Χορωδιακών Σπουδών στο University of Texas Rio Grande Valley.",
      {
        "anchor": "medals16"
      },
      "Μετά την επιτυχημένη παράσταση το 2015, οι Valley Choral Artists συγκέντρωσαν επαρκή κεφάλαια για να επαναλάβουν το πρόγραμμα το 2016. Την ίδια χρονιά ήλπιζαν να συγκεντρώσουν 20.000 δολάρια για να χρηματοδοτήσουν την πρώτη τους πλήρη σεζόν, ώστε οι Valley Choral Artists να γίνουν επίσημα επαγγελματικό σύνολο στο Νότιο Τέξας. Σύμφωνα με τον Means, \"Θα είναι η αρχή αυτού που ελπίζω να γίνει το κορυφαίο μουσικό σύνολο της περιοχής.\"",
      {
        "narrow": 8
      },
      {
        "heading": "22ος Διεθνής Χορωδιακός Διαγωνισμός",
        "level": 3,
        "align": "center"
      },
      {
        "heading": "Μετάλλια",
        "level": 2,
        "align": "center"
      },
      {
        "heading": "Κατηγορία Α (Μικτές Χορωδίες)",
        "level": 4,
        "align": "center"
      },
      {
        "list": [
          "\"Ambitus\", Αθήνα, Ελλάδα\nΔιευθύντρια: Κατερίνα Βασιλικού\n92,60 Βαθμοί\nΧρυσό Μετάλλιο, 1ο Βραβείο και Χρηματική Ανταμοιβή 500€",
          "\"Vox Animae\", Λε Λαντερόν, Ελβετία\nΔιευθυντής: Bernard Guye\n88,60 Βαθμοί\nΑσημένιο Μετάλλιο",
          "\"Elefteria\", Κισινάου, Δημοκρατία της Μολδαβίας\nΔιευθύντρια: Corina Mirza\n79,20 Βαθμοί\nΧάλκινο Μετάλλιο",
          "\"The Baruch Brothers\", Βελιγράδι, Σερβία\nΔιευθυντής: Stefan Zekic\n79,20 Βαθμοί\nΧάλκινο Μετάλλιο",
          "\"English Concert Singers\", Ηνωμένο Βασίλειο\nΔιευθυντής: Roy Wales\n78,60 Βαθμοί\nΧάλκινο Μετάλλιο",
          "\"Trison\", Μπράιλα, Ρουμανία\nΔιευθυντές: Marcica Lupu & Stefan Lupu\n70,00 Βαθμοί\nΧάλκινο Μετάλλιο"
        ],
        "align": "center"
      },
      {
        "heading": "Κατηγορία Β (Χορωδίες Ίσων Φωνών)",
        "level": 4,
        "align": "center"
      },
      {
        "list": [
          "\"Te Deum Laudamus\", Βουκουρέστι, Ρουμανία\nΔιευθυντής: Παπάς Zaharia Matei\n93,40 Βαθμοί\nΧρυσό Μετάλλιο, 1ο Βραβείο και Χρηματική Ανταμοιβή 400€"
        ],
        "align": "center"
      },
      {
        "heading": "Κατηγορία Γ (Χορωδίες Παιδικών Φωνών)",
        "level": 4,
        "align": "center"
      },
      {
        "list": [
          "\"Motyli Šumperk\", Σούμπερκ, Τσεχική Δημοκρατία\nΔιευθυντές: Tomas Motýl - Helena Stojaníková\n90,60 Βαθμοί\nΧρυσό Μετάλλιο, 1ο Βραβείο και Χρηματική Ανταμοιβή 400€"
        ],
        "align": "center"
      },
      {
        "heading": "Κατηγορία Δ (Χορωδίες Δωματίου & Φωνητικά Σύνολα)",
        "level": 4,
        "align": "center"
      },
      {
        "list": [
          "\"Ambitus\", Αθήνα, Ελλάδα\nΔιευθύντρια: Κατερίνα Βασιλικού\n90,20 Βαθμοί\nΧρυσό Μετάλλιο, 1ο Βραβείο και Χρηματική Ανταμοιβή 300€",
          "\"Te Deum Laudamus\", Βουκουρέστι, Ρουμανία\nΔιευθυντής: Παπάς Zaharia Matei\n89,20 Βαθμοί\nΑσημένιο Μετάλλιο",
          "\"Voices of Orpheus\", Σόφια, Βουλγαρία\nΔιευθύντρια: Venezia Karamanova\n86,20 Βαθμοί\nΑσημένιο Μετάλλιο",
          "\"Elefteria\", Κισινάου, Δημοκρατία της Μολδαβίας\nΔιευθύντρια: Corina Mirza\n78,20 Βαθμοί\nΧάλκινο Μετάλλιο",
          "\"Lavirint\", Ζάιετσαρ, Σερβία\nΔιευθύντρια: Željka Aleksić\n71,00 Βαθμοί\nΧάλκινο Μετάλλιο"
        ],
        "align": "center"
      },
      {
        "heading": "Ειδικά Βραβεία",
        "level": 5,
        "align": "center"
      },
      {
        "anchor": "gallery16"
      },
      {
        "list": [
          "Ειδικό βραβείο για την καλύτερη εκτέλεση της Ορθόδοξης Μουσικής απονεμήθηκε στο **\"Te Deum Laudamus\"**, Βουκουρέστι, Ρουμανία, Διευθυντής: **Παπάς Zaharia Matei** για την εκτέλεση του «Doamne, buzele mele» (Προσευχή) σε διασκευή του Sabin Dragoi (1894-1968).",
          "Ειδικό βραβείο για το καλύτερο πρόγραμμα απονεμήθηκε στον **Κύριο Bernard Guye**, Λε Λαντερόν, Ελβετία",
          "Ειδικό βραβείο για την καλύτερη εκπαιδευτική μεθοδολογία χορωδίας απονεμήθηκε στην **Κυρία Helena Stojaníková**, Σούμπερκ, Τσεχική Δημοκρατία"
        ],
        "align": "center"
      },
      {
        "narrow": 0
      },
      {
        "img": "/img/gallery/festivals/festival 2016/1.webp",
        "href": "/img/gallery/festivals/festival%202016/1.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2016/2.webp",
        "href": "/img/gallery/festivals/festival%202016/2.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2016/3.webp",
        "href": "/img/gallery/festivals/festival%202016/3.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2016/4.webp",
        "href": "/img/gallery/festivals/festival%202016/4.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2016/5.webp",
        "href": "/img/gallery/festivals/festival%202016/5.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2016/6.webp",
        "href": "/img/gallery/festivals/festival%202016/6.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2016/7.webp",
        "href": "/img/gallery/festivals/festival%202016/7.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2016/8.webp",
        "href": "/img/gallery/festivals/festival%202016/8.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2016/9.webp",
        "href": "/img/gallery/festivals/festival%202016/9.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2016/10.webp",
        "href": "/img/gallery/festivals/festival%202016/10.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2016/11.webp",
        "href": "/img/gallery/festivals/festival%202016/11.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2016/12.webp",
        "href": "/img/gallery/festivals/festival%202016/12.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2016/13.webp",
        "href": "/img/gallery/festivals/festival%202016/13.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2016/14.webp",
        "href": "/img/gallery/festivals/festival%202016/14.webp",
        "layout": "gallery"
      }
    ],
  },
  aside: {
    en: [
      {
        "list": [
          "[Medals](#medals16)",
          "[Gallery](#gallery16)"
        ]
      },
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
        "list": [
          "[Μετάλλια](#medals16)",
          "[Γκαλερί](#gallery16)"
        ]
      },
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
