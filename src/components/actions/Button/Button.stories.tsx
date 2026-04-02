import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
  title: 'AI Generated/Simple/Button',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Primary Button',
    kind: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary Button',
    kind: 'secondary',
  },
};

export const Tertiary: Story = {
  args: {
    label: 'Tertiary Button',
    kind: 'tertiary',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Button',
    kind: 'primary',
    disabled: true,
  },
};

export const WithIcon: Story = {
  args: {
    label: 'Button with Icon',
    kind: 'primary',
    icon: 'plus',
  },
};
