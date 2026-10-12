import { festivalSchema, type FestivalInput } from "../types";
import { person } from "../people";

const data: FestivalInput = {
  slug: "2021",
  year: 2021,
  editionNumber: 39,
  isCurrentEdition: false,
  // Listing/meta only -- the page itself shows the dates as printed in `content`.
  dates: {
    en: "5–11 July 2021",
    el: "5–11 Ιουλίου 2021",
  },
  poster: "/img/poster-2021.webp",
  title: {
    en: "39th International Choral Festival of Preveza",
    el: "39ο Διεθνές Χορωδιακό Φεστιβάλ Πρέβεζας",
  },
  intro: { en: [], el: [] },
  content: {
    en: [
      {
        "list": [
          "5 - 11 July 2021"
        ]
      },
      {
        "img": "/img/poster-2021.webp"
      },
      "Mark your calendar for July 2021 to be part of the 39th International Choral Festival of Preveza. The festival will be held from 5 to 11 of July 2021 in Preveza. The International Choral Festival of Preveza counts 38 interesting and exciting years of high quality choral music, challenged by excellent choirs which are continuously raising its standards and a great variety of intercultural experiences with participants from all over the world. The Festival includes numerous concerts given at idyllic locations of the area like the seaside fortress of Preveza and the historic Ancient Auditorium of Nikopolis “Odeon”. The other part of the Festival is the prestigious competition for which through the years we have been honored to host internationally acclaimed experts from abroad. Last, but not least a seminar for choral conductors is organized annually with the participation of conductors all around the world. For visiting choirs, Preveza provides an opportunity not only to perform; but also to experience some of the world’s best choral music, soak up the atmosphere and enjoy the mingling, singing and fun, and explore the picturesque city of Preveza and its surrounds. The festival will be managed by the Choral Society \"Armonia\" of Preveza, under the patronage of the city of Preveza. Choirs are eligible to join the festival either as non-competitive choirs participating in all the performances of the festival, or as competitive choirs.",
      {
        "wide": true
      },
      {
        "heading": "International Jury Committee I.J.C.",
        "level": 2,
        "align": "center"
      },
      ...person("ambroz-copi", "en", {level: 3}),
      ...person("graeme-langager", "en", {level: 3,align: "right"}),
      ...person("klaus-jurgen-etzold", "en", {level: 3}),
      ...person("marco-antonio-garcia-de-paz", "en", {level: 3,align: "right"}),
      ...person("theodora-pavlovitch", "en", {level: 3}),
      ...person("kostis-konstantaras", "en", {level: 3,align: "right"}),
      ...person("katerina-vassilikou", "en", {level: 3}),
      ...person("john-fitzpatrick", "en", {level: 3,align: "right"}),
      {
        "anchor": "non-comp21"
      },
      {
        "narrow": 10
      },
      {
        "heading": "Competition's Categories:",
        "level": 2,
        "align": "center"
      },
      {
        "list": [
          "**Category A: Mixed choirs**",
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
        "list": [
          "**Category B: Equal Voices’ choirs (Male or Female)**",
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
        "list": [
          "**Category C: Children’s choirs**",
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
        "list": [
          "**Category D: Chamber choirs / Vocal ensembles (mixed, male or female ensembles)**",
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
        "list": [
          "**Category E: Youth choirs (mixed, male or female ensembles)**",
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
        "list": [
          "**Category F: Spiritual, Gospel, Jazz, Pop Choirs, Pop Ensembles, Folklore, Byzantine chant**",
          "Repertory requirements: This category offers each choir the opportunity to express its own traditions and strengths. The program should reflect the choral music activities. Thoughtful consideration should be given to the dramatic arc of the overall program. At least 4 arrangements should be performed. If a choir wishes to include any other piece(s) of sacred music in the specific time, they can do so.",
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
        "list": [
          "**An International Jury Committee, consisting of at least three well-known Greek and/or foreign musicians will judge the competitive part of the festival and mark each performance based on the following:**",
          "Technique (rhythm, articulation and sound).",
          "Difficulty",
          "Intonation",
          "Interpretation",
          "Stylistic Fidelity"
        ],
        "align": "center"
      },
      {
        "heading": "The International Jury Committee allocates marks for the technical and artistic quality of the chosen programme and the overall quality of its performance. It will also take into account how well the choir communicates with the audience in a performance situation. The results of the marking process will be final and not subject to appeal in all aspects.",
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
        "level": 4,
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
          "Category F: 400€ & 1st Prize"
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
        "list": [
          "Each choir is required to forward by 1 June 2021 latest:",
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
        "heading": "All the above material is to be sent to the following address:\nChoral Society “Armonia” of Preveza, P. O. Box 29, GR – 481 00, Preveza GREECE\nTel. 0030 2682 0 24915\nE-mail: prevezachoralfestival@gmail.com, armonia4@otenet.gr",
        "level": 6,
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
          "Closing date for receipt of completed applications is 1 June 2021.",
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
        "heading": "Non-Competitive Participation",
        "level": 2,
        "align": "center"
      },
      {
        "img": "/img/non-comp-2021.webp"
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
      "All kinds of choirs can participate in the non-competitive festivities of our festival. Working on the direction of its greater spread worldwide, we would like to inform that you will all find out a really attractive destination that manages to combine both high artistic value and quality, as well as the advantages of a beautiful tour, as our region is full of archaeological sites from the Ancient Hellenic period and areas of great natural beauty, too. Besides, staying in Preveza could be an opportunity both for day trips to the surrounding area and excursions to the greater area of our precinct.",
      {
        "heading": "Organisation",
        "level": 3,
        "align": "center"
      },
      "Participating non-competitively gives choirs the opportunity to present informal performances in various locations across the city, while having the possibility to meet with other choirs, see some of Preveza’s beautiful countryside and attend all the festival’s manifestations. Non-competitive choirs are free to organize their own tourist activities while here, but are asked to please keep the organizing committee informed as their itinerary comes together to ensure that no time-tabling cross over occurs. Different kinds of performances could be organised in cooperation with the participants. Opportunities to perform in different Greek cities (Lefkas, Ioannina, and Agrinio) are possible to be organised after choirs ask.",
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
          "Each choir is required to forward by 1st of June 2021 latest:",
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
          "Closing date for receipt of completed applications is 1st of June 2021.",
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
        "anchor": "seminar21"
      },
      {
        "heading": "Broadcasting, Recording & Photographic Rights",
        "level": 3,
        "align": "center"
      },
      {
        "list": [
          "It is a condition of participation that any choir agrees that:",
          "Any performance it gives during the festival may be photographed, broadcast live and/or recorded for subsequent reproduction and/or broadcast on radio and/or television without payment to the choir (or folk-dance group or orchestra).",
          "All broadcasting and photographic rights to any performance at the festival shall belong to the festival which will be free to dispose of them or utilize them in promotional materials it sees fit.",
          "Any performance it gives during the festival may, without payment, be recorded and the festival shall be entitled to possession of any such recording and shall further be entitled to reproduce any such recording and to sell, let for hire, offer or expose for sale or hire, distribute or otherwise dispose of any recording or reproduction of recording of any such performance in any manner that it sees fit."
        ],
        "align": "center"
      },
      {
        "heading": "4th Choral Conducting Workshop & Seminar",
        "level": 2,
        "align": "center"
      },
      {
        "img": "/img/choral-2021.webp"
      },
      {
        "list": [
          "6 - 8 July 2021"
        ],
        "align": "center"
      },
      {
        "heading": "The International Choral Festival of Preveza invites conductors to apply to the 4th Choral Conducting Workshop and Seminar, led by Ambrož Čopi (Slovenia) and Sofia Gioldasi (Greece).",
        "level": 4,
        "align": "center"
      },
      {
        "p": "[Laboratory Choir: Female Vocal Ensemble Voci Contra Tempo (Greece)](https://www.facebook.com/vocicontratempo)",
        "align": "center"
      },
      {
        "heading": "The Conducting Workshop & Seminar is Suitable for:",
        "level": 5,
        "align": "center"
      },
      {
        "list": [
          "Early career conductors",
          "Conducting students with university/conservatory training in music",
          "Experienced conductors seeking to work with a high-level ensemble"
        ],
        "align": "center"
      },
      {
        "heading": "Fees:",
        "level": 5,
        "align": "center"
      },
      "Participation can be active or passive. The active participants will have the chance to work on equal voices choral repertoire with the Female Vocal Ensemble Voci Contra Tempo. Participants who wish to be active are kindly asked to send their CV with specified experiences in choir conducting. Any videos or online links that show the active participants conducting a choir will be more than welcome (but it is not obligatory). In consultation with the workshop leaders there will be a selection of the active participants to conduct at the Final Concert (7th July).",
      {
        "list": [
          "Maximum number of active participants: 8",
          "Unlimited number of passive participants.",
          "Participation fee for active participants: 200€",
          "Participation fee for passive participants: 120€"
        ],
        "align": "center"
      },
      {
        "p": "From 8th of July 2021 to 11th of July 2021, the participants will have the opportunity to attend the 39th ICF of Preveza, in the frames of which the 26th international Choral Competition of Music will take place, but also to meet and discuss with conductors of the participating choirs, while the organizing committee of the festival will provide them with any kind of material they might need.",
        "align": "center"
      },
      {
        "p": "All health protection measures against Covid-19 will be observed during the seminar.",
        "align": "center"
      },
      {
        "narrow": 0
      }
    ],
    el: [
      {
        "list": [
          "5 - 11 Ιουλίου 2021"
        ]
      },
      {
        "img": "/img/poster-2021.webp"
      },
      "Σημειώστε στο ημερολόγιό σας τον Ιούλιο του 2021 για να γίνετε μέρος του 39ου Διεθνούς Φεστιβάλ Χορωδιών Πρέβεζας. Το φεστιβάλ θα πραγματοποιηθεί από 5 έως 11 Ιουλίου 2021 στην Πρέβεζα. Το Διεθνές Φεστιβάλ Χορωδιών Πρέβεζας μετράει 38 ενδιαφέροντα και συναρπαστικά χρόνια υψηλής ποιότητας χορωδιακής μουσικής, προκαλούμενο από εξαιρετικές χορωδίες που συνεχώς αναβαθμίζουν τα πρότυπά της και μια μεγάλη ποικιλία διαπολιτισμικών εμπειριών με συμμετέχοντες από όλο τον κόσμο. Το Φεστιβάλ περιλαμβάνει πολλές συναυλίες που πραγματοποιούνται σε ειδυλλιακές τοποθεσίες της περιοχής όπως το θαλάσσιο φρούριο της Πρέβεζας και το ιστορικό Αρχαίο Αμφιθέατρο της Νικόπολης “Ωδείο”. Το άλλο μέρος του Φεστιβάλ είναι ο διακεκριμένος διαγωνισμός για τον οποίο μέσα από τα χρόνια έχουμε την τιμή να έχουμε διεθνώς αναγνωρισμένους ειδικούς του χώρου από το εξωτερικό. Τέλος, αλλά όχι λιγότερο σημαντικό, διοργανώνεται κάθε χρόνο σεμινάριο για χορωδιακούς διευθυντές με τη συμμετοχή διευθυντών από όλο τον κόσμο. Για τις επισκέπτριες χορωδίες, η Πρέβεζα παρέχει την ευκαιρία όχι μόνο να ερμηνεύσουν, αλλά και να απολαύσουν μερικά από τα καλύτερα χορωδιακά έργα του κόσμου, να απορροφήσουν την ατμόσφαιρα και να απολαύσουν τη γνωριμία, το τραγούδι και τη διασκέδαση, καθώς και να εξερευνήσουν την γραφική πόλη της Πρέβεζας και το περιβάλλον της. Το φεστιβάλ θα διοργανωθεί από το Χορωδιακό Σύλλογο \"Αρμονία\" Πρέβεζας, υπό την αιγίδα του Δήμου Πρέβεζας. Οι χορωδίες είναι επιλέξιμες να συμμετέχουν στο φεστιβάλ είτε ως μη διαγωνιζόμενες χορωδίες που συμμετέχουν σε όλες τις εκδηλώσεις του φεστιβάλ, είτε ως διαγωνιζόμενες χορωδίες.",
      {
        "wide": true
      },
      {
        "heading": "Διεθνής Επιτροπή Διαιτησίας I.J.C.",
        "level": 2,
        "align": "center"
      },
      ...person("ambroz-copi", "el", {level: 3}),
      ...person("graeme-langager", "el", {level: 3,align: "right"}),
      ...person("klaus-jurgen-etzold", "el", {level: 3}),
      ...person("marco-antonio-garcia-de-paz", "el", {level: 3,align: "right"}),
      ...person("theodora-pavlovitch", "el", {level: 3}),
      ...person("kostis-konstantaras", "el", {level: 3,align: "right"}),
      ...person("katerina-vassilikou", "el", {level: 3}),
      ...person("john-fitzpatrick", "el", {level: 3,align: "right"}),
      {
        "anchor": "non-comp21"
      },
      {
        "narrow": 10
      },
      {
        "heading": "Κατηγορίες Διαγωνισμού:",
        "level": 2,
        "align": "center"
      },
      {
        "list": [
          "**Κατηγορία Α: Ανάμικτες χορωδίες**",
          "Απαιτήσεις ρεπερτορίου: (Επιτρέπονται μόνο αρχικές συνθέσεις) 4 κομμάτια θρησκευτικής μουσικής (Αναγέννηση ή μπαρόκ, ρομαντική περίοδος, σύνθεση από τις αρχές του 20ού αιώνα, σύνθεση συνθέτη γεννημένου μετά το 1970). Αν μια χορωδία επιθυμεί να περιλάβει οποιοδήποτε άλλο κομμάτι(α) θρησκευτικής μουσικής στο συγκεκριμένο χρονικό διάστημα, μπορεί να το κάνει.",
          "Αριθμός τραγουδιστών: Ελάχιστος αριθμός είκοσι-ένα (21) τραγουδιστών.",
          "Όρια ηλικίας: κανένα.",
          "Διάρκεια εκτέλεσης: 15-20 λεπτά καθαρής μουσικής.",
          "Δεν επιτρέπεται συνοδεία.",
          "Για ελεύθερη επιλογή επιτονισμού (καθορισμένη εκ των προτέρων)."
        ],
        "align": "center"
      },
      {
        "list": [
          "**Κατηγορία Β: Χορωδίες Ισόφωνων (Ανδρικές ή Γυναικείες)**",
          "Απαιτήσεις ρεπερτορίου: (Επιτρέπονται μόνο αρχικές συνθέσεις) 4 κομμάτια θρησκευτικής μουσικής (Αναγέννηση ή μπαρόκ, ρομαντική περίοδος, σύνθεση από τις αρχές του 20ού αιώνα, σύνθεση συνθέτη γεννημένου μετά το 1970). Αν μια χορωδία επιθυμεί να περιλάβει οποιοδήποτε άλλο κομμάτι(α) θρησκευτικής μουσικής στο συγκεκριμένο χρονικό διάστημα, μπορεί να το κάνει.",
          "Αριθμός τραγουδιστών: Ελάχιστος αριθμός είκοσι-ένα (21) τραγουδιστών.",
          "Όρια ηλικίας: κανένα.",
          "Διάρκεια εκτέλεσης: 15-20 λεπτά καθαρής μουσικής.",
          "Δεν επιτρέπεται συνοδεία.",
          "Για ελεύθερη επιλογή επιτονισμού (καθορισμένη εκ των προτέρων)."
        ],
        "align": "center"
      },
      {
        "list": [
          "**Κατηγορία Γ: Παιδικές χορωδίες**",
          "Απαιτήσεις ρεπερτορίου: (Επιτρέπονται μόνο αρχικές συνθέσεις) 4 κομμάτια θρησκευτικής μουσικής (Αναγέννηση ή μπαρόκ, ρομαντική περίοδος, σύνθεση από τις αρχές του 20ού αιώνα, σύνθεση συνθέτη γεννημένου μετά το 1970). Αν μια χορωδία επιθυμεί να περιλάβει οποιοδήποτε άλλο κομμάτι(α) θρησκευτικής μουσικής στο συγκεκριμένο χρονικό διάστημα, μπορεί να το κάνει.",
          "Αριθμός τραγουδιστών: Ελάχιστος αριθμός είκοσι-ένα (21) τραγουδιστών.",
          "Όρια ηλικίας: Μέχρι 18 ετών.",
          "Διάρκεια εκτέλεσης: 15-20 λεπτά καθαρής μουσικής.",
          "Συνοδεία: Μέγιστο 2 κομμάτια.",
          "Για ελεύθερη επιλογή επιτονισμού (καθορισμένη εκ των προτέρων)."
        ],
        "align": "center"
      },
      {
        "list": [
          "** Κατηγορία Δ: Χορωδίες Δωματίου / Φωνητικά σύνολα (μικτά, ανδρικά ή γυναικεία σύνολα) **",
          "Απαιτήσεις ρεπερτορίου: (Επιτρέπονται μόνο αρχικές συνθέσεις) 4 κομμάτια θρησκευτικής μουσικής (Αναγέννηση ή μπαρόκ, ρομαντική περίοδος, σύνθεση από τις αρχές του 20ού αιώνα, σύνθεση συνθέτη γεννημένου μετά το 1970). Αν μια χορωδία επιθυμεί να περιλάβει οποιοδήποτε άλλο κομμάτι(α) θρησκευτικής μουσικής στο συγκεκριμένο χρονικό διάστημα, μπορεί να το κάνει.",
          "Αριθμός τραγουδιστών: Μέγιστος αριθμός είκοσι (20) τραγουδιστών.",
          "Όρια ηλικίας: χωρίς όριο",
          "Διάρκεια εκτέλεσης: 15-20 λεπτά καθαρής μουσικής",
          "Δεν επιτρέπεται συνοδεία",
          "Για ελεύθερη επιλογή επιτονισμού (καθορισμένη εκ των προτέρων)."
        ],
        "align": "center"
      },
      {
        "list": [
          "** Κατηγορία Ε: Νεανικά χορωδιακά σύνολα (αναμεικτά, ανδρικά ή γυναικεία σύνολα) **",
          "Απαιτήσεις ρεπερτορίου: (Επιτρέπονται μόνο πρωτότυπες συνθέσεις) 4 κομμάτια εκκλησιαστικής μουσικής (Αναγέννηση ή μπαρόκ, ρομαντική περίοδος, μια σύνθεση από τις αρχές του 20ού αιώνα, μια σύνθεση συνθέτη γεννημένου μετά το 1970). Εάν ένα χορωδιακό σύνολο επιθυμεί να συμπεριλάβει οποιοδήποτε άλλο κομμάτι(α) εκκλησιαστικής μουσικής στο συγκεκριμένο χρονικό διάστημα, μπορεί να το κάνει.",
          "Αριθμός τραγουδιστών: Ελάχιστο είκοσι-ένα (21) τραγουδιστές.",
          "Όρια ηλικίας: Έως 25 ετών.",
          "Διάρκεια εμφάνισης: 15-20 λεπτά καθαρής μουσικής.",
          "Συνοδεία: Μέγιστα 2 κομμάτια.",
          "Ελεύθερη επιλογή επιτονισμού (καθορίζεται εκ των προτέρων)."
        ],
        "align": "center"
      },
      {
        "list": [
          "** Κατηγορία ΣΤ: Πνευματική, Gospel, Jazz, Pop Χορωδίες, Pop Σύνολα, Λαογραφικά, Βυζαντινή ψαλμωδία **",
          "Απαιτήσεις ρεπερτορίου: Αυτή η κατηγορία προσφέρει σε κάθε χορωδιακό σύνολο τη δυνατότητα να εκφράσει τις δικές του παραδόσεις και δυνατότητες. Το πρόγραμμα πρέπει να αντανακλά τις χορωδιακές μουσικές δραστηριότητες. Θα πρέπει να δοθεί προσεκτική σκέψη στη δραματική καμπύλη του συνολικού προγράμματος. Τουλάχιστον 4 διασκευές θα πρέπει να εκτελεστούν. Εάν ένα χορωδιακό σύνολο επιθυμεί να συμπεριλάβει οποιοδήποτε άλλο κομμάτι(α) εκκλησιαστικής μουσικής στο συγκεκριμένο χρονικό διάστημα, μπορεί να το κάνει.",
          "Αριθμός τραγουδιστών: χωρίς όριο",
          "Όρια ηλικίας: χωρίς όριο",
          "Διάρκεια εμφάνισης: 15-20 λεπτά καθαρής μουσικής.",
          "Συνοδεία: χωρίς περιορισμό.",
          "Ελεύθερη επιλογή επιτονισμού (καθορίζεται εκ των προτέρων)."
        ],
        "align": "center"
      },
      {
        "heading": "Διεθνής Επιτροπή Κριτών I.J.C.",
        "level": 3,
        "align": "center"
      },
      {
        "list": [
          "** Μια Διεθνής Επιτροπή Κριτών, που αποτελείται τουλάχιστον από τρεις γνωστούς Έλληνες και/ή ξένους μουσικούς θα κρίνει το διαγωνιστικό μέρος του φεστιβάλ και θα βαθμολογήσει κάθε εμφάνιση με βάση τα ακόλουθα: **",
          "Τεχνική (ρυθμός, αρτικολάτζιον και ήχος).",
          "Δυσκολία",
          "Επιτονισμός",
          "Ερμηνεία",
          "Υφολογική πιστότητα"
        ],
        "align": "center"
      },
      {
        "heading": "Η Διεθνής Επιτροπή Κριτών αναλαμβάνει τη βαθμολόγηση της τεχνικής και καλλιτεχνικής ποιότητας του επιλεγμένου προγράμματος και της συνολικής ποιότητας της εκτέλεσής του. Θα λάβει επίσης υπόψη πόσο καλά επικοινωνεί το χορωδιακό σύνολο με το κοινό σε μια κατάσταση εκτέλεσης. Τα αποτελέσματα της διαδικασίας βαθμολόγησης θα είναι οριστικά και αδιαμφισβήτητα σε όλες τις πτυχές.",
        "level": 5,
        "align": "center"
      },
      {
        "heading": "Βαθμολόγηση - Μετάλλια",
        "level": 3,
        "align": "center"
      },
      {
        "heading": "Η I.J.C. θα απονείμει βραβεία στις χορωδίες, οι οποίες θα έχουν επιτύχει τις ακόλουθες βαθμολογίες:",
        "level": 4,
        "align": "center"
      },
      {
        "list": [
          "Χρυσό Μετάλλιο: Από 90,00 έως 100 βαθμούς,",
          "Αργυρό Μετάλλιο: Από 80,00 έως 89,99 βαθμούς",
          "Χάλκινο Μετάλλιο: Από 70,00 έως 79,99 βαθμούς"
        ],
        "align": "center"
      },
      {
        "heading": "Βαθμολόγηση - Χρηματικά Βραβεία",
        "level": 3,
        "align": "center"
      },
      {
        "heading": "Τα παρακάτω χρηματικά βραβεία θα απονεμηθούν στις χορωδίες που θα έχουν χρυσό μετάλλιο και το υψηλότερο σκορ σε κάθε κατηγορία:",
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
          "Κατηγορία ΣΤ: 400€ & 1ο Βραβείο"
        ],
        "align": "center"
      },
      {
        "heading": "Βαθμολόγηση - Ειδικά Βραβεία",
        "level": 3,
        "align": "center"
      },
      {
        "heading": "Η I.J.C. μπορεί να απονείμει και άλλα ειδικά βραβεία: για την καλύτερη εκτέλεση ορθόδοξου ψαλμού, για την καλύτερη λαογραφική εκτέλεση, για την καλύτερη διεύθυνση, κ.ά.",
        "level": 5,
        "align": "center"
      },
      {
        "heading": "Τελετή Απονομής Βραβείων",
        "level": 3,
        "align": "center"
      },
      {
        "heading": "Όλα τα βραβεία, πιστοποιητικά και διπλώματα θα ανακοινωθούν και θα παραδοθούν σε μια ειδική τελετή στην παρουσία κοινού και αρχών, όπου οι χορωδίες που επιλέχθηκαν από την Διεθνή Επιτροπή Κριτών θα εκτελέσουν ένα (1) ή δύο (2) τραγούδια επίσης επιλεγμένα από την I. J .C.",
        "level": 5,
        "align": "center"
      },
      {
        "heading": "Μη Διαγωνιστικές Συναυλίες",
        "level": 3,
        "align": "center"
      },
      {
        "heading": "Η τοποθεσία και ο χρόνος για τις μη διαγωνιστικές συναυλίες θα διαταχθούν από την Οργανωτική Επιτροπή. Κομμάτια της επιλογής της κάθε χορωδίας θα εκτελεστούν \"a cappella\" εντός 10-15 λεπτών.",
        "level": 5,
        "align": "center"
      },
      {
        "heading": "Διαδικασία Αίτησης",
        "level": 3,
        "align": "center"
      },
      {
        "list": [
          "Κάθε χορωδία υποχρεούται να καταθέσει μέχρι 1 Ιουνίου 2021 το αργότερο:",
          "Ένα πλήρως λεπτομερές έντυπο αίτησης (το οποίο επισυνάπτεται).",
          "Ένα πρόσφατο ηχογράφημα CD της χορωδίας ή περίπου επτά αρχεία MP3 που αποστέλλονται με email",
          "Το προτεινόμενο πρόγραμμα διαγωνισμού της χορωδίας (δείτε Απαιτήσεις Ρεπερτορίου που αναφέρονται παραπάνω). Εάν γίνει δεκτό, το ρεπερτόριο αυτό και η σειρά εκτέλεσης του δεν μπορεί να αλλάξει στη συνέχεια.",
          "Έξι πρωτότυπες παρτιτούρες κάθε έργου (μη επιστρέψιμες)",
          "Μια σύντομη ιστορία της χορωδίας και του διευθυντή περιγράφοντας δραστηριότητες και επιτεύγματα (κείμενο στα αγγλικά, 250 λέξεις)",
          "Μια πρόσφατη φωτογραφία (κατάλληλη για δημοσιότητα) της χορωδίας και του διευθυντή.",
          "Μια λίστα με τα ονόματα και τις διευθύνσεις των μελών της χορωδίας που δεν έχουν διαβατήριο ΕΕ."
        ],
        "align": "center"
      },
      {
        "heading": "Όλο το παραπάνω υλικό πρέπει να αποσταλεί στην ακόλουθη διεύθυνση:\nΧορωδιακός Σύλλογος “Αρμονία” Πρέβεζας, Τ.Θ. 29, Τ.Κ. – 481 00, Πρέβεζα ΕΛΛΑΔΑ\nΤηλ. 0030 2682 0 24915\nΗλ. ταχυδρομείο: prevezachoralfestival@gmail.com, armonia4@otenet.gr",
        "level": 6,
        "align": "center"
      },
      {
        "heading": "Διαμονή, Φαγητό & Μεταφορές",
        "level": 3,
        "align": "center"
      },
      {
        "p": "Κάθε χορωδία είναι υπεύθυνη για όλα τα θέματα που σχετίζονται με την οργάνωση, κράτηση και πληρωμή όλων των καταλυμάτων και γευμάτων κατά τη διάρκεια της παραμονής τους στην Πρέβεζα. Το φεστιβάλ δεν ευθύνεται για οποιαδήποτε προβλήματα κράτησης που ενδεχομένως προκύψουν.",
        "align": "center"
      },
      {
        "heading": "Επιλογή",
        "level": 3,
        "align": "center"
      },
      {
        "p": "Θα ληφθούν υπόψη μόνο οι αιτήσεις που περιλαμβάνουν όλες τις απαιτήσεις που αναφέρονται στην Αίτηση Συμμετοχής. Οι χορωδίες επιλέγονται με βάση το υλικό της αίτησής τους. Ιδιαίτερη προσοχή δίνεται στο ρεπερτόριο και την ποιότητα της εκτέλεσης που παρουσιάζεται στο CD ακρόασης που υποβάλλεται με την αίτηση.",
        "align": "center"
      },
      {
        "heading": "Όροι Συμμετοχής",
        "level": 3,
        "align": "center"
      },
      {
        "list": [
          "Η καταληκτική ημερομηνία υποβολής των ολοκληρωμένων αιτήσεων είναι η 1η Ιουνίου 2021.",
          "Μόλις ληφθεί το κατάλληλο υλικό, θα αξιολογηθεί και η χορωδία-αιτούμενος θα ενημερωθεί εάν επιλέγεται να συμμετάσχει ή όχι.",
          "Η εγγυητική κατάθεση (μείον τυχόν τραπεζικές χρεώσεις) θα επιστραφεί εάν μια χορωδία δεν επιλεγεί να συμμετάσχει στο φεστιβάλ.",
          "Οποιαδήποτε χορωδία που επιλέγεται και αποσύρεται από τον διαγωνισμό δεν έχει δικαίωμα επιστροφής της εγγυητικής κατάθεσης.",
          "Είναι παράνομο να εκτελείται μουσική που έχει αναπαραχθεί παράνομα. Εάν μια χορωδία το κάνει, το φεστιβάλ δεν φέρει καμία ευθύνη για οποιαδήποτε ενέργεια που αναλαμβάνουν οι εκδότες.",
          "Η Οργανωτική Επιτροπή δεν φέρει καμία νομική ευθύνη σε καμία περίπτωση ως προς οτιδήποτε σχετίζεται με τη συμμετοχή μιας χορωδίας στο φεστιβάλ.",
          "Το φεστιβάλ δεν φέρει καμία ευθύνη ή υποχρέωση για τα έξοδα διαμονής και διατροφής που προκύπτουν από τη χορωδία.",
          "Το φεστιβάλ δεν φέρει καμία ευθύνη για οποιαδήποτε έξοδα που προκύπτουν από οποιαδήποτε χορωδία ή μεμονωμένο χορωδό που συμμετέχει στο φεστιβάλ."
        ],
        "align": "center"
      },
      {
        "heading": "Μη Διαγωνιστική Συμμετοχή",
        "level": 2,
        "align": "center"
      },
      {
        "img": "/img/non-comp-2021.webp"
      },
      {
        "heading": "Εισαγωγή",
        "level": 3,
        "align": "center"
      },
      "Το Διεθνές Χορωδιακό Φεστιβάλ Πρέβεζας είναι ένας θεσμός υψηλής καλλιτεχνικής ποιότητας, τόσο στον ελληνικό όσο και στο διεθνή χορωδιακό χώρο. Περισσότερες από 400 χορωδίες από όλο τον κόσμο έχουν βρεθεί στη σκηνή του, ενώ μεγάλες προσωπικότητες έχουν επικυρώσει με την παρουσία τους στη Διεθνή Επιτροπή Κριτών, εγγυώντας με το κύρος τους τον καλλιτεχνικό χαρακτήρα του φεστιβάλ καθώς και την αξιοπιστία των διαδικασιών του.",
      {
        "heading": "Συμμετοχή",
        "level": 3,
        "align": "center"
      },
      "Όλοι οι τύποι χορωδιών μπορούν να συμμετέχουν στις μη διαγωνιστικές εκδηλώσεις του φεστιβάλ μας. Δουλεύοντας προς την κατεύθυνση της μεγαλύτερης διάδοσής του παγκοσμίως, θα θέλαμε να ενημερώσουμε ότι θα βρείτε έναν πραγματικά ελκυστικό προορισμό που καταφέρνει να συνδυάζει τόσο την υψηλή καλλιτεχνική αξία και ποιότητα, όσο και τα πλεονεκτήματα ενός όμορφου ταξιδιού, καθώς η περιοχή μας είναι γεμάτη αρχαιολογικά ευρήματα από την Αρχαία Ελληνική περίοδο και περιοχές μεγάλης φυσικής ομορφιάς, επίσης. Εκτός αυτού, η διαμονή στην Πρέβεζα θα μπορούσε να αποτελέσει ευκαιρία τόσο για ημερήσιες εκδρομές στη γύρω περιοχή όσο και για εκδρομές στη μεγαλύτερη περιοχή του δήμου μας.",
      {
        "heading": "Οργάνωση",
        "level": 3,
        "align": "center"
      },
      "Η μη διαγωνιστική συμμετοχή δίνει στις χορωδίες τη δυνατότητα να παρουσιάσουν ανεπίσημες εμφανίσεις σε διάφορες τοποθεσίες σε όλη την πόλη, έχοντας τη δυνατότητα να συναντηθούν με άλλες χορωδίες, να δουν μέρος της όμορφης ύπαιθρου της Πρέβεζας και να παρακολουθήσουν όλες τις εκδηλώσεις του φεστιβάλ. Οι μη διαγωνιζόμενες χορωδίες έχουν την ελευθερία να οργανώσουν τις δικές τους τουριστικές δραστηριότητες ενώ βρίσκονται εδώ, αλλά ζητείται να κρατούν ενήμερη την οργανωτική επιτροπή καθώς η ατζέντα τους συντίθεται για να διασφαλιστεί ότι δεν προκύπτουν προβλήματα με το χρονοδιάγραμμα. Μπορούν να οργανώσουν διάφορα είδη εκδηλώσεων σε συνεργασία με τους συμμετέχοντες. Είναι δυνατές ευκαιρίες για εμφανίσεις σε διάφορες ελληνικές πόλεις (Λευκάδα, Ιωάννινα και Αγρίνιο) να οργανωθούν αφού οι χορωδίες ζητήσουν.",
      {
        "heading": "Πρόγραμμα",
        "level": 3,
        "align": "center"
      },
      "Η τοποθεσία και η ώρα των μη διαγωνιστικών συναυλιών θα καθοριστούν από την Οργανωτική Επιτροπή που θα επιλέξει επίσης ποιες χορωδίες θα συμμετέχουν σε κάθε συναυλία. Κομμάτια επιλογής κάθε χορωδίας (με προτίμηση για ιερά ή λαογραφικά έργα) θα εκτελούνται \"a cappella\" μέσα σε 10-15 λεπτά.",
      {
        "heading": "Διαδικασία Αίτησης",
        "level": 3,
        "align": "center"
      },
      {
        "list": [
          "Κάθε χορωδία πρέπει να αποστείλει μέχρι την 1η Ιουνίου 2021 το αργότερο:",
          "Ένα πλήρως λεπτομερές έντυπο αίτησης (το οποίο επισυνάπτεται).",
          "Ηχογράφηση CD της χορωδίας ή περίπου επτά αρχεία MP3 που αποστέλλονται με email.",
          "Λεπτομέρειες του ρεπερτορίου.",
          "Μια σύντομη ιστορία της χορωδίας και του διευθυντή που περιγράφει τις δραστηριότητες και τα επιτεύγματα (κείμενο στα αγγλικά, 250 λέξεις).",
          "Μια πρόσφατη φωτογραφία (κατάλληλη για δημοσιότητα) της χορωδίας και του διευθυντή.",
          "Μια λίστα με τα ονόματα και τις διευθύνσεις των μελών της χορωδίας που δεν διαθέτουν διαβατήρια της ΕΕ."
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
          "Η προθεσμία υποβολής ολοκληρωμένων αιτήσεων είναι η 1η Ιουνίου 2021.",
          "Μόλις ληφθούν τα κατάλληλα υλικά, θα αξιολογηθούν και η χορωδία-υποψήφια θα ενημερωθεί εάν επιλέγεται να συμμετάσχει ή όχι.",
          "Η επιστροφή του τέλους εγγραφής και του τέλους συμμετοχής (μείον τυχόν τραπεζικές επιβαρύνσεις) θα γίνει εάν μια χορωδία δεν επιλεγεί να συμμετάσχει στο φεστιβάλ.",
          "Κάθε επιλεγμένη χορωδία που αποσύρεται από τον διαγωνισμό δεν έχει δικαίωμα επιστροφής του τέλους εγγραφής.",
          "Είναι αντίθετο προς τον νόμο να εκτελείται μουσική που έχει αναπαραχθεί παράνομα. Εάν μια χορωδία το κάνει, το φεστιβάλ δεν φέρει καμία ευθύνη για οποιαδήποτε ενέργεια αναληφθεί από τους εκδότες.",
          "Η Οργανωτική Επιτροπή δεν αναλαμβάνει καμία νομική ευθύνη για οτιδήποτε σχετίζεται με τη συμμετοχή μιας χορωδίας στο φεστιβάλ.",
          "Το φεστιβάλ δεν φέρει καμία ευθύνη ή υποχρέωση για τα έξοδα διαμονής και διατροφής που επωμίζεται η χορωδία.",
          "Το φεστιβάλ δεν φέρει καμία ευθύνη για οποιοδήποτε έξοδο που προκύπτει από οποιαδήποτε χορωδία ή ατομικό χορωδό που συμμετέχει στο φεστιβάλ.",
          "Η συμμετοχή στο φεστιβάλ συνεπάγεται την αποδοχή όλων των παραπάνω κανόνων και κανονισμών."
        ],
        "align": "center"
      },
      {
        "anchor": "seminar21"
      },
      {
        "heading": "Δικαιώματα Μετάδοσης, Ηχογράφησης & Φωτογραφικών Δικαιωμάτων",
        "level": 3,
        "align": "center"
      },
      {
        "list": [
          "Είναι όρος συμμετοχής ότι κάθε χορωδία συμφωνεί ότι:",
          "Οποιαδήποτε εμφάνιση που πραγματοποιεί κατά τη διάρκεια του φεστιβάλ μπορεί να φωτογραφηθεί, να μεταδοθεί ζωντανά και/ή να καταγραφεί για μετέπειτα αναπαραγωγή και/ή μετάδοση σε ραδιόφωνο και/ή τηλεόραση χωρίς καμία πληρωμή στη χορωδία (ή στην παραδοσιακή χορευτική ομάδα ή ορχήστρα).",
          "Όλα τα δικαιώματα μετάδοσης και φωτογράφισης κάθε εμφάνισης στο φεστιβάλ θα ανήκουν στο φεστιβάλ το οποίο θα είναι ελεύθερο να τα διαθέτει ή να τα χρησιμοποιεί σε προωθητικό υλικό όπως το θεωρεί κατάλληλο.",
          "Οποιαδήποτε εμφάνιση που πραγματοποιεί κατά τη διάρκεια του φεστιβάλ μπορεί, χωρίς πληρωμή, να εγγραφεί και το φεστιβάλ θα είναι δικαιούχο της οποιασδήποτε τέτοιας εγγραφής και θα έχει επιπλέον το δικαίωμα να αναπαράγει οποιαδήποτε τέτοια εγγραφή και να πωλεί, να ενοικιάζει, να προσφέρει ή να εκθέτει για πώληση ή ενοικίαση, να διανέμει ή να διαθέτει με οποιονδήποτε τρόπο θεωρεί κατάλληλο οποιασδήποτε εγγραφής ή αναπαραγωγής εγγραφής οποιασδήποτε τέτοιας εμφάνισης."
        ],
        "align": "center"
      },
      {
        "heading": "4ο Εργαστήριο & Σεμινάριο Διεύθυνσης Χορωδίας",
        "level": 2,
        "align": "center"
      },
      {
        "img": "/img/choral-2021.webp"
      },
      {
        "list": [
          "6 - 8 Ιουλίου 2021"
        ],
        "align": "center"
      },
      {
        "heading": "Το Διεθνές Χορωδιακό Φεστιβάλ Πρέβεζας προσκαλεί τους διευθυντές να υποβάλουν αίτηση για το 4ο Εργαστήριο και Σεμινάριο Διεύθυνσης Χορωδίας, υπό την καθοδήγηση των Ambrož Čopi (Σλοβενία) και Σοφίας Γιολδάση (Ελλάδα).",
        "level": 4,
        "align": "center"
      },
      {
        "p": "[Χορωδία Εργαστηρίου: Γυναικείο Φωνητικό Σύνολο Voci Contra Tempo (Ελλάδα)](https://www.facebook.com/vocicontratempo)",
        "align": "center"
      },
      {
        "heading": "Το Εργαστήριο & Σεμινάριο Διεύθυνσης είναι κατάλληλο για:",
        "level": 5,
        "align": "center"
      },
      {
        "list": [
          "Διευθυντές στην αρχή της καριέρας τους",
          "Φοιτητές διεύθυνσης με πανεπιστημιακή/ωδειακή εκπαίδευση στη μουσική",
          "Έμπειρους διευθυντές που επιθυμούν να εργαστούν με ένα σύνολο υψηλού επιπέδου"
        ],
        "align": "center"
      },
      {
        "heading": "Τέλη:",
        "level": 5,
        "align": "center"
      },
      "Η συμμετοχή μπορεί να είναι ενεργή ή παθητική. Οι ενεργοί συμμετέχοντες θα έχουν την ευκαιρία να εργαστούν πάνω σε χορωδιακό ρεπερτόριο ίσων φωνών με το Γυναικείο Φωνητικό Σύνολο Voci Contra Tempo. Οι συμμετέχοντες που επιθυμούν να είναι ενεργοί καλούνται να στείλουν το βιογραφικό τους με τις σχετικές εμπειρίες στη διεύθυνση χορωδίας. Κάθε βίντεο ή σύνδεσμοι στο διαδίκτυο που δείχνουν τους ενεργούς συμμετέχοντες να διευθύνουν μια χορωδία θα είναι ευπρόσδεκτοι (αλλά δεν είναι υποχρεωτικοί). Σε συνεννόηση με τους ηγέτες του εργαστηρίου θα γίνει επιλογή των ενεργών συμμετεχόντων για να διεξαχθεί η διεύθυνση στο Τελικό Κονσέρτο (7η Ιουλίου).",
      {
        "list": [
          "Μέγιστος αριθμός ενεργών συμμετεχόντων: 8",
          "Απεριόριστος αριθμός παθητικών συμμετεχόντων.",
          "Τέλος συμμετοχής για τους ενεργούς συμμετέχοντες: 200€",
          "Τέλος συμμετοχής για τους παθητικούς συμμετέχοντες: 120€"
        ],
        "align": "center"
      },
      {
        "p": "Από την 8η Ιουλίου 2021 έως την 11η Ιουλίου 2021, οι συμμετέχοντες θα έχουν την ευκαιρία να παρακολουθήσουν το 39ο Διεθνές Χορωδιακό Φεστιβάλ της Πρέβεζας, στα πλαίσια του οποίου θα πραγματοποιηθεί και ο 26ος Διεθνής Διαγωνισμός Χορωδιών, αλλά και να συναντηθούν και να συζητήσουν με διευθυντές των συμμετεχόντων χορωδιών, ενώ η οργανωτική επιτροπή του φεστιβάλ θα τους παράσχει οποιοδήποτε υλικό χρειαστούν.",
        "align": "center"
      },
      {
        "p": "Όλα τα μέτρα προστασίας της υγείας κατά του Covid-19 θα τηρηθούν κατά τη διάρκεια του σεμιναρίου.",
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
          "[International Jury Committee I.J.C.](#ijc21)",
          "[Competition's Categories](#categories21)",
          "[Non-Competitive Participation](#non-comp21)",
          "[4th Choral Conducting Workshop & Seminar](#seminar21)"
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
          "[Διεθνής Επιτροπή Κριτών Δ.Ε.Κ.](#ijc21)",
          "[Κατηγορίες Διαγωνισμού](#categories21)",
          "[Μη Διαγωνιστική Συμμετοχή](#non-comp21)",
          "[4ο Εργαστήριο & Σεμινάριο Χορωδιακής Διεύθυνσης](#seminar21)"
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
