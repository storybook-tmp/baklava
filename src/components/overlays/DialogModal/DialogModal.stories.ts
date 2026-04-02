import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { DialogModal } from './DialogModal.tsx';


const meta = {
  title: 'AI Generated/Complex/DialogModal',
  component: DialogModal,
  args: {
    activeDefault: true,
    renderMethod: 'inline',
  },
} satisfies Meta<typeof DialogModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Centered: Story = {
  args: {
    actions: React.createElement(DialogModal.SubmitAction, { label: 'Rotate key' }),
    children: React.createElement(
      React.Fragment,
      null,
      React.createElement(
        'p',
        null,
        'Create a new API key and revoke the existing credential after dependent services have been updated.',
      ),
      React.createElement(
        'p',
        null,
        'This action will be logged and propagated to connected environments automatically.',
      ),
    ),
    title: 'Rotate API key',
  },
};

export const SlideOver: Story = {
  args: {
    actions: React.createElement(DialogModal.SubmitAction, { label: 'Approve request' }),
    children: React.createElement(
      React.Fragment,
      null,
      React.createElement(
        'p',
        null,
        'Review the requested scope increase, validate the business justification, and confirm the temporary access window.',
      ),
      React.createElement(
        'p',
        null,
        'Approving here will notify the requester and record the decision in the audit log.',
      ),
    ),
    display: 'slide-over',
    size: 'large',
    title: 'Access request review',
  },
};
