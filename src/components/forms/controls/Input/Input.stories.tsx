import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import { LayoutDecorator } from '../../../../util/storybook/LayoutDecorator.tsx';

import { Input } from './Input.tsx';

const meta = {
  title: 'AI Generated/Medium/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    Story => (
      <LayoutDecorator size="small">
        <Story />
      </LayoutDecorator>
    ),
  ],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter a workspace name',
    inputProps: {
      defaultValue: 'production-cluster',
    },
  },
};

export const WithPrefixAndAction: Story = {
  args: {
    prefix: 'https://',
    placeholder: 'service.example.com',
    inputProps: {
      defaultValue: 'status.fortanix.example',
    },
    actions: <Input.Action icon="cross" label="Clear input" onPress={fn()} />,
  },
};
