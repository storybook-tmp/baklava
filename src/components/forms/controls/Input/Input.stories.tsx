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

export const WithValue: Story = {
  render: () => <Input defaultValue="Hello World" />,
};

export const Disabled: Story = {
  render: () => <Input defaultValue="Disabled input" disabled />,
};
