import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { Dialog } from './Dialog.tsx';

const meta = {
  component: Dialog,
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Dialog title="Dialog Title" open>
      <p>This is the dialog content.</p>
    </Dialog>
  ),
  play: async ({ canvas }: any) => {
    const dialog = canvas.getByRole('dialog');
    await expect(dialog).toBeVisible();
    const heading = canvas.getByRole('heading', { name: /dialog title/i });
    await expect(heading).toBeVisible();
  },
};

export const WithContent: Story = {
  render: () => (
    <Dialog title="Confirmation" open>
      <p>Are you sure you want to continue with this action?</p>
    </Dialog>
  ),
  play: async ({ canvas }: any) => {
    const dialog = canvas.getByRole('dialog');
    await expect(dialog).toBeVisible();
    const content = canvas.getByText(/are you sure/i);
    await expect(content).toBeVisible();
  },
};

export const Loading: Story = {
  render: () => (
    <Dialog title="Processing" open state="loading">
      <p>Please wait while we process your request...</p>
    </Dialog>
  ),
  play: async ({ canvas }: any) => {
    const dialog = canvas.getByRole('dialog');
    await expect(dialog).toBeVisible();
  },
};

export const NoCloseIcon: Story = {
  render: () => (
    <Dialog title="Dialog Without Close Icon" open showCloseIcon={false}>
      <p>This dialog has no close icon button.</p>
    </Dialog>
  ),
  play: async ({ canvas }: any) => {
    const dialog = canvas.getByRole('dialog');
    await expect(dialog).toBeVisible();
  },
};

export const NoCancelAction: Story = {
  render: () => (
    <Dialog title="Dialog Without Cancel" open showCancelAction={false}>
      <p>This dialog has no cancel button in the footer.</p>
    </Dialog>
  ),
  play: async ({ canvas }: any) => {
    const dialog = canvas.getByRole('dialog');
    await expect(dialog).toBeVisible();
  },
};

export const Flat: Story = {
  render: () => (
    <Dialog title="Flat Dialog" open flat>
      <p>This dialog is displayed as a flat panel.</p>
    </Dialog>
  ),
  play: async ({ canvas }: any) => {
    const dialog = canvas.getByRole('dialog');
    await expect(dialog).toBeVisible();
  },
};
