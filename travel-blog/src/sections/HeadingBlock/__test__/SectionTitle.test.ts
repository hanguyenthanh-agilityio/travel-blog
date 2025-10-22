import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, it, expect } from 'vitest';

// Components
import HeadingBlock from '../index.astro';

describe('HeadingBlock', () => {
  it('renders title only', async () => {
    const container = await AstroContainer.create();

    const props = { title: 'Popular Posts' };
    const result = await container.renderToString(HeadingBlock, { props });

    expect(result).toContain('<h2');
    expect(result).toContain('Popular Posts');

    expect(result).not.toContain('<p');
  });

  it('renders title and subtitle', async () => {
    const container = await AstroContainer.create();

    const props = {
      title: 'Trending Posts',
      subTitle:
        'Discover how innovation and creativity drive meaningful change',
    };
    const result = await container.renderToString(HeadingBlock, { props });

    expect(result).toContain('<h2');
    expect(result).toContain('Trending Posts');
    expect(result).toContain('<p');
    expect(result).toContain(
      'Discover how innovation and creativity drive meaningful change',
    );
  });
});
