import { newsPostSchema, type NewsPost } from "../types";

// Hand-maintained (not generated, not on the legacy site): press release of October 2026.
// Greek: the text as supplied by the choir, verbatim apart from the typos fixed in the proofreading
// review approved 2026-10-12 (το Γενκ, ταξιδιού, κοινωνικότητά, κ., «Αρμονίας» ταξίδεψε, σύνορά της.).
// English: translation of that text, written for the site -- to be reviewed by the choir.
// Photos: originals in repo-root img/news/, WebP in web/public/img/news/.
const data: NewsPost = {
  slug: "berlin-nikopolis-genk-2026",
  title: {
    en: "A month full of choral music and important appearances for the Choir of Preveza “Armonia”",
    el: "Ένας μήνας γεμάτος χορωδιακή μουσική και σημαντικές εμφανίσεις για την Χορωδία Πρέβεζας «Αρμονία».",
  },
  date: "2026-10-11",
  hero: "/img/news/berlin-children-choir-2026.webp",
  gallery: [],
  body: {
    en: [
      { heading: "PRESS RELEASE", level: 6 },
      "**From Berlin and the Great Theatre of Ancient Nikopolis to Genk in Belgium, the Choir of Preveza “Armonia” continues its intense artistic activity and its outward-looking presence.**",
      "September and the first days of October were a particularly creative period, with the Children’s Choir and the Mixed Choir taking part in three important events, in Greece and abroad.",
      "It all began with the Children’s Choir of “Armonia”, which travelled to Berlin from 3 to 7 September 2026 for a special musical and cultural visit to the German capital.",
      { img: "/img/news/berlin-children-choir-2026.webp" },
      "The collaboration with the Sharena Gayda choir of Berlin was at the heart of the trip. The two choirs took part in a joint musical programme entitled “Kaval Sviri”, giving the children the opportunity to work together, exchange musical experiences and get to know each other through choral singing. This meeting showed the power of music as a means of communication, cooperation and building bonds between young people from different countries.",
      "The highlight of the trip was their joint concert at the Luisenkirche in Berlin, where the children presented the result of their work together to a music-loving audience. At the same time, they had the chance to get to know at first hand the history and culture of one of the most important European capitals, gaining experiences that go beyond the limits of a simple choir trip.",
      "International collaborations are an integral part of the musical and social education of the children who take part, cultivating teamwork, responsibility and their ability to relate to different cultures.",
      "On 28 September, the Children’s Choir had the special honour of taking part in the musical event held at the Great Theatre of Ancient Nikopolis on the occasion of the inauguration of the works for the restoration, protection and enhancement of the monuments of Ancient Nikopolis. The event was of great historical and cultural importance for our region and took place in the presence of the President of the Hellenic Republic, Mr Konstantinos A. Tasoulas, and the Minister of Culture, Ms Lina Mendoni.",
      "The children’s presence in a place so closely connected with the history and cultural heritage of our land was a special moment for “Armonia”, and an experience that will stay engraved in the memory of the young choristers.",
      "Just a few days later, the Mixed Choir of “Armonia” travelled to Genk in Belgium from 2 to 6 October 2026, taking part in an important international choral event.",
      { img: "/img/news/genk-mixed-choir-2026.webp" },
      "Under the direction of conductor Anelia Stefanova, “Armonia” presented its artistic programme before an international audience and had the opportunity to meet choirs, conductors and distinguished figures of the choral world from many different countries.",
      "The flattering comments the Mixed Choir received from renowned conductors and members of the international choral community were a particular source of satisfaction. The quality of its sound, its musicality, the cohesion of the ensemble and the overall artistic presence of “Armonia” drew particular praise, confirming the high level of the work done in the choir.",
      "The Choir of Preveza “Armonia” consistently continues its long journey, investing in the new generation, in artistic quality and in international outreach, while carrying the name of Preveza and representing our country beyond its borders.",
      "“Armonia” warmly thanks conductor Anelia Stefanova and pianist Eleonora Apostolidou for their artistic contribution and their continuous work; the young choristers of the Children’s Choir for their enthusiasm, their effort and their wonderful presence; and their parents, whose trust and support are invaluable at every step of this journey. Special thanks also go to the adult choristers of the Mixed Choir, who, with consistency, dedication and many hours of preparation, support the artistic work of the association and worthily represent “Armonia” and Preveza in its international appearances.",
      "For “Armonia”, every trip, every collaboration and every important appearance is a new asset and one more step in its continuous artistic journey.",
    ],
    el: [
      { heading: "ΔΕΛΤΙΟ ΤΥΠΟΥ", level: 6 },
      "**Από το Βερολίνο και το Μεγάλο Θέατρο της Αρχαίας Νικόπολης έως το Γενκ του Βελγίου, η Χορωδία Πρέβεζας «Αρμονία» συνεχίζει την έντονη καλλιτεχνική της δραστηριότητα και εξωστρέφεια.**",
      "Ο Σεπτέμβριος και οι πρώτες ημέρες του Οκτωβρίου αποτέλεσαν μια ιδιαίτερα δημιουργική περίοδο με την Παιδική και την Μικτή Χορωδία να δίνουν το παρόν σε τρεις σημαντικούς σταθμούς, εντός και εκτός Ελλάδας.",
      "Η αρχή έγινε με την Παιδική Χορωδία της «Αρμονίας», η οποία από τις 3 έως τις 7 Σεπτεμβρίου 2026 ταξίδεψε στο Βερολίνο, πραγματοποιώντας μια ξεχωριστή μουσική και πολιτιστική αποστολή στη γερμανική πρωτεύουσα.",
      { img: "/img/news/berlin-children-choir-2026.webp" },
      "Η συνεργασία με την χορωδία Sharena Gayda του Βερολίνου αποτέλεσε τον βασικό πυρήνα πραγματοποίησης του ταξιδιού. Οι δύο χορωδίες συμμετείχαν σε ένα από κοινού μουσικό πρόγραμμα με τον τίτλο “Kaval Sviri” δίνοντας στα παιδιά τη δυνατότητα να δουλέψουν μαζί, να ανταλλάξουν μουσικές εμπειρίες και να γνωριστούν μέσα από τη χορωδιακή πράξη. Η συνάντηση αυτή ανέδειξε τη δύναμη της μουσικής ως μέσου επικοινωνίας, συνεργασίας και δημιουργίας δεσμών ανάμεσα σε νέους ανθρώπους από διαφορετικές χώρες.",
      "Η κορυφαία στιγμή του ταξιδιού ήταν η συναυλιακή τους συνύπαρξη στην εκκλησία Luisenkirche του Βερολίνου, όπου τα παιδιά παρουσίασαν το αποτέλεσμα της ομαδικής τους δουλειάς στο φιλόμουσο κοινό. Παράλληλα, τους δόθηκε η ευκαιρία να γνωρίσουν από κοντά την ιστορία και τον πολιτισμό μιας από τις σημαντικότερες ευρωπαϊκές πρωτεύουσες, αποκτώντας εμπειρίες που ξεπερνούν τα όρια μιας απλής χορωδιακής αποστολής.",
      "Οι διεθνείς συνεργασίες αποτελούν αναπόσπαστο μέρος της μουσικής και κοινωνικής διαπαιδαγώγησης των παιδιών που συμμετέχουν, καλλιεργώντας την ομαδικότητα, την υπευθυνότητα και την κοινωνικότητά τους με διαφορετικούς πολιτισμούς.",
      "Στις 28 Σεπτεμβρίου, η Παιδική Χορωδία είχε την ιδιαίτερη τιμή να συμμετάσχει στη μουσική εκδήλωση που πραγματοποιήθηκε στο Μεγάλο Θέατρο της Αρχαίας Νικόπολης με αφορμή τα εγκαίνια των έργων αποκατάστασης, προστασίας και ανάδειξης των μνημείων της Αρχαίας Νικόπολης. Η εκδήλωση ήταν μεγάλης ιστορικής και πολιτιστικής σημασίας για την περιοχή μας και τελέσθηκε παρουσία του Προέδρου της Ελληνικής Δημοκρατίας, κ. Κωνσταντίνου Αν. Τασούλα και της Υπουργού Πολιτισμού, κ. Λίνας Μενδώνη.",
      "Η παρουσία των παιδιών σε έναν χώρο άμεσα συνδεδεμένο με την ιστορία και την πολιτιστική κληρονομιά του τόπου μας ήταν μια ξεχωριστή στιγμή για την «Αρμονία», αλλά και μια εμπειρία που θα μείνει χαραγμένη στη μνήμη των νεαρών χορωδών.",
      "Λίγες μόλις ημέρες αργότερα, η Μικτή Χορωδία «Αρμονίας» ταξίδεψε στο Γενκ του Βελγίου από τις 2 έως τις 6 Οκτωβρίου 2026, συμμετέχοντας σε μια σημαντική διεθνή χορωδιακή διοργάνωση.",
      { img: "/img/news/genk-mixed-choir-2026.webp" },
      "Υπό τη διεύθυνση της μαέστρου Anelia Stefanova, η «Αρμονία» παρουσίασε το καλλιτεχνικό της πρόγραμμα ενώπιον διεθνούς κοινού και είχε την ευκαιρία να συναναστραφεί με χορωδίες, μαέστρους και εξέχουσες προσωπικότητες του χορωδιακού χώρου διαφορετικών εθνικοτήτων.",
      "Ιδιαίτερη ικανοποίηση προκάλεσαν τα κολακευτικά σχόλια που απέσπασε η Μικτή Χορωδία από καταξιωμένους μαέστρους και ανθρώπους της διεθνούς χορωδιακής κοινότητας. Η ποιότητα του ήχου, η μουσικότητα, η συνοχή του συνόλου και η συνολική καλλιτεχνική παρουσία της «Αρμονίας» αποτέλεσαν αντικείμενο ιδιαίτερα θετικών σχολίων, επιβεβαιώνοντας το υψηλό επίπεδο της δουλειάς που πραγματοποιείται στη χορωδία.",
      "Η Χορωδία Πρέβεζας «Αρμονία» συνεχίζει με συνέπεια τη μακρόχρονη πορεία της, επενδύοντας στη νέα γενιά, στην καλλιτεχνική ποιότητα και στη διεθνή εξωστρέφεια, μεταφέροντας παράλληλα το όνομα της Πρέβεζας και εκπροσωπώντας την χώρα μας πέρα από τα σύνορά της.",
      "Η «Αρμονία» εκφράζει τις θερμές της ευχαριστίες στη μαέστρο Anelia Stefanova και στην πιανίστα Ελεονώρα Αποστολίδου για την καλλιτεχνική τους συμβολή και τη συνεχή δουλειά τους, στους μικρούς χορωδούς της Παιδικής Χορωδίας για τον ενθουσιασμό, την προσπάθεια και την υπέροχη παρουσία τους, καθώς και στους γονείς τους, των οποίων η εμπιστοσύνη και η στήριξη είναι πολύτιμες σε κάθε βήμα αυτής της πορείας. Ιδιαίτερες ευχαριστίες απευθύνονται επίσης στους ενήλικες χορωδούς της Μικτής Χορωδίας, οι οποίοι με συνέπεια, αφοσίωση και πολλές ώρες προετοιμασίας στηρίζουν το καλλιτεχνικό έργο του συλλόγου και εκπροσωπούν επάξια την «Αρμονία» και την Πρέβεζα στις διεθνείς της παρουσίες.",
      "Για την «Αρμονία», κάθε ταξίδι, κάθε συνεργασία και κάθε σημαντική παρουσία αποτελεί ένα νέο εφόδιο και ένα ακόμη βήμα στη συνεχή καλλιτεχνική της πορεία.",
    ],
  },
};

export default newsPostSchema.parse(data);
