import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, it, expect } from 'vitest';
import Footer from '../index.astro';
import { socials, contactItems, bottomLinks } from '@/mockData/blog';

describe('Footer.astro', () => {
  it.skip('renders social icons', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Footer);

    socials.forEach((s) => {
      expect(result).toContain(s.href);
      expect(result).toContain(s.label);
    });
  });

  it.skip('renders contact info', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Footer);

    contactItems.forEach((item) => {
      expect(result).toContain(item.label);
      expect(result).toContain(item.value);
    });
  });

  it.skip('renders bottom links', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Footer);

    bottomLinks.forEach((link) => {
      expect(result).toContain(link.href);
      expect(result).toContain(link.text);
    });
  });

  it.skip('renders copyright year', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Footer);

    const year = new Date().getFullYear().toString();
    expect(result).toContain(year);
  });
});
