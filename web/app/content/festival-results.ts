// Hand-maintained (not generated, not on the legacy site): competition results published as a
// series of images, shown as their own section on the festival page (id "results", linked from
// the home page news). Captions repeat each image's own title; Greek category names follow the
// legacy Greek pages. Originals: repo-root img/results-<year>/*.jpg; the site serves WebP.
import type { LocalizedString } from "./types";

export type FestivalResults = {
  heading: LocalizedString;
  intro: LocalizedString;
  slides: { src: string; caption: LocalizedString }[];
};

const slide = (n: number, en: string, el: string) => ({
  src: `/img/results-2026/results-${String(n).padStart(2, "0")}.webp`,
  caption: { en, el },
});

export const festivalResults: Record<number, FestivalResults> = {
  2026: {
    heading: { en: "Results", el: "Αποτελέσματα" },
    intro: {
      en: "The results of the 30th International Choral Competition of Preveza. Select a page to view it full size.",
      el: "Τα αποτελέσματα του 30ού Διεθνούς Χορωδιακού Διαγωνισμού Πρέβεζας. Επιλέξτε μια σελίδα για να τη δείτε σε πλήρες μέγεθος.",
    },
    slides: [
      slide(1, "Competition results — 30th International Choral Competition of Preveza", "Αποτελέσματα — 30ός Διεθνής Χορωδιακός Διαγωνισμός Πρέβεζας"),
      slide(2, "Category A — Mixed choirs", "Κατηγορία Α — Μικτές χορωδίες"),
      slide(3, "Category B — Equal voice choirs · Category C — Children's choirs", "Κατηγορία Β — Χορωδίες ομοίων φωνών · Κατηγορία Γ — Παιδικές χορωδίες"),
      slide(4, "Category D — Chamber choirs · Category E — Youth choirs", "Κατηγορία Δ — Μικροχορωδίες / Φωνητικά σύνολα · Κατηγορία Ε — Νεανικές χορωδίες"),
      slide(5, "Category F — Spiritual, gospel, jazz, pop, folklore, Byzantine chant (1 of 2)", "Κατηγορία ΣΤ — Πνευματική, Gospel, Jazz, Pop, Λαογραφική μουσική, Βυζαντινή ψαλμωδία (1 από 2)"),
      slide(6, "Category F — Spiritual, gospel, jazz, pop, folklore, Byzantine chant (2 of 2)", "Κατηγορία ΣΤ — Πνευματική, Gospel, Jazz, Pop, Λαογραφική μουσική, Βυζαντινή ψαλμωδία (2 από 2)"),
      slide(7, "Category G — Free program of original choral music (1 of 2)", "Κατηγορία Ζ — Ελεύθερο πρόγραμμα πρωτότυπης χορωδιακής μουσικής (1 από 2)"),
      slide(8, "Category G — Free program of original choral music (2 of 2)", "Κατηγορία Ζ — Ελεύθερο πρόγραμμα πρωτότυπης χορωδιακής μουσικής (2 από 2)"),
      slide(9, "Category H — Greek choirs", "Κατηγορία Η — Ελληνικές χορωδίες"),
      slide(10, "Special awards", "Ειδικά βραβεία"),
      slide(11, "Thank you to all participating choirs — see you in Preveza in 2027", "Ευχαριστούμε όλες τις χορωδίες που συμμετείχαν — ραντεβού στην Πρέβεζα το 2027"),
    ],
  },
};
