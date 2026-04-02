import * as React from 'react';
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
    onRequestClose: () => {},
    children: <p>Are you sure you want to proceed with this action?</p>,
    actions: <Dialog.SubmitAction onPress={() => {}} />,
  },
};

export const WithoutCancelAction: Story = {
  args: {
    title: 'Information',
    showCancelAction: false,
    showCloseIcon: true,
    onRequestClose: () => {},
    children: <p>This dialog shows information with only a close icon and no cancel button.</p>,
  },
};

export const Loading: Story = {
  args: {
    title: 'Processing',
    onRequestClose: () => {},
    state: 'loading',
    children: <p>Please wait while we process your request...</p>,
  },
};
