import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import SanityImage, { type SanityImageType } from '../SanityImage';

const meta: Meta = {
  title: 'UI/SanityImage',
  component: SanityImage,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Template cơ bản
const Template = (args: any) => <SanityImage {...args} />;

// Story với URL string
export const FromUrl: Story = {
  render: Template,
  args: {
    node: 'https://via.placeholder.com/800x600.png?text=From+URL',
    width: 800,
    height: 600,
    className: 'rounded-lg',
    priority: true,
  },
};

// Story với Sanity image object
const sampleSanityImage: SanityImageType = {
  _type: 'image',
  alt: 'Sample Sanity Image',
  asset: {
    _type: 'reference',
    url: 'https://via.placeholder.com/1200x800.png?text=Sanity+Image',
    metadata: {
      dimensions: {
        width: 1200,
        height: 800,
      },
    },
  },
};

export const FromSanityObject: Story = {
  render: Template,
  args: {
    node: sampleSanityImage,
    width: 1200,
    height: 800,
    className: 'rounded-lg',
  },
};

// Story fallback khi node null
export const Fallback: Story = {
  render: Template,
  args: {
    node: null,
    fallbackAspectRatio: 16 / 9,
    className: 'rounded-lg',
  },
};
