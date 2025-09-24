import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, it, expect } from 'vitest';
import SocialIcons from '../index.astro';

describe('SocialIcons.astro', () => {
  it('renders social links', async () => {
    const container = await AstroContainer.create();

    const socials = [
      { href: 'https://twitter.com', label: 'Twitter', icon: '/twitter.svg' },
      { href: 'https://github.com', label: 'GitHub', icon: '/github.svg' },
    ];

    const result = await container.renderToString(SocialIcons, {
      props: { socials },
    });

    // Kiểm tra số lượng link
    expect(result.match(/<a /g)?.length).toBe(socials.length);

    // Kiểm tra từng href và alt icon
    socials.forEach((s) => {
      expect(result).toContain(`href="${s.href}"`);
      expect(result).toContain(`alt="${s.label}"`);
      expect(result).toContain(`src="${s.icon}"`);
    });
  });
});
