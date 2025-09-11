// eslint.config.js
import js from '@eslint/js';
import ts from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import astro from 'eslint-plugin-astro';
import astroParser from 'astro-eslint-parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import prettier from 'eslint-config-prettier';

export default [
  js.configs.recommended,

  // Astro
  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: tsParser,
        extraFileExtensions: ['.astro'],
      },
    },
    plugins: { astro },
    rules: {
      ...astro.configs.recommended.rules,
    },
  },

  // TS/TSX
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      globals: {
        JSX: 'readonly',
        HTMLButtonElement: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': ts,
      react,
      'react-hooks': reactHooks,
    },
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      ...ts.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,

      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/triple-slash-reference': 'off',

      // === Rules custom ===
      'no-console': 'warn',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      'react/self-closing-comp': ['warn', { component: true, html: true }],
    },
  },

  // Node.js config files (tailwind.config.js, eslint.config.js, etc.)
  {
    files: ['**/*.config.js', '**/*.cjs'],
    languageOptions: {
      globals: {
        module: 'readonly',
        require: 'readonly',
      },
    },
    rules: {
      'no-undef': 'off',
    },
  },

  // Ignore generated files of Astro
  {
    files: ['.astro/*.d.ts'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
      'no-undef': 'off',
    },
  },

  prettier,
];
