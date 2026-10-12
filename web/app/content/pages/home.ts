import { homePageSchema, type HomePageContent } from "../types";

// Source: index.html / indexGreek.html at the repo root. Every string below
// is copied verbatim from the legacy page of the same language.
//
// Notes:
//   - News cards now link to the migrated routes instead of legacy .html
//     filenames. The Greek legacy page linked some cards to the *English*
//     twin (france2024.html, cfn.html, saintpeter.html, erasmus.html,
//     single-2024.html, masterclass2023.html); in the new site every link
//     stays inside the current language, which is what those links meant.
//   - Approved fixes (also in web/scripts/legacy/corrections.mjs, so the
//     check against index.html accounts for them): the 2024 festival card's
//     title linked to masterclass2023.html and read "Chord" for "Choral".
//   - Proofreading fixes approved 2026-10-12 (mirrored in web/scripts/legacy/qa/pages-news.mjs for
//     index.html / indexGreek.html): one date style ("29 May 2023" / "29 Μαΐου 2023"), Erasmus card
//     dated November 2017 (the meeting date; legacy said 13th November, 2013), Greek month names,
//     stray quote removed from the 2nd composition competition title.
//   - The commented-out "44th ICFP 2026 poster / Learn More" column in the
//     legacy source is not shown on the live page, so it is not shown here.
const data: HomePageContent = {
  welcome: {
    en: "**Welcome** to the official website of\n**Armonia Choir** & International\n**Choral Festival** of Preveza.",
    el: "**Καλώς** ήλθατε στην επίσημη ιστοσελίδα\nτης **Χορωδίας Αρμονία** και του\nΔιεθνούς **Χορωδιακού Φεστιβάλ** Πρέβεζας.",
  },
  upcomingEdition: {
    title: {
      en: "45th International Choral Festival of Preveza",
      el: "45ο Διεθνές Χορωδιακό Φεστιβάλ Πρέβεζας",
    },
    dates: { en: "July 8–11, 2027", el: "8–11 Ιουλίου 2027" },
  },
  documents: [
    {
      label: {
        en: "Application Form for the 31st International Choral Competition",
        el: "Φόρμα Αίτησης για τον 31ο Διεθνή Χορωδιακό Διαγωνισμό",
      },
      href: "/ApplicationFormICCP2027.docx",
      type: "docx",
      date: { en: "July 8-11, 2027", el: "8-11 Ιουλίου 2027" },
    },
    {
      label: {
        en: "Rules for the 31st International Choral Competition",
        el: "Κανόνες για τον 31ο Διεθνή Χορωδιακό Διαγωνισμό",
      },
      href: "/RulesICCP2027.docx",
      type: "docx",
      date: { en: "July 8-11, 2027", el: "8-11 Ιουλίου 2027" },
    },
    {
      label: {
        en: "Application Form for the 45th International Choral Festival",
        el: "Φόρμα Αίτησης για το 45ο Διεθνές Χορωδιακό Φεστιβάλ",
      },
      href: "/ApplicationForm45thICFP-EN.docx",
      type: "docx",
      date: { en: "July 8-11, 2027", el: "8-11 Ιουλίου 2027" },
    },
    {
      label: {
        en: "Rules for the 45th International Choral Festival",
        el: "Κανόνες για το 45ο Διεθνές Χορωδιακό Φεστιβάλ",
      },
      href: "/Rules45thICFP-EN.docx",
      type: "docx",
      date: { en: "July 8-11, 2027", el: "8-11 Ιουλίου 2027" },
    },
  ],
  newsItems: [
    {
      // added 2026-10-11: press release, news/berlin-nikopolis-genk-2026
      title: {
        en: "A month full of choral music: Berlin, Ancient Nikopolis and Genk",
        el: "Ένας μήνας γεμάτος χορωδιακή μουσική: Βερολίνο, Αρχαία Νικόπολη και Γενκ",
      },
      date: { en: "October 2026", el: "Οκτώβριος 2026" },
      href: "/news/berlin-nikopolis-genk-2026",
      thumbnail: "/img/news/genk-mixed-choir-2026.webp",
      added: true,
    },
    {
      // added 2026-10-11, second on purpose: news/nikopolis-2026
      title: {
        en: "The Children’s Choir “Armonia” at the Great Theatre of Nikopolis",
        el: "Η Παιδική Χορωδία «Αρμονία» στο Μεγάλο Θέατρο της Νικόπολης",
      },
      date: { en: "28 September 2026", el: "28 Σεπτεμβρίου 2026" },
      href: "/news/nikopolis-2026",
      thumbnail: "/img/news/nikopolis-children-choir-2026.webp",
      added: true,
    },
    {
      // added 2026-10-11, third: news/taipei-lena-herber-2026
      title: {
        en: "From Preveza to Taipei: Lena Herber at the National Concert Hall of Taiwan",
        el: "Από την Πρέβεζα στην Ταϊπέι: Η Lena Herber στο National Concert Hall της Ταϊβάν",
      },
      date: { en: "Summer 2026", el: "Καλοκαίρι 2026" },
      href: "/news/taipei-lena-herber-2026",
      thumbnail: "/img/news/taipei-concert-hall-2026.webp",
      added: true,
    },
    {
      // added 2026-10-11: links to the results section of the 2026 festival page
      title: {
        en: "Results of the 30th International Choral Competition of Preveza",
        el: "Αποτελέσματα του 30ού Διεθνούς Χορωδιακού Διαγωνισμού Πρέβεζας",
      },
      date: { en: "July 2026", el: "Ιούλιος 2026" },
      href: "/festival/2026#results",
      thumbnail: "/img/results-2026/results-01.webp",
      added: true,
    },
    {
      title: {
        en: "7th Masterclass for Choral Conductors 2026",
        el: "7ο Σεμινάριο & Εργαστήριο Χορωδιακής Διεύθυνσης 2026",
      },
      date: { en: "6–8 July 2026", el: "6–8 Ιουλίου 2026" },
      href: "/masterclass/2026",
      thumbnail: "/img/masterclass2026.webp",
    },
    {
      title: {
        en: "2nd International Choral Composition Competition of Preveza",
        el: "2ος Διεθνής Διαγωνισμός Σύνθεσης Πρέβεζας",
      },
      date: { en: "December 2025", el: "Δεκέμβριος 2025" },
      href: "/competition/composition-2025",
      thumbnail: "/img/icc2025.webp",
    },
    {
      title: {
        en: "‘Armonia’ Choir in Two Concerts in Thessaly and a Note of Appreciation to the General Hospital of Preveza.",
        el: "Η Χορωδία “Αρμονία” σε δύο συναυλίες στη Θεσσαλία και ευχαριστήριο προς το ΓΝ Πρέβεζας.",
      },
      date: { en: "December 2025", el: "Δεκέμβριος 2025" },
      href: "/news/december-2025",
      thumbnail: "/img/coverXmasConcerts.webp",
    },
    {
      title: {
        en: 'Children\'s choir "Armonia" travels to France.',
        el: 'Η παιδική χορωδία "Αρμονία" ταξιδεύει στη Γαλλία.',
      },
      date: { en: "July 2024", el: "Ιούλιος 2024" },
      href: "/news/france-2024",
      thumbnail: "/img/france2024/2.webp",
    },
    {
      title: {
        en: "42nd International Choral Festival of Preveza",
        el: "42ο Διεθνές Χορωδιακό Φεστιβάλ Πρέβεζας",
      },
      date: { en: "1–7 July 2024", el: "1–7 Ιουλίου 2024" },
      href: "/festival/2024",
      thumbnail: "/img/2024.webp",
    },
    {
      title: { en: "Masterclass 2023", el: "Masterclass 2023" },
      date: { en: "29 May 2023", el: "29 Μαΐου 2023" },
      href: "/masterclass/2023",
      thumbnail: "/img/poster-master-23.webp",
    },
    {
      title: {
        en: "The schedule of International Choral Festival of Preveza 2023",
        el: "Το πρόγραμμα του Διεθνούς Χορωδιακού Φεστιβάλ Πρέβεζας 2023",
      },
      date: { en: "24 June 2023", el: "24 Ιουνίου 2023" },
      href: "/festival/2023",
      thumbnail: "/img/poster-2023.webp",
    },
    {
      title: {
        en: "International Choral Festival of Preveza becomes a member of Choral Festival Network (CFN)",
        el: "Το Διεθνές Χορωδιακό Φεστιβάλ Πρέβεζας γίνεται μέλος του Δικτύου Χορωδιακών Φεστιβάλ (CFN)",
      },
      date: { en: "29 March 2019", el: "29 Μαρτίου 2019" },
      href: "/news/cfn",
      thumbnail: "/img/cfn.webp",
    },
    {
      title: {
        en: '2nd prize for the Mixed Choir in the folklore category at the 15th "Singing World" International Choir Festival in Saint Petersburg, Russia!',
        el: '2ο βραβείο για τη Μικτή Χορωδία στην κατηγορία λαϊκής μουσικής στο 15ο Διεθνές Φεστιβάλ Χορωδιών "Τραγουδώντας τον Κόσμο" στην Αγία Πετρούπολη, Ρωσία!',
      },
      date: { en: "5 October 2017", el: "5 Οκτωβρίου 2017" },
      href: "/news/saint-peter",
      thumbnail: "/img/singingworld.webp",
    },
    {
      title: {
        en: "WestEastChord – West versus East Choral Music, Erasmus+",
        el: "WestEastChord – Δυτική έναντι Ανατολικής Χορωδιακής Μουσικής, Πρόγραμμα Erasmus+",
      },
      subtitle: {
        en: "Strategic partnerships for adult education.",
        el: "Στρατηγικές εταιρικές σχέσεις για την εκπαίδευση ενηλίκων.",
      },
      date: { en: "November 2017", el: "Νοέμβριος 2017" },
      href: "/news/erasmus",
      thumbnail: "/img/erasmus.webp",
    },
  ],
  collaborations: [
    {
      name: "CFN",
      logo: "/img/cfn.webp",
      link: "https://www.choralfestivalnetwork.org/",
    },
    {
      name: "Gaude Cantem",
      logo: "/img/catem.webp",
      link: "https://gaudecantem.pl/",
    },
    {
      name: { en: 'Choir "Korais"', el: 'Χορωδία "Κοραής"' },
      logo: "/img/festivals.webp",
      link: "http://www.xorodiakorais.com/httpswwwweeblycomeditormainphp.html",
    },
    {
      name: "Info Choir Indonesia",
      logo: "/img/InfoChoirIndonesia.webp",
      link: "https://www.instagram.com/infochoir",
    },
    {
      // added 2026-10-11 (not on the legacy page; see "new content" in corrections.mjs)
      name: "Musica Orbis",
      logo: "/img/musica-orbis.webp",
      link: "https://www.musicaorbis.com/prague-festival/2027/",
    },
  ],
};

export default homePageSchema.parse(data);
