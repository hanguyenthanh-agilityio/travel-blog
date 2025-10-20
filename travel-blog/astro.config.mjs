import {defineConfig} from 'astro/config'
import react from '@astrojs/react'
import tailwindcss from '@tailwindcss/vite'
import critters from 'astro-critters'
import sanity from '@sanity/astro'
import dotenv from 'dotenv'
import vercel from '@astrojs/vercel/serverless'
import viteCompression from 'vite-plugin-compression'

dotenv.config()

export default defineConfig({
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
      stega: {studioUrl: '/studio'},
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
})
