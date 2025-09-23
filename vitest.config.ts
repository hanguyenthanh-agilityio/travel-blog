/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(dirname, './src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    include: ['src/**/*.{test,spec}.{js,ts,jsx,tsx}'],
    coverage: {
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'dist/',
        '**/*.stories.*',
        'src/components/ui/storybook',
        'src/components/icon',
        'src/pages',
        'src/contents',
        'src/layouts',
        'src/pages/posts',
        'src/types',
        '.storybook',
        '.astro',
        'astro.config.mjs',
        'commitlint.config.js',
        'eslint.config.js',
        'postcss.config.cjs',
        'tailwind.config.js',
        'vitest.config.ts',
      ],
    },
  },
});
