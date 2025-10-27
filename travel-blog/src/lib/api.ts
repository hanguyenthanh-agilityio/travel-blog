import { z } from 'zod';
import { loadQuery } from '@/sanity/load-query';
import {
  allPostsQuery,
  postBySlugQuery,
  type PostResolved,
} from '@/queries/post';
import { allSocialsQuery, type SocialResolved } from '@/queries/social';
import {
  PostSchema,
  PostSummarySchema,
  SocialSchema,
  type Post,
  type PostSummary,
  type Social,
} from './schema';

/**
 * Fetch all posts
 */
export async function fetchPosts(): Promise<PostSummary[]> {
  const { data } = await loadQuery<PostResolved[]>({ query: allPostsQuery });

  const normalized = data.map((item) => ({
    slug: item.slug?.current || '',
    title: item.title || '',
    image: item.image?.asset?.url || '',
    category: item.category || '',
    author: item.author
      ? {
          name: item.author.name || 'Unknown',
          role: item.author.role || '',
          avatar: item.author.avatar?.asset?.url || '',
          date: item.author.date || '',
        }
      : { name: 'Unknown', role: '', avatar: '', date: '' },
  }));

  return z.array(PostSummarySchema).parse(normalized);
}

/**
 * Fetch single post by slug
 */
export async function fetchPostBySlug(slug: string): Promise<Post | null> {
  const { data } = await loadQuery<PostResolved>({
    query: postBySlugQuery,
    params: { slug },
  });

  if (!data) return null;

  const normalized = {
    slug: data.slug?.current || '',
    title: data.title || '',
    image: data.image?.asset?.url || '',
    category: data.category || '',
    author: data.author
      ? {
          name: data.author.name || 'Unknown',
          role: data.author.role || '',
          avatar: data.author.avatar?.asset?.url || '',
          date: data.author.date || '',
        }
      : { name: 'Unknown', role: '', avatar: '', date: '' },
    excerpt: data.excerpt || '',
    content: data.content ?? { intro: '', sections: [], conclusion: '' },
  };

  return PostSchema.parse(normalized);
}

/**
 * Get popular posts
 */
export async function getPopularPosts(): Promise<PostSummary[]> {
  const posts = await fetchPosts();
  return posts.filter((p) => p.category === 'popular').slice(0, 3);
}

/**
 * Get trending posts
 */
export async function getTrendingPosts(): Promise<PostSummary[]> {
  const posts = await fetchPosts();
  return posts.filter((p) => p.category === 'trending');
}

/**
 * Fetch all socials from Sanity
 */
export async function getSocials(): Promise<Social[]> {
  const { data } = await loadQuery<SocialResolved[]>({
    query: allSocialsQuery,
  });

  const normalized = data.map((item) => ({
    label: item.label,
    href: item.href,
    icon: item.icon?.asset?.url || '',
  }));

  return z.array(SocialSchema).parse(normalized);
}

/**
 * Get page data (for Astro layout)
 */
export async function getPage() {
  const posts = await fetchPosts();
  const heroPost = posts.find((p) => p.category === 'hero') || null;
  const popularPosts = await getPopularPosts();
  const trendingPosts = await getTrendingPosts();
  const socials = await getSocials();

  return {
    heroPost,
    popularPosts,
    trendingPosts,
    socials,
  };
}
