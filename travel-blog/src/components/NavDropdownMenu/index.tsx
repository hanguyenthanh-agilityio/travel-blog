import React from 'react';

// Icons
import { ArrowIcon } from '@/icons';

// UI
import { Button } from '@/ui/button';

// Components
import Link from '@/components/Link';
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
        aria-label={`Open ${label} menu`}
        className="border-none p-0 shadow-none text-base font-normal hover:bg-[none] hover:text-accent cursor-pointer"
      >
        {label}
        <ArrowIcon />
      </Button>
    </DropdownMenuTrigger>

    <DropdownMenuContent>
      {items.map((item) => (
        <DropdownMenuItem key={item.href} asChild>
          <Link
            href={item.href}
            classes="flex flex-col p-1 hover:text-accent"
            aria-label={`Go to ${item.text} page`}
          >
            {item.text}
          </Link>
        </DropdownMenuItem>
      ))}
    </DropdownMenuContent>
  </DropdownMenu>
);

export default NavDropdownMenu;
