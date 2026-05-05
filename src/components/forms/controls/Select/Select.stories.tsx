import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';
import { Select } from './Select.tsx';

const meta = {
  title: 'AI Generated/Complex/Select',
  component: Select,
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Choose a fruit',
  },
  render: (args) => {
    const [selected, setSelected] = React.useState<string | null>(null);
    return (
      <Select
        {...args}
        selected={selected}
        onSelect={(key) => setSelected(key)}
        options={
          <>
            <Select.Option itemKey="apple">Apple</Select.Option>
            <Select.Option itemKey="banana">Banana</Select.Option>
            <Select.Option itemKey="cherry">Cherry</Select.Option>
          </>
        }
      />
    );
  },
};

export const WithPreselected: Story = {
  args: {
    label: 'Region',
  },
  render: (args) => {
    const [selected, setSelected] = React.useState<string | null>('us-east');
    return (
      <Select
        {...args}
        selected={selected}
        onSelect={(key) => setSelected(key)}
        options={
          <>
            <Select.Option itemKey="us-east">US East</Select.Option>
            <Select.Option itemKey="us-west">US West</Select.Option>
            <Select.Option itemKey="eu-west">EU West</Select.Option>
          </>
        }
      />
    );
  },
};
