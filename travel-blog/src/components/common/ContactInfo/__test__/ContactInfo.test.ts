import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, it, expect } from 'vitest';

// Components
import InfoGrid from '../index.astro';

describe('InfoGrid.astro', () => {
  const items = [
    { label: 'Name', value: 'Astro' },
    { label: 'Framework', value: 'JSX + Islands' },
    { label: 'Version', value: '2.0' },
  ];

  it('renders all items', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(InfoGrid, {
      props: { items },
    });

    // Check that each label/value pair appears in the HTML
    items.forEach((item) => {
      expect(result).toContain(item.label);
      expect(result).toContain(item.value);
    });

    // Basic structure check
    expect(result).toContain('<div');
    expect(result).toContain('grid');
  });
});
