// @ts-check
import { defineConfig, fontProviders, envField } from "astro/config";

import cloudflare from "@astrojs/cloudflare";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: cloudflare(),

  vite: {
    plugins: [tailwindcss()],
  },

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

  integrations: [react()],
});
