import { defineType } from 'sanity';

export const blockContentType = defineType({
  name: 'blockContent',
  title: 'Block Content',
  type: 'array',
  of: [
    { type: 'block' },
    {
      type: 'image',
      fields: [{ name: 'alt', type: 'string', title: 'Alt text' }],
    },
  ],
});
