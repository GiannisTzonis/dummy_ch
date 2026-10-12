// `npm run build`: react-router build, then scripts/seo.mjs (search-engine tags, sitemap.xml,
// robots.txt, 404.html).
//
// React Router's prerender gives each page 10 seconds and has no setting for it. A page renders in
// about a second, but on a busy machine (an antivirus scanning the files the build writes; six
// languages make ~430 requests) one request can stall past 10 s and fail the whole build. So the
// limit is raised to 60 s (and up to 3 retries per request allowed) in the installed package before building (re-applied after every
// install; a newer React Router without the line is left alone), and a timed-out build is run again.
import { spawnSync } from "node:child_process";
import fs from "node:fs"; import path from "node:path"; import { fileURLToPath } from "node:url";

const web = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const vite = path.join(web, "node_modules/@react-router/dev/dist/vite.js");
if (fs.existsSync(vite)) {
  const src = fs.readFileSync(vite, "utf8");
  // and a request whose connection drops (seen on Windows under load: ECONNRESET) is retried
  const patched = src.replace("retryCount = 0,", "retryCount = 3,").replace("timeout = 1e4 }", "timeout = 6e4 }");
  if (patched !== src) fs.writeFileSync(vite, patched);
}

const ATTEMPTS = 3;
for (let i = 1; i <= ATTEMPTS; i++) {
  const r = spawnSync("npx", ["react-router", "build"], { cwd: web, shell: true, encoding: "utf8", stdio: ["inherit", "pipe", "pipe"], env: { ...process.env, RR_BUILD_PREVIEW_PORT: "4399" } });
  process.stdout.write(r.stdout);
  process.stderr.write(r.stderr);
  if (r.status === 0) {
    const seo = spawnSync("node", ["scripts/seo.mjs"], { cwd: web, stdio: "inherit" });
    process.exit(seo.status ?? 1);
  }
  const timedOut = /Prerender: Request failed for .*(timeout|aborted|ECONNRESET)/i.test(r.stdout + r.stderr);
  if (!timedOut || i === ATTEMPTS) process.exit(r.status ?? 1);
  console.error(`\nprerender timed out (attempt ${i} of ${ATTEMPTS}); building again\n`);
}
