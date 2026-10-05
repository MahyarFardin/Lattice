import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// GitHub Pages serves project sites from /<repo-name>/, so the base path
// is injected by the deploy workflow (see .github/workflows/deploy.yml).
// Locally it defaults to '/' so `npm run dev` works unmodified.
export default defineConfig({
  base: process.env.VITE_BASE_PATH || '/',
  plugins: [react()],
})
