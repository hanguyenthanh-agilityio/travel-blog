import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, it, expect, vi } from 'vitest';
import { Navigation } from '@/components';

// Partial mock
vi.mock('@/components', async (importOriginal) => {
  const actualModule = await importOriginal();
  const actual = actualModule as Record<string, any>;

  return {
    ...actual,
    Link: (props: any) =>
      `<a href="${props.href}" data-testid="link">${props.text}</a>`,
    NavDropdownMenu: (props: any) =>
      `<div data-testid="dropdown">${props.label}</div>`,
  };
});

describe('Navigation.astro', () => {
  const menuItems = [
    { text: 'Home', href: '/' },
    { text: 'Blog', href: '/blog' },
  ];

  // const otherPages = [
  //   { text: 'About', href: '/about' },
  //   { text: 'Contact', href: '/contact' },
  // ];

  it('renders all primary menu items', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Navigation, {
      props: { menuItems },
    });

    menuItems.forEach((item) => {
      expect(result).toContain(item.text);
      expect(result).toContain(`href="${item.href}"`);
    });

    expect(result).toContain('<nav');
    expect(result).toContain('aria-label="Main site navigation"');
  });

  //   it('renders secondary dropdown menu', async () => {
  //     const container = await AstroContainer.create();
  //     const result = await container.renderToString(Navigation, {
  //       props: { otherPages },
  //     });

  //     otherPages.forEach((item) => {
  //       expect(result).toContain(item.text);
  //     });

  //     expect(result).toContain('data-testid="dropdown"');
  //     expect(result).toContain('Other Pages');
  //   });

  //   it('renders both primary and secondary menus together', async () => {
  //     const container = await AstroContainer.create();
  //     const result = await container.renderToString(Navigation, {
  //       props: { menuItems, otherPages },
  //     });

  //     menuItems.forEach((item) => {
  //       expect(result).toContain(item.text);
  //       expect(result).toContain(`href="${item.href}"`);
  //     });

  //     otherPages.forEach((item) => {
  //       expect(result).toContain(item.text);
  //     });

  //     expect(result).toContain('data-testid="dropdown"');
  //   });

  it('renders empty nav safely when no props passed', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Navigation, { props: {} });

    expect(result).toContain('<nav');
    expect(result).not.toContain('data-testid="link"');
    expect(result).not.toContain('data-testid="dropdown"');
  });
});
