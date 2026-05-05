import type { ReactNode } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import { Dialog } from '../../components/containers/Dialog/Dialog.tsx';
import { DialogLayout } from './DialogLayout.tsx';

const meta = {
  component: DialogLayout,
} satisfies Meta<typeof DialogLayout>;

export default meta;

type Story = StoryObj<typeof meta>;

const renderDialog = (content: ReactNode) => (
  <div style={{ padding: '2rem' }}>
    <Dialog title="Connect environment" showCloseIcon={false} showCancelAction={false}>
      {content}
    </Dialog>
  </div>
);

export const WithLogoAside: Story = {
  render: () =>
    renderDialog(
      <DialogLayout
        title="Authorize access"
        aside={<DialogLayout.Logo subtitle="Data Security Manager" subtitleTrademark />}
      >
        Review the workspace permissions before continuing with the connection flow.
      </DialogLayout>,
    ),
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('dialog')).toBeVisible();
    await expect(canvas.getByText('Authorize access')).toBeVisible();
    await expect(canvas.getByText('Data Security Manager')).toBeVisible();
  },
};

export const WithHintAside: Story = {
  render: () =>
    renderDialog(
      <DialogLayout
        title="Rotation summary"
        aside={
          <DialogLayout.Hint>
            <DialogLayout.Icon icon="warning-filled" />
            Keys will rotate automatically after approval.
          </DialogLayout.Hint>
        }
      >
        Confirm the maintenance window and notify the release team before saving.
      </DialogLayout>,
    ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Rotation summary')).toBeVisible();
    await expect(canvas.getByText('Keys will rotate automatically after approval.')).toBeVisible();
    await expect(canvas.getByText('Confirm the maintenance window and notify the release team before saving.')).toBeVisible();
  },
};

export const ContentOnly: Story = {
  render: () =>
    renderDialog(
      <DialogLayout title="Approval details">
        This approval request does not require any supporting aside content.
      </DialogLayout>,
    ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Approval details')).toBeVisible();
    await expect(canvas.getByText('This approval request does not require any supporting aside content.')).toBeVisible();
  },
};
