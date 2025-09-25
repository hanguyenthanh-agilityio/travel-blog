import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async ({ request, locals }, next) => {
  const { pathname } = new globalThis.URL(request.url);

  // Inject SEO metadata
  (locals as any).seo = {
    title: 'Travel Blog - Explore the World',
    description:
      'Discover travel tips, destination guides, and personal experiences.',
    url: `https://yourtravelblog.com${pathname}`,
    image: 'https://yourtravelblog.com/images/seo-image.jpg',
    noindex: false,
  };

  const response = await next();

  if ((locals as any).seo.noindex === false) {
    response.headers.delete('x-robots-tag');
    response.headers.set('x-robots-tag', 'index, follow');
  }

  return response;
});
