import { festivalSchema, type FestivalInput } from "../types";
import { person } from "../people";

const data: FestivalInput = {
  slug: "2018",
  year: 2018,
  editionNumber: 36,
  isCurrentEdition: false,
  // Listing/meta only -- the page itself shows the dates as printed in `content`.
  dates: {
    en: "5–8 July 2018",
    el: "5–8 Ιουλίου 2018",
  },
  poster: "/img/poster-2018.webp",
  title: {
    en: "36th International Choral Festival of Preveza",
    el: "36ο Διεθνές Χορωδιακό Φεστιβάλ Πρέβεζας",
  },
  intro: { en: [], el: [] },
  content: {
    en: [
      {
        "list": [
          "5 - 8 July 2018"
        ]
      },
      {
        "img": "/img/poster-2018.webp"
      },
      {
        "wide": true
      },
      {
        "heading": "International Jury Committee I.J.C.",
        "level": 2,
        "align": "center"
      },
      ...person("ambroz-copi", "en", {level: 3}),
      {
        "heading": "Prof. Dr. Jong-Won Park",
        "level": 3,
        "align": "right"
      },
      "Dr. Jong-Won Park is Professor of Music and Director of Choral Activities at the University Of Wisconsin - River Falls (UWRF), where he teaches private voice lessons, conducting and directs the Concert Choir and Women’s Chorus.\n\nAn active lecturer and clinician, he has also given presentations throughout the United States, Kenya, Korea and Japan. He presented a lecture at the ACDA Regional Conference in 2007. His article was published in the ACDA Choral Journal in February of 2009. In 2010, he founded the group, JW Chorale, in Seoul, Korea, which is a festival choir that rehearses for two weeks and performs in July.\n\nBefore coming to University of Wisconsin – River Falls, Dr. Park held similar positions at Indiana University (IPFW), Yonsei University in Seoul, Korea, and Auburn University in Alabama. Park earned a Bachelor of Music degree from Yonsei University in Seoul, Korea, a Master of Music degree in Voice from the Cleveland Institute of Music, a Master of Music degree in Conducting from Cleveland State University, and a Doctor of Musical Arts degree from Michigan State University. Dr. Park was a member of the Robert Shaw Festival Choir.",
      {
        "img": "/img/jong.webp",
        "layout": "side"
      },
      ...person("john-fitzpatrick", "en", {level: 3}),
      ...person("klaus-jurgen-etzold", "en", {level: 3,align: "right"}),
      ...person("katerina-vassilikou", "en", {level: 3}),
      ...person("theodora-pavlovitch", "en", {level: 3,align: "right"}),
      {
        "anchor": "choirs18"
      },
      {
        "narrow": 8
      },
      {
        "heading": "Choir's Participations",
        "level": 1,
        "align": "center"
      },
      {
        "heading": "Chamber choir “Lyra” from Buzău, Romania",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/lyra.webp"
      },
      "The chamber choir “Lyra” was founded in 1974, by the initiative of some men from Buzău, who loved choral music, among whom there was the teacher Ștefan Stănescu, the conductor of the choir.\nIn these more than 42 years of ceaseless activity, “Lyra” has represented the Buzău town and even Romania at several festivals and contests with national and international participation. This famous activity has been based not only on the talent and love for music of its 40 members, most of them being primary school or kindergarten teachers, but also on the conductor’s lifetime passion, Ștefan Stănescu, who has faithfully served this kind of music for more than 46 years.\n\nUnder his leading, “Lyra” has won important awards at national contests in many cities of Romania and also at some well-known festivals in France, Greece, Switzerland, Czech Republic, Slovakia, Portugal, Italy, Austria, FYROM, Bulgaria, Turkey, Croatia, Montenegro, representing a great confirmation of the choir’s value, based both on the wealth of the repertoire, over 160 plays of great popularity from the Romanian and international contemporary music, and on the quality of the interpretation. At the moment, the choir is sustained by the Cultural Centre “Alexandru Marghiloman” of Buzău town.",
      {
        "heading": "Women’s choir “Bulgarian Voices Berlin” from Berlin, Germany",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/bulgarian-voices.webp"
      },
      "The women’s choir “Bulgarian Voices Berlin” was founded in 2009 by the Bulgarian conductor **Boryana Velichkova**. Its repertoire consists of both modern and authentic renditions of Bulgarian folklore songs and aims to promulgate the rich fabric of Bulgarian musical culture. The 20 women of the ensemble come from different European countries and Australia and all live in Berlin. The choir has participated in multiple international projects (the “Berliner Festspiele”, “Fête de la musique”, “Carnival of cultures”, “Night of choirs”) and has an integral function in the modern multicultural music scene of Berlin. In 2015, Bulgarian Voices Berlin participated in the renowned international dance and folk festival of Rudolstadt, Germany and in 2016, they were invited to the world premiere of “Na Choroto”/ “Dance of voices” by Georgi Andreev. Currently the choir works on their third CD. For the recording, they have cooperated with the famous Bulgarian singer Neli Andreeva and the composer Nikolay Peev.",
      {
        "heading": "Mecsek Kórus from Pécs, Hungary",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/mecsec.webp"
      },
      "The Mecsek Choir was established in 1957 as the choir of Pécs. Among the a cappella works the choir has realized several oratorical concerts with the Pannon Philharmonic Orchestra. The choir has won 1st Prizes in Cantonigros (2004), Olomouc (2005), Budapest (2006), Trnava (2007) and Warsaw (2015). In 2009 the choir won the KÓTA-Prize and the Special Prize of the Hungarian Kodály Association.\n\nThe choir numbers 40 members. Since 2016 the choir has been directed by **Sándor Balatoni**. In 2016 the choir won the Laureate cum laude Prize at the 2nd International Choir Festival in Budapest and 1st Prize at the “Croatia Cantat”. Dr. Sándor Balatoni was born in Pécs in 1983. He finished his doctoral studies at the University of Pécs and the Eastman School of Music, NY, USA. He has won several prizes as an organist, (i.e. the Junior Prima Prize in 2012, the Fulbright Scholarship in 2014). He is an assistant professor at the University of Pécs, the leader of the Pius Choir, and the Mecsek Choir. In 2016 he won the Conductor’s Special Prize at the Croatia Cantat and was awarded the Csorba Prize for his work as a composer. In 2017 he won 1st Prize for his composition from the European Choral Association.",
      {
        "heading": "The Český Krumlov Children’s Choir “Medvidata“ from Český Krumlov, Czech Republic",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/cesky.webp"
      },
      "The Český Krumlov Children’s Choir “Medvidata“ was established in 1995, at the Elementary Art School of the same town, which entered the UNESCO World Heritage list in 1992. It now comprises of more than 250 singers in four different sections. During its existence, the choir has organized more than 500 public performances and over 1500 children have participated in. Its repertoire covers a wide range of folk and classical songs from the Renaissance to contemporary pieces with an emphasis on the 20th century Czech composers, as well as Negro spirituals or stylish arrangements of popular music. The choir has gathered a number of successes on festivals and competitions at home as well as in many other European countries (eg. Neerpelt 2014 - 1st prize Cum Laude, Llangollen 2015 - 2nd and 3rd prize, Cantonigros 2011 - 3rd prize…) and has participated in festivals abroad (Verona 2006, Stockholm 2013, Alta Pusteria (Italy) 2016, Budapest 2017...) but also in the Czech Republic.\n\nThe Český Krumlov Children’s Choir “Medvidata“ has already co-organized a number of Vltavské Cantare Choir festivals. The choir has recorded six CDs and has premiered a number of Czech original compositions. At the piano the choir is accompanied by Michael Bartoš and it is directed by **Lukáš Holec**.\n\nLukáš Holec was born in 1969 in Prachatice. He has studied in the pedagogical department of South-Bohemian University in České Budějovice. He has been teaching choir – singing, classical guitar and music theory at the Elementary Art School of Český Krumlov since 1992 and music theory at the grammar school of the same area. Also, he has taught cultural history at the Historical institute of the South-Bohemian University for 12 years. He has directed the Česká píseň choir (Prachatice), the St. Vitus church choir (Český Krumlov) and the Český Krumlov Children’s Choir since its establishment in 1995.",
      {
        "heading": "Misgav Vocal Ensemble from Misgav, Israel",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/misgav.webp"
      },
      "The Misgav Vocal Ensemble specializes in singing Israeli folk music, which has been influenced by immigrants from all corners of the world. Most of the songs in our repertoire were written in Israel, although some are translations of songs from other cultures. The songs selected for our repertoire are typified by rich and complex arrangements that emphasize the vocal ability of our ensemble.\n\nThe choir is made up of members of the local community who enjoy their weekly rehearsals and musical involvement. It performs regularly for the local community as well as traveling throughout the country to participate in choir festivals and concerts. Also they have performed in several countries abroad (France, Spain, Hungary and Italy). Throughout the years, they have been awarded several prizes: - Second place, in the national competition “Folksongs of Israel” - Gold medal, at the annual Mila Choir Association competition - Second place, at the Slovakia International Folk Festival, Bratislava, Slovakia, 2017\n\nThe ensemble is conducted by **Dr. Nadav Ziv** who holds a doctorate in composition from Bar Ilan University in Israel. An accomplished musician and composer, Dr. Ziv conducts adult and youth vocal and instrumental ensembles and teaches music at several colleges and high schools. His prize winning instrumental and vocal compositions have been performed and recorded in Israel, Germany, Holland, Belgium and New Zealand.",
      {
        "heading": "\"Partners in Praise\" Girls Choir from Minneapolis, MN, USA",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/partners-in-praise.webp"
      },
      "Formed in 1994 to perform in the Broadway production of “Joseph and the Amazing Technicolor Dreamcoat”, Partners in Praise Girls Choir is celebrating 24 seasons of choral excellence. The choir exists to empower young girls to find themselves, their confidence and their potential through music. The choir attracts young women from the greater Minneapolis and St. Paul communities of Minnesota, and they are immersed in a stimulating variety of musical styles, with an emphasis on world music. Partners in Praise Girls Choir has received critical acclaim in international competition, and has appeared on concert stages world – wide: Australia, Greece, Italy, Germany, Austria, Hungary, Czech Republic, Spain, England, Costa Rica, Ireland, Canada, as well as throughout the USA.\n\nA passionate singer, conductor and music educator, **Julia Fahey** is the founder and artistic director of the internationally acclaimed Partners in Praise Girls Choir. Currently on the Faculty of Visitation School and St. Thomas Academy in Mendota Heights, MN, Ms. Fahey is in high demand as a guest conductor and clinician; she has had the privilege to conduct ACDA – MN Choirs, as well as serve as vocal coach for the 2015 All – State Women’s Chorus. Ms. Fahey’s choirs have been chosen to perform at numerous ACDA, MMEA, NCEA state conferences, the 2016 NC – ACDA regional conference, and the 50th anniversary ISME Conference, held in the Canary Islands.",
      {
        "heading": "The “Alexander Petrosyan” National Technical University Chamber Choir from Kharkiv, Ukraine",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/petrsyan.webp"
      },
      "The “Alexander Petrosyan” National Technical University Chamber Choir was founded in Kharkiv, Ukraine, in the fifties of the last century. Since then the Choir has been a regular participant in various concerts, festivals and competitions both in Ukraine and abroad. The Choir’s repertoire includes classical, church, Ukrainian traditional and other ethnic music, as well as pieces by contemporary authors. The group enjoys travelling, receiving guests, learning new music and establishing new musical partnerships with other choirs.\n\nThe choir mostly consists of University students, both former (alumni back in the 80’s) and active scholars. Despite being Science-oriented, all the choir members adore singing, which makes it their primary spare-time activity. Conductor: **Maxim Sidorov**.",
      {
        "heading": "Coro Universidad Autónoma de Bucaramanga (UNAB), Bucaramanga, Colombia",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/coro.webp"
      },
      "The Universidad Autónoma de Bucaramanga (UNAB) Choir was founded along with the Music Faculty and has a well-known trajectory of more than two decades. Made up of students and graduates from several programs, UNAB Choir has established itself as one of the best choral groups in the country. Conducted by **Prof. Rafael Ángel Suescún Mariño**, it has been awarded in important competitions and festivals around the world. Countries such as Argentina, Venezuela, Spain, Austria, Italy, Czech Republic and Germany have acclaimed their outstanding performances that includes Colombian and Latin American folklore, as well as works ranging from the Renaissance period to contemporary times.\n\nProf. Rafael Ángel Suescún Mariño is a graduate of Universidad Industrial de Santander, UIS, with a Bachelor in Music. He got a Master’s degree in Latin American Musicology from Universidad Central of Venezuela, UCV, institution that granted him the distinction \"Honorable Mention\". He also belonged to UIS Choir during eight years as a chorister and Assistant Director of Prof. Gustavo Gómez Ardila. He has participated in various meetings with world renowned masters. Currently he is the UNAB Choir Conductor, Coordinator and Dean of UNAB.",
      {
        "heading": "Female Vocal Ensemble “Res miranda” from Novi Sad, Serbia",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/res-miranada.webp"
      },
      "Female vocal ensemble “Res miranda” consists of eight members. Motivated by their common love for vocal music and refined chamber choir sound, they want to enrich and refresh their cultural environment, to promote the choral sound, and to participate in festivals and competitions at home and abroad. The ensemble's repertoire is diverse, spanning from different epochs and styles to popular music arrangements. The ensemble has participated in two international choir competitions so far. At Ohrid Choir Festival in 2016 it was awarded the 1st Prize and won the Special Award for the best repertoire. In the International Choir Championship in Tuzla, 2017, “Res miranda” won the 1st Prize and the Grand Prix in the category of vocal ensembles, as well as the Special Award for the best performance of a sacred piece. Since 2017, the ensemble has been directed by Dunja Huzjan.\n\n**Dunja Huzjan** was born in 1985 in Novi Sad and graduated from the Academy of Arts of Novi Sad, Department of Music, with the program of study General Music Pedagogy. In the field of choral music she developed her skills through the following choral workshops: the Eurochoir in 2013 (Hungary) and in 2014 (France), the Summer School in Dartington, England in 2010, as well as the “Europa Cantat” Festival in the Netherlands, in 2009. She attended the conducting workshops at the same Festival held in 2012 in Italy and in 2015 in Hungary. Currently, she works as an accompanist at the Ballet School in Novi Sad. She is also the conductor of the Mixed Choir of the Slovenian Society “Kredarica” of Novi Sad and the Children’s Choir of the Academic Culture and Art Society “Sonja Marinković”, as well as the female vocal ensemble “Res miranda”.",
      {
        "heading": "Chamber Choir “Helü” from Tartu, Estonia",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/helu.webp"
      },
      "The Chamber Choir “Helü” was founded in 2004. Initially a project-based choir, it has grown into a tightly knit group of people who enjoy coming together to sing every week. The choir gathers in the South Estonian town of Tartu and its name Helü means “sound” in local dialect. Helü has a varied repertoire, including music by Estonian classical and contemporary composers like Arvo Pärt, Veljo Tormis, Cyrillus Kreek, Tõnu Kõrvits, Pärt Uusberg, as well as works by foreign composers Ralph Vaughan Williams, Jaakko Mäntyjärvi, Eric Whitacre, Ēriks Ešenvalds, Jake Runestad etc.\n\nHelü has successfully taken part in several competitions in Estonia and elsewhere. In 2016, the choir participated in the prestigious Llangollen International Musical Eisteddfod in Wales and returned with 2nd prize in the mixed choir category. In 2017, Helü won the 3rd prize in the chamber choir's category at International Choir Festival “Tallinn 2017”.\n\nChief conductor of Helü is **Küllike Joosing**. She graduated from Heino Eller Tartu Music College as a choir conductor in 1996 and from the Estonian Academy of Music in the conducting class in 2001. Küllike Joosing is a member of board of Estonian Mixed Choirs Association. In addition to Helü, she also conducts Tartu Students’ Choir and “E Stuudio” Children’s Choir. At 2016 Estonian Chamber Choir Festival, she was awarded as the festival’s best conductor.",
      {
        "heading": "Polyphonic Choir of Mytilene from Mytilene, Lesvos island, Greece",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/mytilene.webp"
      },
      "The choir, named Mytilene Choir “Nikos Skalkottas” began its course in 1995 directed by its founder, Mr. Giorgos Pazaitis. In 2004 it became a non-profitable society and since then it has given several concerts in different cities in Greece and abroad and has also participated in international festivals and competitions. In 2005 the choir won 1st prize and the golden medal in the Pan-Hellenic Competition of the Choir Youth Orchestra, while in 2008 and 2010 at the 5th and 6th Choral Olympics in Austria and China respectively, it won the bronze medal in the mixed choir “a cappella” category. It has also participated in concerts in Smyrna, Syros, Chios, Larissa, Thessaloniki and Rethymnon.\n\nIn 2018 the choir was renamed “The Polyphonic Choir of Mytilene”. Since 2012, the choir has been directed by Mr. Stylianos Laskaridis.\n\n**Stylianos Laskaridis** is an outstanding graduate of the music studies department of the Aristotelian University of Thessaloniki, where he studied composition in the class of Michalis Lapidakis. He lives and works in Mytilene as a music teacher at the Mytilene Special Needs High School. He has been involved in choral singing as a choir conductor of several choirs and since November 2012 he has been conducting the Polyphonic Choir of Mytilene. As a composer his works have been performed in concerts at the Athens Concert Hall and the Thessaloniki Concert Hall, while he has received distinctions and awards at Pan-Hellenic contests.",
      {
        "heading": "Children’s Choir \"Pro Musica – Magnólia\" from Michalovce, Slovakia",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/pro-musica.webp"
      },
      "“Pro Musica – Magnólia” Children’s Choir is a combination of the choirs “Pro Musica”, which was established at the Basic Art School of Michalovce in 1998, and “Magnólia”, which was founded at the Basic Art School of Sobrance in 1985, that were united in 2010. In the concerts, the choir consists of 60 children, aged 9 – 17 years and is conducted by their founder and artistic manager, Mrs. Viera Džoganova.\n\nThe choir has won many prestigious prizes around the world and has taken part in many international choral festivals in Europe (Czech Republic, Belgium, Greece, Italy, Finland, Spain, Great Britain, France, etc) and in the USA; in 2015 the choir won the Serenade Choral Festival in Washington, DC and they realised two concert tours in Mexico. The choir won in the category of sacred music in “Claudio Monteverdi” Choral Festival and Competition in Venice, in 2016.\n\n**Viera Džoganova** graduated at the Conservatory of Košice in 1980 in department of the accordion playing. By the further study in 1987 – 1990 she became qualified for children’s choir conducting. She graduated the Pedagogical Faculty of the Catholic University of Ružomberok . At present she has been working as an accordion teacher, artistic director and conductor of two children’s choirs - “Pro Musica” in Michalovce and “Magnólia” in Sobrance.",
      {
        "heading": "\"Ron Meitar\" Choral Ensemble from Meitar, Israel",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/ron-meitar.webp"
      },
      "“Ron Meitar” Choral Ensemble made the desert bloom when they established the group in Meitar, the area where Abraham dwelled, breaking the silence of the desert with the sounds of life, creativity and poetry.\n\nFrom the early days of the community, it has been an inseparable part of the life and culture in Meitar. The group represents Meitar at festivals and conferences in Israel and abroad and has already recorded three albums.\n\nFor the past year and a half, it has been operating under the direction of the conductor and musical director, **Shalom Ohayon** and has embarked on a new show called “Window to the Mediterranean”, in which the group presents a selection of Hebrew songs based on well-known Greek melodies that are much loved in Israel.",
      {
        "heading": "Children's choir \"Lastivka\" from Kyiv, Ukraine",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/lastivka.webp"
      },
      "The children's choir \"Lastivka\" (or “Swallow”) was founded in spring 2005 by the House for Children and Youth Creativity in the Holosiivski district of Kyiv. The choir was started by and works under the leadership of **Oksana Ursatii**. The choir works on the principle of choral studying with young choristers partaking in extracurricular choral singing and academic singing, while the choir studies both solfeggio and the piano. The team consists of three choirs: Preparatory Choir - children of 4-5 years; Junior Choir - children of 6-10 years; Elder (Concert) Choir - children of 10-18 years;\n\n\"Lastivka\" is in fact a large choral family, with seven teachers and more than 150 children. It has won awards at many national and international competitions, such as:",
      {
        "list": [
          "Two first places in the categories of children’s choirs and sacred music at the 47th International Choral Festival in Miedzyzdroje (Międzyzdroje, Poland)",
          "First place and “Best Choir” at the 36th International Children's Choir Festival \"George Frederick Handel\" (Halle, Germany)",
          "First place in the Children’s Choirs category and Grand Prix at “Gavriil Musicescu” 5th International Choir Music Youth Contest Festival (Iasi, Romania)"
        ],
        "align": "center"
      },
      {
        "p": "In 2014, \"Lastivka\" published its first audio disc: “Benjamin Britten, Missa brevis; A Ceremony of Carols”.",
        "align": "center"
      },
      {
        "heading": "Female choir \"Makeblijde\" from Zele, Belgium",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/makebidje.webp"
      },
      "“Makeblijde” was founded in 1943 by Josée Standaert. In its long history, the choir has taken part in numerous projects and exchanges, while it has performed all over Europe. Also, they have given a gala concert for the “King Baudouin Foundation”, in the presence of Prince and Princess of Belgium Philippe and Mathilde.\nThey have participated in many competitions both in their country and abroad, winning plenty of prizes, the most recent of which are:",
      {
        "list": [
          "The highest prize with a 97.66 % score at the Istanbul Chorus Festival & Competition, Turkey 2012;",
          "Second prize in the equal voices’ category and the audience prize, at the international choir competition of Maasmechelen, Belgium 2013",
          "Grand Prix and the special prize for the performance of the compulsory work, at the international competition of Vilnius, Lithuania 2016."
        ],
        "align": "center"
      },
      "**Filip Haentjens** has studied clarinet, chamber music, music theory and transposition at the Music Conservatory of Ghent while has received a higher degree in clarinet and a First Prize bass clarinet at the Royal Flemish Conservatory in Antwerp. There, he also studied choir direction, electronic music composition, MIDI and recording techniques.\nCurrently, he is a clarinet and instrumental ensemble teacher at the Academy of Lokeren. He regularly gives concerts with several ensembles. Having his own recording studio, he also works as a sound engineer, arranger and composer.",
      {
        "heading": "Girls’ Choir \"Skowronki\" from Poznań, Poland",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/skowronki.webp"
      },
      "Girls’ Choir \"Skowronki\" from Poznań, Poland was established in 1950. Its repertoire rediscovers and promotes works of various composers from different periods as well as containing pieces composed especially for the choir. It has taken part in numerous festivals and choral workshops in Poland and abroad and co-operates with the Poznań Philharmonic Orchestra. It has won many prizes in European choir competitions of which the most important are:",
      {
        "list": [
          "The Grand Prix of National Choir Tournament “Legnica Cantat” (2007)",
          "The Grand Prix of International Choir Competition in Ohrid, FYROM (2011)",
          "The Grand Prix of Freamunde International Choir Competition in Portugal (2016)",
          "And, the Grand Prix of International Choir Festival “InCanto Mediterraneo” in Milazzo, Sicily (2017)"
        ],
        "align": "center"
      },
      {
        "p": "It tours regularly and has performed in Germany, Holland, Belgium, Czech Republic, Slovakia, Slovenia, Hungary, Croatia, FYROM, France, Spain, Great Britain, Denmark, Sweden, Lithuania, Latvia, Italy, Portugal, Israel and in the United States. The Choir is directed and creatively inspired by the conductor, educator and choral music aficionado **Alicja Szeluga**.",
        "align": "center"
      },
      {
        "heading": "Mixed Choir of the Women’s Society of Thrakomacedones from Thrakomacedones, Attiki, Greece",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/thrakomacedonians.webp"
      },
      "The Mixed Choir of the Women’s Society of Thrakomacedones was founded in 2003 by the director Stavros Piotopoulos. Until 2011 it operated under the auspices of the Cultural Center of Thrakomacedones, while since 2012 the Women’s Society of Thrakomacedones took over its operation. Its members are amateurs filled with love for music and choir singing and its repertoire includes works of Greek and foreign composers, as well as works from national traditional music.\n\nIt has participated in many concerts at the Thrakomacedones Cultural Center dedicated to Greek composers, such as Xarchakos, Chatzidakis etc, but also to Ionian Poets, rebetiko and others. Also, it has performed all over Greece. It participated in the Closing Ceremony of 2004 Paralympics, while in 2005 it realized its first TV appearance, with a Special Episode about Asia Minor.\n\nSince May 2013 it has been organizing a Choir Festival that has already become a main event in the Greek Choral Music society, while since March 2014 it has been member of the Hellenic Choir Association.\n\n**Stavros Piotopoulos** has studied music (the accordion and theory). He got a degree in choir direction in 2001, working with the conductor Kostis Konstantaras. Also, he has attended several music pedagogic seminars as well as seminars concerning monody and art history. Since 2001 he has been directing the choirs of the Municipal Conservatory of Ag. Varvara, while since 2012 he has been conducting the Mixed Choir of the Women’s Society of Thrakomacedones. He has cooperated in concerts with well-known artists/singers such as Vassilis Lekkas, Kostas Thomaidis, etc., but also with actors, such as Giannis Papagiannis, Grigoris Valtinos and others. He was the director of the choirs of the Municipalities of Thrakomacedones and Holargos, while he was a founding member of the choir “Fons Musicalis”, where he participated as a tenor.",
      {
        "heading": "Mixed Choir \"Educatus\" of the Pedagogical University in Krakow, Poland",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/educadus.webp"
      },
      "Mixed Choir “Educatus” of the Pedagogical University in Krakow started its activity in April 2000 on the initiative of prof. **Adam Korzeniowski**, who has been the conductor and artistic director of the choir. “Educatus” is not only an academic collectivity but also a group of friends with passion for music which thrives thanks to the wonderful atmosphere created by the conductor and members.\n\nIts repertoire contains music from different epochs and styles. It represents the University on various festivals, contests, and concerts in Poland as well as abroad. It has given numerous concerts and participated in prestigious events, such as the 7th pastoral visit of Pope John Paul II to Poland in 2002. Throughout the 18 years of its existence, the choir has won numerous awards, attending competitions in Poland as well as abroad. Greece, Spain, Bulgaria, Sweden, Norway, Denmark, Germany, Switzerland, Italy, Lithuania, Slovakia, the Czech Republic, France are the places which they have visited, having the chance to collect memories and gain experience, which flourishes in every succeeding artistic season.",
      {
        "heading": "Children’s choir of Private Primary School “Ellinoagliki Agogi” from Maroussi, Attiki, Greece",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/ellinoaggliki-agogi.webp"
      },
      "Children’s choir of Private Primary School “Ellinoagliki Agogi” was established in 2002. It consists of 45 students, aged 7-12 years old who represent their school each year to numerous events (theatrical plays, national anniversaries, special music tributes, choir festivals, choir competitions, Christmas events in malls etc.). The choir’s repertoire includes Greek and foreign composers’ songs, for one or two voices, as well as traditional songs from all over the world. The purpose of the choir is the acquisition of music experience, knowledge and socialization, cooperation, expression and having fun. Mrs. **Eleftheria Voulgari** was the Choral Director of the choir until 2011. For the past 6 years, Mrs. Eleftheria Voulgari and Mr. Giorgos Sitotis are co-directing the choir.\n\nEleftheria Voulgari has obtained Diplomas in Piano, Music Composition, Choir Conducting, and a MA Diploma in Music Psychology in Education from the University of Sheffield, England. She is the author of published articles, some of which she has also presented at International and other Conferences. She is a member of Greek Association of Primary Music Education and a fundamental member of the Greek Association of Choir and Orchestral Conductors. She is a music teacher at the Private Primary School “Ellinoagliki Agogi” and she conducts its choir. She also directs the child, youth and mixed choirs of the municipality of Lykovrisi - Pefki as well as a choir for the elderly in the municipality of Vrilisia.\n\n**Georgios Sitotis** holds a BA in Music Studies (2003) from Aristotle University of Thessaloniki and a MEd in Modeling Design and Development of Educational Units (2016) from Aegean University, Rhodes. He has studied choral and orchestral conducting with Georgios Aravidis and Faidra Giannelou and has attended master classes of orchestral and choral conducting with Michalis Economou, Thania Kyriakidou, Matthew Legakis, Michalis Patseas, Ragnar Rasmussen, Urša Lah, Antonis Kontogeorgiou, Miltos Logiadis, Zoltan Pad, Katalin Kiss and Peter Erdei. In September 2017, he was voted by the Athens Symphony Orchestra as one of the best new conductors during the 9th Conducting Master class held by the ASO. He has been teaching music in Primary schools for 14 years and he is the director of the children’s choir of “Trovadouroi Kifisias” and the children’s choir of the Private Primary School “Ellinoagliki Agogi”.",
      {
        "heading": "Female Choir \"Trimontium\" from Plovdiv, Bulgaria",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/trimontium.webp"
      },
      "The Female Choir “Trimontium” was established in 1965 in the city of Plovdiv, Bulgaria. The choir has been very successful in its long-lasting existence. It has won a great number of diplomas and awards obtained in several competitions, some of which are: third prize and bronze medal in the International Chorus Competition in Varna, gold medals in the 6th and 7th National Festival of Choirs and First place in the equal voices’ category in the 4th International choir Festival “Music and Sea”, in Paralia, Greece (2015).\n\nIt has an abundant and varied repertoire. An important part of it is occupied by works on Bulgarian folklore music, created by the most famous Bulgarian composers and works of orthodox and Western European composers. It has performed in Germany, Italy, Greece, Spain, Hungary, France, Austria, Croatia and Montenegro. Since 2010, the choir has been directed by Vanya Atanasova.\n\n**Vanya Atanasova** graduated from Plovdiv Academy of Music, Dance and Fine Arts in 1979, where she received Master degree of Music. She studied conducting with Professor Vasilika Spasova and afterwards attended a choral conducting course led by prof. Kr. Chetinyan. She has been awarded the honorary badge of Plovdiv for her achievements in music. The choir is accompanied on the piano by Mrs. Diana Kaneva.",
      {
        "heading": "Polyphonic choir of Alexandria’s Municipality \"Alexandrian Voices\" from Alexandria Imathia, Greece",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/alexander-voices.webp"
      },
      "“Alexandrian Voices” is the mixed, polyphonic choir of the Municipality of Alexandria. It was founded in 1998 and consists of 50 amateur singers. Its repertoire contains many kinds of music, especially Greek composers, folk music and baroque. It has given concerts both in Greece and abroad and it has won several prizes, while in 2002 and in 2003 it was honored with a golden medal by UNESCO and the Greek Orthodox Church, respectively. The choir is conducted by Eleni Theodoridou and it is accompanied on the piano by Kostas Pantelidis.\n\n**Eleni Theodoridou** has graduated the “Conservatory of Northern Greece” where she studied theory of music and piano. She has conducted the Choirs of the “Choral Center of Alexandria’s Municipality”, “Melissanthi” Girls choir and “Alexandrian Voices” since 1988 and the Youth choir of “Mandoulides School” since 2002. She also teaches German in the department of Lyric Song, Opera and Melodrama Art in the State Conservatory of Thessaloniki. She has cooperated with the Greek composers Dionysis Savvopoulos, Dionysis Tsaknis, Giorgos Chatzinasios and Evanthia Reboursika.",
      {
        "heading": "\"Dnipro\" Choir of the Taras Shevchenko National University of Kyiv, Ukraine",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/dnipro.webp"
      },
      "“Dnipro” Choir of the “Taras Shevchenko” National University of Kyiv is one of the oldest choirs in Ukraine, celebrating its 175th anniversary in 2018. The first choir group was founded in 1843. The university choir was originally founded as a church choir, which later on became secular. In its lifelong existence, it has had an important role in the cultural awakening of Ukraine and its people.\n\nDuring the last years it continues to successfully compete with professional and amateur choirs both on national and international scales, participating in numerous festivals and competitions in Ukraine, Belarus, Poland, Lithuania, Slovakia, France, Germany, Switzerland and Italy.\n\nIts repertoire includes works of national and world classics, liturgical choral works, Ukrainian folk songs and contemporary music. United by love for music and high musical standards and through international exchanges, the Dnipro Choir raises strong awareness of Ukrainian tradition, modern choral art and the different cultures. Since 2009 the choir is led by Iryna Dusheiko while the composer Ihor Tylyk is its choirmaster.\n\n**Iryna Dusheiko** graduated from “R. Glier” Kyiv Institute of Music, class of choir conducting, in 1993. In 1998 she graduated from Kyiv National University of Culture. In 2001 Iryna completed postgraduate studies in Kyiv National University of Culture and Arts, department of music pedagogy. Since 2009, she has been the artistic director and chief conductor of the “Dnipro” Choir of the “Taras Shevchenko” National University of Kyiv.",
      {
        "heading": "Choir \"Emmeleia\" from Limassol, Cyprus",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/emeleia.webp"
      },
      "The Women’s choir ‘’Emmeleia’’ is an autonomous section of the homonymous mixed choir and started its activity in January 2016. It has participated in several artistic events, the most important of which was the Christmas concert ‘’Classy, Brassy Christmas’’ on 27th and 28th December 2016 in Nicosia and Limassol, respectively. Its repertoire consists of international classic works, mostly of the 20th and 21st century, as well as arrangements of Greek and Cyprian Folk songs, great art music and foreign pop music.",
      {
        "anchor": "gallery18"
      },
      "**Eleni Kyprianou** studied Choir Direction at the Conservatory of Sofia in Bulgaria and she owns Masters in Choral Direction, Theoretics – Music pedagogy and Solo Instruction from the “Liszt Ferenc” Music Academy of Budapest, Hungary. Since 1996 she has been working as a music instructor in High Schools. She has conducted the choir of the Music High School of Pafos, the choir of the Music Grammar School of Pafos, the choirs of the Cultural Association ‘’Epilogi’’ of Limassol and the choirs of the Cultural Association ‘’Emmeleia’’. She has participated in international masterclasses on choral direction (Poland, Bulgaria, and Greece).",
      {
        "narrow": 0
      },
      {
        "img": "/img/gallery/festivals/festival 2018/1.webp",
        "href": "/img/gallery/festivals/festival%202018/1.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2018/2.webp",
        "href": "/img/gallery/festivals/festival%202018/1.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2018/3.webp",
        "href": "/img/gallery/festivals/festival%202018/3.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2018/4.webp",
        "href": "/img/gallery/festivals/festival%202018/4.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2018/5.webp",
        "href": "/img/gallery/festivals/festival%202018/5.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2018/6.webp",
        "href": "/img/gallery/festivals/festival%202018/6.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2018/7.webp",
        "href": "/img/gallery/festivals/festival%202018/7.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2018/8.webp",
        "href": "/img/gallery/festivals/festival%202018/8.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2018/9.webp",
        "href": "/img/gallery/festivals/festival%202018/9.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2018/10.webp",
        "href": "/img/gallery/festivals/festival%202018/10.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2018/11.webp",
        "href": "/img/gallery/festivals/festival%202018/11.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2018/12.webp",
        "href": "/img/gallery/festivals/festival%202018/12.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2018/13.webp",
        "href": "/img/gallery/festivals/festival%202018/13.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2018/14.webp",
        "href": "/img/gallery/festivals/festival%202018/14.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2018/15.webp",
        "href": "/img/gallery/festivals/festival%202018/15.webp",
        "layout": "gallery"
      }
    ],
    el: [
      {
        "list": [
          "5 - 8 Ιουλίου 2018"
        ]
      },
      {
        "img": "/img/poster-2018.webp"
      },
      {
        "wide": true
      },
      {
        "heading": "Διεθνής Επιτροπή Κριτών (I.J.C.)",
        "level": 2,
        "align": "center"
      },
      ...person("ambroz-copi", "el", {level: 3}),
      {
        "heading": "Καθηγητής Δρ. Jong-Won Park",
        "level": 3,
        "align": "right"
      },
      "Ο Δρ. Jong-Won Park είναι Καθηγητής Μουσικής και Διευθυντής των Χορωδιακών Δραστηριοτήτων στο Πανεπιστήμιο του Wisconsin - River Falls (UWRF), όπου διδάσκει ιδιαίτερα μαθήματα φωνητικής, διεύθυνσης και διευθύνει τη Χορωδία Συναυλίας και τη Γυναικεία Χορωδία.\n\nΩς ενεργός ομιλητής και εκπαιδευτής, έχει δώσει παρουσιάσεις σε όλες τις Ηνωμένες Πολιτείες, στην Κένυα, την Κορέα και την Ιαπωνία. Παρουσίασε διάλεξη στο Περιφερειακό Συνέδριο ACDA το 2007. Το άρθρο του δημοσιεύτηκε στο Περιοδικό Χορωδίας ACDA τον Φεβρουάριο του 2009. Το 2010, ίδρυσε το συγκρότημα JW Chorale στη Σεούλ της Κορέας, το οποίο είναι ένα φεστιβαλικό χορωδιακό σύνολο που προπονείται για δύο εβδομάδες και εμφανίζεται τον Ιούλιο.\n\nΠριν έρθει στο Πανεπιστήμιο του Wisconsin - River Falls, ο Δρ. Park κατείχε παρόμοιες θέσεις στο Πανεπιστήμιο της Indiana (IPFW), το Πανεπιστήμιο Yonsei στη Σεούλ, την Κορέα, και το Πανεπιστήμιο Auburn στην Αλαμπάμα. Ο Park απέκτησε πτυχίο Μουσικής από το Πανεπιστήμιο Yonsei στη Σεούλ, την Κορέα, μεταπτυχιακό δίπλωμα στην Φωνητική από το Ινστιτούτο Μουσικής του Cleveland, μεταπτυχιακό δίπλωμα στη Διεύθυνση από το Πανεπιστήμιο του Cleveland State και Διδακτορικό δίπλωμα στη Μουσική Τέχνη από το Πανεπιστήμιο του Michigan State. Ο Δρ. Park ήταν μέλος της Χορωδίας του Φεστιβάλ Robert Shaw.",
      {
        "img": "/img/jong.webp",
        "layout": "side"
      },
      ...person("klaus-jurgen-etzold", "el", {level: 3}),
      ...person("theodora-pavlovitch", "el", {level: 3,align: "right"}),
      ...person("katerina-vassilikou", "el", {level: 3}),
      ...person("john-fitzpatrick", "el", {level: 3,align: "right"}),
      {
        "narrow": 8
      },
      {
        "heading": "Συμμετοχές Χορωδιών",
        "level": 1,
        "align": "center"
      },
      {
        "heading": "Χορωδία Δωματίου \"Lyra\" από το Μπουζάου, Ρουμανία",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/lyra.webp"
      },
      "Η χορωδία δωματίου \"Lyra\" ιδρύθηκε το 1974, με πρωτοβουλία ανθρώπων από το Μπουζάου, οι οποίοι αγαπούσαν τη χορωδιακή μουσική, ανάμεσά στους οποίους ήταν και ο δάσκαλος **Ștefan Stănescu**, ο διευθυντής της χορωδίας.\nΚατά περισσότερα από 42 χρόνια δραστηριότητας, η \"Lyra\" έχει εκπροσωπήσει την πόλη του Μπουζάου και ακόμα και τη Ρουμανία σε αρκετά φεστιβάλ και διαγωνισμούς με εθνική και διεθνή συμμετοχή. Αυτή η δραστηριότητα βασίστηκε όχι μόνο στο ταλέντο και την αγάπη για τη μουσική των 40 μελών της, οι περισσότεροι από τους οποίους είναι δάσκαλοι δημοτικών ή νηπιαγωγείων, αλλά και στην ζωή του διευθυντή, Ștefan Stănescu, ο οποίος υπηρετεί με πιστότητα αυτό το είδος μουσικής για περισσότερα από 46 χρόνια. Με την καθοδήγησή του, η \"Lyra\" έχει κερδίσει σημαντικά βραβεία σε εθνικούς διαγωνισμούς σε πολλές πόλεις της Ρουμανίας και επίσης σε γνωστά φεστιβάλ στη Γαλλία, την Ελλάδα, την Ελβετία, την Τσεχική Δημοκρατία, τη Σλοβακία, την Πορτογαλία, την Ιταλία, την Αυστρία, την ΠΓΔΜ, τη Βουλγαρία, την Τουρκία, την Κροατία, το Μαυροβούνιο, αποτελώντας μια μεγάλη επιβεβαίωση της αξίας της χορωδίας, βασισμένης τόσο στον πλούτο του ρεπερτορίου, πάνω από 160 έργα μεγάλης δημοτικότητας από τη Ρουμανία και τη διεθνή σύγχρονη μουσική, όσο και στην ποιότητα της ερμηνείας. Προς το παρόν, η χορωδία υποστηρίζεται από το Πολιτιστικό Κέντρο \"Alexandru Marghiloman\" της πόλης του Μπουζάου.",
      {
        "heading": "Γυναικεία χορωδία \"Bulgarian Voices Berlin\" από το Βερολίνο, Γερμανία",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/bulgarian-voices.webp"
      },
      "Η γυναικεία χορωδία \"Bulgarian Voices Berlin\" ιδρύθηκε το 2009 από τη μαέστρο **Boryana Velichkova**. Το ρεπερτόριό της αποτελείται τόσο από μοντέρνες όσο και αυθεντικές εκδόσεις τραγουδιών λαϊκής μουσικής της Βουλγαρίας και στοχεύει στη διάδοση του πλούσιου πολιτιστικού πλαισίου της βουλγαρικής μουσικής παράδοσης. Οι 20 γυναίκες του συνόλου προέρχονται από διάφορες ευρωπαϊκές χώρες και την Αυστραλία και ζουν όλες στο Βερολίνο. Η χορωδία έχει συμμετάσχει σε πολλαπλά διεθνή προγράμματα (το \"Berliner Festspiele\", \"Fête de la musique\", \"Carnival of cultures\", \"Night of choirs\") και έχει μια ολοκληρωμένη λειτουργία στη σύγχρονη πολυπολιτισμική μουσική σκηνή του Βερολίνου. Το 2015, η Bulgarian Voices Berlin συμμετείχε στο καταξιωμένο διεθνές φεστιβάλ χορού και λαού του Ρούντολσταντ, Γερμανία και το 2016, κλήθηκε στην παγκόσμια πρεμιέρα του \"Na Choroto\" / \"Dance of voices\" από τον Georgi Andreev. Προς το παρόν, η χορωδία εργάζεται στο τρίτο CD της. Για την ηχογράφηση, συνεργάστηκε με τη διάσημη βουλγάρα τραγουδίστρια Neli Andreeva και τον συνθέτη Nikolay Peev.",
      {
        "heading": "Mecsek Kórus από το Πετς, Ουγγαρία",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/mecsec.webp"
      },
      "Το Mecsek Choir ιδρύθηκε το 1957 ως χορωδία του Πετς. Μεταξύ των ακαπέλα έργων η χορωδία έχει πραγματοποιήσει αρκετά ορατόρια - συναυλίες με τη Φιλαρμονική Ορχήστρα της Pannon. Η χορωδία έχει κερδίσει 1ο Βραβείο στο Καντονιγκρός (2004), στο Όλομουτς (2005), στη Βουδαπέστη (2006), στην Τρνάβα (2007) και στη Βαρσοβία (2015). Το 2009 η χορωδία κέρδισε το Βραβείο KÓTA και το Ειδικό Βραβείο της Hungarian Kodály Association.\n\nΗ χορωδία αριθμεί 40 μέλη και από το 2016 η χορωδία διευθύνεται από τον **Sándor Balatoni**. Το 2016 η χορωδία κέρδισε το Βραβείο Laureate cum laude στο 2ο Διεθνές Φεστιβάλ Χορωδιών στη Βουδαπέστη και το 1ο Βραβείο στο \"Croatia Cantat\". Ο Δρ. Sándor Balatoni γεννήθηκε στο Πετς το 1983. Ολοκλήρωσε τις διδακτορικές σπουδές του στο Πανεπιστήμιο του Πετς και στο Eastman School of Music, Νέα Υόρκη, ΗΠΑ. Έχει κερδίσει αρκετά βραβεία ως οργανίστας (π.χ. το Βραβείο Junior Prima το 2012, την Υποτροφία Fulbright το 2014). Είναι βοηθός καθηγητής στο Πανεπιστήμιο του Πετς, ηγέτης της χορωδίας Pius και της χορωδίας Mecsek. Το 2016 κέρδισε το Ειδικό Βραβείο Διευθυντή στο Croatia Cantat και τιμήθηκε με το Βραβείο Csorba για το έργο του ως συνθέτης. Το 2017 κέρδισε το 1ο Βραβείο για τη σύνθεσή του από την Ευρωπαϊκή Χορωδιακή Ένωση.",
      {
        "heading": "Παιδική Χορωδία Český Krumlov \"Medvidata\" από το Τσέσκι Κρούμλοφ, Τσεχική Δημοκρατία",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/cesky.webp"
      },
      "Η Παιδική Χορωδία Český Krumlov \"Medvidata\" ιδρύθηκε το 1995, στο Σχολείο Καλών Τεχνών της ίδιας πόλης, η οποία εισήχθη στη Λίστα Παγκόσμιας Κληρονομιάς της UNESCO το 1992. Αποτελείται πλέον από περισσότερους από 250 τραγουδιστές σε τέσσερις διαφορετικές ενότητες. Κατά τη διάρκεια της ύπαρξής της, η χορωδία έχει οργανώσει περισσότερες από 500 δημόσιες εμφανίσεις και περισσότερα από 1500 παιδιά έχουν συμμετάσχει. Το ρεπερτόριό της καλύπτει μια ευρεία γκάμα από λαϊκά και κλασικά τραγούδια από την Αναγέννηση έως τα σύγχρονα έργα με έμφαση στους Τσέχους συνθέτες του 20ού αιώνα, καθώς και σε νέγκρο σπιρίτσουαλ ή σε μοντέρνες διασκευές δημοφιλούς μουσικής. Η χορωδία έχει συγκεντρώσει αρκετές επιτυχίες σε φεστιβάλ και διαγωνισμούς στην πατρίδα καθώς και σε πολλές άλλες ευρωπαϊκές χώρες (π.χ. Νέερπελτ 2014 - 1ο βραβείο Cum Laude, Λάνγκολεν 2015 - 2ο και 3ο βραβείο, Καντονιγκρός 2011 - 3ο βραβείο ...) και έχει συμμετάσχει σε φεστιβάλ στο εξωτερικό (Βερόνα 2006, Στοκχόλμη 2013, Alta Pusteria (Ιταλία) 2016, Βουδαπέστη 2017 ...) αλλά και στην Τσεχική Δημοκρατία.\n\nΗ Παιδική Χορωδία Český Krumlov \"Medvidata\" έχει ήδη συν-οργανώσει αρκετά φεστιβάλ χορωδιών Vltavské Cantare. Η χορωδία έχει ηχογραφήσει έξι CD και έχει παρουσιάσει πολλές τσέχικες συνθέσεις. Στο πιάνο η χορωδία συνοδεύεται από τον Michael Bartoš και διευθύνεται από τον **Lukáš Holec**.\n\nΟ Lukáš Holec γεννήθηκε το 1969 στο Πραχάτιτσε. Σπούδασε στο παιδαγωγικό τμήμα του Νότιου Πανεπιστημίου της Τσεχίας στο Τσέσκε Μπουντέγιοβιτσε. Έχει διδάξει χορωδία - τραγούδι, κλασική κιθάρα και θεωρία μουσικής στο Σχολείο Καλών Τεχνών του Τσέσκι Κρούμλοφ από το 1992 και θεωρία μουσικής στο γυμνάσιο της ίδιας περιοχής. Επίσης, έχει διδάξει πολιτιστική ιστορία στο Ιστορικό Ινστιτούτο του Νότιου Πανεπιστημίου της Τσεχίας για 12 χρόνια. Διευθύνει τη χορωδία Česká píseň (Πραχάτιτσε), τη χορωδία της εκκλησίας St. Vitus (Τσέσκι Κρούμλοφ) και την Παιδική Χορωδία Český Krumlov από την ίδρυσή της το 1995.",
      {
        "heading": "Μουσικό Σύνολο Misgav από το Μισγκάβ, Ισραήλ",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/misgav.webp"
      },
      "Το Μουσικό Σύνολο Misgav εξειδικεύεται στη χορωδιακή μουσική του Ισραήλ, που έχει επηρεαστεί από μετανάστες από όλες τις γωνιές του κόσμου. Τα περισσότερα τραγούδια του ρεπερτορίου του γράφτηκαν στο Ισραήλ, αν και κάποια είναι μεταφράσεις τραγουδιών από άλλους πολιτισμούς. Τα τραγούδια που επιλέγονται για το ρεπερτόριό του χαρακτηρίζονται από πλούσιες και πολύπλοκες διασκευές που τονίζουν τη φωνητική ικανότητα του συνόλου.\n\nΗ χορωδία αποτελείται από μέλη της τοπικής κοινότητας που απολαμβάνουν τις εβδομαδιαίες πρόβες και την μουσική συμμετοχή τους. Εμφανίζεται τακτικά για την τοπική κοινότητα καθώς και ταξιδεύει σε ολόκληρη τη χώρα για να συμμετάσχει σε φεστιβάλ χορωδιών και συναυλίες. Επίσης, έχουν εμφανιστεί σε αρκετές χώρες στο εξωτερικό (Γαλλία, Ισπανία, Ουγγαρία και Ιταλία). Μέσα στα χρόνια, έχουν λάβει αρκετά βραβεία: - Δεύτερη θέση, στον εθνικό διαγωνισμό \"Δημοτικά Τραγούδια του Ισραήλ\" - Χρυσό μετάλλιο, στον ετήσιο διαγωνισμό της Ένωσης Χορωδιών Mila - Δεύτερη θέση, στο Διεθνές Φεστιβάλ Λαϊκών Χορωδιών της Σλοβακίας, Μπρατισλάβα, Σλοβακία, 2017\n\nΤο σύνολο διευθύνεται από τον **Dr. Nadav Ziv** που κατέχει διδακτορικό τίτλο στη σύνθεση από το Πανεπιστήμιο Bar Ilan στο Ισραήλ. Ως ένας ταλαντούχος μουσικός και συνθέτης, ο Δρ. Ziv διευθύνει ενήλικες και νεανικά φωνητικά και οργανικά σύνολα και διδάσκει μουσική σε αρκετά κολέγια και λύκεια. Οι βραβευμένες μουσικές και φωνητικές συνθέσεις του έχουν παρουσιαστεί και ηχογραφηθεί σε Ισραήλ, Γερμανία, Ολλανδία, Βέλγιο και Νέα Ζηλανδία.",
      {
        "heading": "\"Partners in Praise\" Χορωδία Κοριτσιών από τη Μινεάπολις, Μινεσότα, ΗΠΑ",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/partners-in-praise.webp"
      },
      "Ιδρύθηκε το 1994 για να εμφανιστεί στη θεατρική παράσταση του Broadway \"Joseph and the Amazing Technicolor Dreamcoat\", η Χορωδία Κοριτσιών Partners in Praise γιορτάζει 24 σεζόν εξαιρετικής χορωδιακής δραστηριότητας. Η χορωδία υπάρχει για να ενδυναμώσει τα νεαρά κορίτσια να βρουν τον εαυτό τους, την αυτοπεποίθηση και το δυναμικό τους μέσα από τη μουσική. Η χορωδία προσελκύει νεαρές γυναίκες από τις μεγαλύτερες κοινότητες του Μινεάπολις και του Σεντ Πολ της Μινεσότας, και είναι εμβαπτισμένες σε μια ενδιαφέρουσα ποικιλία μουσικών στυλ, με έμφαση στην παγκόσμια μουσική. Η Χορωδία Κοριτσιών Partners in Praise έχει λάβει θετικές κριτικές σε διεθνείς διαγωνισμούς και έχει εμφανιστεί σε σκηνές συναυλιών παγκοσμίως: Αυστραλία, Ελλάδα, Ιταλία, Γερμανία, Αυστρία, Ουγγαρία, Τσεχία, Ισπανία, Αγγλία, Κόστα Ρίκα, Ιρλανδία, Καναδά, καθώς και σε όλη την Αμερική.\n\nΜια παθιασμένη τραγουδίστρια, διευθύντρια και εκπαιδεύτρια μουσικής, **Julia Fahey** είναι η ιδρύτρια και καλλιτεχνική διευθύντρια της διεθνώς αναγνωρισμένης Χορωδίας Κοριτσιών Partners in Praise. Αυτήν τη στιγμή είναι στο Διδακτικό Προσωπικό του Visitation School και του St. Thomas Academy στο Μεντότα Χάιτς, Μινεσότα. Η κα Fahey έχει ζητηθεί επανειλημμένα ως καλεσμένη διευθύντρια και διδάσκαλος· έχει το προνόμιο να διευθύνει τις χορωδίες της ACDA - MN, καθώς και να είναι φωνητική προπονήτρια της Χορωδίας Όλων των Κρατών του 2015. Οι χορωδίες της κας Fahey έχουν επιλεγεί για να εμφανιστούν σε πολλές διασκέψεις πολιτείας της ACDA, MMEA, NCEA, την περιφερειακή διάσκεψη της NC - ACDA το 2016, και τη 50ή επέτειο του Συνεδρίου ISME που πραγματοποιήθηκε στις Κανάριες Νήσους.",
      {
        "heading": "Χορωδία \"Alexander Petrosyan\" του Εθνικού Τεχνικού Πανεπιστημίου από το Χάρκοβο, Ουκρανία",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/petrsyan.webp"
      },
      "Η Χορωδία \"Alexander Petrosyan\" του Εθνικού Τεχνικού Πανεπιστημίου ιδρύθηκε στο Χάρκοβο, Ουκρανία. Η Χορωδία συμμετέχει συχνά σε διάφορες συναυλίες, φεστιβάλ και διαγωνισμούς τόσο στην Ουκρανία όσο και στο εξωτερικό. Το ρεπερτόριο της Χορωδίας περιλαμβάνει κλασική, εκκλησιαστική, Ουκρανική παραδοσιακή και άλλα εθνικά μουσικά κομμάτια, καθώς και έργα σύγχρονων συνθετών. Η ομάδα απολαμβάνει τα ταξίδια, την υποδοχή επισκεπτών, τη μάθηση νέας μουσικής και την καθιέρωση νέων μουσικών συνεργασιών με άλλες χορωδίες.\n\nΗ χορωδία αποτελείται κυρίως από φοιτητές του Πανεπιστημίου, τόσο πρώην (πρώην απόφοιτοι τη δεκαετία του '80) όσο και ενεργούς φοιτητές. Παρά το ότι είναι επιστημονικά προσανατολισμένη, όλα τα μέλη της χορωδίας λατρεύουν το τραγούδι, που το καθιστά την κύρια δραστηριότητα τους στον ελεύθερο χρόνο. Διευθυντής: **Maxim Sidorov**.",
      {
        "heading": "Coro Universidad Autónoma de Bucaramanga (UNAB), Μπουκαραμάνγκα Κολομβία",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/coro.webp"
      },
      "Η Χορωδία του Universidad Autónoma de Bucaramanga (UNAB) ιδρύθηκε μαζί με τη Σχολή Μουσικής και έχει μια γνωστή πορεία που υπερβαίνει τις δύο δεκαετίες. Αποτελείται από φοιτητές και απόφοιτους πολλών προγραμμάτων και έχει εδραιωθεί ως ένα από τα καλύτερα χορωδιακά σύνολα στη χώρα. Υπό τη διεύθυνση του **Καθ. Rafael Ángel Suescún Mariño**, έχει βραβευθεί σε σημαντικούς διαγωνισμούς και φεστιβάλ σε όλο τον κόσμο. Χώρες όπως η Αργεντινή, η Βενεζουέλα, η Ισπανία, η Αυστρία, η Ιταλία, η Τσεχική Δημοκρατία και η Γερμανία έχουν επαινέσει τις εξαιρετικές τους εμφανίσεις που περιλαμβάνουν κολομβιανή και λατινοαμερικανική λαογραφία, καθώς και έργα που κυμαίνονται από την περίοδο της Αναγέννησης έως τις σύγχρονες εποχές.\n\nΟ καθηγητής Rafael Ángel Suescún Mariño είναι απόφοιτος του Πανεπιστημίου Βιομηχανικής της Σαντάντερ, UIS, με πτυχίο στη Μουσική. Έχει μεταπτυχιακό τίτλο στη Λατινοαμερικανική Μουσικολογία από το Πανεπιστήμιο Κεντρικής Βενεζουέλας, UCV, ίδρυμα που του χορήγησε τη διάκριση \"Εύφημος Μνεία\". Επίσης ανήκει στη χορωδία της UIS για οκτώ χρόνια ως χορωδός και ως Βοηθός Διευθυντής του Καθηγητή Gustavo Gómez Ardila. Έχει συμμετάσχει σε διάφορες συναντήσεις με διάσημους δάσκαλους παγκοσμίως. Αυτήν τη στιγμή είναι ο Διευθυντής και Συντονιστής της Χορωδίας του UNAB και Κοσμήτορας του UNAB.",
      {
        "heading": "Γυναικείο Φωνητικό Σύνολο \"Res miranda\" από το Νόβι Σαντ, Σερβία",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/res-miranada.webp"
      },
      "Το γυναικείο φωνητικό σύνολο \"Res miranda\" αποτελείται από οκτώ μέλη. Κινούμενες από την κοινή τους αγάπη για τη φωνητική μουσική και τον καθαρό ήχο της εκλεπτυσμένης χορωδίας, θέλουν να εμπλουτίσουν και να αναζωογονήσουν τον πολιτιστικό τους περίγυρο, να προωθήσουν τον χορωδιακό ήχο και να συμμετάσχουν σε φεστιβάλ και διαγωνισμούς τόσο στην πατρίδα όσο και στο εξωτερικό. Το ρεπερτόριο του συνόλου είναι ποικίλο, καλύπτοντας διάφορες εποχές και στυλ μέχρι τις ενορχηστρώσεις δημοφιλούς μουσικής. Το σύνολο έχει συμμετάσχει μέχρι στιγμής σε δύο διεθνείς χορωδιακούς διαγωνισμούς. Στο Φεστιβάλ Χορωδιών της Οχρίδας το 2016 βραβεύτηκε με το 1ο Βραβείο και κέρδισε το Ειδικό Βραβείο για το καλύτερο ρεπερτόριο. Στο Διεθνή Διαγωνισμό Χορωδιών στο Τούζλα, το 2017, το \"Res miranda\" κέρδισε το 1ο Βραβείο και το Μεγάλο Βραβείο στην κατηγορία των φωνητικών συνόλων, καθώς και το Ειδικό Βραβείο για την καλύτερη εκτέλεση ενός ιερού έργου. Από το 2017, το σύνολο καθοδηγείται από την Dunja Huzjan.\n\n**Dunja Huzjan** γεννήθηκε το 1985 στο Νόβι Σαντ και αποφοίτησε από την Ακαδημία Τεχνών του Νόβι Σαντ, Τμήμα Μουσικής, με το πρόγραμμα σπουδών Γενικής Μουσικής Παιδαγωγικής. Στον τομέα της χορωδιακής μουσικής ανέπτυξε τις δεξιότητές της μέσω των ακόλουθων χορωδιακών εργαστηρίων: το Eurochoir το 2013 (Ουγγαρία) και το 2014 (Γαλλία), το Summer School στο Dartington, Αγγλία το 2010, καθώς και το Φεστιβάλ \"Europa Cantat\" στην Ολλανδία, το 2009. Παρακολούθησε εργαστήρια διεύθυνσης στο ίδιο Φεστιβάλ που διοργανώθηκε το 2012 στην Ιταλία και το 2015 στην Ουγγαρία. Προς το παρόν, εργάζεται ως συνοδός στη Σχολή Μπαλέτου του Νόβι Σαντ. Είναι επίσης η διευθύντρια της Μικτής Χορωδίας της Σλοβενικής Κοινότητας \"Kredarica\" του Νόβι Σαντ και της Παιδικής Χορωδίας της Ακαδημαϊκής Κοινωνικής και Καλλιτεχνικής Εταιρείας \"Sonja Marinković\", καθώς και του γυναικείου φωνητικού συνόλου \"Res miranda\".",
      {
        "heading": "Χορωδία Δωματίου \"Helü\" από την Ταρτού, Εσθονία",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/helu.webp"
      },
      "Η Χορωδία Δωματίου \"Helü\" ιδρύθηκε το 2004. Αρχικά μια χορωδία βασισμένη σε έργα, έχει εξελιχθεί σε μια σφιχτά δεμένη ομάδα ανθρώπων που απολαμβάνουν να συναντιούνται κάθε εβδομάδα για να τραγουδήσουν. Η χορωδία συναντιέται στην πόλη Ταρτού της Νότιας Εσθονίας και το όνομά της, Helü, σημαίνει \"ήχος\" στην τοπική διάλεκτο. Η Helü έχει ένα ποικίλο ρεπερτόριο, περιλαμβάνοντας μουσική από Εσθονούς κλασικούς και σύγχρονους συνθέτες όπως οι Arvo Pärt, Veljo Tormis, Cyrillus Kreek, Tõnu Kõrvits, Pärt Uusberg, καθώς και έργα ξένων συνθετών όπως οι Ralph Vaughan Williams, Jaakko Mäntyjärvi, Eric Whitacre, Ēriks Ešenvalds, Jake Runestad κλπ.\n\nΗ Helü έχει λάβει επιτυχώς μέρος σε αρκετούς διαγωνισμούς στην Εσθονία και αλλού. Το 2016, η χορωδία συμμετείχε στο κορυφαίο Διεθνές Μουσικό Φεστιβάλ Llangollen στην Ουαλία και επέστρεψε με το 2ο βραβείο στην κατηγορία μικτών χορωδιών. Το 2017, η Helü κέρδισε το 3ο βραβείο στην κατηγορία χορωδιών δωματίου στο Διεθνές Φεστιβάλ Χορωδιών \"Ταλίν 2017\".\n\nΚύρια διευθύντρια της Helü είναι **Küllike Joosing**. Αποφοίτησε από το Μουσικό Κολλέγιο Heino Eller της Ταρτού ως χορωδιακή διευθύντρια το 1996 και από την Εσθονική Ακαδημία Μουσικής στην τάξη διεύθυνσης το 2001. Η Küllike Joosing είναι μέλος του διοικητικού συμβουλίου της Εσθονικής Ένωσης Μικτών Χορωδιών. Εκτός από την Helü, διευθύνει επίσης την Χορωδία Φοιτητών της Ταρτού και τη Χορωδία Παιδιών \"E Stuudio\". Στο Φεστιβάλ Χορωδιών της Εσθονίας το 2016, βραβεύτηκε ως η καλύτερη διευθύντρια του φεστιβάλ.",
      {
        "heading": "Πολυφωνική Χορωδία της Μυτιλήνης από τη Μυτιλήνη, Νησί Λέσβου Ελλάδα",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/mytilene.webp"
      },
      "Η χορωδία, με την ονομασία Χορωδία Μυτιλήνης \"Νίκος Σκαλκώτας\", ξεκίνησε τον δρόμο της το 1995 υπό την καθοδήγηση του ιδρυτή της, κ. Γιώργου Παζαΐτη. Το 2004 έγινε μη κερδοσκοπικός φορέας και από τότε έχει δώσει αρκετές συναυλίες σε διάφορες πόλεις της Ελλάδας και του εξωτερικού και έχει επίσης συμμετάσχει σε διεθνή φεστιβάλ και διαγωνισμούς. Το 2005 η χορωδία κέρδισε το 1ο βραβείο και το χρυσό μετάλλιο στον Πανελλήνιο Διαγωνισμό Χορωδιών Νεανικών Ορχηστρών, ενώ το 2008 και το 2010 στους 5ους και 6ους Χορωδιακούς Ολυμπιακούς Αγώνες στην Αυστρία και την Κίνα αντίστοιχα, κατέκτησε το χάλκινο μετάλλιο στην κατηγορία των μικτών χορωδιών \"a cappella\". Έχει επίσης συμμετάσχει σε συναυλίες σε Σμύρνη, Σύρο, Χίο, Λάρισα, Θεσσαλονίκη και Ρέθυμνο.\n\nΤο 2018 η χορωδία μετονομάστηκε σε \"Πολυφωνική Χορωδία της Μυτιλήνης\". Από το 2012, η χορωδία καθοδηγείται από τον κ. Στυλιανό Λασκαρίδη.\n\n**Στυλιανός Λασκαρίδης** είναι απόφοιτος του τμήματος μουσικών σπουδών του Αριστοτελείου Πανεπιστημίου Θεσσαλονίκης, όπου σπούδασε σύνθεση στην τάξη του Μιχάλη Λαπίδακη. Ζει και εργάζεται στη Μυτιλήνη ως καθηγητής μουσικής στο Ειδικό Γυμνάσιο Μυτιλήνης. Είναι ενεργά εμπλεκόμενος στο χορωδιακό τραγούδι ως χορωδιακός διευθυντής πολλών χορωδιών και από το Νοέμβριο του 2012 διευθύνει την Πολυφωνική Χορωδία της Μυτιλήνης. Ως συνθέτης, τα έργα του έχουν εκτελεστεί σε συναυλίες στην Αθήνα και τη Θεσσαλονίκη, ενώ έχει λάβει διακρίσεις και βραβεία σε πανελλήνιους διαγωνισμούς.",
      {
        "heading": "Παιδική Χορωδία \"Pro Musica – Magnólia\" από το Μιχάλοβτσε, Σλοβακία",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/pro-musica.webp"
      },
      "Η Παιδική Χορωδία \"Pro Musica – Magnólia\" είναι μια συνδυασμένη χορωδία των χορωδιών \"Pro Musica\", η οποία ιδρύθηκε στο Βασικό Σχολείο Τεχνών του Μιχάλοβτσε το 1998, και της χορωδίας \"Magnólia\", που ιδρύθηκε στο Βασικό Σχολείο Τεχνών του Σόμπραντσε το 1985, και ενώθηκαν το 2010. Στις συναυλίες, η χορωδία αποτελείται από 60 παιδιά, ηλικίας 9 - 17 ετών και διευθύνεται από την ιδρύτρια και καλλιτεχνική διευθύντρια τους, κυρία Viera Džoganova.\n\nΗ χορωδία έχει κερδίσει πολλά διακεκριμένα βραβεία σε όλο τον κόσμο και έχει συμμετάσχει σε πολλά διεθνή χορωδιακά φεστιβάλ στην Ευρώπη (Τσεχία, Βέλγιο, Ελλάδα, Ιταλία, Φινλανδία, Ισπανία, Μεγάλη Βρετανία, Γαλλία κλπ) και στις ΗΠΑ. Το 2015 η χορωδία κέρδισε το Φεστιβάλ Χορωδιών Serenade στην Ουάσιγκτον, και πραγματοποίησε δύο περιοδείες συναυλιών στο Μεξικό. Η χορωδία κέρδισε στην κατηγορία της θρησκευτικής μουσικής στο Φεστιβάλ και Διαγωνισμό Χορωδιών \"Claudio Monteverdi\" στη Βενετία, το 2016.\n\n**Viera Džoganova** αποφοίτησε από το Κονσερβατόριο του Κόσιτσε το 1980 στο τμήμα του ακορντεόν. Με την περαιτέρω μελέτη της το 1987 - 1990 αποκτά πτυχίο στη διεύθυνση παιδικών χορωδιών. Αποφοίτησε από την Παιδαγωγική Σχολή του Καθολικού Πανεπιστημίου του Ρουζόμπεροκ . Αυτή τη στιγμή εργάζεται ως δάσκαλος ακορντεόν, καλλιτεχνική διευθύντρια και διευθύντρια δύο παιδικών χορωδιών - των \"Pro Musica\" στο Μιχάλοβτσε και των \"Magnólia\" στο Σόμπραντσε.",
      {
        "heading": "Φωνητικό Σύνολο \"Ron Meitar\" από το Μεϊτάρ, Ισραήλ",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/ron-meitar.webp"
      },
      "Το Φωνητικό Σύνολο \"Ron Meitar\" έκανε την έρημο να ανθίσει όταν ιδρύθηκε η ομάδα στο Μεϊτάρ, την περιοχή όπου κατοικούσε ο Αβραάμ, σπάζοντας τη σιωπή της ερήμου με τους ήχους της ζωής, της δημιουργικότητας και της ποίησης.\n\nΑπό τις αρχές της κοινότητας, αποτελεί αναπόσπαστο μέρος της ζωής και του πολιτισμού στο Μεϊτάρ. Η ομάδα εκπροσωπεί το Μεϊτάρ σε φεστιβάλ και συνέδρια στο Ισραήλ και στο εξωτερικό και έχει ήδη ηχογραφήσει τρία άλμπουμ.\n\nΤον τελευταίο ενάμιση χρόνο, λειτουργεί υπό την καθοδήγηση του μαέστρου και μουσικού διευθυντή, **Shalom Ohayon** και έχει ξεκινήσει ένα νέο πρόγραμμα με τίτλο \"Παράθυρο στη Μεσόγειο\", στο οποίο η ομάδα παρουσιάζει μια επιλογή εβραϊκών τραγουδιών βασισμένων σε γνωστά ελληνικά μελωδικά θέματα που είναι αγαπημένα στο Ισραήλ.",
      {
        "heading": "Παιδική χορωδία \"Lastivka\" από το Κίεβο, Ουκρανία",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/lastivka.webp"
      },
      "Η παιδική χορωδία \"Lastivka\" (ή \"Χελιδόνι\") ιδρύθηκε την άνοιξη του 2005 από το Σπίτι Δημιουργικότητας για Παιδιά και Νέους στην περιοχή Holosiivski του Κιέβου. Η χορωδία ξεκίνησε να λειτουργεί υπό την καθοδήγηση της **Oksana Ursatii**. Η χορωδία λειτουργεί με την αρχή της χορωδιακής μελέτης, με τους νεαρούς χορωδούς να συμμετέχουν σε χορωδιακές και ακαδημαϊκές δραστηριότητες, ενώ η χορωδία μελετά τόσο σολφέζ όσο και πιάνο. Η ομάδα αποτελείται από τρεις χορωδίες: Προετοιμαστική Χορωδία - παιδιά 4-5 ετών· Νεανική Χορωδία - παιδιά 6-10 ετών· Μεγάλη (Συναυλιακή) Χορωδία - παιδιά 10-18 ετών.\n\nΗ \"Lastivka\" είναι ουσιαστικά μια μεγάλη χορωδιακή οικογένεια, με επτά δασκάλους και περισσότερα από 150 παιδιά. Έχει κερδίσει βραβεία σε πολλούς εθνικούς και διεθνείς διαγωνισμούς, όπως:",
      {
        "list": [
          "Δύο πρώτες θέσεις στις κατηγορίες παιδικών χορωδιών και θρησκευτικής μουσικής στο 47ο Διεθνές Φεστιβάλ Χορωδιών στο Μιεντζιζντρόιε (Πολωνία)",
          "Πρώτη θέση και \"Καλύτερη Χορωδία\" στο 36ο Διεθνές Φεστιβάλ Χορωδιών \"George Frederick Handel\" (Χάλε, Γερμανία)",
          "Πρώτη θέση στις κατηγορίες Παιδικών Χορωδιών και Grand Prix στον Διεθνή Διαγωνισμό Νεανικής Χορωδιακής Μουσικής \"Gavriil Musicescu\" (Ιάσιο, Ρουμανία)"
        ],
        "align": "center"
      },
      {
        "p": "Το 2014, η \"Lastivka\" δημοσίευσε τον πρώτο της ηχογραφημένο δίσκο: \"Benjamin Britten, Missa brevis; A Ceremony of Carols\".",
        "align": "center"
      },
      {
        "heading": "Γυναικεία Χορωδία \"Makeblijde\" από το Ζέλε, Βέλγιο",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/makebidje.webp"
      },
      "Η \"Makeblijde\" ιδρύθηκε το 1943 από τη Josée Standaert. Στη μακρά της ιστορία, η χορωδία έχει λάβει μέρος σε πολλά εγχειρήματα και ανταλλαγές, ενώ έχει εμφανιστεί σε όλη την Ευρώπη. Επίσης, έχει δώσει ένα γκάλα - συναυλία για το \"King Baudouin Foundation\", στην παρουσία του Πρίγκιπα και της Πριγκίπισσας του Βελγίου Philippe και Mathilde.\nΈχει συμμετάσχει σε πολλούς διαγωνισμούς τόσο στη χώρα της όσο και στο εξωτερικό, κερδίζοντας πλήθος βραβείων, τα πιο πρόσφατα εκ των οποίων είναι:",
      {
        "list": [
          "Το υψηλότερο βραβείο με ποσοστό 97,66 % στο Istanbul Chorus Festival & Competition, Τουρκία 2012;",
          "Δεύτερο βραβείο στην κατηγορία ισοφωνίας και βραβείο κοινού, στο διεθνή διαγωνισμό χορωδιών του Μάασμεχελεν, Βέλγιο 2013",
          "Grand Prix και ειδικό βραβείο για την εκτέλεση του υποχρεωτικού έργου, στο διεθνή διαγωνισμό της Βίλνιους, Λιθουανία 2016."
        ],
        "align": "center"
      },
      "**Filip Haentjens** έχει σπουδάσει κλαρινέτο, μουσική δωματίου και θεωρία μουσικής στο Κονσερβατόριο της Γάνδης ενώ έχει λάβει υψηλότερο πτυχίο στο κλαρινέτο και Πρώτο Βραβείο μπάσο κλαρινέτο στο Βασιλικό Φλαμανδικό Κονσερβατόριο της Αμβέρσας. Εκεί, έχει επίσης σπουδάσει διεύθυνση χορωδίας, ηλεκτρονική σύνθεση μουσικής, MIDI και τεχνικές ηχογράφησης.\nΠρος το παρόν, είναι δάσκαλος κλαρινέτου και ορχηστρικών συνόλων στην Ακαδημία του Λόκερεν. Δίνει τακτικά συναυλίες με διάφορα σύνολα. Έχοντας το δικό του ηχογραφικό στούντιο, εργάζεται επίσης ως ηχολήπτης, διατάκτης και συνθέτης.",
      {
        "heading": "Χορωδία Κοριτσιών \"Skowronki\" από το Πόζναν, Πολωνία",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/skowronki.webp"
      },
      "Η Χορωδία Κοριτσιών \"Skowronki\" από το Πόζναν, Πολωνία ιδρύθηκε το 1950. Το ρεπερτόριό της επανανακαλύπτει και προωθεί έργα διαφόρων συνθετών από διαφορετικές περιόδους, καθώς και κομμάτια που γράφτηκαν ειδικά για τη χορωδία. Έχει λάβει μέρος σε πολλά φεστιβάλ και χορωδιακά εργαστήρια στην Πολωνία και στο εξωτερικό και συνεργάζεται με τη Φιλαρμονική Ορχήστρα του Πόζναν. Έχει κερδίσει πολλά βραβεία σε ευρωπαϊκούς χορωδιακούς διαγωνισμούς, εκ των οποίων τα πιο σημαντικά είναι:",
      {
        "list": [
          "Το Μεγάλο Βραβείο του Εθνικού Τουρνουά Χορωδιών “Legnica Cantat” (2007)",
          "Το Μεγάλο Βραβείο του Διεθνούς Διαγωνισμού Χορωδιών στο Οχρίδα, ΠΓΔΜ (2011)",
          "Το Μεγάλο Βραβείο του Διεθνούς Διαγωνισμού Χορωδιών στο Φρεαμούντε της Πορτογαλίας (2016)",
          "Και, το Μεγάλο Βραβείο του Διεθνούς Φεστιβάλ Χορωδιών “InCanto Mediterraneo” στο Μιλάτζο, Σικελία (2017)"
        ],
        "align": "center"
      },
      {
        "p": "Περιοδεύει τακτικά και έχει εμφανιστεί στη Γερμανία, την Ολλανδία, το Βέλγιο, την Τσεχική Δημοκρατία, τη Σλοβακία, τη Σλοβενία, την Ουγγαρία, την Κροατία, την ΠΓΔΜ, τη Γαλλία, την Ισπανία, τη Μεγάλη Βρετανία, τη Δανία, τη Σουηδία, τη Λιθουανία, τη Λετονία, την Ιταλία, την Πορτογαλία, το Ισραήλ και στις Ηνωμένες Πολιτείες. Η Χορωδία διευθύνεται και εμπνέεται δημιουργικά από τη διευθύντρια, εκπαιδεύτρια και λάτρη της χορωδιακής μουσικής **Alicja Szeluga**.",
        "align": "center"
      },
      {
        "heading": "Μικτή Χορωδία της Γυναικείας Εταιρείας των Θρακομακεδόνων από τους Θρακομακεδόνες, Αττική Ελλάδα",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/thrakomacedonians.webp"
      },
      "Η Μικτή Χορωδία της Γυναικείας Εταιρείας των Θρακομακεδόνων ιδρύθηκε το 2003 από τον διευθυντή Σταύρο Πιοτόπουλο. Έως το 2011 λειτούργησε υπό την αιγίδα του Πολιτιστικού Κέντρου Θρακομακεδόνων, ενώ από το 2012 η Γυναικεία Εταιρεία των Θρακομακεδόνων ανέλαβε τη λειτουργία της. Τα μέλη της είναι ερασιτέχνες γεμάτοι αγάπη για τη μουσική και τη χορωδία και το ρεπερτόριό της περιλαμβάνει έργα ελλήνων και ξένων συνθετών, καθώς και έργα από την εθνική παραδοσιακή μουσική.\n\nΈχει λάβει μέρος σε πολλά κονσέρτα στο Πολιτιστικό Κέντρο Θρακομακεδόνων αφιερωμένα σε ελληνικούς συνθέτες, όπως οι Χατζιδάκις και Ξαρχάκος κ.ά., αλλά και σε Ιονίους ποιητές, ρεμπέτικα και άλλα. Επίσης, έχει εμφανιστεί σε όλη την Ελλάδα. Συμμετείχε στην Τελετή Λήξης των Παραολυμπιακών Αγώνων 2004, ενώ το 2005 πραγματοποίησε την πρώτη της εμφάνιση στην τηλεόραση, σε μία εκπομπή για τη Μικρά Ασία.\n\nΑπό τον Μάιο του 2013 διοργανώνει ένα Φεστιβάλ Χορωδιών που έχει γίνει βασικό γεγονός στην ελληνική κοινωνία χορωδιακής μουσικής, ενώ από τον Μάρτιο του 2014 είναι μέλος της Ελληνικής Ένωσης Χορωδιών.\n\nΟ **Σταύρος Πιοτόπουλος** έχει σπουδάσει μουσική (ακορντεόν και θεωρία). Απέκτησε πτυχίο στη διεύθυνση χορωδίας το 2001, εργαζόμενος με τον διευθυντή Κωστή Κωνσταντάρα. Επίσης, έχει παρακολουθήσει διάφορα μουσικά παιδαγωγικά σεμινάρια, καθώς και σεμινάρια που αφορούν τη μονωδία και την ιστορία τέχνης. Από το 2001 διευθύνει τις χορωδίες του Δημοτικού Ωδείου Αγ. Βαρβάρας, ενώ από το 2012 διευθύνει τη Μικτή Χορωδία της Γυναικείας Εταιρείας των Θρακομακεδόνων. Έχει συνεργαστεί σε συναυλίες με γνωστούς καλλιτέχνες/τραγουδιστές όπως οι Βασίλης Λέκκας, Κώστας Θωμαΐδης κ.ά., αλλά και με ηθοποιούς, όπως οι Γιάννης Παπαγιάννης, Γρηγόρης Βάλτινος και άλλοι. Ήταν διευθυντής των χορωδιών των Δήμων Θρακομακεδόνων και Χολαργού, ενώ ήταν ιδρυτικό μέλος της χορωδίας “Fons Musicalis”, όπου συμμετείχε ως τενόρος.",
      {
        "heading": "Μικτή Χορωδία \"Educatus\" του Παιδαγωγικού Πανεπιστημίου Κρακοβίας, Πολωνία",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/educadus.webp"
      },
      "Η Μικτή Χορωδία “Educatus” του Παιδαγωγικού Πανεπιστημίου Κρακοβίας ξεκίνησε τη δραστηριότητά της τον Απρίλιο του 2000 με πρωτοβουλία του καθηγητή **Adam Korzeniowski**, που είναι ο διευθυντής και καλλιτεχνικός διευθυντής της χορωδίας. Η “Educatus” δεν είναι μόνο μια ακαδημαϊκή συλλογικότητα αλλά και μια ομάδα φίλων με πάθος για τη μουσική που ακμάζει χάρη στην υπέροχη ατμόσφαιρα που δημιουργείται από τον διευθυντή και τα μέλη.\n\nΤο ρεπερτόριό της περιλαμβάνει μουσική από διαφορετικές εποχές και στυλ. Εκπροσωπεί το Πανεπιστήμιο σε διάφορα φεστιβάλ, διαγωνισμούς και συναυλίες στην Πολωνία και στο εξωτερικό. Έχει δώσει πολλά κονσέρτα και έχει συμμετάσχει σε διακεκριμένες εκδηλώσεις, όπως η 7η επίσκεψη του Πάπα Ιωάννη Παύλου Β' στην Πολωνία το 2002. Κατά τη διάρκεια των 18 χρόνων ύπαρξής της, η χορωδία έχει κερδίσει πολλά βραβεία, συμμετέχοντας σε διαγωνισμούς τόσο στην Πολωνία όσο και στο εξωτερικό. Ελλάδα, Ισπανία, Βουλγαρία, Σουηδία, Νορβηγία, Δανία, Γερμανία, Ελβετία, Ιταλία, Λιθουανία, Σλοβακία, Τσεχική Δημοκρατία, Γαλλία είναι μερικές από τις χώρες που έχουν επισκεφτεί, έχοντας την ευκαιρία να συλλέξουν αναμνήσεις και να αποκτήσουν εμπειρία, η οποία ανθίζει σε κάθε διαδοχική καλλιτεχνική σεζόν.",
      {
        "heading": "Παιδική χορωδία του Ιδιωτικού Δημοτικού Σχολείου \"Ελληνοαγγλική Αγωγή\" από το Μαρούσι, Αττική Ελλάδα",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/ellinoaggliki-agogi.webp"
      },
      "Η παιδική χορωδία του Ιδιωτικού Δημοτικού Σχολείου \"Ελληνοαγγλική Αγωγή\" ιδρύθηκε το 2002. Αποτελείται από 45 μαθητές, ηλικίας 7-12 ετών, που εκπροσωπούν το σχολείο τους κάθε χρόνο σε πολλά γεγονότα (θεατρικές παραστάσεις, εθνικές επετείους, ειδικές μουσικές αφιερώσεις, φεστιβάλ χορωδιών, διαγωνισμούς χορωδιών, εκδηλώσεις Χριστουγέννων σε εμπορικά κέντρα κλπ.). Το ρεπερτόριο της χορωδίας περιλαμβάνει τραγούδια Ελλήνων και ξένων συνθετών, για μία ή δύο φωνές, καθώς και παραδοσιακά τραγούδια από όλο τον κόσμο. Ο σκοπός της χορωδίας είναι η απόκτηση μουσικής εμπειρίας, γνώσης και κοινωνικοποίησης, συνεργασίας, έκφρασης και διασκέδασης. Η κυρία **Ελευθερία Βουλγάρη** ήταν η Διευθύντρια της χορωδίας μέχρι το 2011. Τα τελευταία 6 χρόνια, η κυρία Ελευθερία Βουλγάρη και ο κύριος Γιώργος Σίτοτης συν-διευθύνουν τη χορωδία.\n\nΗ Ελευθερία Βουλγάρη έχει λάβει πτυχία στο Πιάνο, στη Σύνθεση Μουσικής, στη Διεύθυνση Χορωδίας και μεταπτυχιακό στην Ψυχολογία της Μουσικής στην Εκπαίδευση από το Πανεπιστήμιο του Σέφιλντ, Αγγλία. Είναι συγγραφέας δημοσιευμένων άρθρων, τα οποία έχει παρουσιάσει επίσης σε Διεθνή και άλλες Διασκέψεις. Είναι μέλος της Ελληνικής Ένωσης Πρωτοβάθμιας Μουσικής Εκπαίδευσης και ιδρυτικό μέλος της Ελληνικής Ένωσης Διευθυντών Χορωδιών και Ορχηστρικών. Είναι καθηγήτρια μουσικής στο Ιδιωτικό Δημοτικό Σχολείο \"Ελληνοαγγλική Αγωγή\" και διευθύνει τη χορωδία του. Διευθύνει επίσης τη χορωδία παιδιών, νέων και αναμεικτών του δήμου Λυκόβρυσης - Πεύκης καθώς και μια χορωδία για ηλικιωμένους στο δήμο Βριλησσίων.\n\n**Γιώργος Σίτοτης** έχει πτυχίο στις Μουσικές Σπουδές (2003) από το Αριστοτέλειο Πανεπιστήμιο Θεσσαλονίκης και μεταπτυχιακό τίτλο MEd στο Σχεδιασμό και Ανάπτυξη Εκπαιδευτικών Μονάδων (2016) από το Πανεπιστήμιο του Αιγαίου, Ρόδος. Έχει σπουδάσει διεύθυνση χορωδίας και ορχηστρική διεύθυνση με τους Γιώργο Αραβίδη και Φαίδρα Γιαννέλου και έχει παρακολουθήσει μαθήματα διεύθυνσης ορχήστρας και χορωδίας με τους Μιχάλη Οικονόμου, Θάνια Κυριακίδου, Ματθαίο Λεγάκη, Μιχάλη Πατσέα, Ragnar Rasmussen, Urša Lah, Αντώνη Κοντογεωργίου, Μίλτο Λογιάδη, Zoltan Pad, Katalin Kiss και Peter Erdei. Τον Σεπτέμβριο του 2017, εκλέχθηκε από τη Συμφωνική Ορχήστρα της Αθήνας ως ένας από τους καλύτερους νέους διευθυντές κατά το 9ο Masterclass Διεύθυνσης που διεξήχθη από την ASO. Διδάσκει μουσική σε δημοτικά σχολεία εδώ και 14 χρόνια και είναι ο διευθυντής της παιδικής χορωδίας των \"Τρωβαδούρων Κηφισιάς\" και της παιδικής χορωδίας του Ιδιωτικού Δημοτικού Σχολείου \"Ελληνοαγγλική Αγωγή\".",
      {
        "heading": "Γυναικεία Χορωδία \"Trimontium\" από την Πλόβντιβ, Βουλγαρία",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/trimontium.webp"
      },
      "Η Γυναικεία Χορωδία \"Trimontium\" ιδρύθηκε το 1965 στην πόλη της Πλόβντιβ, Βουλγαρία. Η χορωδία ήταν πολύ επιτυχημένη στη μακράς διάρκειας ύπαρξή της. Έχει κερδίσει ένα μεγάλο αριθμό διπλωμάτων και βραβείων που έχουν αποκτηθεί σε αρκετούς διαγωνισμούς, στους οποίους κέρδισε: το τρίτο βραβείο και χάλκινο μετάλλιο στο Διεθνές Διαγωνισμό Χορωδιών στη Βάρνα, χρυσά μετάλλια στο 6ο και 7ο Εθνικό Φεστιβάλ Χορωδιών και Πρώτη θέση στην κατηγορία ισόφωνων φωνών στο 4ο Διεθνές Φεστιβάλ Χορωδιών \"Μουσική και Θάλασσα\", στην Παραλία, Ελλάδα (2015).\n\nΈχει ένα πλούσιο και ποικίλο ρεπερτόριο. Ένα σημαντικό μέρος του καταλαμβάνεται από έργα της Βουλγαρικής λαϊκής μουσικής, δημιουργημένα από τους πιο διάσημους Βουλγάρους συνθέτες και έργα των ορθοδόξων και δυτικοευρωπαϊκών συνθετών. Έχει εμφανιστεί στη Γερμανία, την Ιταλία, την Ελλάδα, την Ισπανία, την Ουγγαρία, τη Γαλλία, την Αυστρία, την Κροατία και το Μαυροβούνιο. Από το 2010, η χορωδία διευθύνεται από τη Vanya Atanasova.\n\n**Vanya Atanasova** αποφοίτησε από την Ακαδημία Μουσικής, Χορού και Καλών Τεχνών της Πλόβντιβ το 1979, όπου έλαβε τον μεταπτυχιακό τίτλο της Μουσικής. Σπούδασε διεύθυνση χορωδίας με την καθηγήτρια Vasilika Spasova και στη συνέχεια παρακολούθησε μαθήματα χορωδιακής διεύθυνσης με τον καθηγητή Kr. Chetinyan. Έχει βραβευτεί με το τιμητικό μετάλλιο της Πλόβντιβ για τις επιτυχίες της στη μουσική. Η χορωδία συνοδεύεται στο πιάνο από την κυρία Diana Kaneva.",
      {
        "heading": "Πολυφωνική χορωδία \"Αλεξανδρινές Φωνές\" του Δήμου Αλεξάνδρειας από την Αλεξάνδρεια Ημαθίας, Ελλάδα",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/alexander-voices.webp"
      },
      "\"Αλεξανδρινές Φωνές\" είναι η ανάμεικτη, πολυφωνική χορωδία του Δήμου Αλεξάνδρειας. Ιδρύθηκε το 1998 και αποτελείται από 50 ερασιτέχνες χορωδούς. Το ρεπερτόριό της περιλαμβάνει πολλά είδη μουσικής, ειδικά έργα Ελλήνων συνθετών, λαϊκή μουσική και μπαρόκ. Έχει δώσει συναυλίες τόσο στην Ελλάδα όσο και στο εξωτερικό και έχει κερδίσει αρκετά βραβεία, ενώ το 2002 και το 2003 τιμήθηκε με χρυσό μετάλλιο από την UNESCO και την Ελληνορθόδοξη Εκκλησία αντίστοιχα. Η χορωδία διευθύνεται από την Ελένη Θεοδωρίδου και συνοδεύεται στο πιάνο από τον Κώστα Παντελίδη.\n\n**Ελένη Θεοδωρίδου** αποφοίτησε από το \"Κονσερβατόριο της Βόρειας Ελλάδας\" όπου σπούδασε θεωρία της μουσικής και πιάνο. Έχει διευθύνει τις χορωδίες του \"Χορωδιακού Κέντρου του Δήμου Αλεξάνδρειας\", τη χορωδία \"Μελισσάνθη\" και τις \"Αλεξανδρινές Φωνές\" από το 1988 και τη χορωδία νέων του \"Σχολείου Μανδουλίδη\" από το 2002. Διδάσκει επίσης Γερμανικά στο τμήμα Λυρικού Τραγουδιού, Όπερας και Μελοδράματος στο Κρατικό Ωδείο Θεσσαλονίκης. Έχει συνεργαστεί με τους Έλληνες συνθέτες Διονύση Σαββόπουλο, Διονύση Τσακνή, Γιώργο Χατζηνάσιο και Ευανθία Ρεμπούρσικα.",
      {
        "heading": "Χορωδία \"Dnipro\" του Εθνικού Πανεπιστημίου Taras Shevchenko του Κιέβου, Ουκρανία",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/dnipro.webp"
      },
      "Η χορωδία \"Dnipro\" του Εθνικού Πανεπιστημίου Taras Shevchenko του Κιέβου είναι μία από τις παλαιότερες χορωδίες στην Ουκρανία, γιορτάζοντας την 175η επέτειο της το 2018. Η πρώτη χορωδία ιδρύθηκε το 1843. Η χορωδία του πανεπιστημίου ιδρύθηκε αρχικά ως εκκλησιαστική χορωδία, η οποία αργότερα έγινε κοσμική. Στη διάρκεια της ζωής της, είχε σημαντικό ρόλο στην πολιτιστική αναγέννηση της Ουκρανίας και του λαού της.\n\nΤα τελευταία χρόνια συνεχίζει να ανταγωνίζεται με επιτυχία με επαγγελματικές και ερασιτεχνικές χορωδίες τόσο σε εθνικό όσο και σε διεθνές επίπεδο, συμμετέχοντας σε πολλά φεστιβάλ και διαγωνισμούς στην Ουκρανία, τη Λευκορωσία, την Πολωνία, τη Λιθουανία, τη Σλοβακία, τη Γαλλία, τη Γερμανία, την Ελβετία και την Ιταλία.\n\nΤο ρεπερτόριό της περιλαμβάνει έργα εθνικών και παγκόσμιων κλασικών αριστουργημάτων, λειτουργικά χορωδιακά έργα, Ουκρανικά παραδοσιακά τραγούδια και σύγχρονη μουσική. Ενωμένη από την αγάπη για τη μουσική και τα υψηλά μουσικά πρότυπα και μέσω διεθνών ανταλλαγών, η χορωδία \"Dnipro\" αναδεικνύει την ισχυρή ευαισθησία της Ουκρανικής παράδοσης, τη σύγχρονη χορωδιακή τέχνη και τις διαφορετικές κουλτούρες.\n\nΑπό το 2009 η χορωδία διευθύνεται από την Iryna Dusheiko, ενώ ο συνθέτης Ihor Tylyk είναι ο χορωδιακός δάσκαλος της.\n\n**Iryna Dusheiko** αποφοίτησε από την τάξη χορωδιακής διεύθυνσης, το 1993, από το Ινστιτούτο Μουσικής του Κιέβου \"R. Glier\". Το 1998 αποφοίτησε από το Κιεβικό Εθνικό Πανεπιστήμιο Πολιτισμού. Το 2001 η Iryna ολοκλήρωσε μεταπτυχιακές σπουδές στο Κιεβικό Εθνικό Πανεπιστήμιο Πολιτισμού και Τεχνών, τμήμα παιδαγωγικής της μουσικής. Από το 2009, είναι η καλλιτεχνική διευθύντρια και κύρια διευθύντρια της χορωδίας \"Dnipro\" του Εθνικού Πανεπιστημίου \"Taras Shevchenko\" του Κιέβου.",
      {
        "heading": "Χορωδία \"Εμμέλεια\" από τη Λεμεσό, Κύπρος",
        "level": 3,
        "align": "center"
      },
      {
        "img": "/img/emeleia.webp"
      },
      "Η γυναικεία χορωδία ‘’Εμμέλεια’’ είναι αυτόνομο τμήμα της ομώνυμης μικτής χορωδίας και ξεκίνησε τη δραστηριότητά της τον Ιανουάριο του 2016. Έχει συμμετάσχει σε αρκετά καλλιτεχνικά γεγονότα, το πιο σημαντικό εκ των οποίων ήταν το Χριστουγεννιάτικο συναυλιακό πρόγραμμα ‘’Classy, Brassy Christmas’’ στις 27 και 28 Δεκεμβρίου 2016 στη Λευκωσία και τη Λεμεσό, αντίστοιχα. Το ρεπερτόριό της αποτελείται από διεθνή κλασικά έργα, κυρίως του 20ού και 21ου αιώνα, καθώς και διασκευές ελληνικών και κυπριακών δημοτικών τραγουδιών, μεγάλης καλλιτεχνικής μουσικής και ξένης pop μουσικής.",
      {
        "anchor": "gallery18"
      },
      "**Ελένη Κυπριανού** σπούδασε Διεύθυνση Χορωδίας στο Κονσερβατόριο της Σόφιας στη Βουλγαρία και κατέχει Μεταπτυχιακό στη Διεύθυνση Χορωδίας, στη Μουσική Παιδαγωγική και Ατομική Οδηγία, από τη Μουσική Ακαδημία \"Liszt Ferenc\" της Βουδαπέστης, Ουγγαρία. Από το 1996 εργάζεται ως μουσική εκπαιδεύτρια σε Γυμνάσια. Έχει διευθύνει τη χορωδία του Μουσικού Γυμνασίου Πάφου, τη χορωδία του Μουσικού Λυκείου Πάφου, τις χορωδίες του Πολιτιστικού Συλλόγου ‘’Επιλογή’’ της Λεμεσού και τις χορωδίες του Πολιτιστικού Συλλόγου ‘’Εμμέλεια’’. Έχει συμμετάσχει σε διεθνή masterclasses διεύθυνσης χορωδίας (Πολωνία, Βουλγαρία και Ελλάδα).",
      {
        "narrow": 0
      },
      {
        "img": "/img/gallery/festivals/festival 2018/1.webp",
        "href": "/img/gallery/festivals/festival%202018/1.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2018/2.webp",
        "href": "/img/gallery/festivals/festival%202018/1.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2018/3.webp",
        "href": "/img/gallery/festivals/festival%202018/3.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2018/4.webp",
        "href": "/img/gallery/festivals/festival%202018/4.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2018/5.webp",
        "href": "/img/gallery/festivals/festival%202018/5.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2018/6.webp",
        "href": "/img/gallery/festivals/festival%202018/6.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2018/7.webp",
        "href": "/img/gallery/festivals/festival%202018/7.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2018/8.webp",
        "href": "/img/gallery/festivals/festival%202018/8.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2018/9.webp",
        "href": "/img/gallery/festivals/festival%202018/9.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2018/10.webp",
        "href": "/img/gallery/festivals/festival%202018/10.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2018/11.webp",
        "href": "/img/gallery/festivals/festival%202018/11.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2018/12.webp",
        "href": "/img/gallery/festivals/festival%202018/12.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2018/13.webp",
        "href": "/img/gallery/festivals/festival%202018/13.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2018/14.webp",
        "href": "/img/gallery/festivals/festival%202018/14.webp",
        "layout": "gallery"
      },
      {
        "img": "/img/gallery/festivals/festival 2018/15.webp",
        "href": "/img/gallery/festivals/festival%202018/15.webp",
        "layout": "gallery"
      }
    ],
  },
  aside: {
    en: [
      {
        "list": [
          "[International Jury Committee I.J.C.](#ijc18)",
          "[Choir's Participations](#choirs18)",
          "[Gallery](#gallery18)"
        ]
      },
      {
        "heading": "Organising Committee:",
        "level": 4
      },
      {
        "heading": "Apostolos Antoniou, President",
        "level": 6
      },
      {
        "heading": "Christina Kitsou, Vice President",
        "level": 6
      },
      {
        "heading": "Panagiotis Galanis, General Secretary",
        "level": 6
      },
      {
        "heading": "Vassiliki Sarri, Treasurer",
        "level": 6
      },
      {
        "heading": "Anna-Ypapanti Soldatou, Commissioner",
        "level": 6
      },
      {
        "heading": "Ioanna Kotsi, Commissioner",
        "level": 6
      },
      {
        "heading": "Kosmas Koronaios, Commissioner, Festival Director",
        "level": 6
      }
    ],
    el: [
      {
        "list": [
          "[Διεθνής Επιτροπή Κριτών (I.J.C.)](#ijc18)",
          "[Συμμετοχές Χορωδιών](#choirs18)",
          "[Γκαλερί](#gallery18)"
        ]
      },
      {
        "heading": "Οργανωτική Επιτροπή:",
        "level": 4
      },
      {
        "heading": "Απόστολος Αντωνίου, Πρόεδρος",
        "level": 6
      },
      {
        "heading": "Χριστίνα Κίτσου, Αντιπρόεδρος",
        "level": 6
      },
      {
        "heading": "Παναγιώτης Γαλάνης, Γενικός Γραμματέας",
        "level": 6
      },
      {
        "heading": "Βασιλική Σαρρή, Ταμίας",
        "level": 6
      },
      {
        "heading": "Άννα-Υπαπαντή Σολδάτου, Επίτροπος",
        "level": 6
      },
      {
        "heading": "Ιωάννα Κώτση, Επίτροπος",
        "level": 6
      },
      {
        "heading": "Κοσμάς Κορωναίος, Επίτροπος, Διευθυντής Φεστιβάλ",
        "level": 6
      }
    ],
  },
};

export default festivalSchema.parse(data);
