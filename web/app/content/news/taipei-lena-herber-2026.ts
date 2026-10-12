import { newsPostSchema, type NewsPost } from "../types";

// Hand-maintained (not generated, not on the legacy site): news of 2026.
// Greek: the text as supplied by the choir, verbatim. English: translation of that text, written
// for the site -- to be reviewed by the choir.
// Photos: originals in repo-root img/news/, WebP in web/public/img/news/. They show the concert at
// the National Concert Hall and the Taipei International Choral Festival 2026 (24 Jul - 2 Aug).
const data: NewsPost = {
  slug: "taipei-lena-herber-2026",
  title: {
    en: "From Preveza to Taipei: Lena Herber at the National Concert Hall of Taiwan",
    el: "Από την Πρέβεζα στην Ταϊπέι: Η Lena Herber στο National Concert Hall της Ταϊβάν",
  },
  date: "2026-08-02", // ordering only: the last day of the Taipei festival
  hero: "/img/news/taipei-concert-hall-2026.webp",
  gallery: [],
  body: {
    en: [
      "**An important international collaboration, which began at the International Choral Conducting Competition of Preveza, came to fruition in a special musical experience in Taiwan.**",
      { img: "/img/news/taipei-concert-hall-2026.webp" },
      "Lena Herber, winner of the 2nd International Choral Conducting Competition of Preveza in 2025, travelled to Taipei, where she worked with the Taipei Philharmonic Chamber Choir, as part of the prize she won at the competition.",
      "During her stay in Taiwan, the young conductor had the opportunity to work with a distinguished choral ensemble, culminating in the concert held at the National Concert Hall in Taipei, one of the most important concert venues in the country.",
      { img: "/img/news/taipei-festival-2026.webp" },
      "This collaboration is a characteristic example of the opportunities created by the International Choral Conducting Competition of Preveza, offering participants the chance to develop artistically, gain new experiences and work with choral ensembles from different countries.",
      "For the “Armonia” Choir and the International Choral Festival of Preveza, it is especially gratifying to see a musical journey that began in our city continue on the international choral stage.",
      "We warmly congratulate Lena Herber on this experience and thank her for sharing with us moments from her trip and her collaboration in Taiwan.",
    ],
    el: [
      "**Μια σημαντική διεθνής συνεργασία, που ξεκίνησε από τον Διεθνή Διαγωνισμό Διεύθυνσης Χορωδίας της Πρέβεζας, ολοκληρώθηκε με μια ξεχωριστή μουσική εμπειρία στην Ταϊβάν.**",
      { img: "/img/news/taipei-concert-hall-2026.webp" },
      "Η Lena Herber, νικήτρια του 2ου Διεθνούς Διαγωνισμού Διεύθυνσης Χορωδίας της Πρέβεζας το 2025, ταξίδεψε στην Ταϊπέι, όπου συνεργάστηκε με την Taipei Philharmonic Chamber Choir, στο πλαίσιο του βραβείου που απέσπασε στον διαγωνισμό.",
      "Κατά τη διάρκεια της παραμονής της στην Ταϊβάν, η νεαρή μαέστρος είχε την ευκαιρία να εργαστεί με ένα καταξιωμένο χορωδιακό σύνολο, με αποκορύφωμα τη συναυλία που πραγματοποιήθηκε στο National Concert Hall της Ταϊπέι, έναν από τους σημαντικότερους συναυλιακούς χώρους της χώρας.",
      { img: "/img/news/taipei-festival-2026.webp" },
      "Η συνεργασία αυτή αποτελεί ένα χαρακτηριστικό παράδειγμα των ευκαιριών που δημιουργεί ο Διεθνής Διαγωνισμός Διεύθυνσης Χορωδίας της Πρέβεζας, προσφέροντας στους συμμετέχοντες τη δυνατότητα να εξελιχθούν καλλιτεχνικά, να αποκτήσουν νέες εμπειρίες και να συνεργαστούν με χορωδιακά σύνολα από διαφορετικές χώρες.",
      "Για τη Χορωδία «Αρμονία» και το Διεθνές Χορωδιακό Φεστιβάλ Πρέβεζας, είναι ιδιαίτερα ευχάριστο να βλέπουμε μια μουσική διαδρομή που ξεκίνησε στην πόλη μας να συνεχίζεται στη διεθνή χορωδιακή σκηνή.",
      "Συγχαίρουμε θερμά τη Lena Herber για αυτή την εμπειρία και την ευχαριστούμε που μοιράστηκε μαζί μας στιγμές από το ταξίδι και τη συνεργασία της στην Ταϊβάν.",
    ],
  },
};

export default newsPostSchema.parse(data);
