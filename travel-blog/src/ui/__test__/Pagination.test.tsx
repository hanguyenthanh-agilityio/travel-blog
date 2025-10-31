import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from '../pagination';

describe('Pagination Components', () => {
  it('renders Pagination container', () => {
    render(<Pagination data-testid="pagination" />);
    expect(screen.getByTestId('pagination')).toBeInTheDocument();
  });

  it('renders PaginationContent with children', () => {
    render(
      <PaginationContent>
        <PaginationItem>Item 1</PaginationItem>
        <PaginationItem>Item 2</PaginationItem>
      </PaginationContent>,
    );
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });

  it('renders PaginationLink with active state', () => {
    render(<PaginationLink isActive>1</PaginationLink>);
    const link = screen.getByText('1');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('aria-current', 'page');
  });

  it('renders PaginationPrevious correctly', () => {
    render(<PaginationPrevious />);
    const prev = screen.getByLabelText('Go to previous page');
    expect(prev).toBeInTheDocument();
    expect(prev).toHaveTextContent('Previous');
  });

  it('renders PaginationNext correctly', () => {
    render(<PaginationNext />);
    const next = screen.getByLabelText('Go to next page');
    expect(next).toBeInTheDocument();
    expect(next).toHaveTextContent('Next');
  });

  it('renders PaginationEllipsis with icon and sr-only text', () => {
    render(<PaginationEllipsis />);
    // The icon itself may not have a role, so fallback to SR-only text
    expect(screen.getByText('More pages')).toBeInTheDocument();
  });

  it('PaginationLink handles clicks', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    render(<PaginationLink onClick={handleClick}>2</PaginationLink>);

    await user.click(screen.getByText('2'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
