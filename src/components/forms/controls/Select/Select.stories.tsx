import type { Meta, StoryObj } from '@storybook/react-vite';

import { LayoutDecorator } from '../../../../util/storybook/LayoutDecorator.tsx';

import { Select } from './Select.tsx';

const regionOptions = (
  <>
    <Select.Option itemKey="us-east-1" label="US East 1" />
    <Select.Option itemKey="eu-west-1" label="EU West 1" />
    <Select.Option itemKey="ap-southeast-1" label="AP Southeast 1" />
  </>
);

const meta = {
  title: 'AI Generated/Complex/Select',
  component: Select,
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
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Placeholder: Story = {
  args: {
    label: 'Deployment region',
    placeholder: 'Choose a region',
    options: regionOptions,
  },
};

export const Preselected: Story = {
  args: {
    label: 'Deployment region',
    options: regionOptions,
    defaultSelected: 'eu-west-1',
  },
};
