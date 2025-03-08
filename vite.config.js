import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration to manage chunk sizes and improve performance
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
    // Increase chunk size warning limit if needed
    chunkSizeWarningLimit: 1000, // Increase this to 1000 KB (optional)

    rollupOptions: {
      output: {
        // Manual chunking to avoid large vendor chunks
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'; // Group all node_modules into a single chunk called "vendor"
          }
        }
      }
    }
  }
});
