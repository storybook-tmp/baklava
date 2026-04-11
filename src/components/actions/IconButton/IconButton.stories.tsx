import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import { IconButton } from './IconButton.tsx';

const meta = {
  component: IconButton,
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <IconButton icon="search" label="Search" />,
  play: async ({ canvas }) => {
    const button = canvas.getByRole('button', { name: /search/i });
    await expect(button).toBeVisible();
    await expect(button).not.toBeDisabled();
  },
};

export const PrimaryKind: Story = {
  render: () => <IconButton icon="plus" label="Add item" kind="primary" />,
  play: async ({ canvas }) => {
    const button = canvas.getByRole('button', { name: /add item/i });
    await expect(button).toBeVisible();
    await expect(button).not.toBeDisabled();
  },
};

export const Disabled: Story = {
  render: () => <IconButton icon="trash" label="Delete" disabled />,
  play: async ({ canvas }) => {
    const button = canvas.getByRole('button', { name: /delete/i });
    await expect(button).toBeVisible();
    await expect(button).toBeDisabled();
  },
};

export const Interaction: Story = {
  render: () => <IconButton icon="settings" label="Open settings" />,
  play: async ({ canvas, userEvent }) => {
    const button = canvas.getByRole('button', { name: /open settings/i });
    await expect(button).toBeVisible();
    await userEvent.click(button);
    await expect(button).toBeVisible();
  },
};
