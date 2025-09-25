import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, it, expect, vi } from 'vitest';

vi.mock('../../AuthorCard/index.tsx', () => {
  return {
    __esModule: true,
    default: (props: any) =>
      `<div data-mock-author>Mocked AuthorCard ${props?.name ?? ''}</div>`,
  };
});

import BlogHero from '../index.astro';

describe('BlogHero', () => {
  it.skip('renders title and image correctly', async () => {
    const container = await AstroContainer.create();
    const props = {
      id: '123',
      title: 'Hello:World',
      image: '/hero.jpg',
      author: { name: 'John Doe', avatar: '/avatar.jpg' },
    };
    const result = await container.renderToString(BlogHero, { props });

    expect(result).toContain('src="/hero.jpg"');
    expect(result).toContain('Hello:');
    expect(result).toContain('World');
    expect(result).toContain('data-mock-author');
  });
});
