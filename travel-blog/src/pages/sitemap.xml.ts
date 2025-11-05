// src/pages/sitemap.xml.ts
import type { APIRoute } from 'astro';

// 🚀 Fetch posts từ Sanity
const SANITY_API_URL = `https://d5zc7aiu.api.sanity.io/v2024-05-15/data/query/production`;

export const GET: APIRoute = async () => {
  const query = `*[_type == "post" && defined(slug.current)]{
    "slug": slug.current,
    _updatedAt
  }`;
  const res = await fetch(
    `${SANITY_API_URL}?query=${encodeURIComponent(query)}`,
  );
  const { result } = await res.json();

  const siteUrl = 'travel-blog-nine-mu.vercel.app';
  const pages = result.map(
    (post: { slug: string; _updatedAt: string }) => `
      <url>
        <loc>${siteUrl}/posts/${post.slug}</loc>
        <lastmod>${new Date(post._updatedAt).toISOString()}</lastmod>
      </url>
    `,
  );

  return new globalThis.Response(
    `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages.join('\n')}
    </urlset>`,
    {
      headers: {
        'Content-Type': 'application/xml',
      },
    },
  );
};
