import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import legacy from '@vitejs/plugin-legacy';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3002,
  },
  preview: {
    port: 3002,
  },
  build: {
    sourcemap: false,
  },
  plugins: [react()],
});
