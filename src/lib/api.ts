import {
  PostSummarySchema,
  PostSchema,
  type PostSummary,
  type Post,
} from '@/lib/schema';
import { z } from 'astro:content';

const API_URL =
  'https://68cbe88d716562cf50758d1c.mockapi.io/api/travel-blog/posts';

export async function fetchPosts(): Promise<PostSummary[]> {
  const res = await fetch(API_URL);
  const data = await res.json();
  return z.array(PostSummarySchema).parse(data);
}

export async function fetchPostById(id: string): Promise<Post | null> {
  const res = await fetch(`${API_URL}/${id}`);
  if (!res.ok) return null;
  const data = await res.json();
  return PostSchema.parse(data);
}

export async function getPopularPosts(): Promise<PostSummary[]> {
  const posts = await fetchPosts();
  return posts.filter((p) => p.category === 'popular').slice(0, 3);
}

export async function getTrendingPosts(): Promise<PostSummary[]> {
  const posts = await fetchPosts();
  return posts.filter((p) => p.category === 'trending');
}
