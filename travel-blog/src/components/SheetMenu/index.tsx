import React from 'react';

// Components
import { SheetContent } from '@/components';

// UI
import {
  Button,
  Sheet,
  SheetTrigger,
  SheetContent as UISheetContent,
} from '@/ui';

// Icons
import { Hamburger } from '@/icons';

// Contents
import { menu, otherPages } from '@/mockData/blog';

export default function MobileSheetMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          aria-label="Open menu"
          variant="ghost"
          className="p-2 hover:bg-[none] hover:text-[none] cursor-pointer"
        >
          <Hamburger />
        </Button>
      </SheetTrigger>

      <UISheetContent
        side="left"
        className="w-64"
        aria-label="Mobile menu panel"
      >
        <SheetContent menu={menu} otherPages={otherPages} />
      </UISheetContent>
    </Sheet>
  );
}
