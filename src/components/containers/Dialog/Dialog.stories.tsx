import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { Dialog } from './Dialog.tsx';

const meta = {
  title: 'AI Generated/Complex/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Confirm Action',
    onRequestClose: fn(),
    children: 'Are you sure you want to proceed with this action?',
  },
};

export const WithActions: Story = {
  args: {
    title: 'Delete Item',
    onRequestClose: fn(),
    children: 'This action cannot be undone. Are you sure?',
    actions: <Dialog.SubmitAction label="Delete" kind="primary" />,
  },
};
