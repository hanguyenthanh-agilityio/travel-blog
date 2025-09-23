// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@astrojs/tailwind';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwindcss(), react()],
  i18n: {
    locales: ['es', 'en', 'pt-br', 'vi'],
    defaultLocale: 'en',
    fallback: {
      vi: 'es',
    },
    routing: { prefixDefaultLocale: false, fallbackType: 'rewrite' },
  },
});
