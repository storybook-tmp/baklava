import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from './Button.tsx';

const meta = {
  title: 'AI Generated/Simple/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  args: {
    label: 'Save changes',
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    kind: 'primary',
  },
};

export const DisabledWithIcon: Story = {
  args: {
    kind: 'secondary',
    icon: 'check',
    label: 'Saved',
    disabled: true,
  },
};
