import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import userEvent from '@testing-library/user-event';
import NavDropdownMenu from '../index';

describe('NavDropdownMenu', () => {
  const items = [
    { href: '/home', text: 'Home' },
    { href: '/about', text: 'About' },
  ];

  it('renders button with correct label', () => {
    render(<NavDropdownMenu label="Menu" items={items} />);
    const button = screen.getByRole('button', { name: /open menu menu/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('aria-label', 'Open Menu menu');
  });

  it('each dropdown link has correct aria-label for accessibility', async () => {
    render(<NavDropdownMenu label="Menu" items={items} />);
    const user = userEvent.setup();

    const button = screen.getByRole('button', { name: /open menu menu/i });
    await user.click(button);

    for (const item of items) {
      const link = screen.getByLabelText(`Go to ${item.text} page`);
      expect(link).toBeInTheDocument();
    }
  });
});
