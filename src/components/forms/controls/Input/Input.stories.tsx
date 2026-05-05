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
  render: () => (
    <Input prefix={<span style={{ padding: '0 4px', opacity: 0.6 }}>https://</span>} placeholder="example.com" />
  ),
};

export const Disabled: Story = {
  render: () => <Input placeholder="Disabled input" disabled />,
};

export const WithValue: Story = {
  render: () => <Input defaultValue="john.doe@fortanix.com" />,
};
