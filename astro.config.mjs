// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';

import react from '@astrojs/react';

import vue from '@astrojs/vue';

import svelte from '@astrojs/svelte';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [mdx(), react(), vue(), svelte()],
});