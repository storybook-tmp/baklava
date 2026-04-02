import type { Meta, StoryObj } from '@storybook/react-vite';
import { Form } from './Form';
import { Input } from '../../../forms/controls/Input/Input';
import { Button } from '../../../actions/Button/Button';

const meta = {
  title: 'AI Generated/Complex/Form',
  component: Form,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Form {...args}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Input placeholder="Name" type="text" name="name" />
        <Input placeholder="Email" type="email" name="email" />
        <Input placeholder="Message" type="text" name="message" />
        <Button label="Submit" kind="primary" />
      </div>
    </Form>
  ),
};

export const WithAction: Story = {
  args: {
    action: async (formData: FormData) => {
      await new Promise(resolve => setTimeout(resolve, 500));
      console.log('Form submitted with data:', Object.fromEntries(formData));
    },
  },
  render: (args) => (
    <Form {...args}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Input placeholder="Username" type="text" name="username" />
        <Input placeholder="Password" type="password" name="password" />
        <Button label="Login" kind="primary" />
      </div>
    </Form>
  ),
};
