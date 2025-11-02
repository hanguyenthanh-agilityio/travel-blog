import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import SanityImage from '..';
import { urlForImage } from '@/sanity/url-for-image';

vi.mock('@/sanity/url-for-image', () => ({
  urlForImage: vi.fn(() => ({
    width: vi.fn().mockReturnThis(),
    fit: vi.fn().mockReturnThis(),
    auto: vi.fn().mockReturnThis(),
    quality: vi.fn().mockReturnThis(),
    url: vi.fn(() => 'https://mock.image.url/test.webp'),
  })),
}));

describe('SanityImage', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders fallback div when node is null', () => {
    render(<SanityImage node={null} />);
    const fallback = screen.getByTestId('sanity-image-fallback');
    expect(fallback).toBeInTheDocument();
    expect(fallback).toHaveClass('bg-gray-100');
  });

  it('renders fallback div when asset URL missing', () => {
    render(<SanityImage node={{ asset: {} }} />);
    const fallback = screen.getByTestId('sanity-image-fallback');
    expect(fallback).toBeInTheDocument();
    expect(fallback).toHaveClass('bg-gray-100');
  });

  it('renders image when node is a URL string', () => {
    render(
      <SanityImage
        node={{
          asset: { url: 'https://mock.image.url/test.webp' },
          alt: 'Test image',
        }}
      />,
    );
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', 'https://mock.image.url/test.webp');
    expect(img).toHaveAttribute('srcSet');
    expect(img).toHaveAttribute('loading', 'lazy');
    expect(img).toHaveAttribute('decoding', 'async');
  });

  it('renders image from Sanity image object', () => {
    const mockNode = {
      _type: 'image',
      alt: 'Sample image',
      asset: {
        url: 'https://mock.image.url/real.webp',
        metadata: { dimensions: { width: 800, height: 600 } },
      },
    } as const;

    render(<SanityImage node={mockNode} className="rounded-lg" />);
    const img = screen.getByRole('img');
    expect(urlForImage).toHaveBeenCalled();
    expect(img).toHaveClass('rounded-lg');
    expect(img).toHaveAttribute('alt', 'Sample image');
    expect(img).toHaveAttribute('width', '800');
    expect(img).toHaveAttribute('height', '600');
    expect(img.style.aspectRatio).toBe('1.3333333333333333 / 1');
  });

  it('applies priority props correctly', () => {
    render(
      <SanityImage
        node={{
          asset: { url: 'https://mock.image.url/test.webp' },
          alt: 'Test image',
        }}
        priority
      />,
    );
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('fetchPriority', 'high');
    expect(img).toHaveAttribute('loading', 'eager');
  });

  it('generates valid srcSet for multiple widths', () => {
    render(
      <SanityImage
        node={{
          asset: { url: 'https://mock.image.url/test.webp' },
          alt: 'Test image',
        }}
        srcSetWidths={[320, 640, 1280]}
      />,
    );
    const img = screen.getByRole('img');
    const srcSet = img.getAttribute('srcSet')!;
    expect(srcSet).toContain('320w');
    expect(srcSet).toContain('640w');
    expect(srcSet).toContain('1280w');
    expect(urlForImage).toHaveBeenCalledTimes(1 + 3); // 1 main + 3 srcSet
  });
});
