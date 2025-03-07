import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
 // Make sure this import is correct

export default defineConfig({
  plugins: [
    react(),
  ],
  server: {
    host: true,
    strictPort: true,
    port: 5173,
  },
});
