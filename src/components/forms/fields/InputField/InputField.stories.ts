import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { Form } from '../../context/Form/Form.tsx';
import { InputField } from './InputField.tsx';


const meta = {
  title: 'AI Generated/Medium/InputField',
  component: InputField,
  args: {
    inputProps: {
      placeholder: 'armor@example.com',
    },
    label: 'Email address',
    name: 'email',
  },
} satisfies Meta<typeof InputField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => renderInputField(args),
};

export const OptionalWithTooltip: Story = {
  args: {
    description: 'We will only use this address for release and incident notifications.',
    labelOptional: true,
    labelTooltip: 'Use a shared team inbox when multiple operators should receive updates.',
  },
  render: args => renderInputField(args),
};

function renderInputField(args: React.ComponentProps<typeof InputField>) {
  return React.createElement(
    Form,
    { style: { maxWidth: '28rem' } },
    React.createElement(InputField, args),
  );
}
