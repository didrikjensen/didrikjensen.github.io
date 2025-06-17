import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Viktig: Endre 'min-portefolje' til navnet på GitHub-repoet ditt!
  // Hvis repoet ditt heter 'ditt-brukernavn.github.io', skal base være '/'
  base: '/didrikjensen.gihub.io/',
})