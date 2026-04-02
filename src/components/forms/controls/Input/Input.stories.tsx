import type { Meta, StoryObj } from '@storybook/react-vite';

import { Input } from './Input.tsx';

const meta = {
  title: 'AI Generated/Medium/Input',
  component: Input,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

export const WithIcon: Story = {
  args: {
    placeholder: 'Search...',
    icon: 'search',
    iconLabel: 'Search',
  },
};
