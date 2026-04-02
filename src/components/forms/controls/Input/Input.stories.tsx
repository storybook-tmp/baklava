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

export const WithIcon: Story = {
  args: {
    placeholder: 'Search clusters',
    icon: 'search',
    iconLabel: 'Search',
    inputProps: {
      'aria-label': 'Search clusters',
      defaultValue: 'production',
    },
  },
};

export const WithPrefixAndAction: Story = {
  args: {
    prefix: 'https://',
    placeholder: 'service.example.com',
    inputProps: {
      'aria-label': 'Service URL',
    },
    actions: (
      <Input.Action
        icon="copy"
        label="Copy URL"
        onPress={fn()}
      />
    ),
  },
};
