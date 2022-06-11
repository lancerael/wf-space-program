import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mix from 'vite-plugin-mix'
import { resolve } from 'path'

export default defineConfig({
  resolve: {
    alias: [
      { find: '@', replacement: resolve(__dirname, 'src') },
    ],
  },
  plugins: [
    react(),
    process.env.NODE_ENV!=='production' && mix({
      handler: './fake-api'
    })
  ],
})