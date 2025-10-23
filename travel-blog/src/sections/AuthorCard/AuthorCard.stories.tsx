import type { Meta, StoryObj } from '@storybook/react-vite';

// Components
import AuthorCard from './index';

const meta = {
  title: 'Common/AuthorCard',
  component: AuthorCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    name: {
      control: 'text',
      description: 'name',
    },
    role: {
      control: 'text',
      description: 'role',
    },
    avatar: {
      control: 'text',
      description: 'avatar',
    },
    date: {
      control: 'text',
      description: 'date',
    },
    dark: {
      control: 'boolean',
      description: 'Dark mode',
    },
    layout: {
      control: { type: 'select' },
      options: ['card', 'hero'],
      description: 'layout',
    },
  },
  args: {
    name: 'Jane Doe',
    role: 'Content Writer',
    avatar: 'https://i.pravatar.cc/100?img=5',
    date: 'Sep 17, 2025',
    dark: false,
    layout: 'card',
  },
} satisfies Meta<typeof AuthorCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DarkMode: Story = {
  args: {
    dark: true,
  },
};

export const HeroLayout: Story = {
  args: {
    layout: 'hero',
  },
};
