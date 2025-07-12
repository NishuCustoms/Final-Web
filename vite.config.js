import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: '.', // Look for files in root directory
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: './index.html' // Point to root index.html
    }
  }
})
