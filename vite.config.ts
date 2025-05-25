import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy'; // Add this plugin

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'src/assets/*.{jpg,jpeg,png,gif,svg,pdf}',
          dest: 'assets', // Destination in dist (e.g., dist/assets/)
        },
      ],
    }),
  ],
  build: {
    assetsDir: 'assets', // Ensure assets are output to dist/assets/
  },
});