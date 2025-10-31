import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import BlogCard from '..';

// --- Mock components ---
vi.mock('@/components', async () => {
  const actual = await vi.importActual('@/components');
  return {
    ...actual,
    Link: ({ children, href, ...props }: any) => (
      <a href={href} {...props}>
        {children}
      </a>
    ),
    SanityImage: ({ node, alt, className }: any) => (
      <img
        src={typeof node === 'string' ? node : node?.asset?.url}
        alt={alt || ''}
        className={className}
      />
    ),
  };
});

vi.mock('@/sections', async () => {
  const actual = await vi.importActual('@/sections');
  return {
    ...actual,
    AuthorCard: ({ name, classAvatar }: any) => (
      <div data-testid="author-card">
        {name} {classAvatar}
      </div>
    ),
  };
});

describe('BlogCard', () => {
  const slug = { current: 'my-post' };
  const title = 'My Awesome Post';
  const image = 'image.png';
  const author = {
    name: 'John Doe',
    role: 'Writer',
    avatar: 'avatar.png',
    date: '2025-10-30',
  };

  it('renders title and slug correctly', () => {
    render(<BlogCard slug={slug} title={title} />);

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', `/posts/${slug.current}`);
    expect(screen.getByText(title)).toBeInTheDocument();
  });

  it('renders SanityImage when image is provided', () => {
    render(<BlogCard slug={slug} title={title} image={image} />);

    const img = screen.getByRole('img', { name: title });
    expect(img).toHaveAttribute('src', 'image.png');
  });

  it('renders AuthorCard when author is provided', () => {
    render(<BlogCard slug={slug} title={title} author={author} />);

    const authorCard = screen.getByTestId('author-card');
    expect(authorCard).toHaveTextContent(author.name);
  });

  it('applies horizontal variant classes when variant="horizontal"', () => {
    render(<BlogCard slug={slug} title={title} variant="horizontal" />);

    const link = screen.getByRole('link');
    expect(link.firstChild).toHaveClass('md:flex-row');
  });
});
