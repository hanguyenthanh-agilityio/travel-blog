import { defineType, defineField } from 'sanity';

export const sectionHeadingType = defineType({
  name: 'sectionHeading',
  title: 'Section Heading',
  type: 'document',
  fields: [
    defineField({
      name: 'section',
      title: 'Section',
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
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heading',
      title: 'Heading Content',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule) => Rule.required(),
    }),
  ],
});
