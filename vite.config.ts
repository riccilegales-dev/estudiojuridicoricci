import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// ⚠️ IMPORTANTE: Este base debe coincidir con el nombre del repositorio de GitHub
// En tu caso: "estudiojuridicoricci"

export default defineConfig(({ mode }) => ({
  base: "/estudiojuridicoricci/", // 👈 ESTA LÍNEA HACE QUE FUNCIONE EN GITHUB PAGES
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
