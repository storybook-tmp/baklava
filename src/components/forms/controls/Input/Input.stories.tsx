import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from './Input.tsx';

const meta = {
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Input placeholder="Enter text..." />,
};

export const WithIcon: Story = {
  render: () => (
    <Input icon="search" iconLabel="Search" placeholder="Search..." />
  ),
};

export const WithPrefix: Story = {
  render: () => <Input prefix="$" placeholder="0.00" />,
};

export const EmailType: Story = {
  render: () => (
    <Input type="email" icon="email" iconLabel="Email" placeholder="user@example.com" />
  ),
};

export const Disabled: Story = {
  render: () => <Input placeholder="Disabled input" disabled />,
};
