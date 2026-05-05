import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
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
    kind: 'primary',
    label: 'Primary Button',
    onPress: fn(),
  },
};

export const Secondary: Story = {
  args: {
    kind: 'secondary',
    label: 'Secondary Button',
    onPress: fn(),
  },
};

export const WithIcon: Story = {
  args: {
    kind: 'primary',
    label: 'Download',
    icon: 'download',
    onPress: fn(),
  },
};
