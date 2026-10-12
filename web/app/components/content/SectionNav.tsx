import { useEffect, useId, useRef, useState } from "react";
import { scrollToId } from "~/lib/anchor-scroll";

export type NavSection = { id: string; label: string };

const navLabel = { en: "On this page", el: "Σε αυτή τη σελίδα" } as const;
const SITE_MENU = 90; // height of the fixed site menu (Navbar), which this bar sits under

const goTo = (id: string) => {
  if (!scrollToId(id)) return false;
  history.replaceState(history.state, "", `#${id}`);
  return true;
};

const Chevron = ({ className }: { className: string }) => (
  <svg viewBox="0 0 20 20" className={className} fill="currentColor" aria-hidden="true">
    <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" />
  </svg>
);

// Sticky bar of in-page section links with scroll-spy, just under the fixed site menu. Phones get
// one row naming the section being read, which opens the full list; wider screens get a row of
// pills (scrollable, with faded edges while more pills are out of view).
export function SectionNav({ sections, locale }: { sections: NavSection[]; locale: "en" | "el" }) {
  const [active, setActive] = useState(sections[0]?.id);
  const [open, setOpen] = useState(false);
  const [edges, setEdges] = useState({ left: false, right: false });
  const bar = useRef<HTMLDivElement>(null);
  const nav = useRef<HTMLElement>(null);
  const listId = useId();

  // in-page targets (app.css) land below the site menu and this bar, whatever its height
  useEffect(() => {
    const el = nav.current;
    if (!el) return;
    const root = document.documentElement;
    const update = () => root.style.setProperty("--anchor-offset", `${SITE_MENU + el.offsetHeight + 16}px`);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => {
      ro.disconnect();
      root.style.removeProperty("--anchor-offset");
    };
  }, [sections.length]);

  useEffect(() => {
    const els = sections.map((s) => document.getElementById(s.id)).filter((e): e is HTMLElement => !!e);
    if (!els.length) return;
    // the last section whose top has passed the line just below the sticky bars
    const onScroll = () => {
      const line = SITE_MENU + (nav.current?.offsetHeight ?? 0) + 50;
      let current = els[0].id;
      for (const el of els) if (el.getBoundingClientRect().top - line <= 0) current = el.id;
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [sections]);

  // pills: keep the active one in view, and track whether more pills hide past either edge
  useEffect(() => {
    const c = bar.current;
    if (!c) return;
    const update = () => setEdges({ left: c.scrollLeft > 2, right: c.scrollLeft + c.clientWidth < c.scrollWidth - 2 });
    update();
    c.addEventListener("scroll", update, { passive: true });
    const ro = new ResizeObserver(update);
    ro.observe(c);
    return () => {
      c.removeEventListener("scroll", update);
      ro.disconnect();
    };
  }, []);
  useEffect(() => {
    const c = bar.current;
    const link = c?.querySelector<HTMLElement>(`[data-id="${active}"]`);
    if (!c || !link) return;
    const { offsetLeft, offsetWidth } = link;
    if (offsetLeft < c.scrollLeft || offsetLeft + offsetWidth > c.scrollLeft + c.clientWidth)
      c.scrollTo({ left: offsetLeft - 16, behavior: "smooth" });
  }, [active]);

  // phone list: close on a tap outside or Escape
  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => !nav.current?.contains(e.target as Node) && setOpen(false);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  if (sections.length < 2) return null;
  const current = sections.find((s) => s.id === active) ?? sections[0];
  const fade = `${edges.left ? "transparent, #000 40px" : "#000"}, ${edges.right ? "#000 calc(100% - 40px), transparent" : "#000"}`;

  return (
    <nav
      ref={nav}
      aria-label={navLabel[locale]}
      // page furniture repeating the section headings: the legacy content check ignores it
      data-legacy-ignore=""
      className="sticky top-[90px] z-40 border-y border-rule bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/75"
    >
      {/* phones */}
      <div className="md:hidden">
        <button
          type="button"
          aria-expanded={open}
          aria-controls={listId}
          onClick={() => setOpen(!open)}
          className="flex w-full items-center gap-3 px-4 py-2.5 text-left"
        >
          <span className="min-w-0 flex-1">
            <span className="type-label block font-semibold tracking-wide text-muted uppercase">{navLabel[locale]}</span>
            <span className="type-small block truncate font-semibold text-brand-navy">{current.label}</span>
          </span>
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-surface text-brand-navy">
            <Chevron className={`h-5 w-5 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
          </span>
        </button>
        <ul
          id={listId}
          hidden={!open}
          className="absolute inset-x-0 top-full max-h-[60vh] overflow-y-auto border-b border-rule bg-white py-2 shadow-[0_12px_24px_rgba(0,0,0,0.08)]"
        >
          {sections.map((s) => {
            const on = s.id === active;
            return (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  aria-current={on ? "location" : undefined}
                  onClick={(e) => {
                    setOpen(false);
                    if (goTo(s.id)) e.preventDefault();
                  }}
                  className={`type-small flex items-center gap-3 px-4 py-3 font-medium ${on ? "text-brand-navy" : "text-body"}`}
                >
                  <span className={`h-5 w-0.5 shrink-0 rounded-full ${on ? "bg-brand-maroon" : "bg-transparent"}`} aria-hidden="true" />
                  {s.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      {/* wider screens */}
      <div
        ref={bar}
        style={{ maskImage: `linear-gradient(to right, ${fade})`, WebkitMaskImage: `linear-gradient(to right, ${fade})` }}
        className="mx-auto hidden max-w-[1440px] gap-1 overflow-x-auto px-6 py-2.5 [scrollbar-width:none] md:flex lg:px-10 [&::-webkit-scrollbar]:hidden"
      >
        {sections.map((s) => {
          const on = s.id === active;
          return (
            <a
              key={s.id}
              href={`#${s.id}`}
              data-id={s.id}
              aria-current={on ? "location" : undefined}
              onClick={(e) => {
                if (goTo(s.id)) e.preventDefault();
              }}
              className={`type-small shrink-0 rounded-full px-4 py-1.5 font-medium whitespace-nowrap transition-colors duration-200 ${
                on ? "bg-brand-navy text-white" : "text-body hover:bg-surface hover:text-brand-navy"
              }`}
            >
              {s.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
