import {defineType} from 'sanity'

export const categoryType = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'value',
      title: 'Value',
      type: 'string',
      options: {
        list: [
          {title: 'Hero', value: 'hero'},
          {title: 'Popular', value: 'popular'},
          {title: 'Trending', value: 'trending'},
          {title: 'General', value: 'general'},
        ],
        layout: 'dropdown',
      },
    },
  ],
})
