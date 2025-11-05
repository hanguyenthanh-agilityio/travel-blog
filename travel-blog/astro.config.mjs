import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import critters from 'astro-critters';
import sanity from '@sanity/astro';
import dotenv from 'dotenv';
import vercel from '@astrojs/vercel';
import viteCompression from 'vite-plugin-compression';

import sitemap from '@astrojs/sitemap';

dotenv.config();

export default defineConfig({
  site: 'https://travel-blog-nine-mu.vercel.app',
  integrations: [
    react(),
    critters({
      preload: 'media',
      pruneSource: true,
    }),
    sanity({
      projectId: process.env.PUBLIC_SANITY_PROJECT_ID,
      dataset: process.env.PUBLIC_SANITY_DATASET,
      apiVersion: '2025-01-01',
      useCdn: true,
      studioBasePath: '/studio',
      stega: { studioUrl: '/studio' },
    }),
    sitemap({
      filter: (page) => !page.includes('/draft'),
      entryLimit: 45000,
      serialize: (item) => ({
        ...item,
        lastmod: new Date().toISOString(),
      }),
    }),
  ],
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom'],
          },
        },
      },
    },
    plugins: [
      tailwindcss(),
      viteCompression({
        algorithm: 'brotliCompress',
        ext: '.br',
        threshold: 1024,
      }),
    ],
  },
  adapter: vercel(),
});
