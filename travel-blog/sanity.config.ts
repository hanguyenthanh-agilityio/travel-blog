import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './sanity/schemaTypes';
import { presentationTool } from 'sanity/presentation';

export default defineConfig({
  name: 'default',
  title: 'My Sanity Project',

  projectId: 'd5zc7aiu',
  dataset: 'production',

  plugins: [
    structureTool(),
    presentationTool({
      previewUrl:
        (typeof import.meta !== 'undefined' &&
          import.meta.env?.SANITY_STUDIO_PREVIEW_URL) ||
        'http://localhost:4321',
    }),
  ],

  schema: {
    types: schemaTypes,
  },
});
