import type { Route } from "./+types/home";
import page from "~/content/pages/home";
import { HomePage } from "~/templates/HomePage";

// Verbatim <title> of index.html / indexGreek.html.
export function meta({ params }: Route.MetaArgs) {
  return [
    {
      title:
        params.lang === "el"
          ? "Χορωδία Αρμονία | Διεθνές Χορωδιακό Φεστιβάλ Πρέβεζας"
          : "Armonia Choir | International Choral Festival of Preveza, Greece",
    },
  ];
}

export default function HomeRoute() {
  return <HomePage page={page} />;
}
