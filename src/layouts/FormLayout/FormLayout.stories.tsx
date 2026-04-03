import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '../../components/actions/Button/Button.tsx';
import { Panel } from '../../components/containers/Panel/Panel.tsx';
import { Form } from '../../components/forms/context/Form/Form.tsx';
import { SubmitButton } from '../../components/forms/context/SubmitButton/SubmitButton.tsx';
import { CheckboxField } from '../../components/forms/fields/CheckboxField/CheckboxField.tsx';
import { InputField } from '../../components/forms/fields/InputField/InputField.tsx';
import { TextAreaField } from '../../components/forms/fields/TextAreaField/TextAreaField.tsx';
import { RadioGroup } from '../../components/forms/controls/RadioGroup/RadioGroup.tsx';

import { FormLayout } from './FormLayout.tsx';

const meta = {
  component: FormLayout,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof FormLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

const noopFormAction = async (_formData: FormData) => {};

export const InviteMember: Story = {
  render: () => (
    <Panel style={{ inlineSize: 'min(44rem, 100vw - 2rem)' }}>
      <Panel.Heading>Invite a project member</Panel.Heading>
      <Form action={noopFormAction}>
        <FormLayout>
          <InputField label="Full name" />
          <InputField label="Work email" type="email" />
          <RadioGroup label="Access level" defaultSelected="operator" orientation="vertical">
            <RadioGroup.Button radioKey="operator" label="Operator" />
            <RadioGroup.Button radioKey="approver" label="Approver" />
            <RadioGroup.Button radioKey="administrator" label="Administrator" />
          </RadioGroup>
          <SubmitButton label="Send invitation" />
        </FormLayout>
      </Form>
    </Panel>
  ),
};

export const ConfigureAlertRouting: Story = {
  render: () => (
    <Panel style={{ inlineSize: 'min(44rem, 100vw - 2rem)' }}>
      <Panel.Heading>Configure alert routing</Panel.Heading>
      <Form action={noopFormAction}>
        <FormLayout>
          <InputField
            label="Destination email"
            type="email"
            labelTooltip="Use a shared mailbox when multiple operators should receive the same alert."
          />
          <CheckboxField
            title="Delivery channels"
            label="Include policy drift notifications"
            description="Send a notification whenever a protected resource diverges from the active policy."
          />
          <CheckboxField
            label="Include deployment completion notifications"
            description="Operators receive a message when a staged rollout finishes."
            defaultChecked
          />
          <SubmitButton label="Save routing" />
        </FormLayout>
      </Form>
    </Panel>
  ),
};

export const RequestWorkspace: Story = {
  render: () => (
    <Panel style={{ inlineSize: 'min(44rem, 100vw - 2rem)' }}>
      <Panel.Heading>Create a workspace request</Panel.Heading>
      <Form action={noopFormAction}>
        <FormLayout>
          <InputField label="Workspace name" description="Use the service or environment name operators already know." />
          <TextAreaField
            label="Justification"
            description="Explain why the workspace is needed and which teams will depend on it."
          />
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <Button kind="secondary" label="Save draft" />
            <SubmitButton label="Submit request" />
          </div>
        </FormLayout>
      </Form>
    </Panel>
  ),
};
