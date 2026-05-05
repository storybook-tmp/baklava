import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import { Button } from './Button.tsx';

const meta = {
  title: 'AI Generated/Medium/Button',
  component: Button,
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

export const SecondaryWithIcon: Story = {
  args: {
    kind: 'secondary',
    icon: 'download',
    label: 'Export report',
  },
};
