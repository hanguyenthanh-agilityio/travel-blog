import React from 'react';

// Components
import { Typography, LinkWrapper, SanityImage } from '@/components';

// Sections
import { AuthorCard } from '@/sections';

// Libs
import { cn } from '@/lib/utils';

interface BlogCardProps {
  slug?: string | { current: string };
  title: string;
  image?: string | { asset?: { _ref?: string; url?: string } };
  author?: {
    name: string;
    role?: string;
    avatar?: string;
    date?: string | Date;
  } | null;
  variant?: 'default' | 'horizontal';
  className?: string;
  titleClassName?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  slug,
  title,
  image,
  author,
  variant = 'default',
  className,
  titleClassName,
}) => {
  const postSlug = typeof slug === 'string' ? slug : slug?.current || '';
  const isHorizontal = variant === 'horizontal';

  return (
    <LinkWrapper href={`/posts/${postSlug}`}>
      <div
        data-testid="blog-card"
        className={cn(
          'h-full overflow-hidden rounded-xl bg-transparent transition-transform duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 hover:scale-[1.01]',
          isHorizontal ? 'flex flex-col md:flex-row gap-4' : 'flex flex-col',
        )}
      >
        {/* Image */}
        {image && (
          <SanityImage
            node={image}
            alt={title}
            className={cn(
              'object-cover rounded-xl w-full',
              isHorizontal && 'md:w-1/2 max-h-blog-md',
              className,
            )}
            loading="lazy"
          />
        )}

        {/* Content */}
        <div
          className={cn(
            'flex flex-col justify-between px-2',
            isHorizontal ? 'flex-1 py-4 flex flex-col justify-between' : 'py-4',
            titleClassName,
          )}
        >
          <Typography as="h3" size="lg" className="mb-4 line-clamp-2">
            {title}
          </Typography>

          {author && <AuthorCard {...author} classAvatar="w-10 h-10" />}
        </div>
      </div>
    </LinkWrapper>
  );
};

export default BlogCard;
