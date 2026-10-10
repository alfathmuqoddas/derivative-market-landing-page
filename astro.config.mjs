// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import cloudflare from "@astrojs/cloudflare";

import tailwindcss from "@tailwindcss/vite";
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare(),

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [preact()],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "id"],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  fonts: [
    {
      provider: fontProviders.google(),
      name: "IBM Plex Sans",
      cssVariable: "--font-sans",
      fallbacks: ["sans-serif"],
    },
    {
      provider: fontProviders.google(),
      name: "Special Gothic Expanded One",
      cssVariable: "--font-serif",
      fallbacks: ["serif"],
    },
  ],
});
