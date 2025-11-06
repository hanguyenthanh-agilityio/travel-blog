import React, { useMemo, useState } from 'react';

// Sections
import { BlogGrid } from '@/sections';

// Components
import { Paginator } from '@/components';

// Libs
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

  const currentPosts = useMemo(() => {
    const start = (currentPage - 1) * postsPerPage;
    const end = currentPage * postsPerPage;

    return posts.slice(start, end).map((post) => ({
      ...post,
      slug:
        typeof post.slug === 'string' ? post.slug : (post.slug?.current ?? ''),
      image:
        typeof post.image === 'string'
          ? post.image
          : (post.image?.asset?.url ?? ''),
      author: {
        name: post.author?.name ?? 'Unknown',
        role: post.author?.role ?? '',
        date: post.author?.date ?? '',
        avatar:
          typeof post.author?.avatar === 'string'
            ? post.author.avatar
            : (post.author?.avatar?.asset?.url ?? ''),
      },
    }));
  }, [posts, currentPage, postsPerPage]);

  return (
    <>
      <BlogGrid posts={currentPosts} column={3} className="mt-8" />

      {totalPages > 1 && (
        <div className="mt-10 flex justify-center">
          <Paginator
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      )}
    </>
  );
};

export default TrendingPosts;
