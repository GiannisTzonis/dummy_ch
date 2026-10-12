import { festivalSchema, type FestivalInput } from "../types";
import { person } from "../people";
import { choir } from "../choirs";

const data: FestivalInput = {
  slug: "2026",
  year: 2026,
  editionNumber: 44,
  competitionEditionNumber: 30,
  isCurrentEdition: true,
  pageTitle: {
    en: "44th International Choral Festival of Preveza 2026 | Armonia Choir",
    el: "44ο Διεθνές Χορωδιακό Φεστιβάλ Πρέβεζας 2026 | Χορωδία Αρμονία",
  },
  // Listing/meta only -- the page itself shows the dates as printed in `content`.
  dates: {
    en: "6–12 July 2026",
    el: "6–12 Ιουλίου 2026",
  },
  poster: "/img/fest-2026.webp",
  title: {
    en: "44th International Choral Festival of Preveza",
    el: "44ο Διεθνές Χορωδιακό Φεστιβάλ Πρέβεζας",
  },
  intro: { en: [], el: [] },
  content: {
    en: [
      "44th International Choral Festival of Preveza",
      {
        "list": [
          "6–12 July 2026"
        ]
      },
      {
        "img": "/img/fest-2026.webp"
      },
      {
        "wide": true
      },
      "Dear colleagues and friends, We are pleased to inform you that the 2nd International Choral Composition Competition – Preveza 2025 has been successfully completed.\nA total of 45 works were submitted by composers from 16 countries, which confirms the strong international interest in our festival as well as in new choral music. We are now delighted to cordially invite you and your choir to our next major event:",
      "44th International Choral Festival of Preveza 30th International Choral Competition of Preveza Preveza, Greece – 6–12 July 2026",
      "The competition includes categories for:",
      {
        "list": [
          "- mixed choirs",
          "- equal-voice choirs (female / male)",
          "- youth and children’s choirs",
          "- sacred and contemporary music",
          "- senior choirs (60+) with free repertoire and optional accompaniment"
        ]
      },
      "All participating choirs will receive a diploma and detailed feedback from the international jury.\n\nThe best choirs will be awarded gold, silver, or bronze medals, and selected performances will be published on the official [YouTube channel](https://www.youtube.com/@internationalchoralfestiva8318/videos) of the festival.",
      "Within the framework of the 44th International Choral Festival of Preveza, a new cycle of masterclasses for choral conductors is also held (6–8 July 2026).",
      "For the full regulations and application information, please contact us by email or visit our website.",
      "Contact: [prevezachoralfestival@gmail.com](mailto:prevezachoralfestival@gmail.com) More information: [www.armoniachoir.org](https://www.armoniachoir.org) Phone / WhatsApp: [+30 6977 132107](tel:+306977132107)",
      "We would be very happy to welcome your choir in Preveza and share with you an inspiring musical experience by the sea in 2026. Sincerely,\nKosmas Koronaios\nPresident – International Choral Festival of Preveza",
      {
        "p": "Preveza · 6–12 July 2026",
        "align": "center"
      },
      "A week of competition, concerts and street performances across the city — with the 30th International Choral Competition at its heart.",
      "Competition Concert Ceremony Street performance Seminar Social",
      {
        "list": [
          "[Mon 6](#en-mon)",
          "[Tue 7](#en-tue)",
          "[Wed 8](#en-wed)",
          "[Thu 9](#en-thu)",
          "[Fri 10](#en-fri)",
          "[Sat 11](#en-sat)",
          "[Sun 12](#en-sun)"
        ]
      },
      {
        "anchor": "en-mon"
      },
      {
        "heading": "Monday 6 July 2026",
        "level": 2
      },
      "10:00 – 20:30 Seminar",
      {
        "heading": "7th International Seminar & Masterclass for Choral Conductors",
        "level": 3
      },
      "Municipality of Preveza Art Gallery (Athanasiadis' House) In collaboration with the Ave Chamber Choir from Ljubljana (SI), under the musical direction of Ambrož Čopi (SI) and Marco Antonio García de Paz (ES).",
      {
        "anchor": "en-tue"
      },
      {
        "heading": "Tuesday 7 July 2026",
        "level": 2
      },
      "10:00 – 20:30 Seminar",
      {
        "heading": "7th International Seminar & Masterclass for Choral Conductors",
        "level": 3
      },
      "Municipality of Preveza Art Gallery (Athanasiadis' House) In collaboration with the Ave Chamber Choir from Ljubljana (SI), under the musical direction of Ambrož Čopi (SI) and Marco Antonio García de Paz (ES).",
      {
        "anchor": "en-wed"
      },
      {
        "heading": "Wednesday 8 July 2026",
        "level": 2
      },
      "10:00 – 18:00 Seminar",
      {
        "heading": "7th International Seminar & Masterclass for Choral Conductors",
        "level": 3
      },
      "Municipality of Preveza Art Gallery (Athanasiadis' House) In collaboration with the Ave Chamber Choir from Ljubljana (SI), under the musical direction of Ambrož Čopi (SI) and Marco Antonio García de Paz (ES).",
      "21:00 Ceremony",
      {
        "heading": "Closing Concert of the Masterclass 2026 & Award Ceremony of the 2nd International Choral Composition Competition — Preveza 2025",
        "level": 3
      },
      "Church of Sts. Constantine & Helen",
      "Ave Chamber Choir, Ljubljana SI — Conductor: Ambrož Čopi Preveza Children's Choir \"Armonia\", GR — Conductor: Anelia Stefanova",
      {
        "anchor": "en-thu"
      },
      {
        "heading": "Thursday 9 July 2026",
        "level": 2
      },
      "19:00 Street performance",
      {
        "heading": "Street performances around the city",
        "level": 3
      },
      "Participating choirs (7)",
      {
        "list": [
          "Female Chamber Choir Caloroso, Mol BE — Jasmien Gys",
          "Sincoro coro di Arcigay, Rome IT — Camilo Vasquez",
          "Children's Choir \"Okarina\", Prishtina XK — Elikonë Hysaj Shala",
          "Choir PRIMO Secondary School nr1, Bydgoszcz PL — Monika Wilkiewicz",
          "Belcantes of Agios Andreas Eglykadas, Patra GR — Elena Droukopoulou",
          "Youth Choir Elefteria, Chisinau MD — Dorin Bîtcă",
          "Resonans con tutti, Zabrze PL — Arlena Różycka-Gałązka & Waldemar Gałązka"
        ]
      },
      "19:30 Social",
      {
        "heading": "Welcome meeting with heads of delegations & official guests",
        "level": 3
      },
      "Headquarters of the \"Armonia\" Choir of Preveza",
      "20:30 Social",
      {
        "heading": "Parade of all choirs to the Open Garden Theatre",
        "level": 3
      },
      "From Androutsos' Square to the \"Giannis Ritsos\" Open Garden Theatre",
      "21:00 Concert",
      {
        "heading": "Welcome Serenade from the Ionian Sea",
        "level": 3
      },
      "\"Giannis Ritsos\" Open Garden Theatre Choir & repertoire",
      "Argostoli Choir & Mandolin Orchestra, Kefalonia GR — Spyros Theotokatos",
      {
        "list": [
          "\"Apopse tin kithara mou\" — Cephalonian arietta",
          "\"Ola t' Aprili ta louloudia\" — Poetry: G. Athanas (1893–1987), Music: Dionysios Lavrangas (1860–1941)",
          "\"To kleidaki\" — Cephalonian kantada",
          "\"Xenos eimai\" — Cephalonian kantada",
          "\"Laloun t' aidonia\" — Poetry: G. Athanas (1893–1987), Music: Dionysios Lavrangas (1860–1941)",
          "\"Kefalonia\" — Dionysios Apostolatos (1926–2009)",
          "\"To karavi\" — Lyrics: Sotiris Galiatsatos, Music: Spyros Markatos"
        ]
      },
      "21:30 Ceremony",
      {
        "heading": "Opening Ceremony",
        "level": 3
      },
      "\"Giannis Ritsos\" Open Garden Theatre Greetings by local authorities and presentation of the choirs taking part in the 44th International Choral Festival of Preveza. Choirs in the ceremony & repertoire (12)",
      "Choir PRIMO Secondary School nr1, Bydgoszcz PL — Monika Wilkiewicz\n\"Prząśniczka\", Stanisław Moniuszko (1819–1872) Choir \"Anatoli\", Limassol CY — Fr. Nikolaos Lympouridis\n\"Psintri Vasilitzia mou\", traditional song of Cyprus Essence of Elements, Rome IT — Jorge Arturo Higuera\n\"Earth Song\", Michael Jackson (1958–2009) Female Chamber Choir Caloroso, Mol BE — Jasmien Gys\n\"Annan polska\", Anna-Mari Kähärä (b. 1963) Youth Choir Elefteria, Chisinau MD — Dorin Bîtcă\n\"Vine hulpe di la munte\", Adrian Pop (b. 1951) Belcantes of Agios Andreas Eglykadas, Patra GR — Elena Droukopoulou · piano: Konstantina Androutsopoulou\n\"Trito stefani\", Stamatis Kraounakis (b. 1955), arr. Loukas Adamopoulos Transilvania Choir, Brașov RO — Mihaela Mureșan\n\"Hora staccato\", Nicolae Gâscă (b. 1942) Sincoro coro di Arcigay, Rome IT — Camilo Vasquez\n\"Believe / Open Your Heart / Borderline / How Will I Know\" — mash-up of songs by Cher, Madonna & Whitney Houston Asociația Corală Academica Bucovina, Câmpulung Moldovenesc RO — Emil Forfotă\n\"Sârba pe loc\", Gheorghe Danga (1905–1959) Novi Sad's Jewish Community Choir \"Hashira\", Novi Sad RS — Vesna Kesić Krsmanović\n\"Fiddler on the Roof\", Jerry Bock (1928–2010), arr. Ed Lojeski The All-American Boys Chorus, Anaheim CA US — Wesley Martin\n\"Band of Brothers\", Michael Kamen (1948–2003) Izar Argia Abesbatza, Larrabetzu ES — Aintzane Garamendi Eguren\n\"Medley Euskal Kantak\" (\"Txoriak Txori\", \"Aitormena\", \"Sagarra Jo\") — Mikel Laboa (1934–2008), Josu Zabala (b. 1954) & Kalakan",
      {
        "anchor": "en-fri"
      },
      {
        "heading": "Friday 10 July 2026",
        "level": 2
      },
      "10:00 Competition Category G",
      {
        "heading": "30th International Choral Competition",
        "level": 3
      },
      "Cultural Centre of the Holy Metropolis Competing choirs & repertoire (4)",
      "Choir PRIMO Secondary School nr1, Bydgoszcz PL — Monika Wilkiewicz",
      {
        "list": [
          "\"Moja piosenka\", Józef Świder (1930–2014)",
          "\"Dominus illuminatio mea\", Marek Raczyński (b. 1982)",
          "\"Modlitwa do Bogarodzicy\", Józef Świder (1930–2014)",
          "\"Leć głosie po rosie\", Marcin Wawruk (b. 1963)",
          "\"Krzak dzikiej róży\", Antoni Szaliński (1925–1997)",
          "\"Listening\", Anna Rochawska-Musiałczyk (b. 1987)"
        ]
      },
      "Female Chamber Choir Caloroso, Mol BE — Jasmien Gys",
      {
        "list": [
          "\"Is Our Microphone On?\", Søren Møller (b. 1975)",
          "\"Through the House Give Glimmering Light\", Amy Beach (1867–1944)",
          "\"Jesu Pie\", Rudi Tas (b. 1957)",
          "\"Annan Polska\", Anna-Mari Kähärä (b. 1963)"
        ]
      },
      "Makeblijde, Zele BE — Filip Haentjens",
      {
        "list": [
          "\"O Oriëns\", Paweł Łukaszewski (b. 1968)",
          "\"Verba Mea\", Vic Nees (1936–2013)",
          "\"Ave Maria\", Gustav Holst (1874–1934)",
          "\"Spes Mia\", Mia Makaroff (b. 1970)"
        ]
      },
      "Belcantes of Agios Andreas Eglykadas, Patra GR — Elena Droukopoulou · violin: Evi Gkioni · piano: Konstantina Androutsopoulou",
      {
        "list": [
          "\"Salve Regina\", Josu Elberdin (b. 1976)",
          "\"Trisagion\", Iryna Aleksiychuk (b. 1967)",
          "\"Stars\", Ēriks Ešenvalds (b. 1977)",
          "\"Wah-Bah-Dah-Bah-Doo-Bee\", Ivo Antognini (b. 1963)"
        ]
      },
      "13:00 Competition Category G — continued",
      {
        "heading": "30th International Choral Competition",
        "level": 3
      },
      "Cultural Centre of the Holy Metropolis Competing choirs & repertoire (4)",
      "Transilvania Choir, Brașov RO — Mihaela Mureșan",
      {
        "list": [
          "\"Fair Phillis\", John Farmer (1570–1601)",
          "\"Rugăciune\", Dan Pavelescu (b. 1952)",
          "\"Și altfel de variațiuni pe tema Chindiei\", Alexandru Pașcanu (1920–1989)",
          "\"Father Thunder\", Laura Jēkabsone (b. 1985)"
        ]
      },
      "Novi Sad's Jewish Community Choir \"Hashira\", Novi Sad RS — Vesna Kesić Krsmanović",
      {
        "list": [
          "\"Otče naš\", Josif Marinković (1851–1931)",
          "\"Anenu\", Aleksandar S. Vujić (1945–2017)",
          "\"Ma Towu\", Louis Lewandowski (1821–1894)",
          "\"Salmo 150\", Ernani Aguiar (b. 1950)",
          "\"Con el vito\", Manuel Massotti Littel (1915–1999)",
          "\"Lindjo\", Vladimir Berdović (1906–1980)"
        ]
      },
      "Gøtu Kirkju Ungdómskór (Gøta Church Youth Choir), Gøta FO — Símun Hammer",
      {
        "list": [
          "\"Gøta\", Peder Karlsson (b. 1963)",
          "\"Plaudite manibus\", Branko Stark (b. 1954)",
          "\"Harra Guð títt dýra navn…\", Símun Hammer (b. 1964)",
          "\"Jubilate Deo\", Giovanni Gabrieli (1554/1557–1612)"
        ]
      },
      "The Academic Choir Maribor, Maribor SI — Uroš Jurgec",
      {
        "list": [
          "\"O Sapientia quae ex ore Altissimi\", Jacobus Handl Gallus (1550–1591)",
          "\"Vsenoščnoe bdenie, op. 37: 6. Bogoroditse devo\", Sergei Rachmaninoff (1873–1943)",
          "\"Sing Joyfully to God Our Strength\", Ambrož Čopi (b. 1973)",
          "\"Indodana\", Michael Barrett & Ralf Schmitt",
          "\"O Sapientia\", Tadeja Vulc (b. 1978)"
        ]
      },
      "18:00 Competition Categories C · D · B · E",
      {
        "heading": "30th International Choral Competition",
        "level": 3
      },
      "Cultural Centre of the Holy Metropolis Competing choirs & repertoire (6)",
      "Children's Choir \"Okarina\", Prishtina XK (C) — Elikonë Hysaj Shala",
      {
        "list": [
          "\"Da così dotta man\", Giovanni Pierluigi da Palestrina (1525–1594)",
          "\"Da pacem\", Charles Gounod (1818–1893)",
          "\"Deo Gracias\" (A Ceremony of Carols, Op. 28), Benjamin Britten (1913–1976)",
          "\"Vjosa, A Song of Wild Eternity\", Aulon Naçi (b. 1983)"
        ]
      },
      "Youth Choir Elefteria, Chisinau MD (D) — Dorin Bîtcă",
      {
        "list": [
          "\"Cantate Domino\", Claudio Monteverdi (1567–1643)",
          "\"Bogorodice Devo, radujsya\", Sergei Rachmaninoff (1873–1943)",
          "\"Alleluia\", Romuald Twardowski (1930–2024)",
          "\"Ave Generosa\", Ola Gjeilo (b. 1978)"
        ]
      },
      "Kla-sch Vocal Quartet (Jan Długosz University), Częstochowa PL (D) — Przemysław Jeziorowski",
      {
        "list": [
          "\"Ave Maria\", Tomás Luis de Victoria (1548–1611)",
          "\"Abschied vom Walde\", Felix Mendelssohn-Bartholdy (1809–1847)",
          "\"Gloria\", Carlos Alberto Pinto Fonseca (1933–2006)",
          "\"O salutaris Hostia\", Paweł Bębenek (b. 1972)"
        ]
      },
      "Makeblijde, Zele BE (B) — Filip Haentjens",
      {
        "list": [
          "\"Sub tuum praesidium\", Giovanni Pierluigi da Palestrina (1525–1594)",
          "\"Gute Nacht\", Josef Rheinberger (1839–1901)",
          "\"Mountain Nights 1\", Zoltán Kodály (1882–1967)",
          "\"By the Light of the Moon\", Anna-Mari Kähärä (b. 1963)"
        ]
      },
      "Gøtu Kirkju Ungdómskór, Gøta FO (E) — Símun Hammer",
      {
        "list": [
          "\"Sing Joyfully unto God\", William Byrd (1540–1623)",
          "\"Ezekiel Saw de Wheel\", William L. Dawson (1899–1990)",
          "\"O Heiland, reiß die Himmel auf\", Johannes Brahms (1833–1897)",
          "\"Leron Leron Sinta\", Saunder Choi (b. 1988)"
        ]
      },
      "Resonans con tutti, Zabrze PL (E) — Arlena Różycka-Gałązka & Waldemar Gałązka",
      {
        "list": [
          "\"Quasi cedrus\", Jacobus Handl Gallus (1550–1591)",
          "\"Denn Er hat seinen Engeln befohlen\", Felix Mendelssohn Bartholdy (1809–1847)",
          "\"Cantus Gloriosus\", Józef Świder (1930–2014)",
          "\"Sleep\", Eric Whitacre (b. 1970)",
          "\"Daemon Irrepit Callidus\", György Orbán (b. 1947)"
        ]
      },
      "20:30 Street performance",
      {
        "heading": "Street performances around the city",
        "level": 3
      },
      "Participating choirs (7)",
      {
        "list": [
          "Makeblijde, Zele BE — Filip Haentjens",
          "Essence of Elements, Rome IT — Jorge Arturo Higuera",
          "Izar Argia Abesbatza, Larrabetzu ES — Aintzane Garamendi Eguren",
          "Pieria Teachers' Choir (SEPE), Katerini GR — Olga Matthaiou",
          "Sincoro coro di Arcigay, Rome IT — Camilo Vasquez",
          "Youth Choir \"Aoidon Fones\", Paralimni CY — Pantelina Paschali",
          "The All-American Boys Chorus, Anaheim CA US — Wesley Martin"
        ]
      },
      "21:00 Concert",
      {
        "heading": "Evening Concert",
        "level": 3
      },
      "Metropolitan Church of Saint Charalambos Choirs & repertoire (5)",
      "Children's Choir \"Okarina\", Prishtina XK — Elikonë Hysaj Shala",
      {
        "list": [
          "\"Te falemi o Dhe\" (opera Dasma Arbëreshe), Rauf Dhomi (b. 1945)",
          "\"Vjosa, a Song of Wild Eternity\", Aulon Naçi (b. 1983)",
          "\"Baresha\", Rexho Mulliqi (1923–1982)"
        ]
      },
      "The All-American Boys Chorus, Anaheim CA US — Wesley Martin",
      {
        "list": [
          "\"Route 66\", Bobby Troup (1918–1999), arr. Kirby Shaw",
          "\"California Dreamin'\", John & Michelle Phillips, arr. Wesley Martin",
          "\"I'll Be There\", Gordy / Davis / Hutch / West, arr. Wesley Martin",
          "\"Pure Imagination\", Leslie Bricusse & Anthony Newley, arr. Jay Althouse"
        ]
      },
      "Kla-sch Vocal Quartet, Częstochowa PL — Przemysław Jeziorowski",
      {
        "list": [
          "\"Ave Maria\", Tomás Luis de Victoria (1548–1611)",
          "\"Gloria\", Carlos Alberto Pinto Fonseca (1933–2006)",
          "\"O salutaris Hostia\", Paweł Bębenek (b. 1972)",
          "\"Soon Ah Will Be Done\", spiritual, arr. William L. Dawson (1899–1990)"
        ]
      },
      "Youth Choir Elefteria, Chisinau MD — Dorin Bîtcă",
      {
        "list": [
          "\"The Battle of Jericho\", Moses Hogan (1957–2003)",
          "\"Na 'mouna gia ligo ekei\", arr. Alexander Zaitsev (1955–2008)",
          "\"Vine hulpe de la munte\", Adrian Pop (b. 1951)",
          "\"Ubi Caritas\", Ola Gjeilo (b. 1978)",
          "\"Eleftheria\", arr. Alexander Zaitsev (1955–2008)"
        ]
      },
      "Gøtu Kirkju Ungdómskór, Gøta FO — Símun Hammer",
      {
        "list": [
          "\"Harra Guð títt dýra navn…\", traditional, arr. Símun Hammer (b. 1964)",
          "\"Meistarin\", Kim Hansen (b. 1972), arr. Símun Hammer",
          "\"Great God Almighty\", Stacey V. Gibbs (b. 1961)",
          "\"Sing Joyfully unto God\", William Byrd (1540–1623)"
        ]
      },
      "21:30 Concert",
      {
        "heading": "Evening Concert",
        "level": 3
      },
      "Courts Square Choirs & repertoire (6)",
      "Choir \"Anatoli\", Limassol CY — Fr. Nikolaos Lympouridis",
      {
        "list": [
          "\"Portokalia tou Karava\", traditional Cypriot song",
          "\"Tragoudi tou Gamou\", traditional Cypriot song",
          "\"To tertin tis kartoullas mou\", traditional Cypriot song",
          "\"I vraka\", traditional Cypriot song"
        ]
      },
      "Transilvania Choir, Brașov RO — Mihaela Mureșan",
      {
        "list": [
          "\"Hora Staccato\", Nicolae Gâscă (b. 1942)",
          "\"Mare hibă-i la Jibău\", Dariu Pop (1887–1965)",
          "\"Și altfel de variațiuni pe tema Chindiei\", Alexandru Pașcanu (1920–1989)",
          "\"Father Thunder\", Laura Jēkabsone (b. 1985)",
          "\"Sixteen Tons\", arr. Kirby Shaw (b. 1942)"
        ]
      },
      "Pieria Teachers' Choir (SEPE), Katerini GR — Olga Matthaiou",
      {
        "list": [
          "\"Chartino to fengaraki\", Manos Hadjidakis (1925–1994)",
          "\"Ximeronei\", Manos Hadjidakis (1925–1994)",
          "\"Aprilis\", Mikis Theodorakis (1925–2021)",
          "\"Tou mikrou Voria\", Mikis Theodorakis (1925–2021)"
        ]
      },
      "Novi Sad's Jewish Community Choir \"Hashira\", Novi Sad RS — Vesna Kesić Krsmanović",
      {
        "list": [
          "\"Pod sjajem zvezda\", Predrag Ivanović (1930–2010)",
          "\"Devojko mala\", Darko Kraljić (1920–1998), arr. Bratislav Prokić",
          "\"Tumbalalaika\", traditional, arr. Julija Bal (b. 1980)",
          "\"Havah Nagilah\", traditional, arr. Daniel Faktori"
        ]
      },
      "Choir PRIMO Secondary School nr1, Bydgoszcz PL — Monika Wilkiewicz",
      {
        "list": [
          "\"Leć głosie po rosie\", Marcin Wawruk (b. 1963)",
          "\"Lecioły zórazie\" (Cztery pieśni kurpiowskie), Jan Krutul (b. 1985)",
          "\"Stand by Me\", Ben E. King, arr. Mac Huff",
          "\"Dancing Queen\", ABBA, arr. Roger Emerson"
        ]
      },
      "The Academic Choir Maribor, Maribor SI — Uroš Jurgec",
      {
        "list": [
          "\"Čin, čin, čin Drežnica\", traditional, arr. Tadeja Vulc (b. 1978)",
          "\"Pa se sliš'\", traditional, arr. Karol Pahor (1896–1974)",
          "\"Stand by Me\", King / Leiber / Stoller, arr. Mac Huff",
          "\"Ta na Solbici\", traditional, arr. Samo Vovk (b. 1989)"
        ]
      },
      {
        "anchor": "en-sat"
      },
      {
        "heading": "Saturday 11 July 2026",
        "level": 2
      },
      "10:00 Competition Category F",
      {
        "heading": "30th International Choral Competition",
        "level": 3
      },
      "Cultural Centre of the Holy Metropolis Competing choirs & repertoire (4)",
      "Kla-sch Vocal Quartet, Częstochowa PL — Przemysław Jeziorowski",
      {
        "list": [
          "\"Od buczku do buczku\", Jacek Glenc (b. 1967)",
          "\"Szerszeń\", Zbigniew Penherski (1935–2019)",
          "\"Soon Ah Will Be Done\", spiritual, arr. William L. Dawson (1899–1990)",
          "\"Tolerancja\", Stanisław Sojka (1959–2025), arr. Klaudiusz Jania (b. 1984)"
        ]
      },
      "Essence of Elements, Rome IT — Jorge Arturo Higuera",
      {
        "list": [
          "\"The Seed\", Aurora (b. 1996)",
          "\"Breathing Underwater\", Hiatus Kaiyote",
          "\"Hurricane\", Bridgit Mendler (b. 1992)",
          "\"Earth Song\", Michael Jackson (1958–2009)",
          "\"Girl on Fire\", Alicia Keys (b. 1981)"
        ]
      },
      "Gøtu Kirkju Ungdómskór, Gøta FO — Símun Hammer",
      {
        "list": [
          "\"Meistarin\", Kim Hansen (b. 1972), arr. Símun Hammer",
          "\"Angel by the Wings\", Sia Furler (b. 1975), arr. André van der Merwe",
          "\"Desh\" — Indian raga, Ethan Sperry (b. 1971)",
          "\"Great God Almighty\", Stacey V. Gibbs (b. 1961)"
        ]
      },
      "Asociația Corală Academica Bucovina, Câmpulung Moldovenesc RO — Emil Forfotă",
      {
        "list": [
          "\"Concertul Nr. 1\", Gavriil Musicescu (1847–1903)",
          "\"Lumină lină\", Florian Costea (b. 1984)",
          "\"Floare albastră\", Vasile Spătărelu (1938–2005)",
          "\"Nobody Knows the Trouble\", traditional African-American spiritual"
        ]
      },
      "13:00 Competition Category F",
      {
        "heading": "30th International Choral Competition",
        "level": 3
      },
      "Cultural Centre of the Holy Metropolis Competing choirs & repertoire (4)",
      "Izar Argia Abesbatza, Larrabetzu ES — Aintzane Garamendi Eguren",
      {
        "list": [
          "\"Medley Euskal Kantak: Loretxoa eta Nere Herriko Neskatxa Maite\", Benito Lertxundi (b. 1942)",
          "\"Aitormena\", Hertzainak / Josu Zabala (b. 1954)",
          "\"Haizea\", Ken Zazpi / Eñaut Elorrieta (b. 1975)",
          "\"Kanbon Palanga Pagoz\", David Azurza (b. 1968)",
          "\"Aldapeko\", Jesús Guridi (1886–1961)"
        ]
      },
      "Children's Choir \"Okarina\", Prishtina XK — Elikonë Hysaj Shala",
      {
        "list": [
          "\"Ne kemi një tokë, kemi dhe një kokë\", Rafet Rudi (b. 1949)",
          "\"Cerf Volant\" (Les Choristes), Bruno Coulais (b. 1954)",
          "\"Music in the Circle\", Mendi Mengjiqi (b. 1958)",
          "\"Baresha\", Rexho Mulliqi (1923–1982)"
        ]
      },
      "Transilvania Choir, Brașov RO — Mihaela Mureșan",
      {
        "list": [
          "\"Cine-și lasă satul lui\", Șerban Marcu (b. 1977)",
          "\"Mare hibă-i la Jibău\", Dariu Pop (1887–1965)",
          "\"Trandafir de pe răzoare\", Sabin Drăgoi (1894–1968)",
          "\"Suita scurtă: 1. Doina de oraș, 2. Sârba pe scaun\", Alexandru Pașcanu (1920–1989)"
        ]
      },
      "The Academic Choir Maribor, Maribor SI — Uroš Jurgec",
      {
        "list": [
          "\"Oj, gora ta Kaninova\", Ambrož Čopi (b. 1973)",
          "\"Fčelica zletela\", Lojze Lebič (b. 1934)",
          "\"Preljuba družba, prosmo vas\", Tine Bec (b. 1993)",
          "\"Zrejlo je žito\", Slavko Šuklar (b. 1952)",
          "\"Ta na Solbici\", Samo Vovk (b. 1989)"
        ]
      },
      "18:00 Competition Categories H & A",
      {
        "heading": "30th International Choral Competition",
        "level": 3
      },
      "Cultural Centre of the Holy Metropolis Competing choirs & repertoire (6)",
      "Choir \"Anatoli\", Limassol CY (H) — Fr. Nikolaos Lympouridis",
      {
        "list": [
          "\"Tillyrkotissa\", traditional Cypriot song",
          "\"I vrysi ton Pegeiotisson\", traditional Cypriot song",
          "\"Steile me mana sto neron\", traditional Cypriot song",
          "\"To giasemin\", traditional Cypriot song",
          "\"Psintri vasilitzia mou\", traditional Cypriot song"
        ]
      },
      "Belcantes of Agios Andreas Eglykadas, Patra GR (H) — Elena Droukopoulou",
      {
        "list": [
          "\"I denna ljuva sommartid\", Kim André Arnesen (b. 1980) — solo: Eirini Tsouma",
          "\"Music for a While\", Henry Purcell (1659–1695), arr. Gunnar Eriksson — solo: Katerina Tsantouli · choreography: Katerina Georgiou",
          "\"Sta niologia tou kairou\", Nikos Tsotras (b. 1962)",
          "\"Dies Irae\", Michael John Trotta (b. 1978) — solo: Chrysa Christodoulou, Eirini Tsouma"
        ]
      },
      "Mixed Choir of Livadia \"Erkyna\", GR (H) — Iro Panagiotopoulou · piano: Dimitris Zografos",
      {
        "list": [
          "\"O efialtis tis Persefonis\", Manos Hadjidakis (1925–1994)",
          "\"Erini\" (8 Dodecanesian Songs), Giannis Konstantinidis (1903–1984), traditional song of Tilos",
          "\"Sometimes I Feel Like a Motherless Child\", African-American spiritual",
          "\"Enas Tourkos sto Parisi\", Lavrentis Machairitsas (1956–2019)",
          "\"Exsultate Cantamos Festivo\", Jay Althouse (b. 1951)"
        ]
      },
      "Nafplio Choral Ensemble, GR (H) — Giannis Nikolopoulos · piano: Dimitris Zografos",
      {
        "list": [
          "\"Me to lychno tou astrou\", Music: Mikis Theodorakis (1925–2021), Poetry: Odysseas Elytis (1911–1996), harm. G. Karkalas",
          "\"Chathike to fengari\", Music: Stavros Xarchakos (b. 1939), Lyrics: Vangelis Goufas (1925–2016), arr. K. Kritsiotakis",
          "\"Pikria\", Music: Thanos Mikroutsikos (1947–2019), Poetry: Nikos Kavvadias (1910–1975), arr. G. Nikolopoulos",
          "\"Aftes oi xenes agkalies\", Music: Ilias Andriopoulos (b. 1950), Lyrics: Manos Eleftheriou (1938–2018), arr. G. Nikolopoulos",
          "\"Eicha fytepsei mia kardia\", Music: Mikis Theodorakis (1925–2021), Lyrics: Nikos Gatsos (1911–1992), arr. G. Nikolopoulos"
        ]
      },
      "Resonans con tutti, Zabrze PL (A) — Arlena Różycka-Gałązka & Waldemar Gałązka",
      {
        "list": [
          "\"Magnificat\", Johann Christian Bach (1735–1782)",
          "\"Darthulas Grabesgesang\", Johannes Brahms (1833–1897)",
          "\"Jesu dulcis memoria\", Leo Nestor (1948–2019)",
          "\"Second Eve\", Ola Gjeilo (b. 1978)",
          "\"Gloria\", Woo Hyo-won (b. 1974)"
        ]
      },
      "The Academic Choir Maribor, Maribor SI (A) — Uroš Jurgec",
      {
        "list": [
          "\"Come Away, Sweet Love\", Thomas Greaves (1550–1650)",
          "\"Sechs geistliche Lieder: 5. Ergebung\", Hugo Wolf (1860–1903)",
          "\"Ena punca\", Andrej Makor (b. 1987)",
          "\"Singet dem Herrn ein neues Lied\", Hugo Distler (1908–1942)",
          "\"Sine sole nihil sum\", Tadeja Vulc (b. 1978)"
        ]
      },
      "20:30 Street performance",
      {
        "heading": "Street performances around the city",
        "level": 3
      },
      "Participating choirs (6)",
      {
        "list": [
          "Choir \"Anatoli\", Limassol CY — Fr. Nikolaos Lympouridis",
          "Kla-sch Vocal Quartet, Częstochowa PL — Przemysław Jeziorowski",
          "Transilvania Choir, Brașov RO — Mihaela Mureșan",
          "Novi Sad's \"Hashira\", Novi Sad RS — Vesna Kesić Krsmanović",
          "Gøtu Kirkju Ungdómskór, Gøta FO — Símun Hammer",
          "The Academic Choir Maribor, Maribor SI — Uroš Jurgec"
        ]
      },
      "21:30 Concert",
      {
        "heading": "Evening Concert",
        "level": 3
      },
      "Preveza Marina Choirs & repertoire (6)",
      "The All-American Boys Chorus, Anaheim CA US — Wesley Martin",
      {
        "list": [
          "\"Route 66\", Bobby Troup (1918–1999), arr. Kirby Shaw",
          "\"California Dreamin'\", John & Michelle Phillips, arr. Wesley Martin",
          "\"I'll Be There\", Gordy / Davis / Hutch / West, arr. Wesley Martin",
          "\"Pure Imagination\", Bricusse & Newley, arr. Jay Althouse"
        ]
      },
      "Makeblijde, Zele BE — Filip Haentjens",
      {
        "list": [
          "\"Hvalite imea Gospodne\", Dobri Christov (1875–1941)",
          "\"Ave Maria\", Carles Gumí (b. 1963)",
          "\"Sweet Dreams / Poker Face\", Stewart & Lennox, arr. Rob Lane",
          "\"Rhythm Inside\", Loïc Nottet (b. 1996), arr. Hanne De Graef"
        ]
      },
      "Mixed Choir of Livadia \"Erkyna\", GR — Iro Panagiotopoulou · piano: Dimitris Zografos",
      {
        "list": [
          "\"O efialtis tis Persefonis\", Manos Hadjidakis (1925–1994)",
          "\"Sometimes I Feel Like a Motherless Child\", African-American spiritual",
          "\"Enas Tourkos sto Parisi\", Lavrentis Machairitsas (1956–2019)",
          "\"Exsultate Cantamos Festivo\", Jay Althouse (b. 1951)"
        ]
      },
      "Sincoro coro di Arcigay, Rome IT — Camilo Vasquez",
      {
        "list": [
          "\"Believe / Open Your Heart / Borderline / How Will I Know\" — mash-up (Cher, Madonna, Whitney Houston)",
          "\"Se t'innamori muori / Glicine\" — mash-up (Noemi)",
          "\"Dark Horse\", Katy Perry ft. Juicy J",
          "\"The Hanging Tree / Scared to Be Lonely / Elastic Heart\" — mash-up",
          "\"Io che amo solo te / Il cielo in una stanza\" — mash-up (Endrigo / Paoli)",
          "\"Natural Woman\", Aretha Franklin",
          "\"I Love It / Boss B*tch / Runway\" — mash-up"
        ]
      },
      "Belcantes of Agios Andreas Eglykadas, Patra GR — Elena Droukopoulou · piano: Konstantina Androutsopoulou",
      {
        "list": [
          "\"To trito stefani\", Stamatis Kraounakis (b. 1955), arr. Loukas Adamopoulos",
          "\"Apano stin triantafyllia\", arr. I. Papadopoulou",
          "\"Tou pothou peristeria\", Nikos Exarchos (b. 1973)",
          "\"Wah-Bah-Dah-Bah-Doo-Bee\", Ivo Antognini (b. 1963)"
        ]
      },
      "Resonans con tutti, Zabrze PL — Arlena Różycka-Gałązka & Waldemar Gałązka",
      {
        "list": [
          "\"The Gospel Train\", spiritual",
          "\"Z tamtej strony rzeki\", Stanisław Wiechowicz (1893–1963)",
          "\"The Last Rose of Summer\", Darmon Meader",
          "\"La, la, la\", Pierre Certon (1510–1572)",
          "\"Michelle\", Paul McCartney & John Lennon",
          "\"I Want to Go to Heaven\", József Karai, spiritual",
          "\"Wana Baraka\", Shawn Kirchner (b. 1970)",
          "\"The Drunken Sailor\", Robert Sund (b. 1942)"
        ]
      },
      "21:30 Concert",
      {
        "heading": "Evening Concert",
        "level": 3
      },
      "Courts Square Choirs & repertoire (5)",
      "Essence of Elements, Rome IT — Jorge Arturo Higuera",
      {
        "list": [
          "\"Earth Song\", Michael Jackson (1958–2009)",
          "\"The Seed\", Aurora (b. 1996)",
          "\"Hurricane\", Bridgit Mendler (b. 1992)",
          "\"Girl on Fire\", Alicia Keys (b. 1981)"
        ]
      },
      "Youth Choir \"Aoidon Fones\", Paralimni CY — Pantelina Paschali",
      {
        "list": [
          "\"To Tango tis Nefelis\", Loreena McKennitt (b. 1957)",
          "\"T' Asteri tou Voria\", Manos Hadjidakis (1925–1994)",
          "\"Odos Oneiron\", Manos Hadjidakis (1925–1994)",
          "\"Giasemi\", traditional Cypriot song"
        ]
      },
      "Nafplio Choral Ensemble, GR — Giannis Nikolopoulos",
      {
        "list": [
          "\"Arnisi\", Music: Mikis Theodorakis (1925–2021), Poetry: Giorgos Seferis (1900–1971)",
          "\"Aftes oi xenes agkalies\", Music: Ilias Andriopoulos (b. 1950), Lyrics: Manos Eleftheriou (1938–2018), arr. G. Nikolopoulos",
          "\"Pikria\", Music: Thanos Mikroutsikos (1947–2019), Poetry: Nikos Kavvadias (1910–1975), arr. G. Nikolopoulos",
          "\"Oraia koimomeni\", Music: Nikos Xydakis (b. 1952), Lyrics: Thodoris Gonis (b. 1956), arr. G. Nikolopoulos"
        ]
      },
      "Izar Argia Abesbatza, Larrabetzu ES — Aintzane Garamendi",
      {
        "list": [
          "\"A Thousand Years\", Christina Perri (b. 1986)",
          "\"City of Stars\", Justin Hurwitz (b. 1985)",
          "\"Noizbait\", Ken Zazpi / Eñaut Elorrieta (b. 1975)",
          "\"Txoriak Txori\", Mikel Laboa (1934–2008)"
        ]
      },
      "Female Chamber Choir Caloroso, Mol BE — Jasmien Gys",
      {
        "list": [
          "\"Is Our Microphone On?\", Søren Møller (b. 1975)",
          "\"Through the House Give Glimmering Light\", Amy Beach (1867–1944)",
          "\"Annan Polska\", Anna-Mari Kähärä (b. 1963)"
        ]
      },
      "23:00 Social",
      {
        "heading": "Party for all choirs",
        "level": 3
      },
      "Preveza Marina",
      {
        "anchor": "en-sun"
      },
      {
        "heading": "Sunday 12 July 2026",
        "level": 2
      },
      "21:30 Closing Ceremony",
      {
        "heading": "Closing Ceremony & Announcement of Results",
        "level": 3
      },
      "The Roman Odeum of Ancient Nicopolis",
      "Musical greeting by the host Preveza Mixed Choir \"Armonia\" (GR) — Conductor: Anelia Stefanova Official announcement of the competition results. Selected performances by the top-ranking choirs of each category.",
      "Please note: this programme is subject to change. Exact times and venues will be confirmed closer to the festival.",
      {
        "heading": "International Jury Committee",
        "level": 2,
        "align": "center"
      },
      ...person("ambroz-copi", "en", {level: 3}),
      ...person("marco-antonio-garcia-de-paz", "en", {level: 3,align: "right"}),
      ...person("katerina-vassilikou", "en", {level: 3}),
      ...person("john-fitzpatrick", "en", {level: 3,align: "right"}),
      ...person("pearl-shangkuan", "en", {level: 3}),
      ...person("eduardo-garcia-novelli", "en", {level: 3,align: "right"}),
      {
        "heading": "Dr. Leo Li",
        "level": 3
      },
      {
        "img": "/img/leoli.webp",
        "layout": "side"
      },
      "Dr. Leo Li is a Chinese-Canadian conductor and adjudicator with a strong international presence in choral and orchestral music. He serves on the Board of Directors of Choral Canada, where he chairs the Membership Committee, and is also a member of the China Chorus Association.\n\nHis conducting career began at an early age and quickly developed into an award-winning international trajectory. Throughout his career, he has worked with mixed, university, youth, children's and community choirs, as well as symphony orchestras across four continents. He is particularly recognized for fostering cultural exchange and building bridges between Eastern and Western choral traditions.\n\nWidely respected for his artistic leadership and commitment to cultural exchange, Dr. Li has received significant recognition for his contributions to music and community service in Canada. In 2027, he will appear as Guest Conductor at Carnegie Hall.",
      {
        "heading": "Participating Choirs",
        "level": 3,
        "align": "center"
      },
      {
        "heading": "Female Chamber Choir \"Caloroso\"",
        "level": 4
      },
      "Mol, Belgium Conductor: Jasmien Gys",
      {
        "img": "/img/caloroso.webp"
      },
      "The Female Chamber Choir Caloroso is one of the six choirs of the Caloroso choir family. The ensemble was founded in 2010 as a project choir, originally created to record a CD. In 2012, it continued with another important project, performing the world premiere of Bestiarium by Maarten Van Ingelgem and Karel Van Marcke. Since 2017, the women's ensemble has become part of Caloroso's regular weekly choir activities and appeared in the 15th anniversary concert of the choir family. In 2019, the choir gave its first adjudicated performance at Korenfestival Vlaanderen. In 2021, it entered its first competition, the World Choir Games in Flanders, where it won first place in its category. In 2023, the ensemble took part in its first international competition abroad, Sound Waves Linz, again winning first prize in its category and being invited to perform in the final. In 2025, it participated in the international choral festival CantaRode in Kerkrade, achieving an impressive 7th place. Since September 2020, the choir has been conducted by Jasmien Gys, a conductor, singer and educator. In 2025, she received the Most Promising Young Conductor award at CantaRode.",
      {
        "heading": "\"Makeblijde\" Female Choir",
        "level": 4
      },
      "Zele, Belgium Conductor: Filip Haentjens",
      {
        "img": "/img/Makeblijde.webp"
      },
      "The women’s choir Makeblijde was founded in 1943 by Josee Standaert, whose dedication soon brought the choir national recognition. Under her leadership, Makeblijde became first laureate of the Radio School Choir competition, won the Golden Chord of the City of Brussels, and received a Summa Cum Laude first prize at the European Music Festival for Young People in Neerpelt. In 1983, Josee Standaert was succeeded by Annemie Moens, a professional vocal coach who further refined the choir’s vocal technique and musicianship. Since 1996, Makeblijde has been conducted by Filip Haentjens, marking a period of remarkable artistic growth and international recognition. The choir was awarded the title Choir of the Year 2005-2006, also winning the audience prize in the same competition. In 2008, it was promoted to the highest honorary division of the East Flanders Choir Tournaments, a distinction it has maintained ever since. Internationally, Makeblijde has received prestigious awards in Italy, Greece, Turkey, Spain, Lithuania and the Czech Republic. Recent highlights include two gold medals at the “Musica Orbis” competition in Prague in 2022 and double gold with category wins at the “Musica Eterna” competition in Rome in 2024, confirming Makeblijde’s position among Europe’s leading female choirs.",
      {
        "heading": "Gøtu Church Youth Choir",
        "level": 4
      },
      "Gøta, Faroe Islands Conductor: Símun Hammer",
      {
        "img": "/img/gotu.webp"
      },
      "Gøtu Kirkju Ungdómskór (Gøtu Church Youth Choir) was founded in September 2011 and is part of the local Lutheran church in the village of Gøta in the Faroe Islands. The choir consists of about 30 young singers, girls and boys, and its mission is to perform choral music at a high and engaging artistic level, while maintaining an active concert programme throughout the country. Since 2014, the choir has regularly sought artistic challenges beyond the Faroe Islands, participating in international choral events and festivals in Italy, Austria, Latvia, Sweden, Germany, South Korea and Denmark. Its appearances include the European Choir Games in Riga, the Helsingborg International Choir Festival, the Johannes Brahms International Choir Festival in Wernigerode, the World Choir Games in South Korea, the Summa Cum Laude Festival in Vienna and the European Choir Games in Aarhus. During these events, the choir has achieved several high rankings and honours. The choir is conducted by its founder, Símun Hammer, organist and cantor at the church of Gøta. He holds a Master of Church Music from the Royal Academy of Music in Aarhus, Denmark, and is also active as a concert organist, educator, composer and arranger of choral music.",
      {
        "heading": "\"Sincoro\"",
        "level": 4
      },
      "Rome, Italy Conductor: Juan Camilo Vasquez Co-director / Pianist: Francesco Del Fra",
      {
        "img": "/img/SinCoro-choir.webp"
      },
      "Sincoro - Arcigay Choir is based in Rome, Italy, and was founded in 2019 within the LGBTQIA+ association Gay Center. Its creation grew out of a shared passion for choral music and the desire to establish an artistic space for expression, encounter and community-building for Rome’s LGBTQIA+ community. Over time, Sincoro has developed from a small emerging initiative into a well-established ensemble within the Italian LGBTQIA+ choral scene, distinguished by its diverse repertoire. The choir has performed on prestigious stages, including Teatro Brancaccio in Rome and Teatro Petroselli in Bari. It is a permanent member of Cromatica and has participated in the national festival dedicated to Italian rainbow choirs, as well as in Various Voices, the major European and international LGBTQIA+ choral festival. Sincoro has also taken part in numerous projects promoting equality, inclusion, rights and culture. Since 2024, the choir has been conducted by Juan Camilo Vasquez, a Colombian musician based in Italy. He studied at the Saint Louis College of Music in Rome and has developed a versatile artistic profile, combining vocal performance, songwriting, music production and pop/jazz choral arranging. His work with Sincoro is supported by co-director and pianist Maestro Francesco Del Fra.",
      {
        "heading": "\"Essence of Elements\"",
        "level": 4
      },
      "Rome, Italy Artistic Direction: Jorge Arturo Higuera Rodríguez",
      {
        "img": "/img/EssenceOfElements.webp"
      },
      "Essence of Elements presents The Four Elements, a contemporary a cappella choral project inspired by Earth, Air, Water and Fire. The performance connects environmental awareness with human emotion and the body as a rhythmic instrument, incorporating body percussion, vocal textures, sound design and improvisational sections. The ensemble consists of six performers and is formed by students of the Saint Louis College of Music in Rome, Italy, representing the Pop (Vocals and Piano) and Composition & Film Scoring departments. Working collaboratively, its members contribute as singers, arrangers and creators. The repertoire includes original a cappella arrangements of international pop songs, alongside an original composition, combining pop, soul and jazz-influenced harmony with choral discipline. The project is artistically directed by Arturo Higuera, a Colombian composer, pianist and conductor based in Italy. His artistic work combines classical tradition with contemporary approaches, showing a strong sensitivity to narrative, atmosphere and the relationship between sound, image and emotion. The ensemble's participation in the International Choral Festival of Preveza takes place within the framework of the Erasmus+ Programme, following an open invitation accepted by the Saint Louis College of Music for the second time. The project offers students a valuable opportunity for artistic exchange, musical development and intercultural collaboration through one of Europe's leading international choral events.",
      {
        "heading": "Children's Choir \"Okarina\"",
        "level": 4
      },
      "Prishtina, Kosovo Conductor: Elikonë Hysaj Shala",
      {
        "img": "/img/okarina.webp"
      },
      "The Children’s Choir “Okarina” was founded in 2014 in Prishtina, Kosovo, and has established itself as one of the most active and distinguished children’s choirs in the region. With numerous achievements and participation in major cultural events, both nationally and internationally, the choir has developed a strong artistic presence. A landmark moment in its history came in 2022, when “Okarina” performed Carl Orff’s Carmina Burana together with the Kosovo Philharmonic. Three years later, the choir returned to the stage for the scenic cantata Carmina Burana, this time in collaboration with the Kosovo Opera and the National Ballet of Kosovo, in a large-scale production involving more than 300 artists. In 2025, “Okarina” made history as the only children’s choir to perform in the opera Carmen. The choir has performed with acclaimed artists including Inva Mula, Rame Lahaj, Elbenita Kajtazi, and Flaka Goranci, and has appeared at festivals such as EtnoFest, the Rame Lahaj Opera Festival, and PriVocalFest. It is also part of the educational platform “Planet of Children” and contributes to EduOpera, the Kosovo Opera’s educational programme. The choir was founded and is directed by Elikonë Hysaj Shala, a soloist, educator, and artist with notable contributions to music and theatre, who has been a member of the Kosovo Philharmonic since 2005.",
      {
        "heading": "Youth Choir \"Elefteria\"",
        "level": 4
      },
      "Chișinău, Moldova Conductor & Artistic Director: Dorin Bîtcă Founder & Executive Director: Nataly Shulika",
      {
        "img": "/img/youth-choir-elefteria.webp"
      },
      "Youth Choir Elefteria was founded on 1 October 2013 in Chișinău, Moldova, and has grown into one of the country’s most distinctive young vocal ensembles. The choir is shaped by artistic discipline, cultural dialogue, and its members’ shared passion for choral music. Since its establishment, Elefteria has taken an active role in concert life and international cultural exchange, with performances in Moldova, Ukraine, Romania, and Greece. Its repertoire includes sacred, folk, and classical works from various European traditions, with a strong focus on expressive interpretation, stylistic versatility, and vocal unity. The choir gained international recognition at the International Sacred Music Choir Competition in Preveza, where it received two bronze distinctions in 2016 and the Gold Award in the Chamber Choir category in 2017. These distinctions established a lasting artistic bond with the city. In 2026, Elefteria returns to Preveza with renewed energy, ready to begin a new chapter in its musical journey. The choir is conducted by Dorin Bîtcă, a graduate of the Academy of Music, Theatre and Fine Arts in Chișinău, where he earned a Master of Arts degree in Choral Conducting. His artistic journey is closely linked to Youth Choir Elefteria, first as a singer and now as its conductor and artistic director.",
      {
        "heading": "\"Primo\"",
        "level": 4
      },
      "Bydgoszcz, Poland Conductor: Monika Wilkiewicz",
      {
        "img": "/img/primo.webp"
      },
      "The PRIMO Choir of Secondary School No. 1 in Bydgoszcz, Poland, was founded in September 1996 by conductor Monika Wilkiewicz, professor at the Academy of Music in Bydgoszcz. Since its foundation, the choir has developed an impressive artistic activity, giving more than 400 concerts in Poland and abroad and representing the city of Bydgoszcz in numerous provincial, national and international festivals and competitions. The ensemble has participated in major international choral competitions in countries such as Finland, Switzerland, Belgium, the Czech Republic, Italy, Spain, Hungary, Croatia and Bulgaria, receiving high distinctions, gold and silver diplomas, medals and prizes. In recognition of its artistic achievements, PRIMO has been awarded the Grand Prix three times and has received approximately one hundred awards and distinctions. The choir’s repertoire includes European a cappella choral music from the 16th to the 21st century, mainly works by Polish composers, as well as film music, patriotic and folk songs and popular music hits. Monika Wilkiewicz has been active in choral music since 1995. She conducts several distinguished ensembles and is widely recognized as a conductor, teacher, lecturer, juror and musical life animator. With her choirs, she has also presented premiere performances of works by contemporary Polish composers.",
      {
        "heading": "\"Kla-sch\" Vocal Quartet",
        "level": 4
      },
      "Częstochowa, Poland Director: Przemysław Jeziorowski",
      {
        "img": "/img/Kla-sch.webp"
      },
      "The Kla-sch Vocal Quartet of the Department of Music at Jan Długosz University in Częstochowa, Poland, is an ensemble formed by students of the UJD Department of Music who share a special interest in polyphonic singing. The members of the quartet continuously develop their vocal skills and deepen their knowledge of choral repertoire. Their repertoire includes a broad and diverse selection of classical music, both sacred and secular, as well as popular music. The ensemble regularly participates in student concerts and various university ceremonies, actively promoting the culture of choral music. Its current line-up has been active since February 2025 and consists of students Zuzanna Efemberg, Martyna Kobus and Kamil Dziomdziora. Kla-sch has performed extensively in Poland and abroad, including appearances in Ružomberok, Bratislava, Nitra, Lloret de Mar and Preveza. Among the quartet’s most notable achievements are the Second Prize at the International Interpretation Competition “Student Artistic Activity” in Ružomberok, the Silver Medal at the 28th International Choral Competition in Preveza, and the Gold Diploma at the National Christmas Carols and Pastorals Competition in Chełmno. For many years, the ensemble has been directed by Przemysław Jeziorowski, a conductor, academic teacher and graduate of the Academy of Music in Kraków, who currently serves as professor at Jan Długosz University.",
      {
        "heading": "\"Resonans con tutti\"",
        "level": 4
      },
      "Zabrze, Poland Conductors: Arlena Różycka-Gałązka & Waldemar Gałązka",
      {
        "img": "/img/resonans.webp"
      },
      "Zabrze’s Youth Choir “Resonans con tutti” was founded in 1970 by Maria and Norbert Kroczek. For the past thirty years, the choir has been conducted by Waldemar Gałązka and Arlena Różycka-Gałązka, both of whom were apprentices of the founder and choirmaster, Norbert Kroczek. Both conductors were first involved with the choir as singers and later continued as instructors and conductors. They are graduates of the Karol Szymanowski Academy of Music in Katowice and have received numerous awards in the fields of culture and education. Resonans con tutti consists of nearly 90 choral music enthusiasts, mainly amateur singers aged between 15 and 30. Its repertoire includes both a cappella works and vocal-instrumental oratorio compositions from various musical periods. The choir performs approximately 40 to 60 concerts each year and serves as the representative choir of Zabrze, known as “The City of Industrial Tourism.” The choir and its conductors have received several state and ministerial awards, as well as top prizes at many international competitions, including those in Neerpelt, Rome, Preveza, Montreux, Tours, Rimini, Neuchatel, Lloret de Mar, Maribor, Ohrid and Riva del Garda. Through their performances, the singers of Resonans con tutti strive to promote choral music both in Poland and abroad.",
      {
        "heading": "\"Transilvania\"",
        "level": 4
      },
      "Brașov, Romania Conductor: Mihaela Mureșan",
      {
        "img": "/img/Transilvania-choir.webp"
      },
      "The “Transilvania” Choir is composed of students from grades 9–12 of the “Tudor Ciortea” Music High School in Brașov, Romania. Since 2015, the choir has been conducted by Professor Mihaela Mureșan. Although it is a school ensemble, with members changing from year to year, the choir has succeeded in maintaining a high artistic level and has performed in Romania, Hungary and Serbia. The ensemble has achieved significant recognition in national and international competitions. Its distinctions include the Trophy at the International Christmas Carols Competition in Romania in 2022, First Prize at the “Gavriil Musicescu” International Festival in Iasi in 2023, as well as Trophies at the Sacred Music Festival in Botoșani and the International Choral Festival “Vivat Musica” in Bucharest in 2024. In 2025, the choir won First Prize at the National Choral Olympiad in Timisoara. The choir’s repertoire includes sacred, classical, and contemporary works, with a strong focus on expression, vocal unity, and stylistic versatility. Mihaela Mureșan graduated from the Faculty of Music in Brasov and holds a master’s degree in 20th-Century Music and Art. Since 2015, she has taught music theory and conducted both the “Transilvania” Choir and the “Cristale” Children’s Choir at the “Tudor Ciortea” Music High School.",
      {
        "heading": "Academica Bucovina Choir",
        "level": 4
      },
      "Câmpulung Moldovenesc, Romania Conductor: Emil Forfotă",
      {
        "img": "/img/bucovina.webp"
      },
      "The Academica Bucovina Choir was founded in 2004 in Câmpulung Moldovenesc, Romania. It consists of approximately 35 members of different ages and professional backgrounds, including students, teachers and retirees, all united by their love of choral music. The choir is conducted by Professor Emil Forfotă, a music educator and conductor with long-standing experience in choral activity. He studied at the “Gheorghe Dima” Academy of Music in Cluj and has conducted school and amateur choral ensembles; he currently leads the Bucovina Male Choir and the mixed choir Academica Bucovina. The choir’s main objective is to promote the values of musical culture both in Romania and abroad. Despite its relatively short history, Academica Bucovina has taken part in numerous competitions, concerts and international festivals in countries such as Italy, the Czech Republic, France, Greece, Germany, Croatia, Spain, Turkey and Montenegro, receiving awards and distinctions. Every year, the choir also gives concerts of sacred music during Easter and Christmas in churches in Câmpulung Moldovenesc, Hunedoara, Târgu Mureș, Bistrița and other cities in Romania and abroad. Its artistic identity is founded on unconditional love for music and on the desire to convey a profound message through choral singing.",
      {
        "heading": "\"Hashira\"",
        "level": 4
      },
      "Novi Sad, Serbia Conductor: Vesna Kesić Krsmanović",
      {
        "img": "/img/Hashira.webp"
      },
      "The Novi Sad Jewish Community Choir “Hashira” was founded in 1993. The Hebrew word Hashira means “the song”, reflecting the ensemble’s mission to preserve and promote Jewish synagogal and folk music heritage. At the same time, the choir performs a wide variety of choral repertoire, singing in many languages, including Hebrew, Yiddish, Ladino, Serbian, Spanish, Latin, Italian, English and Basque. Throughout its artistic journey, the choir has received numerous awards at local and international festivals and competitions, with appearances and distinctions in Slovakia, Czech Republic, Bosnia and Herzegovina, Italy, Greece, Germany, Croatia and Slovenia. In 2016, the Choir of the Jewish Community of Novi Sad was awarded the Medal for Cultural Preservation by the Cultural Institute of Vojvodina, in recognition of its contribution to cultural heritage. A distinctive quality of the ensemble is the diversity of its members, who come from different national and religious backgrounds. Since 2004, the choir has been conducted by Vesna Kesić Krsmanović, who studied composition and conducting at the Music Academy in Belgrade and attended conducting masterclasses in Siena and Hungary. For more than twenty years, she has also conducted the Opera Choir of the Serbian National Theatre in Novi Sad.",
      {
        "heading": "Academic Choir Maribor",
        "level": 4
      },
      "Maribor, Slovenia Conductor: Uroš Jurgec",
      {
        "img": "/img/maribor-choir.webp"
      },
      "The Academic Choir Maribor has been active since 1964 within the cultural organization KUD Student and is one of the main bearers of student, youth and amateur culture in Maribor. In 2025, the choir welcomed Uroš Jurgec as its new artistic leader. The choir has achieved remarkable success in international competitions and festivals both in Slovenia and abroad. Among its many distinctions are first place in the mixed choir category at the “Bela Bartok” International Choir Competition in Debrecen in 2016, first place at the International May Choir Competition “Prof. Georgi Dimitrov” in Varna in 2018, and numerous awards at major festivals and competitions around the world. Further achievements include prizes at the Grand Prix Polifonico “Guido d'Arezzo” in Italy, the national competition “Nasa pesem” in Maribor, the “Seghizzi” International Competition in Gorizia and the International Competition of Choral Singing in Spittal an der Drau, Austria. Uroš Jurgec earned a master's degree in music from the University of Maribor. He began his conducting career in 2016 as a choir singer, later serving as assistant conductor and co-conductor before becoming the choir's artistic leader in 2025. He has received awards for conducting, programme selection, and performances of required and contemporary works.",
      {
        "heading": "\"Izar Argia\"",
        "level": 4
      },
      "Larrabetzu, Spain Conductor: Aintzane Garamendi Eguren",
      {
        "img": "/img/izar.webp"
      },
      "The Izar Argia choir was founded on May 22, 1995, in Larrabetzu, Bizkaia, in the Basque Country, as a children’s treble choir. It was established to teach, promote, and share traditional Basque choral music in the Txorierri region and beyond, both nationally and internationally. Today, the choir includes around 30 singers aged 11 to 21. Its repertoire covers a wide variety of styles and works in different languages, with Basque as its main language. The choir’s aim is to guide, advise and educate young people through music and culture, beginning within the Larrabetzu Music School. Since its foundation, Izar Argia has been a member of the Bizkaiko Abesbatzen Elkartea - Bizcay Choral Association. The choir has taken part in concerts and festivals in the Basque Country and abroad, including the European Music Festival for Young People in Neerpelt, Belgium, and the Spring Festival in Montecatini Terme, Italy. The choir is conducted by Aintzane Garamendi Eguren, a teacher at the Larrabetzu Music School since 1998, specializing in piano, music theory and choir. Her work is guided by the desire to transmit choral music to young people and to keep Basque songs and culture alive through singing.",
      {
        "heading": "Pieria Teachers’ Choir (SEPE)",
        "level": 4
      },
      "Katerini, Greece Conductor: Olga Matthaiou",
      {
        "img": "/img/sepe.webp"
      },
      "The Choir of the Association of Primary Education Teachers of Pieria was founded in 2012 and is an amateur choral ensemble based in Pieria, Greece. Its aim is to achieve a refined artistic result in every performance, through collective effort, cooperation and a shared love of music. Over the years, the choir has developed into a creative community, supported by local conductors from Katerini who are dedicated to music, culture and education. Throughout its artistic journey, the choir has given numerous concerts featuring Greek art songs and traditional repertoire in Greece, mainly in Pieria and Thessaloniki, as well as abroad, with appearances in Istanbul and in the Greek-speaking regions of Apulia, Italy. It has also presented successful music-theatre productions in Katerini, including Erotokritos and Digenis Akritas, which were later performed in other cities. The choir has participated in many cultural events organized by the Municipality of Katerini, the Primary Education Directorate of Pieria and various cultural associations throughout the region, as well as in choral festivals in Velventos and Nafplio. Since 2025, the choir has been conducted by Olga Matthaiou, a musicologist and music educator, graduate of the Department of Music Studies of Aristotle University of Thessaloniki, with postgraduate studies in music and education. She has extensive experience in teaching music and in the founding and conducting of children’s, school and adult choirs.",
      {
        "heading": "Mixed Choir of Livadia \"Erkyna\"",
        "level": 4
      },
      "Livadia, Greece Conductor: Iro Panagiotopoulou",
      {
        "img": "/img/livadia-choir.webp"
      },
      "The Mixed Choir of Levadia Erkyna was founded by citizens of Levadia with the aim of cultivating music and enhancing the spiritual, artistic and cultural life of the city. It is a four-part mixed choir with a broad and constantly evolving repertoire, including polyphonic works of Western art music, songs and melodies from around the world, spirituals, gospels, rock and other contemporary genres, as well as works by important Greek and international composers. Throughout its long artistic journey, the choir has participated in numerous choral festivals in Greece and abroad, while also organizing choral meetings in collaboration with the Municipality of Levadia. It has worked with many distinguished Greek composers and performers and has presented works by Mikis Theodorakis, Pantelis Thalassinos and Nikos Portokaloglou. Among the choir’s landmark productions in Levadia are Zorba by Mikis Theodorakis, Verdi’s concert operas La Traviata and Il Trovatore, and the emblematic work Axion Esti by Mikis Theodorakis and Odysseas Elytis. Since September 2024, the choir has been taught and conducted by Iro Panagiotopoulou, a music teacher from Levadia. She graduated from the Department of Music Studies of the National and Kapodistrian University of Athens and has studied piano, fugue and music theory. She has long experience in choral singing, music education and conducting school choirs and ensembles.",
      {
        "heading": "Nafplio Choral Workshop",
        "level": 4
      },
      "Nafplio, Greece Conductor: Giannis Nikolopoulos",
      {
        "img": "/img/nafpliochoir.webp"
      },
      "The Choral Workshop of Nafplio is a polyphonic choral ensemble founded by citizens of Nafplio ten years ago. Since its creation, it has developed a significant artistic and social presence, presenting concerts, music-theatre performances and participating in festivals throughout Greece. One of its important initiatives was the organization of the 1st Argolida Choir Meeting in Nafplio in 2017, with the participation of nine choirs, as well as the establishment of an annual choral festival every June, dedicated to important Greek composers and poets. The ensemble has presented major concerts and performances, including “Man and Music” at the hall of the “Parnassos” Literary Society in Athens, as well as a concert-performance in Nafplio dedicated to rebetiko as part of Greece’s intangible cultural heritage. At the same time, the choir gives concerts in local institutions, such as care homes, hospitals and social facilities, offering music and entertainment to members of the community. The choir participates in music festivals across Greece, with a notable appearance at the 12th International Festival of Choirs and Philharmonic Orchestras at the Thessaloniki Concert Hall in 2020. Its Artistic Director and conductor is Giannis Nikolopoulos, an experienced music educator, conductor and teacher of music theory, piano and accordion, who has directed the Choral Workshop of Nafplio since 2016.",
      {
        "heading": "\"Belcantes\"",
        "level": 4
      },
      "Patras, Greece Conductor: Elena Droukopoulou Piano: Konstantina Androutsopoulou",
      {
        "img": "/img/belcantesnew.webp"
      },
      "The Belcantes Choir of Agios Andreas Eglykadas, Patras, was founded in September 2016 and has since developed a remarkable artistic presence, participating in festivals, competitions and concerts in Greece and abroad. Throughout its artistic journey, the choir has received important distinctions in international choral events. In 2021, it won first place in its category at the World Peace Choral Festival, while in 2022 it participated in the 26th International Choral Music Competition in Preveza, where it was awarded two Silver Medals. In the same year, Belcantes also took part in the 12th World Festival and Competition of the “Korais” Choir in Thessaloniki, receiving a Special Award for Musical Presentation, a Silver Medal and a money award. In 2023, the choir gave the world premiere of the musical “The Christmas of the Miser” by composer Charis Pegiazis, while at the 10th ARTIVA International Choral Competition in Nafplio it received a Gold and a Silver Medal. In April 2025, it participated in the Choral Space International Festival in Berlin, dedicated to the music of Ola Gjeilo. The choir is conducted by Elena Droukopoulou.",
      {
        "heading": "\"Anatoli\"",
        "level": 4
      },
      "Limassol, Cyprus Conductor: Fr. Nikolaos Lympouridis",
      {
        "img": "/img/anatoli-choir.webp"
      },
      "The Traditional Choir “Anatoli” of the Holy Metropolis of Limassol was founded in 2003 with the aim of promoting and disseminating Greek traditional music, especially Cypriot music, and of encouraging young people and children to engage with the musical heritage of Cyprus and Hellenism more broadly. Its repertoire consists mainly of folk songs from different regions of the Greek world, including Cyprus, Thrace, Macedonia, Asia Minor, Cappadocia and the Aegean. Since Christmas 2003, the choir has presented traditional carols from various parts of Hellenism and has taken part in important cultural events, including the international festival “KYPRIA”, the Choral Meeting of Florina and concerts organized by the Holy Metropolis of Limassol, featuring artists from Greece and Cyprus. In 2009, the choir participated in the recording “Palin akouste Archontes”, with traditional carols and ecclesiastical hymns for the Twelve Days of Christmas, New Year and Epiphany. The choir is conducted by Fr. Nikolaos Lympouridis, who studied Theology at the Aristotle University of Thessaloniki and Byzantine Music in Thessaloniki and Athens. In 1997, he founded the Byzantine Choir “Romanos Melodos”, which he continues to conduct, and in 2003 he founded the Traditional Choir “Anatoli”.",
      {
        "heading": "\"Aoidon Fones\"",
        "level": 4
      },
      "Paralimni, Cyprus Conductor: Pantelina Paschali Piano: Dimitris Paschalis",
      {
        "img": "/img/aoidon.webp"
      },
      "The Youth Choir “Aoidon Fones” of the Municipality of Paralimni - Deryneia is a dynamic ensemble devoted to culture and music education, with a continuous presence since 1996. The choir welcomes children and young people aged 9 to 18 and seeks to foster a love of choral singing while encouraging active participation in the cultural life of the community. With numerous appearances at events and festivals in Cyprus and abroad, “Aoidon Fones” proudly represents the Municipality of Paralimni - Deryneia and highlights the strength of collective musical expression. Its repertoire centres mainly on Greek music, performed with freshness, sensitivity, and artistic quality. Today, the choir has around 30 members and continues to grow through the energy, talent, and dedication of its young singers. Since 2022, the choir has been conducted by Pantelina Paschali, a musician, conductor, and founder of a music school in the free Famagusta district. She holds a Bachelor of Music from European University Cyprus and a master’s degree in arts management from the University of Derby. Her work combines artistic creativity with educational vision in support of music education and cultural expression. The choir is accompanied by Dimitris Paschalis.",
      {
        "heading": "Choir and Mandolinata of Argostoli",
        "level": 4
      },
      "Argostoli, Kefalonia, Greece Conductor: Spyros Theotokatos",
      {
        "img": "/img/argostoli-choir.webp"
      },
      "The Choir of Argostoli was founded in 1980, with the aim of continuing Kefalonia’s rich tradition in choral music. From its foundation until 2010, the choir was conducted by Vasilis Mountakis. Today, it consists of 25 male singers, preserving the island’s special tradition of male choirs. In its concerts, the choir is accompanied by a mandolinata, which enriches the colour and character of its performances. Throughout its long artistic journey, the Choir of Argostoli has given numerous concerts in Kefalonia, throughout Greece and abroad, travelling to many European countries as well as to New York in 2013. With its distinctive sound, the ensemble represents the finest tradition of Kefalonian choral singing and serves as a cultural ambassador of the island. During its 45-year history, the choir has recorded five albums, helping to preserve and promote Kefalonia’s choral heritage. Since 2015, the Choir and Mandolinata of Argostoli has been conducted by Spyros Theotokatos, a musician with studies in Byzantine Music, advanced music theory, and choral and orchestral conducting. Under his direction, the ensemble has performed widely in Greece and abroad and has recorded two albums of Kefalonian songs. Every year, it organizes the Kefalonia Choral Meetings, welcoming choirs from Greece and abroad.",
      {
        "heading": "The All-American Boys Chorus",
        "level": 4
      },
      "Anaheim, California, USA Artistic Director / Conductor: Wesley Martin",
      {
        "img": "/img/all-american-boys.webp"
      },
      "The All-American Boys Chorus, based in Anaheim, California, was founded in 1970 and is an Emmy Award-winning youth music organization in the United States. The Chorus is dedicated to developing excellence in both musicianship and character, offering boys outstanding vocal training, leadership development, performance opportunities, concert tours and community outreach activities. Known for its distinctive sound and strong commitment to tradition, the Chorus has performed throughout the United States and around the world, serving as musical ambassadors and inspiring audiences through the power of music. Beyond performance, the organization places great emphasis on discipline, teamwork, confidence and personal growth, helping young men develop skills and values that support them throughout life. The Chorus is led by Wesley Martin, Artistic Director and Conductor since 2002. Born and raised in Australia, he graduated from the Sydney Conservatorium of Music and later received the Hungarian State Scholarship to study at the renowned Kodaly Institute in Hungary. A classically trained singer, conductor, arranger and educator, he brings more than 40 years of experience working with choirs of all ages. Under his leadership, the All-American Boys Chorus has become one of America’s premier boys’ choirs and was honored with the Outstanding Arts Organization Award in 2025.",
      ...choir("ave-chamber-choir", "en", {level: 4}),
      {
        "heading": "Children’s Choir of Preveza “Armonia”",
        "level": 4
      },
      "Preveza, Greece Conductor: Anelia Stefanova",
      {
        "img": "/img/childrens-main.webp"
      },
      "The Children’s Choir of Preveza “Armonia” was founded in 1983 by conductor Andronikos Kourouklis and forms part of the Choral Society of Preveza “Armonia”. During four decades of artistic activity, the choir has represented Preveza and Greece in festivals and competitions both nationally and internationally. The choir has won 5 first, 2 second and 2 third prizes in international choral competitions in Bulgaria, Greece, Italy, Switzerland, Hungary, Poland and Slovakia. It has also twice been awarded the title of Best Greek Children’s Choir at the Athens International Choral Festival. It appears regularly at major festivals in Greece, including Athens, Patras and Thessaloniki, and participated in the cultural events of the Athens 2004 Olympic Games. Abroad, the choir has performed at important events such as the “Aram Khachaturian” International Choral Festival in Haskovo, the International Festival of Rome, the Moscow Easter Festival and the Eurochestries International Festival in France. Among its most recent distinctions are the Gold Award and four special prizes at the “Gaude Cantem” World Choral Competition in Bielsko-Biala, Poland, in 2023, and the Gold Medal at the 10th International Youth Music Festival in Bratislava, Slovakia, in 2025. Since 1994, the choir has been conducted by Anelia Stefanova, a conductor and music educator with extensive experience in children’s and youth choral music.",
      {
        "heading": "Mixed Choir of Preveza “Armonia”",
        "level": 4
      },
      "Preveza, Greece Conductor: Anelia Stefanova",
      {
        "img": "/img/mixed-armonia.webp"
      },
      "The Mixed Choir of Preveza “Armonia” was founded in 1969 by a group of music enthusiasts from Preveza, under the direction of the late conductor Andronikos Kourouklis, with the aim of promoting choral music and cultural activity in the city of Preveza. Throughout its history, the choir’s artistic development was shaped by conductors Giorgos Kakitsis, Stavros Solomos and Valentin Stefanov. “Armonia” is the founding organization of the International Choral Festival of Preveza in 1983 and the International Choral Competition of Sacred Music in 1995, two important institutions that have contributed significantly to the development of choral music in Greece. The choir has presented major artistic productions and has performed in many countries across Europe. It has also collaborated with distinguished artists and orchestras in works such as Carmina Burana by Carl Orff and Axion Esti by Mikis Theodorakis. The choir has received numerous awards in international competitions, including distinctions in Athens, Rome, Bratislava and St. Petersburg. In May 2026, it was also awarded a Gold Medal at the 15th World Choir Festival in Thessaloniki. Since 2016, the choir has been conducted by Anelia Stefanova.",
      {
        "heading": "Programme Explanations",
        "level": 3,
        "align": "center"
      },
      {
        "heading": "Street Performances",
        "level": 4
      },
      "During the Street Performances, all participating choirs take part. These events are conceived as an open presentation of the festival in the streets and public spaces of the city. Each choir performs short excerpts of its repertoire, offering the audience a first musical introduction to its artistic work. The pieces presented during the street performances are indicative of the repertoire that will later be heard in the official concerts.",
      {
        "heading": "Parade & Opening Ceremony (Thursday Evening)",
        "level": 4
      },
      "On Thursday evening, all participating choirs take part in the parade, which leads to the Open Garden Theatre of the Municipality of Preveza \"Giannis Ritsos\". During the Opening Ceremony, each choir performs one (1) song, presenting itself officially to the audience and marking the formal beginning of the festival.",
      {
        "heading": "Competition Sessions",
        "level": 4
      },
      "During the competition sessions, choirs perform according to the competition categories in which they have been registered. Each choir presents the programme already declared in its application, which is evaluated by the International Jury Committee in accordance with the competition regulations.",
      {
        "heading": "Evening Concerts (Friday & Saturday)",
        "level": 4
      },
      "The evening concerts are festival concerts featuring choirs from across the entire festival programme. Each concert includes four to five (4–5) choirs, and in each appearance, participating choirs perform three to four (3–4) pieces, with a total performance time of approximately 12 minutes per choir. These concerts take place either in open-air venues, supported by sound amplification and microphones, or inside churches, where the repertoire presented is primarily sacred or religious in character. The evening concerts aim to highlight the diversity of choral traditions and styles represented at the festival and to offer the audience a rich and varied musical experience, adapted to the character of each venue.",
      {
        "heading": "Meeting with the International Jury Committee (Sunday Morning)",
        "level": 4
      },
      "On Sunday morning, a meeting takes place between the International Jury Committee and the conductors who participated in the competition. During this meeting, jury members provide feedback, observations and professional guidance, discussing aspects of performance, interpretation and choral development, and offering constructive advice for future artistic work.",
      {
        "heading": "Closing Ceremony (Sunday Evening)",
        "level": 4
      },
      "During the Closing Ceremony, only the awarded choirs perform. The selection of the performed works is made by the International Jury Committee, and the performances accompany the official announcement of the competition results.",
      {
        "heading": "Final Note",
        "level": 2
      },
      "The purpose of these activities is to promote artistic exchange, visibility, education and dialogue among choirs, conductors and audiences, while strengthening the festive and international character of the event.",
      {
        "heading": "Application Form for the 30th International Choral Competition",
        "level": 3,
        "align": "center"
      },
      "6-12 July 2026",
      "[Download](/ApplicationFormICCP2026.docx)",
      {
        "heading": "Rules of the 30th International Choral Competition",
        "level": 3,
        "align": "center"
      },
      "6-12 July 2026",
      "[Download](/RulesICCP2026.docx)",
      {
        "heading": "Application Form for the 44th International Choral Festival",
        "level": 3,
        "align": "center"
      },
      "6-12 July 2026",
      "[Download](/ApplicationForm44thICFP-EN.docx)",
      {
        "heading": "Rules of the 44th International Choral Festival",
        "level": 3,
        "align": "center"
      },
      "6-12 July 2026",
      "[Download](/Rules44thICFP-EN.docx)"
    ],
    el: [
      "44ο Διεθνές Χορωδιακό Φεστιβάλ Πρέβεζας",
      {
        "list": [
          "6–12 Ιουλίου 2026"
        ]
      },
      {
        "img": "/img/fest-2026.webp"
      },
      {
        "wide": true
      },
      "Αγαπητοί συνάδελφοι και φίλοι, Με χαρά σας ενημερώνουμε ότι ο 2ος Διεθνής Διαγωνισμός Χορωδιακής Σύνθεσης – Πρέβεζα 2025 ολοκληρώθηκε με επιτυχία.\nΣυνολικά 45 έργα υποβλήθηκαν από συνθέτες από 16 χώρες, γεγονός που επιβεβαιώνει το έντονο διεθνές ενδιαφέρον για το φεστιβάλ μας και τη σύγχρονη χορωδιακή μουσική. Με ιδιαίτερη χαρά σας προσκαλούμε εσάς και τη χορωδία σας στην επόμενη μεγάλη μας διοργάνωση:",
      "44ο Διεθνές Χορωδιακό Φεστιβάλ Πρέβεζας 30ος Διεθνής Χορωδιακός Διαγωνισμός Πρέβεζας Πρέβεζα, Ελλάδα – 6–12 Ιουλίου 2026",
      "Ο διαγωνισμός περιλαμβάνει κατηγορίες για:",
      {
        "list": [
          "- μικτές χορωδίες",
          "- χορωδίες ίσων φωνών (γυναικείες / ανδρικές)",
          "- νεανικές και παιδικές χορωδίες",
          "- ιερή και σύγχρονη μουσική",
          "- χορωδίες ενηλίκων (60+) με ελεύθερο ρεπερτόριο και προαιρετική συνοδεία"
        ]
      },
      "Όλες οι συμμετέχουσες χορωδίες θα λάβουν δίπλωμα και αναλυτική αξιολόγηση από τη διεθνή κριτική επιτροπή.\n\nΟι καλύτερες χορωδίες θα βραβευθούν με χρυσά, αργυρά ή χάλκινα μετάλλια, ενώ επιλεγμένες εμφανίσεις θα δημοσιευθούν στο επίσημο [κανάλι YouTube](https://www.youtube.com/@internationalchoralfestiva8318/videos) του φεστιβάλ.",
      "Στο πλαίσιο του 44ου Διεθνούς Χορωδιακού Φεστιβάλ Πρέβεζας πραγματοποιείται επίσης νέος κύκλος masterclass για μαέστρους χορωδίας (6–8 Ιουλίου 2026).",
      "Για τον πλήρη κανονισμό και πληροφορίες συμμετοχής, παρακαλούμε επικοινωνήστε μαζί μας μέσω email ή επισκεφθείτε την ιστοσελίδα μας.",
      "Επικοινωνία: [prevezachoralfestival@gmail.com](mailto:prevezachoralfestival@gmail.com) Περισσότερες πληροφορίες: [www.armoniachoir.org](https://www.armoniachoir.org) Τηλέφωνο / WhatsApp: [+30 6977 132107](tel:+306977132107)",
      "Θα χαρούμε πολύ να υποδεχτούμε τη χορωδία σας στην Πρέβεζα και να μοιραστούμε μαζί σας μια εμπνευσμένη μουσική εμπειρία δίπλα στη θάλασσα το 2026. Με εκτίμηση,\nΚοσμάς Κορωναίος\nΠρόεδρος – Διεθνές Χορωδιακό Φεστιβάλ Πρέβεζας",
      {
        "p": "Πρέβεζα · 6–12 Ιουλίου 2026",
        "align": "center"
      },
      "Μια εβδομάδα διαγωνισμού, συναυλιών και εμφανίσεων στην πόλη — με τον 30ό Διεθνή Διαγωνισμό Χορωδιών στο επίκεντρο.",
      "Διαγωνισμός Συναυλία Τελετή Εμφανίσεις στην πόλη Σεμινάριο Εκδήλωση",
      {
        "list": [
          "[Δευ 6](#el-mon)",
          "[Τρι 7](#el-tue)",
          "[Τετ 8](#el-wed)",
          "[Πεμ 9](#el-thu)",
          "[Παρ 10](#el-fri)",
          "[Σαβ 11](#el-sat)",
          "[Κυρ 12](#el-sun)"
        ]
      },
      {
        "anchor": "el-mon"
      },
      {
        "heading": "Δευτέρα 6 Ιουλίου 2026",
        "level": 2
      },
      "10:00 – 20:30 Σεμινάριο",
      {
        "heading": "7ο Διεθνές Σεμινάριο & Masterclass για Διευθυντές Χορωδιών",
        "level": 3
      },
      "Πινακοθήκη Δήμου Πρέβεζας (Οικία Αθανασιάδη) Σε συνεργασία με τη Χορωδία Δωματίου AVE από τη Λιουμπλιάνα (SI), υπό τη μουσική διεύθυνση των Ambrož Čopi (SI) και Marco Antonio García de Paz (ES).",
      {
        "anchor": "el-tue"
      },
      {
        "heading": "Τρίτη 7 Ιουλίου 2026",
        "level": 2
      },
      "10:00 – 20:30 Σεμινάριο",
      {
        "heading": "7ο Διεθνές Σεμινάριο & Masterclass για Διευθυντές Χορωδιών",
        "level": 3
      },
      "Πινακοθήκη Δήμου Πρέβεζας (Οικία Αθανασιάδη) Σε συνεργασία με τη Χορωδία Δωματίου AVE από τη Λιουμπλιάνα (SI), υπό τη μουσική διεύθυνση των Ambrož Čopi (SI) και Marco Antonio García de Paz (ES).",
      {
        "anchor": "el-wed"
      },
      {
        "heading": "Τετάρτη 8 Ιουλίου 2026",
        "level": 2
      },
      "10:00 – 18:00 Σεμινάριο",
      {
        "heading": "7ο Διεθνές Σεμινάριο & Masterclass για Διευθυντές Χορωδιών",
        "level": 3
      },
      "Πινακοθήκη Δήμου Πρέβεζας (Οικία Αθανασιάδη) Σε συνεργασία με τη Χορωδία Δωματίου AVE από τη Λιουμπλιάνα (SI), υπό τη μουσική διεύθυνση των Ambrož Čopi (SI) και Marco Antonio García de Paz (ES).",
      "21:00 Τελετή",
      {
        "heading": "Τελική Συναυλία του Masterclass 2026 & Τελετή Απονομής Βραβείων του 2ου Διεθνούς Διαγωνισμού Χορωδιακής Σύνθεσης — Πρέβεζα 2025",
        "level": 3
      },
      "Ι. Ν. Αγίων Κωνσταντίνου & Ελένης",
      "Ave Chamber Choir, Λιουμπλιάνα SI — Διευθύνει: Ambrož Čopi Παιδική Χορωδία Πρέβεζας «Αρμονία», GR — Διευθύνει: Anelia Stefanova",
      {
        "anchor": "el-thu"
      },
      {
        "heading": "Πέμπτη 9 Ιουλίου 2026",
        "level": 2
      },
      "19:00 Εμφανίσεις στην πόλη",
      {
        "heading": "Παρουσιάσεις χορωδιών σε κεντρικά σημεία της πόλης",
        "level": 3
      },
      "Συμμετέχουσες χορωδίες (7)",
      {
        "list": [
          "Female Chamber Choir Caloroso, Mol BE — Jasmien Gys",
          "Sincoro coro di Arcigay, Ρώμη IT — Camilo Vasquez",
          "Παιδική Χορωδία «Okarina», Πρίστινα XK — Elikonë Hysaj Shala",
          "Choir PRIMO Secondary School nr1, Bydgoszcz PL — Monika Wilkiewicz",
          "Belcantes Αγίου Ανδρέα Εγλυκάδας, Πάτρα GR — Έλενα Δρουκοπούλου",
          "Youth Choir Elefteria, Κισινάου MD — Dorin Bîtcă",
          "Resonans con tutti, Zabrze PL — Arlena Różycka-Gałązka & Waldemar Gałązka"
        ]
      },
      "19:30 Εκδήλωση",
      {
        "heading": "Συνάντηση γνωριμίας με τους αρχηγούς αποστολών & τους επισήμους",
        "level": 3
      },
      "Έδρα της Χορωδίας Πρέβεζας «Αρμονία»",
      "20:30 Εκδήλωση",
      {
        "heading": "Παρέλαση χορωδιών προς το Κηποθέατρο «Γιάννης Ρίτσος»",
        "level": 3
      },
      "Πλατεία Ανδρούτσου",
      "21:00 Συναυλία",
      {
        "heading": "Σερενάτα Υποδοχής από το Ιόνιο Πέλαγος",
        "level": 3
      },
      "Κηποθέατρο Δήμου Πρέβεζας «Γιάννης Ρίτσος» Χορωδία & ρεπερτόριο (1)",
      "Χορωδία και Μαντολινάτα Αργοστολίου, Αργοστόλι, Κεφαλονιά GR — Σπύρος Θεοτοκάτος",
      {
        "list": [
          "«Απόψε την κιθάρα μου», Κεφαλονίτικη αριέτα",
          "«Όλα τ' Απρίλη τα λουλούδια», Ποίηση: Γ. Αθάνας (1893–1987), Μουσική: Διονύσιος Λαυράγκας (1860–1941)",
          "«Το κλειδάκι», Κεφαλονίτικη καντάδα",
          "«Ξένος είμαι», Κεφαλονίτικη καντάδα",
          "«Λαλούν τ' αηδόνια», Ποίηση: Γ. Αθάνας (1893–1987), Μουσική: Διονύσιος Λαυράγκας (1860–1941)",
          "«Κεφαλονιά», Διονύσιος Αποστολάτος (1926–2009)",
          "«Το καράβι», Στίχοι: Σωτήρης Γαλιατσάτος, Μουσική: Σπύρος Μαρκάτος"
        ]
      },
      "21:30 Τελετή Έναρξης",
      {
        "heading": "Τελετή Έναρξης",
        "level": 3
      },
      "Κηποθέατρο Δήμου Πρέβεζας «Γιάννης Ρίτσος»",
      "Χαιρετισμοί από τις τοπικές αρχές και παρουσίαση των συμμετεχουσών χορωδιών στο 44ο Διεθνές Χορωδιακό Φεστιβάλ Πρέβεζας.",
      "Χορωδίες Τελετής Έναρξης & ρεπερτόριο (12)",
      "Choir PRIMO Secondary School nr1, Bydgoszcz PL — Monika Wilkiewicz",
      {
        "list": [
          "\"Prząśniczka\", Stanisław Moniuszko (1819–1872)"
        ]
      },
      "Χορωδία «Ανατολή», Λεμεσός CY — π. Νικόλαος Λυμπουρίδης",
      {
        "list": [
          "«Ψιντρή βασιλιτζιά μου», παραδοσιακό κυπριακό"
        ]
      },
      "Essence of Elements, Ρώμη IT — Jorge Arturo Higuera",
      {
        "list": [
          "\"Earth Song\", Michael Jackson (1958–2009)"
        ]
      },
      "Female Chamber Choir Caloroso, Mol BE — Jasmien Gys",
      {
        "list": [
          "\"Annan Polska\", Anna-Mari Kähärä (γεν. 1963)"
        ]
      },
      "Youth Choir Elefteria, Κισινάου MD — Dorin Bîtcă",
      {
        "list": [
          "\"Vine hulpe di la munte\", Adrian Pop (γεν. 1951)"
        ]
      },
      "Belcantes Αγίου Ανδρέα Εγλυκάδας, Πάτρα GR — Έλενα Δρουκοπούλου · πιάνο: Κωνσταντίνα Ανδρουτσοπούλου",
      {
        "list": [
          "«Το τρίτο στεφάνι», Σταμάτης Κραουνάκης (γεν. 1955), χορ. επεξ. Λουκάς Αδαμόπουλος"
        ]
      },
      "Transilvania Choir, Brașov RO — Mihaela Mureșan",
      {
        "list": [
          "\"Hora Staccato\", Nicolae Gâscă (γεν. 1942)"
        ]
      },
      "Sincoro coro di Arcigay, Ρώμη IT — Camilo Vasquez",
      {
        "list": [
          "\"Believe / Open Your Heart / Borderline / How Will I Know\" — ποτ-πουρί (Cher, Madonna, Whitney Houston)"
        ]
      },
      "Asociația Corală Academica Bucovina, Câmpulung Moldovenesc RO — Emil Forfotă",
      {
        "list": [
          "\"Sârba pe loc\", Gheorghe Danga (1905–1959)"
        ]
      },
      "Novi Sad's Jewish Community Choir «Hashira», Νόβι Σαντ RS — Vesna Kesić Krsmanović",
      {
        "list": [
          "\"Fiddler on the Roof\", Jerry Bock (1928–2010), διασκ. Ed Lojeski"
        ]
      },
      "The All-American Boys Chorus, Anaheim CA US — Wesley Martin",
      {
        "list": [
          "\"Band of Brothers\", Michael Kamen (1948–2003)"
        ]
      },
      "Izar Argia Abesbatza, Larrabetzu ES — Aintzane Garamendi Eguren",
      {
        "list": [
          "\"Medley Euskal Kantak\" (περιλαμβάνει: \"Txoriak Txori\", \"Aitormena\", \"Sagarra Jo\") — μουσική: Mikel Laboa (1934–2008), Josu Zabala (γεν. 1954) & Kalakan"
        ]
      },
      {
        "anchor": "el-fri"
      },
      {
        "heading": "Παρασκευή 10 Ιουλίου 2026",
        "level": 2
      },
      "10:00 Διαγωνισμός Κατηγορία Ζ",
      {
        "heading": "30ός Διεθνής Διαγωνισμός Χορωδιών",
        "level": 3
      },
      "Πνευματικό Κέντρο Ι. Μ. Νικοπόλεως & Πρεβέζης Διαγωνιζόμενες χορωδίες & ρεπερτόριο (4)",
      "Choir PRIMO Secondary School nr1, Bydgoszcz PL — Monika Wilkiewicz",
      {
        "list": [
          "\"Moja piosenka\", Józef Świder (1930–2014)",
          "\"Dominus illuminatio mea\", Marek Raczyński (γεν. 1982)",
          "\"Modlitwa do Bogarodzicy\", Józef Świder (1930–2014)",
          "\"Leć głosie po rosie\", Marcin Wawruk (γεν. 1963)",
          "\"Krzak dzikiej róży\", Antoni Szaliński (1925–1997)",
          "\"Listening\", Anna Rochawska-Musiałczyk (γεν. 1987)"
        ]
      },
      "Female Chamber Choir Caloroso, Mol BE — Jasmien Gys",
      {
        "list": [
          "\"Is Our Microphone On?\", Søren Møller (γεν. 1975)",
          "\"Through the House Give Glimmering Light\", Amy Beach (1867–1944)",
          "\"Jesu Pie\", Rudi Tas (γεν. 1957)",
          "\"Annan Polska\", Anna-Mari Kähärä (γεν. 1963)"
        ]
      },
      "Makeblijde, Zele BE — Filip Haentjens",
      {
        "list": [
          "\"O Oriëns\", Paweł Łukaszewski (γεν. 1968)",
          "\"Verba Mea\", Vic Nees (1936–2013)",
          "\"Ave Maria\", Gustav Holst (1874–1934)",
          "\"Spes Mia\", Mia Makaroff (γεν. 1970)"
        ]
      },
      "Belcantes Αγίου Ανδρέα Εγλυκάδας, Πάτρα GR — Έλενα Δρουκοπούλου · βιολί: Έβη Γκιώνη · πιάνο: Κωνσταντίνα Ανδρουτσοπούλου",
      {
        "list": [
          "\"Salve Regina\", Josu Elberdin (γεν. 1976)",
          "\"Trisagion\", Iryna Aleksiychuk (γεν. 1967)",
          "\"Stars\", Ēriks Ešenvalds (γεν. 1977)",
          "\"Wah-Bah-Dah-Bah-Doo-Bee\", Ivo Antognini (γεν. 1963)"
        ]
      },
      "13:00 Διαγωνισμός Κατηγορία Ζ — συνέχεια",
      {
        "heading": "30ός Διεθνής Διαγωνισμός Χορωδιών",
        "level": 3
      },
      "Πνευματικό Κέντρο Ι. Μ. Νικοπόλεως & Πρεβέζης Διαγωνιζόμενες χορωδίες & ρεπερτόριο (4)",
      "Transilvania Choir, Brașov RO — Mihaela Mureșan",
      {
        "list": [
          "\"Fair Phillis\", John Farmer (1570–1601)",
          "\"Rugăciune\", Dan Pavelescu (γεν. 1952)",
          "\"Și altfel de variațiuni pe tema Chindiei\", Alexandru Pașcanu (1920–1989)",
          "\"Father Thunder\", Laura Jēkabsone (γεν. 1985)"
        ]
      },
      "Novi Sad's Jewish Community Choir «Hashira», Νόβι Σαντ RS — Vesna Kesić Krsmanović",
      {
        "list": [
          "\"Otče naš\", Josif Marinković (1851–1931)",
          "\"Anenu\", Aleksandar S. Vujić (1945–2017)",
          "\"Ma Towu\", Louis Lewandowski (1821–1894)",
          "\"Salmo 150\", Ernani Aguiar (γεν. 1950)",
          "\"Con el vito\", Manuel Massotti Littel (1915–1999)",
          "\"Lindjo\", Vladimir Berdović (1906–1980)"
        ]
      },
      "Gøtu Kirkju Ungdómskór, Gøta FO — Símun Hammer",
      {
        "list": [
          "\"Gøta\", Peder Karlsson (γεν. 1963)",
          "\"Plaudite manibus\", Branko Stark (γεν. 1954)",
          "\"Harra Guð títt dýra navn…\", Símun Hammer (γεν. 1964)",
          "\"Jubilate Deo\", Giovanni Gabrieli (1554/1557–1612)"
        ]
      },
      "The Academic Choir Maribor, Maribor SI — Uroš Jurgec",
      {
        "list": [
          "\"O Sapientia quae ex ore Altissimi\", Jacobus Handl Gallus (1550–1591)",
          "\"Vsenoščnoe bdenie, op. 37: 6. Bogoroditse devo\", Sergei Rachmaninoff (1873–1943)",
          "\"Sing Joyfully to God Our Strength\", Ambrož Čopi (γεν. 1973)",
          "\"Indodana\", Michael Barrett & Ralf Schmitt",
          "\"O Sapientia\", Tadeja Vulc (γεν. 1978)"
        ]
      },
      "18:00 Διαγωνισμός Κατηγορίες Γ · Δ · Β · Ε",
      {
        "heading": "30ός Διεθνής Διαγωνισμός Χορωδιών",
        "level": 3
      },
      "Πνευματικό Κέντρο Ι. Μ. Νικοπόλεως & Πρεβέζης Διαγωνιζόμενες χορωδίες & ρεπερτόριο (6)",
      "Παιδική Χορωδία «Okarina», Πρίστινα XK (Γ) — Elikonë Hysaj Shala",
      {
        "list": [
          "\"Da così dotta man\", Giovanni Pierluigi da Palestrina (1525–1594)",
          "\"Da pacem\", Charles Gounod (1818–1893)",
          "\"Deo Gracias\" (A Ceremony of Carols, Op. 28), Benjamin Britten (1913–1976)",
          "\"Vjosa, a Song of Wild Eternity\", Aulon Naçi (γεν. 1983)"
        ]
      },
      "Youth Choir Elefteria, Κισινάου MD (Δ) — Dorin Bîtcă",
      {
        "list": [
          "\"Cantate Domino\", Claudio Monteverdi (1567–1643)",
          "\"Bogorodice Devo, radujsya\", Sergei Rachmaninoff (1873–1943)",
          "\"Alleluia\", Romuald Twardowski (1930–2024)",
          "\"Ave Generosa\", Ola Gjeilo (γεν. 1978)"
        ]
      },
      "Kla-sch Vocal Quartet (Πανεπ. Częstochowa), Częstochowa PL (Δ) — Przemysław Jeziorowski",
      {
        "list": [
          "\"Ave Maria\", Tomás Luis de Victoria (1548–1611)",
          "\"Abschied vom Walde\", Felix Mendelssohn-Bartholdy (1809–1847)",
          "\"Gloria\", Carlos Alberto Pinto Fonseca (1933–2006)",
          "\"O salutaris Hostia\", Paweł Bębenek (γεν. 1972)"
        ]
      },
      "Makeblijde, Zele BE (Β) — Filip Haentjens",
      {
        "list": [
          "\"Sub tuum praesidium\", Giovanni Pierluigi da Palestrina (1525–1594)",
          "\"Gute Nacht\", Josef Rheinberger (1839–1901)",
          "\"Mountain Nights 1\", Zoltán Kodály (1882–1967)",
          "\"By the Light of the Moon\", Anna-Mari Kähärä (γεν. 1963)"
        ]
      },
      "Gøtu Kirkju Ungdómskór, Gøta FO (Ε) — Símun Hammer",
      {
        "list": [
          "\"Sing Joyfully unto God\", William Byrd (1540–1623)",
          "\"Ezekiel Saw de Wheel\", William L. Dawson (1899–1990)",
          "\"O Heiland, reiß die Himmel auf\", Johannes Brahms (1833–1897)",
          "\"Leron Leron Sinta\", Saunder Choi (γεν. 1988)"
        ]
      },
      "Resonans con tutti, Zabrze PL (Ε) — Arlena Różycka-Gałązka & Waldemar Gałązka",
      {
        "list": [
          "\"Quasi cedrus\", Jacobus Handl Gallus (1550–1591)",
          "\"Denn Er hat seinen Engeln befohlen\", Felix Mendelssohn Bartholdy (1809–1847)",
          "\"Cantus Gloriosus\", Józef Świder (1930–2014)",
          "\"Sleep\", Eric Whitacre (γεν. 1970)",
          "\"Daemon Irrepit Callidus\", György Orbán (γεν. 1947)"
        ]
      },
      "20:30 Εμφανίσεις στην πόλη",
      {
        "heading": "Παρουσιάσεις χορωδιών σε κεντρικά σημεία της πόλης",
        "level": 3
      },
      "Συμμετέχουσες χορωδίες (7)",
      {
        "list": [
          "Makeblijde, Zele BE — Filip Haentjens",
          "Essence of Elements, Ρώμη IT — Jorge Arturo Higuera",
          "Izar Argia Abesbatza, Larrabetzu ES — Aintzane Garamendi Eguren",
          "Χορωδία ΣΕΠΕ Πιερίας, Κατερίνη GR — Όλγα Ματθαίου",
          "Sincoro coro di Arcigay, Ρώμη IT — Camilo Vasquez",
          "Νεανική Χορωδία «Αοιδών Φωνές», Παραλίμνι CY — Παντελίνα Πασχάλη",
          "The All-American Boys Chorus, Anaheim CA US — Wesley Martin"
        ]
      },
      "21:00 Συναυλία",
      {
        "heading": "Βραδινή Συναυλία",
        "level": 3
      },
      "Μητροπολιτικός Ι. Ν. Αγίου Χαραλάμπους Χορωδίες & ρεπερτόριο (5)",
      "Παιδική Χορωδία «Okarina», Πρίστινα XK — Elikonë Hysaj Shala",
      {
        "list": [
          "\"Te falemi o Dhe\" (όπερα Dasma Arbëreshe), Rauf Dhomi (γεν. 1945)",
          "\"Vjosa, a Song of Wild Eternity\", Aulon Naçi (γεν. 1983)",
          "\"Baresha\", Rexho Mulliqi (1923–1982)"
        ]
      },
      "The All-American Boys Chorus, Anaheim CA US — Wesley Martin",
      {
        "list": [
          "\"Route 66\", Bobby Troup (1918–1999), διασκ. Kirby Shaw",
          "\"California Dreamin'\", John & Michelle Phillips, διασκ. Wesley Martin",
          "\"I'll Be There\", Gordy / Davis / Hutch / West, διασκ. Wesley Martin",
          "\"Pure Imagination\", Bricusse & Newley, διασκ. Jay Althouse"
        ]
      },
      "Kla-sch Vocal Quartet, Częstochowa PL — Przemysław Jeziorowski",
      {
        "list": [
          "\"Ave Maria\", Tomás Luis de Victoria (1548–1611)",
          "\"Gloria\", Carlos Alberto Pinto Fonseca (1933–2006)",
          "\"O salutaris Hostia\", Paweł Bębenek (γεν. 1972)",
          "\"Soon Ah Will Be Done\", spiritual, διασκ. William L. Dawson (1899–1990)"
        ]
      },
      "Youth Choir Elefteria, Κισινάου MD — Dorin Bîtcă",
      {
        "list": [
          "\"The Battle of Jericho\", Moses Hogan (1957–2003)",
          "«Να 'μουνα για λίγο εκεί», διασκ. Alexander Zaitsev (1955–2008)",
          "\"Vine hulpe de la munte\", Adrian Pop (γεν. 1951)",
          "\"Ubi Caritas\", Ola Gjeilo (γεν. 1978)",
          "«Eleftheria», διασκ. Alexander Zaitsev (1955–2008)"
        ]
      },
      "Gøtu Kirkju Ungdómskór, Gøta FO — Símun Hammer",
      {
        "list": [
          "\"Harra Guð títt dýra navn…\", παραδοσιακό, διασκ. Símun Hammer (γεν. 1964)",
          "\"Meistarin\", Kim Hansen (γεν. 1972), διασκ. Símun Hammer",
          "\"Great God Almighty\", Stacey V. Gibbs (γεν. 1961)",
          "\"Sing Joyfully unto God\", William Byrd (1540–1623)"
        ]
      },
      "21:30 Συναυλία",
      {
        "heading": "Βραδινή Συναυλία",
        "level": 3
      },
      "Πλατεία Δικαστηρίων Χορωδίες & ρεπερτόριο (6)",
      "Χορωδία «Ανατολή», Λεμεσός CY — π. Νικόλαος Λυμπουρίδης",
      {
        "list": [
          "«Πορτοκαλιά του Καραβά», παραδοσιακό κυπριακό",
          "«Τραγούδι του Γάμου», παραδοσιακό κυπριακό",
          "«Το τέρτιν της καρτούλλας μου», παραδοσιακό κυπριακό",
          "«Η βράκα», παραδοσιακό κυπριακό"
        ]
      },
      "Transilvania Choir, Brașov RO — Mihaela Mureșan",
      {
        "list": [
          "\"Hora Staccato\", Nicolae Gâscă (γεν. 1942)",
          "\"Mare hibă-i la Jibău\", Dariu Pop (1887–1965)",
          "\"Și altfel de variațiuni pe tema Chindiei\", Alexandru Pașcanu (1920–1989)",
          "\"Father Thunder\", Laura Jēkabsone (γεν. 1985)",
          "\"Sixteen Tons\", διασκ. Kirby Shaw (γεν. 1942)"
        ]
      },
      "Χορωδία ΣΕΠΕ Πιερίας, Κατερίνη GR — Όλγα Ματθαίου",
      {
        "list": [
          "«Χάρτινο το φεγγαράκι», Μάνος Χατζιδάκις (1925–1994)",
          "«Ξημερώνει», Μάνος Χατζιδάκις (1925–1994)",
          "«Απρίλης», Μίκης Θεοδωράκης (1925–2021)",
          "«Του μικρού Βοριά», Μίκης Θεοδωράκης (1925–2021)"
        ]
      },
      "Novi Sad's Jewish Community Choir «Hashira», Νόβι Σαντ RS — Vesna Kesić Krsmanović",
      {
        "list": [
          "\"Pod sjajem zvezda\", Predrag Ivanović (1930–2010)",
          "\"Devojko mala\", Darko Kraljić (1920–1998), διασκ. Bratislav Prokić",
          "\"Tumbalalaika\", παραδοσιακό, διασκ. Julija Bal (γεν. 1980)",
          "\"Havah Nagilah\", παραδοσιακό, διασκ. Daniel Faktori"
        ]
      },
      "Choir PRIMO Secondary School nr1, Bydgoszcz PL — Monika Wilkiewicz",
      {
        "list": [
          "\"Leć głosie po rosie\", Marcin Wawruk (γεν. 1963)",
          "\"Lecioły zórazie\" (Cztery pieśni kurpiowskie), Jan Krutul (γεν. 1985)",
          "\"Stand by Me\", Ben E. King, διασκ. Mac Huff",
          "\"Dancing Queen\", ABBA, διασκ. Roger Emerson"
        ]
      },
      "The Academic Choir Maribor, Maribor SI — Uroš Jurgec",
      {
        "list": [
          "\"Čin, čin, čin Drežnica\", παραδοσιακό, διασκ. Tadeja Vulc (γεν. 1978)",
          "\"Pa se sliš'\", παραδοσιακό, διασκ. Karol Pahor (1896–1974)",
          "\"Stand by Me\", King / Leiber / Stoller, διασκ. Mac Huff",
          "\"Ta na Solbici\", παραδοσιακό, διασκ. Samo Vovk (γεν. 1989)"
        ]
      },
      {
        "anchor": "el-sat"
      },
      {
        "heading": "Σάββατο 11 Ιουλίου 2026",
        "level": 2
      },
      "10:00 Διαγωνισμός Κατηγορία ΣΤ",
      {
        "heading": "30ός Διεθνής Διαγωνισμός Χορωδιών",
        "level": 3
      },
      "Πνευματικό Κέντρο Ι. Μ. Νικοπόλεως & Πρεβέζης Διαγωνιζόμενες χορωδίες & ρεπερτόριο (4)",
      "Kla-sch Vocal Quartet, Częstochowa PL — Przemysław Jeziorowski",
      {
        "list": [
          "\"Od buczku do buczku\", Jacek Glenc (γεν. 1967)",
          "\"Szerszeń\", Zbigniew Penherski (1935–2019)",
          "\"Soon Ah Will Be Done\", spiritual, διασκ. William L. Dawson (1899–1990)",
          "\"Tolerancja\", Stanisław Sojka (1959–2025), διασκ. Klaudiusz Jania (b. 1984)"
        ]
      },
      "Essence of Elements, Ρώμη IT — Jorge Arturo Higuera",
      {
        "list": [
          "\"The Seed\", Aurora (γεν. 1996)",
          "\"Breathing Underwater\", Hiatus Kaiyote",
          "\"Hurricane\", Bridgit Mendler (γεν. 1992)",
          "\"Earth Song\", Michael Jackson (1958–2009)",
          "\"Girl on Fire\", Alicia Keys (γεν. 1981)"
        ]
      },
      "Gøtu Kirkju Ungdómskór, Gøta FO — Símun Hammer",
      {
        "list": [
          "\"Meistarin\", Kim Hansen (γεν. 1972), διασκ. Símun Hammer",
          "\"Angel by the Wings\", Sia Furler (γεν. 1975), διασκ. André van der Merwe",
          "\"Desh\" — ινδική ράγκα, Ethan Sperry (γεν. 1971)",
          "\"Great God Almighty\", Stacey V. Gibbs (γεν. 1961)"
        ]
      },
      "Asociația Corală Academica Bucovina, Câmpulung Moldovenesc RO — Emil Forfotă",
      {
        "list": [
          "\"Concertul Nr. 1\", Gavriil Musicescu (1847–1903)",
          "\"Lumină lină\", Florian Costea (γεν. 1984)",
          "\"Floare albastră\", Vasile Spătărelu (1938–2005)",
          "\"Nobody Knows the Trouble\", παραδοσιακό αφροαμερικανικό spiritual"
        ]
      },
      "13:00 Διαγωνισμός Κατηγορία ΣΤ",
      {
        "heading": "30ός Διεθνής Διαγωνισμός Χορωδιών",
        "level": 3
      },
      "Πνευματικό Κέντρο Ι. Μ. Νικοπόλεως & Πρεβέζης Διαγωνιζόμενες χορωδίες & ρεπερτόριο (4)",
      "Izar Argia Abesbatza, Larrabetzu ES — Aintzane Garamendi Eguren",
      {
        "list": [
          "\"Medley Euskal Kantak: Loretxoa eta Nere Herriko Neskatxa Maite\", Benito Lertxundi (γεν. 1942)",
          "\"Aitormena\", Hertzainak / Josu Zabala (γεν. 1954)",
          "\"Haizea\", Ken Zazpi / Eñaut Elorrieta (γεν. 1975)",
          "\"Kanbon Palanga Pagoz\", David Azurza (γεν. 1968)",
          "\"Aldapeko\", Jesús Guridi (1886–1961)"
        ]
      },
      "Παιδική Χορωδία «Okarina», Πρίστινα XK — Elikonë Hysaj Shala",
      {
        "list": [
          "\"Ne kemi një tokë, kemi dhe një kokë\", Rafet Rudi (γεν. 1949)",
          "\"Cerf Volant\" (Les Choristes), Bruno Coulais (γεν. 1954)",
          "\"Music in the Circle\", Mendi Mengjiqi (γεν. 1958)",
          "\"Baresha\", Rexho Mulliqi (1923–1982)"
        ]
      },
      "Transilvania Choir, Brașov RO — Mihaela Mureșan",
      {
        "list": [
          "\"Cine-și lasă satul lui\", Șerban Marcu (γεν. 1977)",
          "\"Mare hibă-i la Jibău\", Dariu Pop (1887–1965)",
          "\"Trandafir de pe răzoare\", Sabin Drăgoi (1894–1968)",
          "\"Suita scurtă: 1. Doina de oraș, 2. Sârba pe scaun\", Alexandru Pașcanu (1920–1989)"
        ]
      },
      "The Academic Choir Maribor, Maribor SI — Uroš Jurgec",
      {
        "list": [
          "\"Oj, gora ta Kaninova\", Ambrož Čopi (γεν. 1973)",
          "\"Fčelica zletela\", Lojze Lebič (γεν. 1934)",
          "\"Preljuba družba, prosmo vas\", Tine Bec (γεν. 1993)",
          "\"Zrejlo je žito\", Slavko Šuklar (γεν. 1952)",
          "\"Ta na Solbici\", Samo Vovk (γεν. 1989)"
        ]
      },
      "18:00 Διαγωνισμός Κατηγορίες Η & Α",
      {
        "heading": "30ός Διεθνής Διαγωνισμός Χορωδιών",
        "level": 3
      },
      "Πνευματικό Κέντρο Ι. Μ. Νικοπόλεως & Πρεβέζης Διαγωνιζόμενες χορωδίες & ρεπερτόριο (6)",
      "Χορωδία «Ανατολή», Λεμεσός CY (Η) — π. Νικόλαος Λυμπουρίδης",
      {
        "list": [
          "«Τηλλυρκώτισσα», παραδοσιακό κυπριακό",
          "«Η βρύση των Πεγειώτισσων», παραδοσιακό κυπριακό",
          "«Στείλε με μάνα στο νερόν», παραδοσιακό κυπριακό",
          "«Το γιασεμίν», παραδοσιακό κυπριακό",
          "«Ψιντρή βασιλιτζιά μου», παραδοσιακό κυπριακό"
        ]
      },
      "Belcantes Αγίου Ανδρέα Εγλυκάδας, Πάτρα GR (Η) — Έλενα Δρουκοπούλου",
      {
        "list": [
          "\"I denna ljuva sommartid\", Kim André Arnesen (γεν. 1980) — σόλο: Ειρήνη Τσούμα",
          "\"Music for a While\", Henry Purcell (1659–1695), διασκ. Gunnar Eriksson — σόλο: Κατερίνα Τσαντούλη · χορογρ.: Κατερίνα Γεωργίου",
          "«Στα νηολόγια του καιρού», Νίκος Τσότρας (γεν. 1962)",
          "\"Dies Irae\", Michael John Trotta (γεν. 1978) — σόλο: Χρύσα Χριστοδούλου, Ειρήνη Τσούμα"
        ]
      },
      "Μικτή Χορωδία Λιβαδειάς «Έρκυνα», GR (Η) — Ηρώ Παναγιωτοπούλου · πιάνο: Δημήτρης Ζωγράφος",
      {
        "list": [
          "«Ο εφιάλτης της Περσεφόνης», Μάνος Χατζιδάκις (1925–1994)",
          "«Ερήνη» (8 Δωδεκανησιακά Τραγούδια), Γιάννης Κωνσταντινίδης (1903–1984), παραδ. της Τήλου",
          "\"Sometimes I Feel Like a Motherless Child\", αφροαμερικανικό spiritual",
          "«Ένας Τούρκος στο Παρίσι», Λαυρέντης Μαχαιρίτσας (1956–2019)",
          "\"Exsultate Cantamos Festivo\", Jay Althouse (γεν. 1951)"
        ]
      },
      "Χορωδιακό Εργαστήρι Ναυπλίου, GR (Η) — Γιάννης Νικολόπουλος · πιάνο: Δημήτρης Ζωγράφος",
      {
        "list": [
          "«Με το λύχνο του άστρου», Μουσική: Μίκης Θεοδωράκης (1925–2021), Ποίηση: Οδυσσέας Ελύτης (1911–1996), εναρμ. Γ. Καρκάλας",
          "«Χάθηκε το φεγγάρι», Μουσική: Σταύρος Ξαρχάκος (γεν. 1939), Στίχοι: Βαγγέλης Γκούφας (1925–2016), χορ. επεξ. Κ. Κριτσιωτάκης",
          "«Πικρία», Μουσική: Θάνος Μικρούτσικος (1947–2019), Ποίηση: Νίκος Καββαδίας (1910–1975), χορ. επεξ. Γ. Νικολόπουλος",
          "«Αυτές οι ξένες αγκαλιές», Μουσική: Ηλίας Ανδριόπουλος (γεν. 1950), Στίχοι: Μάνος Ελευθερίου (1938–2018), χορ. επεξ. Γ. Νικολόπουλος",
          "«Είχα φυτέψει μια καρδιά», Μουσική: Μίκης Θεοδωράκης (1925–2021), Στίχοι: Νίκος Γκάτσος (1911–1992), χορ. επεξ. Γ. Νικολόπουλος"
        ]
      },
      "Resonans con tutti, Zabrze PL (Α) — Arlena Różycka-Gałązka & Waldemar Gałązka",
      {
        "list": [
          "\"Magnificat\", Johann Christian Bach (1735–1782)",
          "\"Darthulas Grabesgesang\", Johannes Brahms (1833–1897)",
          "\"Jesu dulcis memoria\", Leo Nestor (1948–2019)",
          "\"Second Eve\", Ola Gjeilo (γεν. 1978)",
          "\"Gloria\", Woo Hyo-won (γεν. 1974)"
        ]
      },
      "The Academic Choir Maribor, Maribor SI (Α) — Uroš Jurgec",
      {
        "list": [
          "\"Come Away, Sweet Love\", Thomas Greaves (1550–1650)",
          "\"Sechs geistliche Lieder: 5. Ergebung\", Hugo Wolf (1860–1903)",
          "\"Ena punca\", Andrej Makor (γεν. 1987)",
          "\"Singet dem Herrn ein neues Lied\", Hugo Distler (1908–1942)",
          "\"Sine sole nihil sum\", Tadeja Vulc (γεν. 1978)"
        ]
      },
      "20:30 Εμφανίσεις στην πόλη",
      {
        "heading": "Παρουσιάσεις χορωδιών σε κεντρικά σημεία της πόλης",
        "level": 3
      },
      "Συμμετέχουσες χορωδίες (6)",
      {
        "list": [
          "Χορωδία «Ανατολή», Λεμεσός CY — π. Νικόλαος Λυμπουρίδης",
          "Kla-sch Vocal Quartet, Częstochowa PL — Przemysław Jeziorowski",
          "Transilvania Choir, Brașov RO — Mihaela Mureșan",
          "Novi Sad's «Hashira», Νόβι Σαντ RS — Vesna Kesić Krsmanović",
          "Gøtu Kirkju Ungdómskór, Gøta FO — Símun Hammer",
          "The Academic Choir Maribor, Maribor SI — Uroš Jurgec"
        ]
      },
      "21:30 Συναυλία",
      {
        "heading": "Βραδινή Συναυλία",
        "level": 3
      },
      "Μαρίνα Πρέβεζας Χορωδίες & ρεπερτόριο (6)",
      "The All-American Boys Chorus, Anaheim CA US — Wesley Martin",
      {
        "list": [
          "\"Route 66\", Bobby Troup (1918–1999), διασκ. Kirby Shaw",
          "\"California Dreamin'\", John & Michelle Phillips, διασκ. Wesley Martin",
          "\"I'll Be There\", Gordy / Davis / Hutch / West, διασκ. Wesley Martin",
          "\"Pure Imagination\", Bricusse & Newley, διασκ. Jay Althouse"
        ]
      },
      "Makeblijde, Zele BE — Filip Haentjens",
      {
        "list": [
          "\"Hvalite imea Gospodne\", Dobri Christov (1875–1941)",
          "\"Ave Maria\", Carles Gumí (γεν. 1963)",
          "\"Sweet Dreams / Poker Face\", Stewart & Lennox, διασκ. Rob Lane",
          "\"Rhythm Inside\", Loïc Nottet (γεν. 1996), διασκ. Hanne De Graef"
        ]
      },
      "Μικτή Χορωδία Λιβαδειάς «Έρκυνα», GR — Ηρώ Παναγιωτοπούλου · πιάνο: Δημήτρης Ζωγράφος",
      {
        "list": [
          "«Ο εφιάλτης της Περσεφόνης», Μάνος Χατζιδάκις (1925–1994)",
          "\"Sometimes I Feel Like a Motherless Child\", αφροαμερικανικό spiritual",
          "«Ένας Τούρκος στο Παρίσι», Λαυρέντης Μαχαιρίτσας (1956–2019)",
          "\"Exsultate Cantamos Festivo\", Jay Althouse (γεν. 1951)"
        ]
      },
      "Sincoro coro di Arcigay, Ρώμη IT — Camilo Vasquez",
      {
        "list": [
          "\"Believe / Open Your Heart / Borderline / How Will I Know\" — ποτ-πουρί (Cher, Madonna, Whitney Houston)",
          "\"Se t'innamori muori / Glicine\" — ποτ-πουρί (Noemi)",
          "\"Dark Horse\", Katy Perry ft. Juicy J",
          "\"The Hanging Tree / Scared to Be Lonely / Elastic Heart\" — ποτ-πουρί",
          "\"Io che amo solo te / Il cielo in una stanza\" — ποτ-πουρί (Endrigo / Paoli)",
          "\"Natural Woman\", Aretha Franklin",
          "\"I Love It / Boss B*tch / Runway\" — ποτ-πουρί"
        ]
      },
      "Belcantes Αγίου Ανδρέα Εγλυκάδας, Πάτρα GR — Έλενα Δρουκοπούλου · πιάνο: Κωνσταντίνα Ανδρουτσοπούλου",
      {
        "list": [
          "«Το τρίτο στεφάνι», Σταμάτης Κραουνάκης (γεν. 1955), χορ. επεξ. Λουκάς Αδαμόπουλος",
          "«Απάνω στην τριανταφυλλιά», χορ. επεξ. Ι. Παπαδοπούλου",
          "«Του πόθου περιστέρια», Νίκος Έξαρχος (γεν. 1973)",
          "\"Wah-Bah-Dah-Bah-Doo-Bee\", Ivo Antognini (γεν. 1963)"
        ]
      },
      "Resonans con tutti, Zabrze PL — Arlena Różycka-Gałązka & Waldemar Gałązka",
      {
        "list": [
          "\"The Gospel Train\", spiritual",
          "\"Z tamtej strony rzeki\", Stanisław Wiechowicz (1893–1963)",
          "\"The Last Rose of Summer\", Darmon Meader",
          "\"La, la, la\", Pierre Certon (1510–1572)",
          "\"Michelle\", Paul McCartney & John Lennon",
          "\"I Want to Go to Heaven\", József Karai, spiritual",
          "\"Wana Baraka\", Shawn Kirchner (γεν. 1970)",
          "\"The Drunken Sailor\", Robert Sund (γεν. 1942)"
        ]
      },
      "21:30 Συναυλία",
      {
        "heading": "Βραδινή Συναυλία",
        "level": 3
      },
      "Πλατεία Δικαστηρίων Χορωδίες & ρεπερτόριο (5)",
      "Essence of Elements, Ρώμη IT — Jorge Arturo Higuera",
      {
        "list": [
          "\"Earth Song\", Michael Jackson (1958–2009)",
          "\"The Seed\", Aurora (γεν. 1996)",
          "\"Hurricane\", Bridgit Mendler (γεν. 1992)",
          "\"Girl on Fire\", Alicia Keys (γεν. 1981)"
        ]
      },
      "Νεανική Χορωδία «Αοιδών Φωνές», Παραλίμνι CY — Παντελίνα Πασχάλη",
      {
        "list": [
          "«Το Ταγκό της Νεφέλης», Loreena McKennitt (γεν. 1957)",
          "«Τ' Αστέρι του Βοριά», Μάνος Χατζιδάκις (1925–1994)",
          "«Οδός Ονείρων», Μάνος Χατζιδάκις (1925–1994)",
          "«Γιασεμί», παραδοσιακό κυπριακό"
        ]
      },
      "Χορωδιακό Εργαστήρι Ναυπλίου, GR — Γιάννης Νικολόπουλος",
      {
        "list": [
          "«Άρνηση», Μουσική: Μίκης Θεοδωράκης (1925–2021), Ποίηση: Γιώργος Σεφέρης (1900–1971)",
          "«Αυτές οι ξένες αγκαλιές», Μουσική: Ηλίας Ανδριόπουλος (γεν. 1950), Στίχοι: Μάνος Ελευθερίου (1938–2018), χορ. επεξ. Γ. Νικολόπουλος",
          "«Πικρία», Μουσική: Θάνος Μικρούτσικος (1947–2019), Ποίηση: Νίκος Καββαδίας (1910–1975), χορ. επεξ. Γ. Νικολόπουλος",
          "«Ωραία κοιμωμένη», Μουσική: Νίκος Ξυδάκης (γεν. 1952), Στίχοι: Θοδωρής Γκόνης (γεν. 1956), χορ. επεξ. Γ. Νικολόπουλος"
        ]
      },
      "Izar Argia Abesbatza, Larrabetzu ES — Aintzane Garamendi",
      {
        "list": [
          "\"A Thousand Years\", Christina Perri (γεν. 1986)",
          "\"City of Stars\", Justin Hurwitz (γεν. 1985)",
          "\"Noizbait\", Ken Zazpi / Eñaut Elorrieta (γεν. 1975)",
          "\"Txoriak Txori\", Mikel Laboa (1934–2008)"
        ]
      },
      "Female Chamber Choir Caloroso, Mol BE — Jasmien Gys",
      {
        "list": [
          "\"Is Our Microphone On?\", Søren Møller (γεν. 1975)",
          "\"Through the House Give Glimmering Light\", Amy Beach (1867–1944)",
          "\"Annan Polska\", Anna-Mari Kähärä (γεν. 1963)"
        ]
      },
      "23:00 Εκδήλωση",
      {
        "heading": "Πάρτι για όλες τις χορωδίες",
        "level": 3
      },
      "Μαρίνα Πρέβεζας",
      {
        "anchor": "el-sun"
      },
      {
        "heading": "Κυριακή 12 Ιουλίου 2026",
        "level": 2
      },
      "21:30 Τελετή Λήξης",
      {
        "heading": "Τελετή Λήξης & Ανακοίνωση Αποτελεσμάτων",
        "level": 3
      },
      "Ρωμαϊκό Ωδείο Αρχαίας Νικοπόλεως",
      "Μουσικός χαιρετισμός από τη διοργανώτρια Μικτή Χορωδία Πρέβεζας «Αρμονία» (GR) — Διευθύνει: Anelia Stefanova Επίσημη ανακοίνωση των αποτελεσμάτων του διαγωνισμού. Επιλεγμένες εμφανίσεις από τις κορυφαίες χορωδίες κάθε κατηγορίας.",
      "Σημείωση: το πρόγραμμα ενδέχεται να τροποποιηθεί. Οι ακριβείς ώρες και χώροι θα επιβεβαιωθούν πλησιέστερα στις ημερομηνίες του φεστιβάλ.",
      {
        "heading": "Διεθνής Κριτική Επιτροπή",
        "level": 2,
        "align": "center"
      },
      ...person("ambroz-copi", "el", {level: 3}),
      ...person("marco-antonio-garcia-de-paz", "el", {level: 3,align: "right"}),
      ...person("katerina-vassilikou", "el", {level: 3}),
      ...person("john-fitzpatrick", "el", {level: 3,align: "right"}),
      ...person("pearl-shangkuan", "el", {level: 3}),
      ...person("eduardo-garcia-novelli", "el", {level: 3,align: "right"}),
      {
        "heading": "Dr. Leo Li",
        "level": 3
      },
      {
        "img": "/img/leoli.webp",
        "layout": "side"
      },
      "Ο Δρ. Leo Li είναι Κινεζοκαναδός μαέστρος και μέλος κριτικών επιτροπών με σημαντική διεθνή παρουσία στον χώρο της χορωδιακής και συμφωνικής μουσικής. Είναι μέλος του Διοικητικού Συμβουλίου του Choral Canada, όπου προεδρεύει της Επιτροπής Μελών, ενώ παράλληλα είναι μέλος της Ένωσης Χορωδιών της Κίνας.\n\nΗ διευθυντική του πορεία ξεκίνησε σε νεαρή ηλικία και εξελίχθηκε σε μια διεθνή καλλιτεχνική διαδρομή με πολυάριθμες διακρίσεις. Έχει συνεργαστεί με μικτές, πανεπιστημιακές, παιδικές, νεανικές και κοινοτικές χορωδίες, καθώς και με συμφωνικές ορχήστρες σε τέσσερις ηπείρους. Ξεχωρίζει για τη συμβολή του στη διαπολιτισμική συνεργασία και την προώθηση του διαλόγου μεταξύ των χορωδιακών παραδόσεων της Ανατολής και της Δύσης.\n\nΣε αναγνώριση της προσφοράς του στη μουσική και την κοινωνία, έχει τιμηθεί με σημαντικές εθνικές διακρίσεις στον Καναδά. Το 2027 θα εμφανιστεί ως προσκεκλημένος μαέστρος στο Carnegie Hall.",
      {
        "heading": "Συμμετέχουσες Χορωδίες",
        "level": 3,
        "align": "center"
      },
      {
        "heading": "Γυναικεία Χορωδία Δωματίου \"Caloroso\"",
        "level": 4
      },
      "Μολ, Βέλγιο Διεύθυνση: Jasmien Gys",
      {
        "img": "/img/caloroso.webp"
      },
      "Η Γυναικεία Χορωδία Δωματίου Caloroso είναι μία από τις έξι χορωδίες της οικογένειας χορωδιών Caloroso. Το σύνολο ιδρύθηκε το 2010, αρχικά σε μορφή project, με σκοπό την ηχογράφηση ενός CD. Το 2012 ακολούθησε ένα ακόμη σημαντικό εγχείρημα, με την παγκόσμια πρώτη εκτέλεση του έργου Bestiarium των Maarten Van Ingelgem και Karel Van Marcke. Από το 2017, η γυναικεία χορωδία εντάχθηκε στις τακτικές εβδομαδιαίες δραστηριότητες της οικογένειας Caloroso και συμμετείχε στη συναυλία για τα 15 χρόνια της. Το 2019 πραγματοποίησε την πρώτη της αξιολογούμενη εμφάνιση στο Korenfestival Vlaanderen, ενώ το 2021 συμμετείχε στον πρώτο της διαγωνισμό, τα World Choir Games στη Φλάνδρα, όπου κατέκτησε την πρώτη θέση στην κατηγορία της. Το 2023 απέσπασε επίσης το πρώτο βραβείο στην κατηγορία της στον διεθνή διαγωνισμό Sound Waves Linz και προσκλήθηκε να τραγουδήσει στον τελικό. Το 2025 συμμετείχε στο διεθνές φεστιβάλ CantaRode στο Kerkrade, κατακτώντας την 7η θέση. Από τον Σεπτέμβριο του 2020 τη χορωδία διευθύνει η Jasmien Gys, μαέστρος, τραγουδίστρια και παιδαγωγός, η οποία το 2025 τιμήθηκε στο CantaRode με το Βραβείο Υποσχόμενης Νέας Μαέστρου.",
      {
        "heading": "Γυναικεία Χορωδία \"Makeblijde\"",
        "level": 4
      },
      "Ζέλε, Βέλγιο Διεύθυνση: Filip Haentjens",
      {
        "img": "/img/Makeblijde.webp"
      },
      "Η γυναικεία χορωδία Makeblijde ιδρύθηκε το 1943 από τη Josee Standaert, της οποίας η αφοσίωση οδήγησε γρήγορα το σύνολο σε σημαντική αναγνώριση. Υπό τη διεύθυνσή της, η χορωδία αναδείχθηκε πρώτη στον διαγωνισμό σχολικών χορωδιών του ραδιοφώνου, κέρδισε τη Χρυσή Χορδή της Πόλης των Βρυξελλών και απέσπασε το Βραβείο “Summa Cum Laude” στο Ευρωπαϊκό Μουσικό Φεστιβάλ Νέων στο Neerpelt. Το 1983 τη διεύθυνση ανέλαβε η Annemie Moens, η οποία, ως επαγγελματίας vocal coach, συνέβαλε ουσιαστικά στην εξέλιξη της φωνητικής τεχνικής και της μουσικότητας της χορωδίας. Από το 1996, τη Makeblijde διευθύνει ο Filip Haentjens, εγκαινιάζοντας μια περίοδο σημαντικής καλλιτεχνικής ανάπτυξης και διεθνούς αναγνώρισης. Η χορωδία τιμήθηκε με τον τίτλο Χορωδία της Χρονιάς 2005-2006, κερδίζοντας στον ίδιο διαγωνισμό και το βραβείο κοινού, ενώ το 2008 προήχθη στην ανώτατη τιμητική κατηγορία στα Χορωδιακά Τουρνουά της Ανατολικής Φλάνδρας, διάκριση που διατηρεί έκτοτε. Σε διεθνές επίπεδο, η Makeblijde έχει αποσπάσει σημαντικά βραβεία σε χώρες όπως η Ιταλία, η Ελλάδα, η Τουρκία, η Ισπανία, η Λιθουανία και η Τσεχία. Πρόσφατες διακρίσεις της αποτελούν τα δύο χρυσά μετάλλια στον διαγωνισμό “Musica Orbis” στην Πράγα το 2022 και οι δύο χρυσές διακρίσεις με νίκες κατηγορίας στον διαγωνισμό “Musica Eterna” στη Ρώμη το 2024, που επιβεβαιώνουν τη θέση της Makeblijde ανάμεσα στις κορυφαίες γυναικείες χορωδίες της Ευρώπης.",
      {
        "heading": "Εκκλησιαστική Χορωδία Νέων της πόλης Gøta",
        "level": 4
      },
      "Γκότα, Νήσοι Φερόες Διεύθυνση: Símun Hammer",
      {
        "img": "/img/gotu.webp"
      },
      "Η Εκκλησιαστική Χορωδία Νέων της πόλης Gøta ιδρύθηκε τον Σεπτέμβριο του 2011 και αποτελεί μέρος της τοπικής Λουθηρανικής εκκλησίας στο χωριό Gøta των Νήσων Φερόε. Η χορωδία αποτελείται από περίπου 30 νεαρά μέλη, κορίτσια και αγόρια, και έχει ως στόχο την παρουσίαση χορωδιακής μουσικής υψηλού και ενδιαφέροντος καλλιτεχνικού επιπέδου, με ενεργή συναυλιακή παρουσία στη χώρα της. Από το 2014 η χορωδία αναζητά συστηματικά καλλιτεχνικές εμπειρίες εκτός των Νήσων Φερόε, συμμετέχοντας σε διεθνείς χορωδιακές διοργανώσεις και φεστιβάλ στην Ιταλία, την Αυστρία, τη Λετονία, τη Σουηδία, τη Γερμανία, τη Νότια Κορέα και τη Δανία. Μεταξύ άλλων, έχει λάβει μέρος στους Ευρωπαϊκούς Χορωδιακούς Αγώνες στη Ρίγα, στο Διεθνές Χορωδιακό Φεστιβάλ του Helsingborg, στο Διεθνές Χορωδιακό Φεστιβάλ Johannes Brahms στο Wernigerode, στους Παγκόσμιους Χορωδιακούς Αγώνες στη Νότια Κορέα, στο Φεστιβάλ Summa Cum Laude στη Βιέννη και στους Ευρωπαϊκούς Χορωδιακούς Αγώνες στο Aarhus. Στις διοργανώσεις αυτές η χορωδία έχει κατακτήσει αρκετές υψηλές διακρίσεις και τιμές. Τη χορωδία διευθύνει ο ιδρυτής της, Símun Hammer, οργανίστας και ιεροψάλτης στην εκκλησία της Gøta. Είναι απόφοιτος της Βασιλικής Ακαδημίας Μουσικής του Aarhus στη Δανία και δραστηριοποιείται ως οργανίστας, παιδαγωγός και συνθέτης χορωδιακών έργων και διασκευών.",
      {
        "heading": "\"Sincoro\"",
        "level": 4
      },
      "Ρώμη, Ιταλία Διεύθυνση: Juan Camilo Vasquez Συνδιεύθυνση / Πιάνο: Francesco Del Fra",
      {
        "img": "/img/SinCoro-choir.webp"
      },
      "Η Sincoro - Arcigay Choir εδρεύει στη Ρώμη της Ιταλίας και ιδρύθηκε το 2019 στο πλαίσιο της LGBTQIA+ οργάνωσης Gay Center. Η δημιουργία της προέκυψε από την κοινή αγάπη για τη χορωδιακή μουσική και από την επιθυμία να δημιουργηθεί ένας καλλιτεχνικός χώρος έκφρασης, συνάντησης και κοινότητας για την LGBTQIA+ κοινότητα της Ρώμης. Με την πάροδο του χρόνου, η Sincoro εξελίχθηκε από μια μικρή πρωτοβουλία σε ένα αναγνωρισμένο σύνολο στον χώρο των ιταλικών LGBTQIA+ χορωδιών, με ιδιαίτερα ποικίλο ρεπερτόριο. Η χορωδία έχει εμφανιστεί σε σημαντικές σκηνές, όπως το Teatro Brancaccio στη Ρώμη και το Teatro Petroselli στο Μπάρι. Είναι μόνιμο μέλος της Cromatica και έχει συμμετάσχει στο εθνικό φεστιβάλ των ιταλικών rainbow choirs, καθώς και στο Various Voices, το μεγάλο ευρωπαϊκό και διεθνές LGBTQIA+ χορωδιακό φεστιβάλ. Παράλληλα, συμμετέχει σε καλλιτεχνικά προγράμματα που προωθούν την ισότητα, την ένταξη, τα δικαιώματα και τον πολιτισμό. Από το 2024 τη χορωδία διευθύνει ο Juan Camilo Vasquez, Κολομβιανός μουσικός με έδρα την Ιταλία, με σπουδές στο Saint Louis College of Music στη Ρώμη και εμπειρία στη φωνητική μουσική, τη σύνθεση, την παραγωγή και τις pop/jazz χορωδιακές διασκευές. Στο έργο του με τη Sincoro τον πλαισιώνει ο συνδιευθυντής και πιανίστας Francesco Del Fra.",
      {
        "heading": "\"Essence of Elements\"",
        "level": 4
      },
      "Ρώμη, Ιταλία Καλλιτεχνικός Διευθυντής: Jorge Arturo Higuera Rodríguez",
      {
        "img": "/img/EssenceOfElements.webp"
      },
      "Οι Essence of Elements παρουσιάζουν το The Four Elements, ένα σύγχρονο a cappella χορωδιακό project εμπνευσμένο από τα τέσσερα στοιχεία της φύσης: Γη, Αέρα, Νερό και Φωτιά. Η παράσταση συνδέει την περιβαλλοντική ευαισθητοποίηση με το ανθρώπινο συναίσθημα και το σώμα ως ρυθμικό όργανο, ενσωματώνοντας body percussion, φωνητικές υφές, ηχητικά τοπία και αυτοσχεδιαστικά μέρη. Το σύνολο αποτελείται από έξι ερμηνευτές και συγκροτείται από φοιτητές του Saint Louis College of Music στη Ρώμη της Ιταλίας, οι οποίοι προέρχονται από τα τμήματα Pop (Vocals and Piano) και Composition & Film Scoring. Τα μέλη του συνεργάζονται δημιουργικά ως τραγουδιστές, ενορχηστρωτές και συνδημιουργοί. Το ρεπερτόριο περιλαμβάνει πρωτότυπες a cappella διασκευές διεθνών pop τραγουδιών, καθώς και μία πρωτότυπη σύνθεση, συνδυάζοντας στοιχεία pop, soul και jazz αρμονίας με τη χορωδιακή πειθαρχία. Την καλλιτεχνική διεύθυνση του project έχει ο Arturo Higuera, Κολομβιανός συνθέτης, πιανίστας και μαέστρος με έδρα την Ιταλία. Το καλλιτεχνικό του έργο συνδυάζει την κλασική παράδοση με σύγχρονες προσεγγίσεις, αναδεικνύοντας μια ιδιαίτερη ευαισθησία στη σχέση μεταξύ ήχου, εικόνας, ατμόσφαιρας και συναισθήματος. Η συμμετοχή του συνόλου στο Διεθνές Χορωδιακό Φεστιβάλ Πρέβεζας πραγματοποιείται στο πλαίσιο του προγράμματος Erasmus+, έπειτα από ανοιχτή πρόσκληση που το Saint Louis College of Music αποδέχθηκε με χαρά για δεύτερη φορά. Η συμμετοχή αυτή προσφέρει στους φοιτητές μια πολύτιμη ευκαιρία καλλιτεχνικής ανταλλαγής, μουσικής εξέλιξης και διαπολιτισμικής συνεργασίας μέσα από έναν από τους σημαντικότερους διεθνείς χορωδιακούς θεσμούς της Ευρώπης.",
      {
        "heading": "Παιδική Χορωδία \"Okarina\"",
        "level": 4
      },
      "Πρίστινα, Κόσοβο Διεύθυνση: Elikonë Hysaj Shala",
      {
        "img": "/img/okarina.webp"
      },
      "Η Παιδική Χορωδία “Okarina” ιδρύθηκε το 2014 στην Πρίστινα του Κοσόβου και έχει καθιερωθεί ως μία από τις πιο δραστήριες και διακεκριμένες παιδικές χορωδίες της περιοχής. Με πολυάριθμες επιτυχίες και συμμετοχές σε σημαντικές πολιτιστικές εκδηλώσεις, τόσο σε εθνικό όσο και σε διεθνές επίπεδο, η χορωδία έχει αναπτύξει έντονη καλλιτεχνική παρουσία. Σημαντικός σταθμός στην πορεία της υπήρξε η ερμηνεία του Carmina Burana του Carl Orff το 2022, σε συνεργασία με τη Φιλαρμονική του Κοσόβου. Τρία χρόνια αργότερα, η χορωδία συμμετείχε ξανά στη σκηνική καντάτα Carmina Burana, αυτή τη φορά σε συνεργασία με την Όπερα του Κοσόβου και το Εθνικό Μπαλέτο, σε μια μεγάλη παραγωγή με περισσότερους από 300 καλλιτέχνες. Το 2025 η “Okarina” έγραψε ιστορία ως η μοναδική παιδική χορωδία που συμμετείχε στην όπερα Carmen. Η χορωδία έχει συνεργαστεί με σημαντικούς καλλιτέχνες, όπως οι Inva Mula, Rame Lahaj, Elbenita Kajtazi και Flaka Goranci, και έχει συμμετάσχει σε φεστιβάλ όπως τα EtnoFest, Rame Lahaj Opera Festival και PriVocalFest. Αποτελεί επίσης μέρος της εκπαιδευτικής πλατφόρμας “Planet of Children” και συμμετέχει στο EduOpera, το εκπαιδευτικό πρόγραμμα της Όπερας του Κοσόβου. Τη χορωδία διευθύνει η ιδρύτριά της, Elikonë Hysaj Shala, μέλος της Φιλαρμονικής του Κοσόβου από το 2005, σολίστ, παιδαγωγός και καλλιτέχνης με σημαντική δράση στη μουσική και το θέατρο.",
      {
        "heading": "Νεανική Χορωδία \"Elefteria\"",
        "level": 4
      },
      "Κισινάου, Μολδαβία Μουσική και Καλλιτεχνική Διεύθυνση: Dorin Bîtcă Ιδρύτρια και Εκτελεστική Διευθύντρια: Nataly Shulika",
      {
        "img": "/img/youth-choir-elefteria.webp"
      },
      "Η Χορωδία Νέων “Elefteria” ιδρύθηκε την 1η Οκτωβρίου 2013 στο Chișinău της Μολδαβίας και έχει εξελιχθεί σε ένα από τα πιο ξεχωριστά νεανικά φωνητικά σύνολα της χώρας. Η καλλιτεχνική της ταυτότητα διαμορφώνεται μέσα από την πειθαρχία, τον πολιτιστικό διάλογο και την κοινή αγάπη των μελών της για τη χορωδιακή μουσική. Από την ίδρυσή της, η “Elefteria” συμμετέχει ενεργά στη συναυλιακή ζωή και στις διεθνείς πολιτιστικές ανταλλαγές, με εμφανίσεις στη Μολδαβία, την Ουκρανία, τη Ρουμανία και την Ελλάδα. Το ρεπερτόριό της περιλαμβάνει θρησκευτικά, παραδοσιακά και κλασικά έργα από διάφορες ευρωπαϊκές παραδόσεις, με έμφαση στην εκφραστική ερμηνεία, τη στιλιστική ευελιξία και τη φωνητική συνοχή. Η χορωδία απέκτησε διεθνή αναγνώριση στον Διεθνή Διαγωνισμό Χορωδιών Θρησκευτικής Μουσικής στην Πρέβεζα, όπου έλαβε δύο χάλκινες διακρίσεις το 2016 και το Χρυσό Βραβείο στην κατηγορία Χορωδιών Δωματίου το 2017, δημιουργώντας έναν ιδιαίτερο καλλιτεχνικό δεσμό με την πόλη. Το 2026 επιστρέφει στην Πρέβεζα με ανανεωμένη ενέργεια και με στόχο να ανοίξει ένα νέο κεφάλαιο στη μουσική της πορεία. Τη χορωδία διευθύνει ο Dorin Bîtcă, απόφοιτος της Ακαδημίας Μουσικής, Θεάτρου και Καλών Τεχνών του Chișinău, κάτοχος μεταπτυχιακού τίτλου στη Χορωδιακή Διεύθυνση.",
      {
        "heading": "\"Primo\"",
        "level": 4
      },
      "Μπίντγκοστς, Πολωνία Διεύθυνση: Monika Wilkiewicz",
      {
        "img": "/img/primo.webp"
      },
      "Η χορωδία PRIMO του 1ου Γυμνασίου στο Bydgoszcz της Πολωνίας ιδρύθηκε τον Σεπτέμβριο του 1996 από τη μαέστρο Monika Wilkiewicz, καθηγήτρια της Μουσικής Ακαδημίας του Bydgoszcz. Από την ίδρυσή της μέχρι σήμερα, η χορωδία έχει αναπτύξει έντονη καλλιτεχνική δραστηριότητα, πραγματοποιώντας περισσότερες από 400 συναυλίες στην Πολωνία και στο εξωτερικό, εκπροσωπώντας την πόλη του Bydgoszcz σε πολυάριθμα φεστιβάλ και διαγωνισμούς. Το σύνολο έχει λάβει μέρος σε σημαντικούς διεθνείς χορωδιακούς διαγωνισμούς σε χώρες όπως η Φινλανδία, η Ελβετία, το Βέλγιο, η Τσεχία, η Ιταλία, η Ισπανία, η Ουγγαρία, η Κροατία και η Βουλγαρία, αποσπώντας υψηλές διακρίσεις, χρυσά και αργυρά διπλώματα, μετάλλια και βραβεία. Συνολικά, η χορωδία έχει τιμηθεί τρεις φορές με Grand Prix και έχει λάβει περίπου εκατό βραβεία και διακρίσεις. Το ρεπερτόριό της περιλαμβάνει ευρωπαϊκή a cappella χορωδιακή μουσική από τον 16ο έως τον 21ο αιώνα, κυρίως έργα Πολωνών συνθετών, καθώς και κινηματογραφική μουσική, πατριωτικά και παραδοσιακά τραγούδια και δημοφιλείς επιτυχίες. Η Monika Wilkiewicz δραστηριοποιείται στη χορωδιακή μουσική από το 1995, διευθύνει σημαντικά σύνολα και έχει διακριθεί ως μαέστρος, παιδαγωγός και εμψυχώτρια της μουσικής ζωής.",
      {
        "heading": "Φωνητικό Κουαρτέτο \"Kla-sch\"",
        "level": 4
      },
      "Τσεστοχόβα, Πολωνία Διεύθυνση: Przemysław Jeziorowski",
      {
        "img": "/img/Kla-sch.webp"
      },
      "Το Kla-sch Vocal Quartet του Τμήματος Μουσικής του Πανεπιστημίου Jan Długosz στην Częstochowa της Πολωνίας είναι ένα φωνητικό σύνολο που δημιουργήθηκε από φοιτητές του Τμήματος Μουσικής, οι οποίοι μοιράζονται ιδιαίτερο ενδιαφέρον για το πολυφωνικό τραγούδι. Τα μέλη του κουαρτέτου καλλιεργούν συστηματικά τις φωνητικές τους δεξιότητες και εμβαθύνουν στη γνώση του χορωδιακού ρεπερτορίου. Το ρεπερτόριό τους περιλαμβάνει ένα ευρύ φάσμα έργων κλασικής μουσικής, τόσο θρησκευτικής όσο και κοσμικής, καθώς και δημοφιλή μουσική. Το σύνολο συμμετέχει τακτικά σε φοιτητικές συναυλίες και πανεπιστημιακές εκδηλώσεις, προωθώντας ενεργά την κουλτούρα της χορωδιακής μουσικής. Η σημερινή σύνθεση του κουαρτέτου δραστηριοποιείται από τον Φεβρουάριο του 2025 και αποτελείται από τους φοιτητές Zuzanna Efemberg, Martyna Kobus και Kamil Dziomdziora. Το Kla-sch έχει εμφανιστεί στην Πολωνία και στο εξωτερικό, μεταξύ άλλων σε Ružomberok, Bratislava, Nitra, Lloret de Mar και Πρέβεζα. Ανάμεσα στις σημαντικές του διακρίσεις συγκαταλέγονται το Β΄ Βραβείο στον διεθνή διαγωνισμό “Student Artistic Activity” στο Ružomberok, το Αργυρό Μετάλλιο στον 28ο Διεθνή Χορωδιακό Διαγωνισμό Πρέβεζας, καθώς και το Χρυσό Δίπλωμα στον Εθνικό Διαγωνισμό Χριστουγεννιάτικων Καλάντων και Ποιμενικών Τραγουδιών στο Chełmno. Το σύνολο διευθύνει ο Przemysław Jeziorowski, μαέστρος, καθηγητής και απόφοιτος της Μουσικής Ακαδημίας της Κρακοβίας.",
      {
        "heading": "\"Resonans con tutti\"",
        "level": 4
      },
      "Ζάμπρζε, Πολωνία Διεύθυνση: Arlena Różycka-Gałązka & Waldemar Gałązka",
      {
        "img": "/img/resonans.webp"
      },
      "Η Νεανική Χορωδία του Zabrze “Resonans con tutti” ιδρύθηκε το 1970 από τη Maria και τον Norbert Kroczek. Τα τελευταία τριάντα χρόνια τη χορωδία διευθύνουν οι Waldemar Gałązka και Arlena Różycka-Gałązka, μαθητές του ιδρυτή και χοράρχη Norbert Kroczek. Και οι δύο υπήρξαν αρχικά μέλη της χορωδίας και στη συνέχεια ανέλαβαν ρόλο εκπαιδευτών και μαέστρων. Είναι απόφοιτοι της Μουσικής Ακαδημίας Karol Szymanowski στο Katowice και έχουν τιμηθεί με σημαντικές διακρίσεις στους τομείς του πολιτισμού και της εκπαίδευσης. Η χορωδία αποτελείται από περίπου 90 φίλους της χορωδιακής μουσικής, κυρίως ερασιτέχνες ηλικίας 15 έως 30 ετών. Το ρεπερτόριό της περιλαμβάνει έργα a cappella, καθώς και φωνητικά-οργανικά ορατόρια από διαφορετικές μουσικές περιόδους. Κάθε χρόνο πραγματοποιεί περίπου 40 έως 60 συναυλίες και αποτελεί την αντιπροσωπευτική χορωδία της πόλης Zabrze, γνωστής ως «Πόλη του Βιομηχανικού Τουρισμού». Η Resonans con tutti και οι μαέστροί της έχουν λάβει κρατικές και υπουργικές διακρίσεις, καθώς και κορυφαία βραβεία σε διεθνείς διαγωνισμούς σε πόλεις όπως Neerpelt, Ρώμη, Πρέβεζα, Montreux, Tours, Rimini, Neuchatel, Lloret de Mar, Maribor, Ohrid και Riva del Garda. Μέσα από τις εμφανίσεις της, η χορωδία προωθεί τη χορωδιακή μουσική στην Πολωνία και στο εξωτερικό.",
      {
        "heading": "\"Transilvania\"",
        "level": 4
      },
      "Μπρασόβ, Ρουμανία Διεύθυνση: Mihaela Mureșan",
      {
        "img": "/img/Transilvania-choir.webp"
      },
      "Η Χορωδία “Transilvania” απαρτίζεται από μαθητές των τάξεων 9–12 του Μουσικού Λυκείου “Tudor Ciortea” στο Brașov της Ρουμανίας. Από το 2015 διευθύνεται από την καθηγήτρια Mihaela Mureșan. Παρότι πρόκειται για σχολικό σύνολο, του οποίου τα μέλη ανανεώνονται κάθε χρόνο, η χορωδία διατηρεί σταθερά υψηλό καλλιτεχνικό επίπεδο και αναπτύσσει αξιόλογη συναυλιακή παρουσία στη Ρουμανία, την Ουγγαρία και τη Σερβία. Μεταξύ των σημαντικότερων διακρίσεών της συγκαταλέγονται το Τρόπαιο στον Διεθνή Διαγωνισμό Χριστουγεννιάτικων Καλάντων στη Ρουμανία το 2022, το Α΄ Βραβείο στο Διεθνές Φεστιβάλ “Gavriil Musicescu” στο Iași το 2023, καθώς και τα Τρόπαια στο Φεστιβάλ Θρησκευτικής Μουσικής στο Botoșani και στο Διεθνές Χορωδιακό Φεστιβάλ “Vivat Musica” στο Βουκουρέστι το 2024. Το 2025 απέσπασε επίσης το Α΄ Βραβείο στην Εθνική Χορωδιακή Ολυμπιάδα στην Timișoara. Το ρεπερτόριό της περιλαμβάνει θρησκευτικά, κλασικά και σύγχρονα έργα, με έμφαση στη μουσική έκφραση, τη φωνητική ενότητα και τη στιλιστική ποικιλία. Η μαέστρος Mihaela Mureșan είναι απόφοιτη της Σχολής Μουσικής του Brașov και κάτοχος μεταπτυχιακού τίτλου στη Μουσική και Τέχνη του 20ού αιώνα. Από το 2015 διδάσκει θεωρία της μουσικής και διευθύνει τη Χορωδία “Transilvania” και την Παιδική Χορωδία “Cristale” του Μουσικού Λυκείου “Tudor Ciortea”.",
      {
        "heading": "Χορωδία “Academica Bucovina”",
        "level": 4
      },
      "Κιμπουλούνγκ Μολντοβενέσκ, Ρουμανία Διεύθυνση: Emil Forfotă",
      {
        "img": "/img/bucovina.webp"
      },
      "Η Χορωδία Academica Bucovina ιδρύθηκε το 2004 στο Câmpulung Moldovenesc της Ρουμανίας. Αποτελείται από περίπου 35 μέλη διαφορετικών ηλικιών και επαγγελματικών χώρων, ανάμεσά τους μαθητές, εκπαιδευτικοί και συνταξιούχοι, τους οποίους ενώνει η αγάπη για τη χορωδιακή μουσική. Τη χορωδία διευθύνει ο καθηγητής Emil Forfotă, μουσικός παιδαγωγός και μαέστρος με πολυετή προσφορά στη χορωδιακή πράξη. Είναι απόφοιτος της Μουσικής Ακαδημίας “Gheorghe Dima” του Cluj και έχει διατελέσει διευθυντής μαθητικών και ερασιτεχνικών χορωδιακών συνόλων, ενώ σήμερα διευθύνει την Ανδρική Χορωδία Bucovina και τη Μικτή Χορωδία Academica Bucovina. Κύριος στόχος της χορωδίας είναι η προώθηση των αξιών της μουσικής κουλτούρας τόσο στη Ρουμανία όσο και στο εξωτερικό. Παρά τη σχετικά σύντομη ιστορία της, έχει συμμετάσχει σε σημαντικούς διαγωνισμούς, συναυλίες και διεθνή φεστιβάλ σε χώρες όπως η Ιταλία, η Τσεχία, η Γαλλία, η Ελλάδα, η Γερμανία, η Κροατία, η Ισπανία, η Τουρκία και το Μαυροβούνιο, αποσπώντας βραβεία και διακρίσεις. Κάθε χρόνο παρουσιάζει επίσης συναυλίες θρησκευτικής μουσικής κατά την περίοδο του Πάσχα και των Χριστουγέννων σε πόλεις της Ρουμανίας και του εξωτερικού. Η καλλιτεχνική της πορεία βασίζεται στην ανιδιοτελή αγάπη για τη μουσική και στην επιθυμία μετάδοσης ενός βαθύτερου μηνύματος μέσα από το χορωδιακό τραγούδι.",
      {
        "heading": "\"Hashira\"",
        "level": 4
      },
      "Νόβι Σαντ, Σερβία Διεύθυνση: Vesna Kesić Krsmanović",
      {
        "img": "/img/Hashira.webp"
      },
      "Η Χορωδία της Εβραϊκής Κοινότητας του Novi Sad “Hashira” ιδρύθηκε το 1993. Η λέξη Hashira στα εβραϊκά σημαίνει «το τραγούδι» και αποτυπώνει τον βασικό σκοπό του συνόλου: τη διατήρηση και ανάδειξη της εβραϊκής συναγωγικής και λαϊκής μουσικής κληρονομιάς. Παράλληλα, η χορωδία παρουσιάζει ένα ευρύ φάσμα χορωδιακής μουσικής, τραγουδώντας σε πολλές γλώσσες, όπως εβραϊκά, γίντις, ladino, σερβικά, ισπανικά, λατινικά, ιταλικά, αγγλικά και βασκικά. Στην πορεία της έχει αποσπάσει πολυάριθμες διακρίσεις σε τοπικά και διεθνή φεστιβάλ και διαγωνισμούς, μεταξύ άλλων στη Σλοβακία, την Τσεχία, τη Βοσνία-Ερζεγοβίνη, την Ιταλία, την Ελλάδα, τη Γερμανία, την Κροατία και τη Σλοβενία. Το 2016 τιμήθηκε με το Μετάλλιο Πολιτιστικής Διατήρησης του Πολιτιστικού Ινστιτούτου της Βοϊβοντίνα, σε αναγνώριση της προσφοράς της. Ιδιαίτερο χαρακτηριστικό της χορωδίας είναι η πολυμορφία των μελών της, που προέρχονται από διαφορετικά εθνικά και θρησκευτικά περιβάλλοντα. Τη χορωδία διευθύνει από το 2004 η Vesna Kesić Krsmanović, η οποία σπούδασε σύνθεση και διεύθυνση στην Ακαδημία Μουσικής του Βελιγραδίου και έχει πολυετή εμπειρία ως μαέστρος της Χορωδίας της Όπερας του Σερβικού Εθνικού Θεάτρου στο Νόβι Σαντ.",
      {
        "heading": "Ακαδημαϊκή Χορωδία του Πανεπιστημίου του Μάριμπορ",
        "level": 4
      },
      "Μάριμπορ, Σλοβενία Διεύθυνση: Uroš Jurgec",
      {
        "img": "/img/maribor-choir.webp"
      },
      "Η Ακαδημαϊκή Χορωδία του Πανεπιστημίου του Maribor δραστηριοποιείται από το 1964 στο πλαίσιο του Πολιτιστικού και Καλλιτεχνικού Συλλόγου των φοιτητών του Πανεπιστημίου και αποτελεί έναν από τους σημαντικότερους φορείς φοιτητικής, νεανικής και ερασιτεχνικής πολιτιστικής δημιουργίας στην πόλη του Maribor. Το 2025 η χορωδία υποδέχθηκε ως νέο καλλιτεχνικό διευθυντή τον Uroš Jurgec. Η χορωδία έχει σημειώσει σημαντικές επιτυχίες σε διεθνείς διαγωνισμούς και φεστιβάλ στη Σλοβενία και στο εξωτερικό. Ανάμεσα στις διακρίσεις της ξεχωρίζουν η 1η θέση στην κατηγορία μεικτών χορωδιών στον Διεθνή Χορωδιακό Διαγωνισμό “Bela Bartok” στο Ντέμπρετσεν της Ουγγαρίας το 2016, η 1η θέση στον Διεθνή Χορωδιακό Διαγωνισμό Μαΐου “Καθ. Georgi Dimitrov” στη Βάρνα της Βουλγαρίας το 2018, καθώς και βραβεία σε κορυφαίες διοργανώσεις στην Ιταλία, τη Σλοβενία και την Αυστρία. Ο Uroš Jurgec ολοκλήρωσε τις μεταπτυχιακές του σπουδές στη μουσική στο Πανεπιστήμιο του Maribor. Ξεκίνησε την πορεία του στη διεύθυνση χορωδίας το 2016, περνώντας από τη θέση του χορωδού, του βοηθού μαέστρου και του συν-μαέστρου, πριν αναλάβει την πλήρη διεύθυνση της χορωδίας το 2025. Έχει τιμηθεί με βραβεία για τη διεύθυνση, την επιλογή προγράμματος και την ερμηνεία υποχρεωτικών και σύγχρονων έργων.",
      {
        "heading": "\"Izar Argia\"",
        "level": 4
      },
      "Λαραμπέτσου, Ισπανία Διεύθυνση: Aintzane Garamendi Eguren",
      {
        "img": "/img/izar.webp"
      },
      "Η χορωδία Izar Argia ιδρύθηκε στις 22 Μαΐου 1995 στο Larrabetzu της Βισκαΐας, στη Χώρα των Βάσκων, αρχικά ως παιδική χορωδία ομοίων φωνών. Δημιουργήθηκε με σκοπό τη διδασκαλία, την προώθηση και τη διάδοση της παραδοσιακής βασκικής χορωδιακής μουσικής στην περιοχή Txorierri, αλλά και την παρουσίασή της σε άλλες κοινότητες, τόσο σε εθνικό όσο και σε διεθνές επίπεδο. Σήμερα η χορωδία αποτελείται από περίπου 30 νέους, ηλικίας 11 έως 21 ετών. Το ρεπερτόριό της περιλαμβάνει ποικιλία μουσικών ειδών και έργων σε διαφορετικές γλώσσες, με κύρια γλώσσα τα βασκικά. Στόχος της είναι να καθοδηγεί και να εκπαιδεύει τους νέους μέσα από τη μουσική και τον πολιτισμό, ξεκινώντας από τη Μουσική Σχολή του Larrabetzu. Από την ίδρυσή της είναι μέλος της Bizkaiko Abesbatzen Elkartea - Bizcay Choral Association. Η χορωδία έχει συμμετάσχει σε συναυλίες και φεστιβάλ στη Χώρα των Βάσκων και στο εξωτερικό, μεταξύ άλλων στο European Music Festival for Young People στο Neerpelt του Βελγίου και στο Spring Festival στο Montecatini Terme της Ιταλίας. Τη χορωδία διευθύνει η Aintzane Garamendi Eguren, καθηγήτρια στη Μουσική Σχολή του Larrabetzu, με ειδίκευση στο πιάνο, τη θεωρία της μουσικής και τη χορωδία.",
      {
        "heading": "Χορωδία Συλλόγου Εκπαιδευτικών Πρωτοβάθμιας Εκπαίδευσης Πιερίας",
        "level": 4
      },
      "Κατερίνη, Ελλάδα Διεύθυνση: Όλγα Ματθαίου",
      {
        "img": "/img/sepe.webp"
      },
      "Το Χορωδιακό Τμήμα του Συλλόγου Εκπαιδευτικών Πρωτοβάθμιας Εκπαίδευσης Πιερίας ιδρύθηκε το 2012 και αποτελεί μια ερασιτεχνική χορωδιακή ομάδα με έδρα την Πιερία. Στόχος της είναι η επίτευξη ενός άρτιου καλλιτεχνικού αποτελέσματος σε κάθε εμφάνιση, μέσα από τη συλλογική προσπάθεια, τη συνεργασία και την αγάπη για τη μουσική. Με την πάροδο των χρόνων, η χορωδία εξελίχθηκε σε μια δημιουργική κοινότητα, με σταθερή στήριξη από μαέστρους της Κατερίνης που υπηρετούν τον πολιτισμό και την παιδεία. Στη μέχρι σήμερα πορεία της έχει πραγματοποιήσει πολλές συναυλίες με έντεχνα και παραδοσιακά τραγούδια στην Ελλάδα, κυρίως στην Πιερία και τη Θεσσαλονίκη, αλλά και στο εξωτερικό, με εμφανίσεις στην Κωνσταντινούπολη και στις ελληνόφωνες περιοχές της Απουλίας στην Ιταλία. Έχει επίσης παρουσιάσει με μεγάλη επιτυχία μουσικοθεατρικές παραστάσεις στην Κατερίνη, όπως τον Ερωτόκριτο και τον Διγενή Ακρίτα, οι οποίες επαναλήφθηκαν και σε άλλες πόλεις. Η χορωδία συμμετέχει σε πολιτιστικές εκδηλώσεις του Δήμου Κατερίνης, της Πρωτοβάθμιας Εκπαίδευσης Πιερίας και πολιτιστικών συλλόγων, καθώς και σε χορωδιακά φεστιβάλ. Από το 2025 τη διευθύνει η Όλγα Ματθαίου, μουσικολόγος και μουσικοπαιδαγωγός, απόφοιτη του Τμήματος Μουσικών Σπουδών του ΑΠΘ, με μεταπτυχιακές σπουδές στη μουσική και την εκπαίδευση.",
      {
        "heading": "Μικτή Χορωδία Λιβαδειάς «Έρκυνα»",
        "level": 4
      },
      "Λιβαδειά, Ελλάδα Διεύθυνση: Ηρώ Παναγιωτοπούλου",
      {
        "img": "/img/livadia-choir.webp"
      },
      "Η Μικτή Χορωδία Λιβαδειάς Έρκυνα δημιουργήθηκε από πολίτες της Λιβαδειάς, με σκοπό τη μουσική καλλιέργεια και την αναβάθμιση του πνευματικού, καλλιτεχνικού και πολιτιστικού επιπέδου της πόλης. Είναι τετράφωνη χορωδία με ευρύ και διαρκώς εξελισσόμενο ρεπερτόριο, που περιλαμβάνει πολυφωνικά έργα δυτικής λόγιας μουσικής, τραγούδια και μελωδίες από όλο τον κόσμο, spirituals, gospels, ροκ και άλλα σύγχρονα είδη, καθώς και έργα σημαντικών Ελλήνων και ξένων συνθετών. Στη μακρόχρονη πορεία της έχει συμμετάσχει σε πολλά χορωδιακά φεστιβάλ στην Ελλάδα και στο εξωτερικό, ενώ διοργανώνει χορωδιακές συναντήσεις σε συνεργασία με τον Δήμο Λεβαδέων. Έχει συνεργαστεί με σημαντικούς Έλληνες συνθέτες και ερμηνευτές, παρουσιάζοντας έργα του Μίκη Θεοδωράκη, του Παντελή Θαλασσινού και του Νίκου Πορτοκάλογλου. Ιδιαίτεροι σταθμοί υπήρξαν οι παρουσιάσεις του «Ζορμπά», της La Traviata, του Il Trovatore και του Άξιον Εστί στη Λιβαδειά. Από τον Σεπτέμβριο του 2024 τη χορωδία διδάσκει και διευθύνει η Ηρώ Παναγιωτοπούλου, καθηγήτρια μουσικής, απόφοιτη του Τμήματος Μουσικών Σπουδών του ΕΚΠΑ, με σπουδές στο πιάνο και στα θεωρητικά, καθώς και πολυετή εμπειρία στη χορωδιακή πράξη και τη μουσική εκπαίδευση.",
      {
        "heading": "Χορωδιακό Εργαστήρι Ναυπλίου",
        "level": 4
      },
      "Ναύπλιο, Ελλάδα Διεύθυνση: Γιάννης Νικολόπουλος",
      {
        "img": "/img/nafpliochoir.webp"
      },
      "Το Χορωδιακό Εργαστήρι Ναυπλίου είναι ένα πολυφωνικό χορωδιακό σχήμα που δημιουργήθηκε από δημότες του Ναυπλίου πριν από δέκα χρόνια. Από την ίδρυσή του έχει αναπτύξει αξιόλογη καλλιτεχνική και κοινωνική δραστηριότητα, με συναυλίες, παραστάσεις και συμμετοχές σε φεστιβάλ σε όλη την Ελλάδα. Σημαντική πρωτοβουλία του υπήρξε η πραγματοποίηση της 1ης Συνάντησης Χορωδιών Αργολίδας το 2017 στο Ναύπλιο, με τη συμμετοχή εννέα χορωδιών, καθώς και η καθιέρωση ετήσιου χορωδιακού φεστιβάλ κάθε Ιούνιο, με αφιερώματα σε σημαντικούς Έλληνες συνθέτες και ποιητές. Το σύνολο έχει παρουσιάσει μεγάλες συναυλίες και μουσικές παραστάσεις, όπως το «Άνθρωπος και Μουσική» στην αίθουσα του Φιλολογικού Συλλόγου «Παρνασσός» στην Αθήνα, καθώς και παράσταση αφιερωμένη στο ρεμπέτικο τραγούδι ως άυλη πολιτιστική κληρονομιά. Παράλληλα, πραγματοποιεί συναυλίες σε ιδρύματα της πόλης, προσφέροντας μουσική και ψυχαγωγία σε ευαίσθητες κοινωνικές ομάδες. Καλλιτεχνικός διευθυντής και μαέστρος είναι ο Γιάννης Νικολόπουλος, με πολυετή εμπειρία ως καθηγητής μουσικής, θεωρητικών, πιάνου και ακορντεόν. Από το 2016 διευθύνει το Χορωδιακό Εργαστήρι Ναυπλίου.",
      {
        "heading": "\"Belcantes\"",
        "level": 4
      },
      "Πάτρα, Ελλάδα Διεύθυνση: Έλενα Δρουκοπούλου Πιάνο: Κωνσταντίνα Ανδρουτσοπούλου",
      {
        "img": "/img/belcantesnew.webp"
      },
      "Η χορωδία Belcantes Αγίου Ανδρέα Εγλυκάδας Πατρών ιδρύθηκε τον Σεπτέμβριο του 2016 και από τότε έχει αναπτύξει αξιόλογη καλλιτεχνική δραστηριότητα, συμμετέχοντας σε φεστιβάλ, διαγωνισμούς και συναυλίες στην Ελλάδα και το εξωτερικό. Στην πορεία της έχει αποσπάσει σημαντικές διακρίσεις σε διεθνείς χορωδιακές διοργανώσεις. Το 2021 κατέκτησε την πρώτη θέση στην κατηγορία της στο World Peace Choral Festival, ενώ το 2022 συμμετείχε στον 26ο Διεθνή Διαγωνισμό Χορωδιακής Μουσικής στην Πρέβεζα, αποσπώντας δύο Αργυρά Μετάλλια. Την ίδια χρονιά έλαβε μέρος στο 12ο Παγκόσμιο Φεστιβάλ και Διαγωνισμό της Χορωδίας «Κοραής» στη Θεσσαλονίκη, όπου τιμήθηκε με Ειδικό Βραβείο Παρουσίασης Μιούζικαλ, Αργυρό Μετάλλιο και χρηματικό έπαθλο. Το 2023 παρουσίασε σε πρώτη εκτέλεση το μιούζικαλ του Χάρη Πεγιάζη «Τα Χριστούγεννα του Τσιγγούνη», ενώ στον 10ο Διεθνή Χορωδιακό Διαγωνισμό ARTIVA στο Ναύπλιο απέσπασε Χρυσό και Ασημένιο Μετάλλιο. Τον Απρίλιο του 2025 συμμετείχε στο Διεθνές Φεστιβάλ Choral Space στο Βερολίνο, αφιερωμένο στον συνθέτη Ola Gjeilo. Τη χορωδία διευθύνει η Έλενα Δρουκοπούλου.",
      {
        "heading": "\"Ανατολή\"",
        "level": 4
      },
      "Λεμεσός, Κύπρος Διεύθυνση: π. Νικόλαος Λυμπουρίδης",
      {
        "img": "/img/anatoli-choir.webp"
      },
      "Η Παραδοσιακή Χορωδία «Ανατολή» της Ιεράς Μητροπόλεως Λεμεσού ιδρύθηκε το 2003 με σκοπό να προβάλλει και να διαδώσει την ελληνική δημοτική μουσική, με ιδιαίτερη έμφαση στην κυπριακή παράδοση. Παράλληλα, επιδιώκει να καλλιεργήσει στους νέους και στα παιδιά την αγάπη για τη μουσική κληρονομιά της Κύπρου και του ευρύτερου Ελληνισμού. Το ρεπερτόριό της περιλαμβάνει κυρίως δημοτικά τραγούδια από την Κύπρο, τη Θράκη, τη Μακεδονία, τη Μικρά Ασία, την Καππαδοκία και το Αιγαίο. Από τα Χριστούγεννα του 2003, η χορωδία παρουσιάζει παραδοσιακά κάλαντα από διάφορες περιοχές του Ελληνισμού και συμμετέχει σταθερά σε σημαντικές πολιτιστικές εκδηλώσεις. Έχει εμφανιστεί, μεταξύ άλλων, στο διεθνές φεστιβάλ «ΚΥΠΡΙΑ», στη Χορωδιακή Συνάντηση της Φλώρινας και σε συναυλίες της Ιεράς Μητροπόλεως Λεμεσού με καλλιτέχνες από την Ελλάδα και την Κύπρο. Το 2009 συμμετείχε στον ψηφιακό δίσκο «Πάλιν ακούστε Άρχοντες», με παραδοσιακά κάλαντα και εκκλησιαστικούς ύμνους του Δωδεκαημέρου. Τη χορωδία διευθύνει ο π. Νικόλαος Λυμπουρίδης, ο οποίος σπούδασε Θεολογία στο Αριστοτέλειο Πανεπιστήμιο Θεσσαλονίκης και Βυζαντινή Μουσική στη Θεσσαλονίκη και στην Αθήνα. Το 1997 ίδρυσε τη Βυζαντινή Χορωδία «Ρωμανός Μέλωδος» και το 2003 την Παραδοσιακή Χορωδία «Ανατολή», συμβάλλοντας ουσιαστικά στη διατήρηση και προβολή της εκκλησιαστικής και παραδοσιακής μουσικής κληρονομιάς.",
      {
        "heading": "\"Αοιδών Φωνές\"",
        "level": 4
      },
      "Παραλίμνι, Κύπρος Διεύθυνση: Παντελίνα Πασχάλη Πιάνο: Δημήτρης Πασχάλης",
      {
        "img": "/img/aoidon.webp"
      },
      "Η Νεανική Χορωδία Δήμου Παραλιμνίου - Δερύνειας «Αοιδών Φωνές» αποτελεί ένα δραστήριο σύνολο πολιτισμού και μουσικής παιδείας, με συνεχή παρουσία από το 1996 έως σήμερα. Απευθύνεται σε παιδιά και νέους ηλικίας 9 έως 18 ετών και έχει ως κύριο στόχο να καλλιεργεί την αγάπη για τη χορωδιακή μουσική και να ενισχύει την ενεργό συμμετοχή των νέων στην πολιτιστική ζωή του τόπου. Με πολυάριθμες εμφανίσεις σε εκδηλώσεις και φεστιβάλ στην Κύπρο και στο εξωτερικό, οι «Αοιδών Φωνές» εκπροσωπούν επάξια τον Δήμο Παραλιμνίου - Δερύνειας και αναδεικνύουν τη δύναμη της συλλογικής μουσικής έκφρασης. Το ρεπερτόριό τους επικεντρώνεται κυρίως στην ελληνική μουσική, την οποία προσεγγίζουν με φρεσκάδα, ευαισθησία και καλλιτεχνική ποιότητα. Σήμερα η χορωδία αριθμεί περίπου 30 μέλη. Από το 2022, τη χορωδία διευθύνει η Παντελίνα Πασχάλη, μουσικός, μαέστρος και ιδιοκτήτρια μουσικής σχολής στην ελεύθερη επαρχία Αμμοχώστου. Είναι απόφοιτος του Ευρωπαϊκού Πανεπιστημίου Κύπρου και κάτοχος μεταπτυχιακού τίτλου στη Διοίκηση Καλλιτεχνικών Εκδηλώσεων από το Πανεπιστήμιο του Derby. Στο πιάνο συνοδεύει ο Δημήτρης Πασχάλης.",
      {
        "heading": "Χορωδία και Μαντολινάτα Αργοστολίου",
        "level": 4
      },
      "Αργοστόλι, Κεφαλονιά, Ελλάδα Διεύθυνση: Σπύρος Θεοτοκάτος",
      {
        "img": "/img/argostoli-choir.webp"
      },
      "Η Χορωδία Αργοστολίου ιδρύθηκε το 1980, με σκοπό να συνεχίσει τη μεγάλη παράδοση της Κεφαλονιάς στη χορωδιακή μουσική. Από την ίδρυσή της έως το 2010 τη χορωδία διηύθυνε ο Βασίλης Μουντάκης, ενώ σήμερα αποτελείται από 25 άνδρες χορωδούς, συνεχίζοντας την ιδιαίτερη κεφαλονίτικη παράδοση των ανδρικών χορωδιών. Στις συναυλίες της συνοδεύεται από μαντολινάτα, η οποία εμπλουτίζει το χρώμα και την απόδοση των τραγουδιών. Στη μακρόχρονη πορεία της, η Χορωδία Αργοστολίου έχει πραγματοποιήσει πολλές συναυλίες στην Κεφαλονιά, στην Ελλάδα και στο εξωτερικό, ταξιδεύοντας σε πολλές ευρωπαϊκές χώρες, αλλά και στη Νέα Υόρκη το 2013. Με το χαρακτηριστικό της ηχόχρωμα, εκπροσωπεί το κεφαλονίτικο χορωδιακό τραγούδι και λειτουργεί ως πολιτιστικός πρεσβευτής του νησιού. Έχει ηχογραφήσει πέντε δίσκους, συμβάλλοντας στη διατήρηση της τοπικής μουσικής παράδοσης. Από το 2015 τη χορωδία και μαντολινάτα διευθύνει ο Σπύρος Θεοτοκάτος, μουσικός με σπουδές στη Βυζαντινή Μουσική, στα ανώτερα θεωρητικά και στη διεύθυνση χορωδίας και ορχήστρας. Κάθε χρόνο το σύνολο διοργανώνει τις Χορωδιακές Συναντήσεις Κεφαλονιάς, με συμμετοχές από την Ελλάδα και το εξωτερικό.",
      {
        "heading": "The All-American Boys Chorus",
        "level": 4
      },
      "Άναχαϊμ, Καλιφόρνια, Ηνωμένες Πολιτείες Αμερικής Καλλιτεχνική Διεύθυνση: Wesley Martin",
      {
        "img": "/img/all-american-boys.webp"
      },
      "Η Παιδική Χορωδία Αγοριών “The All-American Boys Chorus”, με έδρα το Anaheim της Καλιφόρνιας, ιδρύθηκε το 1970 και αποτελεί έναν αναγνωρισμένο νεανικό μουσικό οργανισμό των Ηνωμένων Πολιτειών, βραβευμένο με βραβείο Emmy. Η χορωδία είναι αφιερωμένη στην καλλιέργεια της μουσικής αριστείας, αλλά και στη διαμόρφωση χαρακτήρα, προσφέροντας στα αγόρια υψηλού επιπέδου φωνητική εκπαίδευση, ευκαιρίες ηγεσίας, συναυλίες, περιοδείες και δράσεις προσφοράς στην κοινότητα. Με τον ξεχωριστό της ήχο και τον σεβασμό στην παράδοση, η χορωδία έχει εμφανιστεί σε πολλές περιοχές των Ηνωμένων Πολιτειών και σε διεθνείς σκηνές, λειτουργώντας ως μουσικός πρεσβευτής και εμπνέοντας το κοινό μέσα από τη δύναμη της μουσικής. Πέρα από την καλλιτεχνική παρουσία, ο οργανισμός δίνει έμφαση στην πειθαρχία, την ομαδικότητα, την αυτοπεποίθηση και την προσωπική ανάπτυξη των παιδιών. Καλλιτεχνικός διευθυντής και μαέστρος της χορωδίας είναι ο Wesley Martin, μαέστρος, ενορχηστρωτής και παιδαγωγός, ο οποίος διευθύνει τη χορωδία από το 2002. Γεννημένος στην Αυστραλία, σπούδασε μουσική στο περίφημο Ωδείο Μουσικής του Σίδνεϊ, καθώς και στο Ινστιτούτο Kodaly της Ουγγαρίας, αποκτώντας σημαντική κατάρτιση στον τομέα της μουσικής εκπαίδευσης και της χορωδιακής πράξης. Με περισσότερα από 40 χρόνια εμπειρίας στη χορωδιακή μουσική, έχει συμβάλει καθοριστικά στην εξέλιξη της χορωδίας σε ένα από τα σημαντικότερα παιδικά χορωδιακά σύνολα των ΗΠΑ.",
      ...choir("ave-chamber-choir", "el", {level: 4}),
      {
        "heading": "Παιδική Χορωδία Πρέβεζας «Αρμονία»",
        "level": 4
      },
      "Πρέβεζα, Ελλάδα Διεύθυνση: Anelia Stefanova",
      {
        "img": "/img/childrens-main.webp"
      },
      "Η Παιδική Χορωδία Πρέβεζας «Αρμονία» ιδρύθηκε το 1983 από τον μαέστρο Ανδρόνικο Κουρούκλη και αποτελεί τμήμα της Χορωδίας Πρέβεζας «Αρμονία». Στην πορεία τεσσάρων δεκαετιών έχει αναπτύξει σημαντική καλλιτεχνική δραστηριότητα, εκπροσωπώντας την Πρέβεζα και την Ελλάδα σε φεστιβάλ και διαγωνισμούς στην Ελλάδα και το εξωτερικό. Η χορωδία έχει αποσπάσει 5 πρώτα, 2 δεύτερα και 2 τρίτα βραβεία σε διεθνείς χορωδιακούς διαγωνισμούς σε Βουλγαρία, Ελλάδα, Ιταλία, Ελβετία, Ουγγαρία, Πολωνία και Σλοβακία, ενώ έχει τιμηθεί δύο φορές ως Καλύτερη Ελληνική Παιδική Χορωδία στο Διεθνές Χορωδιακό Φεστιβάλ Αθηνών. Έχει εμφανιστεί σε σημαντικά φεστιβάλ σε Αθήνα, Πάτρα και Θεσσαλονίκη και συμμετείχε στις πολιτιστικές εκδηλώσεις των Ολυμπιακών Αγώνων Αθήνα 2004. Στο εξωτερικό έχει παρουσιαστεί, μεταξύ άλλων, στο Διεθνές Χορωδιακό Φεστιβάλ “Aram Khachaturian” στο Haskovo, στο Διεθνές Φεστιβάλ της Ρώμης, στο Πασχαλινό Φεστιβάλ Μόσχας και στο Eurochestries International Festival στη Γαλλία. Το 2023 απέσπασε χρυσό βραβείο και τέσσερα ειδικά βραβεία στον διαγωνισμό “Gaude Cantem” στην Πολωνία, ενώ το 2025 κατέκτησε χρυσό μετάλλιο στη Μπρατισλάβα. Από το 1994 τη χορωδία διευθύνει η Anelia Stefanova.",
      {
        "heading": "Μικτή Χορωδία Πρέβεζας «Αρμονία»",
        "level": 4
      },
      "Πρέβεζα, Ελλάδα Διεύθυνση: Anelia Stefanova",
      {
        "img": "/img/mixed-armonia.webp"
      },
      "Η Μικτή Χορωδία Πρέβεζας «Αρμονία» ιδρύθηκε το 1969 από ομάδα φιλόμουσων Πρεβεζάνων, με μαέστρο τον αείμνηστο Ανδρόνικο Κουρούκλη, με στόχο την προώθηση της χορωδιακής μουσικής και του πολιτισμού στην πόλη της Πρέβεζας. Στην εξέλιξη της χορωδίας σημαντικό ρόλο διαδραμάτισαν οι μαέστροι Γιώργος Κακίτσης, Σταύρος Σολωμός και Valentin Stefanov. Η «Αρμονία» αποτελεί τον ιδρυτικό φορέα του Διεθνούς Χορωδιακού Φεστιβάλ Πρέβεζας το 1983 και του Διεθνούς Χορωδιακού Διαγωνισμού Θρησκευτικής Μουσικής το 1995, συμβάλλοντας καθοριστικά στην ανάπτυξη του χορωδιακού κινήματος στην Ελλάδα. Έχει πραγματοποιήσει σημαντικές καλλιτεχνικές παραγωγές και διεθνείς εμφανίσεις σε πολλές χώρες της Ευρώπης, ενώ έχει συνεργαστεί με αξιόλογους καλλιτέχνες και ορχήστρες σε έργα όπως το Carmina Burana του Carl Orff και το Άξιον Εστί του Μίκη Θεοδωράκη. Η χορωδία έχει αποσπάσει πολυάριθμα βραβεία σε διεθνείς διαγωνισμούς, μεταξύ των οποίων διακρίσεις στη Ρώμη, τη Μπρατισλάβα και την Αγία Πετρούπολη, ενώ τον Μάιο του 2026 κατέκτησε χρυσό μετάλλιο στο 15ο Παγκόσμιο Φεστιβάλ Χορωδιών Θεσσαλονίκης. Από το 2016 τη διεύθυνση της χορωδίας έχει η Anelia Stefanova.",
      {
        "heading": "Επεξηγήσεις Προγράμματος",
        "level": 3,
        "align": "center"
      },
      {
        "heading": "Εμφανίσεις στην πόλη",
        "level": 4
      },
      "Κατά τη διάρκεια των εμφανίσεων στην πόλη συμμετέχουν όλες οι χορωδίες που συμμετέχουν στο φεστιβάλ. Οι εκδηλώσεις αυτές σχεδιάζονται ως ανοιχτή παρουσίαση του φεστιβάλ στους δρόμους και τους δημόσιους χώρους της πόλης. Κάθε χορωδία παρουσιάζει σύντομα αποσπάσματα από το ρεπερτόριό της, προσφέροντας στο κοινό μια πρώτη μουσική γνωριμία με το καλλιτεχνικό της έργο. Τα κομμάτια που παρουσιάζονται κατά τη διάρκεια των εμφανίσεων στην πόλη είναι ενδεικτικά του ρεπερτορίου που θα ακουστεί αργότερα στις επίσημες συναυλίες.",
      {
        "heading": "Παρέλαση & Τελετή Έναρξης (Πέμπτη Βράδυ)",
        "level": 4
      },
      "Το βράδυ της Πέμπτης, όλες οι συμμετέχουσες χορωδίες λαμβάνουν μέρος στην παρέλαση, η οποία οδηγεί στο Ανοιχτό Θέατρο Κήπου του Δήμου Πρέβεζας \"Γιάννης Ρίτσος\". Κατά την Τελετή Έναρξης, κάθε χορωδία παρουσιάζει ένα (1) τραγούδι, παρουσιάζοντας τον εαυτό της επίσημα στο κοινό και σηματοδοτώντας την επίσημη έναρξη του φεστιβάλ.",
      {
        "heading": "Διαγωνιστικές Συνεδρίες",
        "level": 4
      },
      "Κατά τη διάρκεια των διαγωνιστικών συνεδριών, οι χορωδίες εμφανίζονται σύμφωνα με τις διαγωνιστικές κατηγορίες στις οποίες έχουν εγγραφεί. Κάθε χορωδία παρουσιάζει το πρόγραμμα που έχει ήδη δηλώσει στην αίτησή της, το οποίο αξιολογείται από τη Διεθνή Κριτική Επιτροπή σύμφωνα με τον κανονισμό του διαγωνισμού.",
      {
        "heading": "Βραδινές Συναυλίες (Παρασκευή & Σάββατο)",
        "level": 4
      },
      "Οι βραδινές συναυλίες είναι φεστιβαλικές συναυλίες στις οποίες συμμετέχουν χορωδίες από όλο το πρόγραμμα του φεστιβάλ. Κάθε συναυλία περιλαμβάνει τέσσερις έως πέντε (4–5) χορωδίες, και σε κάθε εμφάνιση, οι συμμετέχουσες χορωδίες παρουσιάζουν τρία έως τέσσερα (3–4) κομμάτια, με συνολικό χρόνο εμφάνισης περίπου 12 λεπτά ανά χορωδία. Οι συναυλίες αυτές πραγματοποιούνται είτε σε υπαίθριους χώρους, με την υποστήριξη ηχητικής ενίσχυσης και μικροφώνων, είτε σε εκκλησίες, όπου το ρεπερτόριο που παρουσιάζεται είναι κυρίως ιερό ή θρησκευτικού χαρακτήρα. Οι βραδινές συναυλίες στοχεύουν να αναδείξουν την ποικιλομορφία των χορωδιακών παραδόσεων και στυλ που εκπροσωπούνται στο φεστιβάλ και να προσφέρουν στο κοινό μια πλούσια και ποικιλόμορφη μουσική εμπειρία, προσαρμοσμένη στον χαρακτήρα κάθε χώρου.",
      {
        "heading": "Συνάντηση με τη Διεθνή Κριτική Επιτροπή (Κυριακή Πρωί)",
        "level": 4
      },
      "Το πρωί της Κυριακής, πραγματοποιείται συνάντηση μεταξύ της Διεθνούς Κριτικής Επιτροπής και των μαέστρων που συμμετείχαν στον διαγωνισμό. Κατά τη διάρκεια αυτής της συνάντησης, τα μέλη της κριτικής επιτροπής παρέχουν ανατροφοδότηση, παρατηρήσεις και επαγγελματική καθοδήγηση, συζητώντας πτυχές της ερμηνείας, της ερμηνευτικής προσέγγισης και της χορωδιακής ανάπτυξης, και προσφέροντας εποικοδομητικές συμβουλές για τη μελλοντική καλλιτεχνική εργασία.",
      {
        "heading": "Τελετή Λήξης (Κυριακή Βράδυ)",
        "level": 4
      },
      "Κατά την Τελετή Λήξης, εμφανίζονται μόνο οι βραβευμένες χορωδίες. Η επιλογή των έργων που θα παρουσιαστούν γίνεται από τη Διεθνή Κριτική Επιτροπή, και οι εμφανίσεις συνοδεύουν την επίσημη ανακοίνωση των αποτελεσμάτων του διαγωνισμού.",
      {
        "heading": "Τελικό Σημείωμα",
        "level": 2
      },
      "Ο σκοπός αυτών των δραστηριοτήτων είναι η προώθηση της καλλιτεχνικής ανταλλαγής, της προβολής, της εκπαίδευσης και του διαλόγου μεταξύ χορωδιών, μαέστρων και κοινού, ενισχύοντας παράλληλα τον εορταστικό και διεθνή χαρακτήρα της εκδήλωσης.",
      {
        "heading": "Φόρμα Αίτησης Συμμετοχής 30ου Διεθνούς Χορωδιακού Διαγωνισμού",
        "level": 3,
        "align": "center"
      },
      "6-12 Ιουλίου 2026",
      "[Λήψη](/ApplicationFormICCP2026Greek.docx)",
      {
        "heading": "Κανόνες 30ου Διεθνούς Χορωδιακού Διαγωνισμού",
        "level": 3,
        "align": "center"
      },
      "6-12 Ιουλίου 2026",
      "[Λήψη](/RulesICCP2026Greek.docx)",
      {
        "heading": "Φόρμα Αίτησης 44ου Διεθνούς Χορωδιακού Φεστιβάλ",
        "level": 3,
        "align": "center"
      },
      "6-12 Ιουλίου 2026",
      "[Λήψη](/ApplicationForm44thICFP.docx)",
      {
        "heading": "Κανόνες 44ου Διεθνούς Χορωδιακού Φεστιβάλ",
        "level": 3,
        "align": "center"
      },
      "6-12 Ιουλίου 2026",
      "[Λήψη](/Rules44thICFP.docx)"
    ],
  },
  aside: {
    en: [
      {
        "heading": "Organising Committee:",
        "level": 4
      },
      {
        "heading": "Kosmas Koronaios, President",
        "level": 6
      },
      {
        "heading": "Panagiotis Galanis, Vice President",
        "level": 6
      },
      {
        "heading": "Silvia Soldatou, General Secretary",
        "level": 6
      },
      {
        "heading": "Ilias Katogiannis, Treasurer",
        "level": 6
      },
      {
        "heading": "Ioannis Ntitsos, Commissioner",
        "level": 6
      },
      {
        "heading": "Ioanna Kotsi, Commissioner",
        "level": 6
      },
      {
        "heading": "Maria Antoniou, Commissioner",
        "level": 6
      }
    ],
    el: [
      {
        "heading": "Οργανωτική Επιτροπή:",
        "level": 4
      },
      {
        "heading": "Κοσμάς Κορωναίος, Πρόεδρος",
        "level": 6
      },
      {
        "heading": "Παναγιώτης Γαλάνης, Αντιπρόεδρος",
        "level": 6
      },
      {
        "heading": "Σίλβια Σολδάτου, Γενική Γραμματέας",
        "level": 6
      },
      {
        "heading": "Ηλίας Κατωγιάννης, Ταμίας",
        "level": 6
      },
      {
        "heading": "Ιωάννης Ντίτσος, Επίτροπος",
        "level": 6
      },
      {
        "heading": "Ιωάννα Κώτση, Επίτροπος",
        "level": 6
      },
      {
        "heading": "Μαρία Αντωνίου, Επίτροπος",
        "level": 6
      }
    ],
  },
};

export default festivalSchema.parse(data);
