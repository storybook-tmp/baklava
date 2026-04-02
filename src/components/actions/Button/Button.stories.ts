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
    label: 'Save changes',
    onPress: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    kind: 'primary',
  },
};

export const DisabledSecondary: Story = {
  args: {
    kind: 'secondary',
    label: 'Disabled action',
    disabled: true,
  },
};
