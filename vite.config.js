import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: '/https://github.com/Radu309/photographer-frontend.git/',
  server: {
    headers: {
      'Cache-Control': 'no-store',
    },
  },
})