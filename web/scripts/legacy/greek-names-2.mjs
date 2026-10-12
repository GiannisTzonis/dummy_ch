// Client rule, second part (2026-10-11): on the Greek pages, non-Greek choir names, venues, titles
// of works, festivals/competitions and organisations are written in their original (Latin-script)
// form, as on the English page; towns stay in Greek. Also fixes legacy mistakes found by the
// names pass (wrong towns, a Greek letter inside a Latin name). Used by corrections.mjs.
// [file(s), Greek phrase, replacement, count per file] -- words may be split by any whitespace.
export const greekNames2 = [
  // non-Greek choir names
  [["masterclass2022Greek.html", "single-2018Greek.html", "single-2019Greek.html", "single-2021Greek.html"], "Αμπίτους", "Ambitus", 1],
  [["single-2016Greek.html"], "Αμπίτους", "Ambitus", 2],
  [["iccc2022Greek.html"], "Ροζάρτε", "Rosarte", 1],
  [["single-2017Greek.html"], "Εσθονική Τηλεοπτική Χορωδία Συναυλίας", "Estonian Television Concert Choir", 2],
  [["iccc2025Greek.html"], "Χορωδία Δωματίου Φιλαρμονικής Ταϊπέι", "Taipei Philharmonic Chamber Choir", 4],
  [["iccc2025Greek.html"], "Ταϊπέι Φιλαρμονική Χορωδία Δωματίου", "Taipei Philharmonic Chamber Choir", 2],
  [["iccc2025Greek.html"], "Χορωδία Φιλαρμονικής Ταϊπέι", "Taipei Philharmonic Chorus", 2],
  [["iccc2025Greek.html"], "Χορωδίας Φιλαρμονικής Ταϊπέι", "Taipei Philharmonic Chorus", 1],
  [["single-2018Greek.html"], "Αυτόνομη Χορωδία Πανεπιστημιού Μπουκαραμάνγκα", "Coro Universidad Autónoma de Bucaramanga", 1],
  // people known by a conventional Greek form
  [["iccc2025Greek.html"], "Μητέρας Τερέζας της Καλκούτας", "Mother Teresa", 3],
  [["iccc2025Greek.html"], "Μητέρας Τερέζας", "Mother Teresa", 1],
  [["single-2024Greek.html"], "Πάπα Ιωάννη Παύλο", "Pope John Paul II", 1],
  // venues
  [["iccc2022Greek.html"], "Κολλέγιο Αγίου Πέτρου", "Saint Peter’s College", 1],
  [["iccc2022Greek.html"], "στην εκκλησία του Αγίου Κούθμπερτ", "στη Saint Cuthbert’s Church", 1],
  [["single-2018Greek.html"], "Αγίου Βίτου", "St. Vitus", 1],
  [["single-2025Greek.html"], "Μοναστήρι του Αγίου Μαρτίνου του Τι\u0002μπάες", "Μοναστήρι São Martinho de Tibães", 1], // the legacy text has a stray control character
  [["single-2025Greek.html"], "Μοναστήρι του Αγίου Μαρτίνου", "Μοναστήρι São Martinho de Tibães", 1],
  [["single-2019Greek.html"], "Κέντρο Κένεντι", "Kennedy Center", 1],
  [["single-2019Greek.html"], "Λινκολν Κέντρο", "Lincoln Center", 1],
  [["single-2022Greek.html"], "Κέντρο Kennedy", "Kennedy Center", 1],
  [["single-2022Greek.html"], "Λίνκολν Κέντρο", "Lincoln Center", 1],
  [["masterclass2023Greek.html"], "Μαριίνσκι, Θέατρο", "Mariinsky Theatre", 1],
  [["single-2019Greek.html"], "Μονουμεντάλ Θέατρο", "Monumental Theater", 1],
  // organisations, institutions, publishers, prizes
  [["single-2018Greek.html"], "ΚΟΤΑ", "KÓTA", 1],
  [["single-2018Greek.html"], "του Ουγγρικού Συλλόγου Κοντάλυψης του Kodály", "της Hungarian Kodály Association", 1],
  [["single-2018Greek.html"], "Ανατολικό Σχολείο Μουσικής", "Eastman School of Music", 1],
  [["single-2022Greek.html"], "ΚΑΒΑΪ", "KAWAI", 1],
  [["icc2022Greek.html"], "Γουόλτον", "Walton", 1],
  [["single-2022Greek.html"], "Σταατλίτε Χοχσχουλέ φυρ Μούσικ και Νταρστέλεντε Κουνστ Στουτγάρδης", "Staatliche Hochschule für Musik und Darstellende Kunst Stuttgart", 1],
  [["masterclass2023Greek.html", "single-2016Greek.html", "single-2017Greek.html"], "Πανεπιστήμιο του ΝΤΝΟΥ - Νορβηγικό Πανεπιστήμιο Επιστήμης και Τεχνολογίας", "NTNU - The Norwegian University of Science and Technology", 1],
  // festivals and competitions
  [["single-2019Greek.html"], "Πρεόμπραγιενιε", "Preobrajenie", 1],
  [["single-2022Greek.html"], "Πρεομπράγκενιε", "Preobrajenie", 1],
  [["single-2019Greek.html"], "Ζίβα ιλ Τσάντο", "Viva il Canto", 1],
  [["single-2019Greek.html"], "Ψαλίτε Ντέο", "Psallite Deo", 1],
  [["single-2019Greek.html"], "Ζλάτνα βίλα", "Zlatna vila", 1],
  [["masterclass2019Greek.html"], "Νέοι Σολίστες των Αστούριων", "Young Soloists of the Principality of Asturias", 1],
  // titles of works and recordings
  [["icc2022Greek.html", "icc2025Greek.html"], "Τε Ντέουμ", "Te Deum", 1],
  [["single-2022Greek.html"], "Μαγνιφικάτ", "Magnificat", 1],
  [["single-2022Greek.html"], "τα Πάθη Αγίου Ιωάννη", "St. John Passion", 1],
  [["masterclass2022Greek.html"], "Σοι προσφέρομεν", "Tebe Poem", 1],
  [["masterclass2022Greek.html"], "Έργκεν Ντέντα", "Ergen Deda", 1],
  [["masterclass2022Greek.html"], "Δηλμανό, Δηλμπέρο", "Dilmano, Dilbero", 1],
  [["masterclass2022Greek.html"], "Виван Кавалджиев", "Ivan Kavaldzhiev", 1],
  [["single-2019Greek.html"], "Πρίτσαστνο", "Pričastno", 1],
  [["single-2019Greek.html"], "Β νατσάλε βιέ Σλοβο", "V načale bě Slovo", 1],
  [["single-2016Greek.html"], "Δοαμνέ, μπουζέλε, μέλε", "Doamne, buzele mele", 1],
  [["ICFP2026-el.html"], "«Ελευθερία», διασκ.", "«Eleftheria», διασκ.", 1],
  // legacy mistakes: towns (kept in Greek, corrected) and a Greek letter in a Latin name
  [["single-2016Greek.html"], "Ζάγκρεμπ, Σερβία", "Ζάιετσαρ, Σερβία", 1],
  [["single-2017Greek.html"], "Νόβι Σάντς", "Νόβι Σοντς", 3],
  [["ICFP2026-el.html"], "Gøtα", "Gøta", 1],
];

const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
export const phrase = s => new RegExp(s.split(/\s+/).map(esc).join("\\s+"), "g");
