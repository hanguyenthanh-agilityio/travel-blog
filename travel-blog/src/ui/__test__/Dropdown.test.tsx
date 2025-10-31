import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
} from '../dropdown';

describe('DropdownMenu Components', () => {
  it('renders checkbox item correctly', async () => {
    const user = userEvent.setup();
    render(
      <DropdownMenu>
        <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuCheckboxItem checked>Check Me</DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>,
    );

    await user.click(screen.getByText('Menu'));
    const checkbox = screen.getByText(/Check Me/i);
    expect(checkbox).toBeInTheDocument();
    expect(checkbox.closest('div')?.getAttribute('aria-checked')).toBe('true');
  });

  it('renders radio items correctly', async () => {
    const user = userEvent.setup();
    render(
      <DropdownMenu>
        <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuRadioItem value="1">Option 1</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="2">Option 2</DropdownMenuRadioItem>
        </DropdownMenuContent>
      </DropdownMenu>,
    );

    await user.click(screen.getByText('Menu'));
    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeInTheDocument();
  });

  it('renders submenu and allows clicking subtrigger', async () => {
    const user = userEvent.setup();
    render(
      <DropdownMenu>
        <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Sub Menu</DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem>Sub Item 1</DropdownMenuItem>
              <DropdownMenuItem>Sub Item 2</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        </DropdownMenuContent>
      </DropdownMenu>,
    );

    await user.click(screen.getByText('Menu'));
    await user.click(screen.getByText('Sub Menu'));
    expect(screen.getByText('Sub Item 1')).toBeInTheDocument();
    expect(screen.getByText('Sub Item 2')).toBeInTheDocument();
  });

  it('renders label with text and inset class', () => {
    render(
      <DropdownMenuLabel inset className="custom-label">
        Label Text
      </DropdownMenuLabel>,
    );
    const label = screen.getByText('Label Text');
    expect(label).toBeInTheDocument();
    expect(label).toHaveClass('custom-label', 'pl-8');
  });

  it('renders separator with custom class', () => {
    render(<DropdownMenuSeparator className="custom-separator" />);
    const separator = screen.getByRole('separator');
    expect(separator).toBeInTheDocument();
    expect(separator).toHaveClass('custom-separator');
  });

  it('renders shortcut span with text and custom class', () => {
    render(
      <DropdownMenuShortcut className="custom-shortcut">
        Ctrl+S
      </DropdownMenuShortcut>,
    );
    const shortcut = screen.getByText('Ctrl+S');
    expect(shortcut).toBeInTheDocument();
    expect(shortcut).toHaveClass('custom-shortcut');
  });
});
