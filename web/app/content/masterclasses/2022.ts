import { masterclassSchema, type MasterclassInput } from "../types";
import { choir } from "../choirs";

const data: MasterclassInput = {
  slug: "2022",
  year: 2022,
  editionNumber: 5,
  // Listing/meta only -- the page itself shows the dates as printed in `content`.
  dates: {
    en: "4–6 July 2022",
    el: "4–6 Ιουλίου 2022",
  },
  poster: "/img/iccc2022.webp",
  title: {
    en: "5th Choral Conducting Workshop & Seminar",
    el: "5ο Εργαστήριο & Σεμινάριο Διεύθυνσης Χορωδίας",
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
      "The International Choral Festival of Preveza invites conductors to apply to the 5th Choral Conducting Workshop & Seminar, which will be realized from 4th to 6th July 2022 in Preveza, Greece.\n\nThis year's 40th International Choir Festival Preveza brings two novelties in addition to the concerts of the choir competition and the seminar for choir conductors. The competition for composers has recently ended, and this year the organizer is offering an exceptional opportunity also for young conductors with an International Choral Conducting Competition of Preveza. During the 4th-6th July 2022, participants of the Choral Conducting Masterclass will be able to follow the competition and gain new, important experience for working with the choir. Through discussions with jury members they will be able to upgrade their knowledge and broaden their horizons. Another novelty is the division of the Seminar into two groups. Those who want to upgrade their experience and learn about new literature and those who would like to gain the basics of conducting knowledge and test themselves with easier literature.\n\nParticipants will have the opportunity to work with top Greek Choirs and established conductors such as Gary Graden (Sweden), Theodora Pavlovitch (Bulgaria), Vytautas Miškinis (Lithuania), Javier Busto (Spain), Ambrož Čopi (Slovenia), Sofia Gioldasi (Greece), Katerina Vassilikou (Greece) and Anelia Stefanova (Greece). At the same time, participants will have the opportunity to meet many young conductors from all over the world, share experiences, make contacts and friendships with them.\n\nThe Conducting Seminar is suitable for early career conductors, conducting students with University/Conservatory training in music.\n\nThe Conducting Masterclass is suitable for advanced conducting students with University/Conservatory training in music and experienced conductors seeking to work with a high-level ensemble.",
      {
        "narrow": 10
      },
      {
        "heading": "Demonstrative Choirs",
        "level": 1,
        "align": "center"
      },
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
          "**8:00 - 9:00 a.m.** Registration, presentation of lecturers, Masterclass & Seminar program",
          "**3:00 - 4:45 p.m.** Discussion with **Vytautas Miškinis** & Basics of manual technique with **Sofia Gioldasi** Preveza.",
          "**4:45 - 5:30 p.m.** Music analysis and preparation for rehearsal"
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
          "**9:00 - 9:45 a.m.** Discussion with **Javier Busto** & Presentation of the use of body percussion in a choir with **Anelia Stefanova**.",
          "**10:00 - 11:30 a.m.** Meet the Composer (Busto, Čopi) & Voci Contra Tempo (Sofia Gioldasi, Theodora Pavlovitch)",
          "**11:45 - 01:15 p.m.** Meet the Composer (Miškinis, de Rosa) & Voci Contra Tempo (Sofia Gioldasi, Theodora Pavlovitch)",
          "**5:30 - 07:00 p.m.** Voci Contra Tempo (Busto, Miškinis) & Greek traditional music. Music analysis and preparation for rehearsal with Katerina Vassilikou"
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
          "**09:00 - 10:00 a.m.** Discussion with Gary Graden & How to establish quality sound in a Youth Choir with Katerina Vassilikou",
          "**10:00 - 12:00 p.m.** Ambitus Choir (Miškinis, Busto), Greek traditional music with Katerina Vassilikou & Music analysis, preparation for rehearsal with Gary Graden",
          "**12:00 - 02:00 p.m.** Voci Contra Tempo (Busto, Miškinis) & Ambitus Choir (Gary Graden, Katerina Vassilikou)",
          "**03:00 - 04:30 p.m.** Ambitus Choir (Miškinis, Čopi) & Voci Contra Tempo (Theodora Pavlovitch, Sofia Gioldasi)",
          "**04:45 - 06:15 p.m.** Voci Contra Tempo (Busto, Čopi) & Ambitus Choir (Gary Graden, Katerina Vassilikou)",
          "**07:00 - 08:30 p.m.** General Rehearsal for Final Concert",
          "**08:30 p.m.** Award Giving Ceremony"
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
        "heading": "Voci Contra Tempo",
        "level": 3,
        "align": "center"
      },
      {
        "list": [
          "Masterclass Repertoire",
          "Giuseppe de Rosa (1973): Crucifixus Winning composition - Category B, International Choral Composers Competition of Preveza",
          "Javier Busto (1949): Sanctus (from Missa Augusta)",
          "Ambrož Čopi (1973): Sing Joyfully Into God our Strength",
          "Vytautas Miškinis (1954): Ave Regina Coelorum"
        ],
        "align": "center"
      },
      {
        "list": [
          "Seminar Repertoire",
          "Orthodox chant: Gospodi Pomiluj",
          "Dobri Hristov (1875–1941): Tebe Poem",
          "Peter Lyondev (1936–2018), Arr.: Ergen Deda",
          "Ivan Kavaldzhiev (1891–1959), Arr.: Dilmano, Dilbero",
          "Mikis Theodorakis (1925–2021): Asma Asmaton (Iakovos Kambanellis)",
          "Mikis Theodorakis (1925–2021)/Arr. Dimitris Karvounis (1957): Margarita Margaro (Mikis Theodorakis)",
          "Mikis Theodorakis (1925–2021) /Arr. Dimitris Karvounis (1957): Agapi Mou (Giannis Theodorakis)"
        ],
        "align": "center"
      },
      {
        "heading": "Ambitus Choir",
        "level": 3,
        "align": "center"
      },
      {
        "list": [
          "Masterclass Repertoire",
          "Salvo Gangi (1974): Hodie Christus Natus Est - Winning composition - Category A, International Choral Composers Competition of Preveza",
          "Javier Busto (1949): Ave Maria",
          "Ambrož Čopi (1973): Alleluia, Laudate Dominum & Omnes Gentes",
          "Vytautas Miškinis (1954): Cantate Domino"
        ],
        "align": "center"
      },
      {
        "list": [
          "Seminar Repertoire",
          "Gioachino Rossini (1792–1868): O Salutaris Hostia",
          "Anton Bruckner (1824–1896): Locus Iste",
          "Sergej Rachmaninov (1873–1943): Bogoroditse Djevo",
          "Maurice Duruflé (1902–1986) Ubi Caritas",
          "Alexandros Ainian (1908–1983), Arr.: I Nerantzoula",
          "Giánnis Konstantinídis (1903–1984), Arr.: Se Kainouria Varka Bika",
          "Giánnis Konstantinídis (1903–1984), Arr.: To Xipnima tou Gamprou"
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
      "Το Διεθνές Χορωδιακό Φεστιβάλ της Πρέβεζας προσκαλεί διευθυντές να υποβάλλουν αίτηση για το 5ο Εργαστήριο & Σεμινάριο Διεύθυνσης Χορωδίας, το οποίο θα πραγματοποιηθεί από 4 έως 6 Ιουλίου 2022 στην Πρέβεζα, Ελλάδα.\n\nΤο φετινό 40ο Διεθνές Φεστιβάλ Χορωδιών Πρέβεζας φέρνει δύο νέα στοιχεία εκτός από τις συναυλίες του διαγωνισμού χορωδιών και του σεμιναρίου για διευθυντές χορωδιών. Ο διαγωνισμός σύνθεσης έλαβε πρόσφατα τέλος και φέτος ο διοργανωτής προσφέρει επίσης μια εξαιρετική ευκαιρία και για νέους διευθυντές με ένα Διεθνή Διαγωνισμό Διεύθυνσης Χορωδιών της Πρέβεζας. Από 4 έως 6 Ιουλίου 2022, οι συμμετέχοντες του Σεμιναρίου Διεύθυνσης Χορωδίας θα έχουν τη δυνατότητα να παρακολουθήσουν τον διαγωνισμό και να αποκτήσουν νέες, σημαντικές εμπειρίες για την εργασία με τη χορωδία. Μέσω συζητήσεων με τα μέλη της επιτροπής κριτών θα μπορέσουν να αναβαθμίσουν τις γνώσεις τους και να διευρύνουν τους ορίζοντές τους. Μία ακόμη καινοτομία είναι η διαίρεση του Σεμιναρίου σε δύο ομάδες. Αυτοί που θέλουν να αναβαθμίσουν την εμπειρία τους και αυτοί που θα ήθελαν να αποκτήσουν τις βασικές γνώσεις της διεύθυνσης, μπορούν να δοκιμάσουν τον εαυτό τους.\n\nΟι συμμετέχοντες θα έχουν τη δυνατότητα να εργαστούν με τις κορυφαίες Ελληνικές Χορωδίες και καταξιωμένους διευθυντές όπως ο Gary Graden (Σουηδία), Theodora Pavlovitch (Βουλγαρία), Vytautas Miškinis (Λιθουανία), Javier Busto (Ισπανία), Ambrož Čopi (Σλοβενία), Σοφία Γιολδάση (Ελλάδα), Κατερίνα Βασιλικού (Ελλάδα) και Anelia Stefanova (Ελλάδα). Ταυτόχρονα, οι συμμετέχοντες θα έχουν την ευκαιρία να γνωρίσουν πολλούς νέους διευθυντές από όλο τον κόσμο, να μοιραστούν εμπειρίες, να κάνουν επαφές και φιλίες μαζί τους.\n\nΤο Σεμινάριο Διεύθυνσης είναι κατάλληλο για νεαρούς διευθυντές, φοιτητές διεύθυνσης με εκπαίδευση σε Πανεπιστήμιο/Ωδείο μουσικής.\n\nΤο Masterclass είναι κατάλληλο για προχωρημένους φοιτητές διεύθυνσης με εκπαίδευση σε Πανεπιστήμιο/Ωδείο μουσικής και έμπειρους διευθυντές που αναζητούν να εργαστούν με ένα σύνολο υψηλού επιπέδου.",
      {
        "narrow": 10
      },
      {
        "heading": "Υποδειγματικές Χορωδίες",
        "level": 1,
        "align": "center"
      },
      ...choir("voci-contra-tempo", "el", {level: 3,align: "center"}),
      ...choir("ambitus-choir", "el", {level: 3,align: "center"}),
      {
        "anchor": "schedule"
      },
      {
        "heading": "Πρόγραμμα",
        "level": 2
      },
      {
        "heading": "ΔΕΥΤΕΡΑ, 4η Ιουλίου, 2022",
        "level": 4
      },
      {
        "list": [
          "**8:00 - 9:00 π.μ.** Εγγραφή, παρουσίαση διδασκόντων, πρόγραμμα Masterclass & Σεμιναρίου",
          "**3:00 - 4:45 μ.μ.** Συζήτηση με τον **Vytautas Miškinis** & Βασικές αρχές τεχνικής χειρονομίας με την **Σοφία Γιολδάση** Πρέβεζα.",
          "**4:45 - 5:30 μ.μ.** Ανάλυση μουσικής και προετοιμασία για πρόβα"
        ]
      },
      {
        "heading": "ΤΡΙΤΗ, 5η Ιουλίου, 2022",
        "level": 4
      },
      {
        "list": [
          "**9:00 - 9:45 π.μ.** Συζήτηση με τον **Javier Busto** & Παρουσίαση της χρήσης του κρουστού στο σώμα σε χορωδία με την **Anelia Stefanova**.",
          "**10:00 - 11:30 π.μ.** Γνωριμία με τον Συνθέτη (Busto, Čopi) & Voci Contra Tempo (Σοφία Γιολδάση, Theodora Pavlovitch)",
          "**11:45 - 01:15 μ.μ.** Γνωριμία με τον Συνθέτη (Miškinis, de Rosa) & Voci Contra Tempo (Σοφία Γιολδάση, Theodora Pavlovitch)",
          "**5:30 - 07:00 μ.μ.** Voci Contra Tempo (Busto, Miškinis) & Ελληνική παραδοσιακή μουσική. Ανάλυση μουσικής και προετοιμασία για πρόβα με την Κατερίνα Βασιλικού"
        ]
      },
      {
        "heading": "ΤΕΤΑΡΤΗ, 6η Ιουλίου, 2022",
        "level": 4
      },
      {
        "list": [
          "**09:00 - 10:00 π.μ.** Συζήτηση με τον Gary Graden & Πώς να δημιουργήσετε ποιότητα ήχου σε χορωδία νέων με την Κατερίνα Βασιλικού",
          "**10:00 - 12:00 μ.μ.** Ambitus Choir (Miškinis, Busto), Ελληνική παραδοσιακή μουσική με την Κατερίνα Βασιλικού & Ανάλυση μουσικής, προετοιμασία για πρόβα με τον Gary Graden",
          "**12:00 - 02:00 μ.μ.** Voci Contra Tempo (Busto, Miškinis) & Ambitus Choir (Gary Graden, Κατερίνα Βασιλικού)",
          "**03:00 - 04:30 μ.μ.** Ambitus Choir (Miškinis, Čopi) & Voci Contra Tempo (Theodora Pavlovitch, Σοφία Γιολδάση)",
          "**04:45 - 06:15 μ.μ.** Voci Contra Tempo (Busto, Čopi) & Ambitus Choir (Gary Graden, Κατερίνα Βασιλικού)",
          "**07:00 - 08:30 μ.μ.** Γενική πρόβα για την Τελική Συναυλία",
          "**08:30 μ.μ.** Τελετή Απονομής Βραβείων"
        ]
      },
      {
        "narrow": 0
      },
      {
        "narrow": 10
      },
      {
        "heading": "Ρεπερτόριο του Masterclass & Σεμιναρίου",
        "level": 3,
        "align": "center"
      },
      {
        "heading": "Voci Contra Tempo",
        "level": 3,
        "align": "center"
      },
      {
        "list": [
          "Ρεπερτόριο Masterclass",
          "Giuseppe de Rosa (1973): Crucifixus Νικητής σύνθεση - Κατηγορία Β, Διεθνής Διαγωνισμός Χορωδιακών Συνθετών Πρέβεζας",
          "Javier Busto (1949): Sanctus (από τη Missa Augusta)",
          "Ambrož Čopi (1973): Αγαλλιάσθε εις τον Θεόν την δύναμιν ημών",
          "Vytautas Miškinis (1954): Ave Regina Coelorum"
        ],
        "align": "center"
      },
      {
        "list": [
          "Ρεπερτόριο Σεμιναρίου",
          "Ορθόδοξος ψαλμός: Κύριε ελέησον",
          "Dobri Hristov (1875–1941): Tebe Poem",
          "Peter Lyondev (1936–2018), Διατ.: Ergen Deda",
          "Ivan Kavaldzhiev (1891–1959), Διατ.: Dilmano, Dilbero",
          "Μίκης Θεοδωράκης (1925–2021): Άσμα Ασμάτων (Ιάκωβος Καμπανέλλης)",
          "Μίκης Θεοδωράκης (1925–2021)/Διατ. Δημήτρης Καρβούνης (1957): Μαργαρίτα Μαργαρώ (Μίκης Θεοδωράκης)",
          "Μίκης Θεοδωράκης (1925–2021)/Διατ. Δημήτρης Καρβούνης (1957): Αγάπη Μου (Γιάννης Θεοδωράκης)"
        ],
        "align": "center"
      },
      {
        "heading": "Ambitus Choir",
        "level": 3,
        "align": "center"
      },
      {
        "list": [
          "Ρεπερτόριο Masterclass",
          "Salvo Gangi (1974): Hodie Christus Natus Est - Νικητής σύνθεση - Κατηγορία Α, Διεθνής Διαγωνισμός Χορωδιακών Συνθετών Πρέβεζας",
          "Javier Busto (1949): Ave Maria"
        ],
        "align": "center"
      },
      {
        "p": "Ambrož Čopi (1973): Alleluia, Laudate Dominum & Omnes Gentes",
        "align": "center"
      },
      {
        "p": "Vytautas Miškinis (1954): Cantate Domino",
        "align": "center"
      },
      {
        "list": [
          "Ρεπερτόριο Σεμιναρίου",
          "Gioachino Rossini (1792–1868): O Salutaris Hostia",
          "Anton Bruckner (1824–1896): Locus Iste",
          "Sergej Rachmaninov (1873–1943): Παρθένε Θεοτόκε",
          "Maurice Duruflé (1902–1986): Ubi Caritas",
          "Αλέξανδρος Αινιάν (1908–1983), Διατ.: Η Νεραντζούλα",
          "Γιάννης Κωνσταντινίδης (1903–1984), Διατ.: Σε Καινούργια Βάρκα Μπήκα",
          "Γιάννης Κωνσταντινίδης (1903–1984), Διατ.: Το Ξύπνημα του Γαμπρού"
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
          "[Awards, Plaquettes & Diplomas](#awards)"
        ]
      },
      {
        "heading": "Jury Committee",
        "level": 4
      },
      {
        "heading": "Ambrož Čopi",
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
        "heading": "Gary Graden",
        "level": 6
      },
      {
        "heading": "Vytautas Miškinis",
        "level": 6
      },
      {
        "heading": "Maria - Emma Meligopoulou",
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
          "[Υποδειγματικές Χορωδίες](#demonstrative_choirs)",
          "[Πρόγραμμα](#schedule)",
          "[Διαγωνιζόμενοι Διευθυντές](#competing)",
          "[Βραβεία, Πλακέτες & Διπλώματα](#awards)"
        ]
      },
      {
        "heading": "Επιτροπή Κριτών",
        "level": 4
      },
      {
        "heading": "Ambrož Čopi",
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
        "heading": "Gary Graden",
        "level": 6
      },
      {
        "heading": "Vytautas Miškinis",
        "level": 6
      },
      {
        "heading": "Μαρία - Έμμα Μελιγοπούλου",
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

export default masterclassSchema.parse(data);
