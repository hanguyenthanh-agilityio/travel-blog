import React from 'react';

// Icons
import { ArrowIcon } from '@/icons';

// UI
import { Button } from '@/ui/button';

// Components
// import Link from '@/components/Link';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/ui';

interface ItemProps {
  href: string;
  text: string;
}

interface NavDropdownMenuProps {
  label: string;
  items: ItemProps[];
}

const NavDropdownMenu: React.FC<NavDropdownMenuProps> = ({ label, items }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          type="button"
          variant="outline"
          aria-label={`Open ${label} menu`}
          className="border-none p-0 shadow-none text-base font-normal hover:bg-[none] hover:text-accent cursor-pointer flex items-center gap-1"
        >
          {label}
          <ArrowIcon />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        side="bottom"
        align="start"
        sideOffset={4}
        className="absolute z-50 overflow-auto max-h-[calc(100vh-80px)] w-48 bg-card rounded-md shadow-lg p-1"
      >
        {items.map((item) => (
          <DropdownMenuItem key={item.href} asChild>
            {/* <Link
              href={item.href}
              classes="flex items-center p-2 hover:text-accent rounded-md"
              aria-label={`Go to ${item.text} page`}
            > */}
            {item.text}
            {/* </Link> */}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavDropdownMenu;
