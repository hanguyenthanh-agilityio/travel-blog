import { sanityClient } from 'sanity:client';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityAsset } from '@sanity/image-url/lib/types/types';
import type { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder';

export const imageBuilder = imageUrlBuilder(sanityClient);

interface UrlForImageOptions {
  width?: number;
  height?: number;
  quality?: number;
  fit?: 'clip' | 'crop' | 'fill' | 'max' | 'scale' | 'min';
  format?: 'webp' | 'jpg' | 'png' | 'auto';
}

export function urlForImage(
  source: SanityAsset,
  options: UrlForImageOptions = {},
): ImageUrlBuilder {
  const { width, height, quality = 80, fit = 'max', format = 'auto' } = options;

  let builder = imageBuilder.image(source).fit(fit).quality(quality);

  if (format === 'auto') {
    builder = builder.auto('format');
  } else {
    builder = builder.format(format);
  }

  if (width) builder = builder.width(width);
  if (height) builder = builder.height(height);

  return builder;
}
