import { Link } from 'react-router';
import type { ReactNode } from 'react';
import { primaryNav } from '~/content/nav';
import { localizedHref, useLocale, tr, siteNameOf } from '~/lib/locale';
import { sized } from '~/lib/img';

// Site footer: the choir (logo, name, social links), the site's pages, the legacy footer's Preveza
// links and contact details, then a copyright line with a "back to top" link. The legacy footer's
// texts, links and colours (#2b287a, maroon icons) are kept; the layout is new. Phones: one column
// with the two link lists side by side; tablets: two columns; desktops: four.
const copy = {
  en: {
    organisation: 'Choral Society “Armonia” of Preveza',
    tagline:
      'Home of the International Choral Festival of Preveza, its choral competitions and the Choral Conducting Masterclass.',
    explore: 'Explore',
    prevezaLinks: "Preveza's Links",
    visitPreveza: 'Visit Preveza',
    map: "Preveza's map",
    usefulPhones: 'Useful phone numbers',
    emergency: 'Emergency numbers',
    contact: 'Contact',
    address: 'Preveza, Epirus (Greece)',
    poBox: 'P.O. Box 29, 481 00 Preveza',
    tel: 'Tel',
    fax: 'Fax',
    followUs: 'Follow Us',
    rights: 'All rights reserved.',
    top: 'Back to top',
  },
  el: {
    organisation: 'Χορωδιακός Σύλλογος «Αρμονία» Πρέβεζας',
    tagline:
      'Η χορωδία που διοργανώνει το Διεθνές Χορωδιακό Φεστιβάλ Πρέβεζας, τους χορωδιακούς διαγωνισμούς του και το Masterclass Διεύθυνσης Χορωδίας.',
    explore: 'Πλοήγηση',
    prevezaLinks: 'Σύνδεσμοι Πρέβεζας',
    visitPreveza: 'Επίσκεψη Πρέβεζας',
    map: 'Χάρτης Πρέβεζας',
    usefulPhones: 'Χρήσιμα τηλέφωνα',
    emergency: 'Έκτακτα τηλέφωνα',
    contact: 'Επικοινωνία',
    address: 'Πρέβεζα, Ήπειρος (Ελλάδα)',
    poBox: 'Τ.Θ. 29, Τ.Κ. 481 00 Πρέβεζα',
    tel: 'Τηλ',
    fax: 'Φαξ',
    followUs: 'Ακολουθήστε μας',
    rights: 'Με επιφύλαξη παντός δικαιώματος.',
    top: 'Επιστροφή επάνω',
  },
  fr: {
    organisation: 'Société chorale « Armonia » de Preveza',
    tagline:
      'Organisatrice du Festival choral international de Preveza, de ses concours de chant choral et de la Masterclass de direction de chœur.',
    explore: 'Explorer',
    prevezaLinks: 'Liens utiles sur Preveza',
    visitPreveza: 'Visiter Preveza',
    map: 'Plan de Preveza',
    usefulPhones: 'Numéros utiles',
    emergency: "Numéros d'urgence",
    contact: 'Contact',
    address: 'Preveza, Épire (Grèce)',
    poBox: 'B.P. 29, 481 00 Preveza',
    tel: 'Tél.',
    fax: 'Fax',
    followUs: 'Suivez-nous',
    rights: 'Tous droits réservés.',
    top: 'Haut de page',
  },
  it: {
    organisation: 'Società corale «Armonia» di Preveza',
    tagline:
      'Organizza il Festival corale internazionale di Preveza, i suoi concorsi corali e la Masterclass di direzione corale.',
    explore: 'Esplora',
    prevezaLinks: 'Link su Preveza',
    visitPreveza: 'Visitare Preveza',
    map: 'Mappa di Preveza',
    usefulPhones: 'Numeri utili',
    emergency: 'Numeri di emergenza',
    contact: 'Contatti',
    address: 'Preveza, Epiro (Grecia)',
    poBox: 'Casella postale 29, 481 00 Preveza',
    tel: 'Tel.',
    fax: 'Fax',
    followUs: 'Seguici',
    rights: 'Tutti i diritti riservati.',
    top: 'Torna su',
  },
  de: {
    organisation: 'Chorverein „Armonia“ Preveza',
    tagline:
      'Veranstalter des Internationalen Chorfestivals Preveza, seiner Chorwettbewerbe und des Meisterkurses für Chordirigieren.',
    explore: 'Entdecken',
    prevezaLinks: 'Links zu Preveza',
    visitPreveza: 'Preveza besuchen',
    map: 'Karte von Preveza',
    usefulPhones: 'Nützliche Telefonnummern',
    emergency: 'Notrufnummern',
    contact: 'Kontakt',
    address: 'Preveza, Epirus (Griechenland)',
    poBox: 'Postfach 29, 481 00 Preveza',
    tel: 'Tel.',
    fax: 'Fax',
    followUs: 'Folgen Sie uns',
    rights: 'Alle Rechte vorbehalten.',
    top: 'Nach oben',
  },
  es: {
    organisation: 'Sociedad Coral «Armonia» de Preveza',
    tagline:
      'Organiza el Festival Coral Internacional de Preveza, sus concursos corales y la Clase magistral de dirección coral.',
    explore: 'Explorar',
    prevezaLinks: 'Enlaces sobre Preveza',
    visitPreveza: 'Visitar Preveza',
    map: 'Mapa de Preveza',
    usefulPhones: 'Teléfonos útiles',
    emergency: 'Teléfonos de emergencia',
    contact: 'Contacto',
    address: 'Preveza, Epiro (Grecia)',
    poBox: 'Apartado 29, 481 00 Preveza',
    tel: 'Tel.',
    fax: 'Fax',
    followUs: 'Síganos',
    rights: 'Todos los derechos reservados.',
    top: 'Volver arriba',
  },
} as const;

