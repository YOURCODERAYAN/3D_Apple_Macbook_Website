import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('three')) return 'three'
            if (id.includes('gsap')) return 'gsap'
            if (id.includes('react-dom')) return 'react-dom'
            if (id.includes('react')) return 'react'
          }
        }
      }
    }
  }
})