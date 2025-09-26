import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
  redirects: {
    '/': 'page/1/',
  },
  i18n: {
    locales: ['es', 'en', 'pt-br', 'vi'],
    defaultLocale: 'en',
    fallback: {
      vi: 'es',
    },
    routing: { prefixDefaultLocale: false, fallbackType: 'rewrite' },
  },
});
