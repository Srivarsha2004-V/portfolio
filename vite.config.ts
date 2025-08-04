import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "./", // 👈 Important for Netlify/SPAs
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
