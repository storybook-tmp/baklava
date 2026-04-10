import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, within } from 'storybook/test';

import { LayoutDecorator } from '../../../util/storybook/LayoutDecorator.tsx';
import { Button } from '../../actions/Button/Button.tsx';
import { DialogModal } from './DialogModal.tsx';

const meta = {
  component: DialogModal,
} satisfies Meta<typeof DialogModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <LayoutDecorator>
      <DialogModal
        title="Invite team member"
        trigger={({ activate }) => <Button label="Open modal" onPress={activate} />}
      >
        Add a new team member to the active workspace.
      </DialogModal>
    </LayoutDecorator>
  ),
  play: async ({ canvas, canvasElement, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Open modal' }));

    const doc = canvasElement.ownerDocument;
    const portal = within(doc.body);
    const dialog = await portal.findByRole('dialog', { name: 'Invite team member' });

    await expect(dialog).toHaveAttribute('open');
    await expect(portal.getByText('Add a new team member to the active workspace.')).toBeInTheDocument();
  },
};

export const SlideOver: Story = {
  render: () => (
    <LayoutDecorator>
      <DialogModal
        title="Edit integration"
        display="slide-over"
        size="small"
        trigger={({ activate }) => <Button kind="secondary" label="Open side panel" onPress={activate} />}
      >
        Update connection details and save the configuration when you are ready.
      </DialogModal>
    </LayoutDecorator>
  ),
  play: async ({ canvas, canvasElement, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Open side panel' }));

    const portal = within(canvasElement.ownerDocument.body);
    const dialog = await portal.findByRole('dialog', { name: 'Edit integration' });

    await expect(dialog).toHaveAttribute('open');
    await expect(portal.getByText(/update connection details/i)).toBeInTheDocument();
  },
};

export const AlertDialog: Story = {
  render: () => (
    <LayoutDecorator>
      <DialogModal
        role="alertdialog"
        title="Delete API key"
        allowUserClose={false}
        actions={
          <>
            <DialogModal.CancelAction label="Keep key" />
            <DialogModal.SubmitAction label="Delete key" />
          </>
        }
        trigger={({ activate }) => <Button kind="secondary" label="Delete API key" onPress={activate} />}
      >
        This action permanently removes the key from all environments.
      </DialogModal>
    </LayoutDecorator>
  ),
  play: async ({ canvas, canvasElement, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Delete API key' }));

    const portal = within(canvasElement.ownerDocument.body);
    const dialog = await portal.findByRole('alertdialog', { name: 'Delete API key' });

    await expect(dialog).toHaveAttribute('open');
    await expect(portal.getByRole('button', { name: 'Keep key' })).toBeInTheDocument();
  },
};
