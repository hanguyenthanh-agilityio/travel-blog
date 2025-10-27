import React from 'react';
import { BlogCard } from '@/sections';
import type { Blog } from '@/types/blog';

interface BlogGridProps {
  posts: Blog[];
  column?: number | string;
  className?: string;
}

const BlogGrid: React.FC<BlogGridProps> = ({
  posts,
  column = 3,
  className = '',
}) => {
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${column} gap-10 ${className}`}
    >
      {posts.map((post) => (
        <BlogCard
          key={post.title}
          {...post}
          variant={(post.variant as 'default' | 'horizontal') || 'default'}
          className="h-blog-sm md:h-blog-md xl:h-blog-lg"
        />
      ))}
    </div>
  );
};

export default BlogGrid;
