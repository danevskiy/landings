// @ts-check
import { defineConfig } from 'astro/config';

import yaml from '@rollup/plugin-yaml';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss(),yaml()]
  },

  integrations: [react()]
});