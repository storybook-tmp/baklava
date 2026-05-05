import type { Meta, StoryObj } from '@storybook/react-vite';
import { Dialog } from './Dialog.tsx';
import { Button } from '../../actions/Button/Button.tsx';

const meta = {
  component: Dialog,
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Dialog title="Edit Profile" onRequestClose={() => {}}>
      <p>Update your profile information below.</p>
    </Dialog>
  ),
};

export const WithActions: Story = {
  render: () => (
    <Dialog
      title="Confirm Deletion"
      onRequestClose={() => {}}
      actions={<Dialog.SubmitAction label="Delete" />}
    >
      <p>Are you sure you want to delete this item? This action cannot be undone.</p>
    </Dialog>
  ),
};

export const Loading: Story = {
  render: () => (
    <Dialog title="Loading Data" state="loading" onRequestClose={() => {}}>
      <p>This content is loading...</p>
    </Dialog>
  ),
};

export const NoCloseIcon: Story = {
  render: () => (
    <Dialog
      title="Terms of Service"
      showCloseIcon={false}
      showCancelAction={false}
      actions={<Dialog.SubmitAction label="Accept" />}
    >
      <p>Please read and accept the terms of service to continue.</p>
    </Dialog>
  ),
};
