import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, it, expect } from 'vitest';
import Link from '../index.astro';

describe('Link.astro', () => {
  it('renders internal link', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Link, {
      props: { href: '/about', text: 'About us' },
    });

    expect(result).toContain('<a');
    expect(result).toContain('href="/about"');
    expect(result).toContain('About us');
  });

  it('renders external link with rel and target', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Link, {
      props: {
        href: 'https://example.com',
        text: 'External',
        external: true,
      },
    });

    expect(result).toContain('href="https://example.com"');
    expect(result).toContain('target="_blank"');
    expect(result).toContain('rel="noopener noreferrer"');
    expect(result).toContain('External');
  });
});
