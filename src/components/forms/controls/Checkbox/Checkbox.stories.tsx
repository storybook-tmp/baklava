import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import { Checkbox } from './Checkbox.tsx';

const meta = {
  component: Checkbox,
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Unchecked: Story = {
  render: () => <Checkbox aria-label="Accept terms" />,
  play: async ({ canvas }) => {
    const checkbox = canvas.getByRole('checkbox', { name: /accept terms/i });
    await expect(checkbox).toBeVisible();
    await expect(checkbox).not.toBeChecked();
  },
};

export const Checked: Story = {
  render: () => <Checkbox aria-label="Accept terms" defaultChecked />,
  play: async ({ canvas }) => {
    const checkbox = canvas.getByRole('checkbox', { name: /accept terms/i });
    await expect(checkbox).toBeVisible();
    await expect(checkbox).toBeChecked();
  },
};

export const Disabled: Story = {
  render: () => <Checkbox aria-label="Disabled option" disabled />,
  play: async ({ canvas }) => {
    const checkbox = canvas.getByRole('checkbox', { name: /disabled option/i });
    await expect(checkbox).toBeVisible();
    await expect(checkbox).toBeDisabled();
  },
};

export const Labeled: Story = {
  render: () => (
    <Checkbox.Labeled label="Subscribe to newsletter" />
  ),
  play: async ({ canvas }) => {
    const checkbox = canvas.getByRole('checkbox', { name: /subscribe to newsletter/i });
    await expect(checkbox).toBeVisible();
  },
};

export const LabeledInteraction: Story = {
  render: () => (
    <Checkbox.Labeled label="Enable notifications" />
  ),
  play: async ({ canvas, userEvent }) => {
    const checkbox = canvas.getByRole('checkbox', { name: /enable notifications/i });
    await expect(checkbox).not.toBeChecked();
    await userEvent.click(checkbox);
    await expect(checkbox).toBeChecked();
  },
};
