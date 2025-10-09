/* eslint-disable no-undef */
import path from 'path';
import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
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
      },
    };
    return baseConfig;
  },
};

export default config;
