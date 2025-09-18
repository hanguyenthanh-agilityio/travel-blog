import type { Meta, StoryObj } from '@storybook/react-vite';
import NavDropdownMenu from './index';

const meta = {
  title: 'Common/NavDropdownMenu',
  component: NavDropdownMenu,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Show text in dropdown button',
    },
    items: {
      control: 'object',
      description: 'List items in menu dropdown',
    },
  },
  args: {
    label: 'Menu',
    items: [
      { href: '#home', text: 'Home' },
      { href: '#about', text: 'About' },
      { href: '#contact', text: 'Contact' },
    ],
  },
} satisfies Meta<typeof NavDropdownMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Other page',
    items: [
      { href: '/about', text: 'About' },
      { href: '/contact', text: 'Contact' },
    ],
  },
};

export const WithFewItems: Story = {
  args: {
    label: 'Quick Links',
    items: [
      { href: '/dashboard', text: 'Dashboard' },
      { href: '/help', text: 'Help' },
    ],
  },
};
