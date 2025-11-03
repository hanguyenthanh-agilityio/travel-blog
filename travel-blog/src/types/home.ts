import type { PostSummary } from '@/lib/schema';

export interface HomePageType {
  heroPost: PostSummary;
  popularPosts: PostsSection;
  trendingPosts: PostsSection;
}

export interface PostsSection {
  heading?: Array<{
    _key: string;
    _type: 'block';
    style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'blockquote';
    children?: Array<{
      _key: string;
      _type: 'span';
      text?: string;
      marks?: string[];
    }>;
    markDefs?: Array<{
      _key: string;
      _type: 'link';
      href?: string;
    }>;
  }>;
  posts: PostSummary[];
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
  copyright?: { children?: { text?: string }[] };
}
