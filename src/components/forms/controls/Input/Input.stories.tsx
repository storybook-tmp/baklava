import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import { LayoutDecorator } from '../../../../util/storybook/LayoutDecorator.tsx';
import { Input } from './Input.tsx';

const meta = {
  title: 'AI Generated/Medium/Input',
  component: Input,
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
    placeholder: 'Enter a secret name',
    inputProps: {
      defaultValue: 'production-api-key',
    },
  },
};

export const WithPrefixIconAndAction: Story = {
  args: {
    icon: 'search',
    iconLabel: 'Search',
    prefix: <span>https://</span>,
    inputProps: {
      defaultValue: 'docs.fortanix.com',
    },
    actions: <Input.Action icon="copy" label="Copy URL" onPress={fn()} />,
  },
};
