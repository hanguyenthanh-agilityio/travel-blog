/* eslint-disable no-undef */
import path from 'path';
import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    // ✅ Chỉ load file story React, không quét .astro
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-docs',
    '@storybook/addon-onboarding',
    '@storybook/addon-a11y',
    '@storybook/addon-vitest',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  staticDirs: ['../public'],

  async viteFinal(baseConfig) {
    baseConfig.resolve = {
      ...baseConfig.resolve,
      alias: {
        ...(baseConfig.resolve?.alias ?? {}),

        '@': path.resolve(__dirname, '../src'),

        'sanity:client': path.resolve(__dirname, '__mocks__/sanity-client.ts'),
        'sanity:client/lib/utils': path.resolve(
          __dirname,
          '__mocks__/sanity-client.ts',
        ),

        '.astro': path.resolve(__dirname, '__mocks__/astro-mock.js'),
      },
    };

    baseConfig.plugins?.push({
      name: 'ignore-astro-files',
      load(id: string) {
        if (id.endsWith('.astro')) {
          return '';
        }
        return null;
      },
    });

    return baseConfig;
  },
};

export default config;
