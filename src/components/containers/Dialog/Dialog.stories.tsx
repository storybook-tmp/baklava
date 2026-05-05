import type { Meta, StoryObj } from '@storybook/react-vite';
import { Dialog } from './Dialog.tsx';

const meta = {
  component: Dialog,
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Dialog title="Confirm Action" onRequestClose={() => {}}>
      <p>Are you sure you want to proceed with this action?</p>
    </Dialog>
  ),
};

export const WithSubmitAction: Story = {
  render: () => (
    <Dialog
      title="Delete Item"
      onRequestClose={() => {}}
      actions={<Dialog.SubmitAction label="Delete" />}
    >
      <p>This action cannot be undone.</p>
    </Dialog>
  ),
};

export const Loading: Story = {
  render: () => (
    <Dialog title="Processing" onRequestClose={() => {}} state="loading">
      <p>Please wait while we process your request.</p>
    </Dialog>
  ),
};
