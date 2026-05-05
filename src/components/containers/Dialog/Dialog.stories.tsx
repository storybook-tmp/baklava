import type { Meta, StoryObj } from '@storybook/react-vite';
import { Dialog } from './Dialog.tsx';

const meta = {
  title: 'AI Generated/Complex/Dialog',
  component: Dialog,
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Confirm Action',
    children: 'Are you sure you want to proceed with this action?',
  },
};

export const Loading: Story = {
  args: {
    title: 'Processing',
    state: 'loading',
    children: 'Please wait while we process your request...',
  },
};
