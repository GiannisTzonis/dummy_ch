import { useLocale, tr } from "~/lib/locale";

// Footer of index.html / indexGreek.html: same text, links, colours (#2b287a
// background, whitesmoke text, maroon Font Awesome icons) and layout (Bootstrap
// col-lg-5 / col-lg-5 / col-lg-2 in a 1140px container) as the legacy site.
const copy = {
  en: {
    prevezaLinks: "Preveza's Links",
    visitPreveza: "Visit Preveza",
    map: "Preveza's map",
    usefulPhones: "Useful phone numbers",
    emergency: "Emergency numbers",
    contact: "Contact",
    address: "Preveza, Epirus (Greece)",
    tel: "Tel: +30 26820 24915",
    fax: "Fax: +30 26820 29852",
    followUs: "Follow Us",
  },
  el: {
    prevezaLinks: "Σύνδεσμοι Πρέβεζας",
    visitPreveza: "Επίσκεψη Πρέβεζας",
    map: "Χάρτης Πρέβεζας",
    usefulPhones: "Χρήσιμα τηλέφωνα",
    emergency: "Έκτακτα τηλέφωνα",
    contact: "Επικοινωνία",
    address: "Πρέβεζα, Ήπειρος (Ελλάδα)",
    tel: "Τηλ: +30 26820 24915",
    fax: "Φαξ: +30 26820 29852",
    followUs: "Ακολουθήστε μας",
  },
  fr: {
    prevezaLinks: "Liens utiles sur Preveza",
    visitPreveza: "Visiter Preveza",
    map: "Plan de Preveza",
    usefulPhones: "Numéros utiles",
    emergency: "Numéros d'urgence",
    contact: "Contact",
    address: "Preveza, Épire (Grèce)",
    tel: "Tél. : +30 26820 24915",
    fax: "Fax : +30 26820 29852",
    followUs: "Suivez-nous",
  },
  it: {
    prevezaLinks: "Link su Preveza",
    visitPreveza: "Visitare Preveza",
    map: "Mappa di Preveza",
    usefulPhones: "Numeri utili",
    emergency: "Numeri di emergenza",
    contact: "Contatti",
    address: "Preveza, Epiro (Grecia)",
    tel: "Tel.: +30 26820 24915",
    fax: "Fax: +30 26820 29852",
    followUs: "Seguici",
  },
  de: {
    prevezaLinks: "Links zu Preveza",
    visitPreveza: "Preveza besuchen",
    map: "Karte von Preveza",
    usefulPhones: "Nützliche Telefonnummern",
    emergency: "Notrufnummern",
    contact: "Kontakt",
    address: "Preveza, Epirus (Griechenland)",
    tel: "Tel.: +30 26820 24915",
    fax: "Fax: +30 26820 29852",
    followUs: "Folgen Sie uns",
  },
  es: {
    prevezaLinks: "Enlaces sobre Preveza",
    visitPreveza: "Visitar Preveza",
    map: "Mapa de Preveza",
    usefulPhones: "Teléfonos útiles",
    emergency: "Teléfonos de emergencia",
    contact: "Contacto",
    address: "Preveza, Epiro (Grecia)",
    tel: "Tel.: +30 26820 24915",
    fax: "Fax: +30 26820 29852",
    followUs: "Síganos",
  },
} as const;

const links = [
  ["visitPreveza", "https://www.visitgreece.gr/mainland/epirus/preveza/"],
  [
    "map",
    "https://www.google.com/maps/place/Preveza/@38.9602101,20.7247097,14z/data=!3m1!4b1!4m6!3m5!1s0x135c38e362512c35:0x57e22b65ea779442!8m2!3d38.9592649!4d20.7517155!16zL20vMDFzMmZt",
  ],
  ["usefulPhones", "http://discoverpreveza.gr/useful-phone-numbers/?lang=en"],
  ["emergency", "https://www.greecewebtravel.com/greece-useful-numbers.html"],
] as const;

