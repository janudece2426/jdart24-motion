import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? '/jdart24-motion/' : '/',
  plugins: [react()],
  publicDir: 'Gif Portfolio',
})

