import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';

const meta = {
  title: 'AI Generated/Simple/Button',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Click me',
    kind: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Click me',
    kind: 'secondary',
  },
};

export const Tertiary: Story = {
  args: {
    label: 'Click me',
    kind: 'tertiary',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    kind: 'primary',
    disabled: true,
  },
};
