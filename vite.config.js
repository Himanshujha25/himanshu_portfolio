import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,  // Allows external access
    strictPort: true,
    port: 5173, // Default Vite port
    allowedHosts: [
      "5173-himanshujha-himanshupor-5p034hninja.ws-us117.gitpod.io",
      ".gitpod.io"
    ]  // Allows all hosts
  }
});
