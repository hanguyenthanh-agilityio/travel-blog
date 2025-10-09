import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import critters from 'astro-critters';

export default defineConfig({
  integrations: [
    react(),
    critters({
      preload: 'media',
      pruneSource: true,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
