import type { Meta, StoryObj } from '@storybook/react-vite';

import { LayoutDecorator } from '../../../../util/storybook/LayoutDecorator.tsx';
import { Select } from './Select.tsx';


const options = (
  <>
    <Select.Option itemKey="dsm" label="Data Security Manager" icon="security-dashboard" />
    <Select.Option itemKey="ki" label="Key Insight" icon="key-link" />
    <Select.Option itemKey="iam" label="Identity & Access Management" icon="user-authentication" />
  </>
);

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
    label: 'Solution',
    options,
  },
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Placeholder: Story = {};

export const WithDefaultSelection: Story = {
  args: {
    defaultSelected: 'ki',
  },
};
