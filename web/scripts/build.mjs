// `npm run build`: react-router build, run again if prerendering a page timed out.
// React Router's prerender gives each page 10 seconds and has no setting for it; on a busy machine
// (an antivirus scanning the ~1,600 image files the build copies) one page can occasionally take
// longer and the whole build fails. Any other failure stops at once. After a good build,
// scripts/seo.mjs adds the search-engine tags, sitemap.xml, robots.txt and 404.html.
import { spawnSync } from "node:child_process";

const ATTEMPTS = 3;
for (let i = 1; i <= ATTEMPTS; i++) {
  const r = spawnSync("npx", ["react-router", "build"], { shell: true, encoding: "utf8", stdio: ["inherit", "pipe", "pipe"] });
  process.stdout.write(r.stdout);
  process.stderr.write(r.stderr);
  if (r.status === 0) {
    const seo = spawnSync("node", ["scripts/seo.mjs"], { stdio: "inherit" });
    process.exit(seo.status ?? 1);
  }
  const timedOut = /Prerender: Request failed for .*(timeout|aborted)/i.test(r.stdout + r.stderr);
  if (!timedOut || i === ATTEMPTS) process.exit(r.status ?? 1);
  console.error(`\nprerender timed out (attempt ${i} of ${ATTEMPTS}); building again\n`);
}
