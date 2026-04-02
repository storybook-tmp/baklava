import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

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
    onRequestClose: fn(),
    children: <p>Are you sure you want to proceed?</p>,
    actions: <Dialog.SubmitAction label="Confirm" onPress={fn()} />,
  },
};

export const Loading: Story = {
  args: {
    title: 'Processing',
    state: 'loading',
    onRequestClose: fn(),
    children: <p>Please wait while your request is being processed.</p>,
  },
};
