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
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  // Handler click page
  const handlePageClick = useCallback(
    (page: number, e: React.MouseEvent) => {
      e.preventDefault();
      if (page !== currentPage) onPageChange(page);
    },
    [currentPage, onPageChange],
  );

  const pageHandlers = useMemo(() => {
    const handlers: Record<number, (e: React.MouseEvent) => void> = {};
    pages.forEach((page) => {
      handlers[page] = (e) => handlePageClick(page, e);
    });
    return handlers;
  }, [pages, handlePageClick]);

  return (
    <Pagination>
      <PaginationContent>
        {pages.map((page) => {
          const isActive = page === currentPage;
          return (
            <PaginationItem key={page}>
              <PaginationLink
                href={`?page=${page}`}
                onClick={pageHandlers[page]}
                isActive={isActive}
                aria-label={`Go to page ${page}`}
                className={`
                  flex h-12 w-12 items-center justify-center rounded-xl text-sm font-medium
                  ${isActive ? 'bg-accent text-accent-foreground' : 'text-gray-600 hover:bg-gray-100'}
                `}
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
