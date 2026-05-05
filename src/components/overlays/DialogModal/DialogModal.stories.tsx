import type { Meta, StoryObj } from '@storybook/react-vite';
import { DialogModal } from './DialogModal.tsx';

const meta = {
  title: 'AI Generated/Complex/DialogModal',
  component: DialogModal,
} satisfies Meta<typeof DialogModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Center: Story = {
  args: {
    title: 'Confirm Action',
    display: 'center',
    size: 'medium',
    activeDefault: true,
    children: 'Are you sure you want to proceed with this action?',
  },
};

export const SlideOver: Story = {
  args: {
    title: 'Details Panel',
    display: 'slide-over',
    slideOverPosition: 'right',
    size: 'large',
    activeDefault: true,
    children: 'This is a slide-over panel with detailed content.',
  },
};
