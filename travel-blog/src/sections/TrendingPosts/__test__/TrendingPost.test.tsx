import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import TrendingPosts from '..';

// Mock BlogGrid
vi.mock('@/sections', () => ({
  BlogGrid: vi.fn(({ posts }) => (
    <div data-testid="blog-grid">
      {posts.map((p: any) => (
        <div key={p.slug} data-testid="post-item">
          {p.title}
        </div>
      ))}
    </div>
  )),
}));

// Mock Paginator
vi.mock('@/components', () => ({
  Paginator: vi.fn(({ currentPage, totalPages, onPageChange }) => (
    <div data-testid="paginator">
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <button data-testid="next" onClick={() => onPageChange(currentPage + 1)}>
        Next
      </button>
    </div>
  )),
}));

describe('TrendingPosts', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  const mockPosts = Array.from({ length: 8 }, (_, i) => ({
    title: `Post ${i + 1}`,
    slug: { current: `post-${i + 1}` },
    image: { asset: { url: `image-${i + 1}.jpg` } },
    author: { name: `Author ${i + 1}` },
  }));

  it('changes page when onPageChange is triggered', () => {
    render(<TrendingPosts posts={mockPosts} postsPerPage={3} />);

    // Click next → onPageChange gọi setCurrentPage(2)
    const nextButton = screen.getByTestId('next');
    fireEvent.click(nextButton);

    // Sau khi click, page = 2, nên nên render bài 4,5,6œ
    const posts = screen.getAllByTestId('post-item');
    expect(posts[0]).toHaveTextContent('Post 4');
  });

  it('normalizes slug and image correctly', () => {
    const postsWithVariousFormats = [
      {
        title: 'With string slug',
        slug: 'slug-1',
        image: 'img-1.jpg',
        author: { name: 'A' },
      },
      {
        title: 'With object slug',
        slug: { current: 'slug-2' },
        image: { asset: { url: 'img-2.jpg' } },
        author: {},
      },
    ];

    render(<TrendingPosts posts={postsWithVariousFormats} postsPerPage={2} />);

    const posts = screen.getAllByTestId('post-item');
    expect(posts).toHaveLength(2);
    expect(posts[0]).toHaveTextContent('With string slug');
    expect(posts[1]).toHaveTextContent('With object slug');
  });

  it('handles empty posts array safely', () => {
    render(<TrendingPosts posts={[]} />);
    const posts = screen.queryAllByTestId('post-item');
    expect(posts).toHaveLength(0);
    expect(screen.getByTestId('paginator')).toHaveTextContent('Page 1 of 1');
  });
});
