import React from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface ItemProps {
  href: string;
  text: string;
}

const NavDropdownMenu = ({
  label,
  items,
}: {
  label: string;
  items: ItemProps[];
}) => (
  <DropdownMenu>
    <DropdownMenuTrigger>
      <Button
        variant="outline"
        className="border-none p-0 shadow-none text-sm font-normal"
      >
        {label}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </Button>
    </DropdownMenuTrigger>

    <DropdownMenuContent>
      {items.map((item) => (
        <DropdownMenuItem key={item.href}>
          <a href={item.href}>{item.text}</a>
        </DropdownMenuItem>
      ))}
    </DropdownMenuContent>
  </DropdownMenu>
);

export default NavDropdownMenu;
