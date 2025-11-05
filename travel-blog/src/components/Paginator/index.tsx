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
}

const Paginator: React.FC<PaginatorProps> = ({ currentPage, totalPages }) => {
  return (
    <Pagination>
      <PaginationContent className="justify-center mt-8 gap-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
          const isActive = page === currentPage;
          return (
            <PaginationItem key={page}>
              <PaginationLink
                href={`?page=${page}#trending`}
                isActive={isActive}
                className={`flex h-12 w-12 items-center justify-center rounded-xl border text-sm font-medium transition
                  ${
                    isActive
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border-gray-300'
                  }`}
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
