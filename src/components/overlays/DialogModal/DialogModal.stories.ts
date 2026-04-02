import * as React from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import { DialogModal } from './DialogModal.tsx';


const meta = {
  title: 'AI Generated/Complex/DialogModal',
  component: DialogModal,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    activeDefault: true,
    title: 'Rotate credentials',
    children: React.createElement(
      React.Fragment,
      null,
      React.createElement(
        'p',
        null,
        'Create a fresh credential set for this integration and update the consumers that depend on it.',
      ),
      React.createElement(
        'p',
        null,
        'The previous key will remain active for 24 hours so dependent services can roll forward safely.',
      ),
    ),
  },
} satisfies Meta<typeof DialogModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Centered: Story = {
  args: {
    actions: React.createElement(DialogModal.SubmitAction, {
      label: 'Rotate now',
      onPress: fn(),
    }),
  },
};

export const SlideOverLoading: Story = {
  args: {
    title: 'Provisioning workspace',
    display: 'slide-over',
    size: 'large',
    state: 'loading',
    showCancelAction: false,
    children: React.createElement(
      'p',
      null,
      'Allocating policies, tokens, and audit destinations for the selected workspace.',
    ),
  },
};
