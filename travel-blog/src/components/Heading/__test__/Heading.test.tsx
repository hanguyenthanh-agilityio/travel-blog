import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Heading from '../index';

describe('Heading', () => {
  it('renders children text', () => {
    render(<Heading>Test Heading</Heading>);
    expect(screen.getByText('Test Heading')).toBeInTheDocument();
  });

  it('renders with default props (h2, size=md)', () => {
    render(<Heading>Default Heading</Heading>);
    const el = screen.getByRole('heading', { level: 2 });
    expect(el).toHaveClass('font-bold text-xl');
  });

  it('renders as h1 with size=xl', () => {
    render(
      <Heading as="h1" size="xl">
        Large Heading
      </Heading>,
    );
    const el = screen.getByRole('heading', { level: 1 });
    expect(el).toHaveClass('font-bold text-4xl');
  });

  it('renders as h3 with size=sm', () => {
    render(
      <Heading as="h3" size="sm">
        Small Heading
      </Heading>,
    );
    const el = screen.getByRole('heading', { level: 3 });
    expect(el).toHaveClass('font-bold text-lg');
  });

  it('applies correct class for size=lg', () => {
    render(<Heading size="lg">Medium Large</Heading>);
    const el = screen.getByRole('heading', { level: 2 }); // default h2
    expect(el).toHaveClass('font-bold text-3xl');
  });

  it('applies correct class for each size', () => {
    const sizes = {
      sm: 'text-lg',
      md: 'text-xl',
      lg: 'text-3xl',
      xl: 'text-4xl',
    };

    for (const [size, cls] of Object.entries(sizes)) {
      render(<Heading size={size as any}>{size}</Heading>);
      const el = screen.getByText(size);
      expect(el).toHaveClass(cls);
    }
  });
});
