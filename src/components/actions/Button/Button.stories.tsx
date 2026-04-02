import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from './Button.tsx';


const meta = {
  title: 'AI Generated/Simple/Button',
  component: Button,
  args: {
    label: 'Save changes',
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    kind: 'primary',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    kind: 'secondary',
    label: 'Disabled action',
  },
};
