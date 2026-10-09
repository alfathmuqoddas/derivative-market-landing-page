// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

import tailwindcss from '@tailwindcss/vite';
import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare(),

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [preact()]
});