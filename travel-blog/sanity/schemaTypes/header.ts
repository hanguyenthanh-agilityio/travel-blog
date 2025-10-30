import { defineType, defineField } from 'sanity';

export const HeaderType = defineType({
  name: 'header',
  title: 'Header',
  type: 'document',
  fields: [
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'menuItems',
      title: 'Menu Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'text', type: 'string', title: 'Text' },
            { name: 'href', type: 'string', title: 'Link' },
          ],
        },
      ],
    }),
    defineField({
      name: 'otherPages',
      title: 'Other Pages',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'text', type: 'string', title: 'Text' },
            { name: 'href', type: 'string', title: 'Link' },
          ],
        },
      ],
    }),
  ],
});
