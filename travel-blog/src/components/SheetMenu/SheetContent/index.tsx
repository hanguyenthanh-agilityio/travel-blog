import React from 'react';
import { SheetClose } from '@/ui/sheet';
import { NavDropdownMenu, Link } from '@/components';

interface SheetContentProps {
  menu: { href: string; text: string }[];
  otherPages?: { href: string; text: string }[];
}

const SheetContent: React.FC<SheetContentProps> = ({
  menu,
  otherPages = [],
}) => {
  return (
    <nav
      className="mt-6 space-y-4"
      aria-label="Mobile navigation"
      role="navigation"
    >
      {/* Main Menu */}
      {menu.map((item) => (
        <SheetClose asChild key={item.href}>
          <Link
            href={item.href}
            classes="block text-sm hover:text-accent border-b border-solid pb-2"
          >
            {item.text}
          </Link>
        </SheetClose>
      ))}

      {/* Optional Nested Menu */}
      {otherPages.length > 0 && (
        <NavDropdownMenu label="Other Pages" items={otherPages} />
      )}
    </nav>
  );
};

export default SheetContent;
