import type { Meta, StoryObj } from '@storybook/react-vite';

import { LayoutDecorator } from '../../../../util/storybook/LayoutDecorator.tsx';
import { Select } from './Select.tsx';

const environmentLabels = new Map<string, string>([
  ['dev', 'Development'],
  ['staging', 'Staging'],
  ['prod', 'Production'],
]);

const renderOptions = () => (
  <>
    <Select.Header itemKey="environments" label="Environments" />
    <Select.Option itemKey="dev" label="Development" />
    <Select.Option itemKey="staging" label="Staging" />
    <Select.Option itemKey="prod" label="Production" />
  </>
);

const meta = {
  title: 'AI Generated/Complex/Select',
  component: Select,
  parameters: {
    layout: 'padded',
  },
  render: args => (
    <LayoutDecorator size="small">
      <Select {...args} />
    </LayoutDecorator>
  ),
  args: {
    formatItemLabel: itemKey => environmentLabels.get(itemKey),
    label: 'Environment',
    options: renderOptions(),
  },
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Empty: Story = {};

export const Preselected: Story = {
  args: {
    defaultSelected: 'prod',
  },
};
