import type { PortableTextBlock } from 'sanity';

export function blockToPlainText(blocks?: PortableTextBlock[]): string {
  if (!blocks || !Array.isArray(blocks)) return '';
  return blocks
    .map((block) => {
      if (
        block &&
        typeof block === 'object' &&
        'children' in block &&
        Array.isArray((block as any).children)
      ) {
        return (block as { children: { text: string }[] }).children
          .map((child) =>
            typeof child === 'object' && 'text' in child
              ? String(child.text)
              : '',
          )
          .join('');
      }
      return '';
    })
    .join(' ');
}
