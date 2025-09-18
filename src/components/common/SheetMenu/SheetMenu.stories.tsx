import type { Meta, StoryObj } from '@storybook/react-vite';
import MobileSheetMenu from './index';

const meta = {
  title: 'Common/MobileSheetMenu',
  component: MobileSheetMenu,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof MobileSheetMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
