import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/WEB-FE-REACT-HW4-GG/',
  plugins: [react()],
})
