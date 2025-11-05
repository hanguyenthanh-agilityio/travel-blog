import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const sitemapUrl = 'https://travel-blog-nine-mu.vercel.app/sitemap.xml';
  return new globalThis.Response(
    `User-agent: *
Allow: /

Sitemap: ${sitemapUrl}
`,
    {
      headers: { 'Content-Type': 'text/plain' },
    },
  );
};
