// src/components/common/MobileSheetMenu/MobileSheetMenu.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import MobileSheetMenu from './index';

describe('MobileSheetMenu', () => {
  it('renders the open menu button', () => {
    render(<MobileSheetMenu />);
    const button = screen.getByRole('button', { name: /open menu/i });
    expect(button).toBeInTheDocument();
  });

  it('opens the sheet when button is clicked', () => {
    render(<MobileSheetMenu />);
    const button = screen.getByRole('button', { name: /open menu/i });

    // Simulate click to open sheet
    fireEvent.click(button);

    // Check if one of the menu links is visible
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Blog')).toBeInTheDocument();
    expect(screen.getByText('Single Post')).toBeInTheDocument();

    // Check "Other Pages" label
    expect(screen.getByText('Other Pages')).toBeInTheDocument();
  });

  it('renders links correctly', () => {
    render(<MobileSheetMenu />);
    fireEvent.click(screen.getByRole('button', { name: /open menu/i }));

    expect(screen.getByText('Home').closest('a')).toHaveAttribute('href', '/');
    expect(screen.getByText('Blog').closest('a')).toHaveAttribute(
      'href',
      '/blog',
    );
    expect(screen.getByText('Single Post').closest('a')).toHaveAttribute(
      'href',
      '/post/example',
    );
  });
});
