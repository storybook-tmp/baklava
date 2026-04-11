import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import * as React from 'react';
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

export const Labeled: Story = {
  render: () => <Checkbox.Labeled label="Enable notifications" />,
  play: async ({ canvas }) => {
    const checkbox = canvas.getByRole('checkbox', { name: /enable notifications/i });
    await expect(checkbox).toBeVisible();
    await expect(checkbox).not.toBeChecked();
  },
};

export const LabeledAndChecked: Story = {
  render: () => <Checkbox.Labeled label="Remember me" defaultChecked />,
  play: async ({ canvas }) => {
    const checkbox = canvas.getByRole('checkbox', { name: /remember me/i });
    await expect(checkbox).toBeVisible();
    await expect(checkbox).toBeChecked();
  },
};

export const Disabled: Story = {
  render: () => <Checkbox.Labeled label="Disabled option" disabled />,
  play: async ({ canvas }) => {
    const checkbox = canvas.getByRole('checkbox', { name: /disabled option/i });
    await expect(checkbox).toBeVisible();
    await expect(checkbox).toBeDisabled();
  },
};

export const Interactive: Story = {
  render: () => {
    const [checked, setChecked] = React.useState(false);
    return (
      <Checkbox.Labeled
        label={checked ? 'Checked!' : 'Click to check'}
        checked={checked}
        onUpdate={setChecked}
      />
    );
  },
  play: async ({ canvas, userEvent }) => {
    const checkbox = canvas.getByRole('checkbox', { name: /click to check/i });
    await expect(checkbox).not.toBeChecked();
    await userEvent.click(checkbox);
    await expect(canvas.getByRole('checkbox', { name: /checked!/i })).toBeChecked();
  },
};
