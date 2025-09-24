import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, it, expect } from 'vitest';
import BlogCard from '../index.astro';

describe('BlogCard.astro', () => {
  it('renders default blog card', async () => {
    const container = await AstroContainer.create();

    const props = {
      id: '123',
      title: 'Test Blog',
      image: '/test-image.jpg',
      author: { name: 'John Doe', avatar: '/avatar.jpg' },
      variant: 'default',
    };

    const result = await container.renderToString(BlogCard, { props });

    expect(result).toContain('href="/posts/123"');
    expect(result).toContain('Test Blog');
    expect(result).toContain('src="/test-image.jpg"');

    // Kiểm tra author
    expect(result).toContain('John Doe');
    expect(result).toContain('src="/avatar.jpg"');
  });

  it('renders horizontal variant', async () => {
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
  });
});
