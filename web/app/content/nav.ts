import type { NavItem } from "./types";

/**
 * The single source of truth for site navigation. This is the whole point
 * of the migration: adding a page here updates every rendered navbar in
 * the site (desktop + mobile), instead of hand-editing the <nav> markup
 * copy-pasted into 75 legacy HTML files.
 *
 * Routes are written without a /:lang prefix -- <Navbar> prepends the
 * current locale when rendering hrefs.
 */
export const primaryNav: NavItem[] = [
  {
    label: { en: "Armonia Choir", el: "Χορωδία Αρμονία", fr: "Chœur Armonia", it: "Coro Armonia", de: "Chor Armonia", es: "Coro Armonia" },
    children: [
      {
        label: {
          en: "The history of our Choir",
          el: "Η ιστορία της χορωδίας",
          fr: "L'histoire de notre chœur",
          it: "La storia del nostro coro",
          de: "Die Geschichte unseres Chores",
          es: "La historia de nuestro coro",
        },
        href: "/our-choir",
      },
      {
        label: {
          en: "Our Conductor",
          el: "Η Μαέστρος της χορωδίας",
          fr: "Notre cheffe de chœur",
          it: "La nostra direttrice",
          de: "Unsere Chorleiterin",
          es: "Nuestra directora",
        },
        href: "/our-conductor",
      },
    ],
  },
  {
    label: {
      en: "International Choral Festival",
      el: "Διεθνές Χορωδιακό Φεστιβάλ",
      fr: "Festival choral international",
      it: "Festival corale internazionale",
      de: "Internationales Chorfestival",
      es: "Festival Coral Internacional",
    },
    children: [
      {
        label: { en: "Festival 2027", el: "Φεστιβάλ 2027", fr: "Festival 2027", it: "Festival 2027", de: "Festival 2027", es: "Festival 2027" },
        href: "/festival/2027",
      },
      {
        label: {
          en: "Previous Festivals",
          el: "Προηγούμενα Φεστιβάλ",
          fr: "Festivals précédents",
          it: "Festival precedenti",
          de: "Frühere Festivals",
          es: "Festivales anteriores",
        },
        href: "/festivals",
      },
    ],
  },
  {
    label: { en: "Masterclass", el: "Masterclass", fr: "Masterclass", it: "Masterclass", de: "Meisterkurs", es: "Clase magistral" },
    children: [
      {
        label: {
          en: "Masterclass 2026",
          el: "Masterclass 2026",
          fr: "Masterclass 2026",
          it: "Masterclass 2026",
          de: "Meisterkurs 2026",
          es: "Clase magistral 2026",
        },
        href: "/masterclass/2026",
      },
      {
        label: {
          en: "Previous Masterclasses",
          el: "Προηγούμενα Masterclass",
          fr: "Masterclasses précédentes",
          it: "Masterclass precedenti",
          de: "Frühere Meisterkurse",
          es: "Clases magistrales anteriores",
        },
        href: "/masterclasses",
      },
    ],
  },
  {
    label: {
      en: "International Competition of Conductors",
      el: "Διεθνής Διαγωνισμός Διευθυντών Χορωδιών",
      fr: "Concours international de direction de chœur",
      it: "Concorso internazionale di direzione corale",
      de: "Internationaler Wettbewerb für Chordirigieren",
      es: "Concurso Internacional de Dirección Coral",
    },
    children: [
      {
        label: {
          en: "2nd International Choral Composition Competition of Preveza",
          el: "2ος Διεθνής Διαγωνισμός Σύνθεσης Χορωδιών Πρέβεζας",
          fr: "2e Concours international de composition chorale de Preveza",
          it: "2° Concorso internazionale di composizione corale di Preveza",
          de: "2. Internationaler Wettbewerb für Chorkomposition Preveza",
          es: "2.º Concurso Internacional de Composición Coral de Preveza",
        },
        href: "/competition/composition-2025",
      },
      {
        label: {
          en: "2nd International Choral Conductors' Competition of Preveza",
          el: "2ος Διεθνής Διαγωνισμός Διεύθυνσης Χορωδιών της Πρέβεζας",
          fr: "2e Concours international de direction de chœur de Preveza",
          it: "2° Concorso internazionale di direzione corale di Preveza",
          de: "2. Internationaler Wettbewerb für Chordirigieren Preveza",
          es: "2.º Concurso Internacional de Dirección Coral de Preveza",
        },
        href: "/competition/conducting-2025",
      },
      {
        label: {
          en: "1st International Choral Composition Competition of Preveza",
          el: "1ος Διεθνής Διαγωνισμός Σύνθεσης Χορωδιών Πρέβεζας",
          fr: "1er Concours international de composition chorale de Preveza",
          it: "1° Concorso internazionale di composizione corale di Preveza",
          de: "1. Internationaler Wettbewerb für Chorkomposition Preveza",
          es: "1.er Concurso Internacional de Composición Coral de Preveza",
        },
        href: "/competition/composition-2022",
      },
      {
        label: {
          en: "1st International Choral Conductors' Competition",
          el: "1ος Διεθνής Διαγωνισμός Χορωδιακών Διευθυντών",
          fr: "1er Concours international de direction de chœur",
          it: "1° Concorso internazionale di direzione corale",
          de: "1. Internationaler Wettbewerb für Chordirigieren",
          es: "1.er Concurso Internacional de Dirección Coral",
        },
        href: "/competition/conducting-2022",
      },
    ],
  },
];
