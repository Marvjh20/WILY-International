import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // This ensures assets (css/js/images) are looked for relative to the index.html
  // crucial for GitHub Pages repositories (e.g. username.github.io/repo-name)
  base: './', 
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
  server: {
    host: true
  }
});