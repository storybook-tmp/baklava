import * as React from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import { Banner } from './Banner.tsx';


const meta = {
  title: 'AI Generated/Medium/Banner',
  component: Banner,
  parameters: {
    layout: 'padded',
  },
  args: {
    title: 'Heads up',
    children: 'Maintenance starts tonight at 11:00 PM UTC and may briefly affect dashboard updates.',
  },
} satisfies Meta<typeof Banner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Informational: Story = {
  args: {
    variant: 'info',
  },
};

export const ErrorDismissible: Story = {
  args: {
    variant: 'error',
    title: 'Connection issue',
    children: 'We could not reach the cluster endpoint. Try again or review your network settings.',
    actions: React.createElement(Banner.ActionButton, {
      kind: 'secondary',
      label: 'Retry',
      onPress: fn(),
    }),
    showCloseAction: true,
    onClose: fn(),
  },
};
