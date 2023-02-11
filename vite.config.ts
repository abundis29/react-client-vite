import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from "url";
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src/**", import.meta.url)),
    }
  },
  server: {
    port: 3000,
    host: true
  },
  build: {
    outDir: path.join(__dirname, "dist"),
  }
})
