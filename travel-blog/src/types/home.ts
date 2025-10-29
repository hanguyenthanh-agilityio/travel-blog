import type { PostSummary } from '@/lib/schema';

export interface HomePageType {
  heroPost: PostSummary;
  popularPosts: PostSummary[];
  trendingPosts: PostSummary[];
}
