import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter()],
  resolve: {
    tsconfigPaths: true,
  },
  // `npx vite preview` (looking at a build): port 4317. The build itself prerenders every page
  // through a preview server of its own (scripts/build.mjs sets RR_BUILD_PREVIEW_PORT): another
  // port, so an open preview, or an editor's port forwarding on Vite's default 4173, never answers
  // the build's requests; if that one is taken too, the next free port (React Router follows it).
  preview: process.env.RR_BUILD_PREVIEW_PORT
    ? { port: Number(process.env.RR_BUILD_PREVIEW_PORT), strictPort: false, host: "127.0.0.1" }
    : { port: 4317, strictPort: true, host: "127.0.0.1" },
  // `npm run dev`: a fixed port of its own (not Vite's default 5173). The build output is not
  // watched: a build while the dev site is open sent it hundreds of reloads at once, which broke
  // the open page (its router never finished starting, so links did nothing).
  server: { port: 5320, strictPort: true, host: "127.0.0.1", watch: { ignored: ["**/build/**", "**/.react-router/**"] } },
});
