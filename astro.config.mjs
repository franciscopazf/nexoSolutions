// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: 'https://nexosolutions.com',

  // muy importante este slash
  base: '/',

  // carpeta de salida
  outDir: './dist',

  build: {
    format: 'directory', // más compatible para GH Pages
  },

  integrations: [react()],

  vite: {
    plugins: [tailwindcss()]
  },

  adapter: cloudflare()
});