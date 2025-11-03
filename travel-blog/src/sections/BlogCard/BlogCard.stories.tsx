import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

// Components
import BlogCard from './index.tsx';

const MockAuthorCard = ({ name, role }: { name: string; role?: string }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
    <div
      style={{ width: 40, height: 40, borderRadius: '50%', background: '#aaa' }}
    />
    <div>
      <p style={{ margin: 0, fontWeight: 'bold' }}>{name}</p>
      {role && <p style={{ margin: 0, fontSize: 12 }}>{role}</p>}
    </div>
  </div>
);

const MockImage = ({ className }: { className?: string }) => (
  <div
    className={className}
    style={{
      width: '100%',
      aspectRatio: '16/9',
      backgroundColor: '#ccc',
      borderRadius: 12,
    }}
  />
);

const meta: Meta<typeof BlogCard> = {
  title: 'Sections/BlogCard',
  component: BlogCard,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    title: { control: 'text', description: 'Blog title' },
    slug: { control: 'text', description: 'Blog slug' },
    variant: {
      control: { type: 'select' },
      options: ['default', 'horizontal'],
      description: 'Layout variant',
    },
    image: { control: 'text', description: 'Image URL or mock' },
    author: { control: 'object', description: 'Author object' },
  },
  args: {
    title: 'My First Blog Post',
    slug: 'my-first-post',
    variant: 'default',
    image: undefined,
    author: { name: 'John Doe', role: 'Writer' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: any) => (
  <BlogCard
    {...args}
    image={args.image ? args.image : <MockImage />}
    author={args.author ? <MockAuthorCard {...args.author} /> : null}
  />
);

export const Default: Story = { render: Template };

export const Horizontal: Story = {
  render: Template,
  args: { variant: 'horizontal' },
};

export const WithImage: Story = {
  render: Template,
  args: {
    image: 'mock-image-url',
  },
};

export const WithoutAuthor: Story = {
  render: Template,
  args: { author: null },
};
