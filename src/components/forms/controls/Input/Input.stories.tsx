import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta = {
  title: 'AI Generated/Medium/Input',
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text here...',
  },
};

export const WithIcon: Story = {
  args: {
    placeholder: 'Search...',
    icon: 'filter-open',
    iconLabel: 'Filter',
  },
};

export const WithPrefix: Story = {
  args: {
    placeholder: 'Enter amount',
    prefix: '$',
  },
};
