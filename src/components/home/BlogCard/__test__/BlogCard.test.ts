import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, it, expect } from 'vitest';
import BlogCard from '../index.astro';

vi.mock('@/components/home/AuthorCard', () => ({
  default: (props: any) => `<div>Author: ${props.name}</div>`,
}));

describe('BlogCard', () => {
  it.skip('renders horizontal variant', async () => {
    const container = await AstroContainer.create();

    const props = {
      id: '456',
      title: 'Horizontal Blog',
      image: '/horizontal.jpg',
      author: { name: 'Jane Doe', avatar: '/avatar2.jpg' },
      variant: 'horizontal',
    };

    const result = await container.renderToString(BlogCard, { props });

    expect(result).toContain('flex flex-col md:flex-row');
    expect(result).toContain('Horizontal Blog');
    expect(result).toContain('src="/horizontal.jpg"');
    expect(result).toContain('Author: Jane Doe');
  });
});
