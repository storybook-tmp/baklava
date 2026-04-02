import type { Meta, StoryObj } from '@storybook/react-vite';

import { LayoutDecorator } from '../../../../util/storybook/LayoutDecorator.tsx';

import { Select } from './Select.tsx';


const environmentOptions = (
  <>
    <Select.Header itemKey="header-environments" label="Available environments" />
    <Select.Option itemKey="dev-us" label="Development / US East" />
    <Select.Option itemKey="staging-eu" label="Staging / EU Central" />
    <Select.Option itemKey="prod-apac" label="Production / APAC" />
  </>
);

const meta = {
  title: 'AI Generated/Complex/Select',
  component: Select,
  args: {
    label: 'Environment',
    name: 'environment',
    options: environmentOptions,
  },
  parameters: {
    layout: 'centered',
  },
  render: args => (
    <LayoutDecorator size="small">
      <Select {...args} />
    </LayoutDecorator>
  ),
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultSelected: Story = {
  args: {
    defaultSelected: 'staging-eu',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    selected: 'prod-apac',
  },
};
