import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import critters from 'astro-critters';
import sanity from '@sanity/astro';

export default defineConfig({
  integrations: [
    react(),
    critters({
      preload: 'media',
      pruneSource: true,
    }),

    sanity({
      projectId: 'd5zc7aiu',
      dataset: 'production',
      apiVersion: '2025-01-01',
      useCdn: true,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
