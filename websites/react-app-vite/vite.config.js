import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 10011,
    host: '127.0.0.1',
    watch: {
      usePolling: true
    },
    cors: {
      origin: '*',
      methods: '*',
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      // allowedHeaders: ''
    },
  },
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
  build: {
    lib: {
      name: `react-app`,
      formats: ['umd'],
    },
  }
})
