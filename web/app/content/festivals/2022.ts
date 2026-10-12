import { festivalSchema, type FestivalInput } from "../types";
import { person } from "../people";
import { choir } from "../choirs";

const data: FestivalInput = {
  slug: "2022",
  year: 2022,
  editionNumber: 40,
  isCurrentEdition: false,
  // Listing/meta only -- the page itself shows the dates as printed in `content`.
  dates: {
    en: "4–10 July 2022",
    el: "4–10 Ιουλίου 2022",
  },
  poster: "/img/poster-2022b.webp",
  title: {
    en: "40th International Choral Festival of Preveza",
    el: "40ο Διεθνές Χορωδιακό Φεστιβάλ Πρέβεζας",
  },
  intro: { en: [], el: [] },
  content: {
    en: [
      {
        "list": [
          "4 - 10 July 2022"
        ]
      },
      {
        "img": "/img/poster-2022b.webp"
      },
      "Mark your calendar for July 2022 to be part of the 40th International Choral Festival of Preveza. The festival will be held from 4 to 10 of July 2022 in Preveza. The International Choral Festival of Preveza counts 39 interesting and exciting years of high-quality choral music, challenged by excellent choirs which are continuously raising its standards and a great variety of intercultural experiences with participants from all over the world. The festival includes numerous concerts given at idyllic locations of the area like the seaside fortress of Preveza and the historic Ancient Auditorium of Nikopolis “Odeon”. For visiting choirs, Preveza provides an opportunity not only to perform; but also, to experience some of the world’s best choral music, soak up the atmosphere and enjoy the mingling, singing and fun, and explore the picturesque city of Preveza and its surrounds.\nThe festival will be managed by the Choral Society \"Armonia\" of Preveza, under the patronage of the city of Preveza. Choirs are eligible to join the festival as non-competitive choirs participating in all the performances of the festival.",
      {
        "wide": true
      },
      "It is universally accepted that in the last two years we are going through a health crisis, unprecedented for all of us. Major music events were postponed or sought to keep pace with other forms of events, such as online events, etc.\n\nThe Choral Society “Armonia” of Preveza with a particularly high sense of duty to protect public health, adapted the last 2 festivals accordingly, both in 2020 and 2021, maintaining on the one hand the high level of its events, and on the other hand paying attention to giving special importance to the health protocols, wanting to protect the health of the inhabitants of our area, as well as of the participating choirs. And so, we reach 2022 and our festival will celebrate 40 years of continuous supply in our city, in our country, in the global choral development.",
      {
        "anchor": "ijc22"
      },
      {
        "list": [
          "For this reason, we decided to complement it with two more events, thus completing the package of our choral events. So, this year we plan and will organize the following events within the framework of Preveza International Choral Festival:",
          "The 40th International Choir Festival of Preveza, in which all kinds of choirs can participate, without repertoire restrictions, while concerts will be given in various cultural places in the region. It is an opportunity for participants to combine the enjoyment of a beautiful artistic event, while combining their vacation in an area that Forbes, as well as other international media rank in the top ten travel destinations for leisure.",
          "The 26th International Choir Competition, which was canceled 2 years ago due to the pandemic. One of the most prestigious competitions in the world, which is famous for its reliability and validity internationally. The guarantors of this are the members of the international jury committee that make them up, musicians of world-renowned value and prestige, who, in addition to their appreciation for the level of each choir, constructively advise the choirs for their further development and advancement in the choir.",
          "The 5th Seminar for Choir Conductors, where the participants are given the opportunity to further specialize their knowledge in choral practice, gaining new knowledge and practices from renowned conductors worldwide. At the same time, they are given the opportunity to practice this new knowledge, conducting the seminar choir, which is usually among the best choirs in the world.",
          "This year for the first time we are organizing the 1st Choral Composition Competition and we invite all choral music composers from all over the world to participate. Our goal is to highlight new musical works, where the middle choir will be able to perform them. The winners, in addition to the joy of presenting their works at the festival, as well as a few other choirs at various events, will have the opportunity to publish their work in collaboration with a specific music production company, specialized in choral compositions. Also, the jury consists of the global best team of composers of choral music and choir conductors, which is a great honor for our organization.",
          "Finally, we will organize just before the festival and the seminar and the 1st Competition for Choir Directors, a competition that will enable the participants to measure their strengths in real conditions, to work with renowned choirs in the area, and, above all, to take a step towards their further development and promotion."
        ]
      },
      "From the above, it is understood the great effort that will be made this year as well. We invite you to participate in the events and we will be happy to meet you up close in our beautiful city. Finally, we remind you that our festival is not for profit, it does not claim revenue from anywhere and all its events are free for the public.\n\nWe are looking forward to hearing from you!\nGreetings to all!\nThe Organising Committee",
      {
        "heading": "International Jury Committee I.J.C.",
        "level": 2,
        "align": "center"
      },
      ...person("ambroz-copi", "en", {level: 3}),
      ...person("vytautas-miskinis", "en", {level: 3,align: "right"}),
      ...person("javier-busto", "en", {level: 3}),
      ...person("ko-matsushita", "en", {level: 3,align: "right"}),
      ...person("theodora-pavlovitch", "en", {level: 3}),
      ...person("angeliki-ploka", "en", {level: 3,align: "right"}),
      {
        "heading": "Gary Graden",
        "level": 3
      },
      {
        "img": "/img/Gary Graden.webp",
        "layout": "side"
      },
      "Gary Graden was born in the USA and studied at Clark University, the Hartt School of Music, the Aspen Summer Music Festival, and with Eric Ericson at the Royal Academy of Music in Stockholm. Gary Graden is a former member and tenor soloist with the Eric Ericson Chamber Choir, as well as the vocal ensemble Lamentabile Consort.\n\nHe is presently Director of Music in the Stockholm Cathedral (Storkyrkan) and S:t Jacob´s church. He has also been on the faculty of Stockholm´s Musikgymnasium where he founded and conducted the Stockholm Musikgymnasium´s Chamber Choir. With this choir and the S:t Jacobs Chamber Choir he has won grand prizes and first prizes in several of Europe´s most prestigious competitions, including the European Grand Prize.\n\nHe has also participated in a wide array of national and international festivals including the Tolosa Festival in Spain, the IFCM World Symposia in Minneapolis and Kyoto, Sagra Musicale Umbra in Italy, Debrecen Festival in Hungary, Koorbiennale in Holland, the ACDA National Convention in USA, and is currently artistic director of the international choral festival La Fabbrica del Canto in Legnano.\n\nGraden has commissioned and premiered more than 90 works by such composers as Sven-David Sandström, Anders Hillborg, Nana Forte, Thomas Jennefelt, Steve Dobrogosz, Bo Hansson, Agneta Sköld, Gabriel Jackson, Anders Paulsson, Javier Busto, Vytautas Miškinis, Urmas Sisask, Georg Riedel, Carl Unander-Scharin, Stephen Leek, Damijan Močnik, Corrado Margutti, Giovanni Bonato, and Michael Waldenby.\n\nHe has conducted several orchestras including the Uppsala Chamber Orchestra, the Stockholm Royal Opera Orchestra, Stockholm Rebaroque, the Tallinn Chamber Orchestra, Ensemble Philidor, France, and Camerata Strumentale Città di Prato as well as Orchestra da Camera Perugia in Italy. Above and beyond his specialisation in the performance of contemporary music, he has performed such larger works as Handel’s Messiah, Mozart’s Requiem and Mass in c-minor, Bach’s passions and Mass in b-minor, as well as the Requiems of Brahms, Duruflé, Fauré and Michael Haydn.",
      {
        "heading": "Dr. Maria - Emma Meligopoulou",
        "level": 3,
        "align": "right"
      },
      "Dr Maria Emma Meligopoulou, LB, MusM, PhD, PostDoc, is Assistant Professor of Choral Conducting in Macedonia University of Thessaloniki School of Music Science & Art (Greece), where she teaches choral conducting techniques and directs the University choirs. She also teaches in the master’s programs of Macedonia and Ionian Universities and is visiting Professor at Aegean University.\n\nShe holds a Master Degree in Choral Conducting from Boston University CFA and a PhD and Post-Doctoral in Choral Conducting and Choral Pedagogy from Ionian University SFA. She also holds a Bachelor in Law, from Aristotle University of Thessaloniki. In 1992 she founded and directs the SS. Cyril & Methodios Choir of Thessaloniki, which today has over 250 singers at the ages of 6 – 25 years and is regarded to be the largest choral association of Northern Greece for Children and Youth.\n\nShe has performed numerous concerts in Greece, Europe, Asia, Africa and America (USA, Canada) and is recipient of many international distinctions as choral conductor.\nDr. Meligopoulou is International lecturer on demand, adjudicator and guest conductor in Greek and International festivals (China, USA, Canada, Italy, Germany, Turkey, South Africa etc.). She is also author of the textbooks Introduction to the Art of Choral Praxis (2011 & 2013 3rd edition), and “Choral Method for Young Singers” and has also published the score editions 42 Choral Works by Greek Composers for Equal Voices (2014), both available by Nakas-Papagregoriou Editions, Athens.",
      {
        "img": "/img/Dr Maria Emma Meligopoulou.webp",
        "layout": "side"
      },
      {
        "heading": "Rosie Mastrosavva",
        "level": 3
      },
      {
        "img": "/img/Rosie Mastrosavva.webp",
        "layout": "side"
      },
      "She was born in Rhodes. She studied piano, monody and music theory at the Greek National Conservatoire of Athens. She attended orchestra conducting lessons under A. Kontogeorgiou and M. Logiadis. She continued her studies at the Hochschule für Musik und Theater in Munich, with specialization in orchestra conducting and graduated with honors. She has attended masterclasses under renowned conductors Eric Ericson, Helmuth Rilling, Er. Ortner and Frieder Bernius. She has conducted choirs in Germany and Greece such as: Melismachor, Vocal Kreis Cantabile, Singtonics, Amasingers, Mixed Chorus Con Anima, the Hellenic Broadcasting Corporation (ERT) Chorus, Children’s Chorus of the Third Program (ERA), the Athens Municipality Children’s Choir (gold medal - Choir Olympics, Graz 2008).\n\nShe taught at the Faculty of Primary Education of the Aegean University in Rhodes. In 2008 she founded and has since directed the Children’s Choir Rosarte, which encompasses about 260 members aged 5 to 20 years old. The Rosarte choir has performed in chorus festivals, concerts at Herodeion, the Athens Concert Hall, the Onassis Cultural Center, the “Demetria” Festival and more. The choir has collaborated with renowned conductors, such as Philip Ogden, Lucas Karytinos, Alkis Baltas, Myron Michailidis, Vyron Fidetzis and others. It has also worked with the orchestras and choirs of the GNO, ERT, the City of Athens, the Athens State Orchestra and the Camerata Orchestra, while it has also taken part in documentaries, television shows and recordings.",
      {
        "anchor": "choirs22"
      },
      "She worked with the GNO as director of the Rosarte choir in the productions of Rustic chivalry [Cavalleria rusticana] and Pagliacci (Herodeion, Athens Festival, 2011), Tannhäuser (Athens Concert Hall, 2008-09), Carmen (Olympia Theater, 2010, 2011), Tosca (2011, 2012), as well as in the presentation of Nikos Xanthoulis’ children’s opera The Magic Violin (2013).",
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
        "anchor": "medals22"
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
        "heading": "Category C (Children’s Choirs)",
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
      }
    ],
    el: [
      {
        "list": [
          "4 - 10 Ιουλίου 2022"
        ]
      },
      {
        "img": "/img/poster-2022b.webp"
      },
      "Σημειώστε στο ημερολόγιό σας τον Ιούλιο του 2022 για να συμμετάσχετε στο 40ο Διεθνές Χορωδιακό Φεστιβάλ της Πρέβεζας. Το φεστιβάλ θα πραγματοποιηθεί από τις 4 έως τις 10 Ιουλίου 2022 στην Πρέβεζα. Το Διεθνές Χορωδιακό Φεστιβάλ της Πρέβεζας έχει 39 ενδιαφέροντα και συναρπαστικά χρόνια υψηλής ποιότητας χορωδιακής μουσικής, με προκλήσεις από εξαιρετικές χορωδίες που συνεχώς ανεβάζουν τον πήχη και από μια μεγάλη ποικιλία διαπολιτισμικών εμπειριών με συμμετέχοντες από όλο τον κόσμο. Το φεστιβάλ περιλαμβάνει πολλές συναυλίες που δίνονται σε ειδυλλιακά μέρη της περιοχής όπως το παράλιο φρούριο της Πρέβεζας και το ιστορικό \"Ωδείο\", Αρχαίο Αμφιθέατρο της Νικόπολης. Για τις επισκέπτριες χορωδίες, η Πρέβεζα προσφέρει την ευκαιρία όχι μόνο να εμφανιστούν, αλλά και να βιώσουν μερικές από τις καλύτερες χορωδιακές μουσικές του κόσμου, να απολαύσουν τις συναυλίες, το τραγούδι και τη διασκέδαση και να εξερευνήσουν την γραφική πόλη της Πρέβεζας και των γύρω περιοχών. Το φεστιβάλ θα διοργανωθεί από τη Χορωδία \"Αρμονία\" Πρέβεζας, υπό την αιγίδα του δήμου Πρέβεζας. Οι χορωδίες δικαιούνται να συμμετέχουν στο φεστιβάλ ως μη διαγωνιζόμενες χορωδίες, όπου θα συμμετέχουν σε όλες τις εκδηλώσεις του φεστιβάλ.",
      {
        "wide": true
      },
      "Είναι καθολικά αποδεκτό ότι τα τελευταία δύο χρόνια βιώνουμε μια υγειονομική κρίση, η οποία έχει σημαντικές επιπτώσεις χωρίς προηγούμενο για όλους μας. Σημαντικά μουσικά γεγονότα αναβλήθηκαν ή προσπάθησαν να προχωρήσουν σε άλλες μορφές μετάδοσης, όπως η διαδικτυακή διοργάνωση γεγονότων, κ.λπ.\n\nΟ Χορωδιακός Σύλλογος \"Αρμονία\" Πρέβεζας, με ιδιαίτερα υψηλό αίσθημα καθήκοντος να προστατεύσει τη δημόσια υγεία, προσάρμοσε τα δύο τελευταία φεστιβάλ ανάλογα, τόσο το 2020 όσο και το 2021, διατηρώντας αφενός το υψηλό επίπεδο των εκδηλώσεών του, και αφετέρου δίνοντας ιδιαίτερη σημασία στη διατήρηση των πρωτοκόλλων υγείας, θέλοντας να προστατεύσει την υγεία των κατοίκων της περιοχής μας, καθώς και των συμμετεχόντων χορωδιών. Και έτσι, φτάνουμε το 2022 και το φεστιβάλ μας θα γιορτάσει τα 40 χρόνια συνεχούς προσφοράς στην πόλη μας, στη χώρα μας, στην παγκόσμια χορωδιακή ανάπτυξη.",
      {
        "anchor": "ijc22"
      },
      {
        "list": [
          "Για τον λόγο αυτό, αποφασίσαμε να οργανώσουμε δύο επιπλέον εκδηλώσεις, συμπληρώνοντας το πακέτο των χορωδιακών μας εκδηλώσεων. Έτσι, φέτος σχεδιάζουμε και θα οργανώσουμε τις ακόλουθες εκδηλώσεις στο πλαίσιο του Διεθνούς Χορωδιακού Φεστιβάλ Πρέβεζας:",
          "Το 40ο Διεθνές Φεστιβάλ Χορωδιών της Πρέβεζας, στο οποίο μπορούν να συμμετέχουν όλοι οι τύποι χορωδιών, χωρίς περιορισμούς ρεπερτορίου, ενώ οι συναυλίες θα δίνονται σε διάφορα πολιτιστικά μέρη της περιοχής. Είναι μια ευκαιρία για τους συμμετέχοντες να συνδυάσουν την απόλαυση μιας όμορφης καλλιτεχνικής εκδήλωσης με τις διακοπές τους σε μια περιοχή που το Forbes, καθώς και άλλα διεθνή μέσα, κατατάσσουν στους δέκα κορυφαίους ταξιδιωτικούς προορισμούς αναψυχής.",
          "Ο 26ος Διεθνής Διαγωνισμός Χορωδιών, ο οποίος ακυρώθηκε πριν από 2 χρόνια λόγω της πανδημίας. Ένας από τους πιο διακεκριμένους διαγωνισμούς στον κόσμο, που είναι φημισμένος για την αξιοπιστία και την ισχύ του διεθνώς. Οι εγγυητές αυτού είναι τα μέλη της διεθνούς επιτροπής κριτών που το συνθέτουν, μουσικοί παγκοσμίου φήμης και κύρους, οι οποίοι, εκτός από την εκτίμησή τους για το επίπεδο κάθε χορωδίας, συμβουλεύουν εποικοδομητικά τις χορωδίες για την περαιτέρω ανάπτυξη και προαγωγή τους στο χορωδιακό.",
          "Το 5ο Σεμινάριο για Διευθυντές Χορωδιών, όπου οι συμμετέχοντες έχουν τη δυνατότητα να εξειδικεύσουν περαιτέρω τις γνώσεις τους στη χορωδιακή πράξη, αποκτώντας νέες γνώσεις και πρακτικές από διάσημους διευθυντές χορωδιών σε όλο τον κόσμο. Ταυτόχρονα, τους δίνεται η ευκαιρία να εφαρμόσουν αυτές τις νέες γνώσεις, διευθύνοντας τη χορωδία του σεμιναρίου, η οποία συνήθως είναι ανάμεσα στις καλύτερες χορωδίες του κόσμου.",
          "Φέτος για πρώτη φορά οργανώνουμε τον 1ο Διαγωνισμό Χορωδιακής Σύνθεσης και προσκαλούμε όλους τους συνθέτες χορωδιακής μουσικής από όλο τον κόσμο να συμμετάσχουν. Ο στόχος μας είναι να αναδείξουμε νέα μουσικά έργα, όπου η μέση χορωδία θα μπορεί να τα εκτελέσει. Οι νικητές, εκτός από τη χαρά της παρουσίασης των έργων τους στο φεστιβάλ, καθώς και μερικών άλλων χορωδιών σε διάφορα γεγονότα, θα έχουν τη δυνατότητα να δημοσιεύσουν το έργο τους σε συνεργασία με μια συγκεκριμένη εταιρεία παραγωγής μουσικής, εξειδικευμένη σε χορωδιακές συνθέσεις. Επίσης, η κριτική επιτροπή αποτελείται από παγκοσμίου φήμης ομάδα συνθετών χορωδιακής μουσικής και διευθυντών χορωδιών, πράγμα που είναι μεγάλη τιμή για τον οργανισμό μας.",
          "Τέλος, θα οργανώσουμε λίγο πριν από το φεστιβάλ και το σεμινάριο και τον 1ο Διαγωνισμό για Διευθυντές Χορωδιών, ένα διαγωνισμό που θα επιτρέψει στους συμμετέχοντες να μετρήσουν τις δυνάμεις τους σε πραγματικές συνθήκες, να εργαστούν με διάσημες χορωδίες στην περιοχή και, πάνω απ' όλα, να κάνουν ένα βήμα προς την περαιτέρω ανάπτυξη και προώθησή τους."
        ]
      },
      "Από τα παραπάνω, κατανοούμε τη μεγάλη προσπάθεια που θα γίνει και φέτος. Σας προσκαλούμε να συμμετάσχετε στα γεγονότα και θα χαρούμε να σας γνωρίσουμε από κοντά στην όμορφη πόλη μας. Τέλος, σας υπενθυμίζουμε ότι το φεστιβάλ μας δεν είναι για κέρδος, δεν διεκδικεί έσοδα από πουθενά και όλες οι εκδηλώσεις του είναι δωρεάν για το κοινό.\n\nΑνυπομονούμε να ακούσουμε νέα από εσάς!\nΧαιρετισμούς σε όλους!\nΗ Οργανωτική Επιτροπή",
      {
        "heading": "Διεθνής Κριτική Επιτροπή I.J.C.",
        "level": 2,
        "align": "center"
      },
      ...person("ambroz-copi", "el", {level: 3}),
      ...person("vytautas-miskinis", "el", {level: 3,align: "right"}),
      ...person("javier-busto", "el", {level: 3}),
      ...person("ko-matsushita", "el", {level: 3,align: "right"}),
      ...person("theodora-pavlovitch", "el", {level: 3}),
      ...person("angeliki-ploka", "el", {level: 3,align: "right"}),
      {
        "heading": "Gary Graden",
        "level": 3
      },
      {
        "img": "/img/Gary Graden.webp",
        "layout": "side"
      },
      "Ο Gary Graden γεννήθηκε στις ΗΠΑ και σπούδασε στο Πανεπιστήμιο Clark, το Σχολείο Μουσικής του Hartt, έλαβε μέρος στο Φεστιβάλ Μουσικής του Aspen και στη Βασιλική Ακαδημία Μουσικής της Στοκχόλμης με τον Eric Ericson. Ο Gary Graden είναι πρώην μέλος και τενόρος σολίστ της Χορωδίας Eric Ericson Chamber, καθώς και του φωνητικού συνόλου Lamentabile Consort.\n\nΑυτή τη στιγμή είναι Διευθυντής Μουσικής στον Καθεδρικό Ναό της Στοκχόλμης (Storkyrkan) και στην εκκλησία St Jacob's. Έχει επίσης διδάξει στο Μουσικό Γυμνάσιο της Στοκχόλμης όπου ίδρυσε και διηύθυνε τη Χορωδία του Μουσικού Γυμνασίου της Στοκχόλμης. Με αυτή τη χορωδία και τη Χορωδία St Jacobs Chamber έχει κερδίσει μεγάλα βραβεία και πρώτα βραβεία σε αρκετούς από τους πιο διακεκριμένους διαγωνισμούς στην Ευρώπη, συμπεριλαμβανομένου του Ευρωπαϊκού Μεγάλου Βραβείου.\n\nΈχει επίσης συμμετάσχει σε μια ευρεία γκάμα εθνικών και διεθνών φεστιβάλ, συμπεριλαμβανομένου του Φεστιβάλ Tolosa στην Ισπανία, των IFCM World Symposia στη Μινεάπολη και το Κιότο, του Sagra Musicale Umbra στην Ιταλία, του Φεστιβάλ Debrecen στην Ουγγαρία, του Koorbiennale στην Ολλανδία, του ACDA National Convention στις ΗΠΑ, και είναι επί του παρόντος καλλιτεχνικός διευθυντής του διεθνούς χορωδιακού φεστιβάλ La Fabbrica del Canto στο Legnano.\n\nΟ Graden έχει παραγγείλει και παρουσιάσει σε πρώτη εκτέλεση περισσότερα από 90 έργα από συνθέτες όπως οι Sven-David Sandström, Anders Hillborg, Nana Forte, Thomas Jennefelt, Steve Dobrogosz, Bo Hansson, Agneta Sköld, Gabriel Jackson, Anders Paulsson, Javier Busto, Vytautas Miškinis, Urmas Sisask, Georg Riedel, Carl Unander-Scharin, Stephen Leek, Damijan Močnik, Corrado Margutti, Giovanni Bonato και Michael Waldenby.\n\nΈχει διευθύνει αρκετές ορχήστρες, συμπεριλαμβανομένης της Uppsala Chamber Orchestra, της Stockholm Royal Opera Orchestra, της Stockholm Rebaroque, της Tallinn Chamber Orchestra, της Ensemble Philidor στη Γαλλία και της Camerata Strumentale Città di Prato, καθώς και της Orchestra da Camera Perugia στην Ιταλία. Εκτός από την εξειδίκευσή του στην εκτέλεση σύγχρονης μουσικής, έχει εκτελέσει μεγαλύτερα έργα όπως το Messiah του Handel, το Requiem και Mass in c-minor του Mozart, τα Πάθη του Bach και το Mass in b-minor, καθώς και τα Requiems των Brahms, Duruflé, Fauré και Michael Haydn.",
      {
        "heading": "Δρ. Μαρία - Έμμα Μελιγοπούλου",
        "level": 3,
        "align": "right"
      },
      "Η Δρ. Μαρία Έμμα Μελιγοπούλου, (LB, MusM, PhD, PostDoc) είναι Αναπληρώτρια Καθηγήτρια Χορωδιακής Διεύθυνσης στο Πανεπιστήμιο Μακεδονίας, Σχολή Μουσικής Επιστήμης & Τεχνών (Ελλάδα), όπου διδάσκει τεχνικές διεύθυνσης χορωδίας και διευθύνει τις χορωδίες του Πανεπιστημίου. Διδάσκει επίσης στα μεταπτυχιακά προγράμματα των Πανεπιστημίων Μακεδονίας και Ιονίου και είναι καθηγήτρια στο Πανεπιστήμιο Αιγαίου.\n\nΈχει διδακτορικό δίπλωμα και μεταδιδακτορικές σπουδές στην Χορωδιακή Διεύθυνση και Συστηματική Μουσικολογία από το Πανεπιστήμιο Ιονίου και μεταπτυχιακό στη Χορωδιακή Διεύθυνση από το Κολλέγιο CFA του Πανεπιστημίου Boston και ένα πτυχίο στην νομική από το Αριστοτέλειο Πανεπιστήμιο Θεσσαλονίκης. Το 1992 ίδρυσε και διευθύνει την Χορωδία Αγίων Κυρίλλου & Μεθοδίου Θεσσαλονίκης, η οποία σήμερα αριθμεί πάνω από 250 χορωδούς στις ηλικίες 6-25 ετών και θεωρείται η μεγαλύτερη χορωδιακή ενότητα της Βόρειας Ελλάδας για Παιδιά και Νέους.\n\nΈχει δώσει πολλά κονσέρτα στην Ελλάδα, την Ευρώπη, την Ασία, την Αφρική και την Αμερική (ΗΠΑ, Καναδάς) και έχει λάβει πολλές διεθνείς διακρίσεις ως χορωδιακή διευθύντρια.\nΗ Δρ. Μελιγοπούλου είναι κριτής και επισκέπτρια διευθύντρια σε Ελληνικά και Διεθνή φεστιβάλ (Κίνα, ΗΠΑ, Καναδάς, Ιταλία, Γερμανία, Τουρκία, Νότια Αφρική κ.λπ.). Είναι επίσης συγγραφέας των εγχειριδίων Εισαγωγή στην Τέχνη της Χορωδιακής Πράξης (2011 & 2013 3η έκδοση) και \"Χορωδιακή Μέθοδος για Νέους Τραγουδιστές\" και έχει επίσης δημοσιεύσει εκδόσεις παρτιτούρας 42 Χορωδιακών Έργων Ελλήνων Συνθετών για Ισόφωνα (2014), και τα δύο διαθέσιμα από τις Εκδόσεις Νάκας-Παπαγρηγορίου, Αθήνα.",
      {
        "img": "/img/Dr Maria Emma Meligopoulou.webp",
        "layout": "side"
      },
      {
        "heading": "Ρόζι Μαστροσάββα",
        "level": 3
      },
      {
        "img": "/img/Rosie Mastrosavva.webp",
        "layout": "side"
      },
      "Γεννήθηκε στη Ρόδο. Σπούδασε πιάνο, μονωδία και μουσική θεωρία στο Εθνικό Ωδείο της Αθήνας. Παρακολούθησε μαθήματα διεύθυνσης ορχήστρας υπό τους Α. Κοντογεωργίου και Μ. Λογιάδη. Συνέχισε τις σπουδές της στη Hochschule für Musik und Theater του Μονάχου, με ειδίκευση στη διεύθυνση ορχήστρας όπου αποφοίτησε με επιτυχία. Παρακολούθησε μαθήματα με διάσημους διευθυντές όπως οι Eric Ericson, Helmuth Rilling, Er. Ortner και Frieder Bernius. Έχει διευθύνει χορωδίες στη Γερμανία και την Ελλάδα, όπως η Melismachor, η Vocal Kreis Cantabile, η Singtonics, η Amasingers, η Χορωδία Mixed Con Anima, η Χορωδία της ΕΡΤ, το Παιδικό Χορωδιακό του Τρίτου Προγράμματος (ΕΡΑ), το Παιδικό Χορωδιακό του Δήμου Αθηναίων (χρυσό μετάλλιο - Ολυμπιάδα Χορωδιών, Γκρατς 2008).\n\nΔίδαξε στη Σχολή Πρωτοβάθμιας Εκπαίδευσης του Πανεπιστημίου Αιγαίου στη Ρόδο. Το 2008 ίδρυσε και από τότε διευθύνει τη Χορωδία Παιδιών Rosarte, που περιλαμβάνει περίπου 260 μέλη ηλικίας 5 έως 20 ετών. Η χορωδία Rosarte έχει εμφανιστεί σε φεστιβάλ χορωδιών, συναυλίες στο Ηρώδειο, στο Μέγαρο Μουσικής Αθηνών, στο Πολιτιστικό Κέντρο Ωνάση, στο Φεστιβάλ \"Δημήτρια\" και άλλα. Η χορωδία έχει συνεργαστεί με διάσημους διευθυντές, όπως οι Philip Ogden, Λουκάς Καρυτινός, Άλκης Μπαλτάς, Μύρων Μιχαηλίδης, Βύρων Φιδετζής και άλλοι. Έχει επίσης συνεργαστεί με τις ορχήστρες και χορωδίες της Εθνικής Λυρικής Σκηνής, της ΕΡΤ, του Δήμου Αθηναίων, της Ορχήστρας της Αθήνας και της Ορχήστρας Camerata, ενώ έχει συμμετάσχει σε ντοκιμαντέρ, τηλεοπτικές εκπομπές και ηχογραφήσεις.",
      {
        "anchor": "choirs22"
      },
      "Συνεργάστηκε με την Εθνική Λυρική Σκηνή ως διευθύντρια της χορωδίας Rosarte στις παραγωγές της Ρουστικής Καβαλλαρίας και του Pagliacci (Ηρώδειο, Φεστιβάλ Αθηνών, 2011), του Tannhäuser (Μέγαρο Μουσικής Αθηνών, 2008-09), της Carmen (Θέατρο Ολυμπία, 2010, 2011), της Tosca (2011, 2012), καθώς και στην παρουσίαση της παιδικής όπερας του Νίκου Ξανθούλη Το Μαγικό Βιολί (2013).",
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
        "heading": "Εκκλησιαστική Χορωδία του Μαθήματος Εκκλησιαστικής Μουσικής και Ψαλμωδίας της Ακαδημίας Μουσικής του Πανεπιστημίου, Ανατολικό Σαράγεβο, Βοσνία & Ερζεγοβίνη",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/saragevo.webp"
      },
      "Η Εκκλησιαστική Χορωδία του Μαθήματος Εκκλησιαστικής Μουσικής και Ψαλμωδίας στην Ακαδημία Μουσικής, Πανεπιστήμιο του Ανατολικού Σαράγεβο, ιδρύθηκε το 2001. Έχει λάβει μέρος σε υπηρεσίες σε πολλές εκκλησίες και μοναστήρια στην πατρίδα της και στο εξωτερικό, και επίσης έχει εμφανιστεί σε μουσικά φεστιβάλ και συναυλίες σε Ιταλία, Ρωσία, Γερμανία, Σλοβακία, Σουηδία, Δανία, Πολωνία, Σλοβενία, Μαυροβούνιο, Σερβία, Κροατία, κ.λπ. Το σύνολο έχει νικήσει πολλούς διεθνείς διαγωνισμούς χορωδιών, όπως της Helsingborg, Σουηδία (2004), της Ρώμης, Ιταλία (2005), της Μόσχας, Ρωσία (2006), της Νις, Σερβία (2004, 2010, 2016 και 2018), κ.λπ. Η τελευταία επιτυχία τους, ωστόσο, ήταν το Μεγάλο βραβείο στο Διεθνές Χορωδιακό Φεστιβάλ της Νις, Σερβία, το 2018. Το σύνολο έχει ηχογραφήσει 5 CD και έχει ηχογραφηθεί για ντοκιμαντέρ, συναυλίες και εκπομπές στο ραδιόφωνο και την τηλεόραση. Το ρεπερτόριο του είναι ποικίλο και αποτελείται από Ορθόδοξη πνευματική μουσική και κοσμική χορωδιακή μουσική, κυρίως έργα Σέρβων συνθετών, συμπεριλαμβανομένων των πρεμιέρων εκτελέσεων συνθέσεων, από τις οποίες κάποιες έχουν αφιερωθεί σε αυτό το σύνολο και τον διευθυντή του. Από την ίδρυσή του, η χορωδία έχει διευθυνθεί από τον καθηγητή **Rade Radović**.",
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
        "anchor": "medals22"
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
          "Χορωδία Δωματίου της Ακαδημίας Μουσικής του Πανεπιστημίου της Ανατολικής Σαράγεβο, Ανατολική Σαράγεβο, Βοσνία & Ερζεγοβίνη Διευθυντής: Rade Radović\n91.00 Βαθμοί\nΧρυσό Μετάλλιο, 1ο βραβείο και χρηματική επιβράβευση 500€",
          "Μικτή Χορωδία “Crescendo”, Σκόφια Λόκα, Σλοβενία\nΔιευθυντής: Žiga Kert\n90.50 Βαθμοί\nΧρυσό Μετάλλιο",
          "Χορωδία Charité, Βερολίνο, Γερμανία\nΔιευθυντής: Adrian Emans\n86.50 Βαθμοί\nΑσημένιο Μετάλλιο",
          "Μικτή Χορωδία “Νίκος Αστρινίδης”, Θεσσαλονίκη, Ελλάδα\nΔιευθύντρια: Βασιλική Κατσούκα\nΠιστοποίηση Παρακολούθησης"
        ],
        "align": "center"
      },
      {
        "heading": "Κατηγορία Γ (Χορωδίες Παιδιών)",
        "level": 4,
        "align": "center"
      },
      {
        "list": [
          "Παιδική Χορωδία “Cantanti”, Τιμισοάρα, Ρουμανία\nΔιευθύντρια: Maria Gyuris\n90.63 Βαθμοί\nΧρυσό Μετάλλιο, 1ο βραβείο και χρηματική επιβράβευση 400€",
          "Παιδική Χορωδία του Μουσικού Σχολείου Yamuger (YMSCC), Rawamangun, Ανατολική Τζακάρτα, Ινδονησία\nΔιευθύντρια: Delima Simamora\n83.00 Βαθμοί\nΑσημένιο Μετάλλιο Ισόπαλο",
          "Χορωδία Pueri et Puellae Cantores Plocenses, Πλοκ, Πολωνία\nΔιευθύντρια: Anna Bramska\n83.00 Βαθμοί\nΑσημένιο Μετάλλιο Ισόπαλο"
        ],
        "align": "center"
      },
      {
        "heading": "Κατηγορία Δ (Χορωδίες Δωματίου / Φωνητικά Σύνολα)",
        "level": 4,
        "align": "center"
      },
      {
        "list": [
          "Χορωδία Δωματίου της Παιδαγωγικής Σχολής και Καλών Τεχνών του Πανεπιστημίου “Adam Mickiewicz” της Πόζναν στο Κάλις, Πολωνία (Δ1) Διευθύντρια: Beata Szymańska\n90.00 Βαθμοί\nΧρυσό Μετάλλιο, 1ο βραβείο και χρηματική επιβράβευση 300€",
          "Μικτή Χορωδία SPD \"Jedinstvo\", Μπάνια Λούκα, Βοσνία & Ερζεγοβίνη (Δ1)\nΔιευθυντής: Nemanja Savić\n83.75 Βαθμοί\nΑσημένιο Μετάλλιο",
          "Φωνητικό Σύνολο “Solartissimo” από το Σύγχρονο Ωδείο της Λαρίσης, Λάρισα, Ελλάδα (Δ1)\nΔιευθυντής: Νίκος Στ. Ευθυμιάδης\n81.00 Βαθμοί\nΑσημένιο Μετάλλιο",
          "Ανδρική χορωδία NAPEV, Μπατούιε, Σλοβενία (Δ2)\nΔιευθυντής: Luka Vetrih\n80,00 Βαθμοί\nΑσημένιο Μετάλλιο",
          "“Χορωδία Iglovia”, Σπίσκα Νόβα Βες, Σλοβακία (Δ1)\nΔιευθύντρια: Marta Nováková\n71.75 Βαθμοί\nΧάλκινο Μετάλλιο"
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
          "Χορωδία \"Vadim Serebrovsky\" από το Ουράλιο Ομοσπονδιακό Πανεπιστήμιο, Εκατερίνμπουργκ, Ρωσία\nΔιευθύντρια: Julia Polyanovskaya\n81.75 Βαθμοί\nΑσημένιο Μετάλλιο"
        ],
        "align": "center"
      },
      {
        "heading": "Κατηγορία ΣΤ (Πνευματικές, Gospel, Jazz, Pop Χορωδίες, Pop Σύνολα, Λαϊκές παραδόσεις, Βυζαντινός ψαλμός)",
        "level": 4,
        "align": "center"
      },
      {
        "list": [
          "Χορωδία Pueri et Puellae Cantores Plocenses, Πλοκ, Πολωνία\nΔιευθύντρια: Anna Bramska\n90.25 Βαθμοί\nΧρυσό Μετάλλιο, 1ο βραβείο και χρηματική επιβράβευση 400€",
          "Φωνητικό Σύνολο “Solartissimo” από το Σύγχρονο Ωδείο της Λαρίσης, Λάρισα, Ελλάδα\nΔιευθυντής: Νίκος Στ. Ευθυμιάδης\n87.50 Βαθμοί\nΑσημένιο Μετάλλιο",
          "Μικτή Χορωδία SPD \"Jedinstvo\", Μπάνια Λούκα, Βοσνία & Ερζεγοβίνη\nΔιευθυντής: Nemanja Savić\n86.75 Βαθμοί\nΑσημένιο Μετάλλιο",
          "Χορωδία \"Vadim Serebrovsky\" από το Ουράλιο Ομοσπονδιακό Πανεπιστήμιο, Εκατερίνμπουργκ, Ρωσία\nΔιευθύντρια: Julia Polyanovskaya\n83.75 Βαθμοί\nΑσημένιο Μετάλλιο",
          "Ακαδημαϊκή Χορωδία του Πανεπιστημίου Τεχνολογίας Rzeszówski, Ρζεσούβ, Πολωνία\nΔιευθύντρια: Lidia Chalińska\nΠιστοποίηση Παρακολούθησης"
        ],
        "align": "center"
      },
      {
        "heading": "Κατηγορία Ζ (Ελεύθερο πρόγραμμα αυθεντικής χορωδιακής μουσικής)",
        "level": 4,
        "align": "center"
      },
      {
        "list": [
          "Μικτή Χορωδία “Crescendo”, Σκόφια Λόκα, Σλοβενία\nΔιευθυντής: Žiga Kert\n91.50 Βαθμοί\nΧρυσό Μετάλλιο, 1ο βραβείο και χρηματική επιβράβευση 400€",
          "Χορωδία Δωματίου της Ακαδημίας Μουσικής του Πανεπιστημίου της Ανατολικής Σαράγεβο, Ανατολική Σαράγεβο, Βοσνία & Ερζεγοβίνη\nΔιευθυντής: Rade Radović\n90.75 Βαθμοί\nΧρυσό Μετάλλιο",
          "Χορωδία Charité, Βερολίνο, Γερμανία\nΔιευθυντής: Adrian Emans\n90.00 Βαθμοί\nΧρυσό Μετάλλιο",
          "Χορωδία Παιδιών του Μουσικού Σχολείου Yamuger (YMSCC), Rawamangun, Ανατολική Τζακάρτα, Ινδονησία\nΔιευθύντρια: Delima Simamora\n83.00 Βαθμοί\nΑσημένιο Μετάλλιο",
          "Πολυφωνική Χορωδία της Πάτρας – Χορωδία Νέων, Πάτρα, Ελλάδα\nΔιευθύντρια: Δήμητρα Πίτσου – Διαμαντοπούλου\n80.00 Βαθμοί\nΑσημένιο Μετάλλιο",
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
          "Για την καλύτερη εκτέλεση Ορθόδοξης Μουσικής απονέμεται στη Χορωδία Δωματίου της Ακαδημίας Μουσικής του Πανεπιστημίου της Ανατολικής Σαράγεβο, Ανατολική Σαράγεβο, Βοσνία & Ερζεγοβίνη, Διευθυντής: Rade Radović, για την εκτέλεση του “Pričastno”, από τον Marko Tajčević (1900 – 1984).",
          "Για την καλύτερη σκηνική εκτέλεση απονέμεται στη Χορωδία Παιδιών του Μουσικού Σχολείου Yamuger (YMSCC), Rawamangun, Ανατολική Τζακάρτα, Ινδονησία, Διευθύντρια: Delima Simamora."
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
          "[International Jury Committee I.J.C.](#ijc22)",
          "[Choirs](#choirs22)",
          "[Medals](#medals22)"
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
          "[Διεθνές Κριτική Επιτροπή I.J.C.](#ijc22)",
          "[Χορωδίες](#choirs22)",
          "[Μετάλλια](#medals22)"
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
