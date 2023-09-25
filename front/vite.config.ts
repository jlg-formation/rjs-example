/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({ jsxImportSource: '@emotion/react' })],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        secure: false,
      },
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
  },
})
