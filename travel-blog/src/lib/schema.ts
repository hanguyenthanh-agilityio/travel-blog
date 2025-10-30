import { z } from 'zod';

/**
 * Author schema
 */
export const AuthorSchema = z.object({
  name: z.string().default('Unknown'),
  role: z.string().optional(),
  avatar: z
    .union([
      z.string().url().optional(),
      z
        .object({
          asset: z.object({ url: z.string().optional() }).optional(),
        })
        .optional(),
    ])
    .optional(),
  date: z.union([z.string(), z.date()]).optional(),
});

/**
 * Content schema
 */
export const ContentSchema = z.object({
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

/**
 * Post summary schema (list pages)
 */
export const PostSummarySchema = z.object({
  slug: z.union([
    z.string(),
    z.object({
      current: z.string().optional(),
    }),
  ]),
  title: z.string(),
  image: z
    .union([
      z.string(),
      z.object({
        asset: z.object({ url: z.string().optional() }).optional(),
      }),
    ])
    .optional(),
  category: z
    .string()
    .optional()
    .transform((val) =>
      val?.replace(/[\u200B-\u200D\uFEFF\u2060\u00A0]/g, '').trim(),
    ),
  author: AuthorSchema.nullable().default(null),
});

/**
 * Full post schema (detail page)
 */
export const PostSchema = PostSummarySchema.extend({
  excerpt: z.string().default(''),
  content: ContentSchema.default({ sections: [] }),
});

/**
 * Social schema
 */
export const SocialSchema = z.object({
  label: z.string(),
  href: z.string().url(),
  icon: z.string().optional(),
});

/**
 * Types
 */
export type Author = z.infer<typeof AuthorSchema>;
export type PostSummary = z.infer<typeof PostSummarySchema>;
export type Post = z.infer<typeof PostSchema>;
export type Social = z.infer<typeof SocialSchema>;
