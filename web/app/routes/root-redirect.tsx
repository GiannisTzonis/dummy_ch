import { useEffect } from "react";
import { useNavigate } from "react-router";

// The legacy site has no locale-neutral root -- every real page is
// English-by-default with a Greek twin. We pick English as the default
// landing locale. Redirecting inside an effect (rather than rendering
// <Navigate> directly) avoids "must not be used on the initial render"
// warnings when this route is prerendered to static HTML; the visible
// link covers clients that never hydrate.
// Also redirect without JavaScript (and for the legacy /index.html URL, which is this page).
export const meta = () => [
  { title: "Armonia Choir | International Choral Festival of Preveza, Greece" },
  { httpEquiv: "refresh", content: "0; url=/en/" },
];

export default function RootRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/en/", { replace: true });
  }, [navigate]);

  return (
    <p className="p-8 text-center">
      Redirecting to <a href="/en/">/en/</a>…
    </p>
  );
}
