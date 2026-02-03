// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import vue from '@astrojs/vue';
import svelte from '@astrojs/svelte';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'http://localhost:4321/.com',
  integrations: [mdx(), react(), vue(), svelte(), sitemap()],
});