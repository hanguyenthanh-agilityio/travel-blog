import { defineField, defineType } from 'sanity';

export const contentSectionType = defineType({
  name: 'contentSection',
  title: 'Content Section',
  type: 'object',
  fields: [
    defineField({
      name: 'country',
      title: 'Country / Region',
      type: 'blockContent',
    }),
    defineField({
      name: 'items',
      title: 'Items / Highlights',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
});
