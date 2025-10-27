import React from 'react';

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
  const handlePageClick = (page: number) => (e: React.MouseEvent) => {
    e.preventDefault();
    if (page !== currentPage) {
      onPageChange(page);
    }
  };

  const pageItems = pages.map((page) => ({
    page,
    isActive: page === currentPage,
    onClick: handlePageClick(page),
  }));

  return (
    <Pagination>
      <PaginationContent>
        {pageItems.map(({ page, isActive, onClick }) => (
          <PaginationItem key={page}>
            <PaginationLink
              onClick={onClick}
              isActive={isActive}
              className={`
                flex h-12 w-12 items-center justify-center rounded-xl text-sm font-medium
                ${isActive ? 'bg-[#2980b9] text-white' : 'text-gray-600 hover:bg-gray-100'}
              `}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
      </PaginationContent>
    </Pagination>
  );
};

export default Paginator;
