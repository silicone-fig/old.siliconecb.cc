import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit()],
  server: {
    watch: {
      usePolling: false
    },
    host: true,
    strictPort: true,
    port: 3000
  },
  optimizeDeps: {
    noDiscovery: true,
    disabled: true,
  },
});
