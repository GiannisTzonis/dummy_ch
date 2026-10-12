import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
  useParams,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import { useAnchorScroll } from "./lib/anchor-scroll";
import { recoverNavigation, useStaleDeployRecovery } from "./lib/stale-deploy";
import { useEffect } from "react";

export const links: Route.LinksFunction = () => [
  { rel: "icon", type: "image/webp", href: "/img/logo.w400.webp" },
  // Font Awesome 4.7 from the legacy site (footer social icons).
  { rel: "stylesheet", href: "/vendor/font-awesome/css/font-awesome.min.css" },
];

export const meta: Route.MetaFunction = () => [
  { title: "Armonia Choir | International Choral Festival of Preveza, Greece" },
  {
    name: "description",
    content:
      "Official website of Armonia Choir and the International Choral Festival of Preveza, Greece. Discover festival news, masterclasses, competitions, and more about choral music in Epirus.",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const { lang } = useParams();
  return (
    <html lang={lang === "el" ? "el" : "en"}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Google Search Console ownership of armoniachoir.org (keep: removing it can unverify the site) */}
        <meta name="google-site-verification" content="pjWBeMgIwD-LrvHLt-QrVZvE4VHSc3qdYe21uLZSJDA" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  useAnchorScroll();
  useStaleDeployRecovery();
  return <Outlet />;
}

// The page shown for an address that does not exist (GitHub Pages serves 404.html, which starts
// the app here: scripts/seo.mjs) and for any other error. In the language of the address.
const errorText = {
  en: {
    notFound: "Page not found",
    notFoundText: "The page you are looking for does not exist or has moved.",
    error: "Something went wrong",
    errorText: "This page could not be shown. Please try again in a moment.",
    links: [
      ["/en/", "Home"],
      ["/en/festival/2026", "Festival 2026"],
      ["/en/festivals", "Previous festivals"],
    ],
  },
  el: {
    notFound: "Η σελίδα δεν βρέθηκε",
    notFoundText: "Η σελίδα που αναζητάτε δεν υπάρχει ή έχει μετακινηθεί.",
    error: "Κάτι πήγε στραβά",
    errorText: "Η σελίδα δεν μπόρεσε να εμφανιστεί. Δοκιμάστε ξανά σε λίγο.",
    links: [
      ["/el/", "Αρχική"],
      ["/el/festival/2026", "Φεστιβάλ 2026"],
      ["/el/festivals", "Προηγούμενα φεστιβάλ"],
    ],
  },
} as const;

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  // a page whose data or code went missing with a new deployment: one full reload fetches the new one
  useEffect(() => {
    recoverNavigation();
  }, []);
  const { pathname } = useLocation();
  const t = errorText[pathname.startsWith("/el") ? "el" : "en"];
  // (or GitHub Pages served its 404.html for this address: an unknown festival year, say, which
  // fails while loading its data rather than as a route that does not exist)
  const notFound =
    (isRouteErrorResponse(error) && error.status === 404) ||
    (typeof document !== "undefined" && !!document.querySelector('meta[name="armonia-not-found"]'));
  const stack = import.meta.env.DEV && error instanceof Error ? error.stack : undefined;

  return (
    <main className="relative isolate flex min-h-svh flex-col items-center justify-center overflow-hidden bg-brand-navy-dark px-4 py-16 text-center text-white">
      <div className="absolute inset-0 -z-10 bg-[url(/img/MainCover.webp)] bg-cover bg-center opacity-35" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/30 via-black/10 to-black/50" aria-hidden="true" />
      <a href={t.links[0][0]} aria-label={t.links[0][1]}>
        <img src="/img/logo.w400.webp" alt="" className="h-20 w-20" />
      </a>
      {notFound && <p className="type-label mt-8 font-semibold tracking-[0.3em] text-white/70">404</p>}
      <h1 className="type-h1 mt-3 text-white">{notFound ? t.notFound : t.error}</h1>
      <p className="type-lead mt-4 max-w-[46ch] text-white/85">{notFound ? t.notFoundText : t.errorText}</p>
      <nav className="mt-10 flex flex-wrap justify-center gap-3">
        {t.links.map(([href, label], i) => (
          <a
            key={href}
            href={href}
            className={`type-small rounded-full px-5 py-2.5 font-semibold transition-colors ${i === 0 ? "bg-white text-brand-navy hover:bg-white/90" : "bg-white/10 text-white ring-1 ring-white/30 hover:bg-white/20"}`}
          >
            {label}
          </a>
        ))}
      </nav>
      {stack && <pre className="type-caption mt-10 max-w-full overflow-x-auto rounded-lg bg-black/60 p-4 text-left">{stack}</pre>}
    </main>
  );
}
