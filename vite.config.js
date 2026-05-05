import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Base must match the GitHub repository name
  base: "/aidmystudy/",
  server: {
    hmr: {
      overlay: false,
    },
  },
});
