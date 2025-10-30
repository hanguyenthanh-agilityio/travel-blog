import type { PostSummary } from '@/lib/schema';

export interface HomePageType {
  heroPost: PostSummary;
  popularPosts: PostSummary[];
  trendingPosts: PostSummary[];
}

export interface HeaderType {
  logo?: { asset?: { url?: string } };
  menuItems?: { text: string; href: string }[];
  otherPages?: { text: string; href: string }[];
}

export interface FooterType {
  contactItems?: {
    label: string;
    value: string;
  }[];

  socials?: {
    href: string;
    label?: string;
    icon?: {
      asset?: { url?: string };
    };
  }[];

  bottomLinks?: {
    text: string;
    href: string;
  }[];
}
