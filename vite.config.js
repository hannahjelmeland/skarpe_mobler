import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/skarpe_mobler/', // EXACTLY this!
  plugins: [react()],
});
