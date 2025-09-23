import type { ComponentProps } from 'astro/types';
import {
  experimental_AstroContainer as AstroContainer,
  type ContainerRenderOptions,
} from 'astro/container';

type AstroComponentFactory = Parameters<AstroContainer['renderToString']>[0];

type ComponentContainerRenderOptions<T extends AstroComponentFactory> = Omit<
  ContainerRenderOptions,
  'props'
> & {
  // @ts-expect-error typing mismatch trong Astro
  props?: ComponentProps<T>;
};

export async function renderAstroComponent<T extends AstroComponentFactory>(
  Component: T,
  options: ComponentContainerRenderOptions<T> = {},
) {
  const container = await AstroContainer.create();
  const result = await container.renderToString(Component, options);

  const div = document.createElement('div');
  div.innerHTML = result;
  return div;
}
