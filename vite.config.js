import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@filter': path.resolve(__dirname, './src/assets/Common/filter/shifters')
    }
  },
  build: {
    sourcemap: true
  },
  server: {
    port: 3000,
    open: true
  }
})
