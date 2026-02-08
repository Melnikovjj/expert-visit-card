import { defineConfig } from 'vite';

export default defineConfig({
  base: '/expert-visit-card/',
  server: {
    port: 5173,
    open: true,
  },
  build: {
    outDir: 'dist',
  },
});
