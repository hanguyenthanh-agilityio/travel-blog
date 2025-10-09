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
import Link from '@/components/ui/link';

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
      <div className="border-b border-solid lg:border-b-0">
        <Button
          type="button"
          variant="outline"
          className="border-none p-0 shadow-none text-base font-normal hover:text-gray-600 hover:bg-[none] hover:text-accent cursor-pointer"
        >
          {label}
          <ArrowIcon />
        </Button>
      </div>
    </DropdownMenuTrigger>

    <DropdownMenuContent>
      {items.map((item) => (
        <DropdownMenuItem key={item.href} asChild>
          <Link href={item.href} classes="flex flex-col p-1 hover:text-accent">
            {item.text}
          </Link>
        </DropdownMenuItem>
      ))}
    </DropdownMenuContent>
  </DropdownMenu>
);

export default NavDropdownMenu;
