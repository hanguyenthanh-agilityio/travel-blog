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
  });
});
