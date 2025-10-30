import { defineType, defineField } from 'sanity';

export const footerType = defineType({
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    // Logo
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: { hotspot: true },
      fields: [{ name: 'alt', type: 'string', title: 'Alt text' }],
    }),

    // Contact info
    defineField({
      name: 'contactItems',
      title: 'Contact Information',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'item',
          title: 'Item',
          fields: [
            { name: 'label', title: 'Label', type: 'string' },
            { name: 'value', title: 'Value', type: 'string' },
          ],
        },
      ],
    }),

    // Bottom links
    defineField({
      name: 'bottomLinks',
      title: 'Bottom Links',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'link',
          title: 'Link',
          fields: [
            { name: 'text', title: 'Text', type: 'string' },
            { name: 'href', title: 'Href', type: 'url' },
          ],
        },
      ],
    }),

    // Social icons
    defineField({
      name: 'socials',
      title: 'Social Icons',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'social' }] }],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'logo',
    },
    prepare(selection) {
      return {
        title: selection.title || 'Footer Configuration',
        media: selection.media,
      };
    },
  },
});
