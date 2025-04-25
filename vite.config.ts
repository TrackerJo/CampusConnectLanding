import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

import dotenv from 'dotenv';
dotenv.config();
const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root,
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  base: '/',
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: resolve(root, 'index.html'),

      }
    }
  }
})
