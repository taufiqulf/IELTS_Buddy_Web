import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5050
  },
  build: {
    outDir: "production",
    rollupOptions: {
      input: {
        index: "index.html",
        listening: "src/pages/listening/listening.html",
        reading: "src/pages/reading/reading.html",
        writing: "src/pages/writing/writing.html",
        speaking: "src/pages/speaking/speaking.html",
      },
    },
  },
});
