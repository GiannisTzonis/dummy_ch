import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { primaryNav } from "~/content/nav";
import type { Locale, NavItem } from "~/content/types";
import { localizedHref as withLocale, useLocale } from "~/lib/locale";
import { LanguageSwitch } from "./LanguageSwitch";
import { sized } from "~/lib/img";

// As on the legacy site (#header in css/main.css): fixed over the page's cover
// banner, transparent until the page scrolls past 100px, then rgba(0,0,0,0.8).
// Festival, masterclass and competition pages show the festival logo; the
// rest show the choir logo. Every page but the home page has a "Home" link.
const homeItem: NavItem = { label: { en: "Home", el: "Αρχική" }, href: "/" };
const FESTIVAL_SECTIONS = /^\/(en|el)\/(festival|festivals|masterclass|masterclasses|competition)(\/|$)/;

// From 1024px the whole menu is shown. Entries longer than 20 characters ("International Choral
// Festival", the Greek ones) are set on two lines, split at the word boundary that makes the lines
// most even, so each entry is exactly as wide as its longest line and the gaps between entries are
// equal. Entries are top-aligned: every first line shares one baseline, and a dropdown's chevron
// ends the first line. From 1600px (3xl) in English and 1920px (4xl) in Greek every entry fits on
// one line: the break is dropped and the chevron moves to the end.
const labelFit = {
  en: { text: "text-[12px] tracking-[0.04em] xl:text-[13px] 3xl:tracking-[0.06em]", narrow: "inline 3xl:hidden", wide: "hidden 3xl:inline" },
  el: { text: "text-[12px] tracking-[0.04em] xl:text-[13px] 4xl:tracking-[0.06em]", narrow: "inline 4xl:hidden", wide: "hidden 4xl:inline" },
} as const;

function splitEven(label: string): [string, string] | null {
  const words = label.split(" ");
  if (label.length <= 20 || words.length < 2) return null;
  let best = 1;
  for (let i = 1; i < words.length; i++) {
    const worst = (k: number) => Math.max(words.slice(0, k).join(" ").length, words.slice(k).join(" ").length);
    if (worst(i) <= worst(best)) best = i; // on a tie, the longer first line
  }
  return [words.slice(0, best).join(" "), words.slice(best).join(" ")];
}

function Label({ text, locale, chevron }: { text: string; locale: Locale; chevron: boolean }) {
  const lines = splitEven(text);
  if (!lines) return <span className="whitespace-nowrap">{text}{chevron && <Chevron />}</span>;
  const fit = labelFit[locale];
  return (
    <>
      <span className="whitespace-nowrap">
        {lines[0]}
        {chevron && <Chevron className={fit.narrow} />}
      </span>{" "}
      <br className={fit.narrow} />
      <span className="whitespace-nowrap">
        {lines[1]}
        {chevron && <Chevron className={fit.wide} />}
      </span>
    </>
  );
}

function Chevron({ className = "inline" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className={`ml-1 h-3 w-3 align-[-1px] ${className}`}>
      <path d="M5.3 7.3a1 1 0 0 1 1.4 0L10 10.6l3.3-3.3a1 1 0 1 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 0-1.4Z" />
    </svg>
  );
}

export function Navbar() {
  const locale = useLocale();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHome = /^\/(en|el)\/?$/.test(location.pathname);
  const logo = FESTIVAL_SECTIONS.test(location.pathname) ? "/img/fest-logo.webp" : "/img/logo.webp";
  const items: NavItem[] = isHome ? primaryNav : [homeItem, ...primaryNav];
  const solid = scrolled || mobileOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 text-white transition-all duration-500 ${solid ? "h-[90px] bg-black/80" : "bg-transparent"}`}
    >
      <div className="flex h-[90px] items-center px-4 lg:pr-4 lg:pl-6 min-[90rem]:pr-[14px] min-[90rem]:pl-[60px]">
        <Link to={withLocale(locale, "/")} onClick={() => setMobileOpen(false)} className="shrink-0">
          <img src={sized(logo, 400)} alt="Armonia Choir" className="h-auto w-[60px] xl:w-[75px]" />
        </Link>

        {/* Desktop nav: entries top-aligned (first lines share a baseline, level with the language
            picker); every item stretches to the tallest, so all submenus open at the same height */}
        <nav className="ml-auto hidden self-start pt-[30px] lg:block">
          <ul className="flex">
            {items.map((item) => (
              <li key={item.label.en} className="group relative min-[90rem]:ml-[10px]">
                {item.href ? (
                  <Link
                    to={withLocale(locale, item.href === "/" ? "" : item.href)}
                    className={`type-label ${labelFit[locale].text} block px-[10px] py-[6px] text-white hover:text-white/80`}
                  >
                    <Label text={item.label[locale]} locale={locale} chevron={false} />
                  </Link>
                ) : (
                  <span className={`type-label ${labelFit[locale].text} block cursor-pointer px-[10px] py-[6px] text-white`}>
                    <Label text={item.label[locale]} locale={locale} chevron={!!item.children} />
                  </span>
                )}
                {item.children && (
                  <ul className="invisible absolute left-0 top-full mt-[14px] min-w-[200px] bg-white p-[10px] opacity-0 shadow-[0_0_30px_rgba(127,137,161,0.25)] transition-all duration-300 group-hover:visible group-hover:mt-0 group-hover:opacity-100">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          to={withLocale(locale, child.href!)}
                          className="type-small block whitespace-nowrap px-3 py-2 text-body transition-colors duration-200 hover:bg-surface hover:text-brand-navy"
                        >
                          {child.label[locale]}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            {/* the language selector: one more entry of the menu, on the same line */}
            <li className="relative min-[90rem]:ml-[10px]">
              <LanguageSwitch variant="menu" locale={locale} pathname={location.pathname} />
            </li>
          </ul>
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-3 sm:gap-4 lg:hidden">
          <LanguageSwitch variant="compact" locale={locale} pathname={location.pathname} />
          {/* Mobile toggle */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            className="flex h-8 w-8 items-center justify-center lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span className="flex flex-col gap-1.5">
              <span className="h-0.5 w-6 bg-white" />
              <span className="h-0.5 w-6 bg-white" />
              <span className="h-0.5 w-6 bg-white" />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <nav className="bg-black/90 lg:hidden">
          <ul className="flex flex-col divide-y divide-white/10 px-4">
            {items.map((item) => (
              <li key={item.label.en} className="py-1">
                {item.href ? (
                  <Link
                    to={withLocale(locale, item.href === "/" ? "" : item.href)}
                    className="type-label block py-3"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label[locale]}
                  </Link>
                ) : (
                  <button
                    type="button"
                    className="type-label flex w-full items-center justify-between py-3 text-left"
                    onClick={() => setOpenSubmenu((cur) => (cur === item.label.en ? null : item.label.en))}
                  >
                    {item.label[locale]}
                    <span>{openSubmenu === item.label.en ? "−" : "+"}</span>
                  </button>
                )}
                {item.children && openSubmenu === item.label.en && (
                  <ul className="pb-2 pl-3">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          to={withLocale(locale, child.href!)}
                          className="type-small block py-2.5 text-white/90 hover:text-white"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label[locale]}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
