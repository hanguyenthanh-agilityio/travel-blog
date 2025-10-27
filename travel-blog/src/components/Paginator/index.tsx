import React from 'react';
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

  return (
    <Pagination>
      <PaginationContent>
        {pages.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              onClick={(e) => {
                e.preventDefault();
                onPageChange(page);
              }}
              isActive={page === currentPage}
              className={`flex h-12 w-12 items-center justify-center rounded-xl text-sm font-medium ${
                page === currentPage
                  ? 'bg-[#2980b9] text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
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
