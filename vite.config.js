import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: '/photographer-frontend/',
  server: {
    headers: {
      'Cache-Control': 'no-store',
    },
  },
})