import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';

import { Select, type SelectProps } from './Select.tsx';

const environmentOptions = [
  { key: 'sandbox', label: 'Sandbox' },
  { key: 'staging', label: 'Staging' },
  { key: 'production', label: 'Production' },
];

const renderOptions = () => (
  <>
    {environmentOptions.map((option) => (
      <Select.Option
        key={option.key}
        itemKey={option.key}
        label={option.label}
      />
    ))}
  </>
);

const ControlledSelect = (props: Omit<SelectProps, 'onSelect' | 'options' | 'selected'>) => {
  const [selected, setSelected] = React.useState<string | null>('staging');

  return (
    <Select
      {...props}
      options={renderOptions()}
      selected={selected}
      onSelect={(itemKey) => {
        setSelected(itemKey);
      }}
    />
  );
};

const meta = {
  title: 'AI Generated/Complex/Select',
  component: Select,
  decorators: [
    (Story) => (
      <div style={{ inlineSize: '20rem' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultSelection: Story = {
  render: (args) => (
    <Select
      {...args}
      options={renderOptions()}
      defaultSelected="sandbox"
    />
  ),
  args: {
    label: 'Environment',
  },
};

export const ControlledSelection: Story = {
  render: (args) => <ControlledSelect {...args} />,
  args: {
    label: 'Environment',
    prefix: 'Current:',
  },
};
