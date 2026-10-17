// The compulsory works of the 31st International Choral Competition (2027), Categories A and C:
// the works and their order as the competition rules (RulesICCP2027.docx) list them; the scores
// and recordings as the Organizing Committee sent them (public/compulsory-works-2027/). Voicing,
// text and duration as each score prints them (left out where the score does not say).
// Hand-maintained in all six languages (titles and names as written by the composers).

type Text = { en: string; el: string; fr: string; it: string; de: string; es: string };

export type CompulsoryWork = {
  title: string;
  subtitle?: string;
  composer: string;
  country: Text;
  prize: 1 | 2 | 3;
  voicing: Text;
  text?: Text;
  duration?: string;
  score: string;
  audio?: string;
  note?: Text;
};

const DIR = "/compulsory-works-2027";
const italy: Text = { en: "Italy", el: "Ιταλία", fr: "Italie", it: "Italia", de: "Italien", es: "Italia" };

export const page = {
  intro: {
    en: "In addition to the four works of its repertoire, each choir in **Category A** and **Category C** must perform **one compulsory work**, selected from the compositions proposed by the Organizing Committee. All six were awarded at the [2nd International Choral Composition Competition of Preveza](@/competition/composition-2025). Their scores can be downloaded below, together with the recordings that are available.",
    el: "Εκτός από τα τέσσερα έργα του ρεπερτορίου της, κάθε χορωδία της **Κατηγορίας Α** και της **Κατηγορίας Γ** πρέπει να ερμηνεύσει **ένα υποχρεωτικό έργο**, επιλέγοντάς το από τις συνθέσεις που προτείνει η Οργανωτική Επιτροπή. Και τα έξι βραβεύτηκαν στον [2ο Διεθνή Διαγωνισμό Χορωδιακής Σύνθεσης Πρέβεζας](@/competition/composition-2025). Οι παρτιτούρες τους διατίθενται παρακάτω, μαζί με τις ηχογραφήσεις που υπάρχουν.",
    fr: "En plus des quatre œuvres de son répertoire, chaque chœur des **catégories A** et **C** doit interpréter **une œuvre imposée**, choisie parmi les compositions proposées par le Comité d'organisation. Les six ont été primées au [2e Concours international de composition chorale de Preveza](@/competition/composition-2025). Leurs partitions peuvent être téléchargées ci-dessous, avec les enregistrements disponibles.",
    it: "Oltre ai quattro brani del proprio repertorio, ogni coro delle **Categorie A** e **C** deve eseguire **un brano d'obbligo**, scelto tra le composizioni proposte dal Comitato organizzatore. Tutti e sei sono stati premiati al [2° Concorso internazionale di composizione corale di Preveza](@/competition/composition-2025). Le partiture si possono scaricare qui sotto, insieme alle registrazioni disponibili.",
    de: "Zusätzlich zu den vier Werken seines Repertoires muss jeder Chor der **Kategorien A** und **C** **ein Pflichtstück** aufführen, ausgewählt aus den vom Organisationskomitee vorgeschlagenen Kompositionen. Alle sechs wurden beim [2. Internationalen Chorkompositionswettbewerb Preveza](@/competition/composition-2025) ausgezeichnet. Ihre Partituren können unten heruntergeladen werden, zusammen mit den vorhandenen Aufnahmen.",
    es: "Además de las cuatro obras de su repertorio, cada coro de las **categorías A** y **C** debe interpretar **una obra obligatoria**, elegida entre las composiciones propuestas por el Comité Organizador. Las seis fueron premiadas en el [2.º Concurso Internacional de Composición Coral de Preveza](@/competition/composition-2025). Sus partituras pueden descargarse a continuación, junto con las grabaciones disponibles.",
  } as Text,
  categories: [
    {
      id: "category-a",
      name: {
        en: "Category A – Mixed Choirs",
        el: "Κατηγορία Α – Μικτές χορωδίες",
        fr: "Catégorie A – Chœurs mixtes",
        it: "Categoria A – Cori misti",
        de: "Kategorie A – Gemischte Chöre",
        es: "Categoría A – Coros mixtos",
      } as Text,
      works: [
        {
          title: "Jubilate Domino",
          composer: "Gianpiero Castagna",
          country: italy,
          prize: 1,
          voicing: {
            en: "Mixed choir SMsATB, a cappella",
            el: "Μικτή χορωδία SMsATB, a cappella",
            fr: "Chœur mixte SMsATB, a cappella",
            it: "Coro misto SMsATB, a cappella",
            de: "Gemischter Chor SMsATB, a cappella",
            es: "Coro mixto SMsATB, a cappella",
          },
          text: { en: "Psalm 99 (100)", el: "Ψαλμός 99 (100)", fr: "Psaume 99 (100)", it: "Salmo 99 (100)", de: "Psalm 99 (100)", es: "Salmo 99 (100)" },
          score: `${DIR}/jubilate-domino-castagna.pdf`,
        },
        {
          title: "Wings of Light",
          subtitle: "Ad volandum nati sumus",
          composer: "Monica Nasti",
          country: italy,
          prize: 2,
          voicing: {
            en: "Mixed choir SMsATB, a cappella",
            el: "Μικτή χορωδία SMsATB, a cappella",
            fr: "Chœur mixte SMsATB, a cappella",
            it: "Coro misto SMsATB, a cappella",
            de: "Gemischter Chor SMsATB, a cappella",
            es: "Coro mixto SMsATB, a cappella",
          },
          duration: "~ 4'",
          score: `${DIR}/wings-of-light-nasti.pdf`,
        },
        {
          title: "Ode to the Universe",
          composer: "Daniela Nasti",
          country: italy,
          prize: 3,
          voicing: {
            en: "Mixed choir SMsATB, a cappella",
            el: "Μικτή χορωδία SMsATB, a cappella",
            fr: "Chœur mixte SMsATB, a cappella",
            it: "Coro misto SMsATB, a cappella",
            de: "Gemischter Chor SMsATB, a cappella",
            es: "Coro mixto SMsATB, a cappella",
          },
          text: { en: "Daniela Nasti", el: "Daniela Nasti", fr: "Daniela Nasti", it: "Daniela Nasti", de: "Daniela Nasti", es: "Daniela Nasti" },
          duration: "4'15\"",
          score: `${DIR}/ode-to-the-universe-nasti.pdf`,
        },
      ] as CompulsoryWork[],
    },
    {
      id: "category-c",
      name: {
        en: "Category C – Children’s Choirs",
        el: "Κατηγορία Γ – Παιδικές χορωδίες",
        fr: "Catégorie C – Chœurs d'enfants",
        it: "Categoria C – Cori di voci bianche",
        de: "Kategorie C – Kinderchöre",
        es: "Categoría C – Coros infantiles",
      } as Text,
      works: [
        {
          title: "Trees",
          composer: "Stefano Sposetti",
          country: italy,
          prize: 2,
          voicing: {
            en: "Children's choir SMsA, piano and body percussion",
            el: "Παιδική χορωδία SMsA, πιάνο και κρουστά σώματος",
            fr: "Chœur d'enfants SMsA, piano et percussions corporelles",
            it: "Coro di voci bianche SMsA, pianoforte e body percussion",
            de: "Kinderchor SMsA, Klavier und Body-Percussion",
            es: "Coro infantil SMsA, piano y percusión corporal",
          },
          text: { en: "Joyce Kilmer", el: "Joyce Kilmer", fr: "Joyce Kilmer", it: "Joyce Kilmer", de: "Joyce Kilmer", es: "Joyce Kilmer" },
          duration: "~ 2'50\"",
          score: `${DIR}/trees-sposetti.pdf`,
          audio: `${DIR}/trees-sposetti.mp3`,
        },
        {
          title: "I painted peace",
          composer: "Roberto Berzero",
          country: italy,
          prize: 2,
          voicing: {
            en: "Children's choir in 3 parts (S, Ms, A) and piano",
            el: "Τρίφωνη παιδική χορωδία (S, Ms, A) και πιάνο",
            fr: "Chœur d'enfants à 3 voix (S, Ms, A) et piano",
            it: "Coro di voci bianche a 3 voci (S, Ms, A) e pianoforte",
            de: "Dreistimmiger Kinderchor (S, Ms, A) und Klavier",
            es: "Coro infantil a 3 voces (S, Ms, A) y piano",
          },
          text: { en: "Tali Sorek", el: "Tali Sorek", fr: "Tali Sorek", it: "Tali Sorek", de: "Tali Sorek", es: "Tali Sorek" },
          duration: "3'00\"",
          score: `${DIR}/i-painted-peace-berzero.pdf`,
          audio: `${DIR}/i-painted-peace-berzero.mp3`,
          note: {
            en: "Recording with a virtual choir. The individual voice parts can be requested from the composer: info@robertoberzero.com",
            el: "Ηχογράφηση με εικονική χορωδία. Οι μεμονωμένες φωνές μπορούν να ζητηθούν από τον συνθέτη: info@robertoberzero.com",
            fr: "Enregistrement avec un chœur virtuel. Les voix séparées peuvent être demandées au compositeur : info@robertoberzero.com",
            it: "Registrazione con coro virtuale. Le singole parti vocali possono essere richieste al compositore: info@robertoberzero.com",
            de: "Aufnahme mit virtuellem Chor. Die einzelnen Stimmen können beim Komponisten angefragt werden: info@robertoberzero.com",
            es: "Grabación con coro virtual. Las voces por separado pueden solicitarse al compositor: info@robertoberzero.com",
          },
        },
        {
          title: "Moonlight",
          composer: "Gianpiero Castagna",
          country: italy,
          prize: 3,
          voicing: {
            en: "Children's choir SMsA, a cappella",
            el: "Παιδική χορωδία SMsA, a cappella",
            fr: "Chœur d'enfants SMsA, a cappella",
            it: "Coro di voci bianche SMsA, a cappella",
            de: "Kinderchor SMsA, a cappella",
            es: "Coro infantil SMsA, a cappella",
          },
          text: { en: "the composer", el: "ο συνθέτης", fr: "le compositeur", it: "il compositore", de: "der Komponist", es: "el compositor" },
          score: `${DIR}/moonlight-castagna.pdf`,
          audio: `${DIR}/moonlight-castagna.mp3`,
        },
      ] as CompulsoryWork[],
    },
  ],
};

