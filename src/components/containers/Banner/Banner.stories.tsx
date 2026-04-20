import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn } from 'storybook/test';

import { Banner } from './Banner.tsx';


const meta = {
  component: Banner,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Banner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Informational: Story = {
  args: {
    title: 'New integration available',
    children: 'Connect cloud accounts to start collecting activity reports.',
  },
  play: async ({ canvas }) => {
    const banner = canvas.getByRole('alert');
    
    await expect(banner).toBeVisible();
    await expect(canvas.getByText('New integration available')).toBeVisible();
    await expect(canvas.getByText(/collecting activity reports/i)).toBeVisible();
  },
};

export const WarningWithAction: Story = {
  args: {
    variant: 'warning',
    title: 'Rotation recommended',
    actions: <Banner.ActionButton kind="tertiary" label="Review keys" />,
    children: 'One service account key is approaching its rotation window.',
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('alert')).toBeVisible();
    await expect(canvas.getByText('Rotation recommended')).toBeVisible();
    await expect(canvas.getByRole('button', { name: 'Review keys' })).toBeEnabled();
  },
};

export const DismissibleSuccess: Story = {
  args: {
    variant: 'success',
    title: 'Policy published',
    showCloseAction: true,
    onClose: fn(),
    children: 'The latest policy changes are now active.',
  },
  play: async ({ canvas, userEvent, args }) => {
    await expect(canvas.getByText('Policy published')).toBeVisible();
    
    await userEvent.click(canvas.getByRole('button', { name: 'Close banner' }));
    await expect(args.onClose).toHaveBeenCalledOnce();
  },
};
