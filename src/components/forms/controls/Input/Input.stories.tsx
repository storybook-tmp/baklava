import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import { Input } from './Input.tsx';

const meta = {
  title: 'AI Generated/Medium/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  args: {
    onChange: fn(),
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Search projects',
    defaultValue: 'Key rotation',
  },
};

export const WithIconAndAction: Story = {
  args: {
    placeholder: 'Search by name',
    icon: 'search',
    iconLabel: 'Search',
    actions: (
      <Input.Action
        icon="cross"
        label="Clear input"
        onPress={fn()}
      />
    ),
  },
};
