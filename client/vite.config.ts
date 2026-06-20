import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const clientRoot = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  root: clientRoot,
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      "/api": {
        target: "http://localhost:5050",
        changeOrigin: true
      }
    }
  },
  build: {
    outDir: resolve(clientRoot, "../server/public"),
    emptyOutDir: true
  }
});
