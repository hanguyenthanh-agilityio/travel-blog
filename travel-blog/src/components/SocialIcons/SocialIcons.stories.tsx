import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import SocialIcons, { type SocialIcon } from '../SocialIcons';

const meta: Meta = {
  title: 'UI/SocialIcons',
  component: SocialIcons,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Sample socials
const sampleSocials: SocialIcon[] = [
  {
    label: 'Facebook',
    href: 'https://facebook.com',
    icon: 'https://via.placeholder.com/24x24.png?text=F',
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com',
    icon: 'https://via.placeholder.com/24x24.png?text=T',
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com',
    icon: 'https://via.placeholder.com/24x24.png?text=I',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: '', // fallback demo
  },
];

// Template
const Template = (args: any) => <SocialIcons {...args} />;

export const Default: Story = {
  render: Template,
  args: {
    socials: sampleSocials,
    dark: false,
    containerClassName: 'bg-gray-50 p-4 rounded-lg',
    linkClassName: '',
  },
};

export const DarkMode: Story = {
  render: Template,
  args: {
    socials: sampleSocials,
    dark: true,
    containerClassName: 'bg-gray-800 p-4 rounded-lg',
    linkClassName: '',
  },
};
