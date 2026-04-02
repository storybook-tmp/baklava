import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import React from 'react';
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
    onRequestClose: fn(),
    children: <p>Are you sure you want to proceed?</p>,
  },
};

export const WithActions: Story = {
  args: {
    title: 'Delete Item',
    onRequestClose: fn(),
    children: <p>This action cannot be undone.</p>,
    actions: (
      <Dialog.SubmitAction label="Delete" onPress={fn()} />
    ),
  },
};
