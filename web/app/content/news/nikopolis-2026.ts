import { newsPostSchema, type NewsPost } from "../types";

// Hand-maintained (not generated, not on the legacy site): news of October 2026.
// Greek: the text as supplied by the choir, verbatim. English: translation of that text, written
// for the site -- to be reviewed by the choir.
// Photo: original in repo-root img/news/, WebP in web/public/img/news/.
const data: NewsPost = {
  slug: "nikopolis-2026",
  title: {
    en: "The Children’s Choir “Armonia” at the Great Theatre of Nikopolis in the presence of the President of the Republic",
    el: "Η Παιδική Χορωδία «Αρμονία» στο Μεγάλο Θέατρο της Νικόπολης παρουσία του Προέδρου της Δημοκρατίας",
  },
  date: "2026-10-10", // ordering only: after the Berlin–Genk press release
  hero: "/img/news/nikopolis-children-choir-2026.webp",
  gallery: [],
  body: {
    en: [
      "**On Monday 28 September 2026, the Children’s Choir of Preveza “Armonia” took part in the musical event held at the Great Theatre of Ancient Nikopolis, on the occasion of the inauguration of the works for the restoration, protection and enhancement of monuments of the archaeological site.**",
      { img: "/img/news/nikopolis-children-choir-2026.webp" },
      "The inauguration took place in the presence of the President of the Republic, Mr Konstantinos A. Tasoulas, while the musical event that followed was organised by the Municipality of Preveza.",
      "Taking part in this important day for the cultural heritage of our region was a special experience for the children of the Children’s Choir “Armonia”. Through their singing, they had the opportunity to become part of an event that connected music with the history and culture of our land, in a place of particular historical significance.",
      "One of the most beautiful moments of the day was the children’s meeting and conversation with the President of the Republic, an experience they will surely remember.",
      "For our Choir, it was a particular joy and honour to take part in this event and to give the children the opportunity to live such a special musical experience, at the Great Theatre of Nikopolis.",
    ],
    el: [
      "**Τη Δευτέρα 28 Σεπτεμβρίου 2026, η Παιδική Χορωδία Πρέβεζας «Αρμονία» συμμετείχε στη μουσική εκδήλωση που πραγματοποιήθηκε στο Μεγάλο Θέατρο της Αρχαίας Νικόπολης, με αφορμή τα εγκαίνια των έργων αποκατάστασης, προστασίας και ανάδειξης μνημείων του αρχαιολογικού χώρου.**",
      { img: "/img/news/nikopolis-children-choir-2026.webp" },
      "Τα εγκαίνια πραγματοποιήθηκαν παρουσία του Προέδρου της Δημοκρατίας, κ. Κωνσταντίνου Αν. Τασούλα, ενώ η μουσική εκδήλωση που ακολούθησε διοργανώθηκε από τον Δήμο Πρέβεζας.",
      "Η συμμετοχή της Παιδικής Χορωδίας «Αρμονία» σε αυτή τη σημαντική ημέρα για την πολιτιστική κληρονομιά της περιοχής μας αποτέλεσε μια ξεχωριστή εμπειρία για τα παιδιά. Μέσα από το τραγούδι τους, είχαν την ευκαιρία να γίνουν μέρος μιας εκδήλωσης που συνέδεσε τη μουσική με την ιστορία και τον πολιτισμό του τόπου μας, σε έναν χώρο με ιδιαίτερη ιστορική σημασία.",
      "Μια από τις πιο όμορφες στιγμές της ημέρας ήταν η συνάντηση και η συνομιλία των παιδιών με τον Πρόεδρο της Δημοκρατίας, μια εμπειρία που σίγουρα θα θυμούνται.",
      "Για τη Χορωδία μας, ήταν ιδιαίτερη χαρά και τιμή να συμμετέχει σε αυτή την εκδήλωση και να δώσει στα παιδιά την ευκαιρία να ζήσουν μια τόσο ξεχωριστή μουσική εμπειρία, στο Μεγάλο Θέατρο της Νικόπολης.",
    ],
  },
};

export default newsPostSchema.parse(data);
