import { createClient } from '@sanity/client';

const sanityClient = createClient(
            {"apiVersion":"2025-01-01","projectId":"d5zc7aiu","dataset":"production","useCdn":true,"stega":{"studioUrl":"\u002Fstudio"}}
          );

globalThis.sanityClient = sanityClient;

export { sanityClient as s };
