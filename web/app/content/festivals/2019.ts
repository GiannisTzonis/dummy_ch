import { festivalSchema, type FestivalInput } from "../types";
import { person } from "../people";
import { choir } from "../choirs";

const data: FestivalInput = {
  slug: "2019",
  year: 2019,
  editionNumber: 37,
  isCurrentEdition: false,
  // Listing/meta only -- the page itself shows the dates as printed in `content`.
  dates: {
    en: "4–7 July 2019",
    el: "4–7 Ιουλίου 2019",
  },
  poster: "/img/poster-2019.webp",
  title: {
    en: "37th International Choral Festival of Preveza",
    el: "37ο Διεθνές Χορωδιακό Φεστιβάλ Πρέβεζας",
  },
  intro: { en: [], el: [] },
  content: {
    en: [
      {
        "list": [
          "4 - 7 July 2019"
        ]
      },
      {
        "img": "/img/poster-2019.webp"
      },
      "Mark your calendar for July 2019 to be part of the 37th International Choral Festival of Preveza. The festival will be held from 4 to 7 of July 2019 in Preveza. The International Choral Festival of Preveza counts 36 interesting and exciting years of high quality choral music, challenged by excellent choirs which are continuously raising its standards and a great variety of intercultural experiences with participants from all over the world. The Festival includes numerous concerts given at idyllic locations of the area like the seaside fortress of Preveza and the historic Ancient Auditorium of Nikopolis “Odeon”. The other part of the Festival is the prestigious competition for which through the years we have been honored to host internationally acclaimed experts from abroad. For visiting choirs, Preveza provides an opportunity not only to perform; but also to experience some of the world’s best choral music, soak up the atmosphere and enjoy the mingling, singing and fun, and explore the picturesque city of Preveza and its surrounds. The festival will be managed by the Choral Society \"Armonia\" of Preveza, under the patronage of the city of Preveza. Choirs are eligible to join the festival either as non-competitive choirs participating in all the performances of the festival, or as competitive choirs.",
      {
        "wide": true
      },
      {
        "heading": "International Jury Committee I.J.C.",
        "level": 2,
        "align": "center"
      },
      ...person("ambroz-copi", "en", {level: 3}),
      ...person("graeme-langager", "en", {level: 3,align: "right"}),
      ...person("marco-antonio-garcia-de-paz", "en", {level: 3}),
      ...person("klaus-jurgen-etzold", "en", {level: 3,align: "right"}),
      ...person("kostis-konstantaras", "en", {level: 3}),
      ...person("theodora-pavlovitch", "en", {level: 3,align: "right"}),
      ...person("john-fitzpatrick", "en", {level: 3}),
      ...person("katerina-vassilikou", "en", {level: 3,align: "right"}),
      {
        "anchor": "choirs19"
      },
      {
        "narrow": 8
      },
      {
        "heading": "Choir's Participations",
        "level": 1,
        "align": "center"
      },
      ...choir("cantanti-childrens-choir-timisoara-romania", "en", {level: 3,align: "center"}),
      ...choir("trakiiska-lira-choir-pazardjik-bulgaria", "en", {level: 3,align: "center"}),
      ...choir("academic-choir-of-the-rzeszowski-university-of", "en", {level: 3,align: "center"}),
      {
        "heading": "Chamber Choir of the East Sarajevo's University Music Academy, East Sarajevo, Bosnia & Herzegovina",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/saragevo.webp"
      },
      "The Chamber Choir of the Course of Church Music and Chanting at the Academy of Music, University of East Sarajevo was founded in 2001. It has taken part in divine services in numerous churches and monasteries at home and abroad, and also performed at music festivals and concerts in Italy, Russia, Germany, Slovakia, Sweden, Denmark, Poland, Slovenia, Montenegro, Serbia, Croatia, etc. The ensemble was the laureate at numerous international choir competitions, such as Helsingborg, Sweden (2004), Rome, Italy (2005), Moscow, Russia (2006), Nis, Serbia (2004, 2010, 2016 and 2018), etc. Their latest success, though, was the Grand prix in the International Choral Festival of Niš, Serbia, in 2018. The ensemble has recorded 5 CDs and it has been recorded for documentaries, concerts and shows on the radio and television. Its repertoire is diverse and consists of Orthodox spiritual music and secular choral music, mostly works of Serbian composers, including the premiere performances of compositions, among which some have been dedicated to this ensemble and its director. Since its establishment, the choir has been directed by prof. **Rade Radović**.",
      ...choir("chamber-choir-of-the-music-and-ballet", "en", {level: 3,align: "center"}),
      ...choir("chamber-choir-of-the-faculty-of-pedagogy-and", "en", {level: 3,align: "center"}),
      ...choir("chamber-vocal-ensemble-solartissimo-of-the", "en", {level: 3,align: "center"}),
      ...choir("the-choir-named-after-vadim-serebrovsky-in-ural", "en", {level: 3,align: "center"}),
      ...choir("chor-pueri-et-puellae-cantores-plocenses-plock", "en", {level: 3,align: "center"}),
      ...choir("chorus-iglovia-spisska-nova-ves-slovakia", "en", {level: 3,align: "center"}),
      ...choir("female-vocal-ensemble-vox-angelica-sveta-trojica", "en", {level: 3,align: "center"}),
      ...choir("greek-catholic-church-choir-bl-p-p-gojdic-vranov", "en", {level: 3,align: "center"}),
      ...choir("hadar-singers-of-rehovot-rehovot-israel", "en", {level: 3,align: "center"}),
      ...choir("male-choir-napev-batuje-slovenia", "en", {level: 3,align: "center"}),
      ...choir("mixed-choir-crescendo-skofja-loka-slovenia", "en", {level: 3,align: "center"}),
      ...choir("mixed-choir-nikos-astrinidis-thessaloniki-hellas", "en", {level: 3,align: "center"}),
      ...choir("mixed-choir-spd-jedinstvo-banja-luka-bosnia", "en", {level: 3,align: "center"}),
      ...choir("polyphonic-choir-of-patras-youth-choir-patra", "en", {level: 3,align: "center"}),
      ...choir("the-charite-chor-berlin-germany", "en", {level: 3,align: "center"}),
      ...choir("tung-hsin-choral-society-rockville-washington-d", "en", {level: 3,align: "center"}),
      ...choir("yamuger-music-school-children-choir-ymscc", "en", {level: 3,align: "center"}),
      ...choir("polyphonic-choir-of-patras-children-choir-patra", "en", {level: 3,align: "center"}),
      {
        "anchor": "medals19"
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
          "Chamber Choir of the East Sarajevo's University Music Academy, East Sarajevo, Bosnia & Herzegovina Conductor: Rade Radović\n91.00 Points\nGold Medal, 1st prize and money award 500€",
          "Mixed Choir “Crescendo”, Škofja Loka, Slovenia\nConductor: Žiga Kert\n90.50 Points\nGold Medal",
          "Charité Chor, Berlin, Germany\nConductor: Adrian Emans\n86.50 Points\nSilver Medal",
          "Mixed Choir “Nikos Astrinidis”, Thessaloniki, Hellas\nConductor: Vasiliki Katsouka\nCertificate of Attendance"
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
          "“Cantanti” Children's Choir, Timișoara, Romania\nConductor: Maria Gyuris\n90.63 Points\nGold Medal, 1st prize and money award 400€",
          "Yamuger Music School Children Choir (YMSCC), Rawamangun, East Jakarta, Indonesia\nConductor: Delima Simamora\n83.00 Points\nSilver Medal Ex-Aequo",
          "Chór Pueri et Puellae Cantores Plocenses, Płock, Poland\nConductor: Anna Bramska\n83.00 Points\nSilver Medal Ex-Aequo"
        ],
        "align": "center"
      },
      {
        "heading": "Category D (Chamber choirs / Vocal ensembles)",
        "level": 4,
        "align": "center"
      },
      {
        "list": [
          "Chamber Choir of the Faculty of Pedagogy and Fine Arts of the University “Adam Mickiewicz” of Poznan in Kalisz, Poland (D1) Conductor: Beata Szymańska\n90.00 Points\nGold Medal, 1st prize and money award 300€",
          "Mixed Choir SPD \"Jedinstvo\", Banja Luka, Bosnia & Herzegovina (D1)\nConductor: Nemanja Savic\n83.75 Points\nSilver Medal",
          "Vocal Ensemble “Solartissimo” from Modern Conservatory of Larissa, Larissa, Hellas (D1)\nConductor: Nikos St. Efthymiadis\n81.00 Points\nSilver Medal",
          "Male choir NAPEV, Batuje, Slovenia (D2)\nConductor: Luka Vetrih\n80,00 Points\nSilver Medal",
          "“Chorus Iglovia”, Spišská Nová Ves, Slovakia (D1)\nConductor: Marta Nováková\n71.75 Points\nBronze Medal"
        ],
        "align": "center"
      },
      {
        "heading": "Category E (Youth choirs)",
        "level": 4,
        "align": "center"
      },
      {
        "list": [
          "Choir named after Vadim Serebrovsky in Ural Federal University, Yekaterinburg, Russia\nConductor: Julia Polyanovskaya\n81.75 Points\nSilver Medal"
        ],
        "align": "center"
      },
      {
        "heading": "Category F (Spiritual, Gospel, Jazz, Pop Choirs, Pop Ensembles, Folklore, Byzantine chant)",
        "level": 4,
        "align": "center"
      },
      {
        "list": [
          "Chór Pueri et Puellae Cantores Plocenses, Płock, Poland\nConductor: Anna Bramska\n90.25 Points\nGold Medal, 1st prize and money award 400€",
          "Vocal Ensemble “Solartissimo” from Modern Conservatory of Larissa, Larissa, Hellas\nConductor: Nikos St. Efthymiadis\n87.50 Points\nSilver Medal",
          "Mixed Choir SPD \"Jedinstvo\", Banja Luka, Bosnia & Herzegovina\nConductor: Nemanja Savic\n86.75 Points\nSilver Medal",
          "Choir named after Vadim Serebrovsky in Ural Federal University, Yekaterinburg, Russia\nConductor: Julia Polyanovskaya\n83.75 Points\nSilver Medal",
          "Academic Choir of the Rzeszówski University of Technology, Rzeszów, Poland\nConductor: Lidia Chalińska\nCertificate of Attendance"
        ],
        "align": "center"
      },
      {
        "heading": "Category G (Free programme of original choral music)",
        "level": 4,
        "align": "center"
      },
      {
        "anchor": "gallery19"
      },
      {
        "list": [
          "Mixed Choir “Crescendo”, Škofja Loka, Slovenia\nConductor: Žiga Kert\n91.50 Points\nGold Medal, 1st prize and money award 400€",
          "Chamber Choir of the East Sarajevo's University Music Academy, East Sarajevo, Bosnia & Herzegovina\nConductor: Rade Radović\n90.75 Points\nGold Medal",
          "Charité Chor, Berlin, Germany\nConductor: Adrian Emans\n90.00 Points\nGold Medal",
          "Yamuger Music School Children Choir (YMSCC), Rawamangun, East Jakarta, Indonesia\nConductor: Delima Simamora\n83.00 Points\nSilver Medal",
          "Polyphonic Choir of Patras – Youth Choir, Patra, Hellas\nConductor: Dimitra Pitsou – Diamantopoulou\n80.00 Points\nSilver Medal",
          "Female Vocal Ensemble \"Vox Angelica\", Sveta Trojica, Slovenia\nConductor: Anita Pavkovič\n78.50 Points\nBronze Medal"
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
          "For the best performance of Orthodox Music is awarded to Chamber Choir of the East Sarajevo's University Music Academy, East Sarajevo, Bosnia & Herzegovina, Conductor: Rade Radović for the performance of “Pričastno”, by Marko Tajčević (1900 – 1984).",
          "For the best stage performance is awarded to Yamuger Music School Children’s Choir (YMSCC), Rawamangun, East Jakarta, Indonesia, Conductor: Delima Simamora."
        ],
        "align": "center"
      },
      {
        "narrow": 0
      },
      {
        "img": "/img/gallery/festivals/festival 2019/1.webp",
        "href": "/img/gallery/festivals/festival%202019/1.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2019/2.webp",
        "href": "/img/gallery/festivals/festival%202019/2.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2019/3.webp",
        "href": "/img/gallery/festivals/festival%202019/3.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2019/4.webp",
        "href": "/img/gallery/festivals/festival%202019/4.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2019/5.webp",
        "href": "/img/gallery/festivals/festival%202019/5.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2019/6.webp",
        "href": "/img/gallery/festivals/festival%202019/6.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2019/7.webp",
        "href": "/img/gallery/festivals/festival%202019/7.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2019/8.webp",
        "href": "/img/gallery/festivals/festival%202019/8.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2019/9.webp",
        "href": "/img/gallery/festivals/festival%202019/9.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2019/10.webp",
        "href": "/img/gallery/festivals/festival%202019/10.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2019/11.webp",
        "href": "/img/gallery/festivals/festival%202019/11.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2019/12.webp",
        "href": "/img/gallery/festivals/festival%202019/12.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2019/13.webp",
        "href": "/img/gallery/festivals/festival%202019/13.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2019/14.webp",
        "href": "/img/gallery/festivals/festival%202019/14.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2019/15.webp",
        "href": "/img/gallery/festivals/festival%202019/15.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2019/16.webp",
        "href": "/img/gallery/festivals/festival%202019/16.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2019/17.webp",
        "href": "/img/gallery/festivals/festival%202019/17.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2019/18.webp",
        "href": "/img/gallery/festivals/festival%202019/18.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2019/19.webp",
        "href": "/img/gallery/festivals/festival%202019/19.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2019/20.webp",
        "href": "/img/gallery/festivals/festival%202019/20.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2019/21.webp",
        "href": "/img/gallery/festivals/festival%202019/21.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2019/22.webp",
        "href": "/img/gallery/festivals/festival%202019/22.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2019/23.webp",
        "href": "/img/gallery/festivals/festival%202019/23.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2019/24.webp",
        "href": "/img/gallery/festivals/festival%202019/24.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2019/25.webp",
        "href": "/img/gallery/festivals/festival%202019/25.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2019/26.webp",
        "href": "/img/gallery/festivals/festival%202019/26.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2019/27.webp",
        "href": "/img/gallery/festivals/festival%202019/27.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2019/28.webp",
        "href": "/img/gallery/festivals/festival%202019/28.webp",
        "layout": "gallery"
      }
    ],
    el: [
      {
        "list": [
          "4 - 7 Ιουλίου 2019"
        ]
      },
      {
        "img": "/img/poster-2019.webp"
      },
      "Σημειώστε στο ημερολόγιό σας τον Ιούλιο του 2019 για να λάβετε μέρος στο 37ο Διεθνές Χορωδιακό Φεστιβάλ Πρέβεζας. Το φεστιβάλ θα πραγματοποιηθεί από 4 έως 7 Ιουλίου 2019 στην Πρέβεζα. Το Διεθνές Χορωδιακό Φεστιβάλ Πρέβεζας μετρά 36 συναρπαστικά χρόνια υψηλής ποιότητας χορωδιακής μουσικής, με εξαιρετικές χορωδίες που συνεχώς ανεβάζουν τα πρότυπά της και μια μεγάλη ποικιλία διαπολιτισμικών εμπειριών με συμμετέχοντες από όλο τον κόσμο. Το Φεστιβάλ περιλαμβάνει πολλαπλές συναυλίες που δίνονται σε ειδυλλιακά μέρη της περιοχής, όπως το φρούριο της Πρέβεζας και το ιστορικό Αρχαίο Αμφιθέατρο της Νικόπολης \"Ωδείο\". Το άλλο μέρος του Φεστιβάλ είναι ο διακεκριμένος διαγωνισμός στον οποίο έχουμε την τιμή να φιλοξενούμε διεθνώς αναγνωρισμένους ειδικούς στον τομέα της χορωδιακής μουσικής. Για τις χορωδίες που επισκέπτονται, η Πρέβεζα παρέχει τη δυνατότητα όχι μόνο να εμφανιστούν, αλλά και να απολαύσουν μερικά από τα καλύτερα χορωδιακά έργα του κόσμου, να χορέψουν και να απολαύσουν το μίγμα, το τραγούδι και τη διασκέδαση, και να εξερευνήσουν τη γραφική πόλη της Πρέβεζας και το περιβάλλον της. Το φεστιβάλ θα διοργανωθεί από το Χορωδία \"Αρμονία\" Πρέβεζας, υπό την αιγίδα του Δήμου Πρέβεζας. Οι χορωδίες δικαιούνται να συμμετάσχουν στο φεστιβάλ είτε ως μη διαγωνιζόμενες χορωδίες, που συμμετέχουν σε όλες τις εκδηλώσεις του φεστιβάλ, είτε ως διαγωνιζόμενες χορωδίες.",
      {
        "wide": true
      },
      {
        "heading": "Διεθνής Επιτροπή Διαιτησίας I.J.C.",
        "level": 2,
        "align": "center"
      },
      ...person("ambroz-copi", "el", {level: 3}),
      ...person("graeme-langager", "el", {level: 3,align: "right"}),
      ...person("klaus-jurgen-etzold", "el", {level: 3}),
      ...person("marco-antonio-garcia-de-paz", "el", {level: 3,align: "right"}),
      ...person("theodora-pavlovitch", "el", {level: 3}),
      ...person("kostis-konstantaras", "el", {level: 3,align: "right"}),
      ...person("katerina-vassilikou", "el", {level: 3}),
      ...person("john-fitzpatrick", "el", {level: 3,align: "right"}),
      {
        "narrow": 8
      },
      {
        "heading": "Συμμετοχές Χορωδιών",
        "level": 1,
        "align": "center"
      },
      ...choir("cantanti-childrens-choir-timisoara-romania", "el", {level: 3,align: "center"}),
      ...choir("trakiiska-lira-choir-pazardjik-bulgaria", "el", {level: 3,align: "center"}),
      ...choir("academic-choir-of-the-rzeszowski-university-of", "el", {level: 3,align: "center"}),
      {
        "heading": "Χορωδία Δωματίου της Ακαδημίας Μουσικής του Πανεπιστημίου του Ανατολικού Σαράγεβο, Βοσνία Ερζεγοβίνη",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/saragevo.webp"
      },
      "Η Χορωδία Δωματίου του Τμήματος Εκκλησιαστικής Μουσικής και Ψαλμωδίας στην Ακαδημία Μουσικής, στο Πανεπιστήμιο του Ανατολικού Σαράγεβο, ιδρύθηκε το 2001. Έχει λάβει μέρος σε Θείες Ακολουθίες σε πολλές εκκλησίες και μοναστήρια στην πατρίδα της και στο εξωτερικό, και έχει επίσης εμφανιστεί σε μουσικά φεστιβάλ και συναυλίες σε χώρες όπως Ιταλία, Ρωσία, Γερμανία, Σλοβακία, Σουηδία, Δανία, Πολωνία, Σλοβενία, Μαυροβούνιο, Σερβία, Κροατία κ.λπ. Το σύνολο έχει νικήσει σε πολλούς διεθνείς χορωδιακούς διαγωνισμούς, όπως στο Χελσινμπόργκ, Σουηδία (2004), Ρώμη, Ιταλία (2005), Μόσχα, Ρωσία (2006), Νις, Σερβία (2004, 2010, 2016 και 2018), κ.λπ. Την τελευταία επιτυχία τους, όμως, αποτέλεσε το Grand prix του Διεθνούς Χορωδιακού Φεστιβάλ της Νις, στη Σερβία, το 2018. Το σύνολο έχει ηχογραφήσει 5 CD και έχει εμφανιστεί σε ντοκιμαντέρ, συναυλίες και εκπομπές στο ραδιόφωνο και την τηλεόραση. Το ρεπερτόριό του είναι ποικίλο και αποτελείται από Ορθόδοξη πνευματική μουσική και κοσμική χορωδιακή μουσική, κυρίως έργα Σέρβων συνθετών, συμπεριλαμβανομένων και των πρωτότυπων εκτελέσεων συνθέσεων, μερικές από τις οποίες έχουν αφιερωθεί σε αυτό το σύνολο και στον διευθυντή του. Από την ίδρυσή της, η χορωδία διευθύνεται από τον καθηγητή **Rade Radović**.",
      ...choir("chamber-choir-of-the-music-and-ballet", "el", {level: 3,align: "center"}),
      ...choir("chamber-choir-of-the-faculty-of-pedagogy-and", "el", {level: 3,align: "center"}),
      ...choir("chamber-vocal-ensemble-solartissimo-of-the", "el", {level: 3,align: "center"}),
      ...choir("the-choir-named-after-vadim-serebrovsky-in-ural", "el", {level: 3,align: "center"}),
      ...choir("chor-pueri-et-puellae-cantores-plocenses-plock", "el", {level: 3,align: "center"}),
      ...choir("chorus-iglovia-spisska-nova-ves-slovakia", "el", {level: 3,align: "center"}),
      ...choir("female-vocal-ensemble-vox-angelica-sveta-trojica", "el", {level: 3,align: "center"}),
      ...choir("greek-catholic-church-choir-bl-p-p-gojdic-vranov", "el", {level: 3,align: "center"}),
      ...choir("hadar-singers-of-rehovot-rehovot-israel", "el", {level: 3,align: "center"}),
      ...choir("male-choir-napev-batuje-slovenia", "el", {level: 3,align: "center"}),
      ...choir("mixed-choir-crescendo-skofja-loka-slovenia", "el", {level: 3,align: "center"}),
      ...choir("mixed-choir-nikos-astrinidis-thessaloniki-hellas", "el", {level: 3,align: "center"}),
      ...choir("mixed-choir-spd-jedinstvo-banja-luka-bosnia", "el", {level: 3,align: "center"}),
      ...choir("polyphonic-choir-of-patras-youth-choir-patra", "el", {level: 3,align: "center"}),
      ...choir("the-charite-chor-berlin-germany", "el", {level: 3,align: "center"}),
      ...choir("tung-hsin-choral-society-rockville-washington-d", "el", {level: 3,align: "center"}),
      ...choir("yamuger-music-school-children-choir-ymscc", "el", {level: 3,align: "center"}),
      ...choir("polyphonic-choir-of-patras-children-choir-patra", "el", {level: 3,align: "center"}),
      {
        "anchor": "medals19"
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
          "Εκκλησιαστική Χορωδία της Ανατολικής Σχολής του Πανεπιστημίου του Σαράγεβο, Ανατολικό Σαράγεβο, Βοσνία & Ερζεγοβίνη Διευθυντής: Rade Radović\n91,00 Βαθμοί\nΧρυσό Μετάλλιο, 1η θέση και χρηματικό βραβείο 500€",
          "Μικτή Χορωδία “Crescendo”, Σκόφια Λόκα, Σλοβενία\nΔιευθυντής: Žiga Kert\n90,50 Βαθμοί\nΧρυσό Μετάλλιο",
          "Χορωδία Charité, Βερολίνο, Γερμανία\nΔιευθυντής: Adrian Emans\n86,50 Βαθμοί\nΑσημένιο Μετάλλιο",
          "Μικτή Χορωδία “Νίκος Αστρινίδης”, Θεσσαλονίκη, Ελλάδα\nΔιευθύντρια: Βασιλική Κατσούκα\nΠιστοποίηση Συμμετοχής"
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
          "Παιδική Χορωδία \"Cantanti\", Τιμισοάρα, Ρουμανία\nΔιευθύντρια: Maria Gyuris\n90,63 Βαθμοί\nΧρυσό Μετάλλιο, 1η θέση και χρηματικό βραβείο 400€",
          "Παιδική Χορωδία της Μουσικής Σχολής Yamuger (YMSCC), Rawamangun, Ανατολική Τζακάρτα, Ινδονησία\nΔιευθύντρια: Delima Simamora\n83,00 Βαθμοί\nΑσημένιο Μετάλλιο Ex-Aequo",
          "Χορωδία \"Chór Pueri et Puellae Cantores Plocenses\", Πλοκ, Πολωνία\nΔιευθύντρια: Anna Bramska\n83,00 Βαθμοί\nΑσημένιο Μετάλλιο Ex-Aequo"
        ],
        "align": "center"
      },
      {
        "heading": "Κατηγορία Δ (Χορωδίες Δωματίου / Φωνητικά σύνολα)",
        "level": 4,
        "align": "center"
      },
      {
        "list": [
          "Χορωδία Δωματίου του Τμήματος Παιδαγωγικών και Καλών Τεχνών του Πανεπιστημίου “Adam Mickiewicz” του Πόζναν στο Κάλις, Πολωνία (Δ1) Διευθύντρια: Beata Szymańska\n90,00 Βαθμοί\nΧρυσό Μετάλλιο, 1η θέση και χρηματικό βραβείο 300€",
          "Μικτή Χορωδία SPD \"Jedinstvo\", Μπάνια Λούκα, Βοσνία & Ερζεγοβίνη (Δ1)\nΔιευθυντής: Nemanja Savić\n83,75 Βαθμοί\nΑσημένιο Μετάλλιο",
          "Φωνητικό Σύνολο “Solartissimo” του Μοντέρνου Ωδείου της Λάρισας, Λάρισα, Ελλάδας (Δ1)\nΔιευθυντής: Νίκος Στ. Ευθυμιάδης\n81,00 Βαθμοί\nΑσημένιο Μετάλλιο",
          "Ανδρική χορωδία NAPEV, Μπατούγιε, Σλοβενία (Δ2)\nΔιευθυντής: Luka Vetrih\n80,00 Βαθμοί\nΑσημένιο Μετάλλιο",
          "“Chorus Iglovia”, Σπίσκα Νόβα Βες, Σλοβακία (Δ1)\nΔιευθύντρια: Marta Nováková\n71,75 Βαθμοί\nΧάλκινο Μετάλλιο"
        ],
        "align": "center"
      },
      {
        "heading": "Κατηγορία Ε (Νεανικές Χορωδίες)",
        "level": 4,
        "align": "center"
      },
      {
        "list": [
          "Χορωδία \"Vadim Serebrovsky\" στο Πανεπιστήμιο του Ουράλ, Εκατερίνμπουργκ, Ρωσία\nΔιευθύντρια: Julia Polyanovskaya\n81,75 Βαθμοί\nΑσημένιο Μετάλλιο"
        ],
        "align": "center"
      },
      {
        "heading": "Κατηγορία ΣΤ (Πνευματικές, Gospel, Jazz, Pop Χορωδίες, Ποπ Σύνολα, Λαογραφικό, Βυζαντινός ψαλμός)",
        "level": 4,
        "align": "center"
      },
      {
        "list": [
          "Χορωδία \"Chór Pueri et Puellae Cantores Plocenses\", Πλοκ, Πολωνία\nΔιευθύντρια: Anna Bramska\n90,25 Βαθμοί\nΧρυσό Μετάλλιο, 1η θέση και χρηματικό βραβείο 400€",
          "Φωνητικό Σύνολο “Solartissimo” του Μοντέρνου Ωδείου της Λάρισας, Λάρισα, Ελλάδα\nΔιευθυντής: Νίκος Στ. Ευθυμιάδης\n87,50 Βαθμοί\nΑσημένιο Μετάλλιο",
          "Μικτή Χορωδία SPD \"Jedinstvo\", Μπάνια Λούκα, Βοσνία & Ερζεγοβίνη\nΔιευθυντής: Nemanja Savić\n86,75 Βαθμοί\nΑσημένιο Μετάλλιο",
          "Χορωδία \"Vadim Serebrovsky\" στο Πανεπιστήμιο του Ουράλ, Εκατερίνμπουργκ, Ρωσία\nΔιευθύντρια: Julia Polyanovskaya\n83,75 Βαθμοί\nΑσημένιο Μετάλλιο",
          "Ακαδημαϊκή Χορωδία του Τεχνολογικού Πανεπιστημίου του Ρζεσόβ, Ρζεσόβ, Πολωνία\nΔιευθύντρια: Lidia Chalińska\nΠιστοποίηση Συμμετοχής"
        ],
        "align": "center"
      },
      {
        "heading": "Κατηγορία Ζ (Ελεύθερο πρόγραμμα χορωδιακής μουσικής)",
        "level": 4,
        "align": "center"
      },
      {
        "anchor": "gallery19"
      },
      {
        "list": [
          "Μικτή Χορωδία \"Crescendo\", Σκόφια Λόκα, Σλοβενία\nΔιευθυντής: Žiga Kert\n91.50 Βαθμοί\nΧρυσό Μετάλλιο, 1ο Βραβείο και χρηματική ανταμοιβή 400€",
          "Χορωδία της Μουσικής Ακαδημίας, Ανατολικό Σαράγεβο, Βοσνία & Ερζεγοβίνη\nΔιευθυντής: Rade Radović\n90.75 Βαθμοί\nΧρυσό Μετάλλιο",
          "Χορωδία του Charité, Βερολίνο, Γερμανία\nΔιευθυντής: Adrian Emans\n90.00 Βαθμοί\nΧρυσό Μετάλλιο",
          "Παιδική Χορωδία του Μουσικού Σχολείου Yamuger (YMSCC), Ραβαμάνγκουν, Ανατολική Τζακάρτα, Ινδονησία\nΔιευθύντρια: Delima Simamora\n83.00 Βαθμοί\nΑσημένιο Μετάλλιο",
          "Πολυφωνική Χορωδία Πατρών – Χορωδία Νέων, Πάτρα, Ελλάδα\nΔιευθύντρια: Δήμητρα Πίτσου – Διαμαντοπούλου\n80.00 Βαθμοί\nΑσημένιο Μετάλλιο",
          "Γυναικείο Φωνητικό Σύνολο \"Vox Angelica\", Σβέτα Τρόιτσα, Σλοβενία\nΔιευθύντρια: Anita Pavkovič\n78.50 Βαθμοί\nΧάλκινο Μετάλλιο"
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
          "Για την καλύτερη εκτέλεση Ορθόδοξης Μουσικής απονέμεται στη Χορωδία Δωματίου της Μουσικής Ακαδημίας της Ανατολικής Σαράγεβο, Ανατολική Σαράγεβο, Βοσνία & Ερζεγοβίνη, Διευθυντής: Rade Radović για την εκτέλεση του “Pričastno”, από τον Marko Tajčević (1900 – 1984).",
          "Για την καλύτερη σκηνική ερμηνεία απονέμεται στο Παιδικό Χορωδία του Μουσικού Σχολείου Yamuger (YMSCC), Ραβαμάνγκουν, Ανατολική Τζακάρτα, Ινδονησία, Διευθύντρια: Delima Simamora."
        ],
        "align": "center"
      },
      {
        "narrow": 0
      },
      {
        "img": "/img/gallery/festivals/festival 2019/1.webp",
        "href": "/img/gallery/festivals/festival%202019/1.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2019/2.webp",
        "href": "/img/gallery/festivals/festival%202019/2.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2019/3.webp",
        "href": "/img/gallery/festivals/festival%202019/3.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2019/4.webp",
        "href": "/img/gallery/festivals/festival%202019/4.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2019/5.webp",
        "href": "/img/gallery/festivals/festival%202019/5.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2019/6.webp",
        "href": "/img/gallery/festivals/festival%202019/6.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2019/7.webp",
        "href": "/img/gallery/festivals/festival%202019/7.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2019/8.webp",
        "href": "/img/gallery/festivals/festival%202019/8.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2019/9.webp",
        "href": "/img/gallery/festivals/festival%202019/9.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2019/10.webp",
        "href": "/img/gallery/festivals/festival%202019/10.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2019/11.webp",
        "href": "/img/gallery/festivals/festival%202019/11.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2019/12.webp",
        "href": "/img/gallery/festivals/festival%202019/12.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2019/13.webp",
        "href": "/img/gallery/festivals/festival%202019/13.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2019/14.webp",
        "href": "/img/gallery/festivals/festival%202019/14.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2019/15.webp",
        "href": "/img/gallery/festivals/festival%202019/15.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2019/16.webp",
        "href": "/img/gallery/festivals/festival%202019/16.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2019/17.webp",
        "href": "/img/gallery/festivals/festival%202019/17.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2019/18.webp",
        "href": "/img/gallery/festivals/festival%202019/18.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2019/19.webp",
        "href": "/img/gallery/festivals/festival%202019/19.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2019/20.webp",
        "href": "/img/gallery/festivals/festival%202019/20.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2019/21.webp",
        "href": "/img/gallery/festivals/festival%202019/21.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2019/22.webp",
        "href": "/img/gallery/festivals/festival%202019/22.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2019/23.webp",
        "href": "/img/gallery/festivals/festival%202019/23.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2019/24.webp",
        "href": "/img/gallery/festivals/festival%202019/24.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2019/25.webp",
        "href": "/img/gallery/festivals/festival%202019/25.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2019/26.webp",
        "href": "/img/gallery/festivals/festival%202019/26.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2019/27.webp",
        "href": "/img/gallery/festivals/festival%202019/27.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2019/28.webp",
        "href": "/img/gallery/festivals/festival%202019/28.webp",
        "layout": "gallery"
      }
    ],
  },
  aside: {
    en: [
      "[International Jury Committee I.J.C.](#ijc19)",
      "[Choir's Participations](#choirs19)",
      "[Medals](#medals19)",
      "[Gallery](#gallery19)",
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
      "[Διεθνής Κριτική Επιτροπή Δ.Ε.Χ.](#ijc19)",
      "[Συμμετοχές Χορωδιών](#choirs19)",
      "[Μετάλλια](#medals19)",
      "[Συλλογή Φωτογραφιών](#gallery19)",
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
