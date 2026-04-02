import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from './Button.tsx';


const meta = {
  title: 'AI Generated/Medium/Button',
  component: Button,
  args: {
    kind: 'primary',
    label: 'Save changes',
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const SecondaryWithIcon: Story = {
  args: {
    kind: 'secondary',
    icon: 'download',
    label: 'Export report',
  },
};
