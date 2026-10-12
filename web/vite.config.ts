import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter()],
  resolve: {
    tsconfigPaths: true,
  },
  // the build prerenders every page through a preview server: a port of its own, so another
  // program on Vite's default 4173 (e.g. an editor's port forwarding) cannot answer its requests
  preview: { port: 4317, strictPort: true, host: "127.0.0.1" },
  // `npm run dev`: a fixed port of its own (not Vite's default 5173). The build output is not
  // watched: a build while the dev site is open sent it hundreds of reloads at once, which broke
  // the open page (its router never finished starting, so links did nothing).
  server: { port: 5320, strictPort: true, host: "127.0.0.1", watch: { ignored: ["**/build/**", "**/.react-router/**"] } },
});
