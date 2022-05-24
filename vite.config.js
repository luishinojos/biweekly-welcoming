import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: ' https://luishinojos.github.io/biweekly-welcoming/',
  plugins: [react()]
})
