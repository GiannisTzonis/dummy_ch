import { festivalSchema, type FestivalInput } from "../types";
import { person } from "../people";

const data: FestivalInput = {
  slug: "2017",
  year: 2017,
  editionNumber: 35,
  isCurrentEdition: false,
  // Listing/meta only -- the page itself shows the dates as printed in `content`.
  dates: {
    en: "6–9 July 2017",
    el: "6–9 Ιουλίου 2017",
  },
  poster: "/img/poster-2017.webp",
  title: {
    en: "35th International Choral Festival of Preveza",
    el: "35ο Διεθνές Χορωδιακό Φεστιβάλ Πρέβεζας",
  },
  intro: { en: [], el: [] },
  content: {
    en: [
      {
        "list": [
          "6 - 9 July 2017"
        ]
      },
      {
        "img": "/img/poster-2017.webp"
      },
      {
        "wide": true
      },
      {
        "heading": "International Jury Committee I.J.C.",
        "level": 2,
        "align": "center"
      },
      {
        "heading": "Dr. Justin Smith",
        "level": 3
      },
      {
        "img": "/img/Justin Smith.webp",
        "layout": "side"
      },
      "Dr. Justin Smith is Assistant Professor of Music, Director of the Music Program and Director of Choral Activities at Queens University of Charlotte, where he conducts three choirs, leads the music program and teaches courses in music history, conducting and film music. For six years he was the Director of Choral Activities and holder of the Joseph Naumes Endowed Chair in Music at Marylhurst University in Portland, Oregon.\n\nDr. Smith is the founder and director of the Portland Phoenix Chamber Choir, winning awards at the Cork Festival (2016), the European Choir Games (2017) and the Leonardo Da Vinci International Choral Festival (2018), and appearing by invitation at the Northwest Conference of the American Choral Directors Association in Spokane, WA. In 2020, he founded the Royal Voices of Charlotte, which performed at the NCACDA state conference, in collaboration with Bach Akademie Charlotte, and at Carnegie Hall in the 2021-22 season.\n\nHe holds the DMA in Choral Conducting from the Moores School of Music, University of Houston, and is a scholar of American choral music, having been published twice in Choral Journal on neglected choral works of Marc Blitzstein and Vincent Persichetti. He holds additional degrees in music from Wesleyan University and the University of Oregon.\n\nDr. Smith is a member of the American Choral Directors Association, the National Collegiate Choral Organization and the North Carolina Music Educators Association.",
      ...person("theodora-pavlovitch", "en", {level: 3,align: "right"}),
      ...person("ragnar-rasmussen", "en", {level: 3}),
      ...person("pearl-shangkuan", "en", {level: 3,align: "right"}),
      ...person("ambroz-copi", "en", {level: 3}),
      ...person("ursa-lah", "en", {level: 3,align: "right"}),
      {
        "anchor": "medals17"
      },
      {
        "narrow": 8
      },
      {
        "heading": "23rd International Choral Competition",
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
          "Junges Vokalensemble, Hannover Germany\nConductor: Prof. Klaus-Jürgen Etzold\n92.33 Points\nGold Medal, 1st prize and money award 500€",
          "New European Choir of Cultural Association \"Agapi\", Perea, Greece\nConductor: Eleonora Kalaitsidou\n84.00 Points\nSilver Medal",
          "Choir of Town Garwolin, Poland\nConductor: Radoslaw Mitura\n80.00 Points\nSilver Medal",
          "Mixed choir \"Hadzi Ruvim\", Valjevo Serbia\nConductor: Milica Stepanovic Baba-Milkic\nCertificate of Attendance"
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
          "Chamber girls choirs of Kiev Secondary Specialised Music School named after M. Lysenko, Kyiv Ukraine\nConductor: Julia Puchko-Kolesnik\n89.00 Points\nSilver Medal",
          "\"Cantus Domini\" Male Choir, Bucharest Romania\nConductor: Archdeacon PhD. Prof. Răzvan - Constantin Ștefan\n84.00 Points\nSilver Medal"
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
          "Estonian Television Concert Choir, Tallinn Estonia\nConductor: Külli Kiivet & Silja Uhs\n91.00 Points\nGold Medal, 1st prize and money award 400€",
          "\"Lautitia\", Debrecen Hungary\nConductor: József Nemes\n87.33 Points\nSilver Medal",
          "Children´s choir \"Radost\", Prague Czech Republic\nConductor: Dr. Jan Pirner\n87.00 Points\nSilver Medal"
        ],
        "align": "center"
      },
      {
        "heading": "Category D (Chamber Choirs)",
        "level": 4,
        "align": "center"
      },
      {
        "list": [
          "Chamber girls choirs of Kiev Secondary Specialised Music School named after M. Lysenko, Kyiv Ukraine\nConductor: Julia Puchko-Kolesnik\n94.00 Points\nGold Medal, First prize, Prize money 300€",
          "“Elefteria”, Chisinau, Republic of Moldova\nConductor: Zarina Iutkina\n91.00 Points\nGold Medal",
          "\"Jitřenka\", Červený Kostelec Czech Republic\nConductor: Eva Kubečková\n87.67 Points\nSilver Medal",
          "Peders Youthchoir, Randers Denmark\nConductor: Karsten Blond\n86.67 Points\nSilver Medal",
          "Youth Choir \"Scherzo\", Nowy Sącz Poland\nConductor: Andrzej Citak\n85.33 Points\nSilver Medal",
          "\"Emanuil\", Valjevo Serbia\nConductor: Vanja Dragojlovic\n79.67 Points\nBronze Medal",
          "\"Chorus Egrensis\", Aš Czech Republic\nConductor: Alexandra Benešová\n72.67 Points\nBronze Medal",
          "\"Sašáci\", Aš Czech Republic\nConductor: Alexandra Benešová\nCertificate of Attendance"
        ],
        "align": "center"
      },
      {
        "heading": "Category E (Youth Choirs)",
        "level": 4,
        "align": "center"
      },
      {
        "list": [
          "Chamber girls choirs of Kiev Secondary Specialised Music School named after M. Lysenko, Kyiv Ukraine\nConductor: Julia Puchko-Kolesnik\n94.67 Points\nGold medal, First prize, Prize money 400€",
          "\"Lautitia\", Debrecen Hungary\nConductor: József Nemes\n93.67 - 2 = 91.67 Points\nGold Medal",
          "\"Canta Chiara\", Berlin Germany\nConductor: Carsten Schultze\n93.33 Points\nGold Medal",
          "Children´s choir \"Radost\", Prague Czech Republic\nConductor: Dr. Jan Pirner\n88.33 Points\nSilver Medal",
          "Youth Choir \"Scherzo\", Nowy Sącz Poland\nConductor: Andrzej Citak\n78.33 Points\nBronze Medal",
          "\"Cantabile\" Chamber Choir, Panciu - Vrancea Romania\nConductor: Prof. Andrei-Igor Manovici\n73.33 Points\nBronze Medal"
        ],
        "align": "center"
      },
      {
        "heading": "Category F (All kind of choirs - Free Programme)",
        "level": 4,
        "align": "center"
      },
      {
        "list": [
          "Junges Vokalensemble, Hannover Germany\nConductor: Prof. Klaus-Jürgen Etzold\n93.33 Points\nGold medal, First prize, Prize money 400€",
          "Youth choir \"Svitych\" of the Gogol State University at Nizhyn, Nizhyn Ukraine\nConductor: Prof. Lyudmyla Shumska and prof. Lyudmyla Kostenko\n91.33 Points\nGold Medal",
          "Children´s choir \"Radost\", Prague Czech Republic\nConductor: Dr. Jan Pirner\n91.00 Points\nGold Medal",
          "Estonian Television Concert Choir, Tallinn Estonia\nConductor: Külli Kiivet & Silja Uhs\n90.33 Points\nGold Medal",
          "Peders Youthchoir, Randers Denmark\nConductor: Karsten Blond\n88.33 Points\nSilver Medal",
          "New European Choir of Cultural Association \"Agapi\", Perea, Greece\nConductor: Eleonora Kalaitsidou\n88.00 Points\nSilver Medal",
          "\"Emanuil\", Valjevo Serbia\nConductor: Vanja Dragojlovic\n85.67 Points\nSilver Medal",
          "Latvian Male Choir \"Silvicola\", Kekava Latvia\nConductor: Aivars Opincāns\n80.66 Points\nSilver Medal",
          "\"Sašáci\", Aš Czech Republic\nConductor: Alexandra Benešová\n71.00 Points\nBronze Medal",
          "\"Chorus Egrensis\", Aš Czech Republic\nConductor: Alexandra Benešová\n70.00 Points\nBronze Medal"
        ],
        "align": "center"
      },
      {
        "heading": "Special Prizes",
        "level": 5,
        "align": "center"
      },
      {
        "anchor": "gallery17"
      },
      {
        "list": [
          "The prize for the most promising conductor is awarded to **Mrs. Zarina Iutkina, Chisinau, Republic of Moldova**.",
          "The prize for the best performance of Orthodox Music is awarded to Youth choir **\"Svitych\"** of the Gogol State University at Nizhyn, Ukraine, conductors: **Prof. Lyudmyla Shumska & Prof. Lyudmyla Kostenko** for the performance of \"Irmoi of Easter\" (fragments) by Artemiy Loukyanovitch Vedel (1767 - 1808)",
          "The prize for the best performance of contemporary composition is awarded to **Junges Vokalensemble**, Hannover, Conductor: **Prof. Klaus-Jürgen Etzold** for the performance of \"Es gulu, gulu (Latvia)\" by Ārijs Šķepasts (b. 1961)",
          "The prize for outstanding soloist performances is awarded to **Ms. Anastasiya Ryaboshapka** (Анастасия Рябошапка), chorister of Chamber girls choirs of Kiev Secondary Specialised Music School named after M. Lysenko, Kyiv Ukraine"
        ],
        "align": "center"
      },
      {
        "narrow": 0
      },
      {
        "img": "/img/gallery/festivals/festival 2017/1.webp",
        "href": "/img/gallery/festivals/festival%202017/1.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2017/2.webp",
        "href": "/img/gallery/festivals/festival%202017/1.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2017/3.webp",
        "href": "/img/gallery/festivals/festival%202017/3.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2017/4.webp",
        "href": "/img/gallery/festivals/festival%202017/4.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2017/5.webp",
        "href": "/img/gallery/festivals/festival%202017/5.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2017/6.webp",
        "href": "/img/gallery/festivals/festival%202017/6.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2017/7.webp",
        "href": "/img/gallery/festivals/festival%202017/7.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2017/8.webp",
        "href": "/img/gallery/festivals/festival%202017/8.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2017/9.webp",
        "href": "/img/gallery/festivals/festival%202017/9.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2017/10.webp",
        "href": "/img/gallery/festivals/festival%202017/10.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2017/11.webp",
        "href": "/img/gallery/festivals/festival%202017/11.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2017/12.webp",
        "href": "/img/gallery/festivals/festival%202017/12.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2017/14.webp",
        "href": "/img/gallery/festivals/festival%202017/14.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2017/13.webp",
        "href": "/img/gallery/festivals/festival%202017/13.webp",
        "layout": "gallery"
      }
    ],
    el: [
      {
        "list": [
          "6 - 9 Ιουλίου 2017"
        ]
      },
      {
        "img": "/img/poster-2017.webp"
      },
      {
        "wide": true
      },
      {
        "heading": "Διεθνής Επιτροπή Κριτών (I.J.C.)",
        "level": 2,
        "align": "center"
      },
      {
        "heading": "Δρ. Justin Smith",
        "level": 3
      },
      {
        "img": "/img/Justin Smith.webp",
        "layout": "side"
      },
      "Ο Δρ. Justin Smith είναι Επίκουρος Καθηγητής Μουσικής, Διευθυντής του Προγράμματος Μουσικής και Διευθυντής των Χορωδιών στο Πανεπιστήμιο Queens του Σάρλοτ, όπου διευθύνει τρεις χορωδίες, διευθύνει το πρόγραμμα μουσικής και διδάσκει μαθήματα σε ιστορία της μουσικής, διεύθυνση χορωδίας και μουσική στον κινηματογράφο. Για έξι χρόνια ήταν Διευθυντής Χορωδιών και κάτοχος της Έδρας Joseph Naumes στο Πανεπιστήμιο Marylhurst στο Πόρτλαντ της Ορεγκόν.\n\nΟ Δρ. Smith είναι ιδρυτής και διευθυντής της Χορωδίας Portland Phoenix Chamber Choir, κερδίζοντας βραβεία στο Φεστιβάλ του Κορκ (2016), στους Ευρωπαϊκούς Χορωδιακούς Αγώνες (2017) και στο Φεστιβάλ Διεθνούς Χορωδιακής Μουσικής Leonardo Da Vinci (2018), και εμφανίζοντας κατά πρόσκληση στη Βορειοδυτική Διάσκεψη της Αμερικανικής Ένωσης Διευθυντών Χορωδιών στο Σπόκαν, WA. Το 2020 ίδρυσε τους Royal Voices of Charlotte, που εμφανίστηκαν στο κρατικό συνέδριο NCACDA, σε συνεργασία με τη Bach Akademie Charlotte, και στο Carnegie Hall την περίοδο 2021-22.\n\nΕίναι κάτοχος Διδακτορικού στην Διεύθυνση Χορωδίας από το Σχολείο Μουσικής Moores του Πανεπιστημίου του Χιούστον και ασχολείται με τη μελέτη της αμερικανικής χορωδιακής μουσικής, έχοντας δημοσιεύσει δύο φορές στο περιοδικό Choral Journal χορωδιακά έργα του Marc Blitzstein και του Vincent Persichetti. Έχει πτυχία σε μουσική από το Πανεπιστήμιο Wesleyan και το Πανεπιστήμιο της Ορεγκόν.\n\nΟ Δρ. Smith είναι μέλος της Αμερικανικής Ένωσης Διευθυντών Χορωδιών, του Εθνικού Συλλόγου Χορωδιών Πανεπιστημιακών και του Συλλόγου Μουσικών της Βόρειας Καρολίνα.",
      ...person("theodora-pavlovitch", "el", {level: 3,align: "right"}),
      ...person("ragnar-rasmussen", "el", {level: 3}),
      ...person("pearl-shangkuan", "el", {level: 3,align: "right"}),
      ...person("ambroz-copi", "el", {level: 3}),
      ...person("ursa-lah", "el", {level: 3,align: "right"}),
      {
        "anchor": "medals17"
      },
      {
        "narrow": 8
      },
      {
        "heading": "23ος Διεθνής Διαγωνισμός Χορωδιών",
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
          "Junges Vokalensemble, Αννόβερο Γερμανία\nΔιευθυντής: Καθ. Klaus-Jürgen Etzold\n92.33 Βαθμοί\nΧρυσό Μετάλλιο, 1ο βραβείο και χρηματική αμοιβή 500€",
          "Νέο Ευρωπαϊκό Χορωδιακό Σωματείο Πολιτιστικών Σχέσεων \"Αγάπη\", Πέρεα, Ελλάδα\nΔιευθύντρια: Ελεονώρα Καλαϊτσίδου\n84.00 Βαθμοί\nΑσημένιο Μετάλλιο",
          "Χορωδία της Πόλης Γκαρβολίν, Πολωνία\nΔιευθυντής: Radoslaw Mitura\n80.00 Βαθμοί\nΑσημένιο Μετάλλιο",
          "Μικτή χορωδία \"Hadzi Ruvim\", Βάλιεβο Σερβία\nΔιευθύντρια: Milica Stepanovic Baba-Milkic\nΠιστοποιητικό Παρακολούθησης"
        ],
        "align": "center"
      },
      {
        "heading": "Κατηγορία Β (Χορωδίες με Ίσες Φωνές)",
        "level": 4,
        "align": "center"
      },
      {
        "list": [
          "Χορωδίες Δωματίου Κοριτσιών του Ειδικευμένου Μουσικού Σχολείου Δευτεροβάθμιας Εκπαίδευσης του Κιέβου που φέρει το όνομα του M. Lysenko, Κίεβο Ουκρανία\nΔιευθύντρια: Julia Puchko-Kolesnik\n89.00 Βαθμοί\nΑσημένιο Μετάλλιο",
          "\"Cantus Domini\" Ανδρική Χορωδία, Βουκουρέστι Ρουμανία\nΔιευθυντής: Αρχιδιάκονος Δρ. Καθ. Răzvan - Constantin Ștefan\n84.00 Βαθμοί\nΑσημένιο Μετάλλιο"
        ],
        "align": "center"
      },
      {
        "heading": "Κατηγορία Γ (Παιδικές Χορωδίες)",
        "level": 4,
        "align": "center"
      },
      {
        "list": [
          "Estonian Television Concert Choir, Ταλίν Εσθονία\nΔιευθύντριες: Külli Kiivet & Silja Uhs\n91.00 Βαθμοί\nΧρυσό Μετάλλιο, 1ο βραβείο και χρηματική αμοιβή 400€",
          "\"Lautitia\", Ντέμπρετσεν Ουγγαρία\nΔιευθυντής: József Nemes\n87.33 Βαθμοί\nΑσημένιο Μετάλλιο",
          "Παιδική χορωδία \"Radost\", Πράγα Τσεχική Δημοκρατία\nΔιευθυντής: Δρ. Jan Pirner\n87.00 Βαθμοί\nΑσημένιο Μετάλλιο"
        ],
        "align": "center"
      },
      {
        "heading": "Κατηγορία Δ (Χορωδίες Δωματίου)",
        "level": 4,
        "align": "center"
      },
      {
        "list": [
          "Χορωδίες Δωματίου Κοριτσιών του Ειδικευμένου Μουσικού Σχολείου Δευτεροβάθμιας Εκπαίδευσης του Κιέβου που φέρει το όνομα του M. Lysenko, Κίεβο Ουκρανία\nΔιευθύντρια: Julia Puchko-Kolesnik\n94.00 Βαθμοί\nΧρυσό Μετάλλιο, Πρώτο Βραβείο, Χρηματικό Βραβείο 300€",
          "\"Elefteria\", Κισινάου Μολδαβία\nΔιευθύντρια: Zarina Iutkina\n91.00 Βαθμοί\nΧρυσό Μετάλλιο",
          "\"Jitřenka\", Τσέρβενι Κοστελέκ Τσεχική Δημοκρατία\nΔιευθύντρια: Eva Kubečková\n87.67 Βαθμοί\nΑσημένιο Μετάλλιο",
          "Νεανική Χορωδία Peders, Ράντερς Δανία\nΔιευθυντής: Karsten Blond\n86.67 Βαθμοί\nΑσημένιο Μετάλλιο",
          "Χορωδία Νέων \"Scherzo\", Νόβι Σοντς Πολωνία\nΔιευθυντής: Andrzej Citak\n85.33 Βαθμοί\nΑσημένιο Μετάλλιο",
          "\"Emanuil\", Βάλιεβο Σερβία\nΔιευθυντής: Vanja Dragojlovic\n79.67 Βαθμοί\nΧάλκινο Μετάλλιο",
          "\"Chorus Egrensis\", Ας Τσεχική Δημοκρατία\nΔιευθύντρια: Alexandra Benešová\n72.67 Βαθμοί\nΧάλκινο Μετάλλιο",
          "\"Sašáci\", Ας Τσεχική Δημοκρατία\nΔιευθύντρια: Alexandra Benešová\nΠιστοποιητικό Παρακολούθησης"
        ],
        "align": "center"
      },
      {
        "heading": "Κατηγορία Ε (Χορωδίες Νέων)",
        "level": 4,
        "align": "center"
      },
      {
        "list": [
          "Χορωδίες Δωματίου Κοριτσιών του Ειδικευμένου Μουσικού Σχολείου Δευτεροβάθμιας Εκπαίδευσης του Κιέβου που φέρει το όνομα του M. Lysenko, Κίεβο Ουκρανία\nΔιευθύντρια: Julia Puchko-Kolesnik\n94.67 Βαθμοί\nΧρυσό μετάλλιο, Πρώτο Βραβείο, Χρηματικό Βραβείο 400€",
          "\"Lautitia\", Ντέμπρετσεν Ουγγαρία\nΔιευθυντής: József Nemes\n93.67 - 2 = 91.67 Βαθμοί\nΧρυσό Μετάλλιο",
          "\"Canta Chiara\", Βερολίνο Γερμανία\nΔιευθυντής: Carsten Schultze\n93.33 Βαθμοί\nΧρυσό Μετάλλιο",
          "Παιδική χορωδία \"Radost\", Πράγα Τσεχική Δημοκρατία\nΔιευθυντής: Δρ. Jan Pirner\n88.33 Βαθμοί\nΑσημένιο Μετάλλιο",
          "Νεανική Χορωδία \"Scherzo\", Νόβι Σοντς Πολωνία\nΔιευθυντής: Andrzej Citak\n78.33 Βαθμοί\nΧάλκινο Μετάλλιο",
          "\"Cantabile\" Χορωδία Δωματίου, Πάντσιου - Βραντσέα Ρουμανία\nΔιευθυντής: Καθηγητής Andrei-Igor Manovici\n73.33 Βαθμοί\nΧάλκινο Μετάλλιο"
        ],
        "align": "center"
      },
      {
        "heading": "Κατηγορία ΣΤ (Όλοι οι τύποι χορωδιών - Ελεύθερο Πρόγραμμα)",
        "level": 4,
        "align": "center"
      },
      {
        "list": [
          "Junges Vokalensemble, Αννόβερο Γερμανία\nΔιευθυντής: Καθ. Klaus-Jürgen Etzold\n93.33 Βαθμοί\nΧρυσό μετάλλιο, Πρώτο Βραβείο, Χρηματικό Βραβείο 400€",
          "Χορωδία Νέων \"Svitych\", Πανεπιστήμιο Gogol στη Νιζίν, Νιζίν Ουκρανία\nΔιευθύντριες: Καθ. Lyudmyla Shumska και καθ. Lyudmyla Kostenko\n91.33 Βαθμοί\nΧρυσό Μετάλλιο",
          "Παιδική χορωδία \"Radost\", Πράγα Τσεχική Δημοκρατία\nΔιευθυντής: Δρ. Jan Pirner\n91.00 Βαθμοί\nΧρυσό Μετάλλιο",
          "Estonian Television Concert Choir, Ταλίν Εσθονία\nΔιευθύντριες: Külli Kiivet & Silja Uhs\n90.33 Βαθμοί\nΧρυσό Μετάλλιο",
          "Νεανική Χορωδία Peders, Ράντερς Δανία\nΔιευθυντής: Karsten Blond\n88.33 Βαθμοί\nΑσημένιο Μετάλλιο",
          "Νέο Ευρωπαϊκό Χορωδιακό Σωματείο Πολιτιστικών Σχέσεων \"Αγάπη\", Πέρεα, Ελλάδα\nΔιευθύντρια: Ελεονώρα Καλαϊτσίδου\n88.00 Βαθμοί\nΑσημένιο Μετάλλιο",
          "\"Emanuil\", Βάλιεβο Σερβία\nΔιευθυντής: Vanja Dragojlovic\n85.67 Βαθμοί\nΑσημένιο Μετάλλιο",
          "Λετονική Ανδρική Χορωδία \"Silvicola\", Κέκαβα Λετονία\nΔιευθυντής: Aivars Opincāns\n80.66 Βαθμοί\nΑσημένιο Μετάλλιο",
          "\"Sašáci\", Ας Τσεχική Δημοκρατία\nΔιευθύντρια: Alexandra Benešová\n71.00 Βαθμοί\nΧάλκινο Μετάλλιο",
          "\"Chorus Egrensis\", Ας Τσεχική Δημοκρατία\nΔιευθύντρια: Alexandra Benešová\n70.00 Βαθμοί\nΧάλκινο Μετάλλιο"
        ],
        "align": "center"
      },
      {
        "heading": "Ειδικά Βραβεία",
        "level": 5,
        "align": "center"
      },
      {
        "anchor": "gallery17"
      },
      {
        "list": [
          "Το βραβείο πιο ελπιδοφόρας διευθύντριας απονέμεται στην **κα Zarina Iutkina, Κισινάου, Δημοκρατία της Μολδαβίας**.",
          "Το βραβείο καλύτερης ερμηνείας ορθόδοξης μουσικής απονέμεται στη Χορωδία Νέων **\"Svitych\"** του Κρατικού Πανεπιστημίου Gogol της Νιζίν, Ουκρανία, διευθύντριες: **Καθ. Lyudmyla Shumska & Καθ. Lyudmyla Kostenko**, για την ερμηνεία των \"Ειρμών του Πάσχα\" (αποσπάσματα) του Artemiy Loukyanovitch Vedel (1767 - 1808).",
          "Το βραβείο καλύτερης ερμηνείας σύγχρονου έργου απονέμεται στο **Junges Vokalensemble**, Αννόβερο, διευθυντής: **Καθ. Klaus-Jürgen Etzold**, για την ερμηνεία του \"Es gulu, gulu (Latvia)\" του Ārijs Šķepasts (γεν. 1961).",
          "Το βραβείο εξαιρετικής ερμηνείας σολίστ απονέμεται στην **κα Anastasiya Ryaboshapka** (Анастасия Рябошапка), χορωδό των Χορωδιών Δωματίου Κοριτσιών του Ειδικευμένου Μουσικού Σχολείου Δευτεροβάθμιας Εκπαίδευσης του Κιέβου που φέρει το όνομα του M. Lysenko, Κίεβο Ουκρανία."
        ],
        "align": "center"
      },
      {
        "narrow": 0
      },
      {
        "img": "/img/gallery/festivals/festival 2017/1.webp",
        "href": "/img/gallery/festivals/festival%202017/1.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2017/2.webp",
        "href": "/img/gallery/festivals/festival%202017/1.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2017/3.webp",
        "href": "/img/gallery/festivals/festival%202017/3.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2017/4.webp",
        "href": "/img/gallery/festivals/festival%202017/4.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2017/5.webp",
        "href": "/img/gallery/festivals/festival%202017/5.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2017/6.webp",
        "href": "/img/gallery/festivals/festival%202017/6.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2017/7.webp",
        "href": "/img/gallery/festivals/festival%202017/7.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2017/8.webp",
        "href": "/img/gallery/festivals/festival%202017/8.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2017/9.webp",
        "href": "/img/gallery/festivals/festival%202017/9.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2017/10.webp",
        "href": "/img/gallery/festivals/festival%202017/10.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2017/11.webp",
        "href": "/img/gallery/festivals/festival%202017/11.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2017/12.webp",
        "href": "/img/gallery/festivals/festival%202017/12.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2017/14.webp",
        "href": "/img/gallery/festivals/festival%202017/14.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2017/13.webp",
        "href": "/img/gallery/festivals/festival%202017/13.webp",
        "layout": "gallery"
      }
    ],
  },
  aside: {
    en: [
      {
        "list": [
          "[Medals](#medals17)",
          "[Gallery](#gallery17)"
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
          "[Μετάλλια](#medals17)",
          "[Γκαλερί](#gallery17)"
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
