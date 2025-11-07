import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, it, expect } from 'vitest';
import { Link } from '@/components';

describe('Link.astro', () => {
  it('renders basic link with text and href', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Link, {
      props: { href: '/about', text: 'About' },
    });

    expect(result).toContain('<a');
    expect(result).toContain('href="/about"');
    expect(result).toContain('About');
    expect(result).toContain('aria-label="About"');
  });

  it('renders external link with proper target and rel', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Link, {
      props: { href: 'https://example.com', text: 'Example', external: true },
    });

    expect(result).toContain('target="_blank"');
    expect(result).toContain('rel="noopener noreferrer"');
    expect(result).toContain('Example');
  });

  it('renders link with slot content', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Link, {
      props: { href: '/home' },
      slots: { default: '<span data-testid="slot">Slot Content</span>' },
    });

    expect(result).toContain('Slot Content');
    expect(result).toContain('data-testid="slot"');
  });

  it('uses provided label for aria-label', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Link, {
      props: { href: '/test', text: 'Test', label: 'Custom Label' },
    });

    expect(result).toContain('aria-label="Custom Label"');
  });

  it('defaults target to _self and omits rel for internal links', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Link, {
      props: { href: '/internal', text: 'Internal', external: false },
    });

    expect(result).toContain('target="_self"');
    expect(result).not.toContain('rel=');
  });
});
