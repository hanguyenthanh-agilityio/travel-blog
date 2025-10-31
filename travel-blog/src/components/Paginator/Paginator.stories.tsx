import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import Paginator from '../Paginator';

const meta: Meta = {
  title: 'UI/Paginator',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const Template = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  return (
    <Paginator
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={(page) => setCurrentPage(page)}
    />
  );
};

export const Default: Story = {
  render: Template,
};
