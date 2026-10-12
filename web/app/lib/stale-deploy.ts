import { useEffect } from "react";
import { useNavigation } from "react-router";

// After a new version of the site is published, a page that was already open still runs the old
// build: following a link then asks for files that no longer exist (each build names them anew).
// React Router notices and reloads -- but the page the reader was on, not the one they tapped.
// Here the destination is remembered while a navigation is under way, and after such a reload
// the reader is taken there with a full page load. The same full load rescues a navigation whose
// page data is missing (see `recoverNavigation`, used by the root error boundary).

const KEY = "armonia:pending-navigation";
const FRESH_MS = 15_000;

type Pending = { to: string; at: number };
const read = (): Pending | null => {
  try {
    const v = JSON.parse(sessionStorage.getItem(KEY) ?? "null");
    return v && typeof v.to === "string" && typeof v.at === "number" ? v : null;
  } catch {
    return null;
  }
};
const write = (v: Pending | null) => {
  try {
    if (v) sessionStorage.setItem(KEY, JSON.stringify(v));
    else sessionStorage.removeItem(KEY);
  } catch {
    // storage unavailable (private mode): no recovery, the reload alone still applies
  }
};
const here = () => location.pathname + location.search + location.hash;
// set once this page has started a client-side navigation: only those errors are retried (a page
// opened at an address that does not exist shows its "not found" page straight away)
let navigated = false;

export function useStaleDeployRecovery() {
  const navigation = useNavigation();

  // on start: a navigation that was under way when the page reloaded is completed
  useEffect(() => {
    const p = read();
    write(null);
    if (p && Date.now() - p.at < FRESH_MS && p.to !== here()) location.replace(p.to);
  }, []);

  // remember the destination while it loads
  useEffect(() => {
    if (navigation.state === "idle") write(null);
    else {
      navigated = true;
      const { pathname, search, hash } = navigation.location;
      write({ to: pathname + search + hash, at: Date.now() });
    }
  }, [navigation.state, navigation.location]);
}

// For the root error boundary: an error that comes from a client-side navigation (missing page
// data or code after a new deployment) is retried once as a full page load of the same address.
export function recoverNavigation(): boolean {
  if (typeof window === "undefined" || !navigated) return false;
  const flag = `armonia:recovered:${here()}`;
  try {
    const tried = Number(sessionStorage.getItem(flag));
    if (tried && Date.now() - tried < FRESH_MS) return false; // just tried: show the error
    sessionStorage.setItem(flag, String(Date.now()));
  } catch {
    return false;
  }
  location.reload();
  return true;
}
