import React from 'react';

// Components
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from '@/components/ui/sheet';
import { NavDropdownMenu } from '@/components';
import Hamburger from '@/components/icon/hamburger';
import { Button } from '@/components/ui/button';
import Link from '@/components/ui/link';

// Contents
import { menu, otherPages } from '@/contents/blog';

export default function MobileSheetMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          aria-label="Open menu"
          variant="ghost"
          className="p-2 !border-[none] rounded-[none] hover:bg-gray-100 bg-[none]"
        >
          <Hamburger />
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="w-64">
        <nav className="mt-6 space-y-4">
          {menu.map((it) => (
            <SheetClose asChild key={it.href}>
              <Link href={it.href} classes="block text-sm hover:text-gray-600">
                {it.text}
              </Link>
            </SheetClose>
          ))}

          <NavDropdownMenu label="Other Pages" items={otherPages} />
        </nav>
      </SheetContent>
    </Sheet>
  );
}