export const labels = {
  prize: {
    1: { en: "1st Prize, Gold Medal & Diploma", el: "1ο Βραβείο, Χρυσό Μετάλλιο & Δίπλωμα", fr: "1er prix, médaille d'or et diplôme", it: "1° premio, medaglia d'oro e diploma", de: "1. Preis, Goldmedaille und Diplom", es: "1.er premio, medalla de oro y diploma" },
    2: { en: "2nd Prize, Silver Medal & Diploma", el: "2ο Βραβείο, Αργυρό Μετάλλιο & Δίπλωμα", fr: "2e prix, médaille d'argent et diplôme", it: "2° premio, medaglia d'argento e diploma", de: "2. Preis, Silbermedaille und Diplom", es: "2.º premio, medalla de plata y diploma" },
    3: { en: "3rd Prize, Bronze Medal & Diploma", el: "3ο Βραβείο, Χάλκινο Μετάλλιο & Δίπλωμα", fr: "3e prix, médaille de bronze et diplôme", it: "3° premio, medaglia di bronzo e diploma", de: "3. Preis, Bronzemedaille und Diplom", es: "3.er premio, medalla de bronce y diploma" },
  } as Record<1 | 2 | 3, Text>,
  text: { en: "Text:", el: "Κείμενο:", fr: "Texte :", it: "Testo:", de: "Text:", es: "Texto:" } as Text,
  duration: { en: "Duration:", el: "Διάρκεια:", fr: "Durée :", it: "Durata:", de: "Dauer:", es: "Duración:" } as Text,
  score: { en: "Score (PDF)", el: "Παρτιτούρα (PDF)", fr: "Partition (PDF)", it: "Partitura (PDF)", de: "Partitur (PDF)", es: "Partitura (PDF)" } as Text,
  recording: { en: "Recording", el: "Ηχογράφηση", fr: "Enregistrement", it: "Registrazione", de: "Aufnahme", es: "Grabación" } as Text,
};
