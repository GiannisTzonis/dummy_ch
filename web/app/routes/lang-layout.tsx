import { Outlet, useMatches } from "react-router";
import { Navbar } from "~/components/Navbar";
import { Footer } from "~/components/Footer";
import { TranslationNotice } from "~/components/TranslationNotice";
import { useLocale } from "~/lib/locale";

export default function LangLayout() {
  const locale = useLocale();
  // a page in a translated language whose translation is not ready shows the English (its loader
  // says translated: false): marked as English, with a note in the visitor's language
  const fallback = useMatches().some((m) => (m.loaderData as { translated?: boolean } | undefined)?.translated === false);
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1" lang={fallback ? "en" : undefined}>
        <Outlet />
      </main>
      <Footer />
      {fallback && <TranslationNotice locale={locale} />}
    </div>
  );
}
