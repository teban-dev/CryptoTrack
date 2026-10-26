import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Configuración de Vite (misma base que el proyecto de clase "myapp")
export default defineConfig({
  plugins: [react()],
  server: { port: 5173, open: true },
})
