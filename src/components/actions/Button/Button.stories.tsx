import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from './Button.tsx';

const meta = {
  title: 'AI Generated/Simple/Button',
  component: Button,
  parameters: {
    layout: 'centered',
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

export const DisabledWithIcon: Story = {
  args: {
    label: 'Export report',
    kind: 'secondary',
    icon: 'dashboard',
    disabled: true,
  },
};
