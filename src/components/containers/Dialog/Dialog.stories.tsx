import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Dialog } from './Dialog.tsx';

const meta = {
  title: 'AI Generated/Complex/Dialog',
  component: Dialog,
  parameters: { layout: 'centered' },
  args: {
    onRequestClose: fn(),
  },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Confirm Action',
    children: React.createElement('p', null, 'Are you sure you want to proceed with this action?'),
    actions: React.createElement(Dialog.SubmitAction, { label: 'Confirm' }),
  },
};

export const Loading: Story = {
  args: {
    title: 'Loading Data',
    state: 'loading',
    children: React.createElement('p', null, 'Please wait while we fetch the data.'),
  },
};
