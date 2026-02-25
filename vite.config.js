// vite.config.js
import { defineConfig } from 'vite'
import { resolve } from 'path'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        bilder: resolve(__dirname, 'bilder.html'),      // Behåll samma namn som filen
        publicera: resolve(__dirname, 'publicera.html')
      }
    }
  },
  plugins: [
    ViteImageOptimizer({
      png: { quality: 75 },
      webp: { quality: 70 },
      avif: { quality: 60 }
    })
  ]
})
