import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import BlogGrid from '.';

// Mock data cho Storybook
const mockPosts = [
  {
    title: 'Blog Post 1',
    slug: 'blog-post-1',
    variant: 'default',
    image: 'https://via.placeholder.com/600x400',
    author: { name: 'Jane Doe', role: 'Writer' },
  },
  {
    title: 'Blog Post 2',
    slug: 'blog-post-2',
    variant: 'horizontal',
    image: 'https://via.placeholder.com/600x400',
    author: { name: 'John Doe', role: 'Editor' },
  },
  {
    title: 'Blog Post 3',
    slug: 'blog-post-3',
    variant: 'default',
    image: 'https://via.placeholder.com/600x400',
    author: { name: 'Alice Smith', role: 'Contributor' },
  },
  {
    title: 'Blog Post 4',
    slug: 'blog-post-4',
    variant: 'horizontal',
    image: 'https://via.placeholder.com/600x400',
    author: { name: 'Bob Johnson', role: 'Writer' },
  },
];

const meta: Meta<typeof BlogGrid> = {
  title: 'Sections/BlogGrid',
  component: BlogGrid,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  argTypes: {
    column: { control: 'number', description: 'Number of columns' },
    className: { control: 'text', description: 'Additional className' },
    posts: { control: 'object', description: 'Array of blog posts' },
  },
  args: {
    posts: mockPosts.map((p) => ({
      ...p,
      author: {
        ...p.author,
        avatar: 'https://via.placeholder.com/40',
        date: '2024-06-01',
      },
    })),
    column: 3,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Template
const Template = (args: any) => <BlogGrid {...args} />;

export const Default: Story = { render: Template };

export const TwoColumns: Story = {
  render: Template,
  args: { column: 2 },
};

export const FourColumns: Story = {
  render: Template,
  args: { column: 4 },
};
