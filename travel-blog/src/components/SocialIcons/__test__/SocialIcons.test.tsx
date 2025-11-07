import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import SocialIcons from '../index.astro';

// Mock Link component
vi.mock('@/components', async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...(typeof actual === 'object' && actual !== null ? actual : {}),
    Link: vi.fn(({ href, children, classes, ...props }) => (
      <a href={href} data-testid="link" className={classes} {...props}>
        {children}
      </a>
    )),
    SanityImage: vi.fn(({ node, className }) => (
      <img
        src={node}
        alt="icon"
        className={className}
        data-testid="sanity-img"
      />
    )),
  };
});

describe('SocialIcons', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  const mockSocials = [
    {
      href: 'https://twitter.com',
      label: 'Twitter',
      icon: 'twitter-icon.png',
    },
    {
      href: 'https://facebook.com',
      label: 'Facebook',
      icon: { asset: { url: 'facebook-icon.png' } },
    },
    {
      href: 'https://instagram.com',
      label: 'Instagram',
      icon: undefined,
    },
  ];

  it.skip('renders all social links', () => {
    render(<SocialIcons socials={mockSocials} />);
    const links = screen.getAllByTestId('link');
    expect(links).toHaveLength(3);
    expect(
      screen.getByLabelText('Visit our Twitter profile'),
    ).toBeInTheDocument();
  });

  it.skip('renders SanityImage for valid icon URLs', () => {
    render(<SocialIcons socials={mockSocials} />);
    const imgs = screen.getAllByTestId('sanity-img');
    expect(imgs).toHaveLength(2);
    expect(imgs[0]).toHaveAttribute('src', 'twitter-icon.png');
    expect(imgs[1]).toHaveAttribute('src', 'facebook-icon.png');
  });

  it.skip('renders fallback span when icon is missing', () => {
    render(<SocialIcons socials={mockSocials} />);
    const fallback = screen.getAllByText('', {
      selector: 'span.w-6.h-6.block.bg-gray-300',
    });
    expect(fallback).toHaveLength(1);
  });

  it.skip('applies dark mode classes correctly', () => {
    render(<SocialIcons socials={mockSocials.slice(0, 1)} dark />);
    const link = screen.getByTestId('link');
    expect(link.className).toMatch(/text-white/);
    expect(link.className).not.toMatch(/text-gray-600/);
  });

  it.skip('applies custom class names to container and link', () => {
    render(
      <SocialIcons
        socials={mockSocials.slice(0, 1)}
        containerClassName="custom-container"
        linkClassName="custom-link"
      />,
    );

    const ul = screen.getByRole('list');
    const link = screen.getByTestId('link');

    expect(ul.className).toContain('custom-container');
    expect(link.className).toContain('custom-link');
  });

  it.skip('renders safely with empty socials', () => {
    render(<SocialIcons socials={[]} />);
    const list = screen.getByRole('list');
    expect(list).toBeInTheDocument();
    expect(screen.queryAllByTestId('link')).toHaveLength(0);
  });
});
