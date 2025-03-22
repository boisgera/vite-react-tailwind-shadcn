import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from "path"

import civet from '@danielx/civet/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    civet({}),
    tailwindcss(),
    react()],
  resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
})
