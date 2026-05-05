import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn } from 'storybook/test';

import { CheckboxGroup } from '../../controls/CheckboxGroup/CheckboxGroup.tsx';
import { RadioGroup } from '../../controls/RadioGroup/RadioGroup.tsx';
import { Switch } from '../../controls/Switch/Switch.tsx';
import { InputField } from '../../fields/InputField/InputField.tsx';
import { FormLayout } from '../../../../layouts/FormLayout/FormLayout.tsx';
import { SubmitButton } from '../SubmitButton/SubmitButton.tsx';
import { Form } from './Form.tsx';


const meta = {
  component: Form,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SignIn: Story = {
  args: {
    onSubmit: fn(),
  },
  render: args => (
    <Form {...args}>
      <FormLayout>
        <InputField label="Email" name="email" autoComplete="email" />
        <InputField label="Password" name="password" type="password" autoComplete="current-password" />
        <SubmitButton label="Sign in" />
      </FormLayout>
    </Form>
  ),
  play: async ({ canvas, userEvent, args }) => {
    await userEvent.type(canvas.getByLabelText('Email'), 'security@example.com');
    await userEvent.type(canvas.getByLabelText('Password'), 'correct horse battery staple');
    await userEvent.click(canvas.getByRole('button', { name: 'Sign in' }));
    
    await expect(args.onSubmit).toHaveBeenCalledOnce();
  },
};

export const Preferences: Story = {
  render: () => (
    <Form>
      <FormLayout>
        <Switch.Labeled label="Require MFA" defaultChecked />
        <CheckboxGroup label="Alert channels" defaultSelected={new Set(['email'])} orientation="vertical">
          <CheckboxGroup.Checkbox checkboxKey="email" label="Email" />
          <CheckboxGroup.Checkbox checkboxKey="slack" label="Slack" />
          <CheckboxGroup.Checkbox checkboxKey="webhook" label="Webhook" />
        </CheckboxGroup>
        <RadioGroup label="Session timeout" defaultSelected="medium" orientation="vertical">
          <RadioGroup.Button radioKey="short" label="15 minutes" />
          <RadioGroup.Button radioKey="medium" label="1 hour" />
          <RadioGroup.Button radioKey="long" label="8 hours" />
        </RadioGroup>
      </FormLayout>
    </Form>
  ),
  play: async ({ canvas, userEvent }) => {
    await expect(canvas.getByRole('switch', { name: 'Require MFA' })).toBeChecked();
    await expect(canvas.getByRole('checkbox', { name: 'Email' })).toBeChecked();
    await expect(canvas.getByRole('radio', { name: '1 hour' })).toBeChecked();
    
    await userEvent.click(canvas.getByRole('checkbox', { name: 'Slack' }));
    await expect(canvas.getByRole('checkbox', { name: 'Slack' })).toBeChecked();
  },
};

export const DescribedFields: Story = {
  render: () => (
    <Form>
      <FormLayout>
        <InputField
          label="Cluster name"
          name="clusterName"
          defaultValue="prod-dsm-01"
          description="Names appear in audit log filters and deployment summaries."
        />
        <InputField
          label="Region"
          name="region"
          defaultValue="us-west-2"
          labelOptional
        />
      </FormLayout>
    </Form>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByLabelText('Cluster name')).toHaveValue('prod-dsm-01');
    await expect(canvas.getByText(/audit log filters/i)).toBeVisible();
    await expect(canvas.getByText('(Optional)')).toBeVisible();
  },
};
