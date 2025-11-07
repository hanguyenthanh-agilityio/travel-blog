import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import SheetContent from '..';

// --- Mock components ---
vi.mock('@/components', async () => {
  const actual = await vi.importActual('@/components');
  return {
    ...actual,
    Link: ({ children, classes, href, ...props }: any) => (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    ),
    NavDropdownMenu: ({ label, items }: any) => (
      <div data-testid="nav-dropdown">
        {label} {items.length}
      </div>
    ),
  };
});

vi.mock('@/ui/sheet', async () => {
  const actual = await vi.importActual('@/ui/sheet');
  return {
    ...actual,
    SheetClose: ({ children }: any) => <>{children}</>,
  };
});

describe('SheetContent', () => {
  const menuItems = [
    { href: '/home', text: 'Home' },
    { href: '/about', text: 'About' },
  ];

  // const otherPages = [
  //   { href: '/privacy', text: 'Privacy' },
  //   { href: '/terms', text: 'Terms' },
  // ];

  it('renders all menu items', () => {
    render(<SheetContent menuItems={menuItems} />);

    menuItems.forEach((item) => {
      const link = screen.getByRole('link', { name: item.text });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', item.href);
      expect(link.className).toContain(
        'block text-sm border-b border-solid pb-2 hover:text-accent',
      );
    });
  });

  //   it('renders NavDropdownMenu when otherPages exist', () => {
  //     render(<SheetContent menuItems={menuItems} otherPages={otherPages} />);

  //     const dropdown = screen.getByTestId('nav-dropdown');
  //     expect(dropdown).toBeInTheDocument();
  //     expect(dropdown.textContent).toContain('Other Pages');
  //     expect(dropdown.textContent).toContain(otherPages.length.toString());
  //   });

  //   it('renders empty nav safely when otherPages is empty', () => {
  //     render(<SheetContent menuItems={menuItems} otherPages={[]} />);
  //     const dropdown = screen.queryByTestId('nav-dropdown');
  //     expect(dropdown).toBeNull();
  //   });
});