// The legacy site's Font Awesome 4.7 icons, as inline outlines (the glyphs of its font, which is no
// longer loaded: a stylesheet and a 76K font for three icons slowed every first visit).
// [glyph width, outline] in the font's units: 1792 to the em, baseline at 0, y upwards.
const icons = {
  facebook: [1024, "M959 1524v-264h-157q-86 0 -116 -36t-30 -108v-189h293l-39 -296h-254v-759h-306v759h-255v296h255v218q0 186 104 288.5t277 102.5q147 0 228 -12z"],
  instagram: [1536, "M1024 640q0 106 -75 181t-181 75t-181 -75t-75 -181t75 -181t181 -75t181 75t75 181zM1162 640q0 -164 -115 -279t-279 -115t-279 115t-115 279t115 279t279 115t279 -115t115 -279zM1270 1050q0 -38 -27 -65t-65 -27t-65 27t-27 65t27 65t65 27t65 -27t27 -65zM768 1270 q-7 0 -76.5 0.5t-105.5 0t-96.5 -3t-103 -10t-71.5 -18.5q-50 -20 -88 -58t-58 -88q-11 -29 -18.5 -71.5t-10 -103t-3 -96.5t0 -105.5t0.5 -76.5t-0.5 -76.5t0 -105.5t3 -96.5t10 -103t18.5 -71.5q20 -50 58 -88t88 -58q29 -11 71.5 -18.5t103 -10t96.5 -3t105.5 0t76.5 0.5 t76.5 -0.5t105.5 0t96.5 3t103 10t71.5 18.5q50 20 88 58t58 88q11 29 18.5 71.5t10 103t3 96.5t0 105.5t-0.5 76.5t0.5 76.5t0 105.5t-3 96.5t-10 103t-18.5 71.5q-20 50 -58 88t-88 58q-29 11 -71.5 18.5t-103 10t-96.5 3t-105.5 0t-76.5 -0.5zM1536 640q0 -229 -5 -317 q-10 -208 -124 -322t-322 -124q-88 -5 -317 -5t-317 5q-208 10 -322 124t-124 322q-5 88 -5 317t5 317q10 208 124 322t322 124q88 5 317 5t317 -5q208 -10 322 -124t124 -322q5 -88 5 -317z"],
  youtube: [1536, "M971 292v-211q0 -67 -39 -67q-23 0 -45 22v301q22 22 45 22q39 0 39 -67zM1309 291v-46h-90v46q0 68 45 68t45 -68zM343 509h107v94h-312v-94h105v-569h100v569zM631 -60h89v494h-89v-378q-30 -42 -57 -42q-18 0 -21 21q-1 3 -1 35v364h-89v-391q0 -49 8 -73 q12 -37 58 -37q48 0 102 61v-54zM1060 88v197q0 73 -9 99q-17 56 -71 56q-50 0 -93 -54v217h-89v-663h89v48q45 -55 93 -55q54 0 71 55q9 27 9 100zM1398 98v13h-91q0 -51 -2 -61q-7 -36 -40 -36q-46 0 -46 69v87h179v103q0 79 -27 116q-39 51 -106 51q-68 0 -107 -51 q-28 -37 -28 -116v-173q0 -79 29 -116q39 -51 108 -51q72 0 108 53q18 27 21 54q2 9 2 58zM790 1011v210q0 69 -43 69t-43 -69v-210q0 -70 43 -70t43 70zM1509 260q0 -234 -26 -350q-14 -59 -58 -99t-102 -46q-184 -21 -555 -21t-555 21q-58 6 -102.5 46t-57.5 99 q-26 112 -26 350q0 234 26 350q14 59 58 99t103 47q183 20 554 20t555 -20q58 -7 102.5 -47t57.5 -99q26 -112 26 -350zM511 1536h102l-121 -399v-271h-100v271q-14 74 -61 212q-37 103 -65 187h106l71 -263zM881 1203v-175q0 -81 -28 -118q-38 -51 -106 -51q-67 0 -105 51 q-28 38 -28 118v175q0 80 28 117q38 51 105 51q68 0 106 -51q28 -37 28 -117zM1216 1365v-499h-91v55q-53 -62 -103 -62q-46 0 -59 37q-8 24 -8 75v394h91v-367q0 -33 1 -35q3 -22 21 -22q27 0 57 43v381h91z"],
} as const;

const social = [
  ["facebook", "Facebook", "https://www.facebook.com/InternationalChoralFestivalOfPreveza"],
  ["instagram", "Instagram", "https://www.instagram.com/armoniachoirpreveza/"],
  ["youtube", "YouTube", "https://www.youtube.com/@internationalchoralfestiva8318/videos"],
] as const;

// one icon, sized and placed like the font's glyph (1em high, sitting on the text baseline)
function Icon({ name }: { name: keyof typeof icons }) {
  const [width, d] = icons[name];
  return (
    <svg
      viewBox={`0 -1536 ${width} 1792`}
      aria-hidden="true"
      className="inline-block h-[1em] fill-current align-[-0.1429em] text-brand-label transition-colors duration-300 group-hover:text-whitesmoke"
      style={{ width: `${width / 1792}em` }}
    >
      <path transform="scale(1,-1)" d={d} />
    </svg>
  );
}

const heading = "type-h5 mb-4 text-white";

export function Footer() {
  const locale = useLocale();
  const t = tr(copy, locale);

  return (
    <footer className="type-small bg-brand-navy pb-10 pt-12 text-whitesmoke lg:pb-[30px] lg:pt-[100px]">
      <div className="mx-auto max-w-[1140px] px-[15px]">
        <div className="grid grid-cols-1 gap-y-[30px] text-center sm:grid-cols-2 sm:text-left lg:grid-cols-12 lg:gap-x-[30px]">
          <div className="lg:col-span-5">
            <h6 className={heading}>{t.prevezaLinks}</h6>
            <ul className="space-y-1.5">
              {links.map(([key, href]) => (
                <li key={key}>
                  <a className="text-whitesmoke underline-offset-2 transition-colors hover:text-white hover:underline" href={href}>
                    {t[key]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5">
            <h6 className={heading}>{t.contact}</h6>
            <ul className="space-y-1.5">
              <li>{t.address}</li>
              <li>{t.tel}</li>
              <li>{t.fax}</li>
              <li>
                <span className="font-semibold">Email:</span> <span>armonia4@otenet.gr</span>
              </li>
              <li>prevezachoralfestival@gmail.com</li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h6 className={heading}>{t.followUs}</h6>
            <div className="flex items-center justify-center sm:justify-start">
              {social.map(([icon, label, href]) => (
                <a key={icon} href={href} aria-label={label} className="group pr-[25px] text-[2rem] leading-none">
                  <Icon name={icon} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
