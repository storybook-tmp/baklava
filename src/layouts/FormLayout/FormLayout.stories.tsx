import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import { Form } from '../../components/forms/context/Form/Form.tsx';
import { SubmitButton } from '../../components/forms/context/SubmitButton/SubmitButton.tsx';
import { CheckboxField } from '../../components/forms/fields/CheckboxField/CheckboxField.tsx';
import { InputField } from '../../components/forms/fields/InputField/InputField.tsx';
import { FormLayout } from './FormLayout.tsx';

const meta = {
  component: FormLayout,
} satisfies Meta<typeof FormLayout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Form>
      <FormLayout>
        <InputField label="Workspace name" inputProps={{ defaultValue: 'Armor production' }} />
        <InputField label="Owner email" inputProps={{ defaultValue: 'owner@fortanix.com' }} />
      </FormLayout>
    </Form>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByLabelText('Workspace name')).toHaveValue('Armor production');
    await expect(canvas.getByLabelText('Owner email')).toHaveValue('owner@fortanix.com');
  },
};

export const WithCheckboxes: Story = {
  render: () => (
    <Form>
      <FormLayout>
        <CheckboxField
          title="Notifications"
          label="Send weekly digest"
          description="Email a summary of audit activity every Friday."
          defaultChecked
        />
        <CheckboxField
          label="Include compliance alerts"
          description="Add critical policy violations to the same digest."
        />
      </FormLayout>
    </Form>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByLabelText('Send weekly digest')).toBeChecked();
    await expect(canvas.getByText(/critical policy violations/i)).toBeVisible();
  },
};

export const WithSubmitAction: Story = {
  render: () => (
    <Form>
      <FormLayout>
        <InputField label="API key label" inputProps={{ defaultValue: 'Production backup key' }} />
        <SubmitButton label="Create key" />
      </FormLayout>
    </Form>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('button', { name: 'Create key' })).toBeVisible();
    await expect(canvas.getByLabelText('API key label')).toHaveValue('Production backup key');
  },
};
