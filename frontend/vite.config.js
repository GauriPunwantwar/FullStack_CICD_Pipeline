// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ✅ Clean, no invalid "#" comments
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // allow access from Docker container
    port: 5173,
  },
  build: {
    outDir: "dist",
  },
});
