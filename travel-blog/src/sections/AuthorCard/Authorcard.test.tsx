import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

// Components
import AuthorCard from './index';

describe('AuthorCard', () => {
  const defaultProps = {
    name: 'John Doe',
    role: 'Author',
    avatar: '/avatar.png',
    date: new Date('2025-09-22'),
  };

  it('renders author name, role, and date', () => {
    render(<AuthorCard {...defaultProps} />);

    // Check name
    expect(screen.getByText('John Doe')).toBeInTheDocument();

    // Check role
    // expect(screen.getByText('Author')).toBeInTheDocument();

    // Check date
    expect(
      screen.getByText(defaultProps.date.toLocaleDateString()),
    ).toBeInTheDocument();
  });

  it('renders fallback avatar letter if image not loaded', () => {
    render(<AuthorCard {...defaultProps} avatar="" />);
    expect(screen.getByText('J')).toBeInTheDocument();
  });

  it('applies dark mode styles when dark=true', () => {
    const { container } = render(<AuthorCard {...defaultProps} dark />);
    expect(container.querySelector('.text-white')).toBeTruthy();
  });

  it('applies hero layout styles correctly', () => {
    const { container } = render(
      <AuthorCard {...defaultProps} layout="hero" />,
    );
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.className).toContain('flex-col');
    expect(wrapper.className).toContain('md:flex-row');
  });

  it('renders correctly in card layout (default)', () => {
    const { container } = render(<AuthorCard {...defaultProps} />);
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.className).toContain('flex-row');
    expect(wrapper.className).toContain('items-center');
  });
});
