import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import userEvent from '@testing-library/user-event';
import NavDropdownMenu from './index';

describe('NavDropdownMenu', () => {
  const items = [
    { href: '/home', text: 'Home' },
    { href: '/about', text: 'About' },
  ];

  it('renders button with label', () => {
    render(<NavDropdownMenu label="Menu" items={items} />);
    const button = screen.getByRole('button', { name: /menu/i });
    expect(button).toBeInTheDocument();
  });

  it('renders dropdown items when triggered', async () => {
    render(<NavDropdownMenu label="Menu" items={items} />);
    const user = userEvent.setup();

    const button = screen.getByRole('button', { name: /menu/i });
    await user.click(button);

    items.forEach((item) => {
      expect(screen.getByText(item.text)).toBeInTheDocument();
      expect(screen.getByText(item.text).closest('a')).toHaveAttribute(
        'href',
        item.href,
      );
    });
  });
});
