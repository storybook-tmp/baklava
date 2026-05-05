import type { Meta, StoryObj } from '@storybook/react-vite';
import { Dialog } from './Dialog.tsx';

const meta = {
  title: 'AI Generated/Complex/Dialog',
  component: Dialog,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Confirm Action',
    open: true,
    children: 'Are you sure you want to proceed with this action?',
    actions: undefined,
  },
};

export const WithActions: Story = {
  args: {
    title: 'Delete Item',
    open: true,
    children: 'This action cannot be undone. Are you sure you want to delete this item?',
    showCloseIcon: true,
    showCancelAction: true,
    onRequestClose: () => {},
  },
};
