import {defineConfig} from 'astro/config'
import react from '@astrojs/react'
import tailwindcss from '@tailwindcss/vite'
import critters from 'astro-critters'
import sanity from '@sanity/astro'
import dotenv from 'dotenv'
import vercel from '@astrojs/vercel/serverless'

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
    plugins: [tailwindcss()],
  },
  adapter: vercel(),
})
