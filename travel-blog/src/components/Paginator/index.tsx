import React, { useCallback, useMemo } from 'react';

// UIs
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from '@/ui/pagination';

interface PaginatorProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Paginator: React.FC<PaginatorProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pages = useMemo(
    () => Array.from({ length: totalPages }, (_, i) => i + 1),
    [totalPages],
  );

  const handlePageClick = useCallback(
    (page: number, e: React.MouseEvent) => {
      e.preventDefault();
      if (page !== currentPage) onPageChange(page);
    },
    [currentPage, onPageChange],
  );

  return (
    <Pagination role="navigation" aria-label="Pagination">
      <PaginationContent>
        {pages.map((page) => {
          const isActive = page === currentPage;
          return (
            <PaginationItem key={page}>
              <PaginationLink
                href={`?page=${page}`}
                onClick={(e) => handlePageClick(page, e)}
                aria-current={isActive ? 'page' : undefined}
                aria-label={`Go to page ${page}`}
                className={[
                  'flex h-10 w-10 items-center justify-center rounded-xl text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-accent text-accent-foreground hover:text-white'
                    : 'text-gray-600 hover:bg-gray-100  focus:outline-none',
                ].join(' ')}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          );
        })}
      </PaginationContent>
    </Pagination>
  );
};

export default Paginator;
