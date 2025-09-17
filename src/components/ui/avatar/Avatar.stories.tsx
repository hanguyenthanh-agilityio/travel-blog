import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar, AvatarImage, AvatarFallback } from './index';

type AvatarStoryProps = {
  src?: string;
  alt?: string;
  fallback?: React.ReactNode;
};

const meta: Meta<AvatarStoryProps> = {
  title: 'UI/Avatar',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<AvatarStoryProps>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: AvatarStoryProps) => (
  <Avatar>
    {args.src ? (
      <AvatarImage src={args.src} alt={args.alt} />
    ) : (
      <AvatarFallback>{args.fallback}</AvatarFallback>
    )}
  </Avatar>
);

export const WithImage: Story = {
  render: Template,
  args: {
    src: '/images/avatar-blog-3.png',
    alt: 'User avatar',
    fallback: 'AB',
  },
};

export const WithFallback: Story = {
  render: Template,
  args: {
    src: '',
    fallback: 'CD',
  },
};
