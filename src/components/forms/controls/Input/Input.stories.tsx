import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import { Input } from './Input.tsx';

const meta = {
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Input placeholder="Enter text..." aria-label="Text input" />,
  play: async ({ canvas }) => {
    const input = canvas.getByRole('textbox');
    await expect(input).toBeVisible();
    await expect(input).not.toBeDisabled();
  },
};

export const WithValue: Story = {
  render: () => (
    <Input
      aria-label="Username"
      defaultValue="john.doe@example.com"
      placeholder="Enter username"
    />
  ),
  play: async ({ canvas }) => {
    const input = canvas.getByRole('textbox');
    await expect(input).toBeVisible();
    await expect(input).toHaveValue('john.doe@example.com');
  },
};

export const Disabled: Story = {
  render: () => (
    <Input
      aria-label="Disabled input"
      defaultValue="Cannot edit"
      disabled
    />
  ),
  play: async ({ canvas }) => {
    const input = canvas.getByRole('textbox');
    await expect(input).toBeVisible();
    await expect(input).toBeDisabled();
  },
};

export const WithIcon: Story = {
  render: () => (
    <Input
      aria-label="Search"
      placeholder="Search..."
      icon="search"
      iconLabel="Search icon"
    />
  ),
  play: async ({ canvas }) => {
    const input = canvas.getByRole('textbox');
    await expect(input).toBeVisible();
  },
};

export const TypeInteraction: Story = {
  render: () => <Input aria-label="Name field" placeholder="Type your name" />,
  play: async ({ canvas, userEvent }) => {
    const input = canvas.getByRole('textbox');
    await expect(input).toBeVisible();
    await userEvent.type(input, 'Jane Smith');
    await expect(input).toHaveValue('Jane Smith');
  },
};
