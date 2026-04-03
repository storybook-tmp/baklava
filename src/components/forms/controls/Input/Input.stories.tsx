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

export const WithValue: Story = {
  render: () => <Input defaultValue="admin@fortanix.com" />,
};

export const Disabled: Story = {
  render: () => <Input defaultValue="Read-only value" disabled />,
};

export const WithAction: Story = {
  render: () => (
    <Input
      placeholder="Enter value..."
      actions={<Input.Action icon="cross" label="Clear" />}
    />
  ),
};
