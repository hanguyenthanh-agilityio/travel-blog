import type { MiddlewareHandler } from 'astro';
import { defineMiddleware } from 'astro:middleware';

export const onRequest: MiddlewareHandler = defineMiddleware(
  async ({ request, locals }) => {
    const { pathname } = new globalThis.URL(request.url);

    // Set SEO metadata in locals
    (locals as any).seo = {
      title: 'Travel Blog - Explore the World',
      description:
        'Discover travel tips, destination guides, and personal experiences.',
      url: `https://yourtravelblog.com${pathname}`,
      image: 'https://yourtravelblog.com/images/seo-image.jpg',
    };
  },
);
