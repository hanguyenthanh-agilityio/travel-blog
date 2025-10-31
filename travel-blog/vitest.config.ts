/// <reference types="vitest" />
import { getViteConfig } from 'astro/config';

export default getViteConfig({
  // @ts-expect-error: 'test' is a Vitest config, not a Vite config
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: ['./vitest.setup.ts'],
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
        'sanity.config.ts',
        'sanity.cli.ts',
        'sanity',
        'src/icons',
        'src/queries',
        'src/sanity',
        'src/lib/schema.ts',
      ],
    },
  },
});
