import type { Config } from "@react-router/dev/config";
import { getPrerenderPaths } from "./app/content/prerender-paths";

export default {
  // Fully static output (no Node server) -- same GitHub Pages deployment
  // model as the legacy site, just built from React routes instead of
  // hand-copied HTML files.
  ssr: false,
  prerender: async ({ getStaticPaths }) => getPrerenderPaths(getStaticPaths),
} satisfies Config;
