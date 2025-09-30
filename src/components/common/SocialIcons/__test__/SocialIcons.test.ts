import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, it, expect } from 'vitest';

// Components
import SocialIcons from '../index.astro';

describe('SocialIcons.astro', () => {
  it.skip('renders social links', async () => {
    const container = await AstroContainer.create();

    const socials = [
      { href: 'https://twitter.com', label: 'Twitter', icon: '/twitter.svg' },
      { href: 'https://github.com', label: 'GitHub', icon: '/github.svg' },
    ];

    const result = await container.renderToString(SocialIcons, {
      props: { socials },
    });

    expect(result.match(/<a /g)?.length).toBe(socials.length);

    socials.forEach((s) => {
      expect(result).toContain(`href="${s.href}"`);
      expect(result).toContain(`alt="${s.label}"`);
      expect(result).toContain(`src="${s.icon}"`);
    });
  });
});
