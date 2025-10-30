export type PostDetailType = {
  _id: string;
  title?: string;
  excerpt?: string;
  slug?: string;
  category?: string;
  image?: {
    asset?: { url?: string };
    alt?: string;
  };
  author?: {
    name: string;
    role?: string;
    date?: string;
    avatar?: { asset?: { url?: string }; alt?: string };
  };
  content?: any;
};

export type SocialIconType = {
  label?: string;
  href: string;
  icon?: string | { asset?: { url?: string | null } };
};
