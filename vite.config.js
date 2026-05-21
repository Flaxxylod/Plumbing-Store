import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Это автоматически находит tailwind.config.js
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/Tests/setupTests.js',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
    }
  },
  build: {
    sourcemap: true
  },
  server: {
    port: 3000,
    open: true,
    host: true,
    proxy: {
      '/api': {
        target: 'http://192.168.1.122', // IP вашего компьютера
        changeOrigin: true,
        secure: false
      }
    }
  }


})