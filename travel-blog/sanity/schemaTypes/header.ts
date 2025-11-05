import { defineType, defineField } from 'sanity';

export const HeaderType = defineType({
  name: 'header',
  title: 'Header',
  type: 'document',
  fields: [
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'object',
      fields: [
        defineField({
          name: 'image',
          title: 'Image',
          type: 'image',
          options: { hotspot: true },
        }),
        defineField({
          name: 'text',
          title: 'Text (Optional)',
          type: 'array',
          of: [{ type: 'block' }],
          description:
            'Use this if you prefer text logo instead of an image (supports marks, strong, links...)',
        }),
        defineField({
          name: 'link',
          title: 'Logo Link',
          type: 'string',
          description: 'Destination when clicking the logo (default: /)',
        }),
      ],
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