const links = [
  ['visitPreveza', 'https://www.visitgreece.gr/mainland/epirus/preveza/'],
  [
    'map',
    'https://www.google.com/maps/place/Preveza/@38.9602101,20.7247097,14z/data=!3m1!4b1!4m6!3m5!1s0x135c38e362512c35:0x57e22b65ea779442!8m2!3d38.9592649!4d20.7517155!16zL20vMDFzMmZt',
  ],
  ['usefulPhones', 'http://discoverpreveza.gr/useful-phone-numbers/?lang=en'],
  ['emergency', 'https://www.greecewebtravel.com/greece-useful-numbers.html'],
] as const;

// "Explore": the menu's pages (app/content/nav.ts) but the competitions, whose long names are
// reached from the festival pages
const explore = primaryNav.slice(0, 3).flatMap((group) => group.children ?? []);

const emails = ['armonia4@otenet.gr', 'prevezachoralfestival@gmail.com'];

// The legacy site's Font Awesome 4.7 icons, as inline outlines (the glyphs of its font, which is no
// longer loaded: a stylesheet and a 76K font for three icons slowed every first visit).
// [glyph width, outline] in the font's units: 1792 to the em, baseline at 0, y upwards.
const icons = {
  facebook: [
    1024,
    'M959 1524v-264h-157q-86 0 -116 -36t-30 -108v-189h293l-39 -296h-254v-759h-306v759h-255v296h255v218q0 186 104 288.5t277 102.5q147 0 228 -12z',
  ],
  instagram: [
    1536,
    'M1024 640q0 106 -75 181t-181 75t-181 -75t-75 -181t75 -181t181 -75t181 75t75 181zM1162 640q0 -164 -115 -279t-279 -115t-279 115t-115 279t115 279t279 115t279 -115t115 -279zM1270 1050q0 -38 -27 -65t-65 -27t-65 27t-27 65t27 65t65 27t65 -27t27 -65zM768 1270 q-7 0 -76.5 0.5t-105.5 0t-96.5 -3t-103 -10t-71.5 -18.5q-50 -20 -88 -58t-58 -88q-11 -29 -18.5 -71.5t-10 -103t-3 -96.5t0 -105.5t0.5 -76.5t-0.5 -76.5t0 -105.5t3 -96.5t10 -103t18.5 -71.5q20 -50 58 -88t88 -58q29 -11 71.5 -18.5t103 -10t96.5 -3t105.5 0t76.5 0.5 t76.5 -0.5t105.5 0t96.5 3t103 10t71.5 18.5q50 20 88 58t58 88q11 29 18.5 71.5t10 103t3 96.5t0 105.5t-0.5 76.5t0.5 76.5t0 105.5t-3 96.5t-10 103t-18.5 71.5q-20 50 -58 88t-88 58q-29 11 -71.5 18.5t-103 10t-96.5 3t-105.5 0t-76.5 -0.5zM1536 640q0 -229 -5 -317 q-10 -208 -124 -322t-322 -124q-88 -5 -317 -5t-317 5q-208 10 -322 124t-124 322q-5 88 -5 317t5 317q10 208 124 322t322 124q88 5 317 5t317 -5q208 -10 322 -124t124 -322q5 -88 5 -317z',
  ],
  youtube: [
    1536,
    'M971 292v-211q0 -67 -39 -67q-23 0 -45 22v301q22 22 45 22q39 0 39 -67zM1309 291v-46h-90v46q0 68 45 68t45 -68zM343 509h107v94h-312v-94h105v-569h100v569zM631 -60h89v494h-89v-378q-30 -42 -57 -42q-18 0 -21 21q-1 3 -1 35v364h-89v-391q0 -49 8 -73 q12 -37 58 -37q48 0 102 61v-54zM1060 88v197q0 73 -9 99q-17 56 -71 56q-50 0 -93 -54v217h-89v-663h89v48q45 -55 93 -55q54 0 71 55q9 27 9 100zM1398 98v13h-91q0 -51 -2 -61q-7 -36 -40 -36q-46 0 -46 69v87h179v103q0 79 -27 116q-39 51 -106 51q-68 0 -107 -51 q-28 -37 -28 -116v-173q0 -79 29 -116q39 -51 108 -51q72 0 108 53q18 27 21 54q2 9 2 58zM790 1011v210q0 69 -43 69t-43 -69v-210q0 -70 43 -70t43 70zM1509 260q0 -234 -26 -350q-14 -59 -58 -99t-102 -46q-184 -21 -555 -21t-555 21q-58 6 -102.5 46t-57.5 99 q-26 112 -26 350q0 234 26 350q14 59 58 99t103 47q183 20 554 20t555 -20q58 -7 102.5 -47t57.5 -99q26 -112 26 -350zM511 1536h102l-121 -399v-271h-100v271q-14 74 -61 212q-37 103 -65 187h106l71 -263zM881 1203v-175q0 -81 -28 -118q-38 -51 -106 -51q-67 0 -105 51 q-28 38 -28 118v175q0 80 28 117q38 51 105 51q68 0 106 -51q28 -37 28 -117zM1216 1365v-499h-91v55q-53 -62 -103 -62q-46 0 -59 37q-8 24 -8 75v394h91v-367q0 -33 1 -35q3 -22 21 -22q27 0 57 43v381h91z',
  ],
} as const;

