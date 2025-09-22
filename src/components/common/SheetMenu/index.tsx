import React from 'react';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from '@/components/ui/sheet';
import NavDropdownMenu from '@/components/common/NavDropdownMenu';
import Hamburger from '@/components/icon/hamburger';
import { Button } from '@/components/ui/button';

const menu = [
  { href: '/', text: 'Home' },
  { href: '/blog', text: 'Blog' },
  { href: '/post/example', text: 'Single Post' },
];

const otherPages = [
  { href: '/about', text: 'About' },
  { href: '/contact', text: 'Contact' },
];

export default function MobileSheetMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          aria-label="Open menu"
          className="p-2 rounded-md hover:bg-gray-100 bg-[none]"
        >
          <Hamburger />
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="w-64">
        <nav className="mt-6 space-y-4">
          {menu.map((it) => (
            <SheetClose asChild key={it.href}>
              <a href={it.href} className="block text-sm hover:text-gray-600">
                {it.text}
              </a>
            </SheetClose>
          ))}

          <NavDropdownMenu label="Other Pages" items={otherPages} />
        </nav>
      </SheetContent>
    </Sheet>
  );
}
