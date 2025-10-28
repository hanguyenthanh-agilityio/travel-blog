import React from 'react';
import { urlForImage } from '@/sanity/url-for-image';

export interface SanityImageAsset {
  _ref?: string;
  _type?: 'reference';
  url?: string;
  metadata?: {
    dimensions?: {
      width: number;
      height: number;
    };
  };
}

export interface SanityImageType {
  _type?: 'image';
  asset?: SanityImageAsset;
  alt?: string;
}

interface SanityImageProps {
  node: SanityImageType | string | null | undefined;
  className?: string;
  width?: number;
  height?: number;
  srcSetWidths?: number[];
  sizes?: string;
  fallbackAspectRatio?: number;
  loading?: 'lazy' | 'eager' | 'auto';
  priority?: boolean;
}

const SanityImage: React.FC<SanityImageProps> = ({
  node,
  className = '',
  width = 1200,
  height = 800,
  srcSetWidths = [320, 640, 960, 1280, 1600, 1920],
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px',
  fallbackAspectRatio = 16 / 9,
  priority = false,
}) => {
  const imageNode: SanityImageType | null =
    typeof node === 'string' ? { asset: { url: node } } : (node ?? null);

  if (!imageNode || !imageNode.asset?.url) {
    return (
      <div
        className={`bg-gray-100 rounded-xl ${className}`}
        style={{ aspectRatio: fallbackAspectRatio }}
      />
    );
  }

  const image = urlForImage(imageNode, { width, quality: 80 });

  const intrinsicWidth = imageNode.asset.metadata?.dimensions?.width || width;
  const intrinsicHeight =
    imageNode.asset.metadata?.dimensions?.height ||
    height ||
    width / fallbackAspectRatio;

  const srcSet = srcSetWidths
    .map(
      (w) =>
        `${urlForImage(imageNode)
          .width(w)
          .fit('max')
          .auto('format')
          .quality(80)
          .url()} ${w}w`,
    )
    .join(', ');

  return (
    <img
      src={image.url()}
      srcSet={srcSet}
      sizes={sizes}
      width={intrinsicWidth}
      height={intrinsicHeight}
      alt={imageNode.alt || ''}
      title={imageNode.alt || undefined}
      className={className}
      decoding="async"
      fetchPriority={priority ? 'high' : 'auto'}
      loading={priority ? 'eager' : 'lazy'}
      style={{ aspectRatio: intrinsicWidth / intrinsicHeight }}
    />
  );
};

export default SanityImage;
