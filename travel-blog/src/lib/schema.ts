import { z } from 'astro:content';

// Author schema
export const AuthorSchema = z.object({
  name: z.string().default(''),
  role: z.string().optional(),
  avatar: z.string().optional(),
  date: z.union([z.string(), z.date()]).optional(),
});

// Content schema
const ContentSchema = z.object({
  intro: z.any().optional(),
  sections: z
    .array(
      z.object({
        country: z.string(),
        items: z.array(z.string()).default([]),
      }),
    )
    .default([]),
  conclusion: z.any().optional(),
});

// Post summary (for list pages)
export const PostSummarySchema = z.object({
  slug: z.union([z.string(), z.object({ current: z.string() })]),
  title: z.string(),
  image: z.union([
    z.string(),
    z.object({
      asset: z
        .object({
          _ref: z.string().optional(),
          url: z.string().optional(),
        })
        .optional(),
    }),
  ]),
  category: z
    .string()
    .transform((val) =>
      val?.replace(/[\u200B-\u200D\uFEFF\u2060\u00A0]/g, '').trim(),
    )
    .refine((val) => ['hero', 'popular', 'trending', undefined].includes(val), {
      message: 'Invalid category',
    })
    .optional(),
  author: AuthorSchema.nullable().default(null),
});

// Full post schema (for detail page)
export const PostSchema = PostSummarySchema.extend({
  excerpt: z.string().default(''),
  content: ContentSchema.default({}),
});

// Types
export type Author = z.infer<typeof AuthorSchema>;
export type PostSummary = z.infer<typeof PostSummarySchema>;
export type Post = z.infer<typeof PostSchema>;
