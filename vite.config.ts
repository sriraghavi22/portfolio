import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy'; // Add this plugin

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'src/assets/*.{jpg,jpeg,png,gif,svg,pdf}',
          dest: 'assets', // Destination in dist (e.g., dist/assets/)
        },
        {
          src: 'src/assets/certificates/*.{jpg,jpeg,png,gif,svg,pdf}', // Include certificates subfolder
          dest: 'assets/certificates', 
        },
      ],
    }),
  ],
  build: {
    assetsDir: 'assets', 
  },
});