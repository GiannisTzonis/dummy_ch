import { festivalSchema, type FestivalInput } from "../types";
import { person } from "../people";

const data: FestivalInput = {
  slug: "2025",
  year: 2025,
  editionNumber: 43,
  isCurrentEdition: false,
  // Listing/meta only -- the page itself shows the dates as printed in `content`.
  dates: {
    en: "10–13 July 2025",
    el: "10–13 Ιουλίου 2025",
  },
  poster: "/img/2025logo2.webp",
  title: {
    en: "43rd International Choral Festival of Preveza",
    el: "43ο Διεθνές Χορωδιακό Φεστιβάλ Πρέβεζας",
  },
  intro: { en: [], el: [] },
  content: {
    en: [
      {
        "list": [
          "10 - 13 July 2025"
        ]
      },
      {
        "img": "/img/2025logo2.webp"
      },
      "Mark your calendar for 2025 to be part of the 43rd International Choral Festival of Preveza. The main festival will be held from 10 to 13 July 2025 in Preveza.",
      "The International Choral Festival of Preveza counts 43 interesting and exciting years of high-quality choral music, challenged by excellent choirs which are continuously raising its standards and a great variety of intercultural experiences with participants from all over the world. The festival includes numerous concerts given at idyllic locations of the area like the seaside fortress of Preveza and the historic Ancient Auditorium of Nikopolis “Odeon”. For visiting choirs, Preveza provides an opportunity not only to perform; but also, to experience some of the world’s best choral music, soak up the atmosphere and enjoy the mingling, singing and fun, and explore the picturesque city of Preveza and its surrounds. The festival will be managed by the Choral Society \"Armonia\" of Preveza, under the patronage of the city of Preveza. Choirs are eligible to join the festival as non-competitive choirs participating in all the performances of the festival.",
      "It will be a great honour and joy for us if you come to our beautiful town and take part in the choral competition. We invite you to find out by yourselves that Preveza is a charming and hospitable town full of historical sites and locations of natural beauty and experience the magic of choral music.\n\nClosing date for receipt of completed applications is 1 May 2025.",
      {
        "wide": true
      },
      {
        "heading": "International Jury Committee I.J.C.",
        "level": 2,
        "align": "center"
      },
      ...person("ambroz-copi", "en", {level: 3}),
      ...person("angeliki-ploka", "en", {level: 3,align: "right"}),
      {
        "heading": "Camilo Santostefano",
        "level": 3
      },
      {
        "img": "/img/camilosantostefano.webp",
        "layout": "side"
      },
      "Camilo Santostefano is a distinguished Argentinian conductor of choirs and orchestras, composer, professor, and international jury member. He holds a Bachelor’s degree in Choir Conducting from the National University of the Arts in Buenos Aires, as well as degrees in Music Education and Guitar from the Conservatory of Morón. He pursued postgraduate studies in 20th-century Latin American Music Interpretation at UNCUYO University. In recognition of his influence on Argentine music, he received the 2019 Konex Award for Choral Conducting. Camilo is currently the conductor of the Coro Polifónico de Córdoba, the professional choir of the Teatro del Libertador San Martín in Córdoba. He is also the founder and conductor of MusicaQuantica Voces de Cámara, a renowned ensemble awarded internationally, including Grand Prix at Ave Verum (Austria, 2012) and Florilège Vocal de Tours (France, 2012), and finalist at the European Grand Prix (Italy, 2013). He has appeared as guest conductor for ensembles in Wales, Colombia, the USA, and Austria, and previously conducted the Carlos López Buchardo Choir, Lírica Lado B Opera Company, and the National School of Buenos Aires Choir. Between 2019 and 2022, he resided in Austria, leading groups such as the Gumpoldskirchner Spatzen, Melange Vocal Wien, and others. As a composer, he has won national and international prizes, including at the OperaVista Chamber Opera Composition Competition in Houston. He regularly presents masterclasses and conferences across the Americas and Europe. Camilo serves on juries for major international competitions, such as the IFCM-affiliated events in France, Croatia, and the Bahamas. He is a passionate promoter of Latin American choral music and a respected educator, having taught at the Conservatorio Astor Piazzolla in Buenos Aires. His work bridges continents, styles, and generations through music.",
      {
        "heading": "Dr. Yu-Chung Johnny Ku",
        "level": 3,
        "align": "right"
      },
      "Dr. Yu-Chung Johnny Ku is one of Taiwan’s most influential choral conductors and educators. He currently serves as Music Director of the Taipei Philharmonic Chorus and the Taipei Philharmonic Chamber Choir, as well as the Taipei International Choral Festival and Competition. He is also conductor of the Dream Lotus Chorus, an executive board member of the Taiwan Choral Association, and Assistant Professor at both the National Taiwan University of Arts and Fu-Jen Catholic University. Additionally, he is a member of the World Choral Council, the Asia-Pacific Working Committee of the International Federation for Choral Music (IFCM), a co-founder of the World Choral Championship, and a founding director of the Asian Choral Association. Dr. Ku is an active and versatile conductor, working not only with choirs but also with orchestras, operas, musical theatre, and pop concerts. He has presented concerts, workshops, lectures, and masterclasses in more than 20 countries, including Australia, Austria, Bulgaria, Canada, China, the Czech Republic, Hungary, Indonesia, Italy, Japan, Korea, Malaysia, the Philippines, Poland, Russia, Singapore, Türkiye, and the USA. With the Taipei Philharmonic Chamber Choir, he has been invited to perform at prominent international events such as the ACDA National Convention, BAM’s Next Wave Festival, the Melbourne Festival, and the 2023 World Symposium on Choral Music in Turkey. As Chorus Master, Dr. Ku has collaborated on more than 50 opera and choral-symphonic productions with the National Symphony Orchestra, National Taiwan Symphony Orchestra, and the National Kaohsiung Center for the Arts, working with conductors like Frieder Bernius, Charles Dutoit, Helmuth Rilling, and others. He is a frequent juror in international competitions such as the World Choir Games, Bali International Choir Competition, Singapore International Choral Competition, and many more. Dr. Ku holds a D.M.A. from the University of Cincinnati and a master’s degree from Temple University.",
      {
        "img": "/img/Yu-ChungJohnnyKu.webp",
        "layout": "side"
      },
      ...person("eduardo-garcia-novelli", "en", {level: 3}),
      ...person("josu-elberdin-badiola", "en", {level: 3,align: "right"}),
      ...person("pawel-lukaszewski", "en", {level: 3}),
      {
        "heading": "Roni Sugiarto",
        "level": 3,
        "align": "right"
      },
      "Roni Sugiarto is one of Indonesia’s foremost choral conductors, renowned for his work with children’s and youth choirs. As Music Director of the Saint Angela Choir (SAC), he has led the ensemble to national and international acclaim. Under his baton, SAC has achieved remarkable success, winning prestigious awards in Hangzhou, Rome, Florence, South Korea, Tokyo, Rimini, and Tolosa. Most notably, SAC won both the Children’s Choir Category and the Grand Prix at the 5th Tokyo International Choir Competition, and in 2024, earned the title of World Choral Champion in Rimini, Italy, along with the Grand Prix at the 4th International Bandung Choir Festival. Roni’s musical foundation was shaped by mentorship from Joseph Kristanto and Avip Priatna. In 2009–2010, he was awarded a scholarship from the German Government (Goethe-Institut) to participate in the Conducting Workshop for Orchestra in Bangkok under the direction of Maestro Gudni A. Emilsson. His international experience includes performing with the Indonesia National Youth Choir (2005) and the World Youth Choir, touring Milan (2006), South Africa (2007), and Hong Kong–Guangzhou–Macau (2008). Dedicated to professional growth, Roni has participated in masterclasses with esteemed conductors such as Mark Anthony Carpio, Jonathan Velasco, Julie Spittill, Marcus LaPratt, William Lock, and André de Quadros. Currently, he serves as Music Director of the ITB Student Choir and the Saint Angela Choir, and as Artistic Director of both the Saint Angela Children and Youth Choir Festival and the Satya Dharma Gita International Choir Festival. In addition to his conducting and artistic leadership, Roni is an experienced adjudicator in choir competitions and regularly presents workshops and training programs for choirs and young conductors throughout Indonesia and abroad.",
      {
        "img": "/img/Roni Sugiarto.webp",
        "layout": "side"
      },
      {
        "heading": "Yana Deliradeva",
        "level": 3
      },
      {
        "img": "/img/Yana Deliradeva (2).webp",
        "layout": "side"
      },
      "Yana Deliradeva is a distinguished Bulgarian choral conductor, widely recognized for her innovative work with children’s choirs and her dedication to music education. She studied choral conducting in both Bulgaria and the United States, earning her master’s degree at Westminster Choir College in Princeton under the mentorship of Prof. Joseph Flummerfelt. Upon returning to Bulgaria in 2002, Yana joined the renowned Detska Kitka Choir in Plovdiv as Assistant Conductor. Since 2011, she has served as the choir’s Chief Conductor, leading over 120 singers from more than 30 schools in the city. Under her direction, the choir continues its legacy of artistic excellence while embracing a contemporary and inclusive approach to repertoire and performance. Her vision includes audience development through interdisciplinary collaborations and the promotion of new music. Beyond her choral leadership, Yana Deliradeva is active in academic and pedagogical circles. She is Assistant Professor of Choral Conducting at the Academy of Music, Dance and Fine Arts in Plovdiv and works as a vocal coach for the Kids’ Academy of the Plovdiv State Opera. A passionate educator, she supports the professional development of young conductors and promotes modern, holistic rehearsal practices. Yana has led conducting workshops in the United States, Sweden, and Bulgaria, and is the recipient of several prestigious awards in recognition of her artistic achievements and contributions to the choral field. Currently, she is pursuing a doctoral dissertation titled “Implementation of Body Methods in the Rehearsal Process with Children Choirs”, reflecting her commitment to integrating movement and physical awareness into choral pedagogy. Through her work, Yana Deliradeva continues to shape the future of Bulgarian choral music and inspire the next generation of musicians and conductors.",
      {
        "heading": "Participating Choirs",
        "level": 1
      },
      {
        "heading": "Cantigas Women's Choir",
        "level": 2
      },
      "New Jersey, USA",
      {
        "img": "/img/Cantigas.webp"
      },
      "Conductor: Dr. Hannah Carr",
      "\"Cantigas\" Women’s Choir is a non-profit organization based in Hudson County, New Jersey, comprised of women from diverse backgrounds who share a love for singing. Founded in 2002, Cantigas presents two major concerts annually, along with community outreach performances in support of refugees, senior centers, and women’s prisons. The choir’s repertoire features contemporary and often lesser-known composers such as Leonardo San Juan, Paul Hennessee, Lillian Redl, and Wassim Ibrahim, whose “Damascus Breeze” premiered with “Cantigas” in 2015. In 2023, Cantigas traveled to Ireland to sing the world premiere of “Eternal Rebel” by Seán Doherty, based on poetry by Eva Gore-Booth. In 2016, the choir performed in Buenos Aires with sister choirs Coral Femenino de Caballito and Coral San Cirano. “Cantigas” programs often center around hidden voices, including unpublished folk songs. To ensure authenticity and cultural depth, the choir collaborates with cultural informants and guest instrumentalists, enriching both performances and workshops. Their approach has been featured at ACDA and Kodály conferences. Greek Canadian pianist Erasmia Voukelatos has accompanied the choir since its founding and teaches at Far Brook School. Dr. Hannah Carr, Artistic Director since 2018, is also Director of Choral Activities at William Paterson University.",
      "🎤 Premieres in Ireland, Argentina & USA",
      "🌍 Collaborations with cultural consultants & traditional musicians",
      "🎹 Accompanist: Erasmia Voukelatos",
      "🇺🇸 United States of America",
      {
        "heading": "“Arietta” Equal Voices' Choir",
        "level": 2
      },
      "Nea Ionia, Attica, Greece",
      {
        "img": "/img/Arietta.webp"
      },
      "Conductor: Athena Gratsouna",
      "The “Arietta” Choir was founded in 2023 as the continuation of the children and youth choir of “En Organis” Conservatory, based in Nea Ionia, Athens. Formed by both long-time and new members, it focuses on challenging repertoire for upper voices, from classical to contemporary choral music. In a short time, the choir has received important distinctions such as the Golden Prize at the 10th ARTIVA Competition (Nafplio, 2024) and the Bronze Medal at the “Mikis Theodorakis” Festival (Nafpaktos, 2023). “Arietta” has performed in festivals and concerts across Greece, including the Parnas\u0002sos Literary Society and municipal events of Nea Ionia. Athena Gratsouna, conductor of “Arietta”, is a violinist, choir conductor, and music educator. She holds a Violin Diploma with distinction, a bachelor’s and a master’s degree in music from the National and Kapodistrian University of Athens under Giorgos Demertzis. Since 2012, she has been actively involved in choral conducting, and since 2023, she leads “Arietta” and the children’s choir “Ariettina” (from 2024).",
      "🏆 Gold Medal (90.3) at ARTIVA Competition (Nafplio 2024)",
      "🏆 Bronze at M. Theodorakis Festival (Nafpaktos 2023)",
      "🎤 Focus on demanding classical and contemporary repertoire for women's voices",
      "🌍 Participations in festivals and cultural events within and outside Attica",
      "🇬🇷 Greece",
      {
        "heading": "Moraitis School Community Choir",
        "level": 2
      },
      "Psychiko, Athens, Greece",
      {
        "img": "/img/Moraiti.webp"
      },
      "Conductor: Vagia Papagiannopoulou",
      "The Moraitis School Adult Choir was founded in January 2019 by conductor Vagia Papagiannopoulou and consists of 42 members. It is a community choir that promotes musical expression and social connection through choral singing, with no requirement for prior musical training. The choir has performed in concerts and festivals in Athens, Nafplio, Thessaloniki, Volos, and Agrinio. Vagia Papagiannopoulou, the conductor, holds a degree in Choral Conducting from the Ionian University and a master’s from the University of York. She is active both as an educator and a choral conductor in Greece.",
      "🎤 Promotes musical expression and social connection through choral singing",
      "🎭 Participations in festivals and concerts in Athens, Nafplio, Thessaloniki, Volos and Agrinio",
      "🎓 Conductor is a graduate of Ionian University and University of York",
      "🇬🇷 Greece",
      {
        "heading": "Vírilis Male Vocal Ensemble",
        "level": 2
      },
      "Preserje, Slovenia",
      {
        "img": "/img/Virilis.webp"
      },
      "Conductor: Collective artistic guidance",
      "Vírilis Vocal Ensemble is a Slovenian male vocal group specializing in Slovene folk and national songs, performed with artistic excellence. Officially active since 2022, the ensemble’s members have been singing together for several years. Their repertoire focuses mainly on Slovenian folk and art songs, with occasional ventures into international vocal music. In 2023 and 2024, they held two Christmas concerts, made two guest appearances on national TV (V petek zvečer), and participated in several charity events across nearby towns. A highlight was their heritage concert in New York City in 2023, performed for Slovenian emigrants and their descendants at St. Cyril’s Parish. They have collaborated with the Cantabile Symphony Orchestra, as well as various soloists and instrumentalists. The ensemble’s members are Nino Koritnik (first tenor), Tomaž Švigelj and Peter Grdadolnik (second tenors), Jan Jerman (baritone and ensemble president), and Blaž Stanjko (bass).",
      "🎼 Repertoire focusing on traditional and art Slovenian songs, and selected international works",
      "📺 Appearances on Slovenian national television and charity events",
      "🌍 Concert in New York for the Slovenian diaspora (2023)",
      "🎻 Collaboration with Cantabile Symphony Orchestra and distinguished musicians",
      "🇸🇮 Slovenia",
      {
        "heading": "Nereides Women's Choir",
        "level": 2
      },
      "Palaio Faliro Municipality, Greece",
      {
        "img": "/img/Niriides.webp"
      },
      "Conductor: Katerina Vasilikou",
      "The “Nereides” Women’s Choir of the Municipality of Palaio Faliro was founded in October 2013, after auditions, and has since been conducted by Katerina Vasilikou. The choir has won a Gold Diploma at the 2nd Interkultur International Choir Competition in Kalamata (2017) and a Silver Medal at the 10th “Marile\u0002na” Artiva International Choir Festival in Nafplio (2024). Notable performances include appearances at the Odeon of Herodes Atticus, in concerts organized by the Hellenic Red Cross, promoting peace, solidarity, and environmental awareness (2023, 2024). The choir has also participated in festivals in Kifisia, Nafplio, Tripoli, Nea Makri, and Loutraki, as well as concerts in Athens and Thessaloniki. It actively supports the cultural initiatives of the Municipality of Palaio Faliro and hosts choirs from all over Greece. Katerina Vasilikou is a music educator with studies in piano and classical voice, and extensive experience in leading children’s, youth, and women’s choirs. She teaches music at Leonteios School of Nea Smyrni and has collaborated with major Greek musical institutions",
      "🏆 Gold Diploma (Kalamata 2017)",
      "🏆 Silver Medal (Nafplio 2024) in international competitions",
      "🎤 Participations in major productions, such as at Herodion for Peace & Climate Change",
      "🎄 Performances at festivals and cultural events throughout Greece",
      "🎼 Rich repertoire with works by Greek and foreign composers",
      "🇬🇷 Greece",
      {
        "heading": "City Chamber Choir ASTIBO",
        "level": 2
      },
      "Shtip, North Macedonia",
      {
        "img": "/img/Astibo.webp"
      },
      "Conductor: Ivana Djurdjevic-Jankov",
      "Founded in 2009, the choir has been known as City Chamber Choir ASTIBO since 2023. This mixed ensemble of 25 members performs a diverse reper\u0002toire, combining traditional and contemporary works, with performances that often feature choreographic elements and audience interaction. The choir’s intergenerational makeup, with a 50-year age range among members, creates a unique blend of youthful energy and artistic maturity. ASTIBO has participated in numerous international festivals and received awards such as:",
      {
        "list": [
          "Silver Medal at the Majske Muzicke Svecanosti Festival (Bijeljina, Bosnia 2024)",
          "Grand Prix at the “Sing My Heart” Festival (Kyustendil, Bulgaria 2019)",
          "First Prize at the 22nd Folklore Festival (Kostandovo, Bulgaria 2017)"
        ]
      },
      "The choir is also the founder and organizer of the ASTIBO-FEST International Festival (2017–2024). Ivana Djurdjevic-Jankov is an associate professor at Goce Delchev University, with a degree in choral conducting from Belgrade and a master’s in music analysis. Since 2014, she has served as ASTIBO’s conductor, working with numerous choirs across Serbia and North Macedonia.",
      "🌍 Participations in festivals in Poland, Serbia, Bulgaria, Montenegro, Albania & North Macedonia",
      "🏆 International distinctions, including Grand Prix in Kyustendil & Silver Medal in Bijeljina",
      "🎵 Founders of ASTIBO-FEST - International Festival of Mixed Choirs and Vocal Ensembles",
      "🇲🇰 North Macedonia",
      {
        "heading": "SOLARTE Mixed Youth Choir",
        "level": 2
      },
      "Contemporary Conservatory of Larissa, Greece",
      {
        "img": "/img/Solarte.webp"
      },
      "Conductor: Nikos St. Efthimiadis",
      "The Mixed Youth Choir “SOLARTE” of the Contemporary Conservatory of Larissa was founded in 2004 by G. Grampsas. It is a versatile choral ensemble with an extensive artistic presence both in Greece and abroad. Its repertoire ranges from Medieval and Renaissance music to contemporary works. The choir has participated in festivals, concerts, and cultural events across cities like Athens, Thessaloniki, Volos, Delphi, and Piraeus, and has performed at venues such as the Thessaloniki Concert Hall and the Ancient Theatre of Delphi. Internationally, it has collaborated with orchestras and conductors in Austria, Italy, Hungary, and Serbia, appearing on television and contributing to CD recordings. It has performed with renowned artists such as George Dalaras and Kostas Hatzis and collaborated with major orchestras including ERT3 and the Aristotle University Symphony Orchestra. The ensemble is conducted by Nikos St. Efthimiadis.",
      "🌍 Participations and collaborations in Greece, Austria, Italy, Hungary & Serbia",
      "🎭 Concerts in venues such as the Thessaloniki Concert Hall & Ancient Theatre of Delphi",
      "🎤 Collaborations with artists such as George Dalaras and Kostas Hatzis",
      "🇬🇷 Greece",
      {
        "heading": "Mik'ados Choir",
        "level": 2
      },
      "Lyon, France",
      {
        "img": "/img/Mikados.webp"
      },
      "Conductor: Sibylle Chassaigne",
      "The Mik'ados Choir is part of the La Chanterie de Lyon association and brings together around seventy young singers aged 12 to 18 from all over Lyon. It serves as a continuation for children who have previously sung in regional “chanteries” (ages 8–12) and wish to pursue choral singing further. The choir regularly participates in shared concerts with other ensembles of the association and has performed in major events such as the Choralies de Vaison-la-Romaine. Since 2015, Mik'ados has taken part in international exchanges and festivals in Turkey, Spain, Estonia, Austria, and others. In 2022, they won 3rd prize at the Concours International de Provence. Founded and directed by Sibylle Chassaigne, a dynamic music and choral singing professor, the choir promotes inclusivity and prioritizes the joy of singing over selection criteria. Sibylle also performs with The Women’s Choir vocal ensemble and continues to inspire young voices with passion and dedication",
      "🌍 Participations in festivals and exchanges in Turkey, Spain, Estonia & Austria",
      "🏆 3rd prize in the International Competition of Provence (2022)",
      "🎤 Emphasis on the joy of singing and participation without restrictions",
      "🇫🇷 France",
      {
        "heading": "Women’s Choir “Armonistes”",
        "level": 2
      },
      "Delta Municipality, Greece",
      {
        "img": "/img/Armonistes.webp"
      },
      "Conductor: Christos Avramoglou",
      "The “Armonistes” Women’s Choir of the Delta Municipality was founded in 2023 as an initiative of the Women’s Association of Delta Municipality. The choir brings together women of all ages, local musicians and dancers, forming a vibrant ensemble focused on Greek repertoire. Through close collaboration with the Sindos Conservatory “Alexandros”, the choir develops its musical and expressive quality. Its artistic team in\u0002cludes Katerina Makri (vocal coach), Elena Triantafyllou (flute), Dimitris Ioannidis (trumpet), Amalia Kaltsidou (accordion), Foteini Kaltsidou (piano), and conductor Christos Avramoglou. Christos Avramoglou, born in Thessaloniki, holds diplomas in piano, harmony, counterpoint, fugue, and vocal music, and completed the first year of composition in 2024. Since 2002, he has been teaching at the Sindos Conservatory, directing its orchestra and choir, and organizing seminars and events such as the G.A Festival. As a pianist, percussionist, arranger, and composer, he has appeared in numerous festivals and venues in Greece and abroad and has composed for documentaries at the Thessaloniki Festival.",
      "🤝 Inspired by the Delta Municipality Women's Association",
      "🎤 Greek repertoire with accompaniment by musicians and dancers",
      "🎹 In collaboration with the Sindos Conservatory \"Alexandros\"",
      "🇬🇷 Greece",
      {
        "heading": "PRO ARTE Chamber Choir",
        "level": 2
      },
      "Inowrocław, Poland",
      {
        "img": "/img/Proarte.webp"
      },
      "Conductors: Grażyna Wolter-Kaźmierczak & Monika Wilkiewicz",
      "The PRO ARTE Chamber Choir was founded in 2000, inspired by the Bach Year celebrations. Since 2015, it has been led by Professor Monika Wilkiewicz and Dr. Grażyna Wolter-Kaźmierczak, both respected choral conductors and educators at the Academy of Music in Bydgoszcz. The choir has performed extensively in Poland and abroad, earning recognition at numerous festivals and competitions. Notable recent achievements include:",
      {
        "list": [
          "Two Gold Diplomas at the Chorus Inside Croatia competition (2023)",
          "Second Prize at the International Choir Competition in Provence, France (2024)",
          "Gold Diploma at Chorus Inside Poland in Warsaw"
        ]
      },
      "Their repertoire features a cappella, sacred, folk, and patriotic music, along with works by contemporary composers. PRO ARTE has premiered compositions by Aleksandra Brejza, Marcin Kopczyński, and others. Through its artistic activity, the choir actively supports and promotes choral music within the region and beyond.",
      "🏆 Gold Diplomas in Croatia and Poland, Second Prize in France",
      "🎶 Polyphony, tradition and contemporary creation",
      "🌍 International presence based in the heart of Poland",
      "🇵🇱 Poland",
      {
        "heading": "Cantus Atenas Choir",
        "level": 2
      },
      "Stamáta Attikís, Greece",
      {
        "img": "/img/CantusAntenas.webp"
      },
      "Conductor: Dimitra Chanou",
      "The Cantus Atenas Choirs, directed by Dimitra Chanou, have been active since 2010, recently adopting their new name. They have participated in numerous charity events, tributes, and major choral concerts, as well as renowned international festivals, including the Preveza International Choral Festival, the World Choir Festival “Korais” in Thessaloniki, Artiva Nafplio, and the Antonio Vivaldi Festival in Karpenisi. Their performances have taken place in some of Greece’s most prestigious venues, such as the Veakeio Theater, the Panathenaic Stadium, the Herodion Theater, and the Athens Concert Hall (Megaron). Among their accolades are: a Silver Prize (Jazz-Pop category) at the Karpenisi Festival, three Silver Awards at Artiva Nafplio, Silver and Bronze Prizes at the Korais Musical Festival, and a Bronze Award for their free program at the Preveza Festival. With a diverse repertoire and inspired leadership, Cantus Atenas combines musical excellence, choral harmony, and cultural outreach, standing out as a distinctive presence in Greece’s contemporary choral scene.",
      "🌟 Multiple distinctions at festivals throughout Greece",
      "🎶 Polyphony, quality and cultural extroversion",
      "🎤 Participations in international festivals and charitable actions",
      "🇬🇷 Greece",
      {
        "heading": "Coro de Tibães",
        "level": 2
      },
      "Braga, Portugal",
      {
        "img": "/img/Tibaes.webp"
      },
      "Conductor: Alexandre Silva",
      "The Coro de Tibães was founded in the community of Mire de Tibães, in Braga, Portugal, and is based at the historic Monastery of São Martinho de Tibães, one of the country’s most significant monastic sites. The choir was established with the mission of promoting the spiritual, cultural, and musical heritage of the region through choral music. Its repertoire ranges from early sacred music to contemporary works, with a strong focus on Portuguese polyphonic traditions. The ensemble is made up of both amateur and professional singers who share a deep passion for music and a commitment to community service. Over the years, the choir has participated in numerous events throughout Portugal and abroad, performing in festivals, concerts, and liturgical services, often within the majestic setting of the Tibães Monastery itself. In 2025, it was selected to represent Portugal at the 43rd International Choral Festival of Preveza, proudly bringing the spirit of Braga’s musical tradition to Greece.",
      "🎵 Specialization: Portuguese polyphony, repertoire from early to contemporary music",
      "👥 Members: Amateurs & professionals",
      "🌍 Participations: Festivals & concerts in Portugal & abroad",
      "🇬🇷 In 2025, representing Portugal at the 43rd Preveza Choir Festival!",
      "🇵🇹 Portugal",
      {
        "heading": "“Fermata” Chamber Choir",
        "level": 2
      },
      "Izmir, Turkey",
      {
        "img": "/img/Fermata.webp"
      },
      "Conductor: Hasan Can İşgüden",
      "Founded in December 2019 in Izmir by Hasan Can İşgüden, the “Fermata” Chamber Choir consists of 25 experienced singers from various polyphonic choirs. Their repertoire ranges from Renaissance works to contemporary pieces, including music by Turkish composers and songs in multiple languages. After resuming post-pandemic activities, the choir performed in events like World Choral Music Day, the Izmir International Polyphonic Choirs Festival, and others. They introduced innovative thematic projects such as BİR (2022) and DÖNGÜ (2024), merging choral music with installation art to create immersive experiences. \"Fermata\" has been recognized with awards including “Musicality and Dynamics” (2022), “Intonation and Choral Tone” (2023), and “Outstanding Interpre\u0002tation of a Contemporary Work.” In 2023, they took part in the World Choral Music Symposium in Turkey, organized by the Ministry of Culture and IFCM. Hasan Can İşgüden is a trained opera singer, vocal instructor, and choir conductor at Dokuz Eylül University and Yaşar University. He has been a mem\u0002ber of the International Federation for Choral Music (IFCM) since 2023",
      "🗓️ Founded: December 2019, Izmir — by Hasan Can İşgüden",
      "👥 Ensemble: 25 experienced singers from polyphonic choirs",
      "🎼 Repertoire: Renaissance → contemporary; Turkish composers; multilingual",
      "🎨 Projects: BİR (2022) & DÖNGÜ (2024) — choral + installation art",
      "🌍 Appearances: World Choral Music Day; Izmir Int’l Polyphonic Choirs Festival; 2023 World Choral Music Symposium (TR)",
      "🏆 Awards: “Musicality & Dynamics” (2022); “Intonation & Choral Tone” (2023); “Outstanding Interpretation of a Contemporary Work”",
      "🎓 Artistic lead: Opera singer & vocal instructor at Dokuz Eylül & Yaşar Univ.; IFCM member since 2023",
      "🇹🇷 Turkey",
      {
        "heading": "Children's Choir “Lastivka”",
        "level": 2
      },
      "Kyiv, Ukraine",
      {
        "img": "/img/Lativka.webp"
      },
      "Conductor: Oksana Ursatii",
      "The “Lastivka” (Swallow) Children's Choir was founded in 2005 by Oksana Ursatii at the House of Children and Youth Creativity of Holosiivski District, Kyiv. Functioning as a choral studio, it includes three groups: preparatory (ages 4–5), junior (6–10), and senior concert choir (10–18). The ensemble brings together over 50 children and four educators. “Lastivka” has earned top honors at numerous international competitions across Poland, Germany, France, Hungary, Estonia, Romania, Belgium, and Greece, receiving gold medals, first prizes, and Grand Prix awards. A highlight was the UNICEF choral project in Dresden (2014) and their success at the Preveza International Festival, where the conductor was honored for outstanding pedagogical work. In 2011, the choir was awarded the title “Exemplary Artistic Collective”, and in 2021, the distinction of “National Art Collective”. Their repertoire spans from sacred and secular music to modern Ukrainian choral works and traditional folklore.",
      "🗓️ Founded in 2005 in Kyiv by Oksana Ursatii",
      "👶 Over 50 children across 3 groups: preparatory, junior & senior",
      "🏆 Gold medals, first prizes & Grand Prix at international competitions",
      "🎖️ Honors: “Exemplary Artistic Collective” (2011) & “National Art Collective” (2021)",
      "🇺🇦 Ukraine",
      {
        "heading": "Mixed Choir of Parga",
        "level": 2
      },
      "Parga, Greece",
      {
        "img": "/img/PargaChoir.webp"
      },
      "Conductor: Valentin Stefanov",
      "The Mixed Choir of Parga was founded in February 2016 by a small group of local music enthusiasts. Its repertoire includes classical and art songs by Greek and international composers. The choir actively contributes to the cultural development of the Parga region, promoting choral music and attracting new members. Each year, the choir organizes public concerts, sharing its artistic work with audiences. Notable participations include two charity concerts with the Youth Symphony Orchestra of Greece in Thessaloniki (November 2019 and March 2023). In June 2019, the choir took part in a tribute concert to “Axion Esti” by Mikis Theodorakis, with poetry by Odysseas Elytis, held at the Ancient Odeon of Nikopolis. The choir is conducted by Valentin Stefanov.",
      "🗓️ Founded in 2016 in Parga by local music enthusiasts",
      "🎼 Repertoire: Classical & art songs by Greek and international composers",
      "🌍 Highlights: Charity concerts with the Youth Symphony Orchestra of Greece & tribute to “Axion Esti” at Ancient Odeon of Nikopolis",
      "🎶 Conductor: Valentin Stefanov",
      "🇬🇷 Greece",
      {
        "heading": "BUMC Jazz Choir",
        "level": 2
      },
      "Istanbul, Turkey",
      {
        "img": "/img/Bogazici.webp"
      },
      "Conductor: Zülal Ekiz",
      "The BUMC Jazz Choir was founded in 1994 under the Boğaziçi University Music Club, with the aim of performing choral jazz arrangements and promoting polyphonic music. Since 2001, the choir has focused on a cappella jazz repertoire, becoming Turkey’s first vocal jazz ensemble of its kind. The group earned 1st prize in the Young Jazz category at the 15th Istanbul International Jazz Festival (2008) and achieved international acclaim with three Gold Diplomas at the World Choir Games – Shaoxing, China (2010). It has given numerous concerts and appeared at international festivals, as well as local cultural events. In 2024, it performed at the Benyamin Sönmez Classical Music Festival, and in 2025, it participated in the BUMC Jazz Festival. Zülal Ekiz, born in 2002, is a Psychology student at Boğaziçi University. A pianist and choral singer since childhood, she joined the BUMC Jazz Choir as an alto in 2023. In October 2024, she became the conductor and is currently studying music theory, building on her artistic background that includes work in theatre and composition.",
      "🗓️ Founded in 1994 under Boğaziçi University Music Club — Turkey’s first a cappella jazz choir",
      "🏆 Awards: 1st Prize (Istanbul Int’l Jazz Festival, 2008) & 3 Gold Diplomas (World Choir Games, China, 2010)",
      "🌍 Performances: International festivals, cultural events, Benyamin Sönmez Festival (2024), BUMC Jazz Festival (2025)",
      "🎶 Conductor: Zülal Ekiz (since 2024) — pianist, singer & composer",
      "🇹🇷 Turkey",
      {
        "heading": "“Trimontium” Female Choir",
        "level": 2
      },
      "Plovdiv, Bulgaria",
      {
        "img": "/img/Trimortium.webp"
      },
      "Conductor: Vanya Atanasova",
      "Founded in 1965 in Plovdiv, the “Trimontium” Female Choir has had a strong presence in Bulgaria’s cultural scene for decades. The choir has participated in numerous festivals and competitions across Europe, earning international acclaim. Its repertoire spans Bulgarian and foreign composers, with a focus on folk, Orthodox, and modern choral music. Notable performances include Vival\u0002di’s “Gloria” and Verdi’s “Nabucco” with the Plovdiv Opera, and Mendelssohn’s “A Midsummer Night’s Dream” with the Youth Symphony Orchestra of Bremen, part of Plovdiv – European Capital of Culture 2019. Awards included: Bronze Medal, Varna (1989), First Prize, Paralia Katerini (2015), Silver Medal, Preveza (2018). Since 2010, the choir has been conducted by Vanya Atanasova, a respected musician and graduate of the Academy of Arts in Plovdiv. She has led the choir to many artistic successes and has been honored by the Municipality of Plovdiv and the Bulgarian Ministry of Education.",
      "🗓️ Founded in 1965 in Plovdiv — a long-standing presence in Bulgaria’s cultural scene",
      "🎼 Repertoire: Bulgarian & international works — folk, Orthodox, and modern choral music",
      "🏆 Awards: Bronze (Varna 1989), 1st Prize (Paralia Katerini 2015), Silver (Preveza 2018)",
      "🎶 Conductor: Vanya Atanasova (since 2010) — honored by Municipality of Plovdiv & Ministry of Education",
      "🇧🇬 Bulgaria",
      {
        "heading": "Coro Gagarin of Saint Louis College of Music",
        "level": 2
      },
      "Rome, Italy",
      {
        "img": "/img/gagarin.webp"
      },
      "Conductor: Jacopo Tarchi",
      "Coro Gagarin was founded in January 2024 by Jacopo Tarchi at the Saint Louis College of Music in Rome, as part of his personal research into Italian folk traditions. The ensemble represents a musical bridge between past and present, bringing new life to traditional Italian songs through both authentic performances and original choral arrangements. Their repertoire celebrates the diversity of Italy’s regional music, preserving its integrity while exploring creative vocal interpretations. By doing so, Coro Gagarin aspires to shed light on lesser-known facets of Italian cultural identity. Jacopo Tarchi, a student conductor and arranger, also sings bass in the professional choir Flowing Chords. With a deep appreciation for harmony and a passion for folk music, he leads the group with sensitivity and innovation, offering audiences a unique and vibrant musical experience.",
      "🗓️ Founded in 2024 in Rome by Jacopo Tarchi at Saint Louis College of Music",
      "🎼 Repertoire: Traditional Italian folk songs & original choral arrangements",
      "🌍 Mission: Bridging past & present — preserving regional music while exploring creative vocal interpretations",
      "🎶 Conductor: Jacopo Tarchi — bass singer in Flowing Chords, arranger & student conductor",
      "🇮🇹 Italy",
      {
        "heading": "Shiran Choir, Ramat Hasharon",
        "level": 2
      },
      {
        "img": "/img/Shiran.webp"
      },
      "Conductor: Doron Ben-Ami",
      "The Shiran Choir was established in 1979 by the late composer and conductor Yaacov Hollander and performed under his leadership until 1997. To\u0002day, the choir includes 40 members, several of whom have sung with the ensemble since its inception. It was later led by Doron Shenkar (1997–2002) and Dudi Zeba (2002–2021), and since 2021 the conductor has been Doron Ben-Ami. Shiran’s repertoire focuses primarily on Israeli music, and the choir performs regularly at concerts, cultural events, and on television and radio. It has collaborated with the Israel Philharmonic Orchestra and the Ra’anana Symphonette, and toured extensively across Germany, Italy, Portugal, Czech Republic, Hungary, Poland, Russia, Ireland, Greece, Latvia, and Spain. Awards include a Gold Medal in Germany, and Silver Medals in Israel, Riga (2017), and Kalamata (2019). Doron Ben-Ami is a singer, conductor, and historian. He has directed several vocal ensembles in Israel and is the founder of the acclaimed a cappella group One and a Half Quintets, balancing musical performance with academic work in Middle Eastern studies.",
      "🗓️ Founded in 1979 by Yaacov Hollander — currently 40 members",
      "🌍 International tours: Germany, Italy, Portugal, Czech Republic, Hungary, Poland, Russia, Ireland, Greece, Latvia & Spain",
      "🎼 Repertoire: Primarily Israeli music, performed in concerts, cultural events, TV & radio",
      "🏆 Awards: Gold Medal (Germany); Silver Medals (Israel, Riga 2017, Kalamata 2019)",
      "🇮🇱 Israel",
      "ΣΥΝΔΙΟΡΓΑΝΩΣΗ",
      "CO-ORGANISERS",
      {
        "img": "/img/logo_dimosprevezas.webp"
      },
      "Municipality of Preveza",
      {
        "img": "/img/perifereiaipeirou.webp"
      },
      "Regional Unit of Preveza",
      "ΜΕ ΤΗΝ ΥΠΟΣΤΗΡΙΞΗ",
      "SUPPORTED BY",
      {
        "img": "/img/parga_logo.webp"
      },
      "Municipality of Parga",
      "ΜΕ ΤΗ ΣΥΜΠΑΡΑΣΤΑΣΗ",
      "WITH THE ASSISTANCE",
      {
        "img": "/img/logo-politismou.webp"
      },
      "Antiquities Authority of Preveza",
      {
        "img": "/img/ieramitropoli.webp"
      },
      "Holy Metropolis of Nicopolis",
      "ΜΕ ΤΗΝ ΑΡΩΓΗ",
      "WITH THE AID",
      {
        "img": "/img/istoriko.webp"
      },
      "Historic Center of Preveza",
      {
        "img": "/img/mousikosxoleio.webp"
      },
      "Music School of Preveza",
      {
        "img": "/img/logo-politismou.webp"
      },
      "Cultural Center of Preveza",
      {
        "img": "/img/commandos.webp"
      },
      "Hellenic Rescue Commandos",
      {
        "heading": "29 th International Choral Competition",
        "level": 2,
        "align": "center"
      },
      "Document with the Competition Rules & Terms of Participation",
      {
        "p": "[Download ↓](/img/29th%20International%20Choral%20Competition%20of%20Preveza%202025%20%28ICCP%202025%29%20-%20Choral%20Competition%20rules.docx)",
        "align": "center"
      },
      {
        "heading": "2 nd International Choral Composition Competition",
        "level": 2,
        "align": "center"
      },
      "Document with the Competition Rules & Terms of Participation",
      {
        "p": "[Download ↓](/img/2nd%20Inernational%20choral%20composition%20competition%20of%20Preveza%202025.docx)",
        "align": "center"
      },
      {
        "heading": "2 nd International Choral Conducting Competition",
        "level": 2,
        "align": "center"
      },
      "Document with the Competition Rules & Terms of Participation",
      {
        "p": "[Download ↓](/img/2nd%20INTERNATIONAL%20CHORAL%20CONDUCTING%20COMPETITION%20OF%20PREVEZA%202025.docx)",
        "align": "center"
      },
      {
        "narrow": 8
      },
      {
        "heading": "Introduction",
        "level": 3,
        "align": "center"
      },
      "The International Choral Festival of Preveza is an institution of high artistic quality, both in the Greek and in the international choral field. More than 400 choirs from all over the world have been on its stage, while great personalities have been accredited to its International Jury Committee with their presence, guaranteeing with their glory for the artistic status of the festival as well as the reliability of its procedures.",
      {
        "heading": "Participation",
        "level": 3,
        "align": "center"
      },
      "All kinds of choirs can participate in the non-competitive festivities of our festival. Working on the direction of its greater spread worldwide, we would like to inform that you will all find out an attractive destination that manages to combine both high artistic value and quality, as well as the advantages of a beautiful tour, as our region is full of archaeological sites from the Ancient Hellenic period and areas of great natural beauty, too. Besides, staying in Preveza could be an opportunity both for day trips to the surrounding area and excursions to the greater area of our precinct.",
      {
        "heading": "Organisation",
        "level": 3,
        "align": "center"
      },
      "Participating non-competitively gives choirs the opportunity to present informal performances in various locations across the city, while having the possibility to meet with other choirs, see some of Preveza’s beautiful countryside and attend all the festival’s manifestations. Non-competitive choirs are free to organize their own tourist activities while here but are asked to please keep the organizing committee informed as their itinerary comes together to ensure that no time-tabling cross over occurs. Different kinds of performances could be organised in cooperation with the participants. Opportunities to perform in different Greek cities (Lefkas, Ioannina, and Agrinio) are possible to be organised after choirs ask.",
      {
        "heading": "Timetable",
        "level": 3,
        "align": "center"
      },
      "The place and the time of the non-competitive concerts will be arranged by the Organizing Committee that will also choose which choirs will participate in each concert. Pieces of each choir's choice (with a preference for sacred or folklore works) will be performed \"a cappella\" within 10-15 minutes.",
      {
        "heading": "Application Procedure",
        "level": 3,
        "align": "center"
      },
      {
        "list": [
          "Each choir is required to forward by 1 May 2025 at the latest:",
          "A fully detailed application form (which is attached).",
          "A recent CD recording of the choir or approximately seven MP3 files sent by email.",
          "Details of repertory",
          "A short history of the choir and conductor detailing activities and achievements (English Text, 250 words).",
          "A recent photograph (suitable for publicity purposes) of the choir and the conductor.",
          "A list of the names and addresses of the choir members that do not hold EU passports."
        ],
        "align": "center"
      },
      {
        "heading": "Conditions of Participation",
        "level": 3,
        "align": "center"
      },
      {
        "list": [
          "Closing date for receipt of completed applications is 1st of May 2025.",
          "Once the appropriate material is received, it will be evaluated and the applicant choir will be informed whether they are chosen to participate or not",
          "Registration fee and participation fee (minus any bank charges incurred) will be refunded if a choir is not selected to participate in the festival.",
          "Any selected choir that withdraws from the competition is not entitled to a refund of the registration fee.",
          "It is contrary to law to perform music that has been reproduced illegally. Should a choir do so, the festival accepts no responsibility for any action taken by publishers.",
          "The Organising Committee accepts no legal responsibility whatsoever in respect of anything pertaining to a choir’s participation in the festival.",
          "The festival accepts no responsibility or liability for accommodation and meal costs incurred by the choir.",
          "The festival accepts no responsibility for any expense incurred by any choir or individual chorister participating in the festival.",
          "Participation in the festival implies acceptance of all the above rules and regulations"
        ],
        "align": "center"
      },
      {
        "heading": "Festival Registration Fee",
        "level": 3,
        "align": "center"
      },
      "The selected choirs, after the acceptance of their participation by the Organising Committee, must pay a deposit of €200.00 (not refundable) towards the registration fees. Subsequently – not after the 15th of May 2025 – you will be requested to pay €35.00 for each member of the choir, including the director, the pianist/musicians, and the escorts (the fee does not include room & board). This includes entry fees for the competition and the festival. Please deduct the deposit of €200.00 already paid from the total fee before paying the balance.",
      {
        "list": [
          "The registration fee has to be transferred to the following account:",
          "NATIONAL BANK OF GREECE",
          "Choral society “Armonia” of Preveza",
          "Account number: 448/480188-16",
          "Swift Code – Bic: ETHNGRAA",
          "IBAN: GR 7201 1044 8000 0044 8480 18816"
        ],
        "align": "center"
      },
      {
        "heading": "Travel Costs:",
        "level": 6,
        "align": "center"
      },
      "The festival does not contribute to a choir’s travel costs to and from Preveza.",
      {
        "heading": "Accommodation, Meals & Transport",
        "level": 3,
        "align": "center"
      },
      "Each choir is responsible for all matters related to the organization, booking and payment of all accommodation and meals during their stay in Preveza. A comprehensive list of specially negotiated accommodation options in varied price ranges (including hotels, guest houses and restaurants) will be provided to all choirs selected to participate in our festival. The festival is not responsible for any booking issues that may arise. Despite belonging to the Greek mainland, Preveza has an islandish character. And since it has numerous kinds of touristic facilities, it is a destination ideal for people of many different economic backgrounds.",
      {
        "heading": "A good example so as to estimate your expenses:",
        "level": 5,
        "align": "center"
      },
      "In order to calculate the costs, we inform you that a double room in a good hotel in Preveza costs around €65-70. So, calculate the cost per person around €30-35 per night, i.e., for 4 nights around €120-140 per person. (Breakfast included). For 2 full meals (lunch – dinner) calculate 25 – 30€ per person richly, so for 4 days of food calculate at 100-120€ per person.",
      {
        "heading": "Bus for 50 people for transfers within Preveza €150 per transfer so €3-5 per person. Price €20 for all days. So, in total:",
        "level": 5,
        "align": "center"
      },
      {
        "list": [
          "Accommodation in hotel €120 - 140 per person",
          "Food €100 - 120 per person",
          "Transportation €20 per person",
          "Participation in the festival €35 per person",
          "**Total from 275 – 315€ the cost for a full stay per person**"
        ],
        "align": "center"
      },
      {
        "p": "Calculate at least €50 less in case of accommodation in rented rooms or apartments. Of course, if you contact the travel companies directly and as early as possible, you can get much better prices.\nOf course, you will calculate your plane tickets and your transfers from the airports.",
        "align": "center"
      },
      {
        "heading": "How you can get here:",
        "level": 3,
        "align": "center"
      },
      {
        "list": [
          "**By bus**: Preveza is 370 km away from Athens (it takes about 5 hours to reach), which is the capital of Greece and 350 km from Thessaloniki (it takes about 5 hours to reach).",
          "**Airlines**: From Athens (ATH) to Aktion (PVK) - (1h and 5min).",
          "**Aktion Airport** is located 3 Km south of Preveza, western Greece, close to the Ionian Island of Lefkas (approx. 15km), connected by a tunnel. Bus services run to Preveza and Lefkas. Taxi to Preveza should cost approximately € 20,00. Facilities include 3 bars/cafes, duty free shop, and an ATM. Every year an important number of charter flights (see the list at https://www.pvk-airport.gr/en/airline-list) are organised by various tour operators.",
          "**By sea**: The closest port is that of Igoumenitsa, which is 85 km away from Preveza and we should notice that it has itineraries to and from Italy daily (Brindisi, Bari, Ancona, Trieste). You should come by bus."
        ],
        "align": "center"
      },
      {
        "heading": "All the above materials to be sent to the following address:",
        "level": 4,
        "align": "center"
      },
      {
        "list": [
          "Choral Society “Armonia” of Preveza",
          "P. O. Box 29",
          "GR – 481 00, Preveza GREECE"
        ],
        "align": "center"
      },
      {
        "heading": "For any further information, please contact us on the following:",
        "level": 4,
        "align": "center"
      },
      {
        "heading": "prevezachoralfestival@gmail.com",
        "level": 4,
        "align": "center"
      },
      {
        "heading": "armonia4@otenet.gr",
        "level": 4,
        "align": "center"
      },
      {
        "list": [
          "0030 2682 0 24915",
          "0030 2682 0 29852",
          "0030 6977 1 32107"
        ],
        "align": "center"
      },
      {
        "heading": "Selection",
        "level": 3,
        "align": "center"
      },
      "Only applications enclosing all the requirements detailed under Application Procedure will be considered. Choirs are selected based on their application material. Particular attention is paid to the repertoire and quality of performance presented on the audition CD submitted with the application.",
      {
        "heading": "Broadcasting, Recording & Photographic Rights",
        "level": 3,
        "align": "center"
      },
      {
        "heading": "It is a condition of participation that any choir agrees that:",
        "level": 5,
        "align": "center"
      },
      {
        "list": [
          "Any performance it gives during the festival may be photographed, broadcast live and/or recorded for subsequent reproduction and/or broadcast on radio and/or television without payment to the choir (or folk-dance group or orchestra).",
          "All broadcasting and photographic rights to any performance at the festival shall belong to the festival which will be free to dispose of them or utilize them in promotional materials it sees fit.",
          "Any performance it gives during the festival may, without payment, be recorded and the festival shall be entitled to possession of any such recording and shall further be entitled to reproduce any such recording and to sell, let for hire, offer or expose for sale or hire, distribute or otherwise dispose of any recording or reproduction of recording of any such performance in any manner that it sees fit."
        ],
        "align": "center"
      },
      {
        "narrow": 0
      }
    ],
    el: [
      {
        "list": [
          "10 - 13 Ιουλίου 2025"
        ]
      },
      {
        "img": "/img/2025logo2.webp"
      },
      "Με ιδιαίτερη χαρά οργανώνουμε και φέτος το 43ο Διεθνές Χορωδιακό Φεστιβάλ Πρέβεζας. Το φεστιβάλ προγραμματίζουμε να διαρκέσει από τις 10 έως τις 13 Ιουλίου 2025.\n\nΦτάνοντας πλέον τα 43 χρόνια πραγματοποίησής του, το φεστιβάλ μας αισιοδοξεί να γίνει πόλος έλξης χορωδιών από όλον τον κόσμο, χαρίζοντας σε όλους μας εμπειρίες υψηλού χορωδιακού προϊόντος ανεβάζοντας συνεχώς τα στάνταρ του, κάνοντάς μας κοινωνούς σε μια μεγάλη ποικιλία διαπολιτισμικών εμπειριών με συμμετέχοντες από όλο τον κόσμο. Στη διάρκεια του φεστιβάλ πραγματοποιούνται πολλές συναυλίες σε ειδυλλιακές τοποθεσίες της περιοχής μας όπως η κεντρική παραλία της Πρέβεζας, διάφοροι ιεροί ναοί της πόλης καθώς και το Ρωμαϊκό Ωδείο της Αρχαίας Νικόπολης.\n\nΓια τις χορωδίες που θα συμμετέχουν, το φεστιβάλ αποτελεί τόσο μια ευκαιρία για συμμετοχή σε ένα μεγάλο πολιτιστικό γεγονός, ενώ παράλληλα υπάρχει αρκετός χρόνος για ξεκούραση, επίσκεψη σε διάφορα μνημεία ιστορικού και φυσικού κάλλους απολαμβάνοντας τον ήλιο, τη θάλασσα καθώς και την τοπική Πρεβεζάνικη γαστρονομία.",
      "Το φεστιβάλ διοργανώνει η Χορωδία Πρέβεζας «Αρμονία» με τη συμμετοχή και συνεργασία του Δήμου Πρέβεζας, της Περιφερειακής Ενότητας Πρέβεζας, του Υπουργείου Πολιτισμού, του ΕΟΤ, της Ιεράς Μητροπόλεως Νικοπόλεως και Πρέβεζας, της Εφορίας Αρχαιοτήτων Πρέβεζας και άλλων φορέων. Δικαίωμα συμμετοχής στο φεστιβάλ έχουν όλων των ειδών οι χορωδίες.\n\nΘα είναι μεγάλη τιμή και χαρά για εμάς αν έρθετε στην όμορφη πόλη μας και λάβετε μέρος στο φεστιβάλ μας. Σας προσκαλούμε να ανακαλύψετε ότι η Πρέβεζα είναι μια γοητευτική και φιλόξενη πόλη γεμάτη ιστορικούς χώρους και τοποθεσίες φυσικής ομορφιάς και να ζήσετε τη μαγεία της χορωδιακής μουσικής.\n\nΚαταληκτική ημερομηνία παραλαβής των συμπληρωμένων αιτήσεων είναι η 1η Μαΐου 2025.",
      {
        "wide": true
      },
      {
        "heading": "Διεθνής Κριτική Επιτροπή I.J.C.",
        "level": 2,
        "align": "center"
      },
      ...person("ambroz-copi", "el", {level: 3}),
      ...person("angeliki-ploka", "el", {level: 3,align: "right"}),
      {
        "heading": "Camilo Santostefano",
        "level": 3
      },
      {
        "img": "/img/camilosantostefano.webp",
        "layout": "side"
      },
      "Ο Camilo Santostefano είναι ένας διακεκριμένος Αργεντινός μαέστρος χορωδιών και ορχηστρών, συνθέτης, καθηγητής και μέλος διεθνών κριτικών επιτροπών. Κατέχει πτυχίο Διεύθυνσης Χορωδίας από το Εθνικό Πανεπιστήμιο Τεχνών του Μπουένος Άιρες, καθώς και πτυχία Μουσικής Παιδαγωγικής και Κιθάρας από το Κονσερβατόριο του Morón. Πραγματοποίησε μεταπτυχιακές σπουδές στην Ερμηνεία της Λατινοαμερικανικής Μουσικής του 20ού αιώνα στο Πανεπιστήμιο UNCUYO. Για τη συμβολή του στη μουσική της Αργεντινής τιμήθηκε με το Βραβείο Konex 2019 στη Χορωδιακή Διεύθυνση. Αυτή τη στιγμή διευθύνει τη Coro Polifónico de Córdoba, την επαγγελματική χορωδία του Θεάτρου Libertador San Martín στην Κόρδοβα. Είναι επίσης ιδρυτής και μαέστρος της MusicaQuantica Voces de Cámara, ενός φημισμένου φωνητικού συνόλου που έχει τιμηθεί διεθνώς, μεταξύ άλλων με το Grand Prix στο Ave Verum (Αυστρία, 2012), στο Florilège Vocal de Tours (Γαλλία, 2012), και ήταν φιναλίστ στον European Grand Prix (Ιταλία, 2013). Έχει εμφανιστεί ως προσκεκλημένος μαέστρος σε σύνολα στην Ουαλία, την Κολομβία, τις ΗΠΑ και την Αυστρία. Στο παρελθόν διηύθυνε τη χορωδία Carlos López Buchardo, την όπερα Lírica Lado B και τη Χορωδία της Εθνικής Σχολής του Μπουένος Άιρες. Κατά την περίοδο 2019–2022 έζησε στην Αυστρία, διευθύνοντας σύνολα όπως οι Gumpoldskirchner Spatzen, Melange Vocal Wien και άλλα. Ως συνθέτης έχει τιμηθεί με εθνικά και διεθνή βραβεία, μεταξύ των οποίων και στον διαγωνισμό σύνθεσης όπερας OperaVista στο Χιούστον. Παραδίδει τακτικά masterclasses και συνέδρια στην Αμερική και την Ευρώπη. Ο Camilo συμμετέχει σε διεθνείς επιτροπές διαγωνισμών, όπως σε διοργανώσεις της IFCM στη Γαλλία, την Κροατία και τις Μπαχάμες. Είναι παθιασμένος υποστηρικτής της λατινοαμερικανικής χορωδιακής μουσικής και διακεκριμένος παιδαγωγός, έχοντας διδάξει στο Conservatorio Astor Piazzolla στο Μπουένος Άιρες. Το έργο του γεφυρώνει ηπείρους, στυλ και γενιές μέσα από τη μουσική.",
      {
        "heading": "Δρ. Yu-Chung Johnny Ku",
        "level": 3,
        "align": "right"
      },
      "Ο Δρ. Yu-Chung Johnny Ku είναι ένας από τους πλέον καταξιωμένους μαέστρους και παιδαγωγούς χορωδιακής μουσικής στην Ταϊβάν. Είναι Μουσικός Διευθυντής της Taipei Philharmonic Chorus και της Taipei Philharmonic Chamber Choir, καθώς και του Taipei International Choral Festival and Competition. Παράλληλα, διευθύνει τη χορωδία Dream Lotus Chorus, είναι μέλος του Διοικητικού Συμβουλίου της Ταϊβανέζικης Χορωδιακής Ένωσης, και διδάσκει ως Επίκουρος Καθηγητής στο National Taiwan University of Arts και στο Fu-Jen Catholic University. Είναι επίσης μέλος του Παγκόσμιου Χορωδιακού Συμβουλίου, της Ασιατικο-Ειρηνικής Επιτροπής της Διεθνούς Ομοσπονδίας Χορωδιακής Μουσικής (IFCM), συνιδρυτής του Παγκόσμιου Πρωταθλήματος Χορωδιών και ιδρυτικό μέλος της Ασιατικής Χορωδιακής Ένωσης. Είναι ένας δραστήριος και ευέλικτος μαέστρος, με έργο που εκτείνεται πέρα από τις χορωδίες, περιλαμβάνοντας συμφωνικές ορχήστρες, όπερες, μιούζικαλ και συναυλίες ποπ μουσικής. Έχει δώσει συναυλίες, σεμινάρια και διαλέξεις σε περισσότερες από 20 χώρες, όπως η Αυστραλία, Αυστρία, Βουλγαρία, Καναδάς, Κίνα, Τσεχία, Ουγγαρία, Ινδονησία, Ιταλία, Ιαπωνία, Κορέα, Μαλαισία, Φιλιππίνες, Πολωνία, Ρωσία, Σιγκαπούρη, Τουρκία και ΗΠΑ. Με την Taipei Philharmonic Chamber Choir, έχει συμμετάσχει σε σημαντικά διεθνή φεστιβάλ, όπως το ACDA National Convention, το Next Wave Festival του BAM, το Melbourne Festival και το Παγκόσμιο Συμπόσιο Χορωδιακής Μουσικής 2023 στην Τουρκία. Ως Χορωδιακός Διευθυντής, έχει συνεργαστεί σε περισσότερες από 50 παραγωγές με την Εθνική Συμφωνική Ορχήστρα της Ταϊβάν, το National Kaohsiung Center for the Arts και άλλα σημαντικά ιδρύματα, δίπλα σε μαέστρους όπως οι Frieder Bernius, Charles Dutoit και Helmuth Rilling. Έχει διατελέσει μέλος κριτικών επιτροπών σε διεθνείς διαγωνισμούς όπως οι World Choir Games, Bali International Choir Competition, Singapore International Choral Competition κ.ά. Ο Δρ. Ku είναι κάτοχος Διδακτορικού Διπλώματος Μουσικής (D.M.A.) από το University of Cincinnati και Μεταπτυχιακού Τίτλου από το Temple University.",
      {
        "img": "/img/Yu-ChungJohnnyKu.webp",
        "layout": "side"
      },
      ...person("eduardo-garcia-novelli", "el", {level: 3}),
      ...person("josu-elberdin-badiola", "el", {level: 3,align: "right"}),
      ...person("pawel-lukaszewski", "el", {level: 3}),
      {
        "heading": "Roni Sugiarto",
        "level": 3,
        "align": "right"
      },
      "Ο Roni Sugiarto είναι ένας από τους σημαντικότερους μαέστρους χορωδίας της Ινδονησίας, με διεθνή αναγνώριση για το έργο του στον χώρο των παιδικών και νεανικών χορωδιών. Ως Μουσικός Διευθυντής της Saint Angela Choir (SAC), έχει οδηγήσει το σύνολο σε εθνικές και διεθνείς διακρίσεις. Υπό τη διεύθυνσή του, η SAC έχει αποσπάσει κορυφαία βραβεία σε φεστιβάλ και διαγωνισμούς σε Χανγκτσόου, Ρώμη, Φλωρεντία, Νότια Κορέα, Τόκιο, Ρίμινι και Τολόσα. Το 2024, η χορωδία ανακηρύχθηκε Παγκόσμια Πρωταθλήτρια Χορωδιών στο Ρίμινι της Ιταλίας και κατέκτησε το Grand Prix στο 4ο Διεθνές Χορωδιακό Φεστιβάλ της Μπαντούνγκ. Η μουσική του πορεία διαμορφώθηκε κοντά στους Joseph Kristanto και Avip Priatna. Το 2009–2010 έλαβε υποτροφία από τη Γερμανική Κυβέρνηση (Goethe-Institut) για να συμμετάσχει στο Conducting Workshop for Orchestra στην Μπανγκόκ, υπό τη διεύθυνση του Maestro Gudni A. Emilsson. Ως χορωδός, έχει συμμετάσχει στην Ινδονησιακή Εθνική Νεανική Χορωδία (2005) και στη World Youth Choir με εμφανίσεις στο Μιλάνο (2006), Νότια Αφρική (2007) και Χονγκ Κονγκ–Γκουανγκζού–Μακάο (2008). Έχει παρακολουθήσει masterclasses με διακεκριμένους μαέστρους όπως οι Mark Anthony Carpio, Jonathan Velasco, Julie Spittill, Marcus LaPratt, William Lock και André de Quadros. Σήμερα είναι Μουσικός Διευθυντής της Χορωδίας Φοιτητών του ITB και της Saint Angela Choir, καθώς και Καλλιτεχνικός Διευθυντής στα φεστιβάλ Saint Angela Children and Youth Choir Festival και Satya Dharma Gita International Choir Festival. Είναι επίσης έμπειρος κριτής χορωδιακών διαγωνισμών και δραστήριος εισηγητής σε σεμινάρια και εργαστήρια για χορωδούς και νέους μαέστρους.",
      {
        "img": "/img/Roni Sugiarto.webp",
        "layout": "side"
      },
      {
        "heading": "Yana Deliradeva",
        "level": 3
      },
      {
        "img": "/img/Yana Deliradeva (2).webp",
        "layout": "side"
      },
      "Η Yana Deliradeva είναι μια διακεκριμένη Βουλγάρα μαέστρος χορωδίας, γνωστή για την καινοτόμο δουλειά της με παιδικές χορωδίες και τη βαθιά της αφοσίωση στη μουσική εκπαίδευση. Σπούδασε διεύθυνση χορωδίας στη Βουλγαρία και στις Ηνωμένες Πολιτείες, όπου ολοκλήρωσε τις μεταπτυχιακές της σπουδές στο Westminster Choir College στο Πρίνστον, υπό την καθοδήγηση του καθηγητή Joseph Flummerfelt. Μετά την επιστροφή της στη Βουλγαρία το 2002, ανέλαβε τη θέση της βοηθού μαέστρου στη φημισμένη Παιδική Χορωδία Detska Kitka στην Πλόβντιβ. Από το 2011 είναι κύρια μαέστρος της χορωδίας, η οποία απαρτίζεται από περισσότερα από 120 παιδιά που προέρχονται από πάνω από 30 σχολεία της πόλης. Υπό τη διεύθυνσή της, η χορωδία συνεχίζει την παράδοση καλλιτεχνικής αριστείας, ενώ ταυτόχρονα ενσωματώνει σύγχρονες και συμπεριληπτικές προσεγγίσεις στο ρεπερτόριο και στις εμφανίσεις της. Μέρος του οράματός της είναι η ανάπτυξη νέου κοινού μέσα από διακαλλιτεχνικές συνεργασίες και την προώθηση νέας μουσικής. Παράλληλα με τη χορωδιακή της δραστηριότητα, η Yana Deliradeva δραστηριοποιείται έντονα και στον ακαδημαϊκό και παιδαγωγικό χώρο. Είναι επίκουρη καθηγήτρια Διεύθυνσης Χορωδίας στην Ακαδημία Μουσικής, Χορού και Καλών Τεχνών της Πλόβντιβ, και φωνητική παιδαγωγός στην Παιδική Ακαδημία της Κρατικής Όπερας Πλόβντιβ. Ως αφοσιωμένη παιδαγωγός, στηρίζει την εξέλιξη νέων μαέστρων και προωθεί σύγχρονες, ολιστικές μεθόδους πρόβας. Έχει πραγματοποιήσει σεμινάρια διεύθυνσης στις ΗΠΑ, στη Σουηδία και στη Βουλγαρία και έχει τιμηθεί με σημαντικά βραβεία για τη συμβολή της στον χώρο της χορωδιακής τέχνης. Αυτή την περίοδο εκπονεί τη διδακτορική της διατριβή με τίτλο «Εφαρμογή Σωματικών Μεθόδων στη Διαδικασία Πρόβας Παιδικών Χορωδιών», επιβεβαιώνοντας τη δέσμευσή της στην ενσωμάτωση της κίνησης και της σωματικής αντίληψης στη μουσική εκπαίδευση. Μέσα από το πολύπλευρο έργο της, η Yana Deliradeva συνεχίζει να διαμορφώνει το μέλλον της χορωδιακής μουσικής στη Βουλγαρία, εμπνέοντας τις νέες γενιές μουσικών και μαέστρων.",
      {
        "heading": "29 ος Διεθνής Χορωδιακός Διαγωνισμός",
        "level": 2,
        "align": "center"
      },
      "Έγγραφο με τους Κανόνες διαγωνισμού & τους Όρους Συμμετοχής",
      {
        "p": "[Λήψη ↓](/img/29ος%20Διεθνής%20Χορωδιακός%20Διαγωνισμός.docx)",
        "align": "center"
      },
      {
        "heading": "2 ος Διεθνής Διαγωνισμός Σύνθεσης Χορωδιακού Έργου",
        "level": 2,
        "align": "center"
      },
      "Έγγραφο με τους Κανόνες διαγωνισμού & τους Όρους Συμμετοχής",
      {
        "p": "[Λήψη ↓](/img/2ος%20ΔΙΕΘΝΗΣ%20ΔΙΑΓΩΝΙΣΜΟΣ%20ΣΥΝΘΕΣΗΣ%20ΧΟΡΩΔΙΑΚΟΥ%20ΕΡΓΟΥ.docx)",
        "align": "center"
      },
      {
        "heading": "2 ος Διεθνής Διαγωνισμός Διεύθυνσης Χορωδίας",
        "level": 2,
        "align": "center"
      },
      "Έγγραφο με τους Κανόνες Διαγωνισμού & τους Όρους Συμμετοχής",
      {
        "p": "[Λήψη ↓](/img/2ος%20Διαγωνισμός%20Μαέστρων.docx)",
        "align": "center"
      },
      {
        "heading": "Συμμετέχουσες Χορωδίες",
        "level": 1
      },
      {
        "heading": "Χορωδία Γυναικών \"Cantigas\"",
        "level": 2
      },
      "Νιου Τζέρσεϊ, ΗΠΑ",
      {
        "img": "/img/Cantigas.webp"
      },
      "Διευθύνει: Dr. Hannah Carr",
      "Η Χορωδία Γυναικών «Cantigas» ιδρύθηκε το 2002 στο Hudson County των Ηνωμένων Πολιτειών και αποτελείται από γυναίκες με πολιτισμική και ηλικια\u0002κή ποικιλομορφία που μοιράζονται την αγάπη τους για το χορωδιακό τραγού\u0002δι. Το σύνολο παρουσιάζει δύο ετήσιες συναυλίες και υλοποιεί πλήθος κοινω\u0002νικών δράσεων, όπως εμφανίσεις σε δομές φιλοξενίας, φυλακές γυναικών και κέντρα ηλικιωμένων. Το ρεπερτόριό τους περιλαμβάνει άγνωστα έργα σύγχρονων συνθετών, όπως οι Leonardo San Juan, Lillian Redl, και Wassim Ibrahim. Το 2015, η «Cantigas» παρουσίασε σε παγκόσμια πρώτη το «Damascus Breeze». Το 2023 ταξίδε\u0002ψε στην Ιρλανδία για την πρώτη παρουσίαση του έργου «Eternal Rebel» του Sean Doherty. Το 2016 εμφανίστηκε στο Μπουένος Άιρες με αδελφές χορωδίες της Αργεντινής. Ιδιαίτερη έμφαση δίνεται σε παραδοσιακά τραγούδια και ανώνυμες γυναικείες φωνές, ενώ συνεργάζονται με παραδοσιακούς μουσικούς και πολιτισμικούς συνεργάτες. Η χορωδία καθοδηγείται από την Dr. Hannah Carr, διευθύντρια χορωδιών στο William Paterson University, και την Erasmia Voukelatos, Ελληνοκαναδή πιανίστα και συνοδό από την ίδρυσή της.",
      "🗓️ Ιδρύθηκε το 2002 στο Hudson County (ΗΠΑ) — Χορωδία γυναικών με πολιτισμική & ηλικιακή ποικιλομορφία",
      "🎼 Ρεπερτόριο: Σύγχρονα έργα (San Juan, Redl, Ibrahim), παραδοσιακά τραγούδια & γυναικείες φωνές",
      "🌍 Εμφανίσεις: Πρεμιέρα «Damascus Breeze» (2015), «Eternal Rebel» στην Ιρλανδία (2023), συναυλία στο Μπουένος Άιρες (2016)",
      "🎶 Μουσική διεύθυνση: Dr. Hannah Carr & Erasmia Voukelatos (από την ίδρυση)",
      "🇺🇸 ΗΠΑ",
      {
        "heading": "Χορωδία Ομοίων Φωνών “Αριέττα”",
        "level": 2
      },
      "Αθήνα, Ελλάδα",
      {
        "img": "/img/Arietta.webp"
      },
      "Διευθύνει: Αθηνά Γρατσούνα",
      "Η “Αριέττα” είναι χορωδία ομοίων φωνών (γυναικείων/νεανικών), που ιδρύθη\u0002κε το 2023 ως φυσική συνέχεια της παιδικής – νεανικής χορωδίας του Ωδείου “Εν Οργάνοις”, με έδρα τη Νέα Ιωνία Αττικής. Το σχήμα δημιουργήθηκε από παλαιότερα μέλη της παιδικής χορωδίας και νέα κορίτσια, με στόχο τη μελέτη απαιτητικού ρεπερτορίου για γυναικείες φωνές, από την κλασική έως τη σύγ\u0002χρονη χορωδιακή μουσική. Έχει ήδη αποσπάσει το Χρυσό Μετάλλιο στον 10ο Διαγωνισμό ARTIVA (Ναύ\u0002πλιο, 2024) και Χάλκινο Μετάλλιο στο Φεστιβάλ “Μίκης Θεοδωράκης” (Ναύ\u0002πακτος, 2023). Η χορωδία συμμετέχει σε συναυλίες και φεστιβάλ σε όλη την Ελλάδα, με εμφανίσεις σε σημαντικούς χώρους όπως ο Φιλολογικός Σύλλογος Παρνασσός και σε διοργανώσεις του Δήμου Νέας Ιωνίας. Η μαέστρος Αθηνά Γρατσούνα είναι βιολονίστρια, διπλωματούχος διεύθυνσης χορωδίας και εκπαιδευτικός. Είναι απόφοιτος του ΕΚΠΑ και του μεταπτυχια\u0002κού προγράμματος βιολιού υπό τον Γιώργο Δεμερτζή. Από το 2012 ασχολείται ενεργά με τη χορωδιακή διδασκαλία και διεύθυνση, ενώ από το 2023 διευθύνει την “Αριέττα” και από το 2024 την παιδική χορωδία “Αριεττίνα”",
      "🗓️ Ιδρύθηκε το 2023 στη Νέα Ιωνία, συνέχεια της παιδικής χορωδίας «Εν Οργάνοις»",
      "🎼 Ρεπερτόριο: Απαιτητικά έργα για γυναικείες φωνές — από κλασική έως σύγχρονη χορωδιακή μουσική",
      "🏆 Βραβεία: Χρυσό Μετάλλιο (ARTIVA, Ναύπλιο 2024), Χάλκινο Μετάλλιο (Φεστιβάλ «Μίκης Θεοδωράκης», Ναύπακτος 2023)",
      "🎶 Μαέστρος: Αθηνά Γρατσούνα — βιολονίστρια, διπλωματούχος διεύθυνσης χορωδίας και εκπαιδευτικός",
      "🇬🇷 Ελλάδα",
      {
        "heading": "Κοινοτική Χορωδία Σχολής Μωραΐτη",
        "level": 2
      },
      "Ψυχικό, Αθήνα, Ελλάδα",
      {
        "img": "/img/Moraiti.webp"
      },
      "Διευθύνει: Βάγια Παπαγιαννοπούλου",
      "Η Χορωδία Ενηλίκων της Σχολής Μωραΐτη ιδρύθηκε τον Ιανουάριο του 2019 από τη μαέστρο Βάγια Παπαγιαννοπούλου και αποτελείται από 42 μέλη. Λει\u0002τουργεί ως κοινοτική χορωδία, προωθώντας τη μουσική συμμετοχή και κοινω\u0002νική αλληλεπίδραση μέσα από το χορωδιακό τραγούδι, χωρίς προαπαιτού\u0002μενες μουσικές γνώσεις. Έχει συμμετάσχει σε συναυλίες και φεστιβάλ στις πόλεις Αθήνα, Ναύπλιο, Θεσσαλονίκη, Βόλο και Αγρίνιο. Η μαέστρος Βάγια Παπαγιαννοπούλου είναι πτυχιούχος Διεύθυνσης Χορω\u0002δίας του Ιονίου Πανεπιστημίου με μεταπτυχιακές σπουδές στο University of York. Έχει σημαντική διδακτική και καλλιτεχνική δραστηριότητα στην Ελλάδα",
      "🗓️ Ιδρύθηκε το 2019 από τη μαέστρο Βάγια Παπαγιαννοπούλου — 42 μέλη",
      "🎼 Λειτουργία: Κοινοτική χορωδία, συμμετοχή χωρίς προαπαιτούμενες μουσικές γνώσεις",
      "🌍 Συναυλίες: Φεστιβάλ και εμφανίσεις σε Αθήνα, Ναύπλιο, Θεσσαλονίκη, Βόλο & Αγρίνιο",
      "🎶 Μαέστρος: Βάγια Παπαγιαννοπούλου — πτυχιούχος Διεύθυνσης Χορωδίας & μεταπτυχιακές σπουδές στο University of York",
      "🇬🇷 Ελλάδα",
      {
        "heading": "Ανδρικό φωνητικό σύνολο “Vírilis”",
        "level": 2
      },
      "Πρέσεριε, Σλοβενία",
      {
        "img": "/img/Virilis.webp"
      },
      "Διευθύνει: Συλλογική καλλιτεχνική καθοδήγηση",
      "Το ανδρικό φωνητικό σύνολο «Vírilis» από τη Σλοβενία ειδικεύεται στην ερ\u0002μηνεία σλοβενικών παραδοσιακών και εθνικών τραγουδιών με υψηλό καλλι\u0002τεχνικό επίπεδο. Αν και το σύνολο είναι επίσημα ενεργό από το 2022, τα μέλη του τραγουδούν μαζί εδώ και αρκετά χρόνια. Το ρεπερτόριό τους περιλαμβάνει κυρίως παραδοσιακά και λόγια σλοβενικά έργα, αλλά επεκτείνεται κατά δια\u0002στήματα και σε διεθνές φωνητικό ρεπερτόριο. Το 2023 και το 2024 πραγματοποίησαν δύο εορταστικές χριστουγεννιάτικες συναυλίες, εμφανίστηκαν δύο φορές στην κρατική τηλεόραση της Σλοβενίας στην εκπομπή V petek zvečer και έλαβαν μέρος σε φιλανθρωπικές εκδηλώσεις σε γειτονικές πόλεις. Το 2023 πραγματοποίησαν περιοδεία στις Ηνωμένες Πο\u0002λιτείες Αμερικής, δίνοντας συναυλία στη Νέα Υόρκη για τη σλοβενική ομογέ\u0002νεια, στον ναό του Αγίου Κυρίλλου. Έχουν συνεργαστεί με την Συμφωνική Ορχήστρα «Cantabile», καθώς και με διακεκριμένους σολίστ και μουσικούς. Τα μέλη του συνόλου είναι: Nino Koritnik (πρώτος τενόρος), Tomaž Švigelj και Peter Grdadolnik (δεύτεροι τενό\u0002ροι), Jan Jerman (βαρύτονος και πρόεδρος του συνόλου) και Blaž Stanjko (μπάσος).",
      "🗓️ Ιδρύθηκε το 2022 στη Σλοβενία — ανδρικό φωνητικό σύνολο με έμπειρα μέλη",
      "🎼 Ρεπερτόριο: Σλοβενικά παραδοσιακά και εθνικά τραγούδια, με επεκτάσεις σε διεθνές φωνητικό υλικό",
      "🌍 Συναυλίες & εμφανίσεις: Χριστουγεννιάτικες συναυλίες, TV Σλοβενίας, φιλανθρωπικές εκδηλώσεις, περιοδεία ΗΠΑ 2023",
      "🎶 Συνεργασίες: Συμφωνική Ορχήστρα Cantabile & διακεκριμένοι σολίστ — βασικά μέλη: Nino Koritnik, Tomaž Švigelj, Peter Grdadolnik, Jan Jerman, Blaž Stanjko",
      "🇸🇮 Σλοβενία",
      {
        "heading": "Γυναικεία Χορωδία “Νηρηίδες”",
        "level": 2
      },
      "Δήμος Παλαιού Φαλήρου, Ελλάδα",
      {
        "img": "/img/Niriides.webp"
      },
      "Διευθύνει: Κατερίνα Βασιλικού",
      "Η Γυναικεία Χορωδία “Νηρηίδες” του Δήμου Παλαιού Φαλήρου ιδρύθηκε τον Οκτώβριο του 2013, κατόπιν ακροάσεων, και από τότε διευθύνεται από την Κα\u0002τερίνα Βασιλικού. Έχει αποσπάσει Χρυσό Δίπλωμα στον 2ο Διεθνή Διαγωνισμό Interkultur στην Καλαμάτα (2017) και Αργυρό Μετάλλιο στο 10ο Διεθνές Χορωδια\u0002κό Φεστιβάλ “Μαριλένα” Artiva στο Ναύπλιο (2024). Σημαντικές εμφανίσεις της περιλαμβάνουν τις συναυλίες στο Ωδείο Ηρώδου του Αττικού σε παραγωγές του Ελληνικού Ερυθρού Σταυρού για την ειρήνη, την αλλη\u0002λεγγύη και το περιβάλλον (2023, 2024). Έχει συμμετάσχει σε χορωδιακά φεστιβάλ σε Κηφισιά, Ναύπλιο, Τρίπολη, Νέα Μάκρη, Λουτράκι, καθώς και σε εκδηλώσεις σε Αθήνα και Θεσσαλονίκη. Παράλληλα, υποστηρίζει ενεργά τις πολιτιστικές δρά\u0002σεις του Δήμου Παλαιού Φαλήρου και φιλοξενεί χορωδίες από όλη την Ελλάδα. Η Κατερίνα Βασιλικού είναι μουσικοπαιδαγωγός, με σπουδές στο πιάνο και το κλασικό τραγούδι, και εμπειρία στη διεύθυνση παιδικών, νεανικών και γυναικείων χορωδιών. Διδάσκει Μουσική στη Λεόντειο Σχολή Νέας Σμύρνης και έχει συνερ\u0002γαστεί με σημαντικούς μουσικούς φορείς της χώρας.",
      "🗓️ Ιδρύθηκε το 2013 στον Δήμο Παλαιού Φαλήρου — Γυναικεία χορωδία μετά από ακροάσεις",
      "🏆 Βραβεία: Χρυσό Δίπλωμα (Interkultur Καλαμάτα 2017), Αργυρό Μετάλλιο (Artiva Ναύπλιο 2024)",
      "🌍 Συναυλίες & φεστιβάλ: Ωδείο Ηρώδου Αττικού, Κηφισιά, Ναύπλιο, Τρίπολη, Νέα Μάκρη, Λουτράκι, Αθήνα & Θεσσαλονίκη",
      "🎶 Μαέστρος: Κατερίνα Βασιλικού — μουσικοπαιδαγωγός με εμπειρία σε παιδικές, νεανικές & γυναικείες χορωδίες",
      "🇬🇷 Ελλάδα",
      {
        "heading": "Χορωδία Δωματίου ASTIBO",
        "level": 2
      },
      "Στιπ, Βόρεια Μακεδονία",
      {
        "img": "/img/Astibo.webp"
      },
      "Διευθύνει: Ivana Djurdjevic-Jankov",
      "Η Χορωδία ASTIBO ιδρύθηκε το 2009 στη Στιπ και από το 2023 φέρει την ονομα\u0002σία «Χορωδία Δωματίου Πόλης ASTIBO». Πρόκειται για μικτό σύνολο 25 μελών, με πλούσιο ρεπερτόριο που καλύπτει διαφορετικά μουσικά είδη, από παραδοσι\u0002ακά μέχρι σύγχρονα έργα. Οι εμφανίσεις της χαρακτηρίζονται από χορογραφικά στοιχεία και άμεση αλληλεπίδραση με το κοινό. Η πολυγενεακή σύνθεση της χορωδίας (με διαφορά ηλικίας άνω των 50 ετών με\u0002ταξύ των μελών) ενισχύει τη δημιουργική της φυσιογνωμία, συνδυάζοντας νεανι\u0002κότητα και εμπειρία. Η ASTIBO έχει συμμετάσχει σε διεθνή φεστιβάλ και έχει κερδίσει σημαντικές δι\u0002ακρίσεις, όπως:",
      {
        "list": [
          "Αργυρό Μετάλλιο στο Διεθνές Φεστιβάλ Bijeljina (Βοσνία, 2024)",
          "Grand Prix στο φεστιβάλ “Sing My Heart” (Kyustendil, Βουλγαρία, 2019)",
          "Πρώτο βραβείο στο Φεστιβάλ του Kostandovo (Βουλγαρία, 2017)"
        ]
      },
      "Είναι επίσης ιδρυτής και διοργανωτής του διεθνούς φεστιβάλ ASTIBO-FEST (2017–2024). Η Ivana Djurdjevic-Jankov είναι επίκουρη καθηγήτρια στο Πανεπιστήμιο Goce Delchev – Στιπ, με σπουδές διεύθυνσης χορωδίας στο Βελιγράδι και μετα\u0002πτυχιακό στη μουσική ανάλυση. Από το 2014 διευθύνει τη χορωδία ASTIBO, ενώ έχει συνεργαστεί με πλήθος χορωδιών σε Σερβία και Βόρεια Μακεδονία",
      "🗓️ Ιδρύθηκε το 2009 στη Στιπ — μετονομάστηκε σε «Χορωδία Δωματίου Πόλης ASTIBO» το 2023",
      "🎼 Σύνολο: 25 μέλη με ποικίλο ρεπερτόριο — από παραδοσιακά έως σύγχρονα έργα",
      "🏆 Διακρίσεις: Grand Prix “Sing My Heart” (2019), 1ο Βραβείο Kostandovo (2017), Αργυρό Μετάλλιο Bijeljina (2024)",
      "🎶 Διευθύντρια: Ivana Djurdjevic-Jankov — από το 2014, ιδρύτρια του ASTIBO-FEST",
      "🇲🇰 Βόρεια Μακεδονία",
      {
        "heading": "Μικτή Νεανική Χορωδία “SOLARTE”",
        "level": 2
      },
      "Σύγχρονο Ωδείο Λάρισας, Ελλάδα",
      {
        "img": "/img/Solarte.webp"
      },
      "Διευθύνει: Νίκος Στ. Ευθυμιάδης",
      "Η Μικτή Νεανική Χορωδία “SOLARTE” του Σύγχρονου Ωδείου Λάρισας ιδρύθηκε το 2004 από τον Γιώργο Γράμψα και αποτελεί ένα ευέλικτο χορωδιακό σύνολο, με πλούσια καλλιτεχνική δράση στην Ελλάδα και το εξωτερικό. Το ρεπερτόριό της εκτείνεται από τη μεσαιωνική και αναγεννησιακή μουσική έως τη σύγχρονη δη\u0002μιουργία. Η χορωδία έχει εμφανιστεί σε φεστιβάλ, συναυλίες και πολιτιστικές εκδηλώσεις σε πόλεις όπως οι Αθήνα, Θεσσαλονίκη, Βόλος, Δελφοί, Πειραιάς, καθώς και σε εμ\u0002βληματικούς χώρους όπως το Μέγαρο Μουσικής Θεσσαλονίκης και το Αρχαίο Θέ\u0002ατρο Δελφών. Διεθνώς, έχει συνεργαστεί με ορχήστρες και μαέστρους σε Αυστρία, Ιταλία, Ουγγαρία και Σερβία, ενώ έχει εμφανιστεί στην τηλεόραση και συμμετάσχει σε δισκογραφικές παραγωγές. Συνεργάστηκε με σημαντικούς καλλιτέχνες όπως ο Γιώργος Νταλάρας και ο Κώ\u0002στας Χατζής, και ορχήστρες όπως της ΕΡΤ3 και του Αριστοτελείου Πανεπιστημίου Θεσσαλονίκης. Την καλλιτεχνική διεύθυνση έχει ο Νίκος Στ. Ευθυμιάδης.",
      "🗓️ Ιδρύθηκε το 2004 από τον Γιώργο Γράμψα — Μικτή Νεανική Χορωδία του Σύγχρονου Ωδείου Λάρισας",
      "🎼 Ρεπερτόριο: Μεσαιωνική και αναγεννησιακή μουσική έως σύγχρονη δημιουργία",
      "🌍 Εμφανίσεις: Ελλάδα & διεθνείς συνεργασίες σε Αυστρία, Ιταλία, Ουγγαρία, Σερβία — τηλεόραση & δισκογραφία",
      "🎶 Καλλιτεχνική Διεύθυνση: Νίκος Στ. Ευθυμιάδης — συνεργασίες με σημαντικούς καλλιτέχνες και ορχήστρες",
      "🇬🇷 Ελλάδα",
      {
        "heading": "Χορωδία Mik'ados",
        "level": 2
      },
      "Λυών, Γαλλία",
      {
        "img": "/img/Mikados.webp"
      },
      "Διευθύνει: Sibylle Chassaigne",
      "Η Χορωδία Mik'ados ανήκει στον οργανισμό La Chanterie de Lyon και απο\u0002τελείται από περίπου εβδομήντα νέους ηλικίας 12 έως 18 ετών από διάφορες γειτονιές της Λυών. Αποτελεί συνέχεια της εμπειρίας που αποκτούν τα παιδιά στις τοπικές «chanteries» (ηλικίας 8–12 ετών) και απευθύνεται σε όσους επι\u0002θυμούν να συνεχίσουν το χορωδιακό τραγούδι. Η χορωδία συμμετέχει τακτικά σε συναυλίες με άλλα σύνολα του οργανι\u0002σμού και έχει λάβει μέρος σε σημαντικές διοργανώσεις, όπως στο φεστιβάλ Choralies στο Vaison-la-Romaine. Από το 2015, έχει συμμετάσχει σε φεστιβάλ και ανταλλαγές σε Γαλλία, Τουρκία, Ισπανία, Εσθονία, Αυστρία, ενώ το 2022 κατέκτησε το 3ο βραβείο στον Διεθνή Διαγωνισμό της Προβηγκίας. Ιδρύτρια και μαέστρος της χορωδίας είναι η Sibylle Chassaigne, καθηγήτρια μουσικής και χορωδιακού τραγουδιού. Δίνει έμφαση στην προσβασιμότητα χωρίς κριτήρια επιλογής, με μοναδική προϋπόθεση το πάθος για το τραγούδι. Παράλληλα, συμμετέχει στο φωνητικό σύνολο The Women’s Choir, εμπνέοντας σταθερά τους νέους με το έργο της.",
      "🗓️ Ανήκει στον οργανισμό La Chanterie de Lyon — περίπου 70 νέοι ηλικίας 12–18 ετών",
      "🎼 Ρεπερτόριο: Χορωδιακό τραγούδι για νέους, συνέχεια των «chanteries» (8–12 ετών)",
      "🌍 Συμμετοχές: Φεστιβάλ Choralies, διεθνείς φεστιβάλ & ανταλλαγές σε Γαλλία, Τουρκία, Ισπανία, Εσθονία, Αυστρία — 3ο βραβείο Διεθνούς Διαγωνισμού Προβηγκίας (2022)",
      "🎶 Ιδρύτρια & μαέστρος: Sibylle Chassaigne — έμφαση στην προσβασιμότητα και πάθος για το τραγούδι",
      "🇫🇷 Γαλλία",
      {
        "heading": "Γυναικεία Χορωδία “Αρμονιστές”",
        "level": 2
      },
      "Δήμος Δέλτα, Ελλάδα",
      {
        "img": "/img/Armonistes.webp"
      },
      "Διευθύνει: Χρήστος Αβράμογλου",
      "Η Γυναικεία Χορωδία «Αρμονιστές» του Δήμου Δέλτα ιδρύθηκε το 2023 με πρωτο\u0002βουλία του Συλλόγου Γυναικών Δήμου Δέλτα. Η χορωδία αποτελείται από γυναι\u0002κείες φωνές όλων των ηλικιών, οι οποίες ενώνουν τις δυνάμεις τους με μουσικούς και χορευτές της τοπικής κοινότητας, δημιουργώντας ένα δυναμικό μουσικό σύνο\u0002λο αφιερωμένο στο ελληνικό ρεπερτόριο. Υπό τη συνεχή συνεργασία με το Ωδείο Σίνδου «Αλέξανδρος», οι «Αρμονιστές» εξελίσσονται διαρκώς, προσφέροντας ποιοτική μουσική εκπαίδευση και εκφραστι\u0002κή ερμηνεία. Στην ομάδα συμμετέχουν οι μουσικοί: Κατερίνα Μακρή (φωνητική), Έλενα Τριανταφύλλου (φλάουτο), Δημήτρης Ιωαννίδης (τρομπέτα), Αμαλία Καλ\u0002τσίδου (ακορντεόν), Φωτεινή Καλτσίδου (πιάνο) και ο μαέστρος Χρήστος Αβρά\u0002μογλου. Ο Χρήστος Αβράμογλου, γεννημένος στη Θεσσαλονίκη, είναι πτυχιούχος πιάνου, αρμονίας, αντίστιξης, φούγκας και ωδικής, ενώ έχει ολοκληρώσει και το πρώτο έτος σύνθεσης. Από το 2002, διδάσκει στο Ωδείο Σίνδου, διευθύνει την ορχήστρα και τη χορωδία του και είναι υπεύθυνος για σεμινάρια και καλλιτεχνικές διοργανώ\u0002σεις, όπως το G.A Festival. Ως ενορχηστρωτής, πιανίστας και κρουστός, έχει εμφανιστεί σε φεστιβάλ και σκηνές εντός και εκτός Ελλάδας, ενώ έχει γράψει μουσική για ντοκιμαντέρ του Φεστιβάλ Θεσσαλονίκης",
      "🗓️ Ιδρύθηκε το 2023 από τον Σύλλογο Γυναικών Δήμου Δέλτα — γυναικείες φωνές όλων των ηλικιών",
      "🎼 Ρεπερτόριο: Ελληνική μουσική, σε συνεργασία με μουσικούς και χορευτές της τοπικής κοινότητας",
      "🌍 Δραστηριότητες: Συνεχής εξέλιξη μέσω Ωδείου Σίνδου «Αλέξανδρος», συμμετοχή σε σεμινάρια και καλλιτεχνικές διοργανώσεις",
      "🎶 Διεύθυνση: Χρήστος Αβράμογλου — πιανίστας, ενορχηστρωτής, μαέστρος και συνθέτης",
      "🇬🇷 Ελλάδα",
      {
        "heading": "Χορωδία Δωματίου PRO ARTE",
        "level": 2
      },
      "Ινοβρότσλαβ, Πολωνία",
      {
        "img": "/img/Proarte.webp"
      },
      "Διευθύνουν: Grażyna Wolter-Kaźmierczak & Monika Wilkiewicz",
      "Η Χορωδία Δωματίου PRO ARTE ιδρύθηκε το 2000 με αφορμή τον εορτασμό του Έτους Bach. Από το 2015, τη διεύθυνση έχουν αναλάβει η καθηγήτρια Monika Wilkiewicz και η δρα Grażyna Wolter-Kaźmierczak, διακεκριμένες μαέστροι και πα\u0002νεπιστημιακοί διδάσκοντες στο Μουσικό Πανεπιστήμιο του Μπίντγκοστς. Η χορωδία έχει δώσει συναυλίες στην Πολωνία και το εξωτερικό, συμμετέχοντας σε σημαντικά φεστιβάλ και διαγωνισμούς. Ανάμεσα στις πρόσφατες διακρίσεις της συγκαταλέγονται:",
      {
        "list": [
          "2 Χρυσά Διπλώματα στον διαγωνισμό Chorus Inside Croatia (2023)",
          "2ο Βραβείο στο Διεθνές Χορωδιακό Φεστιβάλ Προβηγκίας, Γαλλία (2024)",
          "Χρυσό Δίπλωμα στον διαγωνισμό Chorus Inside Poland, Βαρσοβία"
        ]
      },
      "Το ρεπερτόριό της περιλαμβάνει a cappella, θρησκευτική, λαϊκή, πατριωτική μου\u0002σική, και έργα σύγχρονων συνθετών. Έχει παρουσιάσει πρεμιέρες έργων των Aleksandra Brejza, Marcin Kopczyński και άλλων.",
      "🗓️ Ιδρύθηκε το 2000 με αφορμή τον εορτασμό του Έτους Bach — Χορωδία Δωματίου PRO ARTE",
      "🎼 Ρεπερτόριο: a cappella, θρησκευτική, λαϊκή, πατριωτική μουσική και έργα σύγχρονων συνθετών",
      "🏆 Διακρίσεις: 2 Χρυσά Διπλώματα (Chorus Inside Croatia 2023), 2ο Βραβείο (Διεθνές Χορωδιακό Φεστιβάλ Προβηγκίας 2024), Χρυσό Δίπλωμα (Chorus Inside Poland)",
      "🎶 Μαέστροι: Monika Wilkiewicz & Grażyna Wolter-Kaźmierczak — διακεκριμένες μαέστροι και πανεπιστημιακοί διδάσκοντες",
      "🇵🇱 Πολωνία",
      {
        "heading": "Χορωδία Cantus Atenas",
        "level": 2
      },
      "Σταμάτα Αττικής, Ελλάδα",
      {
        "img": "/img/CantusAntenas.webp"
      },
      "Διευθύνει: Δήμητρα Χανού",
      "Οι Χορωδίες Cantus Atenas λειτουργούν από το 2010, υπό τη διεύθυνση της μαέ\u0002στρου Δήμητρας Χανού, και πρόσφατα απέκτησαν νέα ονομασία. Έχουν συμμε\u0002τάσχει σε πολυάριθμες συναυλίες, αφιερώματα και φιλανθρωπικές εκδηλώσεις, καθώς και σε μεγάλα διεθνή φεστιβάλ χορωδιών, όπως το Διεθνές Χορωδιακό Φεστιβάλ Πρέβεζας, το Παγκόσμιο Φεστιβάλ Κοραής Θεσσαλονίκης, το Artiva Ναυπλίου, και το Antonio Vivaldi Καρπενησίου. Έχουν εμφανιστεί σε κορυφαίους χώρους, όπως το Βεάκειο Θέατρο, το Καλλι\u0002μάρμαρο, το Ηρώδειο και το Μέγαρο Μουσικής Αθηνών. Σημαντικές διακρίσεις περιλαμβάνουν: Αργυρό βραβείο (Jazz-Pop) στο Φεστιβάλ Καρπενησίου, τρεις αργυρές διακρίσεις στο Artiva Ναυπλίου, αργυρό και χάλκινο βραβείο στο Φεστι\u0002βάλ Μιούζικαλ Κοραής και χάλκινο βραβείο στο ελεύθερο πρόγραμμα του Δ.Χ.Φ. Πρέβεζας. Με πλούσιο ρεπερτόριο και αφοσιωμένη καθοδήγηση, οι Cantus Atenas συνδυ\u0002άζουν μουσική ποιότητα, πολυφωνική έκφραση και πολιτισμική εξωστρέφεια, αποτελώντας μια ξεχωριστή παρουσία στο σύγχρονο ελληνικό χορωδιακό τοπίο.",
      "🗓️ Λειτουργούν από το 2010 υπό τη διεύθυνση της μαέστρου Δήμητρας Χανού — πρόσφατα με νέα ονομασία",
      "🌍 Συναυλίες & φεστιβάλ: Διεθνές Φεστιβάλ Πρέβεζας, Παγκόσμιο Φεστιβάλ Κοραής, Artiva Ναυπλίου, Antonio Vivaldi Καρπενησίου",
      "🏆 Διακρίσεις: Αργυρό βραβείο (Jazz-Pop, Καρπενήσι), 3 Αργυρά (Artiva Ναυπλίου), Αργυρό & Χάλκινο (Φεστιβάλ Μιούζικαλ Κοραής), Χάλκινο (ΔΧΦ Πρέβεζας)",
      "🎼 Ρεπερτόριο: Πλούσιο και πολυφωνικό — μουσική ποιότητα και πολιτισμική εξωστρέφεια",
      "🇬🇷 Ελλάδα",
      {
        "heading": "Χορωδία του Tibães",
        "level": 2
      },
      "Μπράγκα, Πορτογαλία",
      {
        "img": "/img/Tibaes.webp"
      },
      "Διευθύνει: Alexandre Silva",
      "Η Coro de Tibães ιδρύθηκε στην κοινότητα Mire de Tibães στην Μπράγκα της Πορτογαλίας και εδρεύει στο ιστορικό Μοναστήρι São Martinho de Tibães – ένα από τα σημαντικότερα μοναστικά συγκροτήματα της χώρας. Η χο\u0002ρωδία δημιουργήθηκε με σκοπό την προώθηση της πνευματικής, πολιτιστικής και μουσικής κληρονομιάς της περιοχής μέσω της χορωδιακής μουσικής. Το ρεπερτόριό της εκτείνεται από την παλαιά εκκλησιαστική μουσική έως σύγ\u0002χρονα έργα, ενώ ιδιαίτερη έμφαση δίνεται στη μελέτη και παρουσίαση της πορ\u0002τογαλικής πολυφωνικής παράδοσης. Η χορωδία αποτελείται από ερασιτέχνες και επαγγελματίες χορωδούς που συνδέονται με πάθος για τη μουσική και την προσφορά στην κοινότητα. Έχει συμμετάσχει σε πλήθος εκδηλώσεων σε Πορτογαλία και εξωτερικό, και έχει εμφανιστεί σε φεστιβάλ, συναυλίες και λειτουργίες, συχνά στον επιβλητικό χώρο του μοναστηριού. Το 2025 επιλέχθηκε να εκπροσωπήσει την Πορτογαλία στο 43ο Διεθνές Χορωδιακό Φεστιβάλ Πρέβεζας, μεταφέροντας το πνεύμα της παρά\u0002δοσης και της μουσικής από τη Braga στην Ελλάδα.",
      "🗓️ Ιδρύθηκε στην κοινότητα Mire de Tibães, Μπράγκα, Πορτογαλία — εδρεύει στο ιστορικό Μοναστήρι São Martinho de Tibães",
      "🎼 Ρεπερτόριο: Από παλαιά εκκλησιαστική μουσική έως σύγχρονα έργα — έμφαση στην πορτογαλική πολυφωνική παράδοση",
      "🌍 Συναυλίες & φεστιβάλ: Εκδηλώσεις σε Πορτογαλία και εξωτερικό — συμμετοχή σε φεστιβάλ, συναυλίες και λειτουργίες",
      "👥 Μέλη: Ερασιτέχνες και επαγγελματίες χορωδοί, συνδεδεμένοι με πάθος για μουσική και προσφορά στην κοινότητα — εκπροσωπούν την Πορτογαλία στο 43ο Διεθνές Χορωδιακό Φεστιβάλ Πρέβεζας (2025)",
      "🇵🇹 Πορτογαλία",
      {
        "heading": "Χορωδία Δωματίου “Fermata”",
        "level": 2
      },
      "Σμύρνη, Τουρκία",
      {
        "img": "/img/Fermata.webp"
      },
      "Διευθύνει: Hasan Can İşgüden",
      "Η Fermata Chamber Choir ιδρύθηκε τον Δεκέμβριο του 2019 στη Σμύρνη από τον Hasan Can İşgüden και αποτελείται από 25 χορωδούς με εμπειρία σε πολυφω\u0002νικά σύνολα. Το ρεπερτόριό της καλύπτει από την Αναγέννηση μέχρι σύγχρο\u0002να έργα, με ιδιαίτερη έμφαση σε Τούρκους συνθέτες και τραγούδια σε πολλές γλώσσες. Μετά την πανδημία, το σύνολο επανήλθε δυναμικά, συμμετέχοντας σε φεστιβάλ όπως η Παγκόσμια Ημέρα Χορωδιακής Μουσικής, το Διεθνές Φεστιβάλ Πολυ\u0002φωνικών Χορωδιών Σμύρνης κ.ά. Παρουσίασαν θεματικά προγράμματα όπως το BİR (2022) και το DÖNGÜ (2024), συνδυάζοντας τη χορωδιακή με την εικαστι\u0002κή τέχνη, προσφέροντας στο κοινό μια πολυαισθητηριακή εμπειρία. Έχουν αποσπάσει βραβεία όπως “Μουσικότητα και Δυναμική” (2022), “Ομοιο\u0002γένεια και Χορωδιακός Ήχος” (2023) και “Ερμηνεία Σύγχρονου Έργου”. Το 2023 συμμετείχαν στο Παγκόσμιο Συμπόσιο Χορωδιακής Μουσικής στην Τουρκία, που διοργανώθηκε από το Υπουργείο Πολιτισμού και την IFCM. Ο Hasan Can İşgüden είναι τραγουδιστής όπερας, καθηγητής φωνητικής και μα\u0002έστρος με διδακτικό έργο στο Πανεπιστήμιο Dokuz Eylül και στο Πανεπιστήμιο Yaşar. Είναι μέλος του International Federation for Choral Music (IFCM) από το 2023.",
      "🗓️ Ιδρύθηκε το 2019 στη Σμύρνη από τον Hasan Can İşgüden — 25 έμπειροι χορωδοί",
      "🎼 Ρεπερτόριο: Από Αναγέννηση έως σύγχρονα έργα — έμφαση σε Τούρκους συνθέτες και πολυγλωσσικά τραγούδια",
      "🌍 Συναυλίες & φεστιβάλ: Παγκόσμια Ημέρα Χορωδιακής Μουσικής, Διεθνές Φεστιβάλ Πολυφωνικών Χορωδιών Σμύρνης, θεματικά προγράμματα BİR (2022) & DÖNGÜ (2024)",
      "🏆 Διακρίσεις: “Μουσικότητα και Δυναμική” (2022), “Ομοιογένεια και Χορωδιακός Ήχος” (2023), “Ερμηνεία Σύγχρονου Έργου” — συμμετοχή στο Παγκόσμιο Συμπόσιο Χορωδιακής Μουσικής (2023)",
      "🇹🇷 Τουρκία",
      {
        "heading": "Παιδική Χορωδία “Lastivka”",
        "level": 2
      },
      "Κίεβο, Ουκρανία",
      {
        "img": "/img/Lativka.webp"
      },
      "Διευθύνει: Oksana Ursatii",
      "Η Παιδική Χορωδία “Lastivka” (Χελιδόνι) ιδρύθηκε το 2005 από την Oksana Ursatii στο Σπίτι Δημιουργικής Απασχόλησης Παιδιών και Νέων της περιοχής Holosiivski του Κιέβου. Η χορωδία λειτουργεί ως χορωδιακό στούντιο και απο\u0002τελείται από τρεις ομάδες: την προπαρασκευαστική (4–5 ετών), την παιδική (6–10 ετών) και τη συναυλιακή χορωδία (10–18 ετών). Συνολικά, πάνω από 50 παιδιά φοιτούν υπό την καθοδήγηση τεσσάρων δασκάλων. Η “Lastivka” έχει διακριθεί σε δεκάδες διεθνείς διαγωνισμούς σε χώρες όπως Πολωνία, Γερμανία, Γαλλία, Ουγγαρία, Εσθονία, Ρουμανία, Βέλγιο και Ελλά\u0002δα, αποσπώντας χρυσά μετάλλια, πρώτα βραβεία και Grand Prix. Σημαντική στιγμή αποτέλεσε η συμμετοχή της στη UNICEF Παιδική Χορωδιακή Συνάντη\u0002ση στη Δρέσδη (2014) και το Διεθνές Φεστιβάλ Πρέβεζας, όπου η μαέστρος τιμήθηκε για την εκπαιδευτική της προσφορά. Το 2011 ονομάστηκε “Πρότυπο Καλλιτεχνικό Σύνολο” και το 2021 έλαβε τον τίτλο “Εθνικό Καλλιτεχνικό Συγκρότημα”. Το ρεπερτόριο της περιλαμβάνει έργα από όλες τις εποχές, θρησκευτική και κοσμική μουσική, σύγχρονη ουκρανική χορωδιακή δημιουργία και λαογραφία.",
      "🗓️ Ιδρύθηκε το 2005 στο Κίεβο από την Oksana Ursatii — πάνω από 50 παιδιά σε τρεις ομάδες ηλικιών",
      "🎼 Ρεπερτόριο: Θρησκευτική και κοσμική μουσική, σύγχρονη ουκρανική χορωδιακή δημιουργία και λαογραφία",
      "🏆 Διακρίσεις: Χρυσά μετάλλια, πρώτα βραβεία και Grand Prix σε διεθνείς διαγωνισμούς — UNICEF Χορωδιακή Συνάντηση Δρέσδης (2014)",
      "🎶 Τίτλοι: “Πρότυπο Καλλιτεχνικό Σύνολο” (2011) και “Εθνικό Καλλιτεχνικό Συγκρότημα” (2021)",
      "🇺🇦 Ουκρανία",
      {
        "heading": "Μικτή Χορωδία Πάργας",
        "level": 2
      },
      "Πάργα, Ελλάδα",
      {
        "img": "/img/PargaChoir.webp"
      },
      "Διευθύνει: Valentin Stefanov",
      "Η Μικτή Χορωδία Πάργας ιδρύθηκε τον Φεβρουάριο του 2016 από μία μικρή ομάδα φιλόμουσων κατοίκων της περιοχής. Το ρεπερτόριό της περιλαμβάνει κλασικά και έντεχνα έργα Ελλήνων και ξένων συνθετών. Η χορωδία έχει ενεργή συμμετοχή στην πολιτιστική ζωή της Πάργας, αναδεικνύοντας την αξία του χορωδιακού τραγουδιού και ενθαρρύνοντας τη συμμετοχή νέων μελών. Κάθε χρόνο διοργανώνει ανοιχτές συναυλίες, παρουσιάζοντας το έργο της στο κοινό. Έχει συμμετάσχει σε σημαντικές χορωδιακές εκδηλώσεις, όπως οι δύο φιλανθρωπικές συναυλίες με τη Συμφωνική Ορχήστρα Νέων Ελλάδος στη Θεσσαλονίκη (Νοέμβριος 2019 και Μάρτιος 2023). Τον Ιούνιο του 2019, συμμετείχε στη συναυλία-αφιέρωμα στο “Άξιον Εστί” του Μίκη Θεοδωράκη σε ποίηση Οδυσσέα Ελύτη, στο Αρχαίο Ωδείο της Νικόπολης. Τη χορωδία διευθύνει ο Valentin Stefanov.",
      "🗓️ Ιδρύθηκε το 2016 από φιλόμουσους κατοίκους της Πάργας — Μικτή Χορωδία",
      "🎼 Ρεπερτόριο: Κλασικά και έντεχνα έργα Ελλήνων και ξένων συνθετών",
      "🌍 Συναυλίες & εκδηλώσεις: Ανοιχτές συναυλίες, φιλανθρωπικές συναυλίες με Συμφωνική Ορχήστρα Νέων Ελλάδος, αφιέρωμα στο “Άξιον Εστί” (Αρχαίο Ωδείο Νικόπολης, 2019)",
      "🎶 Μαέστρος: Valentin Stefanov",
      "🇬🇷 Ελλάδα",
      {
        "heading": "BUMC Jazz Choir",
        "level": 2
      },
      "Κωνσταντινούπολη, Τουρκία",
      {
        "img": "/img/Bogazici.webp"
      },
      "Διευθύνει: Zülal Ekiz",
      "Η BUMC Jazz Choir (BÜMK Caz Korosu) ιδρύθηκε το 1994 στο πλαίσιο του Μου\u0002σικού Ομίλου του Πανεπιστημίου του Βοσπόρου (Boğaziçi University Music Club) με στόχο την ερμηνεία πολυφωνικών διασκευών κλασικών κομματιών της jazz. Από το 2001, το σύνολο επικεντρώνεται σε a cappella εκτελέσεις, και αποτελεί την πρώτη jazz χορωδία του είδους της στην Τουρκία. Έχει αποσπάσει σημαντικές διακρίσεις, όπως το 1ο βραβείο στην κατηγορία “Young Jazz” στο Διεθνές Φεστιβάλ Τζαζ Κωνσταντινούπολης (2008) και τρεις Χρυσές Διακρίσεις στους World Choir Games στη Σαοσίνγκ της Κίνας (2010). Έκτοτε, έχει πραγματοποιήσει δεκάδες συναυλίες στην Τουρκία και το εξωτερικό και έχει συμμετάσχει σε πολιτιστικές διοργανώσεις, με πιο πρόσφατη τη συμμε\u0002τοχή στο Benyamin Sönmez Classical Music Festival (2024) και στο BUMC Jazz Festival (2025). Η Zülal Ekiz, γεννημένη το 2002, είναι φοιτήτρια Ψυχολογίας στο Πανεπιστήμιο του Βοσπόρου και μουσικός με πολυετή εμπειρία στο πιάνο και τη φωνή. Ξεκίνησε στη Rock Choir του πανεπιστημίου και το 2023 εντάχθηκε ως άλτο στην BUMC Jazz Choir. Από τον Οκτώβριο του 2024, είναι μαέστρος του συνόλου και συνεχίζει σπουδές στη μουσική θεωρία.",
      "🗓️ Ιδρύθηκε το 1994 στο πλαίσιο του Μουσικού Ομίλου του Πανεπιστημίου του Βοσπόρου — πρώτη a cappella jazz χορωδία στην Τουρκία",
      "🏆 Διακρίσεις: 1ο βραβείο Young Jazz (Διεθνές Φεστιβάλ Κωνσταντινούπολης 2008), 3 Χρυσές Διακρίσεις (World Choir Games, Κίνα 2010)",
      "🌍 Συναυλίες: Πολιτιστικές διοργανώσεις Τουρκίας & εξωτερικού, Benyamin Sönmez Festival (2024), BUMC Jazz Festival (2025)",
      "🎶 Μαέστρος: Zülal Ekiz (από 2024) — άλτο, πιανίστρια & φοιτήτρια μουσικής θεωρίας",
      "🇹🇷 Τουρκία",
      {
        "heading": "Γυναικεία Χορωδία “Trimontium”",
        "level": 2
      },
      "Φιλιππούπολη, Βουλγαρία",
      {
        "img": "/img/Trimortium.webp"
      },
      "Διευθύνει: Vanya Atanasova",
      "Η Γυναικεία Χορωδία «Trimontium» ιδρύθηκε το 1965 στη Φιλιππούπολη και αποτελεί διαρκώς ενεργό φορέα πολιτισμού. Έχει συμμετάσχει σε φεστιβάλ και διαγωνισμούς σε όλη την Ευρώπη, αποσπώντας διεθνείς διακρίσεις. Το ρεπερτόριό της περιλαμβάνει έργα Βουλγάρων και ξένων συνθετών, με έμ\u0002φαση στη βουλγαρική παράδοση, την ορθόδοξη εκκλησιαστική μουσική και τις σύγχρονες διασκευές. Ξεχωρίζουν οι συμπράξεις με την Όπερα Φιλιππούπο\u0002λης στα έργα «Gloria» του Vivaldi και «Nabucco» του Verdi, καθώς και η εμφά\u0002νιση στο «Όνειρο Καλοκαιρινής Νύχτας» του Mendelssohn με τη Συμφωνική Ορχήστρα Νέων της Βρέμης, στο πλαίσιο της Πολιτιστικής Πρωτεύουσας της Ευρώπης – Plovdiv 2019. Από το 2010 τη διεύθυνση έχει η Vanya Atanasova, διακεκριμένη μαέστρος και απόφοιτος της Ακαδημίας Τεχνών Φιλιππούπολης, η οποία έχει τιμηθεί από τον Δήμο Φιλιππούπολης και το Υπουργείο Παιδείας της Βουλγαρίας για τη συμβολή της στην καλλιτεχνική δημιουργία.",
      "🗓️ Ιδρύθηκε το 1965 στη Φιλιππούπολη — Γυναικεία Χορωδία «Trimontium»",
      "🎼 Ρεπερτόριο: Έργα Βουλγάρων και ξένων συνθετών — βουλγαρική παράδοση, ορθόδοξη εκκλησιαστική μουσική, σύγχρονες διασκευές",
      "🏆 Διακρίσεις: Χάλκινο Μετάλλιο (Βάρνα 1989), Α΄ Βραβείο (Παραλία Κατερίνης 2015), Αργυρό Μετάλλιο (Πρέβεζα 2018)",
      "🎶 Μαέστρος: Vanya Atanasova από το 2010 — διακεκριμένη μαέστρος, τιμημένη από Δήμο Φιλιππούπολης και Υπουργείο Παιδείας Βουλγαρίας",
      "🇧🇬 Βουλγαρία",
      {
        "heading": "Χορωδία Gagarin – Saint Louis College of Music",
        "level": 2
      },
      "Ρώμη, Ιταλία",
      {
        "img": "/img/gagarin.webp"
      },
      "Διευθύνει: Jacopo Tarchi",
      "Το φωνητικό σύνολο Coro Gagarin δημιουργήθηκε τον Ιανουάριο του 2024 από τον Jacopo Tarchi, στο Saint Louis College of Music στη Ρώμη. Η ίδρυση της χορωδίας εντάσσεται στο πλαίσιο της προσωπικής του έρευνας για την ιταλική παραδοσιακή μουσική και αποσκοπεί στην ανάδειξη της πολιτιστικής συνέχειας της Ιταλίας μέσα από έναν διάλογο μεταξύ παλαιού και σύγχρονου. Η χορωδία λειτουργεί ως καλλιτεχνικός φορέας που υπηρετεί με σεβασμό την ιταλική λαϊκή κληρονομιά, ερμηνεύοντας παραδοσιακά τραγούδια είτε με αυ\u0002θεντικό τρόπο είτε μέσω πρωτότυπων ενορχηστρώσεων. Το ρεπερτόριό της χαρακτηρίζεται από ποικιλομορφία, επιλέγοντας συνθέσεις που μεταφέρουν τον πλούτο των τοπικών παραδόσεων της Ιταλίας, χωρίς να αλλοιώνεται ο λαϊκός χαρακτήρας τους. Ο Jacopo Tarchi, φοιτητής διεύθυνσης και ενορχήστρωσης στο Saint Louis, είναι επίσης μέλος της επαγγελματικής χορωδίας Flowing Chords, ενώ έχει ήδη εμπειρία ως ερμηνευτής και leader σε συναυλιακές δράσεις στη Ρώμη. Με πάθος για τη φωνητική αρμονία και βαθιά κατανόηση της παραδοσιακής μουσικής, καθοδηγεί το Coro Gagarin με μουσικότητα και καλλιτεχνικό όραμα.",
      "🗓️ Ιδρύθηκε τον Ιανουάριο του 2024 από τον Jacopo Tarchi — Saint Louis College of Music, Ρώμη",
      "🎼 Ρεπερτόριο: Παραδοσιακά ιταλικά τραγούδια — αυθεντικές ερμηνείες και πρωτότυπες ενορχηστρώσεις",
      "🌍 Στόχος: Ανάδειξη της πολιτιστικής συνέχειας της Ιταλίας — διάλογος μεταξύ παλαιού και σύγχρονου",
      "🎶 Μαέστρος: Jacopo Tarchi — φοιτητής διεύθυνσης και ενορχήστρωσης, μέλος της επαγγελματικής χορωδίας Flowing Chords, με εμπειρία σε συναυλιακές δράσεις στη Ρώμη",
      "🇮🇹 Ιταλία",
      {
        "heading": "Χορωδία Shiran, Ramat Hasharon",
        "level": 2
      },
      {
        "img": "/img/Shiran.webp"
      },
      "Διευθύνει: Doron Ben-Ami",
      "Η Χορωδία Shiran ιδρύθηκε το 1979 από τον αείμνηστο συνθέτη και μαέστρο Yaacov Hollander, υπό τη διεύθυνση του οποίου παρέμεινε έως το 1997. Η χορωδία αριθμεί σήμερα 40 μέλη, αρκετά εκ των οποίων συμμετέχουν από την ίδρυσή της. Ακολούθησαν οι μαέστροι Doron Shenkar (1997–2002) και Dudi Zeba (2002–2021), ενώ από το 2021 τη διεύθυνση έχει αναλάβει ο Doron Ben-Ami. Το ρεπερτόριό της εστιάζει στο ισραηλινό τραγούδι, με τακτικές εμφανίσεις σε συναυλίες, φεστιβάλ και τηλεοπτικές ή ραδιοφωνικές παραγωγές. Έχει συνεργαστεί με την Ισραηλινή Φιλαρμονική Ορχήστρα και τη Ra’anana Symphonette, ενώ έχει πραγματοποιήσει περιοδείες σε χώρες όπως οι Γερμανία, Ιταλία, Πορτογαλία, Τσεχία, Ουγγαρία, Πολωνία, Ρωσία, Ιρλανδία, Ελλάδα, Λετονία και Ισπανία. Έχει αποσπάσει χρυσό μετάλλιο στη Γερμανία, καθώς και αργυρά στο Ισραήλ, στη Ρίγα (2017) και στην Καλαμάτα (2019). Ο μαέστρος Doron Ben-Ami είναι τραγουδιστής, μουσικός και ιστορικός, με ευρεία δράση στη διεύθυνση φωνητικών συνόλων. Είναι ιδρυτής του επιτυχημένου a cappella συνόλου «One and a Half Quintets», συνδυάζοντας την καλλιτεχνική δημιουργία με την ακαδημαϊκή διδασκαλία",
      "🗓️ Ιδρύθηκε το 1979 από τον Yaacov Hollander — σήμερα 40 μέλη με μακροχρόνια συμμετοχή",
      "🎼 Ρεπερτόριο: Ισραηλινό τραγούδι — τακτικές εμφανίσεις σε συναυλίες, φεστιβάλ και μέσα ενημέρωσης",
      "🌍 Συναυλίες & περιοδείες: Συνεργασίες με Ισραηλινή Φιλαρμονική & Ra’anana Symphonette, περιοδείες σε Γερμανία, Ιταλία, Πορτογαλία, Τσεχία, Ουγγαρία, Πολωνία, Ρωσία, Ιρλανδία, Ελλάδα, Λετονία, Ισπανία",
      "🏆 Διακρίσεις: Χρυσό μετάλλιο (Γερμανία), αργυρά μετάλλια στο Ισραήλ, Ρίγα (2017) και Καλαμάτα (2019) — Μαέστρος Doron Ben-Ami, ιδρυτής a cappella συνόλου «One and a Half Quintets»",
      "ΣΥΝΔΙΟΡΓΑΝΩΣΗ",
      "CO-ORGANISERS",
      {
        "img": "/img/logo_dimosprevezas.webp"
      },
      "Δήμος Πρέβεζας",
      {
        "img": "/img/perifereiaipeirou.webp"
      },
      "Περιφέρεια Ηπείρου",
      "ΜΕ ΤΗΝ ΥΠΟΣΤΗΡΙΞΗ",
      "SUPPORTED BY",
      {
        "img": "/img/parga_logo.webp"
      },
      "Δήμος Πάργας",
      "ΜΕ ΤΗ ΣΥΜΠΑΡΑΣΤΑΣΗ",
      "WITH THE ASSISTANCE",
      {
        "img": "/img/logo-politismou.webp"
      },
      "Εφορεία Αρχαιοτήτων Πρέβεζας",
      {
        "img": "/img/ieramitropoli.webp"
      },
      "Ιερά Μητρόπολη Νικοπόλεως",
      "ΜΕ ΤΗΝ ΑΡΩΓΗ",
      "WITH THE AID",
      {
        "img": "/img/istoriko.webp"
      },
      "Ιστορικό Κέντρο Πρεβέζης",
      {
        "img": "/img/mousikosxoleio.webp"
      },
      "Μουσικό Σχολείο Πρεβέζης",
      {
        "img": "/img/logo-politismou.webp"
      },
      "Πνευματικό Κέντρο Πρεβέζας",
      {
        "img": "/img/commandos.webp"
      },
      "Εθελοντές Διασώστες",
      {
        "narrow": 8
      },
      {
        "heading": "Εισαγωγή",
        "level": 3,
        "align": "center"
      },
      "Το Διεθνές Χορωδιακό Φεστιβάλ Πρέβεζας είναι ένας θεσμός υψηλής καλλιτεχνικής ποιότητας, τόσο στον ελληνικό όσο και στον διεθνή χορωδιακό χώρο. Πάνω από 400 χορωδίες από όλο τον κόσμο έχουν ανέβει στη σκηνή του, ενώ μεγάλες προσωπικότητες έχουν κοσμήσει με την παρουσία τους τις εκδηλώσεις του, οι οποίοι αποτελούν εχέγγυο της καλλιτεχνικής αξίας του φεστιβάλ, λειτουργώντας ως εγγυητές της αξιοπιστίας των διαδικασιών του.",
      {
        "heading": "Συμμετοχή",
        "level": 3,
        "align": "center"
      },
      "Στο φεστιβάλ δύνανται να συμμετέχουν όλων των ειδών χορωδίες. Δουλεύοντας στην κατεύθυνση της μεγαλύτερης εξάπλωσής του παγκοσμίως, θα θέλαμε να σας ενημερώσουμε ότι όλοι θα ανακαλύψετε έναν ελκυστικό προορισμό που καταφέρνει να συνδυάσει τόσο υψηλή καλλιτεχνική αξία και ποιότητα, όσο και τα πλεονεκτήματα μιας όμορφης περιοδείας, καθώς η περιοχή μας είναι γεμάτη αρχαιολογικών χώρων της Αρχαίας Ελληνικής περιόδου και περιοχών ιδιαίτερου φυσικού κάλλους, επίσης. Άλλωστε, η διαμονή στην Πρέβεζα θα μπορούσε να είναι μια ευκαιρία τόσο για ημερήσιες εκδρομές στη γύρω περιοχή όσο και για εκδρομές στην ευρύτερη περιοχή του νομού μας.",
      {
        "heading": "Διαδικασίες",
        "level": 3,
        "align": "center"
      },
      "Με τη συμμετοχή στο φεστιβάλ δίνεται η ευκαιρία στις χορωδίες να παρουσιάσουν το πρόγραμμά τους σε διάφορα είδη κοινού, καθώς και σε διάφορους συναυλιακούς χώρους. Επίσης, οι χορωδίες είναι ελεύθερες να οργανώσουν το χρόνο τους στη διάρκεια της παραμονής τους στην Πρέβεζα κατά το συμφερότερο τρόπο, ενημερώνοντας απλά την Οργανωτική Επιτροπή, προκειμένου να τις βοηθήσει στη σύνταξη ενός καλά δομημένου προγράμματος παρουσιών στις διάφορες συναυλίες, ενώ δίδεται και η δυνατότητα πραγματοποίησης συναυλιών και σε άλλες πόλεις ή τοποθεσίες στην ευρύτερη μας περιφέρεια.",
      {
        "heading": "Χρονοδιάγραμμα",
        "level": 3,
        "align": "center"
      },
      "Ο τόπος και η ώρα των συναυλιών θα καθοριστεί από την Οργανωτική Επιτροπή που θα επιλέξει και ποιες χορωδίες θα συμμετέχουν σε κάθε συναυλία. Κομμάτια επιλογής κάθε χορωδίας (κατά προτίμηση θρησκευτικά ή παραδοσιακά έργα) θα ερμηνευτούν «a cappella» μέσα σε 10-15 λεπτά.",
      {
        "heading": "Διαδικασία Αίτησης",
        "level": 3,
        "align": "center"
      },
      {
        "list": [
          "Κάθε χορωδία υποχρεούται να καταθέσει το αργότερο μέχρι την 1η Μαΐου 2025:",
          "Ένα πλήρως λεπτομερές έντυπο αίτησης (το οποίο επισυνάπτεται).",
          "Μια πρόσφατη εγγραφή της χορωδίας με περίπου επτά αρχεία MP3, σε CD ή που θα σταλούν με email.",
          "Λεπτομέρειες του ρεπερτορίου",
          "Μια σύντομη ιστορία της χορωδίας και του μαέστρου που αναφέρει τις δραστηριότητες και τα επιτεύγματα (Αγγλικό Κείμενο, 250 λέξεις).",
          "Μια πρόσφατη φωτογραφία (κατάλληλη για δημοσίευση) της χορωδίας και του μαέστρου.",
          "Μια λίστα με τα ονόματα και τις διευθύνσεις των μελών της χορωδίας που δεν κατέχουν διαβατήρια της ΕΕ."
        ],
        "align": "center"
      },
      {
        "heading": "Όροι Συμμετοχής",
        "level": 3,
        "align": "center"
      },
      {
        "list": [
          "Η ημερομηνία λήξης υποβολής ολοκληρωμένων αιτήσεων είναι η 1η Μαΐου 2025.",
          "Μόλις ληφθούν τα κατάλληλα υλικά, θα γίνει αξιολόγηση και η χορωδία θα ενημερωθεί εάν θα επιλεγεί να συμμετάσχει ή όχι",
          "Το τέλος εγγραφής και συμμετοχής (μείον οποιεσδήποτε τραπεζικές χρεώσεις που προκύπτουν) θα επιστραφεί εάν μια χορωδία δεν επιλεγεί να συμμετάσχει στο φεστιβάλ.",
          "Οποιαδήποτε επιλεγμένη χορωδία που αποσύρεται από τον διαγωνισμό δεν δικαιούται επιστροφής του τέλους εγγραφής.",
          "Είναι παράνομο να εκτελείται μουσική που έχει αναπαραχθεί παράνομα. Εάν μια χορωδία το κάνει, το φεστιβάλ δεν φέρει καμία ευθύνη για οποιαδήποτε ενέργεια που αναλαμβάνουν οι εκδότες.",
          "Η Οργανωτική Επιτροπή δεν φέρει καμία νομική ευθύνη για οτιδήποτε αφορά τη συμμετοχή μιας χορωδίας στο φεστιβάλ.",
          "Το φεστιβάλ δεν φέρει καμία ευθύνη ή υποχρέωση για τα έξοδα διαμονής και διατροφής που επιβαρύνουν τη χορωδία.",
          "Το φεστιβάλ δεν φέρει καμία ευθύνη για οποιοδήποτε έξοδο που καταβάλλει οποιαδήποτε χορωδία ή ατομικό μέλος της συμμετέχοντας στο φεστιβάλ.",
          "Η συμμετοχή στο φεστιβάλ συνεπάγεται με αποδοχή όλων των παραπάνω κανόνων και κανονισμών"
        ],
        "align": "center"
      },
      {
        "heading": "Κόστος Εγγραφής Φεστιβάλ",
        "level": 3,
        "align": "center"
      },
      "Οι επιλεγμένες χορωδίες, μετά την αποδοχή της συμμετοχής τους από την Οργανωτική Επιτροπή, θα πρέπει να καταβάλουν προκαταβολή 200,00 € (δεν επιστρέφεται) σαν τέλη εγγραφής. Στη συνέχεια – όχι μετά τις 15 Μαΐου 2025 – θα σας ζητηθεί να πληρώσετε 35,00 € για κάθε μέλος της χορωδίας, συμπεριλαμβανομένου του μαέστρου, του πιανίστα/μουσικών και των συνοδών (η χρέωση δεν περιλαμβάνει δωμάτιο και διατροφή). Αυτό περιλαμβάνει τα τέλη συμμετοχής για το φεστιβάλ. Παρακαλούμε αφαιρέστε την κατάθεση των 200,00 € που έχει ήδη καταβληθεί από τη συνολική χρέωση πριν από την πληρωμή του υπολοίπου.",
      {
        "list": [
          "Όλο το παραπάνω υλικό πρέπει να αποσταλεί στην ακόλουθη διεύθυνση:",
          "Χορωδία Πρέβεζας «Αρμονία»",
          "Χρ. Κοντού και Εθν. Αντιστάσεως 1 – Ταχ. Θυρίδα 29",
          "48100 Πρέβεζα"
        ],
        "align": "center"
      },
      {
        "list": [
          "Το κόστος εγγραφής ταχυδρομείται στη διεύθυνση του φεστιβάλ ή μεταφέρεται στον παρακάτω λογαριασμό:",
          "ΕΘΝΙΚΗ ΤΡΑΠΕΖΑ",
          "Χορωδία \"Αρμονία\" Πρέβεζας",
          "Αριθμός Λογαριασμού: 448/480188-16",
          "Κωδικός Swift - Bic: ETHNGRAA",
          "IBAN: GR 7201 1044 8000 0044 8480 18816"
        ],
        "align": "center"
      },
      {
        "heading": "Κόστος Ταξιδιού:",
        "level": 6,
        "align": "center"
      },
      "Το φεστιβάλ δε συμβάλλει στα ταξιδιωτικά έξοδα ενός χορωδιακού συνόλου προς και από την Πρέβεζα.",
      {
        "heading": "Διαμονή, Φαγητό & Μεταφορά",
        "level": 3,
        "align": "center"
      },
      "Κάθε χορωδία είναι υπεύθυνη για όλα τα θέματα που σχετίζονται με την οργάνωση, κράτηση και πληρωμή όλων των διαμονών και γευμάτων κατά τη διαμονή τους στην Πρέβεζα. Σε όλες τις χορωδίες που επιλέγονται για να συμμετάσχουν στο φεστιβάλ μας θα παρέχεται μια πλήρης λίστα με προτεινόμενες επιλογές διαμονής σε διάφορα επίπεδα τιμών (συμπεριλαμβανομένων ξενοδοχείων, ξενώνων και εστιατορίων). Το φεστιβάλ δεν ευθύνεται για οποιαδήποτε προβλήματα κράτησης που ενδεχομένως προκύψουν. Παρόλο που η Πρέβεζα ανήκει στην επικράτεια της Ελληνικής χερσονήσου, έχει νησιωτικό χαρακτήρα. Και επειδή διαθέτει πληθώρα ειδών τουριστικών υποδομών, αποτελεί ιδανικό προορισμό για ανθρώπους με πολύ διαφορετικά οικονομικά υπόβαθρα.",
      {
        "heading": "Ένα καλό παράδειγμα για να εκτιμήσετε τα έξοδά σας:",
        "level": 5,
        "align": "center"
      },
      "Για να υπολογίσετε τα έξοδα, σας ενημερώνουμε ότι ένα δίκλινο δωμάτιο σε ένα καλό ξενοδοχείο στην Πρέβεζα κοστίζει περίπου €65-70. Έτσι, υπολογίστε το κόστος ανά άτομο περίπου €30-35 ανά διανυκτέρευση, δηλαδή, για 4 διανυκτερεύσεις περίπου €120-140 ανά άτομο. (Περιλαμβάνεται πρωινό). Για 2 πλήρεις γεύματα (μεσημεριανό - δείπνο) υπολογίστε 25 - 30€ ανά άτομο, έτσι για 4 ημέρες διατροφής υπολογίστε περίπου 100-120€ ανά άτομο.",
      {
        "heading": "Λεωφορείο για 50 άτομα για μετακινήσεις εντός της Πρέβεζας €150 ανά μετακίνηση οπότε €3-5 ανά άτομο. Τιμή €20 για όλες τις ημέρες. Συνεπώς, συνολικά:",
        "level": 5,
        "align": "center"
      },
      {
        "list": [
          "Διαμονή σε ξενοδοχείο €120 - 140 ανά άτομο",
          "Φαγητό €100 - 120 ανά άτομο",
          "Μεταφορά €20 ανά άτομο",
          "Συμμετοχή στο φεστιβάλ €35 ανά άτομο",
          "**Σύνολο από 275 – 315€ το κόστος για μια πλήρη παραμονή ανά άτομο**"
        ],
        "align": "center"
      },
      {
        "p": "Υπολογίστε τουλάχιστον €50 λιγότερα σε περίπτωση διαμονής σε ενοικιαζόμενα δωμάτια ή διαμερίσματα. Φυσικά επικοινωνείτε απευθείας με τις τουριστικές εταιρείες και μπορείτε να πάρετε πολύ καλύτερες τιμές εάν το κάνετε το συντομότερο δυνατόν.\nΦυσικά, θα υπολογίσετε τα αεροπορικά σας εισιτήρια και τις μεταφορές από τα αεροδρόμια.",
        "align": "center"
      },
      {
        "heading": "Πώς μπορείτε να έρθετε εδώ:",
        "level": 3,
        "align": "center"
      },
      {
        "list": [
          "**Με λεωφορείο**: Η Πρέβεζα είναι 370 χιλιόμετρα μακριά από την Αθήνα (περίπου 5 ώρες μετάβαση), η οποία είναι η πρωτεύουσα της Ελλάδας, και 350 χιλιόμετρα από τη Θεσσαλονίκη (περίπου 5 ώρες μετάβαση).",
          "**Αεροπορικές εταιρείες**: Από την Αθήνα (ATH) στο Ακτίο (PVK) - (1 ώρα και 5 λεπτά).",
          "**Το Αεροδρόμιο Ακτίου** βρίσκεται 3 χιλιόμετρα νότια της Πρέβεζας, δυτική Ελλάδα, κοντά στο νησί της Λευκάδας (περίπου 15χλμ), συνδεδεμένο με ένα τούνελ. Λεωφορεία εξυπηρετούν την Πρέβεζα και τη Λευκάδα. Το ταξί μέχρι την Πρέβεζα θα πρέπει να κοστίζει περίπου € 20,00. Οι εγκαταστάσεις περιλαμβάνουν 3 μπαρ / καφετέριες, κατάστημα duty free και ένα ΑΤΜ. Κάθε χρόνο ένας σημαντικός αριθμός τσάρτερ πτήσεων (δείτε τη λίστα στο https://www.pvk-airport.gr/en/airline-list) έχουν οργανωθεί από διάφορους ταξιδιωτικούς πράκτορες.",
          "**Θαλάσσιες συγκοινωνίες**: Ο πλησιέστερος λιμένας είναι αυτός της Ηγουμενίτσας, που απέχει 85 χιλιόμετρα από την Πρέβεζα και πρέπει να σημειωθεί ότι έχει δρομολόγια προς και από την Ιταλία καθημερινά (Μπρίντιζι, Μπάρι, Ανκόνα, Τρίεστε). Θα πρέπει να έρθετε με λεωφορείο."
        ],
        "align": "center"
      },
      {
        "heading": "Για οποιαδήποτε περαιτέρω πληροφορία, παρακαλούμε επικοινωνήστε μαζί μας στα παρακάτω:",
        "level": 4,
        "align": "center"
      },
      {
        "heading": "prevezachoralfestival@gmail.com",
        "level": 4,
        "align": "center"
      },
      {
        "heading": "armonia4@otenet.gr",
        "level": 4,
        "align": "center"
      },
      {
        "list": [
          "0030 2682 0 24915",
          "0030 2682 0 29852",
          "0030 6977 1 32107"
        ],
        "align": "center"
      },
      {
        "heading": "Επιλογή",
        "level": 3,
        "align": "center"
      },
      "Θα ληφθούν υπόψη μόνο οι αιτήσεις που περιλαμβάνουν όλα τα απαιτούμενα στοιχεία λεπτομερώς όπως αναφέρονται στη Διαδικασία Υποβολής Αιτήσεων. Τα χορωδιακά σχήματα επιλέγονται με βάση το υλικό της αίτησής τους. Λαμβάνεται σοβαρά υπ'όψιν το ρεπερτόριο και η ποιότητα της εκτέλεσης που παρουσιάζεται στο CD ακρόασης που υποβάλλεται με την αίτηση.",
      {
        "heading": "Μετάδοση, Εγγραφή & Φωτογραφικά Δικαιώματα",
        "level": 3,
        "align": "center"
      },
      {
        "heading": "Είναι όρος συμμετοχής ότι οποιαδήποτε χορωδία συμφωνεί ότι:",
        "level": 5,
        "align": "center"
      },
      {
        "list": [
          "Κάθε εμφάνιση που θα πραγματοποιεί κατά τη διάρκεια του φεστιβάλ μπορεί να φωτογραφηθεί, να μεταδοθεί ζωντανά, ή να εγγραφεί για μετέπειτα αναπαραγωγή, ή για μετάδοση σε ραδιόφωνο ή τηλεόραση χωρίς αμοιβή στη χορωδία (ή στη λαϊκή χορευτική ομάδα και την ορχήστρα).",
          "Όλα τα δικαιώματα μετάδοσης και φωτογράφισης κάθε εμφάνισης στο φεστιβάλ θα ανήκουν στο φεστιβάλ, το οποίο θα είναι ελεύθερο να τα διαθέτει ή να τα χρησιμοποιεί σε προωθητικά υλικά όπως βλέπει καλύτερα.",
          "Κάθε εμφάνιση που πραγματοποιείται κατά τη διάρκεια του φεστιβάλ (χωρίς αμοιβή) μπορεί να εγγραφεί και το φεστιβάλ θα έχει το δικαίωμα κατοχής οποιασδήποτε τέτοιας εγγραφής και θα έχει επιπλέον το δικαίωμα να αναπαράγει οποιαδήποτε τέτοια εγγραφή και να πωλεί, να ενοικιάζει, να προσφέρει ή να εκθέτει προς πώληση ή ενοικίαση, να διανέμει ή να διαθέτει κατά οποιονδήποτε τρόπο οποιαδήποτε εγγραφή ή αναπαραγωγή εγγραφής οποιασδήποτε τέτοιας εμφάνισης όπως κρίνει σκόπιμο."
        ],
        "align": "center"
      },
      {
        "anchor": "comp-cat"
      },
      {
        "narrow": 0
      }
    ],
  },
  aside: {
    en: [
      {
        "list": [
          "[Competition's Categories](#comp-cat)",
          "[International Jury Committee I.J.C.](#ijc-info)",
          "[Medals](#medals-info)",
          "[Application Procedure](#app-proc)",
          "[Conditions of Participation](#conditions)"
        ]
      },
      {
        "heading": "Organising Committee:",
        "level": 4
      },
      {
        "heading": "Kosmas Koronaios, President",
        "level": 6
      },
      {
        "heading": "Ioanna Kotsi, Vice President",
        "level": 6
      },
      {
        "heading": "Anna-Ypapanti Soldatou, General Secretary",
        "level": 6
      },
      {
        "heading": "Panagiotis Galanis, Treasurer",
        "level": 6
      },
      {
        "heading": "Silvia Soldatou, Commissioner",
        "level": 6
      },
      {
        "heading": "Varvara Tasi, Commissioner",
        "level": 6
      },
      {
        "heading": "Ioannis Tsandiris, Commissioner",
        "level": 6
      }
    ],
    el: [
      {
        "list": [
          "[Κατηγορίες Διαγωνισμού](#comp-cat)",
          "[Διεθνές Κριτική Επιτροπή I.J.C.](#ijc-info)",
          "[Μετάλλια](#medals-info)",
          "[Διαδικασία Εγγραφής](#app-proc)",
          "[Όροι Συμμετοχής](#conditions)"
        ]
      },
      {
        "heading": "Οργανωτική Επιτροπή:",
        "level": 4
      },
      {
        "heading": "Κοσμάς Κορωναίος, Πρόεδρος",
        "level": 6
      },
      {
        "heading": "Ιωάννα Κώτση, Αντιπρόεδρος",
        "level": 6
      },
      {
        "heading": "Άννα-Υπαπαντή Σολδάτου, Γενική Γραμματέας",
        "level": 6
      },
      {
        "heading": "Παναγιώτης Γαλάνης, Ταμίας",
        "level": 6
      },
      {
        "heading": "Σύλβια Σολδάτου, Επίτροπος",
        "level": 6
      },
      {
        "heading": "Βαρβάρα Τάση, Επίτροπος",
        "level": 6
      },
      {
        "heading": "Ιωάννης Τσαντίρης, Επίτροπος",
        "level": 6
      }
    ],
  },
};

export default festivalSchema.parse(data);
