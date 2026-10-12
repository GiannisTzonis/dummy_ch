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
    label: { en: "Armonia Choir", el: "Χορωδία Αρμονία" },
    children: [
      {
        label: { en: "The history of our Choir", el: "Η ιστορία της χορωδίας" },
        href: "/our-choir",
      },
      {
        label: { en: "Our Conductor", el: "Η Μαέστρος της χορωδίας" },
        href: "/our-conductor",
      },
    ],
  },
  {
    label: {
      en: "International Choral Festival",
      el: "Διεθνές Χορωδιακό Φεστιβάλ",
    },
    children: [
      { label: { en: "Festival 2026", el: "Φεστιβάλ 2026" }, href: "/festival/2026" },
      {
        label: { en: "Previous Festivals", el: "Προηγούμενα Φεστιβάλ" },
        href: "/festivals",
      },
    ],
  },
  {
    label: { en: "Masterclass", el: "Masterclass" },
    children: [
      {
        label: { en: "Masterclass 2026", el: "Masterclass 2026" },
        href: "/masterclass/2026",
      },
      {
        label: { en: "Previous Masterclasses", el: "Προηγούμενα Masterclass" },
        href: "/masterclasses",
      },
    ],
  },
  {
    label: {
      en: "International Competition of Conductors",
      el: "Διεθνής Διαγωνισμός Διευθυντών Χορωδιών",
    },
    children: [
      {
        label: {
          en: "2nd International Choral Composition Competition of Preveza",
          el: "2ος Διεθνής Διαγωνισμός Σύνθεσης Χορωδιών Πρέβεζας",
        },
        href: "/competition/composition-2025",
      },
      {
        label: {
          en: "2nd International Choral Conductors' Competition of Preveza",
          el: "2ος Διεθνής Διαγωνισμός Διεύθυνσης Χορωδιών της Πρέβεζας",
        },
        href: "/competition/conducting-2025",
      },
      {
        label: {
          en: "1st International Choral Composition Competition of Preveza",
          el: "1ος Διεθνής Διαγωνισμός Σύνθεσης Χορωδιών Πρέβεζας",
        },
        href: "/competition/composition-2022",
      },
      {
        label: {
          en: "1st International Choral Conductors' Competition",
          el: "1ος Διεθνής Διαγωνισμός Χορωδιακών Διευθυντών",
        },
        href: "/competition/conducting-2022",
      },
    ],
  },
];
