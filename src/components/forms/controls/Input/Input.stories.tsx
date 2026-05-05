import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from './Input.tsx';

const meta = {
  title: 'AI Generated/Medium/Input',
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    inputProps: { placeholder: 'Enter text...' },
  },
};

export const WithIcon: Story = {
  args: {
    icon: 'search',
    iconLabel: 'Search',
    inputProps: { placeholder: 'Search...' },
  },
};

export const WithPrefix: Story = {
  args: {
    prefix: 'https://',
    inputProps: { placeholder: 'example.com' },
  },
};
