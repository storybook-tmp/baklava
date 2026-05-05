import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import { Button } from './Button.tsx';

const meta = {
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => <Button kind="primary" label="Save changes" />,
  play: async ({ canvas }) => {
    const button = canvas.getByRole('button', { name: /save changes/i });
    await expect(button).toBeVisible();
    await expect(button).not.toBeDisabled();
  },
};

export const Secondary: Story = {
  render: () => <Button kind="secondary" label="Cancel" />,
  play: async ({ canvas }) => {
    const button = canvas.getByRole('button', { name: /cancel/i });
    await expect(button).toBeVisible();
    await expect(button).not.toBeDisabled();
  },
};

export const Tertiary: Story = {
  render: () => <Button kind="tertiary" label="Learn more" />,
  play: async ({ canvas }) => {
    const button = canvas.getByRole('button', { name: /learn more/i });
    await expect(button).toBeVisible();
    await expect(button).not.toBeDisabled();
  },
};

export const Disabled: Story = {
  render: () => <Button kind="primary" label="Submit" disabled />,
  play: async ({ canvas }) => {
    const button = canvas.getByRole('button', { name: /submit/i });
    await expect(button).toBeVisible();
    await expect(button).toBeDisabled();
  },
};

export const Nonactive: Story = {
  render: () => <Button kind="primary" label="Processing..." nonactive />,
  play: async ({ canvas }) => {
    const button = canvas.getByRole('button', { name: /processing/i });
    await expect(button).toBeVisible();
    await expect(button).not.toBeDisabled();
    await expect(button).toHaveAttribute('aria-disabled', 'true');
  },
};

export const WithIcon: Story = {
  render: () => <Button kind="primary" icon="plus" label="Add item" />,
  play: async ({ canvas }) => {
    const button = canvas.getByRole('button', { name: /add item/i });
    await expect(button).toBeVisible();
    const svg = button.querySelector('svg');
    await expect(svg).toBeInTheDocument();
  },
};
