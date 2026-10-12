import { useLocale } from "~/lib/locale";

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

const social = [
  ["fa-facebook", "Facebook", "https://www.facebook.com/InternationalChoralFestivalOfPreveza"],
  ["fa-instagram", "Instagram", "https://www.instagram.com/armoniachoirpreveza/"],
  ["fa-youtube", "YouTube", "https://www.youtube.com/@internationalchoralfestiva8318/videos"],
] as const;

const heading = "type-h5 mb-4 text-white";

export function Footer() {
  const locale = useLocale();
  const t = copy[locale];

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
                  <i className={`fa ${icon} text-brand-label transition-colors duration-300 group-hover:text-whitesmoke`} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
