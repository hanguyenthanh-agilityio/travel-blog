import React from 'react';

// Icons
import { ArrowIcon } from '@/icons';

// UI
import { Button } from '@/ui/button';
import Dropdown from '@/ui/dropdown';

// Components
import { Link } from '@/components';

interface ItemProps {
  href: string;
  text: string;
}

const {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} = Dropdown;

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
