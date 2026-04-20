import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, waitFor, within } from 'storybook/test';

import { Button } from '../../actions/Button/Button.tsx';
import { DialogModal } from './DialogModal.tsx';


const meta = {
  component: DialogModal,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof DialogModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Confirmation: Story = {
  args: {
    title: 'Delete service account',
    display: 'slide-over',
    size: 'small',
    children: 'Deleting this account immediately revokes its API credentials.',
    actions: <DialogModal.SubmitAction label="Delete account" />,
    trigger: ({ activate }) => (
      <Button kind="primary" label="Open delete dialog" onPress={activate} />
    ),
  },
  play: async ({ canvas, canvasElement, userEvent }) => {
    const documentBody = within(canvasElement.ownerDocument.body);
    
    await userEvent.click(canvas.getByRole('button', { name: 'Open delete dialog' }));
    
    await expect(documentBody.getByRole('dialog', { name: 'Delete service account' })).toHaveAttribute('open');
    await expect(documentBody.getByText(/revokes its API credentials/i)).toBeVisible();
    
    await userEvent.click(documentBody.getByRole('button', { name: 'Cancel' }));
    await waitFor(async () => {
      await expect(documentBody.queryByText(/revokes its API credentials/i)).not.toBeVisible();
    });
  },
};

export const SlideOver: Story = {
  args: {
    activeDefault: true,
    display: 'slide-over',
    slideOverPosition: 'right',
    title: 'Account details',
    children: 'Review owners, account groups, and recent activity before changing access.',
  },
  play: async ({ canvasElement, userEvent }) => {
    const documentBody = within(canvasElement.ownerDocument.body);
    
    await expect(documentBody.getByRole('dialog', { name: 'Account details' })).toHaveAttribute('open');
    await expect(documentBody.getByText(/recent activity/i)).toBeVisible();
    
    await userEvent.click(documentBody.getByRole('button', { name: 'Close dialog' }));
  },
};

export const LoadingState: Story = {
  args: {
    activeDefault: true,
    display: 'slide-over',
    state: 'loading',
    title: 'Provisioning connection',
    children: 'Cloud account discovery is still running.',
  },
  play: async ({ canvasElement, userEvent }) => {
    const documentBody = within(canvasElement.ownerDocument.body);
    const dialog = documentBody.getByRole('dialog', { name: 'Provisioning connection' });
    
    await expect(dialog).toHaveAttribute('open');
    await expect(documentBody.getByText(/discovery is still running/i)).toBeVisible();
    
    await userEvent.click(documentBody.getByRole('button', { name: 'Close dialog' }));
  },
};
