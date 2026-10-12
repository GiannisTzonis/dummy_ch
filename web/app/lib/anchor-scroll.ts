import { useEffect } from "react";

// In-page links ("#id") jump to their target and keep it in place while the page settles. Photos
// load lazily as the page scrolls past them and push the target down (and clamped cards measure
// themselves after load), so a plain jump could end far from the target. The target is
// re-aligned whenever the page changes size, until the page has been still for a moment or the
// reader scrolls on their own. Where it lands below the fixed bars is set in app.css
// (scroll-margin-top, from --anchor-offset).

let stopKeeping: (() => void) | null = null;

export function scrollToId(id: string, smooth = true): boolean {
  const el = document.getElementById(id);
  if (!el) return false;
  stopKeeping?.();
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const go = (behavior: ScrollBehavior) => el.scrollIntoView({ behavior, block: "start" });
  go(smooth && !reduce ? "smooth" : "auto");

  const misplaced = () => {
    const want = parseFloat(getComputedStyle(el).scrollMarginTop) || 0;
    const top = el.getBoundingClientRect().top;
    const atEnd = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;
    return Math.abs(top - want) > 2 && !(atEnd && top > want);
  };
  let quiet: ReturnType<typeof setTimeout>;
  const settle = () => {
    clearTimeout(quiet);
    quiet = setTimeout(stop, 1500);
  };
  const ro = new ResizeObserver(() => {
    if (misplaced()) go("auto");
    settle();
  });
  const onEnd = () => misplaced() && go("auto");
  const stop = () => {
    clearTimeout(quiet);
    ro.disconnect();
    window.removeEventListener("scrollend", onEnd);
    for (const t of ["wheel", "touchstart", "keydown", "pointerdown"]) window.removeEventListener(t, stop);
    if (stopKeeping === stop) stopKeeping = null;
  };
  ro.observe(document.body);
  window.addEventListener("scrollend", onEnd);
  // the reader takes over
  for (const t of ["wheel", "touchstart", "keydown", "pointerdown"]) window.addEventListener(t, stop, { passive: true });
  settle();
  stopKeeping = stop;
  return true;
}

// Site-wide: same-page "#" links, and a page opened with a "#" in its address.
export function useAnchorScroll() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element | null)?.closest?.("a[href]");
      const href = a?.getAttribute("href");
      if (!href?.startsWith("#") || href.length < 2) return;
      const id = decodeURIComponent(href.slice(1));
      if (!document.getElementById(id)) return;
      e.preventDefault();
      // the click's own pointerdown must not stop the keeper: start it after this event
      setTimeout(() => scrollToId(id));
      history.replaceState(history.state, "", href);
    };
    document.addEventListener("click", onClick);
    if (location.hash.length > 1) {
      const id = decodeURIComponent(location.hash.slice(1));
      requestAnimationFrame(() => scrollToId(id, false));
    }
    return () => document.removeEventListener("click", onClick);
  }, []);
}
