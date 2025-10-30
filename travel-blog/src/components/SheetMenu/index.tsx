import React from 'react';
import { Sheet, SheetTrigger, SheetContent as UISheetContent } from '@/ui';
import { Button } from '@/ui/button';
import { Hamburger } from '@/icons';
import SheetContent from './SheetContent';

interface SheetMenuProps {
  menuItems: { href: string; text: string }[];
  otherPages?: { href: string; text: string }[];
}

const SheetMenu = ({ menuItems, otherPages = [] }: SheetMenuProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          aria-label="Open menu"
          variant="ghost"
          className="p-2 hover:bg-transparent"
        >
          <Hamburger />
        </Button>
      </SheetTrigger>

      <UISheetContent
        side="left"
        className="w-64"
        aria-label="Mobile navigation drawer"
      >
        <SheetContent menuItems={menuItems} otherPages={otherPages} />
      </UISheetContent>
    </Sheet>
  );
};

export default SheetMenu;