const social = [
  [
    'facebook',
    'Facebook',
    'https://www.facebook.com/InternationalChoralFestivalOfPreveza',
  ],
  ['instagram', 'Instagram', 'https://www.instagram.com/armoniachoirpreveza/'],
  [
    'youtube',
    'YouTube',
    'https://www.youtube.com/@internationalchoralfestiva8318/videos',
  ],
] as const;

// one icon, sized and placed like the font's glyph (1em high, sitting on the text baseline)
function Icon({ name }: { name: keyof typeof icons }) {
  const [width, d] = icons[name];
  return (
    <svg
      viewBox={`0 -1536 ${width} 1792`}
      aria-hidden="true"
      className="h-[1em] fill-current"
      style={{ width: `${width / 1792}em` }}
    >
      <path transform="scale(1,-1)" d={d} />
    </svg>
  );
}

// small outline icons (24px grid) for the contact lines and links
const glyphs = {
  pin: 'M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21zM12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z',
  phone:
    'M5 4h3.5l1.5 4.5-2.2 1.3a11 11 0 0 0 6.4 6.4l1.3-2.2L20 15.5V19a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1z',
  fax: 'M7 8V3h10v5M7 17H5a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-2M7 14h10v7H7z',
  mail: 'M3 6h18v12H3zM3 7l9 6 9-6',
  out: 'M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5',
  up: 'M12 19V5M5 12l7-7 7 7',
} as const;

function Glyph({
  name,
  className = '',
}: {
  name: keyof typeof glyphs;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={`shrink-0 fill-none stroke-current ${className}`}
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={glyphs[name]} />
    </svg>
  );
}

const heading = 'type-label mb-5 uppercase text-white/60';
const link =
  'text-whitesmoke/90 underline-offset-4 transition-colors hover:text-white hover:underline focus-visible:text-white';

function Lines({ children }: { children: ReactNode }) {
  return <ul className="space-y-3">{children}</ul>;
}

