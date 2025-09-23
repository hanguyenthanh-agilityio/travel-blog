// @vitest-environment happy-dom
import { describe, it, expect } from 'vitest';
import { renderAstroComponent } from '@/test/helpers';

const Link = (await import('../index.astro')).default;

describe('Link.astro', () => {
  it('renders internal link', async () => {
    const el = await renderAstroComponent(Link, {
      props: { href: '/about', text: 'About us' },
    });

    const anchor = el.querySelector('a');
    expect(anchor).not.toBeNull();
    expect(anchor?.getAttribute('href')).toBe('/about');
    expect(anchor?.getAttribute('target')).toBe('_self');
    expect(anchor?.textContent).toContain('About us');
  });

  it('renders external link with proper rel/target', async () => {
    const el = await renderAstroComponent(Link, {
      props: {
        href: 'https://example.com',
        text: 'External',
        external: true,
      },
    });

    const anchor = el.querySelector('a');
    expect(anchor).not.toBeNull();
    expect(anchor?.getAttribute('href')).toBe('https://example.com');
    expect(anchor?.getAttribute('target')).toBe('_blank');
    expect(anchor?.getAttribute('rel')).toBe('noopener noreferrer');
    expect(anchor?.textContent).toContain('External');
  });
});
