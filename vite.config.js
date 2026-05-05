import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/aidmystudy/", // Ye aapki repository ka naam hai
});
