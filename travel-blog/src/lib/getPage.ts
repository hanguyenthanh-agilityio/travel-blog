import { fetchPosts, getPopularPosts, getTrendingPosts } from './api';
import { POSTS_PER_PAGE } from '@/constants/blog';

export async function getPage(page: number = 1) {
  // Fetch posts
  const posts = await fetchPosts();
  const heroPost = posts.find((p) => p.category === 'hero') || null;
  const popularPosts = await getPopularPosts();
  const allTrendingPosts = await getTrendingPosts();

  // Pagination
  const totalPages = Math.max(
    1,
    Math.ceil(allTrendingPosts.length / POSTS_PER_PAGE),
  );
  const currentPage = Math.min(Math.max(page, 1), totalPages);

  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const end = currentPage * POSTS_PER_PAGE;
  const trendingPosts = allTrendingPosts.slice(start, end);

  return {
    heroPost,
    popularPosts,
    trendingPosts,
    currentPage,
    totalPages,
  };
}
