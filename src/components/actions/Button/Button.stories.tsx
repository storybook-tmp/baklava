import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button.tsx';

const meta = {
  title: 'AI Generated/Medium/Button',
  component: Button,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Primary Action',
    kind: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary Action',
    kind: 'secondary',
  },
};
