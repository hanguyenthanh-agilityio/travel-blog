import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Paginator from '..';

describe('Paginator', () => {
  const totalPages = 5;

  it('renders all page numbers', () => {
    const onPageChange = vi.fn();
    render(
      <Paginator
        currentPage={1}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />,
    );

    for (let i = 1; i <= totalPages; i++) {
      expect(screen.getByText(`${i}`)).toBeInTheDocument();
    }
  });

  it('highlights the active page correctly', () => {
    const onPageChange = vi.fn();
    const currentPage = 3;
    render(
      <Paginator
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />,
    );

    const activePage = screen.getByText(`${currentPage}`);
    expect(activePage).toHaveClass('bg-accent');
    expect(activePage).toHaveClass('text-accent-foreground');
  });

  it('calls onPageChange with correct page when clicked', () => {
    const onPageChange = vi.fn();
    const currentPage = 2;
    render(
      <Paginator
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />,
    );

    const pageToClick = 4;
    const pageButton = screen.getByText(`${pageToClick}`);
    fireEvent.click(pageButton);

    expect(onPageChange).toHaveBeenCalledTimes(1);
    expect(onPageChange).toHaveBeenCalledWith(pageToClick);
  });

  it('does not call onPageChange when clicking the active page', () => {
    const onPageChange = vi.fn();
    const currentPage = 2;
    render(
      <Paginator
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />,
    );

    const pageButton = screen.getByText(`${currentPage}`);
    fireEvent.click(pageButton);

    expect(onPageChange).not.toHaveBeenCalled();
  });

  it('renders with correct aria-labels for accessibility', () => {
    const onPageChange = vi.fn();
    render(
      <Paginator
        currentPage={1}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />,
    );

    for (let i = 1; i <= totalPages; i++) {
      const pageButton = screen.getByLabelText(`Go to page ${i}`);
      expect(pageButton).toBeInTheDocument();
    }
  });
});
