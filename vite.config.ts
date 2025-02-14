import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path, { dirname } from "path";
import { fileURLToPath } from "url";

import themePlugin from "@replit/vite-plugin-shadcn-theme-json";
// import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

// https://vite.dev/config/
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export default defineConfig({
  plugins: [react(), themePlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  root: path.resolve(__dirname, "."),
  build: {
    outDir: path.resolve(__dirname, "dist/public"),
    emptyOutDir: true,
  },
});