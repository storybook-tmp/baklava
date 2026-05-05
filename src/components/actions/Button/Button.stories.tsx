import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import { Button } from './Button.tsx';

const meta = {
  title: 'AI Generated/Simple/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  args: {
    onPress: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Save changes',
    kind: 'primary',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Cannot submit',
    kind: 'secondary',
    disabled: true,
    icon: 'build',
  },
};