export function Footer() {
  const locale = useLocale();
  const t = tr(copy, locale);
  const name = siteNameOf(locale);

  return (
    <footer className="type-small relative overflow-hidden bg-brand-navy text-whitesmoke">
      {/* accent rule and a soft glow behind the choir */}
      <div
        aria-hidden="true"
        className="h-1 bg-gradient-to-r from-brand-maroon via-brand-navy-light to-brand-maroon"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-brand-navy-light/30 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1200px] px-4 pb-8 pt-14 sm:px-6 lg:pt-20">
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-3 lg:grid-cols-[1.35fr_1fr_1fr_1.2fr] lg:gap-x-10">
          {/* the choir */}
          <div className="col-span-2 md:col-span-3 md:grid md:grid-cols-2 md:items-end md:gap-x-6 lg:col-span-1 lg:block">
            <div>
              <Link
                to={localizedHref(locale, '/')}
                className="group inline-flex items-center gap-4"
              >
                <span className="grid size-16 shrink-0 place-items-center rounded-full bg-white p-1 shadow-lg shadow-black/20 ring-1 ring-white/20 transition-transform duration-300 group-hover:scale-105">
                  <img
                    src={sized('/img/logo.webp', 400)}
                    alt=""
                    width={56}
                    height={56}
                    loading="lazy"
                    className="size-14 rounded-full"
                  />
                </span>
                <span>
                  <span className="type-h4 block text-white">{name}</span>
                  <span className="block text-whitesmoke/70">
                    {t.organisation}
                  </span>
                </span>
              </Link>
              <p className="mt-6 max-w-sm text-whitesmoke/75">{t.tagline}</p>
            </div>
            <div className="md:justify-self-end lg:justify-self-auto">
              <h2 className={`${heading} mt-8`}>{t.followUs}</h2>
              <ul className="flex gap-3">
                {social.map(([icon, label, href]) => (
                  <li key={icon}>
                    <a
                      href={href}
                      aria-label={label}
                      className="grid size-11 place-items-center rounded-full bg-white/5 text-[1.25rem] text-whitesmoke ring-1 ring-white/15 transition-colors duration-300 hover:bg-brand-maroon hover:ring-brand-maroon focus-visible:bg-brand-maroon"
                    >
                      <Icon name={icon} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* the site's pages */}
          <nav aria-label={t.explore} className="col-span-1">
            <h2 className={heading}>{t.explore}</h2>
            <Lines>
              {explore.map((item) => (
                <li key={item.href}>
                  <Link to={localizedHref(locale, item.href!)} className={link}>
                    {tr(item.label, locale)}
                  </Link>
                </li>
              ))}
            </Lines>
          </nav>

          {/* Preveza */}
          <div className="col-span-1">
            <h2 className={heading}>{t.prevezaLinks}</h2>
            <Lines>
              {links.map(([key, href]) => (
                <li key={key}>
                  <a
                    className={link}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t[key].split(' ').slice(0, -1).join(' ')}{' '}
                    {/* the last word and the arrow wrap together */}
                    <span className="whitespace-nowrap">
                      {t[key].split(' ').at(-1)}
                      <Glyph
                        name="out"
                        className="ml-1.5 inline-block size-3 -translate-y-px opacity-60"
                      />
                    </span>
                  </a>
                </li>
              ))}
            </Lines>
          </div>

          {/* contact */}
          <address className="col-span-2 not-italic md:col-span-1">
            <h2 className={heading}>{t.contact}</h2>
            <Lines>
              <li className="flex gap-3">
                <Glyph name="pin" className="mt-[3px] size-4 text-rose-300" />
                <span>
                  {t.address}
                  <span className="block text-whitesmoke/70">{t.poBox}</span>
                </span>
              </li>
              <li className="flex gap-3">
                <Glyph name="phone" className="mt-[3px] size-4 text-rose-300" />
                <span>
                  {t.tel}:{' '}
                  <a href="tel:+302682024915" className={link}>
                    +30 26820 24915
                  </a>
                </span>
              </li>
              <li className="flex gap-3">
                <Glyph name="fax" className="mt-[3px] size-4 text-rose-300" />
                <span>{t.fax}: +30 26820 29852</span>
              </li>
              {emails.map((email) => (
                <li key={email} className="flex gap-3">
                  <Glyph
                    name="mail"
                    className="mt-[3px] size-4 text-rose-300"
                  />
                  <a href={`mailto:${email}`} className={link}>
                    {email.split('@')[0]}@<wbr />
                    {email.split('@')[1]}
                  </a>
                </li>
              ))}
            </Lines>
          </address>
        </div>

        {/* copyright */}
        <div className="mt-14 flex flex-col-reverse items-center gap-4 border-t border-white/10 pt-6 text-center type-caption text-whitesmoke/60 sm:flex-row sm:justify-between sm:text-left">
          <p>
            © {new Date().getFullYear()} {t.organisation}. {t.rights}
          </p>
          <a
            href="#top"
            onClick={(e) => (
              e.preventDefault(),
              window.scrollTo({ top: 0, behavior: 'smooth' })
            )}
            className="group inline-flex items-center gap-2 rounded-full px-3 py-1.5 ring-1 ring-white/15 transition-colors hover:bg-white/10 hover:text-white"
          >
            {t.top}
            <Glyph
              name="up"
              className="size-3.5 transition-transform group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
