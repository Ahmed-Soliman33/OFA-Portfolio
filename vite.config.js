import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteImagemin from 'vite-plugin-imagemin';

export default defineConfig({
  build: {
    terserOptions: {
      compress: {
        drop_console: true, // Remove console logs (optional)
      },
      mangle: false, // Disable mangling
    },
    minify: 'terser',
  },
  plugins: [
    react(),
    viteImagemin({
      gifsicle: { optimizationLevel: 3 },
      optipng: { optimizationLevel: 7 },
      mozjpeg: { quality: 80 },
      webp: { quality: 80 },
    }),
  ],
});
