import type { Meta, StoryObj } from '@storybook/react-vite';

import { Panel } from '../../../containers/Panel/Panel.tsx';
import { Select } from '../../controls/Select/Select.tsx';
import { Form } from '../../context/Form/Form.tsx';
import { SubmitButton } from '../../context/SubmitButton/SubmitButton.tsx';
import { CheckboxField } from '../CheckboxField/CheckboxField.tsx';
import { TextAreaField } from '../TextAreaField/TextAreaField.tsx';
import { InputField } from './InputField.tsx';
import { FormLayout } from '../../../../layouts/FormLayout/FormLayout.tsx';

const meta = {
  component: InputField,
} satisfies Meta<typeof InputField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AccountSettings: Story = {
  render: () => (
    <div style={{ maxWidth: '42rem', padding: '2rem' }}>
      <Panel>
        <Panel.Heading>Account settings</Panel.Heading>
        <Form>
          <FormLayout>
            <InputField
              label="Account name"
              placeholder="North America Platform"
              description="This label appears in selectors throughout the workspace."
            />
            <InputField
              label="Owner email"
              type="email"
              placeholder="owner@fortanix.com"
              labelTooltip="Primary contact for audit requests and maintenance notifications."
            />
            <Select
              label="Region"
              defaultSelected="us-east-1"
              options={renderRegionOptions()}
            />
            <CheckboxField
              title="Notifications"
              label="Send daily approval summaries to the primary owner."
              description="Turn this on to receive a consolidated queue digest every morning."
              defaultChecked
            />
            <SubmitButton label="Save changes" />
          </FormLayout>
        </Form>
      </Panel>
    </div>
  ),
};

export const InviteUser: Story = {
  render: () => (
    <div style={{ maxWidth: '42rem', padding: '2rem' }}>
      <Panel>
        <Panel.Heading>Invite a teammate</Panel.Heading>
        <Form>
          <FormLayout>
            <InputField label="Full name" placeholder="Sam Lee" />
            <InputField label="Corporate email" type="email" placeholder="sam.lee@fortanix.com" />
            <TextAreaField
              label="Invitation message"
              optional
              rows={5}
              hint="Optional context that appears in the invitation email."
              placeholder="You will help review certificate rotations for the production environment."
            />
            <CheckboxField
              title="Workspace access"
              titleTooltip="Invited users can review activity and approve requests once they accept."
              label="Allow this teammate to approve maintenance windows."
              description="You can fine-tune permissions again after the invitation is accepted."
            />
            <SubmitButton label="Send invitation" />
          </FormLayout>
        </Form>
      </Panel>
    </div>
  ),
};

export const OpenRegionSelector: Story = {
  render: () => (
    <div style={{ maxWidth: '42rem', padding: '2rem' }}>
      <Panel>
        <Panel.Heading>Environment defaults</Panel.Heading>
        <Form>
          <FormLayout>
            <InputField
              label="Workspace alias"
              placeholder="global-platform"
              labelTooltip="Short internal name used in deployment and approval workflows."
            />
            <Select
              label="Default region"
              defaultSelected="eu-central-1"
              dropdownProps={{ open: true }}
              options={renderRegionOptions()}
            />
            <SubmitButton label="Apply defaults" />
          </FormLayout>
        </Form>
      </Panel>
    </div>
  ),
};

function renderRegionOptions() {
  return (
    <>
      <Select.Header>Available regions</Select.Header>
      <Select.Option itemKey="us-east-1" label="US East 1" />
      <Select.Option itemKey="us-west-2" label="US West 2" />
      <Select.Option itemKey="eu-central-1" label="EU Central 1" />
      <Select.FooterActions>
        <Select.Action itemKey="manage-regions" label="Manage regions" />
      </Select.FooterActions>
    </>
  );
}
