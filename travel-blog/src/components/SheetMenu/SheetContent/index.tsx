import React from 'react';
import { SheetClose } from '@/ui/sheet';
import { NavDropdownMenu } from '@/components';

interface SheetContentProps {
  menuItems: { href: string; text: string }[];
  otherPages?: { href: string; text: string }[];
}

export default function SheetContent({
  menuItems,
  otherPages = [],
}: SheetContentProps) {
  return (
    <nav
      className="mt-6 space-y-4"
      aria-label="Mobile navigation"
      role="navigation"
    >
      {menuItems.map((item) => (
        <SheetClose asChild key={item.href}>
          <a
            href={item.href}
            className="block text-sm border-b border-solid pb-2 hover:text-accent"
          >
            {item.text}
          </a>
        </SheetClose>
      ))}

      {otherPages.length > 0 && (
        <NavDropdownMenu label="Other Pages" items={otherPages} />
      )}
    </nav>
  );
}
