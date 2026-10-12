import { festivalSchema, type FestivalInput } from "../types";
import { person } from "../people";

const data: FestivalInput = {
  slug: "2024",
  year: 2024,
  editionNumber: 42,
  competitionEditionNumber: 28,
  isCurrentEdition: false,
  // Listing/meta only -- the page itself shows the dates as printed in `content`.
  dates: {
    en: "1–7 July 2024",
    el: "1–7 Ιουλίου 2024",
  },
  poster: "/img/poster-2024.webp",
  title: {
    en: "42nd International Choral Festival of Preveza",
    el: "42ο Διεθνές Χορωδιακό Φεστιβάλ Πρέβεζας",
  },
  intro: { en: [], el: [] },
  content: {
    en: [
      {
        "list": [
          "1 - 7 July 2024"
        ]
      },
      {
        "img": "/img/poster-2024.webp"
      },
      "Mark your calendar for July 2024 to be part of the 42nd International Choral Festival of Preveza. The festival will be held from 1st to 7th of July 2024 in Preveza. The International Choral Festival of Preveza counts 42 interesting and exciting years of high-quality choral music, challenged by excellent choirs which are continuously raising its standards and a great variety of intercultural experiences with participants from all over the world. The festival includes numerous concerts given at idyllic locations of the area like the seaside fortress of Preveza and the historic Ancient Auditorium of Nikopolis “Odeon”. For visiting choirs, Preveza provides an opportunity not only to perform; but also, to experience some of the world’s best choral music, soak up the atmosphere and enjoy the mingling, singing and fun, and explore the picturesque city of Preveza and its surrounds. The festival will be managed by the Choral Society \"Armonia\" of Preveza, under the patronage of the city of Preveza. Choirs are eligible to join the festival as non-competitive choirs participating in all the performances of the festival.",
      "It will be a great honour and joy for us if you come to our beautiful town and take part in the choral competition. We invite you to find out by yourselves that Preveza is a charming and hospitable town full of historical sites and locations of natural beauty and experience the magic of choral music.\n\nClosing date for receipt of completed applications is 1 May 2024.",
      {
        "wide": true
      },
      {
        "heading": "International Jury Committee I.J.C.",
        "level": 2,
        "align": "center"
      },
      ...person("graeme-langager", "en", {level: 3}),
      ...person("pawel-lukaszewski", "en", {level: 3,align: "right"}),
      {
        "heading": "Garo Avessian",
        "level": 3
      },
      {
        "img": "/img/GaroAvessian.webp",
        "layout": "side"
      },
      "He was born in Beirut. He has been conductor and composer of mostly chamber works that have been performed in Asia, Europe and the Middle East and he has worked with great choirs and orchestras as well as renowned soloists in numerous prestigious concerts both in his country and abroad. He studied the piano from 1990 – 2000, as well as composition, harmony, theories and orchestration in Beirut. At Yerevan State Conservatory named after Gomidas, he studied Composition and Conducting, achieving a Master’s Degree in both subjects. His Honors include Third Prize in Lazarus Saryan Vocal Competition in Yerevan 2004, for “Three Kuchak Hayren” and the Presidential Award. More recently, he was a finalist in the Film Music Category of the Young Composers’ Competition of the Narekatsi Art Institute in Yerevan, in 2006, for “Embers of the Sun”. Since 2008, he has been the conductor of the Lebanese Philharmonic Orchestra as well as the Artistic Director and Conductor of Armenian Evangelical ARMISS Choir. Also, he is the founder and the principal conductor of Ganachian College Chamber Orchestra since 2009 and a part-time lecturer at Beirut Arab University since 2010. He is a member of The Professional Musicians Syndicate in Lebanon since 2011 and an Associate Professor at Lebanese National Higher Conservatory of Music in Conducting, Orchestration and Harmony, since 2008.",
      ...person("eduardo-garcia-novelli", "en", {level: 3,align: "right"}),
      {
        "heading": "Masis Aram Gozbek",
        "level": 3
      },
      {
        "img": "/img/MasisAramGozbek.webp",
        "layout": "side"
      },
      "Born in 1987 in Istanbul, Turkey, he has shown his music talent since he was a student in high school. He began studying composition in 2008 and still attends lessons and seminars concerning conducting. He has travelled around the world directing prestigious choirs and orchestras, but also being a member of jury committees. His compositions have been awarded gold medals in several international Composition Competitions worldwide. He has been awarded the Yildiz Technical University “Rectorship Award” and “The Most Successful Young Person” award at the Turkey Finals of 19TOYP (Ten Outstanding Young Persons) in 2013. He launched the KOROHANE (Choir-House) Platform so as to bring people who are devoted to choral music from all over Turkey together. Except for being the founder and artistic director of Bogazici Jazz Choir, Bogazici Youth Choir and MAGMA Choirs, he also works with famous singers and bands. Furthermore, he often leads workshops and seminars about choral music in several schools and associations both in different cities of Turkey and abroad. He has been a trustee of Yucel Cultural Foundation since 2018.",
      {
        "narrow": 8
      },
      {
        "heading": "Participating Choirs",
        "level": 1,
        "align": "center"
      },
      {
        "heading": "Choir “Olgarythmos”, Athens, Greece",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/Ολγάρυθμος.webp"
      },
      "It is a newly formed vocal ensemble. It was created by amateur singers united by their love and passion for polyphonic singing. The choristers discover their vocal identity and different ways of expressing themselves artistically by experimenting on a wide-range repertoire. It firstly performed at the competitive Festival of Nafpaktos singing works of Greek composers and it achieved the second place and a bronze medal. The choir is directed by Olga Alexopoulou, while it is accompanied on the piano by Myrto Akrivou.",
      {
        "heading": "Moraitis School Adult Choir",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/Μωραΐτη.webp"
      },
      "Moraitis School Adult Choir is a community choir which was founded in January 2019 by its conductor Vaia Papayiannopoulou and consists of 42 members. It aims at integrating each member of the community, interaction and socialisation of the choir members and, last but not least, music performance. These goals are fulfilled through choral singing, body percussion and engagement of the whole personality of the choristers. Musical skills such as sight reading are not required. So far, the choir has participated in concerts, choir festivals and meetings all over Greece. It is permanently situated in Moraitis School in Athens.",
      {
        "heading": "A Capella Gramofon, Izmir, Turkey",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/gramofon.webp"
      },
      "A Capella Gramofon was founded in 2012 by the choir conductor-composer Türker Barmanbek. It has won 24 awards in 17 festivals across the country. It represented Turkey in the International Polyphonic Choirs Competition held in Ohrid, North Macedonia in August 2022 and won the 2nd Prize, the Best Contemporary Work Choir Award and the Tomislav Zografski Special Jury Award. It has also performed a Symphonic Rap Concert with the symphony orchestra and Turkish rapper Gazapizm, and a concert with Candan Erçetin, accompanied by a symphony orchestra.",
      {
        "heading": "Academic Choir of the Jan Długosz University, Częstochowa, Poland",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/academica.webp"
      },
      "It was created in October 2022. It consists of students, employees and supporters of the Jan Długosz University in Częstochowa. Each of the University’s departments has its own representation among choristers. Its first concert took place in December 2022 as part of the University’s Christmas Concert. The choir has achieved its first successes, including: • Silver diploma at the 10th International Festival of Christmas Carols and Pastorals in Rzeszów • Silver diploma at the 19th International Carols and Pastorals Competition in Chełmno • Bronze diploma at the 12th International Choral Festival Canco Mediterrania in Barcelona - Lloret de Mar (Spain). In May 2024, the group participated in the performance of the operetta Die Fledermaus. The choir is directed by Marek Kudra.",
      {
        "heading": "Ad Una Corda, Pezinok, Slovakia",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/adunacorda.webp"
      },
      "Singing Association of Pezinok, the predecessor of Ad Una Corda choir, was founded in November 1867. In the mid-20th century, activities of the choir were hampered by the religious persecution of the communist era. At present, Ad Una Corda is dedicated to popularizing sacred music and has participated in a variety of events from concerts to festivals and competitions. It has toured 17 European countries, Israel, Canada and the USA. The choir also performs at important Church Feasts and regularly cooperates with professional orchestras. Moreover, it organizes a series of concert cycles and charity projects, while it has won numerous prizes at several competitions worldwide (for example: 1st place in the Czech Republic-1998, Malta-2002, Serbia-2008 and 2018, Canada-2018, etc.). It has released two CDs and a number of public recordings for the Slovak Radio.",
      {
        "heading": "Cappella Quinqueecclesiensis, Pécs, Hungary",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/Quinqueecclesiensis.webp"
      },
      "Founded in Pécs in 2014, it is comprised of young people who are dedicated to performing unique works of choral music. The name of the ensemble expresses the choir’s place of origin (Quinqueecclesiae being the Medieval name of the city) and its intention is to perform and propagate a high-quality repertoire, which includes pieces by lesser known Renaissance and Romantic composers, as well as 20th and 21st century works, with a significant emphasis on contemporary Hungarian choral pieces. Fostering contemporary Hungarian choral music plays an important role in their activity. It is a significant participant in the musical life of Pécs, but also performs in Budapest and other locations, often performing world premieres of newly composed pieces. Since its creation, it has won several prizes. Namely: the qualification “gold with certificate of merit” from the Association of Hungarian Choirs and Orchestras in 2014, a gold diploma at the VII Kodály Zoltán Choir Competition in Budapest in 2015, the 2nd prize and the prize for best conductor at the Vándor-Révész International Choir Competition in Budapest in 2018, and a 2nd prize and the prize for the best performance of Renaissance at the Ohrid International Choir Competition in North Macedonia in 2023.",
      {
        "heading": "Choir “Mītava”, Riga, Latvia",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/mitava.webp"
      },
      "Since its foundation in 1987, the choir had been led by Agija Pizika. In 2022, Raimonds Gulbis became its conductor, who has raised the choir's artistic quality to an even higher level since then. \"Mītava\" is a member of the Song and dance Festival movement, whose individuality is formed by a diverse selection of repertoire - from folk songs and original compositions to jazz and contemporary, popular and pop music. It also participates in various international competitions and festivals every year with considerable success. The set of human qualities of the choir is characterized by its prevailing mood and attitude towards work - \"Mitavians\" are characterized by the fact that the song accompanies them in all moments of being together - not only during rehearsals and performances, but also during trips and leisure activities.",
      {
        "heading": "Forest Ridge School Chamber Choir, Bellevue WA, USA",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/forestridge.webp"
      },
      "Forest Ridge School of the Sacred Heart is an all-girls school located in Bellevue, Washington. The choir is dedicated to singing a wide repertoire of music and has cultivated relationships with renowned composers worldwide as well as local composers, such as Alice Parker, Stephen Hatfield, Michael McGlynn, Javier Busto, Eleanor Daley, Rollo Dilworth, Henry Leck and Francisco J. Nunez. The Forest Ridge choirs have performed at St. James Cathedral and perform annually at the Seattle Archdiocese Catholic HS Choir Festival and the Chamber Choir was honored in 2007 and 2013 to participate in the international choir Festival 500 in Newfoundland, Canada. The choir travels nationally and internationally, and as part of travels to New York City, it has worked with the Young People’s Chorus of New York City, where it was subsequently invited to be one of only six choirs nationally to participate in the prestigious Radio Radiance Program which is dedicated to the development and performance of new choral works for young voices by esteemed composers.",
      {
        "heading": "Hejnał Mazańcowice, Mazańcowice, Poland",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/hejnal.webp"
      },
      "It was created in 1946. Its repertoire includes works of various eras, from Renaissance music to contemporary compositions, sacred, secular, patriotic and folk songs. It has performed in Germany, Austria, the Czech Republic, Hungary, Slovakia, Ukraine, Lithuania, Russia, Italy, Greece, France, Cyprus and Spain. Its most recent achievements are: • Silver Diploma in three categories and a special prize in category Catalan music during the 7th International Festival and Choir Competition “Canco Mediterrania” in Lloret de Mar and Barcelona – Spain (2017), •1st place in the 19th National Hunting Music Competition in Pszczyna – Poland (2018), • Grand Prix of the 3rd Hunting Song Festival in Lanckorona – Poland (2018), • 1st Prize and special award for the best performance of Renaissance at the Ohrid Choir Festival – North Macedonia (2022). Krzysztof Przemyk has been its conductor since 1991.",
      {
        "heading": "Hugo Wolf Chamber Choir, Maribor, Slovenia",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/hugowolf.webp"
      },
      "It was founded on the 150th anniversary of the birth of the Austrian composer of Slovene origin Hugo Wolf in 2010, as part of “Mostovi”, a society promoting the harmony between Slovenian and German culture in Maribor. Maribor is the second largest city in Slovenia, close to the Austrian border, where Hugo Wolf attended secondary school and composed his first pieces. The choir consists of 30 experienced singers, led by Professor Aleš Marčič, and gives special attention to reviving the memory of forgotten composers, connected with their hometown (Hugo Wolf, Robert Stolz and others). In addition to many concerts in Slovenia and abroad the choir has participated in national and international choral competitions, where singers have received high awards, including the Grand Prix at the Lege Artis competition in Tuzla (2017).",
      {
        "heading": "Medvidata Youth Choir, Český Krumlov, Czech Republic",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/Medvidata.webp"
      },
      "It was established in 1995, and it now comprises more than 180 singers, aged 4 to 19, in four different sections: 3 preparatory children choirs, and the MEDVIDATA Youth Choir, which consists of soprano, alto, tenor and bass singers aged 13+. During its existence, it has organized more than 800 public performances and over 1500 children have taken part in it. Its repertoire covers a wide range of folk and artistic songs from the Renaissance to contemporary pieces with an emphasis on the 20th century Czech composers, as well as Negro spirituals or stylish arrangements of popular music. It has gathered a number of successes at competitions in many European countries (e.g. Toruň, Poland 2023 - 2 gold diplomas / Tampere, Finland 2019 - 2 gold stamps / Preveza, Greece 2018 - 2 silver medals / Llangollen, Great Britain 2015 - 2nd and 3rd prize / Neerpelt, Belgium 2014 - 1st prize Cum Laude / Cantonigros, Spain - 3rd prize) and festivals abroad ( Italy,Hungary, etc.) as well as in the Czech Republic. It has recorded six CDs and has premiered a number of Czech original compositions. Mr Lukáš Holec has been its choirmaster since the beginning, while the choir is accompanied on the piano by Mrs Lucie Smitková.",
      {
        "heading": "Mixed choir TECHNIK AKADEMIK, Trnava, Slovakia",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/TECHNIK.webp"
      },
      "It was established in 2005 by former members of mixed choir Technik led by Ing. Daniel Vopat. The choir is full of incredible energy, faith and devotion to the idea of making good music and bringing joy and enrichment not only to themselves but also to others. Pavol Procházka is the conductor and artistic director of the choir. Under his leadership the choir has realised several unique and very successful projects, such as EUROKOLEDY, EUROLKLORE, a project of Easter Music, etc. The choir has participated in a number of international concerts and festivals with great success (Praga Cantat-2005, Athens Choir Competition-2007, Istanbul-2010, Verdi's choirs Trnava-2011 together with the choir CANTICA (Z)NOVA and choir and orchestra of Slovak National Theatre Bratislava, Montreux Choir Festival-2012, Project Musica Sacra - Music Without Borders, Austria, and others). It has cooperated with numerous professional bodies, such as the Slovak National Theatre of Bratislava and the Slovak Radio Symphony Orchestra. Its repertoire includes works of famous domestic and foreign composers.",
      {
        "heading": "Royal Voices of Charlotte, Charlotte NC, USA",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/RoyalVoices.webp"
      },
      "The choir was formed in 2019 by Dr Justin Smith, Director of Choral Activities at Queens University, as an auditioned mixed choir performing repertoire of all types. In 2022, they were invited to perform at the North Carolina American Choral Directors Association state conference, sang at Carnegie Hall, and collaborated with Bach Akademie Charlotte at their Charlotte Bach Festival. They have also won First Prize in the Mixed Choir competition at the International Choral Kathaumixw in British Columbia, Canada. In autumn 2024, they were invited to perform at the national conference of the National Collegiate Choral Organization (NCCO) in Atlanta.",
      {
        "heading": "TrencaCors, Barcelona, Spain",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/TrencaCors.webp"
      },
      "It is the adult choir of the Escola de Músics i JPC, founded in September 2018 and currently formed by 59 singers. Its initial classical repertoire has been complemented with new proposals, getting a fresh and modern repertoire capable of creating vibrant emotions. It has performed in very important and emblematic venues, such as the Auditori of Barcelona, the Palau de la Música Catalana, the Gran Teatre del Liceu and the Sagrada Família. In October 2022, it participated in the community opera La Gata Perduda at the Gran Teatre del Liceu and in the documentary by TV3 (Televisió de Catalunya) Òpera Prima. TrencaCors grows with the experience provided by its numerous concerts (on average, 10 per year) and the joint effort of all the members that make up this great family.",
      {
        "heading": "VeraVoce, Mazańcowice, Poland",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/VeraVoce.webp"
      },
      "VeraVoce is a vocal ensemble that has been active since 2023. It is formed by a group of 11 young and crazy people, friends, whose passion is singing together. The ensemble also includes students of the Karol Szymanowski Music Academy in Katowice. It performs mainly sacred music from all eras. Despite its short existence, the choir has already given several concerts with passion and Christmas music. It has also taken part in the premiere of Passion, a contemporary piece composed by Pawel Kruczek.",
      {
        "heading": "Vocal Quartet of the UJD Department of Music of the Jan Długosz University (JDU), Częstochowa, Poland",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/dlugosz.webp"
      },
      "It is an ensemble formed from students of the Department of Music with a special interest in polyphonic singing. They want to broaden their vocal skills and become more familiar with the choral music repertoire. The quartet participates in student concerts and various university celebrations. It has been directed for years by Dr. Hab. Przemysław Jeziorowski. The current lineup of the Quartet has been operating since October 2023. It has performed in Poland, Slovakia and Spain. In 2023, it won the 2nd prize in the 19th International Interpretation Competition “Student Artistic Activities” in Ružomberok (Slovakia) in the Chamber Singing category (the first prize was not awarded) and a silver diploma and a special prize for the Best Academic Vocal Ensemble in the 1st National Sacred Music Competition in Zgierz (Poland).",
      {
        "heading": "Vox Humana chamber choir, Sfântu Gheorghe, Romania",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/voxhumana.webp"
      },
      "It was founded in 1972, by music teachers from the town of Sfântu Gheorghe. Under the leadership of conductor Szilágyi Zsolt, the choir has achieved first prizes at national competitions, successes abroad at Europe's most prestigious choral competitions (Gorizia, Arezzo), various performances and a series of solo concerts. It even made it to the papal audience in 1982, and it has proudly carried the oath of allegiance from Pope John Paul II ever since: “Teach the people of God to sing beautifully and devoutly. My apostolic blessing on you”. Its successes include: bronze medal at Athens Choral Olympiad (1996), gold medal at Barcelona International Choral Competition (1999), bronze medal at Rhodes International Choral Competition (2001), 3rd prize at the Ohrid Choir Festival in 2010. Its repertoire consists of a cappella preclassical to contemporary works, as well as vocal-symphonic pieces by Mozart, Handel, Orff, and even rock opera. The choir plays a key role in promoting choral singing in the region, that already has a long tradition in Covasna County.",
      {
        "heading": "WPA UAM Chamber Choir, Kalisz, Poland",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/wpa.webp"
      },
      "The choir was established in 1996 by Beata Szymańska, who has been its director since then. It consists of students and graduates of the Educational-Artistic Department in Kalisz –part of the Adam Mickiewicz University in Poznan. It performs in Poland and abroad (Germany, Italy, Sweden, North Macedonia, Spain, Hungary). During its existence, it has participated in many international and local artistic events as well as in various symphonic projects. Its repertoire includes both a cappella pieces from various periods and vocal - instrumental music. It has recorded an album, containing AGNUS DEI, opus 167, by Egil Hovland and Da Pacem by Michael Villmow.",
      {
        "heading": "Mixed Choir of the Municipal Unity of Agria, Volos, Greece",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/volos-agrias.webp"
      },
      "It was founded in 1995. It consists of amateurs from Volos and Agria, who are united by their common love for music and choral singing. It plays an important role in the cultural life of the area and it organizes annually the Agria Choral Meeting, with the participation of choirs both from Greece and abroad. Its repertoire combines different kinds of music and songs, from classical, Byzantine and traditional to contemporary music and modern Greek songs. Since September 2022, a new era has begun for the choir, after the COVID pause, under a new artistic director, Nikos Adraskelas, performing demanding works, such as “Telefteos Aspasmos” (Last Kiss) by Miltiades Kassaras in May 2023, while in June, after a three-year break, it organized the 22nd Agria Choral Meeting. In November and December, it participated in the Perama Festival and the choral festivals of Volos, respectively. Entering its 29th year of activity, it goes on its creative course, aiming at contributing to the promotion of choral singing, mainly through Greek works.",
      {
        "narrow": 0
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
          "Each choir is required to forward by 1 May 2024 latest:",
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
          "Closing date for receipt of completed applications is 1st of May 2024.",
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
      "The selected choirs, after the acceptance of their participation by the Organising Committee, must pay a deposit of €150.00 (not refundable) towards the registration fees. Subsequently – not after the 15th of May 2024 – you will be requested to pay €35 for each member of the choir, including the director, the pianist/musicians, and the escorts (the fee does not include room & board). This includes entry fees for the competition and the festival. Please deduct the deposit of €150 already paid from the total fee before paying the balance.",
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
        "anchor": "comp-cat"
      },
      {
        "heading": "28th International Choral Competition",
        "level": 2,
        "align": "center"
      },
      {
        "heading": "Competition's Categories:",
        "level": 3,
        "align": "center"
      },
      {
        "heading": "Category A: Mixed choirs",
        "level": 4,
        "align": "center"
      },
      {
        "list": [
          "Repertory requirements: (Only original compositions are permitted) 4 pieces of sacred music (Renaissance or baroque, romantic period, a composition from the early 20th century, a composition of composer born after 1970). If a choir wishes to include any other piece(s) of sacred music in the specific time, they can do so.",
          "Number of singers: Minimum of twenty-one (21) singers.",
          "Age limits: unlimited.",
          "Performance’s duration: 15-20 minutes pure music.",
          "Accompaniment not permitted.",
          "On free choice of intonation (identified in advance)."
        ],
        "align": "center"
      },
      {
        "heading": "Category B: Equal Voices’ choirs (Male or Female)",
        "level": 4,
        "align": "center"
      },
      {
        "list": [
          "Repertory requirements: (Only original compositions are permitted) 4 pieces of sacred music (Renaissance or baroque, romantic period, a composition from the early 20th century, a composition of composer born after 1970). If a choir wishes to include any other piece(s) of sacred music in the specific time, they can do so.",
          "Number of singers: Minimum of twenty-one (21) singers.",
          "Age limits: unlimited.",
          "Performance’s duration: 15-20 minutes pure music.",
          "Accompaniment not permitted.",
          "On free choice of intonation (identified in advance)."
        ],
        "align": "center"
      },
      {
        "heading": "Category C: Children’s choirs",
        "level": 4,
        "align": "center"
      },
      {
        "list": [
          "Repertory requirements: (Only original compositions are permitted) 4 pieces of sacred music (Renaissance or baroque, romantic period, a composition from the early 20th century, a composition of composer born after 1970). If a choir wishes to include any other piece(s) of sacred music in the specific time, they can do so.",
          "Number of singers: Minimum of twenty-one (21) singers.",
          "Age limits: Up to 18 years.",
          "Performance’s duration: 15-20 minutes pure music.",
          "Accompaniment: Maximum 2 pieces.",
          "On free choice of intonation (identified in advance)."
        ],
        "align": "center"
      },
      {
        "heading": "Category D: Chamber choirs / Vocal ensembles (mixed, male or female ensembles)",
        "level": 4,
        "align": "center"
      },
      {
        "list": [
          "Repertory requirements: (Only original compositions are permitted) 4 pieces of sacred music (Renaissance or baroque, romantic period, a composition from the early 20th century, a composition of composer born after 1970). If a choir wishes to include any other piece(s) of sacred music in the specific time, they can do so.",
          "Number of singers: Maximum of twenty (20) singers.",
          "Age limits: unlimited",
          "Performance’s duration: 15-20 minutes pure music",
          "Accompaniment not permitted",
          "On free choice of intonation (identified in advance)."
        ],
        "align": "center"
      },
      {
        "heading": "Category E: Youth choirs (mixed, male or female ensembles)",
        "level": 4,
        "align": "center"
      },
      {
        "list": [
          "Repertory requirements: (Only original compositions are permitted) 4 pieces of sacred music (Renaissance or baroque, romantic period, a composition from the early 20th century, a composition of composer born after 1970). If a choir wishes to include any other piece(s) of sacred music in the specific time, they can do so.",
          "Number of singers: Minimum of twenty-one (21) singers.",
          "Age limits: Up to 25 years.",
          "Performance’s duration: 15-20 minutes pure music.",
          "Accompaniment: Maximum 2 pieces.",
          "On free choice of intonation (identified in advance)."
        ],
        "align": "center"
      },
      {
        "heading": "Thematic Categories:",
        "level": 2,
        "align": "center"
      },
      {
        "heading": "Category F: Spiritual, Gospel, Jazz, Pop Choirs, Pop Ensembles, Folklore, Byzantine chant",
        "level": 4,
        "align": "center"
      },
      {
        "list": [
          "Repertory requirements: This category offers each choir the opportunity to express its own traditions and strengths. The program should reflect the choral music activities. Thoughtful consideration should be given to the dramatic arc of the overall program.",
          "Number of singers: unlimited",
          "Age limits: unlimited",
          "Performance’s duration: 15-20 minutes pure music.",
          "Accompaniment: unlimited.",
          "On free choice of intonation (identified in advance)."
        ],
        "align": "center"
      },
      {
        "heading": "Category G: Free programme of original choral music",
        "level": 4,
        "align": "center"
      },
      {
        "anchor": "ijc-info"
      },
      {
        "list": [
          "Repertory requirements: At least 4 original compositions should be performed.",
          "Number of singers: unlimited",
          "Age limits: unlimited",
          "Performance’s duration: 15-20 minutes pure music.",
          "Accompaniment: unlimited.",
          "On free choice of intonation (identified in advance)."
        ],
        "align": "center"
      },
      {
        "heading": "International Jury Committee I.J.C.",
        "level": 3,
        "align": "center"
      },
      {
        "anchor": "medals-info"
      },
      {
        "list": [
          "An International Jury Committee, consisting of at least three well-known Greek and/or foreign musicians will judge the competitive part of the festival and mark each performance based on the following:",
          "Technique (rhythm, articulation and sound).",
          "Difficulty",
          "Intonation",
          "Interpretation",
          "Stylistic Fidelity"
        ],
        "align": "center"
      },
      {
        "heading": "The International Jury Committee allocates marks for the technical and artistic quality of the chosen programme and the overall quality of its performance, taking into account how well the choir communicates with the audience in a performance situation.\n\nThe results of the marking process will be final and not subject to appeal in all aspects.",
        "level": 5,
        "align": "center"
      },
      {
        "heading": "Marking - Medals",
        "level": 3,
        "align": "center"
      },
      {
        "heading": "The I.J.C. will award prizes to the choirs, which will have achieved the following marks:",
        "level": 5,
        "align": "center"
      },
      {
        "list": [
          "Gold Medal: From 90.00 to 100 points,",
          "Silver Medal: From 80.00 to 89.99 points",
          "Bronze Medal: From 70.00 to 79.99 points"
        ],
        "align": "center"
      },
      {
        "heading": "Marking – Prize Money",
        "level": 3,
        "align": "center"
      },
      {
        "heading": "The following prize money will be awarded to the choirs with gold medal and with the highest mark in each category:",
        "level": 4,
        "align": "center"
      },
      {
        "list": [
          "Category A: 500€ & 1st Prize",
          "Category B: 400€ & 1st Prize",
          "Category C: 400€ & 1st Prize",
          "Category D: 300€ & 1st Prize",
          "Category E: 400€ & 1st Prize",
          "Category F: 400€ & 1st Prize",
          "Category G: 400€ & 1st Prize"
        ],
        "align": "center"
      },
      {
        "heading": "Marking – Special Prizes",
        "level": 3,
        "align": "center"
      },
      {
        "heading": "The I.J.C. may award other special prizes: for the best performance of orthodox chant, for the best folklore performance, for the best conducting, e.g.",
        "level": 5,
        "align": "center"
      },
      {
        "heading": "Awarding Ceremony",
        "level": 3,
        "align": "center"
      },
      {
        "anchor": "app-proc"
      },
      {
        "heading": "All the prizes, certificates and diplomas will be announced and handed in at a special ceremony in the presence of audience and authorities, where the choirs selected by the International Jury Committee will perform one (1) or two (2) songs also chosen by the I. J .C.",
        "level": 5,
        "align": "center"
      },
      {
        "heading": "Non – competitive concerts",
        "level": 3,
        "align": "center"
      },
      {
        "heading": "The place and the time for the non-competitive concerts will be arranged by the Organizing Committee. Pieces of each choir’s choice will be performed “a cappella” within 10-15 minutes.",
        "level": 5,
        "align": "center"
      },
      {
        "heading": "Application Procedure",
        "level": 3,
        "align": "center"
      },
      {
        "heading": "Registration - Participation Fees",
        "level": 4,
        "align": "center"
      },
      "The selected choirs, after the acceptance of their participation by the Organising Committee, must pay a deposit of € 150 (not refundable) towards the registration fees.\nSubsequently – not after the 15th of May 2024 – you will be requested to pay €35 for each member of the choir, including the director, the pianist/musicians, and the escorts (the fee does not include room & board). This includes entry fees for the competition and the festival. Please deduct the deposit of €150 already paid from the total fee before paying the balance.",
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
        "heading": "Each choir is required to forward by 1 May 2024 latest.",
        "level": 5,
        "align": "center"
      },
      {
        "list": [
          "A fully detailed application form (which is attached).",
          "A recent CD recording of the choir or approximately seven MP3 files sent by email",
          "The choir’s proposed competition programme (see Repertoire Requirements detailed above). If accepted, this repertoire and its order of performance may not subsequently be altered",
          "Six original scores of each work (non returnable)",
          "A short history of the choir and conductor detailing activities and achievements (English Text, 250 words)",
          "A recent photograph (suitable for publicity purposes) of the choir and the conductor.",
          "A list of the names and addresses of the choir members that do not hold EU passports."
        ],
        "align": "center"
      },
      {
        "heading": "Accommodation, Meals & Transport",
        "level": 3,
        "align": "center"
      },
      {
        "p": "Each choir is responsible for all matters related to the organization, booking and payment of all accommodation and meals during their stay in Preveza. The festival is not responsible for any booking issues that may arise.",
        "align": "center"
      },
      {
        "anchor": "conditions"
      },
      {
        "heading": "Selection",
        "level": 3,
        "align": "center"
      },
      {
        "p": "Only applications enclosing all of the requirements detailed under Application Procedure will be considered. Choirs are selected on the basis of their application material. Particular attention is paid to the repertoire and quality of performance presented on the audition CD submitted with the application.",
        "align": "center"
      },
      {
        "heading": "Conditions of Participation",
        "level": 3,
        "align": "center"
      },
      {
        "list": [
          "Closing date for receipt of completed applications is 1 May 2024.",
          "Once the appropriate material is received, it will be evaluated and the applicant choir will be informed whether they are chosen to participate or not.",
          "Registration fee (minus any bank charges incurred) will be refunded if a choir is not selected to participate in the festival.",
          "Any selected choir that withdraws from the competition is not entitled to a refund of the registration fee.",
          "It is contrary to law to perform music that has been reproduced illegally. Should a choir do so, the festival accepts no responsibility for any action taken by publishers.",
          "The Organising Committee accepts no legal responsibility whatsoever in respect of anything pertaining to a choir’s participation in the festival.",
          "The festival accepts no responsibility or liability for accommodation and meal costs incurred by the choir.",
          "The festival accepts no responsibility for any expense incurred by any choir or individual chorister participating in the festival."
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
          "1 - 7 Ιουλίου 2024"
        ]
      },
      {
        "img": "/img/poster-2024.webp"
      },
      "Σημειώστε στο ημερολόγιό σας τις 1 με 7 Ιουλίου του 2024 για να πάρετε μέρος στο 42ο Διεθνές Χορωδιακό Φεστιβάλ Πρέβεζας. Το Διεθνές Χορωδιακό Φεστιβάλ Πρέβεζας μετρά 42 συναρπαστικά χρόνια υψηλής ποιότητας χορωδιακής μουσικής, με προκλήσεις από εξαιρετικές χορωδίες που συνεχώς ανεβάζουν τον πήχη και από μια μεγάλη ποικιλία διαπολιτισμικών εμπειριών με συμμετέχοντες από όλο τον κόσμο. Το φεστιβάλ περιλαμβάνει πολλές συναυλίες που δίνονται σε ειδυλλιακά μέρη της περιοχής όπως το παράλιο φρούριο της Πρέβεζας και το ιστορικό \"Ωδείο\", Αρχαίο Αμφιθέατρο της Νικόπολης. Για τις επισκέπτριες χορωδίες, η Πρέβεζα προσφέρει την ευκαιρία όχι μόνο να εμφανιστούν, αλλά και να βιώσουν μερικές από τις καλύτερες χορωδιακές μουσικές του κόσμου, να απολαύσουν τις συναυλίες, το τραγούδι και τη διασκέδαση και να εξερευνήσουν την γραφική πόλη της Πρέβεζας και των γύρω περιοχών. Το φεστιβάλ θα διοργανωθεί από τη Χορωδία \"Αρμονία\" Πρέβεζας, υπό την αιγίδα του δήμου Πρέβεζας. Οι χορωδίες δικαιούνται να συμμετέχουν στο φεστιβάλ ως μη διαγωνιζόμενες χορωδίες, όπου θα συμμετέχουν σε όλες τις εκδηλώσεις του φεστιβάλ.",
      "Θα είναι μεγάλη τιμή και χαρά για εμάς αν έρθετε στην όμορφη πόλη μας και πάρετε μέρος στο χορωδιακό διαγωνισμό. Σας προσκαλούμε να το ανακαλύψετε από μόνοι σας ότι η Πρέβεζα είναι μια γοητευτική και φιλόξενη πόλη γεμάτη ιστορικά αξιοθέατα και τοποθεσίες φυσικής ομορφιάς και να ζήσετε τη μαγεία της χορωδιακής μουσικής.\n\nΗ καταληκτική ημερομηνία για την υποβολή ολοκληρωμένων αιτήσεων είναι η 1η Μαΐου 2024.",
      {
        "wide": true
      },
      {
        "heading": "Διεθνής Κριτική Επιτροπή I.J.C.",
        "level": 2,
        "align": "center"
      },
      ...person("graeme-langager", "el", {level: 3}),
      ...person("pawel-lukaszewski", "el", {level: 3,align: "right"}),
      {
        "heading": "Garo Avessian",
        "level": 3
      },
      {
        "img": "/img/GaroAvessian.webp",
        "layout": "side"
      },
      "Γεννήθηκε στη Βηρυτό. Υπήρξε μαέστρος και συνθέτης κυρίως έργων δωματίου που έχουν παρουσιαστεί στην Ασία, την Ευρώπη και τη Μέση Ανατολή και έχει συνεργαστεί με σπουδαίες χορωδίες και ορχήστρες καθώς και με καταξιωμένους σολίστ σε πολυάριθμες αξιομνημόνευτες συναυλίες, τόσο στη χώρα του όσο και στο εξωτερικό. Σπούδασε πιάνο από το 1990 έως το 2000, καθώς και σύνθεση, αρμονία, θεωρία και ενορχήστρωση στη Βηρυτό. Στο Κρατικό Ωδείο του Yerevan, που πήρε το όνομά του από τον Gomidas, σπούδασε Σύνθεση και Διεύθυνση Ορχήστρας, αποκτώντας μεταπτυχιακό και στα δύο μαθήματα. Οι τιμητικές του διακρίσεις περιλαμβάνουν το Τρίτο Βραβείο στον Διαγωνισμό Φωνητικής Lazarus Saryan στο Yerevan το 2004, για το \"Three Kuchak Hayren\" και το Προεδρικό Βραβείο. Πιο πρόσφατα, ήταν φιναλίστ στην Κατηγορία Μουσικής Κινηματογράφου στον Διαγωνισμό Νέων Συνθετών του Ινστιτούτου Τέχνης Narekatsi στο Yerevan, το 2006, για το \"Embers of the Sun\". Από το 2008, είναι μαέστρος της Φιλαρμονικής Ορχήστρας του Λιβάνου καθώς και Καλλιτεχνικός Διευθυντής και Μαέστρος της Αρμενικής Ευαγγελικής Χορωδίας ARMISS. Επίσης, είναι ο ιδρυτής και κύριος μαέστρος της Ορχήστρας Δωματίου του Ganachian College από το 2009 και Λέκτορας στο Αραβικό Πανεπιστήμιο της Βηρυτού από το 2010. Είναι μέλος του Συνδικάτου Επαγγελματιών Μουσικών του Λιβάνου από το 2011, και Αναπληρωτής Καθηγητής στο Εθνικό Ανώτατο Ωδείο Μουσικής του Λιβάνου στα μαθήματα Διεύθυνσης, Ενορχήστρωσης και Αρμονίας, από το 2008.",
      ...person("eduardo-garcia-novelli", "el", {level: 3,align: "right"}),
      {
        "heading": "Masis Aram Gozbek",
        "level": 3
      },
      {
        "img": "/img/MasisAramGozbek.webp",
        "layout": "side"
      },
      "Γεννημένος το 1987 στην Κωνσταντινούπολη, Τουρκία, ανέδειξε το μουσικό του ταλέντο ήδη από τα μαθητικά του χρόνια στο λύκειο. Ξεκίνησε να σπουδάζει σύνθεση το 2008 και εξακολουθεί να παρακολουθεί μαθήματα και σεμινάρια σχετικά με τη διεύθυνση ορχήστρας. Έχει ταξιδέψει σε όλο τον κόσμο διευθύνοντας καταξιωμένες χορωδίες και ορχήστρες, ενώ έχει συμμετάσχει και ως μέλος σε επιτροπές κριτών. Οι συνθέσεις του έχουν βραβευτεί με χρυσά μετάλλια σε διάφορους διεθνείς Διαγωνισμούς Σύνθεσης παγκοσμίως. Έχει λάβει το Βραβείο Πρυτανείας του Τεχνικού Πανεπιστημίου Yildiz και το βραβείο «Ο πιο Επιτυχημένος Νέος» στους Εθνικούς Τελικούς της Τουρκίας στα πλαίσια του διαγωνισμού 19TOYP (Δέκα Εξέχοντες Νέοι) το 2013. Ίδρυσε την πλατφόρμα KOROHANE (Σπίτι της Χορωδίας) με σκοπό να φέρει κοντά άτομα από όλη την Τουρκία που είναι αφοσιωμένα στη χορωδιακή μουσική. Εκτός από ιδρυτής και καλλιτεχνικός διευθυντής της Χορωδίας Τζαζ του Βοσπόρου, της Νεανικής Χορωδίας του Βοσπόρου και των Χορωδιών MAGMA, συνεργάζεται επίσης με γνωστούς τραγουδιστές και συγκροτήματα. Επιπλέον, διοργανώνει συχνά εργαστήρια και σεμινάρια για τη χορωδιακή μουσική σε διάφορα σχολεία και συλλόγους τόσο σε πόλεις της Τουρκίας όσο και στο εξωτερικό. Είναι μέλος του Διοικητικού Συμβουλίου του Πολιτιστικού Ιδρύματος Yucel από το 2018.",
      {
        "narrow": 8
      },
      {
        "heading": "Συμμετοχές Χορωδιών",
        "level": 1,
        "align": "center"
      },
      {
        "heading": "Χορωδία “Ολγάρυθμος”, Αθήνα, Ελλάδα",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/Ολγάρυθμος.webp"
      },
      "Είναι ένα νεοσύστατο φωνητικό σχήμα. Δημιουργήθηκε από ερασιτέχνες χορωδούς με κοινό άξονα την αγάπη και το μεράκι για το πολυφωνικό τραγούδι. Οι χορωδοί ανακαλύπτουν τη φωνητική τους ταυτότητα και τρόπους να εκφραστούν καλλιτεχνικά πειραματιζόμενοι με ένα μεγάλο εύρος ρεπερτορίου. Έκανε την παρθενική του εμφάνιση στο Διαγωνιστικό Φεστιβάλ Ναυπάκτου με έργα Ελλήνων συνθετών και κατέκτησε τη δεύτερη θέση και χάλκινο μετάλλιο. Τη χορωδία διευθύνει η Όλγα Αλεξοπούλου, ενώ στο πιάνο συνοδεύει η **Μυρτώ Ακρίβου**.",
      {
        "heading": "Χορωδία Ενηλίκων Σχολής Μωραΐτη",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/Μωραΐτη.webp"
      },
      "Η Χορωδία Ενηλίκων της Σχολής Μωραΐτη είναι μια κοινοτική χορωδία, η οποία δημιουργήθηκε τον Ιανουάριο του 2019 υπό τη διεύθυνση της μαέστρου **Βάγιας Παπαγιαννοπούλου** και αποτελείται από 42 ενεργά μέλη. Οι στόχοι της χορωδίας είναι η μουσική ενσωμάτωση κάθε μέλους της κοινωνίας με όχημα και εργαλείο το χορωδιακό τραγούδι, η κοινωνική συναναστροφή και αλληλεπίδραση και φυσικά η μουσική πράξη χωρίς προαπαιτούμενη γνώση μουσικής γραφής και ανάγνωσης. Έχει πραγματοποιήσει συναυλίες στην Αθήνα, στο Ναύπλιο στη Θεσσαλονίκη, στο Βόλο και στο Αγρίνιο. Συμμετέχει ενεργά σε πανελλήνια χορωδιακά φεστιβάλ και συναντήσεις και έχει μόνιμη στέγη στη Σχολή Μωραΐτη.",
      {
        "heading": "A Capella Gramofon, Izmir, Τουρκία",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/gramofon.webp"
      },
      "Ιδρύθηκε το 2012 από τον μαέστρο και συνθέτη **Türker Barmanbek**. Έχει κερδίσει 24 βραβεία σε 17 φεστιβάλ σε όλη την Τουρκία. Αντιπροσώπευσε την Τουρκία στον Διεθνή Πολυφωνικό Διαγωνισμό Χορωδιών που έγινε στην Οχρίδα της Βόρειας Μακεδονίας, τον Αύγουστο του 2022, και κέρδισε το 2ο βραβείο, το βραβείο για την Καλύτερη Ερμηνεία Σύγχρονου Χορωδιακού Έργου και το Ειδικό Βραβείο Tomislav Zografski από την Κριτική Επιτροπή. Έχει, επίσης, παρουσιάσει μια συναυλία συμφωνικής-ραπ μουσικής με τη συμφωνική ορχήστρα και τον Τούρκο ράπερ Gazapizm, καθώς και μια συναυλία με την καλλιτέχνιδα Candan Erçetin και συνοδεία συμφωνικής ορχήστρας.",
      {
        "heading": "Ακαδημαϊκή Χορωδία του Πανεπιστημίου Jan Długosz, Częstochowa, Πολωνία",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/academica.webp"
      },
      "Δημιουργήθηκε τον Οκτώβρη του 2022. Αποτελείται από φοιτητές, υπαλλήλους και υποστηρικτές του Πανεπιστημίου Jan Długosz στην Częstochowa. Κάθε τμήμα του Πανεπιστημίου εκπροσωπείται από δικούς του χορωδούς στο σύνολο. Η πρώτη τους συναυλία πραγματοποιήθηκε τον Δεκέμβρη του 2022, ως μέρος της χριστουγεννιάτικης συναυλίας του Πανεπιστημίου. Η χορωδία έχει επιτύχει τα πρώτα της βραβεία, που περιλαμβάνουν: • Αργυρό δίπλωμα στο 10ο Διεθνές Φεστιβάλ για Χριστουγεννιάτικα Κάλαντα και Βουκολικά στο Rzeszów • Αργυρό δίπλωμα στον 19ο Διεθνή Διαγωνισμό για Κάλαντα και Βουκολικά στο Chełmno • Χάλκινο δίπλωμα στο 12ο Διεθνές Χορωδιακό Φεστιβάλ Canco Mediterrania στη Βαρκελώνη- Lloret de Mar (Ισπανία). Τον Μάιο του 2024, η χορωδία συμμετείχε στην παρουσίαση της οπερέτας Die Fledermaus. Διευθύνει ο **Marek Kudra**.",
      {
        "heading": "Ad Una Corda, Pezinok, Σλοβακία",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/adunacorda.webp"
      },
      "Ο Σύλλογος Τραγουδιού του Pezinok, πρόγονος της χορωδίας Ad Una Corda, ιδρύθηκε το Νοέμβριο του 1867. Στα μέσα του 20ού αιώνα, οι δραστηριότητες της χορωδίας παρεμποδίστηκαν από τις θρησκευτικές διώξεις της κομμουνιστικής εποχής. Αυτό τον καιρό, η χορωδία είναι αφοσιωμένη στη διάδοση της θρησκευτικής μουσικής και έχει συμμετάσχει σε μια ποικιλία εκδηλώσεων από συναυλίες μέχρι φεστιβάλ και διαγωνισμούς. Έχει περιοδεύσει σε 17 Ευρωπαϊκές χώρες, στο Ισραήλ, στον Καναδά και στις ΗΠΑ. Επίσης, εμφανίζεται σε σημαντικούς εορτασμούς της Εκκλησίας και συνεργάζεται τακτικά με επαγγελματικές ορχήστρες. Επιπλέον, διοργανώνει μια σειρά από κύκλους συναυλιών και φιλανθρωπικά προγράμματα, ενώ έχει κερδίσει πολλά βραβεία σε διάφορους διαγωνισμούς σε όλο τον κόσμο (για παράδειγμα: 1η θέση σε διαγωνισμούς στην Τσεχία-1998, στη Μάλτα-2002, στη Σερβία-2008 και 2018, στον Καναδά-2018, κα). Έχει κυκλοφορήσει 2 CDs και έχει πραγματοποιήσει αρκετές δημόσιες ηχογραφήσεις για το Σλοβακικό Ραδιόφωνο.",
      {
        "heading": "Cappella Quinqueecclesiensis, Pécs, Ουγγαρία",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/Quinqueecclesiensis.webp"
      },
      "Ιδρύθηκε στο Pécs το 2014 και αποτελείται από νέους ανθρώπους που είναι αφοσιωμένοι στην ερμηνεία μοναδικών έργων χορωδιακής μουσικής. Το όνομά της φανερώνει την πόλη της προέλευσής της (καθώς έχει το μεσαιωνικό όνομα της πόλης) και ο σκοπός της είναι να παρουσιάσει και να διαδώσει ένα υψηλής ποιότητας ρεπερτόριο, το οποίο περιλαμβάνει κομμάτια λιγότερο γνωστών συνθετών της Αναγέννησης και του Ρομαντισμού, καθώς και έργα του 20ου και του 21ου αιώνα, με ιδιαίτερη έμφαση σε σύγχρονα κομμάτια ουγγρικής χορωδιακής μουσικής. Η ενίσχυση της σύγχρονης ουγγρικής χορωδιακής μουσικής παίζει σημαντικό ρόλο στη δραστηριότητα της χορωδίας. Είναι σπουδαίο μέρος της μουσικής ζωής της πόλης, αλλά επίσης εμφανίζεται στη Βουδαπέστη και σε άλλα μέρη, συχνά παρουσιάζοντας παγκόσμιες πρεμιέρες νέων κομματιών. Από την ίδρυσή της, έχει κερδίσει διάφορα βραβεία, όπως: Χρυσό βραβείο με έπαινο από την Ένωση Ουγγρικών Χορωδιών και Ορχηστρών το 2014, χρυσό δίπλωμα στον 7ο Χορωδιακό Διαγωνισμό Kodály Zoltán στη Βουδαπέστη το 2015, δεύτερο βραβείο και βραβείο καλύτερου μαέστρου στον Διεθνή Χορωδιακό Διαγωνισμό Vándor-Révész στη Βουδαπέστη το 2018, και τέλος, δεύτερο βραβείο και βραβείο για την καλύτερη ερμηνεία αναγεννησιακού κομματιού στον Διεθνή Διαγωνισμό Χορωδιών της Οχρίδας στη Βόρεια Μακεδονία το 2023.",
      {
        "heading": "Χορωδία “Mītava”, Ρίγα, Λετονία",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/mitava.webp"
      },
      "Από την ίδρυσή της το 1987, τη χορωδία διηύθυνε η **Agija Pizika**. Το 2022, ο Raimonds Gulbis έγινε μαέστρος της, ο οποίος έχει ανεβάσει την καλλιτεχνική ποιότητα της χορωδίας σε ακόμη υψηλότερο επίπεδο από τότε. Η χορωδία είναι μέλος του κινήματος Φεστιβάλ Τραγουδιού και Χορού, και η μοναδικότητά της δημιουργείται από ένα ποικίλο ρεπερτόριο, από φολκλορικά τραγούδια και αυθεντικές συνθέσεις μέχρι τζαζ, σύγχρονη και λαϊκή μουσική. Επίσης, συμμετέχει σε διάφορους διεθνείς διαγωνισμούς και φεστιβάλ κάθε χρόνο με ιδιαίτερη επιτυχία. Το σύνολο των ανθρώπινων αξιών της χορωδίας χαρακτηρίζεται από τη διάθεση που επικρατεί και τη στάση τους απέναντι στη δουλειά. Το τραγούδι τούς συνοδεύει σε όλες τις κοινές τους στιγμές, όχι μόνο στις πρόβες και τις παραστάσεις, αλλά επίσης στα ταξίδια και στις υπόλοιπες δραστηριότητές τους.",
      {
        "heading": "Χορωδία Δωματίου του Σχολείου Forest Ridge, Bellevue WA, ΗΠΑ",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/forestridge.webp"
      },
      "Το Σχολείο Forest Ridge της Ιερής Καρδιάς είναι ένα σχολείο θηλέων που βρίσκεται στο Bellevue της Washington. Η χορωδία είναι αφοσιωμένη να τραγουδά ένα ευρύ ρεπερτόριο μουσικής και έχει καλλιεργήσει σχέσεις με ξακουστούς συνθέτες από όλο τον κόσμο καθώς και με ντόπιους συνθέτες, όπως οι Alice Parker, Stephen Hatfield, Michael McGlynn, Javier Busto, Eleanor Daley, Rollo Dilworth, Henry Leck και Francisco J. Nunez. Οι χορωδίες του σχολείου έχουν εμφανιστεί στον Καθεδρικό του St. James και εμφανίζονται κάθε χρόνο στο Χορωδιακό Φεστιβάλ Seattle Archdiocese Catholic HS, ενώ η χορωδία δωματίου είχε την τιμή να συμμετέχει το 2007 και το 2013 στο Διεθνές Χορωδιακό Φεστιβάλ 500 στο Newfoundland του Καναδά. Η χορωδία ταξιδεύει σε εθνικό και διεθνές επίπεδο, και ως μέρος των ταξιδιών της στην πόλη της Νέας Υόρκης, έχει εργαστεί με τη χορωδία Young People’s Chorus της Νέας Υόρκης, όπου στη συνέχεια προσκλήθηκε ως μια από τις μόνο 6 χορωδίες της χώρας για να συμμετέχει στο υψηλού κύρους Radio Radiance Program, το οποίο είναι αφιερωμένο στην ανάπτυξη και παρουσίαση νέων χορωδιακών έργων διαπρεπών συνθετών για νεανικές φωνές.",
      {
        "heading": "Hejnał Mazańcowice, Mazańcowice, Πολωνία",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/hejnal.webp"
      },
      "Δημιουργήθηκε το 1946. Το ρεπερτόριό της περιλαμβάνει έργα από διάφορες εποχές, από αναγεννησιακή μουσική μέχρι σύγχρονες συνθέσεις, θρησκευτικά, λαϊκά, πατριωτικά και φολκλορικά τραγούδια. Έχει εμφανιστεί στις Γερμανία, Αυστρία, Τσεχία, Ουγγαρία, Σλοβακία, Ουκρανία, Λιθουανία, Ρωσία, Ιταλία, Ελλάδα, Γαλλία, Κύπρο και Ισπανία. Οι πιο πρόσφατες επιτυχίες της είναι: • Αργυρό δίπλωμα σε 3 κατηγορίες και ειδικό βραβείο στην κατηγορία Καταλανικής μουσικής στο 7ο Διεθνές Φεστιβάλ και Χορωδιακό Διαγωνισμό “Canco Mediterrania” στο Lloret de Mar και Βαρκελώνη, Ισπανία (2017), • 1η θέση στον 19ο Εθνικό Μουσικό Διαγωνισμό Hunting στην Pszczyna, Πολωνία (2018), • Grand Prix στο 3ο Φεστιβάλ Τραγουδιού Hunting στην Lanckorona, Πολωνία (2018), • 1ο βραβείο και ειδικό βραβείο για την καλύτερη ερμηνεία αναγεννησιακού έργου στο Χορωδιακό Φεστιβάλ της Οχρίδας, Βόρεια Μακεδονία (2022). Από το 1991 μαέστρος της χορωδίας είναι ο ** Krzysztof Przemyk**.",
      {
        "heading": "Χορωδία Δωματίου Hugo Wolf, Maribor, Σλοβενία",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/hugowolf.webp"
      },
      "Ιδρύθηκε στην 150ή επέτειο από τη γέννηση του Αυστριακού συνθέτη σλοβενικής καταγωγής Hugo Wolf το 2010, ως μέρος της κοινότητας “Mostovi”, που έχει στόχο να προάγει την αρμονία ανάμεσα στη σλοβενική και τη γερμανική κουλτούρα στο Maribor. Το Maribor είναι η δεύτερη μεγαλύτερη πόλη της Σλοβενίας, κοντά στα αυστριακά σύνορα, όπου ο Hugo Wolf πήγε γυμνάσιο και συνέθεσε τα πρώτα του κομμάτια. Η χορωδία αποτελείται από 30 έμπειρους χορωδούς , υπό την καθοδήγηση του καθηγητή **Aleš Marčič**, και δίνει ιδιαίτερη προσοχή στην αναβίωση της μνήμης ξεχασμένων συνθετών που συνδέονται με την γενέτειρά τους. Εκτός από πολλές συναυλίες στη Σλοβενία και στο εξωτερικό, η χορωδία έχει συμμετάσχει σε εθνικούς και διεθνείς χορωδιακούς διαγωνισμούς, όπου έλαβε υψηλές διακρίσεις, συμπεριλαμβανομένου του Grand Prix στον διαγωνισμό Lege Artis στην Tuzla (2017).",
      {
        "heading": "Νεανική Χορωδία Medvidata, Český Krumlov, Τσεχία",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/Medvidata.webp"
      },
      "Ιδρύθηκε το 1995 και τώρα αποτελείται από περισσότερους από 180 χορωδούς, ηλικίας από 4 έως 19 ετών, σε 4 διαφορετικά τμήματα: 3 προπαρασκευαστικές παιδικές χορωδίες και τη νεανική χορωδία Medvidata, η οποία αποτελείται από σοπράνο, άλτο, τενόρους και μπάσους, ηλικίας 13 ετών και άνω. Κατά τη διάρκεια της ύπαρξής της, έχει οργανώσει πάνω από 800 εμφανίσεις και περισσότερα από 1500 παιδιά έχουν συμμετάσχει σε αυτήν. Το ρεπερτόριο της καλύπτει μια μεγάλη γκάμα φολκλορικών και έντεχνων τραγουδιών από την αναγέννηση έως σύγχρονα κομμάτια με έμφαση στους Τσέχους συνθέτες του εικοστού αιώνα, καθώς και Negro spirituals ή ιδιαίτερες επεξεργασίες λαϊκής μουσικής. Έχει συγκεντρώσει πολυάριθμες επιτυχίες σε διαγωνισμούς σε διάφορες ευρωπαϊκές χώρες (π.χ. Toruň, Πολωνία 2023 - 2 χρυσά διπλώματα / Tampere, Φινλανδία 2019 - 2 χρυσές σφραγίδες / Πρέβεζα, Ελλάδα 2018 - 2 αργυρά μετάλλια / Llangollen, Μεγάλη Βρετανία 2015 – 2ο και 3ο βραβείο / Neerpelt, Βέλγιο 2014 – 1ο βραβείο με έπαινο / Cantonigros, Ισπανία – 3ο βραβείο) και φεστιβάλ στο εξωτερικό καθώς και στην Τσεχία. Έχει ηχογραφήσει 6 CDs και έχει ερμηνεύσει για πρώτη φορά αρκετές αυθεντικές τσεχικές συνθέσεις. Από την ίδρυσή της, μαέστρος της χορωδίας είναι ο κύριος Lukáš Holec, ενώ στο πιάνο συνοδεύει η κυρία **Lucie Smitková**.",
      {
        "heading": "Μικτή Χορωδία TECHNIK AKADEMIK, Trnava, Σλοβακία",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/TECHNIK.webp"
      },
      "Ιδρύθηκε το 2005 από πρώην μέλη της μικτής χορωδίας Technik υπό την καθοδήγηση του Daniel Vopat. Η χορωδία είναι γεμάτη από απίστευτη ενέργεια, πίστη και αφοσίωση στην ιδέα της δημιουργίας ωραίας μουσικής και στο να φέρνει τη χαρά όχι μόνο στους ίδιους αλλά και στους άλλους. Ο Pavol Procházka είναι ο μαέστρος και καλλιτεχνικός διευθυντής της χορωδίας. Υπό την καθοδήγησή του, η χορωδία έχει πραγματοποιήσει διάφορα μοναδικά και πολύ πετυχημένα προγράμματα, όπως τα EUROKOLEDY, EUROLKLORE, ένα πρόγραμμα πασχαλινής μουσικής και άλλα. Έχει συμμετάσχει σε πλήθος διεθνών συναυλιών και φεστιβάλ με μεγάλη επιτυχία (Praga Cantat-2005, Athens Choir Competition-2007, Istanbul-2010, Verdi's choirs Trnava-2011, Montreux Choir Festival-2012,κλπ). Επίσης, έχει συνεργαστεί με πολλούς επαγγελματικούς φορείς, όπως το Σλοβακικό Εθνικό Θέατρο της Bratislava και τη Συμφωνική Ορχήστρα του Σλοβακικού Ραδιοφώνου. Το ρεπερτόριό της περιλαμβάνει έργα διάσημων ντόπιων και ξένων συνθετών.",
      {
        "heading": "Royal Voices of Charlotte, Charlotte NC, ΗΠΑ",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/RoyalVoices.webp"
      },
      "Η χορωδία ιδρύθηκε το 2019 από τον δόκτορα Justin Smith, Διευθυντή Χορωδιακών Δραστηριοτήτων του Πανεπιστημίου Queens, ως μια μικτή χορωδία ακροάσεων που ερμηνεύει ρεπερτόριο όλων των ειδών. Το 2022, προσκλήθηκαν να τραγουδήσουν στο πολιτειακό συνέδριο της Ένωσης Αμερικανών Διευθυντών Χορωδιών στη Βόρεια Καρολίνα , τραγούδησαν στο Carnegie Hall, και συνεργάστηκαν με την Ακαδημία Bach της Charlotte στο Φεστιβάλ Bach της ίδιας πόλης. Επίσης, έχουν κερδίσει το πρώτο βραβείο στον διαγωνισμό μικτών χορωδιών στο Διεθνές Χορωδιακό Φεστιβάλ Kathaumixw της British Columbia, στον Καναδά. Το φθινόπωρο του 2024 ήταν προσκεκλημένοι να παρουσιαστούν στο εθνικό συνέδριο του Εθνικού Συλλογικού Οργανισμού Χορωδιών (NCCO) στην Atlanta.",
      {
        "heading": "TrencaCors, Βαρκελώνη, Ισπανία",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/TrencaCors.webp"
      },
      "Είναι η χορωδία ενηλίκων από το Escola de Músics i JPC, που ιδρύθηκε το Σεπτέμβρη του 2018 και αυτή τη στιγμή αριθμεί 59 χορωδούς. Το αρχικά κλασικό ρεπερτόριό τους έχει συμπληρωθεί με νέες προτάσεις, δημιουργώντας ένα φρέσκο και μοντέρνο ρεπερτόριο ικανό να δημιουργεί έντονα συναισθήματα. Έχει δώσει παραστάσεις σε πολύ σημαντικές και εμβληματικές αίθουσες, όπως το Ωδείο της Βαρκελώνης, το Palau de la Música Catalana , το Μεγάλο Θέατρο του Liceu και την εκκλησία Sagrada Família. Τον Οκτώβρη του 2022, συμμετείχε στην κοινωνική όπερα La Gata Perduda στο Μεγάλο Θέατρο του Liceu και στο ντοκιμαντέρ Òpera Prima από το κανάλι TV3 (Televisió de Catalunya). Η χορωδία εξελίσσεται με την εμπειρία που κερδίζει από τις πολλές συναυλίες της (κατά μέσο όρο, 10 το χρόνο) και τη συντονισμένη προσπάθεια όλων των μελών που απαρτίζουν αυτή τη μεγάλη οικογένεια.",
      {
        "heading": "VeraVoce, Mazańcowice, Πολωνία",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/VeraVoce.webp"
      },
      "Πρόκειται για ένα φωνητικό σύνολο που δραστηριοποιείται από το 2023. Αποτελείται από μια ομάδα 11 νέων και τρελών ατόμων, φίλων, οι οποίοι έχουν πάθος να τραγουδούν μαζί. Στο σύνολο, επίσης, συμπεριλαμβάνονται φοιτητές από τη μουσική ακαδημία Karol Szymanowski του Katowice. Ερμηνεύει κυρίως θρησκευτική μουσική από όλες τις εποχές. Παρά τη σύντομη ύπαρξή του, έχει ήδη δώσει αρκετές συναυλίες με μουσική των Παθών και χριστουγεννιάτικη μουσική. Τέλος, έχει πάρει μέρος στην πρεμιέρα του έργου Passion, που είναι ένα σύγχρονο κομμάτι που έχει συνθέσει ο Pawel Kruczek.",
      {
        "heading": "Φωνητικό Κουαρτέτο του Μουσικού Τμήματος του Πανεπιστημίου Jan Długosz, Częstochowa, Πολωνία",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/dlugosz.webp"
      },
      "Πρόκειται για ένα σύνολο αποτελούμενο από φοιτητές του Μουσικού Τμήματος του Πανεπιστημίου Jan Długosz, με ιδιαίτερο ενδιαφέρον για το πολυφωνικό τραγούδι. Επιθυμούν να διευρύνουν τις φωνητικές ικανότητές τους και να γνωρίσουν καλύτερα το ρεπερτόριο της χορωδιακής μουσικής. Το Κουαρτέτο συμμετέχει σε φοιτητικές συναυλίες και ποικίλους εορτασμούς του Πανεπιστημίου. Εδώ και χρόνια, διευθύνεται από τον Δόκτωρα Hab. Przemysław Jeziorowski. Η τωρινή σύνθεση του Κουαρτέτου λειτουργεί από τον Οκτώβρη του 2023. Έχει δώσει παραστάσεις στην Πολωνία, την Σλοβακία και την Ισπανία. Το 2023, κέρδισε το 2ο βραβείο στον 19ο Διεθνή Διαγωνισμό Ερμηνείας «Φοιτητικές Καλλιτεχνικές Δραστηριότητες» στο Ružomberok (Σλοβακία) στην κατηγορία Συνόλων Δωματίου και αργυρό δίπλωμα καθώς και ειδικό βραβείο για το Καλύτερο Ακαδημαϊκό Φωνητικό Σύνολο στον 1ο Εθνικό Διαγωνισμό Θρησκευτικής Μουσικής στο Zgierz (Πολωνία).",
      {
        "heading": "Χορωδία Δωματίου Vox Humana, Sfântu Gheorghe, Ρουμανία",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/voxhumana.webp"
      },
      "Ιδρύθηκε το 1972 από καθηγητές μουσικής της πόλης Sfântu Gheorghe. Υπό την καθοδήγηση του μαέστρου Szilágyi Zsolt, η χορωδία έχει επιτύχει πρώτα βραβεία σε εθνικούς διαγωνισμούς, επιτυχίες στο εξωτερικό στους πιο ονομαστούς χορωδιακούς διαγωνισμούς της Ευρώπης, ποικίλες εμφανίσεις και μια σειρά δικών τους συναυλιών. Έφτασε μέχρι και σε Παπική ακρόαση το 1982, και από τότε περήφανα ακολουθεί τον όρκο πίστης στον Πάπα John Paul II: “Διδάξτε τους ανθρώπους του Θεού να τραγουδούν όμορφα και αφοσιωμένα, με τις αποστολικές μου ευλογίες”. Οι επιτυχίες της περιλαμβάνουν χάλκινο μετάλλιο στην Χορωδιακή Ολυμπιάδα της Αθήνας (1996), χρυσό μετάλλιο στο Διεθνή Χορωδιακό Διαγωνισμό της Βαρκελώνης (1999), χάλκινο μετάλλιο στον Διεθνή Χορωδιακό Διαγωνισμό της Ρόδου (2001), τρίτο βραβείο στο Χορωδιακό Φεστιβάλ Οχρίδας (2010). Το ρεπερτόριό της αποτελείται από α καπέλα προκλασικά μέχρι σύγχρονα έργα, καθώς και φωνητικά-συμφωνικά κομμάτια από τους Mozart, Handel, Orff, μέχρι και ροκ όπερα. Η χορωδία παίζει σημαντικό ρόλο στην προώθηση του χορωδιακού τραγουδιού στην περιοχή, η οποία έχει ήδη μακρά παράδοση στην Επαρχία Covasna.",
      {
        "heading": "Χορωδία Δωματίου WPA UAM, Kalisz, Πολωνία",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/wpa.webp"
      },
      "Ιδρύθηκε το 1996 από την **Beata Szymańska**, η οποία είναι η μαέστρος της χορωδίας από τότε. Αποτελείται από φοιτητές και αποφοίτους του Παιδαγωγικού-Καλλιτεχνικού Τμήματος του Kalisz, μέρος του Πανεπιστημίου Adam Mickiewicz του Poznan. Εμφανίζεται στην Πολωνία και στο εξωτερικό (Γερμανία Ιταλία, Σουηδία, Βόρεια Μακεδονία, Ισπανία, Ουγγαρία). Κατά τη διάρκεια της ύπαρξής της, έχει συμμετάσχει σε πολλές διεθνείς και τοπικές καλλιτεχνικές εκδηλώσεις καθώς και σε ποικίλα συμφωνικά προγράμματα. Το ρεπερτόριό της περιλαμβάνει τόσο κομμάτια a cappella από διάφορες περιόδους όσο και χορωδιακή-ορχηστρική μουσική. Έχει ηχογραφήσει ένα άλμπουμ, που περιέχει το AGNUS DEI, έργο 167, του Egil Hovland, και το Da Pacem του Michael Villmow.",
      {
        "heading": "Μικτή Χορωδία Δημοτικής Ενότητας Αγριάς, Βόλος, Ελλάδα",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/volos-agrias.webp"
      },
      "Ιδρύθηκε το 1995. Αποτελείται από ερασιτέχνες χορωδούς από το Βόλο και την Αγριά, που τους ενώνει η αγάπη τους για τη μουσική και το χορωδιακό τραγούδι. Είναι σημείο αναφοράς της πολιτιστικής ζωής της περιοχής και διοργανώνει κάθε χρόνο τη Χορωδιακή Συνάντηση Αγριάς, με συμμετοχή χορωδιών από την Ελλάδα και το εξωτερικό. Το ρεπερτόριο της Χορωδίας περιλαμβάνει όλη την γκάμα τραγουδιών από κλασσικά, βυζαντινά, παραδοσιακά έργα μέχρι έντεχνο και σύγχρονο ελληνικό τραγούδι. Από τον Σεπτέμβριο του 2022 άρχισε η καινούρια περίοδος της Χορωδίας, με νέο μαέστρο τον Νίκο Αδρασκέλα, υπό την καλλιτεχνική διεύθυνση και διδασκαλία του οποίου η Χορωδία εισήλθε σε καινούριους, ακόμη πιο απαιτητικούς δρόμους, ερμηνεύοντας τον Μάιο του 2023 το έργο «Τελευταίος ασπασμός», μια Χορωδιακή Ελεγεία του νέου συνθέτη Μιλτιάδη Κασσάρα, διοργάνωσε ξανά τον Ιούνιο μετά από διακοπή τριών χρόνων της πανδημίας με μεγάλη επιτυχία την 22η Χορωδιακή Συνάντηση Αγριάς, τον Νοέμβριο συμμετείχε στο Φεστιβάλ Περάματος και τον Δεκέμβριο στα χορωδιακά φεστιβάλ της πόλης του Βόλου. Οδεύοντας στην 29η χρονιά της, η χορωδία συνεχίζει τη δημιουργική και ανοδική πορεία με στόχο να συντελέσει στην διάδοση της χορωδιακής πράξης με επίκεντρο την ελληνική δημιουργία.",
      {
        "narrow": 0
      },
      {
        "narrow": 8
      },
      {
        "heading": "Εισαγωγή",
        "level": 3,
        "align": "center"
      },
      "Το Διεθνές Χορωδιακό Φεστιβάλ Πρέβεζας αποτελεί μια θεσμοθετημένη εκδήλωση υψηλής καλλιτεχνικής ποιότητας, τόσο στον ελληνικό όσο και στο διεθνές χορωδιακό χώρο. Περισσότερες από 400 χορωδίες από όλο τον κόσμο έχουν βρεθεί στη σκηνή του, ενώ μεγάλες προσωπικότητες έχουν λάβει μέρος στη Διεθνή Κριτική Επιτροπή, εγγυώμενοι το καλλιτεχνικό κύρος του φεστιβάλ καθώς και την αξιοπιστία των διαδικασιών του.",
      {
        "heading": "Συμμετοχή",
        "level": 3,
        "align": "center"
      },
      "Όλα τα είδη χορωδιών μπορούν να συμμετάσχουν στις μη διαγωνίσιμες εκδηλώσεις του φεστιβάλ μας. Για την περαιτέρω διάδοσή του σε παγκόσμιο επίπεδο, θα θέλαμε να σας ενημερώσουμε ότι θα βρείτε όλοι έναν ελκυστικό προορισμό που καταφέρνει να συνδυάσει τόσο την υψηλή καλλιτεχνική αξία και ποιότητα, όσο και τα πλεονεκτήματα ενός όμορφου ταξιδιού, καθώς η περιοχή μας είναι γεμάτη αρχαιολογικούς χώρους από την Αρχαία Ελληνική περίοδο και περιοχές με μεγάλη φυσική ομορφιά. Επιπλέον, η διαμονή στην Πρέβεζα θα μπορούσε να είναι μια ευκαιρία τόσο για εκδρομές στη γύρω περιοχή όσο και για εκδρομές στη μεγαλύτερη περιοχή του νομού μας.",
      {
        "heading": "Οργάνωση",
        "level": 3,
        "align": "center"
      },
      "Οι μη διαγωνίσιμες χορωδίες θα έχουν δυνατότητα να παρουσιάσουν ανεπίσημες εκτελέσεις σε διάφορες τοποθεσίες σε όλη την πόλη, έχοντας τη δυνατότητα να συναντηθούν με άλλες χορωδίες, να δουν μερικά από τα όμορφα τοπία της Πρέβεζας και να παρακολουθήσουν όλες τις εκδηλώσεις του φεστιβάλ. Οι μη διαγωνίσιμες χορωδίες είναι ελεύθερες να οργανώσουν τις δικές τους τουριστικές δραστηριότητες κατά τη διάρκεια της παραμονής τους, αλλά ζητείται να ενημερώνουν την οργανωτική επιτροπή καθώς το πρόγραμμά τους ολοκληρώνεται, για να διασφαλίσουν ότι δεν θα υπάρξει σύγκρουση στο χρονοδιάγραμμα. Διάφορα είδη εκδηλώσεων μπορούν να οργανωθούν σε συνεργασία με τους συμμετέχοντες. Ευκαιρίες για εμφανίσεις σε διάφορες ελληνικές πόλεις (Λευκάδα, Ιωάννινα και Αγρίνιο) είναι δυνατό να οργανωθούν μετά την αίτηση των χορωδιών.",
      {
        "heading": "Χρονοδιάγραμμα",
        "level": 3,
        "align": "center"
      },
      "Η τοποθεσία και το χρονοδιάγραμμα των μη διαγωνίσιμων συναυλιών θα διαμορφωθούν από την Οργανωτική Επιτροπή που θα επιλέξει επίσης ποιες χορωδίες θα συμμετάσχουν σε κάθε συναυλία. Κομμάτια της επιλογής κάθε χορωδίας (με προτίμηση: ιερά ή λαογραφικά έργα) θα εκτελεστούν \"a cappella\" εντός 10-15 λεπτών.",
      {
        "heading": "Διαδικασία Αίτησης",
        "level": 3,
        "align": "center"
      },
      {
        "list": [
          "Κάθε χορωδία υποχρεούται να καταθέσει μέχρι την 1η Μαΐου 2024 το αργότερο:",
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
          "Η ημερομηνία λήξης υποβολής ολοκληρωμένων αιτήσεων είναι η 1η Μαΐου 2024.",
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
      "Οι επιλεγμένες χορωδίες, μετά την αποδοχή της συμμετοχής τους από την Οργανωτική Επιτροπή, πρέπει να καταβάλουν κατάθεση € 150,00 (μη επιστρέψιμη) για τα τέλη εγγραφής. Στη συνέχεια - όχι αργότερα από την 15η Μαΐου 2024 - θα σας ζητηθεί να καταβάλετε € 35 για κάθε μέλος της χορωδίας, συμπεριλαμβανομένου του μαέστρου, του πιανίστα/μουσικού και των συνοδών (το τέλος δεν περιλαμβάνει διαμονή και διατροφή). Αυτό περιλαμβάνει τα τέλη εισόδου για τον διαγωνισμό και το φεστιβάλ. Παρακαλούμε αφαιρέστε την κατάθεση των € 150 που έχουν ήδη καταβληθεί από το συνολικό ποσό πριν καταβάλετε το υπόλοιπο.",
      {
        "list": [
          "Το τέλος εγγραφής πρέπει να μεταφερθεί στον ακόλουθο λογαριασμό:",
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
      "Για να υπολογίσετε τα έξοδα, σας ενημερώνουμε ότι ένα δίκλινο δωμάτιο σε ένα καλό ξενοδοχείο στην Πρέβεζα κοστίζει περίπου €65-70. Έτσι, υπολογίστε το κόστος ανά άτομο περίπου €30-35 ανά διανυκτέρευση, δηλαδή, για 4 διανυκτερεύσεις περίπου €120-140 ανά άτομο. (Περιλαμβάνεται πρωινό). Για 2 πλήρη γεύματα (μεσημεριανό - δείπνο) υπολογίστε 25 - 30€ ανά άτομο, έτσι για 4 ημέρες διατροφής υπολογίστε περίπου 100-120€ ανά άτομο.",
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
        "heading": "28ος Διεθνής Χορωδιακός Διαγωνισμός",
        "level": 2,
        "align": "center"
      },
      {
        "heading": "Κατηγορίες Διαγωνισμού:",
        "level": 3,
        "align": "center"
      },
      {
        "heading": "Κατηγορία Α: Μικτές χορωδίες",
        "level": 4,
        "align": "center"
      },
      {
        "list": [
          "Απαιτήσεις ρεπερτορίου: (Επιτρέπονται μόνο πρωτότυπες συνθέσεις) 4 κομμάτια εκκλησιαστικής μουσικής (Αναγέννηση ή μπαρόκ, ρομαντική περίοδος, μια σύνθεση από τις αρχές του 20ού αιώνα, μια σύνθεση συνθέτη γεννημένου μετά το 1970). Αν μια χορωδία επιθυμεί να περιλάβει οποιοδήποτε άλλο κομμάτι(α) εκκλησιαστικής μουσικής στο συγκεκριμένο χρόνο, μπορεί να το πράξει.",
          "Αριθμός τραγουδιστών: Ελάχιστοι είκοσι-ένα (21) τραγουδιστές.",
          "Όρια ηλικίας: κανένα.",
          "Διάρκεια εμφάνισης: 15-20 λεπτά μουσικής.",
          "Δεν επιτρέπεται συνοδεία.",
          "Ελεύθερη επιλογή τονικότητας (προσδιορισμένη εκ των προτέρων)."
        ],
        "align": "center"
      },
      {
        "heading": "Κατηγορία Β: Χορωδίες Ομοίων Φωνών (Ανδρικές ή Γυναικείες)",
        "level": 4,
        "align": "center"
      },
      {
        "list": [
          "Απαιτήσεις ρεπερτορίου: (Επιτρέπονται μόνο πρωτότυπες συνθέσεις) 4 κομμάτια εκκλησιαστικής μουσικής (Αναγέννηση ή μπαρόκ, ρομαντική περίοδος, μια σύνθεση από τις αρχές του 20ού αιώνα, μια σύνθεση συνθέτη γεννημένου μετά το 1970). Αν μια χορωδία επιθυμεί να περιλάβει οποιοδήποτε άλλο κομμάτι(α) εκκλησιαστικής μουσικής στο συγκεκριμένο χρόνο, μπορεί να το πράξει.",
          "Αριθμός τραγουδιστών: Ελάχιστοι είκοσι-ένα (21) τραγουδιστές.",
          "Όρια ηλικίας: κανένα.",
          "Διάρκεια εμφάνισης: 15-20 λεπτά μουσικής.",
          "Δεν επιτρέπεται συνοδεία.",
          "Ελεύθερη επιλογή τονικότητας (προσδιορισμένη εκ των προτέρων)."
        ],
        "align": "center"
      },
      {
        "heading": "Κατηγορία Γ: Παιδικές χορωδίες",
        "level": 4,
        "align": "center"
      },
      {
        "list": [
          "Απαιτήσεις ρεπερτορίου: (Επιτρέπονται μόνο πρωτότυπες συνθέσεις) 4 κομμάτια εκκλησιαστικής μουσικής (Αναγέννηση ή μπαρόκ, ρομαντική περίοδος, μια σύνθεση από τις αρχές του 20ού αιώνα, μια σύνθεση συνθέτη γεννημένου μετά το 1970). Αν μια χορωδία επιθυμεί να περιλάβει οποιοδήποτε άλλο κομμάτι(α) εκκλησιαστικής μουσικής στο συγκεκριμένο χρόνο, μπορεί να το πράξει.",
          "Αριθμός τραγουδιστών: Ελάχιστοι είκοσι-ένα (21) τραγουδιστές.",
          "Όρια ηλικίας: Μέχρι 18 ετών.",
          "Διάρκεια εμφάνισης: 15-20 λεπτά μουσικής.",
          "Συνοδεία: Μέγιστο 2 κομμάτια.",
          "Ελεύθερη επιλογή τονικότητας (προσδιορισμένη εκ των προτέρων)."
        ],
        "align": "center"
      },
      {
        "heading": "Κατηγορία Δ: Μικροχορωδίες / Φωνητικά σύνολα (μικτά, ανδρικά ή γυναικεία σύνολα)",
        "level": 4,
        "align": "center"
      },
      {
        "list": [
          "Απαιτήσεις ρεπερτορίου: (Επιτρέπονται μόνο πρωτότυπες συνθέσεις) 4 κομμάτια εκκλησιαστικής μουσικής (Αναγέννηση ή μπαρόκ, ρομαντική περίοδος, μια σύνθεση από τις αρχές του 20ού αιώνα, μια σύνθεση συνθέτη γεννημένου μετά το 1970). Αν μια χορωδία επιθυμεί να περιλάβει οποιοδήποτε άλλο κομμάτι(α) εκκλησιαστικής μουσικής στο συγκεκριμένο χρόνο, μπορεί να το πράξει.",
          "Αριθμός τραγουδιστών: Μέγιστοι είκοσι (20) τραγουδιστές.",
          "Όρια ηλικίας: χωρίς όριο",
          "Διάρκεια εμφάνισης: 15-20 λεπτά καθαρής μουσικής",
          "Δεν επιτρέπεται συνοδεία",
          "Ελεύθερη επιλογή τονικότητας (προσδιορισμένη εκ των προτέρων)."
        ],
        "align": "center"
      },
      {
        "heading": "Κατηγορία Ε: Νεανικές χορωδίες (μικτά, ανδρικά ή γυναικεία σύνολα)",
        "level": 4,
        "align": "center"
      },
      {
        "list": [
          "Απαιτήσεις ρεπερτορίου: (Επιτρέπονται μόνο πρωτότυπες συνθέσεις) 4 κομμάτια εκκλησιαστικής μουσικής (Αναγέννηση ή μπαρόκ, ρομαντική περίοδος, μια σύνθεση από τις αρχές του 20ού αιώνα, μια σύνθεση συνθέτη γεννημένου μετά το 1970). Αν μια χορωδία επιθυμεί να περιλάβει οποιοδήποτε άλλο κομμάτι(α) εκκλησιαστικής μουσικής στο συγκεκριμένο χρόνο, μπορεί να το πράξει.",
          "Αριθμός τραγουδιστών: Ελάχιστοι είκοσι-ένα (21) τραγουδιστές.",
          "Όρια ηλικίας: Μέχρι 25 ετών.",
          "Διάρκεια εμφάνισης: 15-20 λεπτά μουσικής.",
          "Συνοδεία: Μέγιστο 2 κομμάτια.",
          "Ελεύθερη επιλογή τονικότητας (προσδιορισμένη εκ των προτέρων)."
        ],
        "align": "center"
      },
      {
        "heading": "Θεματικές Κατηγορίες:",
        "level": 2,
        "align": "center"
      },
      {
        "heading": "Κατηγορία ΣΤ: Πνευματική, Gospel, Jazz, Χορωδίες Ποπ, Σύνολα Ποπ, Λαογραφική, Βυζαντινή ψαλμωδία",
        "level": 4,
        "align": "center"
      },
      {
        "list": [
          "Απαιτήσεις ρεπερτορίου: Αυτή η κατηγορία προσφέρει σε κάθε χορωδία τη δυνατότητα να εκφράσει τις δικές της παραδόσεις και τα δυνατά σημεία. Το πρόγραμμα θα πρέπει να αντικατοπτρίζει τις χορωδιακές μουσικές δραστηριότητες. Πρέπει να δοθεί σοβαρή προσοχή στη δραματική πορεία του συνολικού προγράμματος.",
          "Αριθμός τραγουδιστών: χωρίς όριο",
          "Όρια ηλικίας: χωρίς όριο",
          "Διάρκεια εμφάνισης: 15-20 λεπτά μουσικής.",
          "Συνοδεία: χωρίς περιορισμό.",
          "Ελεύθερη επιλογή τονικότητας (προσδιορισμένη εκ των προτέρων)."
        ],
        "align": "center"
      },
      {
        "heading": "Κατηγορία Ζ: Ελεύθερο πρόγραμμα πρωτότυπης χορωδιακής μουσικής",
        "level": 4,
        "align": "center"
      },
      {
        "anchor": "ijc-info"
      },
      {
        "list": [
          "Απαιτήσεις ρεπερτορίου: Θα πρέπει να εκτελεστούν τουλάχιστον 4 πρωτότυπες συνθέσεις.",
          "Αριθμός τραγουδιστών: χωρίς όριο",
          "Όρια ηλικίας: χωρίς όριο",
          "Διάρκεια εμφάνισης: 15-20 λεπτά μουσικής.",
          "Συνοδεία: χωρίς περιορισμό.",
          "Ελεύθερη επιλογή τονικότητας (προσδιορισμένη εκ των προτέρων)."
        ],
        "align": "center"
      },
      {
        "heading": "Διεθνής Κριτική Επιτροπή I.J.C.",
        "level": 3,
        "align": "center"
      },
      {
        "list": [
          "Μια Διεθνής Κριτική Επιτροπή, αποτελούμενη από τουλάχιστον τρεις γνωστούς Έλληνες και/ή ξένους μουσικούς θα κρίνει το διαγωνιστικό μέρος του φεστιβάλ και θα βαθμολογεί τους συμμετέχοντες σύμφωνα με τις παρακάτω κατηγορίες:",
          "Τεχνική ποιότητα εκτέλεσης",
          "Διαφάνεια και ποιότητα φωνητικού υλικού",
          "Δυναμική ερμηνεία",
          "Δυνατότητα προσαρμογής"
        ],
        "align": "center"
      },
      {
        "heading": "Μετάλλια",
        "level": 3,
        "align": "center"
      },
      {
        "heading": "Η I.J.C. θα απονείμει βραβεία στις χορωδίες, που θα έχουν επιτύχει τις ακόλουθες βαθμολογίες:",
        "level": 5,
        "align": "center"
      },
      {
        "list": [
          "Χρυσό Μετάλλιο: Από 90.00 έως 100 βαθμούς,",
          "Αργυρό Μετάλλιο: Από 80.00 έως 89.99 βαθμούς",
          "Χάλκινο Μετάλλιο: Από 70.00 έως 79.99 βαθμούς"
        ],
        "align": "center"
      },
      {
        "heading": "Έπαθλα – Χρηματικά Βραβεία",
        "level": 3,
        "align": "center"
      },
      {
        "heading": "Τα ακόλουθα χρηματικά βραβεία θα απονεμηθούν στις χορωδίες με χρυσό μετάλλιο και με το υψηλότερο σκορ σε κάθε κατηγορία:",
        "level": 4,
        "align": "center"
      },
      {
        "list": [
          "Κατηγορία Α: 500€ & 1ο Βραβείο",
          "Κατηγορία Β: 400€ & 1ο Βραβείο",
          "Κατηγορία Γ: 400€ & 1ο Βραβείο",
          "Κατηγορία Δ: 300€ & 1ο Βραβείο",
          "Κατηγορία Ε: 400€ & 1ο Βραβείο",
          "Κατηγορία ΣΤ: 400€ & 1ο Βραβείο",
          "Κατηγορία Ζ: 400€ & 1ο Βραβείο"
        ],
        "align": "center"
      },
      {
        "heading": "Έπαθλα – Ειδικά Βραβεία",
        "level": 3,
        "align": "center"
      },
      {
        "heading": "Η I.J.C. ενδέχεται να απονέμει ειδικά βραβεία: για την καλύτερη εκτέλεση ορθόδοξης ψαλμωδίας, για την καλύτερη λαογραφική εκτέλεση, για την καλύτερη διεύθυνση, κ.λπ.",
        "level": 5,
        "align": "center"
      },
      {
        "heading": "Τελετή Απονομής",
        "level": 3,
        "align": "center"
      },
      {
        "anchor": "app-proc"
      },
      {
        "heading": "Όλα τα βραβεία, τα πιστοποιητικά και τα διπλώματα θα ανακοινωθούν και θα παραδοθούν σε μια ειδική τελετή, με παρουσία του κοινού και των αρχών, όπου οι χορωδίες που επιλέγονται από τη Διεθνή Κριτική Επιτροπή θα ερμηνεύσουν ένα (1) ή δύο (2) τραγούδια επίσης επιλεγμένα από την I. J .C.",
        "level": 5,
        "align": "center"
      },
      {
        "heading": "Μη Διαγωνιστικές Συναυλίες",
        "level": 3,
        "align": "center"
      },
      {
        "heading": "Η τοποθεσία και η ώρα για τις μη διαγωνιστικές συναυλίες θα οργανωθούν από την Οργανωτική Επιτροπή. Κομμάτια της επιλογής κάθε χορωδίας θα εκτελεστούν \"a cappella\" εντός 10-15 λεπτών.",
        "level": 5,
        "align": "center"
      },
      {
        "heading": "Διαδικασία Υποβολής Αιτήσεων",
        "level": 3,
        "align": "center"
      },
      {
        "heading": "Εγγραφή - Κόστη Συμμετοχής",
        "level": 4,
        "align": "center"
      },
      "Οι επιλεγμένες χορωδίες, μετά την αποδοχή της συμμετοχής τους από την Οργανωτική Επιτροπή, πρέπει να καταβάλουν κατάθεση 150€ (μη επιστρεπτέα) για τα έξοδα εγγραφής.\nΣτη συνέχεια - όχι μετά την 15η Μαΐου 2024 - θα σας ζητηθεί να καταβάλετε 35€ για κάθε μέλος της χορωδίας, συμπεριλαμβανομένου του διευθυντή, του πιανίστα/μουσικού και των συνοδών (η χρέωση δεν περιλαμβάνει διαμονή & διατροφή). Αυτό περιλαμβάνει τα δικαιώματα συμμετοχής στον διαγωνισμό και το φεστιβάλ. Παρακαλούμε αφαιρέστε την κατάθεση των 150€ που έχετε ήδη καταβάλει από το συνολικό ποσό πριν καταβάλετε το υπόλοιπο.",
      {
        "list": [
          "Το αναληφθέν κόστος εγγραφής πρέπει να κατατεθεί στον ακόλουθο λογαριασμό:",
          "ΕΘΝΙΚΗ ΤΡΑΠΕΖΑ",
          "Χορωδία \"Αρμονία\" Πρέβεζας",
          "Αριθμός Λογαριασμού: 448/480188-16",
          "Κωδικός Swift – Bic: ETHNGRAA",
          "IBAN: GR 7201 1044 8000 0044 8480 18816"
        ],
        "align": "center"
      },
      {
        "heading": "Κάθε χορωδία πρέπει να αποστείλει μέχρι την 1η Μαΐου 2024 το ακόλουθο.",
        "level": 5,
        "align": "center"
      },
      {
        "list": [
          "Ένα πλήρως λεπτομερές έντυπο αίτησης (που επισυνάπτεται).",
          "Μια πρόσφατη ηχογράφηση της χορωδίας με περίπου επτά αρχεία MP3, σε CD ή μέσω email",
          "Το προτεινόμενο πρόγραμμα διαγωνισμού της χορωδίας (βλ. Απαιτήσεις Αναφορικά με το Ρεπερτόριο που περιγράφονται παραπάνω). Εάν γίνει αποδεκτό, αυτό το ρεπερτόριο και η σειρά εκτέλεσης του δεν μπορεί να αλλάξει στη συνέχεια",
          "Έξι πρωτότυπες παρτιτούρες κάθε έργου (μη επιστρεπτέες)",
          "Μια σύντομη ιστορία της χορωδίας και του μαέστρου με λεπτομέρειες δραστηριοτήτων και επιτευγμάτων (Αγγλικό Κείμενο, 250 λέξεις)",
          "Μια πρόσφατη φωτογραφία (κατάλληλη για δημοσιότητα) της χορωδίας και του μαέστρου.",
          "Μια λίστα με τα ονόματα και τις διευθύνσεις των μελών της χορωδίας που δεν κατέχουν διαβατήρια της ΕΕ."
        ],
        "align": "center"
      },
      {
        "heading": "Διαμονή, Φαγητό & Μεταφορά",
        "level": 3,
        "align": "center"
      },
      {
        "p": "Κάθε χορωδία είναι υπεύθυνη για όλα τα θέματα που σχετίζονται με την οργάνωση, την κράτηση και την πληρωμή όλων των διαμονών και γευμάτων κατά τη διάρκεια της παραμονής τους στην Πρέβεζα. Το φεστιβάλ δεν φέρει ευθύνη για οποιοδήποτε πρόβλημα κράτησης που πιθανόν να προκύψει.",
        "align": "center"
      },
      {
        "anchor": "conditions"
      },
      {
        "heading": "Επιλογή",
        "level": 3,
        "align": "center"
      },
      {
        "p": "Θα ληφθούν υπόψη μόνο οι αιτήσεις που περιλαμβάνουν όλες τις απαιτήσεις που περιγράφονται στη Διαδικασία Υποβολής Αιτήσεων. Οι χορωδίες επιλέγονται με βάση το υλικό της αίτησής τους. Ιδιαίτερη προσοχή δίνεται στο ρεπερτόριο και στην ποιότητα της εκτέλεσης που παρουσιάζεται στο CD ακρόασης που υποβάλλεται με την αίτηση.",
        "align": "center"
      },
      {
        "heading": "Όροι Συμμετοχής",
        "level": 3,
        "align": "center"
      },
      {
        "list": [
          "Η ημερομηνία λήξης για την υποβολή ολοκληρωμένων αιτήσεων είναι η 1η Μαΐου 2024.",
          "Μόλις ληφθεί το κατάλληλο υλικό, θα αξιολογηθεί και θα ενημερωθεί η χορωδία εάν επιλέγεται να συμμετάσχει ή όχι.",
          "Το κόστος εγγραφής (μείον οποιεσδήποτε τραπεζικές χρεώσεις) θα επιστραφεί εάν μια χορωδία δεν επιλεγεί να συμμετάσχει στο φεστιβάλ.",
          "Οποιαδήποτε επιλεγμένη χορωδία που αποσύρεται από τον διαγωνισμό δεν δικαιούται επιστροφή του κόστους εγγραφής.",
          "Είναι παράνομο να εκτελείται μουσική που έχει αναπαραχθεί παράνομα. Εάν μια χορωδία το κάνει, το φεστιβάλ δεν φέρει καμία ευθύνη για οποιαδήποτε ενέργεια αναλάβουν οι εκδότες.",
          "Η Οργανωτική Επιτροπή δεν αναλαμβάνει νομική ευθύνη όσον αφορά οτιδήποτε σχετίζεται με τη συμμετοχή μιας χορωδίας στο φεστιβάλ.",
          "Το φεστιβάλ δεν φέρει ευθύνη ή υποχρέωση για τα έξοδα διαμονής και διατροφής που προκύπτουν από τη χορωδία.",
          "Το φεστιβάλ δεν φέρει ευθύνη για οποιαδήποτε έξοδα που προκύπτουν από οποιαδήποτε χορωδία ή μεμονωμένο χορωδό που συμμετέχει στο φεστιβάλ."
        ],
        "align": "center"
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
        "heading": "Giorgos Kardoutsos, Commissioner",
        "level": 6
      },
      {
        "heading": "Efstathia Dimou, Commissioner",
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
          "[Διεθνής Κριτική Επιτροπή I.J.C.](#ijc-info)",
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
        "heading": "Γιώργος Καρδούτσος, Επίτροπος",
        "level": 6
      },
      {
        "heading": "Ευσταθία Δήμου, Επίτροπος",
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
