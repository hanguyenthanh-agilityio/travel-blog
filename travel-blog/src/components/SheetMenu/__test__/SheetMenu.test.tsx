import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import SheetMenu from '..';

// Mock UI components
vi.mock('@/ui', async () => {
  const actual = await vi.importActual('@/ui');
  return {
    ...actual,
    Sheet: ({ children }: any) => <div>{children}</div>,
    SheetTrigger: ({ children }: any) => <div>{children}</div>,
    SheetContent: ({ children, ...props }: any) => (
      <div {...props}>{children}</div>
    ),
  };
});

vi.mock('@/ui/button', async () => {
  const actual = await vi.importActual('@/ui/button');
  return {
    ...actual,
    Button: ({ children, ...props }: any) => (
      <button {...props}>{children}</button>
    ),
  };
});

vi.mock('@/icons', async () => ({
  Hamburger: () => <span data-testid="hamburger">☰</span>,
}));

vi.mock('../SheetContent', () => ({
  __esModule: true,
  default: ({ menuItems, otherPages }: any) => (
    <div data-testid="sheet-content">
      {menuItems.map((item: any) => (
        <div key={item.href} data-testid="menu-item">
          {item.text}
        </div>
      ))}
      {otherPages.map((item: any) => (
        <div key={item.href} data-testid="other-page">
          {item.text}
        </div>
      ))}
    </div>
  ),
}));

describe('SheetMenu', () => {
  const menuItems = [
    { href: '/home', text: 'Home' },
    { href: '/blog', text: 'Blog' },
  ];

  const otherPages = [
    { href: '/about', text: 'About' },
    { href: '/contact', text: 'Contact' },
  ];

  it('renders trigger button with Hamburger icon', () => {
    render(<SheetMenu menuItems={menuItems} />);
    const trigger = screen.getByRole('button', { name: /open menu/i });
    expect(trigger).toBeInTheDocument();
    expect(screen.getByTestId('hamburger')).toBeInTheDocument();
  });

  it('renders SheetContent when sheet is opened', () => {
    render(<SheetMenu menuItems={menuItems} otherPages={otherPages} />);

    // Với mock Sheet/SheetTrigger, SheetContent luôn render
    const sheetContent = screen.getByTestId('sheet-content');
    expect(sheetContent).toBeInTheDocument();

    menuItems.forEach((item) => {
      expect(screen.getByText(item.text)).toBeInTheDocument();
    });

    otherPages.forEach((item) => {
      expect(screen.getByText(item.text)).toBeInTheDocument();
    });
  });
});
