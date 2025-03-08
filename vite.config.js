import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
  ],
  server: {
    host: true,
    strictPort: true,
    port: 5173,
  },
  build: {
    chunkSizeWarningLimit: 5000, // Increase this to 5000 KB

    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'; // Group all node_modules into a single chunk called "vendor"
          }
        }
      }
    }
  },
  optimizeDeps: {
    esbuildOptions: {
      legalComments: 'none',  // Suppresses eval warnings
    },
  },
});
