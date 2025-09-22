import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';

const dirname = path.dirname(fileURLToPath(import.meta.url));

// Try to load Storybook Vitest addon only if available and configured
let storybookTestPlugin: any = null;
const storybookDir = path.join(dirname, '.storybook');
const hasStorybookDir = fs.existsSync(storybookDir);

try {
  if (hasStorybookDir) {
    // Dynamic import; types may not be present if addon not installed
    // @ts-expect-error optional dependency types may be missing
    const mod = (await import('@storybook/addon-vitest/vitest-plugin')) as any;
    storybookTestPlugin = mod?.storybookTest?.({ configDir: storybookDir });
  }
} catch {
  // Silently skip if addon is not installed; keeps pre-push from failing
}

export default defineConfig({
  test: {
    projects: storybookTestPlugin
      ? [
          {
            extends: true,
            plugins: [storybookTestPlugin],
            test: {
              name: 'storybook',
              browser: {
                enabled: true,
                headless: true,
                provider: 'playwright',
                instances: [{ browser: 'chromium' }],
              },
              setupFiles: ['.storybook/vitest.setup.ts'],
            },
          },
        ]
      : [],
  },
});
