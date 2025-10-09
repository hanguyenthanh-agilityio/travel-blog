import { sanityClient } from './sanity';
import { z } from 'astro:content';
import {
  PostSchema,
  PostSummarySchema,
  type Post,
  type PostSummary,
} from './schema';

export async function fetchPosts(): Promise<PostSummary[]> {
  const data = await sanityClient.fetch(`
    *[_type == "post"]{
      title,
      slug,
      excerpt,
      image,
      category,
      author{name, avatar, date}
    }
  `);
  return z.array(PostSummarySchema).parse(data);
}

export async function fetchPostBySlug(slug: string): Promise<Post | null> {
  const data = await sanityClient.fetch(
    `
    *[_type == "post" && slug.current == $slug][0]{
      title,
      slug,
      excerpt,
      image,
      category,
      author{name, avatar, date},
      content
    }
  `,
    { slug },
  );
  if (!data) return null;
  return PostSchema.parse(data);
}

// Popular / Trending
export async function getPopularPosts(): Promise<PostSummary[]> {
  const posts = await fetchPosts();
  return posts.filter((p) => p.category === 'popular').slice(0, 3);
}
export async function getTrendingPosts(): Promise<PostSummary[]> {
  const posts = await fetchPosts();
  return posts.filter((p) => p.category === 'trending');
}
