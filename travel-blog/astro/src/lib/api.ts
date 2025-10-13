import { sanityClient } from './sanity';
import { z } from 'astro:content';
import {
  PostSchema,
  PostSummarySchema,
  type Post,
  type PostSummary,
} from './schema';

/**
 * Fetch all posts (summary)
 */
export async function fetchPosts(): Promise<PostSummary[]> {
  const data = await sanityClient.fetch(`
    *[_type == "post"]{
      title,
      slug,
      excerpt,
      image{
        asset->{
          url
        }
      },
      category,
      author->{
        name,
        role,
        avatar{
          asset->{
            url
          }
        },
        date
      }
    }
  `);

  const normalized = data.map((data: any) => ({
    ...data,
    slug: data.slug?.current || '',
    image: data.image?.asset?.url || '',
    author: data.author
      ? {
          name: data.author.name || 'Unknown',
          role: data.author.role || '',
          avatar: data.author.avatar?.asset?.url || '',
          date: data.author.date || '',
        }
      : { name: 'Unknown', role: '', avatar: '', date: '' },
    content: data.content ?? {
      intro: '',
      sections: [],
      conclusion: '',
    },
  }));

  return z.array(PostSummarySchema).parse(normalized);
}

/**
 * Fetch single post by slug
 */
export async function fetchPostBySlug(slug: string): Promise<Post | null> {
  const data = await sanityClient.fetch(
    `
    *[_type == "post" && slug.current == $slug][0]{
      title,
      slug,
      excerpt,
      image{
        asset->{
          url
        }
      },
      category,
      author->{
        name,
        role,
        avatar{
          asset->{
            url
          }
        },
        date
      },
    content{
      "intro": pt::text(intro),
      sections[] {
        country,
        items
      },
      "conclusion": pt::text(conclusion)
    }
  }
  `,
    { slug },
  );

  if (!data) return null;

  const normalized = {
    ...data,
    slug: data.slug?.current || '',
    image: data.image?.asset?.url || '',
    author: data.author
      ? {
          name: data.author.name || 'Unknown',
          role: data.author.role || '',
          avatar: data.author.avatar?.asset?.url || '',
          date: data.author.date || '',
        }
      : { name: 'Unknown', role: '', avatar: '', date: '' },
    content: data.content ?? {
      intro: '',
      sections: [],
      conclusion: '',
    },
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
