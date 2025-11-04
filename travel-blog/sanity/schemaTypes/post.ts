import { defineField, defineType } from 'sanity';

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt / Summary',
      type: 'blockContent',
    }),
    defineField({
      name: 'image',
      title: 'Main Image',
      type: 'image',
      options: { hotspot: true },
      fields: [{ name: 'alt', type: 'string', title: 'Alt text' }],
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Hero', value: 'hero' },
          { title: 'Popular', value: 'popular' },
          { title: 'Trending', value: 'trending' },
          { title: 'General', value: 'general' },
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'author' }],
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'object',
      fields: [
        defineField({
          name: 'intro',
          title: 'Introduction',
          type: 'blockContent',
        }),
        defineField({
          name: 'sections',
          title: 'Sections',
          type: 'array',
          of: [{ type: 'contentSection' }],
        }),
        defineField({
          name: 'conclusion',
          title: 'Conclusion',
          type: 'blockContent',
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'author.name',
      media: 'image',
    },
    prepare(selection) {
      const { subtitle } = selection;
      return { ...selection, subtitle: subtitle ? `by ${subtitle}` : '' };
    },
  },
});
