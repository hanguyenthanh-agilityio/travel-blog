import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { DropdownMenu, DropdownMenuTrigger } from '../dropdown';

describe('DropdownMenu', () => {
  it('renders trigger', () => {
    render(
      <DropdownMenu>
        <DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
      </DropdownMenu>,
    );

    expect(screen.getByText('Open Menu')).toBeInTheDocument();
  });
});
