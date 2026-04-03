import type { Meta, StoryObj } from '@storybook/react-vite';
import { Dialog } from './Dialog.tsx';

const meta = {
  component: Dialog,
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Dialog title="Confirm action" onRequestClose={() => {}}>
      <p>Are you sure you want to proceed with this action?</p>
    </Dialog>
  ),
};

export const WithSubmitAction: Story = {
  render: () => (
    <Dialog
      title="Create group"
      onRequestClose={() => {}}
      actions={<Dialog.SubmitAction label="Create" />}
    >
      <p>Fill in the details to create a new group.</p>
    </Dialog>
  ),
};

export const Loading: Story = {
  render: () => (
    <Dialog title="Loading data" onRequestClose={() => {}} state="loading">
      <p>This content is loading...</p>
    </Dialog>
  ),
};
