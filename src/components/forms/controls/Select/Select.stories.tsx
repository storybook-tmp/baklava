import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import { Select } from './Select.tsx';

const options = (
  <>
    <Select.Option itemKey="dsm" label="DSM" />
    <Select.Option itemKey="sdkms" label="SDKMS" />
    <Select.Option itemKey="iam" label="IAM" />
  </>
);

const meta = {
  title: 'AI Generated/Complex/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  args: {
    label: 'Choose a product',
    options,
    onSelect: fn(),
  },
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Placeholder: Story = {
  args: {
    placeholder: 'Select an option',
  },
};

export const Preselected: Story = {
  args: {
    defaultSelected: 'sdkms',
  },
};
