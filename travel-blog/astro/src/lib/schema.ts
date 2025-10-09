import { z } from 'astro:content';

export const AuthorSchema = z.object({
  name: z.string(),
  role: z.string().optional(),
  avatar: z.string().optional(),
  date: z.union([z.string(), z.date()]).optional(),
});

export const PostSummarySchema = z.object({
  id: z.string(),
  title: z.string(),
  image: z.string(),
  category: z.enum(['hero', 'popular', 'trending']).optional(),
  author: AuthorSchema,
});

const ContentSchema = z.object({
  intro: z.string().default(''),
  sections: z
    .array(
      z.object({
        country: z.string(),
        items: z.array(z.string()).default([]),
      }),
    )
    .default([]),
  conclusion: z.string().default(''),
});

export const PostSchema = PostSummarySchema.extend({
  excerpt: z.string().default(''),
  content: ContentSchema.default({}),
});

export type Author = z.infer<typeof AuthorSchema>;
export type PostSummary = z.infer<typeof PostSummarySchema>;
export type Post = z.infer<typeof PostSchema>;
