import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, waitFor, within } from 'storybook/test';

import { Button } from '../../actions/Button/Button.tsx';
import { DialogModal } from './DialogModal.tsx';

const meta = {
  component: DialogModal,
} satisfies Meta<typeof DialogModal>;

export default meta;

type Story = StoryObj<typeof meta>;

const ConfirmationModalStory = () => {
  const [confirmedSubject, setConfirmedSubject] = React.useState<string | null>(null);
  const confirmationModal = DialogModal.useConfirmationModal<string>({
    actionLabel: 'Delete policy',
    onConfirm: (subject) => {
      setConfirmedSubject(subject);
    },
  });

  return (
    <>
      <Button
        label="Open confirmation"
        onPress={() => {
          confirmationModal.activateWith('Production signing key');
        }}
      />
      <DialogModal {...confirmationModal.props} />
      {confirmedSubject && <p>Confirmed subject: {confirmedSubject}</p>}
    </>
  );
};

export const Centered: Story = {
  render: () => (
    <DialogModal
      title="Modal"
      providerProps={{ unmountDelay: 0 }}
      trigger={({ activate }) => <Button label="Open modal" onPress={activate} />}
    >
      Test content inside the centered modal.
    </DialogModal>
  ),
  play: async ({ canvas, canvasElement }) => {
    const documentBody = within(canvasElement.ownerDocument.body);

    await userEvent.click(canvas.getByRole('button', { name: 'Open modal' }));

    await expect(documentBody.getByRole('dialog')).toBeVisible();
    await expect(documentBody.getByText('Test content inside the centered modal.')).toBeVisible();

    await userEvent.click(documentBody.getByRole('button', { name: 'Close dialog' }));

    await waitFor(() => {
      expect(documentBody.queryByRole('dialog')).toBeNull();
    });
  },
};

export const SlideOver: Story = {
  render: () => (
    <DialogModal
      title="Environment details"
      display="slide-over"
      providerProps={{ unmountDelay: 0 }}
      trigger={({ activate }) => <Button label="Open details panel" onPress={activate} />}
    >
      Inspect the environment configuration in the slide-over panel.
    </DialogModal>
  ),
  play: async ({ canvas, canvasElement }) => {
    const documentBody = within(canvasElement.ownerDocument.body);

    await userEvent.click(canvas.getByRole('button', { name: 'Open details panel' }));

    await expect(documentBody.getByRole('dialog')).toBeVisible();
    await expect(documentBody.getByText('Inspect the environment configuration in the slide-over panel.')).toBeVisible();

    await userEvent.click(documentBody.getByRole('button', { name: 'Cancel' }));

    await waitFor(() => {
      expect(documentBody.queryByRole('dialog')).toBeNull();
    });
  },
};

export const Confirmation: Story = {
  render: () => <ConfirmationModalStory />,
  play: async ({ canvas, canvasElement }) => {
    const documentBody = within(canvasElement.ownerDocument.body);

    await userEvent.click(canvas.getByRole('button', { name: 'Open confirmation' }));

    await expect(documentBody.getByRole('alertdialog')).toBeVisible();
    await expect(documentBody.getByText('Are you sure you want to perform this action?')).toBeVisible();

    await userEvent.click(documentBody.getByRole('button', { name: 'Delete policy' }));

    await waitFor(() => {
      expect(canvas.getByText('Confirmed subject: Production signing key')).toBeVisible();
    });
  },
};
