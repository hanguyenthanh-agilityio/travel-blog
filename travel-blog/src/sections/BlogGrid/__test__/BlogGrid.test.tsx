import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

// Component
import BlogGrid from '..';
import type { Blog } from '@/types/blog';

vi.mock('@/sections', () => ({
  BlogCard: ({ title, className }: any) => (
    <div data-testid="blog-card" className={className}>
      {title}
    </div>
  ),
}));

describe('BlogGrid', () => {
  const posts: Blog[] = [
    {
      title: 'Sustainable Travel Tips: Reducing Your Carbon Footprint',
      image: '/images/popular-1.png',

      author: {
        role: 'author',
        date: 'Nov 29, 2024',
        name: 'Clara Wilson',
        avatar: '/images/avatar-blog-2.png',
      },
    },
    {
      title: 'Chasing Sunsets: The World’s Most Scenic Destinations',
      image: '/images/popular-2.png',

      author: {
        role: 'author',
        date: 'Nov 29, 2024',
        name: 'Amelia Scott',
        avatar: '/images/avatar-blog-3.png',
      },
    },
  ];

  it('renders all posts', () => {
    render(<BlogGrid posts={posts} />);
    const cards = screen.getAllByTestId('blog-card');
    expect(cards.length).toBe(posts.length);

    posts.forEach((post) => {
      expect(screen.getByText(post.title)).toBeInTheDocument();
    });
  });
});
