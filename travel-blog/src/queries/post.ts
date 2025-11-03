import type { Post, Author } from '../../sanity.types';

export const allPostsQuery = `
  *[_type == "post"] | order(_createdAt desc) {
    title,
    slug,
    excerpt,
    image{ asset->{ url } },
    category,
    author->{ name, role, avatar{ asset->{ url } }, date }
  }
`;

export const postBySlugQuery = `
  *[_type == "post" && slug.current == $slug][0]{
    title,
    slug,
    excerpt,
    image{ asset->{ url } },
    category,
    author->{ name, role, avatar{ asset->{ url } }, date },
    content {
      intro[],
      sections[]{ country, items },
      conclusion[]
    }
  }
`;

export type AuthorResolved = Omit<Author, 'avatar'> & {
  avatar?: { asset?: { url?: string | null } };
};

export type PostResolved = Omit<Post, 'author' | 'image'> & {
  author?: AuthorResolved;
  image?: { asset?: { url?: string | null } };
};
