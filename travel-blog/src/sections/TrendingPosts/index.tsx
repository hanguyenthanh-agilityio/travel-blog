import React, { useState } from 'react';
import { BlogGrid } from '@/sections';
import { Paginator } from '@/components';
import type { PostSummary } from '@/lib/schema';

interface TrendingPostsProps {
  posts: PostSummary[];
  postsPerPage?: number;
}

const TrendingPosts: React.FC<TrendingPostsProps> = ({
  posts,
  postsPerPage = 6,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.max(1, Math.ceil(posts.length / postsPerPage));
  const start = (currentPage - 1) * postsPerPage;
  const end = currentPage * postsPerPage;

  const currentPosts = posts.slice(start, end).map((post) => ({
    ...post,
    slug: typeof post.slug === 'string' ? post.slug : post.slug?.current || '',
    image:
      typeof post.image === 'string'
        ? post.image
        : post.image?.asset?.url || '',
    author: post.author
      ? {
          name: post.author.name || 'Unknown',
          role: post.author.role || '',
          avatar: post.author.avatar || '',
          date: post.author.date || '',
        }
      : { name: 'Unknown', role: '', avatar: '', date: '' },
  }));

  return (
    <>
      <BlogGrid
        posts={currentPosts.map((post) => ({
          ...post,
          author: {
            ...post.author,
            avatar:
              typeof post.author.avatar === 'string'
                ? post.author.avatar
                : post.author.avatar?.asset?.url || '',
          },
        }))}
        column={3}
        className="mt-8"
      />

      <div className="mt-10 flex justify-center">
        <Paginator
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </>
  );
};

export default TrendingPosts;
