import type { Meta, StoryObj } from '@storybook/react-vite';

import { Input } from './Input.tsx';


const meta = {
  title: 'AI Generated/Medium/Input',
  component: Input,
  args: {
    placeholder: 'Search accounts',
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithPrefixAndAction: Story = {
  args: {
    icon: 'search',
    iconLabel: 'Search',
    prefix: 'https://',
    actions: (
      <Input.Action
        icon="copy"
        label="Copy value"
        onPress={() => {}}
      />
    ),
    value: 'platform.fortanix.com',
    readOnly: true,
  },
};
