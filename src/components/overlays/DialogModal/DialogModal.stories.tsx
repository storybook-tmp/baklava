import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';

import { DialogModal } from './DialogModal.tsx';
import { Button } from '../../actions/Button/Button.tsx';
import { Dialog } from '../../containers/Dialog/Dialog.tsx';

const meta = {
  title: 'AI Generated/Complex/DialogModal',
  component: DialogModal,
} satisfies Meta<typeof DialogModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithTrigger: Story = {
  args: {
    title: 'Confirm Action',
    children: 'Are you sure you want to proceed with this action?',
    size: 'small',
    trigger: ({ activate }) => (
      <Button kind="primary" label="Open dialog" onPress={activate} />
    ),
    actions: (
      <>
        <Dialog.CancelAction label="Cancel" />
        <Dialog.SubmitAction label="Confirm" />
      </>
    ),
  },
};

export const OpenByDefault: Story = {
  args: {
    title: 'Welcome',
    activeDefault: true,
    renderMethod: 'inline',
    children: 'This dialog is open by default to show its appearance in the story.',
    size: 'medium',
    actions: <Dialog.CancelAction label="Close" />,
  },
};
