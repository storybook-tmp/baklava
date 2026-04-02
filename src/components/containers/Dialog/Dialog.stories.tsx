import type { Meta, StoryObj } from '@storybook/react';
import { Dialog } from './Dialog';

const meta = {
  title: 'AI Generated/Complex/Dialog',
  component: Dialog,
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Dialog
      title="Confirmation Dialog"
      onRequestClose={() => {}}
      showCloseIcon
      showCancelAction
    >
      <p>Do you want to proceed with this action?</p>
      <p>This action cannot be undone.</p>
    </Dialog>
  ),
};

export const WithActions: Story = {
  render: () => (
    <Dialog
      title="Save Changes"
      onRequestClose={() => {}}
      showCloseIcon
      actions={<Dialog.SubmitAction label="Save" />}
    >
      <p>Save your changes before proceeding?</p>
    </Dialog>
  ),
};
