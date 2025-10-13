import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: 'd5zc7aiu',
  dataset: 'production',
  apiVersion: '2025-01-01',
  useCdn: true,
});
