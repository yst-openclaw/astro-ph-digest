import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'static',
  integrations: [],
  build: {
    format: 'file'
  },
  base: '/astro-ph-digest/',
  site: 'https://yst-openclaw.github.io'
});
