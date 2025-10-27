import { fetchPosts, getPopularPosts, getTrendingPosts } from './api';

export async function getPage() {
  const posts = await fetchPosts();
  const heroPost = posts.find((p) => p.category === 'hero') || null;
  const popularPosts = await getPopularPosts();
  const trendingPosts = await getTrendingPosts();

  return {
    heroPost,
    popularPosts,
    trendingPosts,
  };
}
