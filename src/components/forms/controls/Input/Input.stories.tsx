import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { Input } from './Input.tsx';

const meta = {
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Input placeholder="Enter text..." />,
  play: async ({ canvas }: any) => {
    const input = canvas.getByPlaceholderText(/enter text/i) as HTMLInputElement;
    await expect(input).toBeVisible();
    await expect(input).toHaveAttribute('type', 'text');
  },
};

export const WithValue: Story = {
  render: () => <Input placeholder="Enter text..." defaultValue="Example input" />,
  play: async ({ canvas }: any) => {
    const input = canvas.getByDisplayValue(/example input/i) as HTMLInputElement;
    await expect(input).toBeVisible();
    await expect(input).toHaveValue('Example input');
  },
};

export const Disabled: Story = {
  render: () => <Input placeholder="Disabled input" disabled />,
  play: async ({ canvas }: any) => {
    const input = canvas.getByPlaceholderText(/disabled input/i) as HTMLInputElement;
    await expect(input).toBeDisabled();
  },
};

export const WithIcon: Story = {
  render: () => <Input placeholder="Search..." icon="search" iconLabel="Search icon" />,
  play: async ({ canvas }: any) => {
    const input = canvas.getByPlaceholderText(/search/i) as HTMLInputElement;
    await expect(input).toBeVisible();
  },
};

export const Password: Story = {
  render: () => <Input type="password" placeholder="Enter password" />,
  play: async ({ canvas }: any) => {
    const input = canvas.getByPlaceholderText(/enter password/i) as HTMLInputElement;
    await expect(input).toBeVisible();
    await expect(input).toHaveAttribute('type', 'password');
  },
};

export const Email: Story = {
  render: () => <Input type="email" placeholder="Enter email..." />,
  play: async ({ canvas }: any) => {
    const input = canvas.getByPlaceholderText(/enter email/i) as HTMLInputElement;
    await expect(input).toBeVisible();
    await expect(input).toHaveAttribute('type', 'email');
  },
};
