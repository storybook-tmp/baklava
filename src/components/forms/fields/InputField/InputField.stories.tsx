import type { Meta, StoryObj } from '@storybook/react-vite';

import { LayoutDecorator } from '../../../../util/storybook/LayoutDecorator.tsx';
import { Form } from '../../context/Form/Form.tsx';
import { InputField } from './InputField.tsx';

const meta = {
  title: 'AI Generated/Medium/InputField',
  component: InputField,
  parameters: {
    layout: 'padded',
  },
  render: args => (
    <LayoutDecorator size="small">
      <Form>
        <InputField {...args} />
      </Form>
    </LayoutDecorator>
  ),
  args: {
    label: 'Hostname',
    placeholder: 'Enter a hostname',
  },
} satisfies Meta<typeof InputField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const OptionalWithDescription: Story = {
  args: {
    description: 'Used to verify connectivity before the service is enabled.',
    icon: 'search',
    iconLabel: 'Search',
    inputProps: {
      defaultValue: 'api.fortanix.example',
    },
    labelOptional: true,
    labelTooltip: 'Provide the fully qualified domain name for the endpoint.',
  },
};
