// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // This allows the server to listen on all network interfaces
    port: 5173, // Optional: specify the port if needed
  },
});
