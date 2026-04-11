import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { Button } from './Button.tsx';

const meta = {
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => <Button kind="primary" label="Primary Button" />,
  play: async ({ canvas }: any) => {
    const button = canvas.getByRole('button', { name: /primary button/i });
    await expect(button).toBeVisible();
    await expect(button).toBeEnabled();
  },
};

export const Secondary: Story = {
  render: () => <Button kind="secondary" label="Secondary Button" />,
  play: async ({ canvas }: any) => {
    const button = canvas.getByRole('button', { name: /secondary button/i });
    await expect(button).toBeVisible();
    await expect(button).toBeEnabled();
  },
};

export const Tertiary: Story = {
  render: () => <Button kind="tertiary" label="Tertiary Button" />,
  play: async ({ canvas }: any) => {
    const button = canvas.getByRole('button', { name: /tertiary button/i });
    await expect(button).toBeVisible();
    await expect(button).toBeEnabled();
  },
};

export const Disabled: Story = {
  render: () => <Button kind="primary" label="Disabled Button" disabled />,
  play: async ({ canvas }: any) => {
    const button = canvas.getByRole('button', { name: /disabled button/i });
    await expect(button).toBeVisible();
    await expect(button).toBeDisabled();
  },
};

export const WithIcon: Story = {
  render: () => <Button kind="primary" label="Download" icon="download" />,
  play: async ({ canvas }: any) => {
    const button = canvas.getByRole('button', { name: /download/i });
    await expect(button).toBeVisible();
    await expect(button).toBeEnabled();
  },
};

export const Nonactive: Story = {
  render: () => <Button kind="primary" label="Loading" nonactive />,
  play: async ({ canvas }: any) => {
    const button = canvas.getByRole('button', { name: /loading/i });
    await expect(button).toBeVisible();
  },
};
