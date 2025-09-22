import React from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
} from '../sheet';
import { Button } from '@/components/ui/button';

const meta: Meta = {
  title: 'UI/Sheet',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    side: {
      control: { type: 'select' },
      options: ['left', 'right', 'top', 'bottom'],
      description: 'Side where the sheet will appear',
    },
  },
  args: {
    side: 'right',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: any) => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline">Open Sheet</Button>
    </SheetTrigger>
    <SheetContent side={args.side}>
      <SheetHeader>
        <SheetTitle>Are you absolutely sure?</SheetTitle>
        <SheetDescription>
          This action cannot be undone. This will permanently delete your
          account and remove your data from our servers.
        </SheetDescription>
      </SheetHeader>
      <div className="py-4">Custom body content here...</div>
      <SheetFooter>
        <SheetClose asChild>
          <Button variant="outline">Cancel</Button>
        </SheetClose>
        <Button variant="destructive">Confirm</Button>
      </SheetFooter>
    </SheetContent>
  </Sheet>
);

export const Default: Story = {
  render: Template,
};

export const Left: Story = {
  render: Template,
  args: { side: 'left' },
};

export const Right: Story = {
  render: Template,
  args: { side: 'right' },
};

export const Top: Story = {
  render: Template,
  args: { side: 'top' },
};

export const Bottom: Story = {
  render: Template,
  args: { side: 'bottom' },
};
