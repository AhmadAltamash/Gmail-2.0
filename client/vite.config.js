import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/", // Ensures proper base path
  build: {
    outDir: "dist", // Ensures correct output directory
  },
  server: {
    historyApiFallback: true, // Enables proper routing
  },
})
