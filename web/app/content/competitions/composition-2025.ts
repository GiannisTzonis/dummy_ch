import { competitionSchema, type CompetitionInput } from "../types";
import { person } from "../people";

const data: CompetitionInput = {
  slug: "composition-2025",
  kind: "composition",
  year: 2025,
  editionNumber: 2,
  poster: "/img/icc2025.webp",
  title: {
    en: "2nd International Choral Composition Competition of Preveza",
    el: "2ος Διεθνής Διαγωνισμός Σύνθεσης Πρέβεζας",
  },
  intro: { en: [], el: [] },
  content: {
    en: [
      {
        "narrow": 6
      },
      "With great joy and sincere gratitude, we are pleased to announce that so many composers responded to our call. Your trust, creativity, and courage to share your music with an international audience have deeply moved us. The jury faced a truly demanding task, as many of the submitted works were of an exceptionally high artistic level. Each score carried its own world — its own story, colors, sonic imagination, and authentic artistic voice. Composers from Italy, Poland, Austria, Switzerland, Germany, Hungary, Spain, Denmark, Ireland, Brazil, USA, Philippines, Belarus, Mexico, New Zealand, Singapore and Greece took part in the competition, confirming that this event is becoming an important meeting point for diverse aesthetics, cultures, and creative perspectives.",
      {
        "narrow": 0
      },
      {
        "narrow": 6
      },
      {
        "img": "/img/icc2025.webp"
      },
      {
        "narrow": 0
      },
      {
        "heading": "International Jury Committee I.J.C.",
        "level": 2,
        "align": "center"
      },
      ...person("ambroz-copi", "en", {level: 3}),
      ...person("pawel-lukaszewski", "en", {level: 3,align: "right"}),
      ...person("josu-elberdin-badiola", "en", {level: 3}),
      ...person("ko-matsushita", "en", {level: 3,align: "right"}),
      {
        "narrow": 8
      },
      {
        "heading": "Awards",
        "level": 1,
        "align": "center"
      },
      {
        "heading": "Category A (Mixed Choirs)",
        "level": 4,
        "align": "center"
      },
      {
        "list": [
          "1st PRIZE, €700 Gold Medal & Diploma JUBILATE DOMINO – Castagna Gianpiero / Italy",
          "2nd PRIZE, €500 Silver Medal & Diploma WINGS OF LIGHT – AD VOLANDUM NATI SUMUS - Nasti Monica, Italy",
          "3rd PRIZE, €350 Bronze Medal & Diploma ODE TO THE UNIVERSE – Nasti Daniela, Italy",
          "SPECIAL AWARD for the Best Composition by a Composer Born after 10 May 2000 Calegari Valerio / Italy",
          "SPECIAL AWARD for the Best Composition by a Greek Composer Kalogeropoulos Dionisis & Vavoulas Giorgos",
          "SPECIAL AWARD for the Best Orthodox Composition Not Awarded."
        ],
        "align": "center"
      },
      {
        "list": [
          "Recommended Works for Performance:",
          "OF THE THINGS WE LOVE – COGNITO PARIT AMOREM - Nasti Monica, Italy",
          "SANCTE MICHAEL ARCHANGELE - Kalogeropoulos Dionisis / Greece",
          "KYRIE - Vavoulas Giorgos / Greece",
          "MADRE TERRA - Nasti Daniele, Italy",
          "TO A BRIDE - Calegari Valerio / Italy",
          "THE SPLENDOUR FALLS - Artley Chris / New Zealand",
          "AVE MARIS STELLA - Nyary Bruno / Hungary",
          "GRATIA DOMINI - Töröcsik Kristof / Hungary"
        ],
        "align": "center"
      },
      {
        "img": "/img/icc2025f.webp"
      },
      {
        "img": "/img/icc2025g.webp"
      },
      {
        "img": "/img/icc2025h.webp"
      },
      {
        "img": "/img/icc2025i.webp"
      },
      {
        "heading": "Category B (Children’s Choirs)",
        "level": 4,
        "align": "center"
      },
      {
        "img": "/img/icc2025a.webp"
      },
      {
        "img": "/img/icc2025b.webp"
      },
      {
        "img": "/img/icc2025c.webp"
      },
      {
        "img": "/img/icc2025d.webp"
      },
      {
        "img": "/img/icc2025e.webp"
      },
      {
        "list": [
          "1st PRIZE, €500 Gold Medal & Diploma Not Awarded.",
          "2nd PRIZE, €350 Silver Medal & Diploma TREES – Sposetti Stefano / Italy",
          "2nd PRIZE, €350 Silver Medal & Diploma I PAINTED A PEACE – Berzero Roberto / Italy",
          "3rd PRIZE, €200 Bronze Medal & Diploma MOONLIGHT – Castagna Giampiero / Italy"
        ],
        "align": "center"
      },
      {
        "narrow": 0
      },
      "“We extend our warmest thanks to all composers for their participation. Through your creativity, you have enriched contemporary choral literature and made a meaningful contribution to the development and promotion of vocal art.\n\nWe firmly believe that these new works will come alive on concert stages, in the hearts of singers and audiences alike, conveying to the world the message of music that transcends borders, unites people, and continually inspires us.\n\nThank you for contributing to shaping the future of choral art.\nPreveza, 18 February 2026”"
    ],
    el: [
      {
        "narrow": 6
      },
      "Με μεγάλη χαρά και ειλικρινή ευγνωμοσύνη, ανακοινώνουμε ότι τόσοι πολλοί συνθέτες ανταποκρίθηκαν στο κάλεσμά μας. Η εμπιστοσύνη σας, η δημιουργικότητά σας και το θάρρος σας να μοιραστείτε τη μουσική σας με ένα διεθνές κοινό μάς συγκίνησαν βαθιά. Η κριτική επιτροπή βρέθηκε αντιμέτωπη με ένα πραγματικά απαιτητικό έργο, καθώς πολλές από τις υποβληθείσες συνθέσεις ήταν εξαιρετικά υψηλού καλλιτεχνικού επιπέδου. Κάθε παρτιτούρα έκρυβε τον δικό της κόσμο — τη δική της ιστορία, τα δικά της χρώματα, τη δική της ηχητική φαντασία και μια αυθεντική καλλιτεχνική φωνή. Στον διαγωνισμό συμμετείχαν συνθέτες από την Ιταλία, την Πολωνία, την Αυστρία, την Ελβετία, τη Γερμανία, την Ουγγαρία, την Ισπανία, τη Δανία, την Ιρλανδία, τη Βραζιλία, τις ΗΠΑ, τις Φιλιππίνες, τη Λευκορωσία, το Μεξικό, τη Νέα Ζηλανδία, τη Σιγκαπούρη και την Ελλάδα, επιβεβαιώνοντας ότι ο θεσμός αυτός εξελίσσεται σε ένα σημαντικό σημείο συνάντησης διαφορετικών αισθητικών, πολιτισμών και δημιουργικών προσεγγίσεων.",
      {
        "narrow": 0
      },
      {
        "narrow": 6
      },
      {
        "img": "/img/icc2025.webp"
      },
      {
        "narrow": 0
      },
      {
        "heading": "Διεθνής Επιτροπή Κριτών Δ.Ε.Κ.",
        "level": 2,
        "align": "center"
      },
      ...person("ambroz-copi", "el", {level: 3}),
      ...person("pawel-lukaszewski", "el", {level: 3,align: "right"}),
      ...person("josu-elberdin-badiola", "el", {level: 3}),
      ...person("ko-matsushita", "el", {level: 3,align: "right"}),
      {
        "narrow": 8
      },
      {
        "heading": "Βραβεία",
        "level": 1,
        "align": "center"
      },
      {
        "heading": "Κατηγορία Α (Μικτές Χορωδίες)",
        "level": 4,
        "align": "center"
      },
      {
        "img": "/img/icc2025f.webp"
      },
      {
        "img": "/img/icc2025g.webp"
      },
      {
        "img": "/img/icc2025h.webp"
      },
      {
        "img": "/img/icc2025i.webp"
      },
      {
        "list": [
          "1ο ΒΡΑΒΕΙΟ, 700 € Χρυσό Μετάλλιο & Δίπλωμα JUBILATE DOMINO - Castagna Gianpiero / Ιταλία",
          "2ο ΒΡΑΒΕΙΟ, 500 €, Αργυρό Μετάλλιο και Δίπλωμα WINGS OF LIGHT – AD VOLANDUM NATI SUMUS - Nasti Monica, Ιταλία",
          "3ο ΒΡΑΒΕΙΟ, 350 €, Χάλκινο Μετάλλιο και Δίπλωμα ODE TO THE UNIVERSE - Nasti Daniela, Ιταλία",
          "ΕΙΔΙΚΟ ΒΡΑΒΕΙΟ για την καλύτερη σύνθεση από συνθέτη γεννημένο μετά τις 10 Μαΐου 2000 Calegari Valerio / Ιταλία",
          "ΕΙΔΙΚΟ ΒΡΑΒΕΙΟ για την καλύτερη σύνθεση Έλληνα συνθέτη Καλογερόπουλος Διονύσης & Βαβούλας Γιώργος",
          "ΕΙΔΙΚΟ ΒΡΑΒΕΙΟ για την καλύτερη ορθόδοξη σύνθεση Δεν απονεμήθηκε."
        ],
        "align": "center"
      },
      {
        "list": [
          "Προτεινόμενα Έργα για Εκτέλεση:",
          "OF THE THINGS WE LOVE – COGNITO PARIT AMOREM - Nasti Monica, Ιταλία",
          "SANCTE MICHAEL ARCHANGELE - Καλογερόπουλος Διονύσης / Ελλάδα",
          "KYRIE - Βαβούλας Γιώργος / Ελλάδα",
          "MADRE TERRA - Nasti Daniele, Ιταλία",
          "TO A BRIDE - Calegari Valerio / Ιταλία",
          "THE SPLENDOUR FALLS - Artley Chris / Νέα Ζηλανδία",
          "AVE MARIS STELLA - Nyary Bruno / Ουγγαρία",
          "GRATIA DOMINI - Töröcsik Kristof / Ουγγαρία"
        ],
        "align": "center"
      },
      {
        "heading": "Κατηγορία Β (Παιδικές Χορωδίες)",
        "level": 4,
        "align": "center"
      },
      {
        "img": "/img/icc2025a.webp"
      },
      {
        "img": "/img/icc2025b.webp"
      },
      {
        "img": "/img/icc2025c.webp"
      },
      {
        "img": "/img/icc2025d.webp"
      },
      {
        "img": "/img/icc2025e.webp"
      },
      {
        "list": [
          "1ο ΒΡΑΒΕΙΟ, 500 € Χρυσό Μετάλλιο & Δίπλωμα Δεν απονεμήθηκε.",
          "2ο ΒΡΑΒΕΙΟ, 350 €, Αργυρό Μετάλλιο και Δίπλωμα TREES - Sposetti Stefano / Ιταλία",
          "2ο ΒΡΑΒΕΙΟ, 350 €, Αργυρό Μετάλλιο και Δίπλωμα I PAINTED A PEACE - Berzero Roberto / Ιταλία",
          "3ο ΒΡΑΒΕΙΟ, 200 €, Χάλκινο Μετάλλιο και Δίπλωμα MOONLIGHT - Castagna Giampiero / Ιταλία"
        ],
        "align": "center"
      },
      {
        "narrow": 0
      },
      "\"Εκφράζουμε τις θερμές μας ευχαριστίες σε όλους τους συνθέτες για τη συμμετοχή τους. Μέσα από τη δημιουργικότητά σας, εμπλουτίσατε τη σύγχρονη χορωδιακή φιλολογία και συμβάλατε ουσιαστικά στην ανάπτυξη και προβολή της φωνητικής τέχνης.\n\nΠιστεύουμε ακράδαντα ότι τα νέα αυτά έργα θα ζωντανέψουν στις συναυλιακές σκηνές, στις καρδιές των τραγουδιστών και του κοινού, μεταφέροντας στον κόσμο το μήνυμα της μουσικής που υπερβαίνει τα σύνορα, ενώνει τους ανθρώπους και μας εμπνέει διαρκώς.\n\nΣας ευχαριστούμε που συμβάλλετε στη διαμόρφωση του μέλλοντος της χορωδιακής τέχνης.\nΠρέβεζα, 18 Φεβρουαρίου 2026\""
    ],
  },
};

export default competitionSchema.parse(data);
