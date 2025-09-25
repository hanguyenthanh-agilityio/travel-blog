import React from 'react';

// Components
import ArrowIcon from '@/components/icon/arrow';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown';
import { Button } from '@/components/ui/button';

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
    <DropdownMenuTrigger asChild>
      <Button
        type="button"
        variant="outline"
        className="border-none p-0 shadow-none text-sm font-normal hover:text-gray-600 hover:bg-[none]"
      >
        {label}
        <ArrowIcon />
      </Button>
    </DropdownMenuTrigger>

    <DropdownMenuContent>
      {items.map((item) => (
        <DropdownMenuItem key={item.href} asChild>
          <a href={item.href}>{item.text}</a>
        </DropdownMenuItem>
      ))}
    </DropdownMenuContent>
  </DropdownMenu>
);

export default NavDropdownMenu;
