import type { Meta, StoryObj } from '@storybook/react-vite';

import * as React from 'react';

import { LayoutDecorator } from '../../../../util/storybook/LayoutDecorator.tsx';
import { Select } from './Select.tsx';

const meta = {
  title: 'AI Generated/Complex/Select',
  component: Select,
  decorators: [
    Story => (
      <LayoutDecorator size="small">
        <Story />
      </LayoutDecorator>
    ),
  ],
  args: {
    label: 'Deployment target',
    options: getSelectOptions(),
  },
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const EmptySelection: Story = {};

export const ControlledSelection: Story = {
  render: args => <ControlledSelectStory {...args} />,
};

function ControlledSelectStory(args: React.ComponentProps<typeof Select>) {
  const [selected, setSelected] = React.useState<string | null>('hsm');

  return (
    <Select
      {...args}
      selected={selected}
      onSelect={itemKey => {
        setSelected(itemKey);
      }}
    />
  );
}

function getSelectOptions() {
  return (
    <>
      <Select.Header itemKey="security" label="Security services" />
      <Select.Option itemKey="hsm" label="Hardware Security Module">
        Hardware Security Module
      </Select.Option>
      <Select.Option itemKey="kms" label="Key Management Service">
        Key Management Service
      </Select.Option>
      <Select.Option itemKey="tokenization" label="Tokenization gateway">
        Tokenization gateway
      </Select.Option>
    </>
  );
}
