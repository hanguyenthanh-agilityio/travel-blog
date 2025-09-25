import React from 'react';

// Components
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from '@/components/ui/pagination';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath?: string;
}

const PaginationWrapper = ({
  currentPage,
  totalPages,
  basePath = '/',
}: PaginationProps) => {
  const total = Number(totalPages);
  const pages = Array.from({ length: total }, (_, i) => i + 1);

  const normalizePath = (path: string) =>
    path.endsWith('/') ? path.slice(0, -1) : path;

  const base = normalizePath(basePath);

  return (
    <Pagination>
      <PaginationContent>
        {pages.map((page) => {
          const href = `${base}/${page}/`;

          return (
            <PaginationItem key={page}>
              <PaginationLink
                href={href}
                isActive={page === Number(currentPage)}
                className={`
                  flex h-12 w-12 items-center justify-center rounded-xl text-sm font-medium
                  ${
                    page === Number(currentPage)
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

export default PaginationWrapper;
