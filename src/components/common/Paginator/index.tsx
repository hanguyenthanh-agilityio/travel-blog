import React from 'react';
// Components
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from '@/components/ui/pagination';
import { HOME_PAGE, PAGE_PATH } from '@/constants/route';

// Types
interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath?: string;
}

const Paginator = ({
  currentPage,
  totalPages,
  basePath = PAGE_PATH,
}: PaginationProps) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <Pagination>
      <PaginationContent>
        {pages.map((page) => {
          const href = page === 1 ? HOME_PAGE : `${basePath}/${page}/`;

          return (
            <PaginationItem key={page}>
              <PaginationLink
                href={href}
                isActive={page === currentPage}
                className={`
                  flex h-12 w-12 items-center justify-center rounded-xl text-sm font-medium
                  ${
                    page === currentPage
                      ? 'bg-[#2980b9] text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }
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
