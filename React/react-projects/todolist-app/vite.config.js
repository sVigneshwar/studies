import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/studies/react/react-projects/todolist-app/', // IMPORTANT: repo/folder name
  plugins: [react()],
})