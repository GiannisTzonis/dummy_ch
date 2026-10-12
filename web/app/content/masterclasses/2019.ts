import { masterclassSchema, type MasterclassInput } from "../types";
import { person } from "../people";

const data: MasterclassInput = {
  slug: "2019",
  year: 2019,
  editionNumber: 3,
  // Listing/meta only -- the page itself shows the dates as printed in `content`.
  dates: {
    en: "2–4 July 2019",
    el: "2–4 Ιουλίου 2019",
  },
  poster: "/img/poster-2019.webp",
  title: {
    en: "3rd Choral Conducting Workshop & Seminar",
    el: "3ο Εργαστήριο & Σεμινάριο Διεύθυνσης Χορωδίας",
  },
  intro: { en: [], el: [] },
  content: {
    en: [
      {
        "list": [
          "2 - 4 July 2019"
        ]
      },
      {
        "img": "/img/poster-2019.webp"
      },
      {
        "wide": true
      },
      {
        "heading": "In the frame of the 37th International Choral Festival of Preveza a seminar for choral conductors will be held in Preveza from 2nd to 4th July 2019",
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
      ...person("marco-antonio-garcia-de-paz", "en", {level: 3}),
      {
        "narrow": 10
      },
      {
        "heading": "Demonstrative Choirs",
        "level": 1,
        "align": "center"
      },
      {
        "heading": "“Chamber Choir of the Music and Ballet Conservatory Ljubljana“",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/ljubljana-png.webp"
      },
      "The choral activities at Ljubljana Conservatory of Music and Ballet started progressing after composer and conductor Ambrož Čopi assumed leadership of the choir in 2010 , knowing how important and fulfilling it is for young musicians to sing in a choir, to discover the beauty of vocal music and the joy of singing together with others, feeling the energy and power of choral art and getting inspired for future work.\n\nAfter four years of growing quality and various achievements at competitions: first place at International choral festival Samoborsko zborsko protuletje (Croatia, 2011), first place in mixed choirs and chamber choirs categories at International choral festival in Gdansk (Poland, 2012), Grand prix at Festival of contemporary music Canti veris Praga (Czech Republic, 2013), first place at National competition of children’s and youth choirs Zagorje ob Savi (Slovenia, 2012), second place at International Choral competition ''Gallus'' Maribor (Slovenia, 2013), third place at International Choral competition Montreux (Switzerland, 2014), the decision was made to split the choir into two groups - one choir consists of all the students of the conservatory not included in school orchestras, the other choir (Chamber choir) consists of about 40 singers who are willing to improve their vocal technique, to sing a more difficult range of choral music and reach higher performing standards.",
      {
        "img": "/img/KGBL-jpeg.webp"
      },
      {
        "anchor": "schedule"
      },
      "The Chamber choir KGBL, led by Ambrož Čopi and two assistants Tine Bec and Evgen Bibianko, embraces a wide range of music genres and styles, from the Renaissance to modern music. Special attention is given to compositions by contemporary Slovene composers. In the past three years the choir had commissioned many prominent composers such as Lojze Lebič, Tadeja Vulc, Damijan Močnik, Črt Sojar-Voglar, Peter Šavli, Andrej Makor for their choral works and encouraged the youngest generation of composers Tine Bec, Matej Kastelic to create new compositions, which the choir successfully promotes at concerts and competitions in Slovenia and abroad.",
      "In the past three years the choir earned second and third place at International Choral competition Tallinn (Estonia, 2015), won Grand prix at International festival in Moscow (Russia, 2016), first place at National choral competition ''Naša pesem'' (Our song), Maribor (Slovenia, 2016), second place at International Choral competition ''Gallus'' Maribor (Slovenia, 2017). The latest achievement is first place in Polifonia and second place in Folklore category at International choral competition in Tolosa (Spain, 2017). The choir successfully performed concerts in various cities: Stockholm (Sweden, 2016), Borja, Ordizia, Getxo, Doneztebe (Spain, 2017) and at a variety of concert cycles in Slovenia.",
      "The conductor's idea to make synergy between a new generation of young singers, composers and conductors became true. In collaboration with Slovenian music publisher Astrum new compositions by Slovenian composers are successfully promoted. After three years the Chamber Choir KGBL has become one of the most prominent Slovenian choirs.",
      {
        "heading": "Schedule",
        "level": 2,
        "align": "center"
      },
      {
        "heading": "Tuesday, July 2nd, 2019",
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
        "heading": "Wednesday, July 3rd, 2019",
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
        "heading": "Thursday, July 4th, 2019",
        "level": 4,
        "align": "center"
      },
      {
        "list": [
          "**09:00 - 11:00 a.m.** Lectures along with practical work",
          "**11:00 - 01:00 p.m.** Masterclass with the demonstrative ensemble (active participants are conducting, while the passive ones are observing and rehearsing / learning)",
          "**03:00 - 05:00 p.m.** Individual consults to participants.",
          "**05:00 p.m.** General rehearsal",
          "**08:00 p.m.** Concert - Opening Ceremony of 37th ICF of Preveza."
        ],
        "align": "center"
      },
      "From Friday, 5th July 2019 to Sunday, 7th July 2019, the participants will have the opportunity to attend the 37th ICF of Preveza, in the frames of which the 25th international Choral Competition of Music will take place, but also to meet and discuss with conductors of the participating choirs, while the organizing committee of the festival will provide them with any kind of material they might need.",
      "The seminar is addressed to choir conductors, instructors who conduct choirs as well as students attending music studies and students attending Music Schools- Conservatories who get involved with choir (conducting).\nThe Seminar will be led by the internationally renowned conductors Ambrož Čopi and Theodora Pavlovitch and Marco A. García de Paz from Spain . A lot of time and special attention will be given to practical work with a demonstrative choir; the demonstrative ensemble will be the Chamber Choir of the Music and Ballet Conservatory Ljubljana.( https://www.choirkgbl.eu)\nThe seminar is intended for beginners as well as established choral conductors. Participation can be active or passive. Participants who wish to be active are kindly asked to send their CV with specified experiences in choir conducting.",
      {
        "narrow": 0
      },
      {
        "narrow": 10
      },
      {
        "img": "/img/gallery/masterclasses/masterclass 2019/1.webp",
        "href": "/img/gallery/masterclasses/masterclass%202019/1.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/masterclasses/masterclass 2019/2.webp",
        "href": "/img/gallery/masterclasses/masterclass%202019/2.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/masterclasses/masterclass 2019/3.webp",
        "href": "/img/gallery/masterclasses/masterclass%202019/3.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/masterclasses/masterclass 2019/4.webp",
        "href": "/img/gallery/masterclasses/masterclass%202019/4.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/masterclasses/masterclass 2019/5.webp",
        "href": "/img/gallery/masterclasses/masterclass%202019/5.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/masterclasses/masterclass 2019/6.webp",
        "href": "/img/gallery/masterclasses/masterclass%202019/6.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/masterclasses/masterclass 2019/7.webp",
        "href": "/img/gallery/masterclasses/masterclass%202019/7.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/masterclasses/masterclass 2019/8.webp",
        "href": "/img/gallery/masterclasses/masterclass%202019/8.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/masterclasses/masterclass 2019/9.webp",
        "href": "/img/gallery/masterclasses/masterclass%202019/9.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/masterclasses/masterclass 2019/10.webp",
        "href": "/img/gallery/masterclasses/masterclass%202019/10.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/masterclasses/masterclass 2019/11.webp",
        "href": "/img/gallery/masterclasses/masterclass%202019/11.webp",
        "layout": "gallery"
      },
      {
        "narrow": 0
      }
    ],
    el: [
      {
        "list": [
          "2 - 4 Ιουλίου 2019"
        ]
      },
      {
        "img": "/img/poster-2019.webp"
      },
      {
        "wide": true
      },
      {
        "heading": "Στα πλαίσια του 37ου Διεθνούς Χορωδιακού Φεστιβάλ Πρέβεζας θα πραγματοποιηθεί σεμινάριο για χορωδιακούς διευθυντές στην Πρέβεζα από τις 2 έως τις 4 Ιουλίου 2019",
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
          "Καθαρότητα τονισμού στο χορωδιακό σύνολο",
          "Ερμηνεία διαφόρων μουσικών στυλ",
          "Ομαδική φωνητική τεχνική",
          "Οργάνωση των προβών",
          "Φωνητική τεχνική",
          "Ανάλυση παρτιτούρας",
          "Διευθυντικές ασκήσεις",
          "Ατομική προετοιμασία των παρτιτούρων με τη συμμετοχή των ενεργών συμμετεχόντων",
          "Παρουσίαση νέων χορωδιακών έργων από τη Σλοβενία (ενδιαφέρον και για συνθέτες)"
        ],
        "align": "center"
      },
      ...person("ambroz-copi", "el", {level: 3}),
      ...person("theodora-pavlovitch", "el", {level: 3,align: "right"}),
      ...person("marco-antonio-garcia-de-paz", "el", {level: 3}),
      {
        "narrow": 10
      },
      {
        "heading": "Υποδειγματικές Χορωδίες",
        "level": 1,
        "align": "center"
      },
      {
        "heading": "“Χορωδία Δωματίου του Κονσερβατορίου Μουσικής και Μπαλέτου της Λιουμπλιάνα“",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/ljubljana-png.webp"
      },
      "Οι χορωδιακές δραστηριότητες στο Κονσερβατόριο Μουσικής και Μπαλέτου της Λιουμπλιάνα άρχισαν να προχωρούν μετά την ανάληψη της ηγεσίας της χορωδίας από τον συνθέτη και διευθυντή Ambrož Čopi το 2010, γνωρίζοντας πόσο σημαντικό και ικανοποιητικό είναι για τους νέους μουσικούς να τραγουδούν σε χορωδία, να ανακαλύπτουν την ομορφιά της φωνητικής μουσικής και τη χαρά του τραγουδιού μαζί με άλλους, να αισθάνονται την ενέργεια και τη δύναμη της χορωδιακής τέχνης και να εμπνέονται για μελλοντική εργασία.\n\nΜετά από τέσσερα χρόνια αυξανόμενης ποιότητας και διάφορων επιτευγμάτων σε διαγωνισμούς: πρώτη θέση στο Διεθνές χορωδιακό φεστιβάλ Samoborsko zborsko protuletje (Κροατία, 2011), πρώτη θέση στις κατηγορίες μεικτών χορωδιών και χορωδιών δωματίου στο Διεθνές χορωδιακό φεστιβάλ στο Γκντανσκ (Πολωνία, 2012), Μεγάλο βραβείο στο Φεστιβάλ σύγχρονης μουσικής Canti veris Πράγα (Τσεχία, 2013), πρώτη θέση στο Εθνικό διαγωνισμό παιδικών και νεανικών χορωδιών Zagorje ob Savi (Σλοβενία, 2012), δεύτερη θέση στο Διεθνή διαγωνισμό χορωδιών ''Gallus'' Μαρίμπορ (Σλοβενία, 2013), τρίτη θέση στο Διεθνή διαγωνισμό χορωδιών Montreux (Ελβετία, 2014), λήφθηκε η απόφαση να διαιρεθεί η χορωδία σε δύο ομάδες - μια χορωδία αποτελούμενη από όλους τους μαθητές του κονσερβατορίου που δεν συμπεριλαμβάνονται στις σχολικές ορχήστρες, η άλλη χορωδία (Χορωδία Δωματίου) αποτελείται από περίπου 40 τραγουδιστές που είναι πρόθυμοι να βελτιώσουν την φωνητική τους τεχνική, να τραγουδήσουν ένα πιο δύσκολο εύρος χορωδιακής μουσικής και να φτάσουν σε υψηλότερα πρότυπα απόδοσης.",
      {
        "img": "/img/KGBL-jpeg.webp"
      },
      {
        "anchor": "schedule"
      },
      "Η Χορωδία Δωματίου KGBL, υπό την καθοδήγηση του Ambrož Čopi και των δύο βοηθών του Tine Bec και Evgen Bibianko, αγκαλιάζει μια ευρεία γκάμα μουσικών ειδών και στιλ, από την Αναγέννηση έως τη σύγχρονη μουσική. Ειδική προσοχή δίνεται σε συνθέσεις από σύγχρονους Σλοβένους συνθέτες. Τα τρία τελευταία χρόνια η χορωδία ανέθεσε χορωδιακά έργα σε πολλούς εξέχοντες συνθέτες όπως οι Lojze Lebič, Tadeja Vulc, Damijan Močnik, Črt Sojar-Voglar, Peter Šavli, Andrej Makor και ενθάρρυνε τη νεότερη γενιά συνθετών Tine Bec, Matej Kastelic να δημιουργήσει νέες συνθέσεις, τις οποίες η χορωδία προωθεί με επιτυχία σε συναυλίες και διαγωνισμούς στη Σλοβενία και στο εξωτερικό.",
      "Τα τρία τελευταία χρόνια η χορωδία κατέκτησε τη δεύτερη και την τρίτη θέση στο Διεθνή Διαγωνισμό Χορωδιών Tallinn (Εσθονία, 2015), κέρδισε το Μεγάλο βραβείο στο Διεθνές φεστιβάλ στη Μόσχα (Ρωσία, 2016), πρώτη θέση στο Εθνικό χορωδιακό διαγωνισμό ''Naša pesem'' (Το τραγούδι μας), Μαρίμπορ (Σλοβενία, 2016), δεύτερη θέση στο Διεθνή Διαγωνισμό Χορωδιών ''Gallus'' Μαρίμπορ (Σλοβενία, 2017). Το πιο πρόσφατο επίτευγμα είναι η πρώτη θέση στην κατηγορία Πολυφωνία και η δεύτερη θέση στην κατηγορία Λαϊκή μουσική στο Διεθνή διαγωνισμό χορωδιών στο Τολόζα (Ισπανία, 2017). Η χορωδία εμφανίστηκε με επιτυχία σε συναυλίες σε διάφορες πόλεις: Στοκχόλμη (Σουηδία, 2016), Μπόρχα, Ορντίθια, Γκέτξο, Ντονεζτέμπε (Ισπανία, 2017) και σε διάφορους κύκλους συναυλιών στη Σλοβενία.",
      "Η ιδέα του διευθυντή να δημιουργήσει συνέργια μεταξύ μιας νέας γενιάς νέων τραγουδιστών, συνθετών και διευθυντών έγινε πραγματικότητα. Σε συνεργασία με τον Σλοβενικό μουσικό εκδότη Astrum, νέες συνθέσεις από Σλοβένους συνθέτες προωθούνται με επιτυχία. Μετά από τρία χρόνια, η Χορωδία Δωματίου KGBL έχει γίνει μία από τις πιο αξιοσημείωτες Σλοβενικές χορωδίες.",
      {
        "heading": "Πρόγραμμα",
        "level": 2,
        "align": "center"
      },
      {
        "heading": "Τρίτη, 2 Ιουλίου 2019",
        "level": 4,
        "align": "center"
      },
      {
        "list": [
          "**09:00 - 13:00 μ.μ.** Διαλέξεις μαζί με πρακτική εργασία: Τεχνική διεύθυνσης - ασκήσεις για ενεργούς και παθητικούς συμμετέχοντες (με πιάνο)",
          "**17:00 - 19:00 μ.μ.** Masterclass με την υποδειγματική χορωδία (οι ενεργοί συμμετέχοντες διευθύνουν, ενώ οι παθητικοί παρατηρούν και προβάρουν / μαθαίνουν) Πρέβεζα.",
          "**20:00 - 22:00 μ.μ.** Ατομικά μαθήματα για ενεργούς συμμετέχοντες"
        ],
        "align": "center"
      },
      {
        "heading": "Τετάρτη, 3 Ιουλίου 2019",
        "level": 4,
        "align": "center"
      },
      {
        "list": [
          "**9:00 - 01:00 μ.μ.** Διαλέξεις μαζί με πρακτική εργασία",
          "**03:00 - 07:00 μ.μ.** Masterclass με την υποδειγματική χορωδία (οι ενεργοί συμμετέχοντες διευθύνουν, ενώ οι παθητικοί παρατηρούν και προβάρουν / μαθαίνουν)",
          "**20:00 - 22:00 μ.μ.** Βίντεο αξιολόγηση της διεύθυνσης των ενεργών συμμετεχόντων"
        ],
        "align": "center"
      },
      {
        "heading": "Πέμπτη, 4 Ιουλίου 2019",
        "level": 4,
        "align": "center"
      },
      {
        "list": [
          "**09:00 - 11:00 π.μ.** Διαλέξεις μαζί με πρακτική εργασία",
          "**11:00 - 01:00 μ.μ.** Masterclass με την υποδειγματική χορωδία (οι ενεργοί συμμετέχοντες διευθύνουν, ενώ οι παθητικοί παρατηρούν και προβάρουν / μαθαίνουν)",
          "**03:00 - 05:00 μ.μ.** Ατομικές συμβουλές σε συμμετέχοντες.",
          "**05:00 μ.μ.** Γενική πρόβα",
          "**08:00 μ.μ.** Συναυλία - Τελετή Έναρξης του 37ου Διεθνούς Φεστιβάλ Χορωδιών Πρέβεζας."
        ],
        "align": "center"
      },
      "Από Παρασκευή, 5 Ιουλίου 2019 έως Κυριακή, 7 Ιουλίου 2019, οι συμμετέχοντες θα έχουν τη δυνατότητα να παρακολουθήσουν το 37ο Διεθνές Φεστιβάλ Χορωδιών Πρέβεζας, στα πλαίσια του οποίου θα διεξαχθεί και ο 25ος διεθνής Χορωδιακός Διαγωνισμός Μουσικής, αλλά και να συναντηθούν και να συζητήσουν με διευθυντές χορωδιών που συμμετέχουν, ενώ η οργανωτική επιτροπή του φεστιβάλ θα τους παρέχει οποιαδήποτε είδους υλικό ίσως χρειαστούν.",
      "Το σεμινάριο απευθύνεται σε διευθυντές χορωδιών, εκπαιδευτές που διευθύνουν χορωδίες καθώς και φοιτητές που παρακολουθούν μουσικές σπουδές και μαθητές που παρακολουθούν Μουσικές Σχολές-Κονσερβατορία που ασχολούνται με τη χορωδία (διεύθυνση).\nΤο σεμινάριο θα διεξαχθεί υπό την καθοδήγηση των διεθνώς αναγνωρισμένων διευθυντών Ambrož Čopi και Theodora Pavlovitch και Marco A. García de Paz από την Ισπανία. Πολύς χρόνος και ειδική προσοχή θα δοθεί στην πρακτική εργασία με ένα δειγματικό χορωδιακό σύνολο· η υποδειγματική χορωδία θα είναι η Χορωδία Δωματίου του Κονσερβατορίου Μουσικής και Μπαλέτου της Λιουμπλιάνα.( https://www.choirkgbl.eu)\nΤο σεμινάριο απευθύνεται τόσο σε αρχάριους όσο και σε έμπειρους διευθυντές χορωδιών. Η συμμετοχή μπορεί να είναι ενεργή ή παθητική. Οι συμμετέχοντες που επιθυμούν να είναι ενεργοί παρακαλούνται να στείλουν το βιογραφικό τους με καθορισμένες εμπειρίες στη διεύθυνση χορωδίας.",
      {
        "narrow": 0
      },
      {
        "narrow": 10
      },
      {
        "img": "/img/gallery/masterclasses/masterclass 2019/1.webp",
        "href": "/img/gallery/masterclasses/masterclass%202019/1.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/masterclasses/masterclass 2019/2.webp",
        "href": "/img/gallery/masterclasses/masterclass%202019/2.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/masterclasses/masterclass 2019/3.webp",
        "href": "/img/gallery/masterclasses/masterclass%202019/3.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/masterclasses/masterclass 2019/4.webp",
        "href": "/img/gallery/masterclasses/masterclass%202019/4.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/masterclasses/masterclass 2019/5.webp",
        "href": "/img/gallery/masterclasses/masterclass%202019/5.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/masterclasses/masterclass 2019/6.webp",
        "href": "/img/gallery/masterclasses/masterclass%202019/6.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/masterclasses/masterclass 2019/7.webp",
        "href": "/img/gallery/masterclasses/masterclass%202019/7.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/masterclasses/masterclass 2019/8.webp",
        "href": "/img/gallery/masterclasses/masterclass%202019/8.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/masterclasses/masterclass 2019/9.webp",
        "href": "/img/gallery/masterclasses/masterclass%202019/9.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/masterclasses/masterclass 2019/10.webp",
        "href": "/img/gallery/masterclasses/masterclass%202019/10.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/masterclasses/masterclass 2019/11.webp",
        "href": "/img/gallery/masterclasses/masterclass%202019/11.webp",
        "layout": "gallery"
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
        "heading": "Graeme Langager",
        "level": 6
      },
      {
        "heading": "Klaus-Jürgen Etzold",
        "level": 6
      },
      {
        "heading": "Marco Antonio García de Paz",
        "level": 6
      },
      {
        "heading": "Kostis Konstantaras",
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
      }
    ],
    el: [
      {
        "list": [
          "[Επίδειξη Χορωδιών](#demonstrative_choirs)",
          "[Πρόγραμμα](#schedule)",
          "[Συμμετέχοντες Διευθυντές](#competing)",
          "[Βραβεία, Πλακέτες & Διπλώματα](#awards)",
          "[Γκαλερί](#photos)"
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
        "heading": "Graeme Langager",
        "level": 6
      },
      {
        "heading": "Klaus-Jürgen Etzold",
        "level": 6
      },
      {
        "heading": "Marco Antonio García de Paz",
        "level": 6
      },
      {
        "heading": "Κωστής Κωνσταντάρας",
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
      }
    ],
  },
};

export default masterclassSchema.parse(data);
