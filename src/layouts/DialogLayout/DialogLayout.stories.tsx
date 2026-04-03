import type { Meta, StoryObj } from '@storybook/react-vite';

import { Dialog } from '../../components/containers/Dialog/Dialog.tsx';
import { Form } from '../../components/forms/context/Form/Form.tsx';
import { SubmitButton } from '../../components/forms/context/SubmitButton/SubmitButton.tsx';
import { CheckboxField } from '../../components/forms/fields/CheckboxField/CheckboxField.tsx';
import { InputField } from '../../components/forms/fields/InputField/InputField.tsx';
import { Link } from '../../components/actions/Link/Link.tsx';
import { FormLayout } from '../FormLayout/FormLayout.tsx';

import { DialogLayout } from './DialogLayout.tsx';

import './DialogLayoutLogo_stories.scss';

const meta = {
  component: DialogLayout,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof DialogLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

const noop = () => undefined;
const noopFormAction = async (_formData: FormData) => {};

export const ConnectAccount: Story = {
  render: () => (
    <Dialog title="Connect a cloud account" onRequestClose={noop} actions={<Dialog.SubmitAction label="Continue" />}>
      <DialogLayout
        title="Use a dedicated service identity so Baklava can sync policies without personal credentials."
        aside={
          <>
            <DialogLayout.Logo subtitle="Data Security Manager" subtitleClassName="custom-subtitle" subtitleTrademark />
            <DialogLayout.Hint>
              <DialogLayout.Icon icon="cloud-accounts" />
              Choose the account that should own the long-lived service connection.
            </DialogLayout.Hint>
            <DialogLayout.Hint>
              <DialogLayout.Icon icon="audit-log" />
              Every connection attempt is recorded in the audit trail automatically.
            </DialogLayout.Hint>
          </>
        }
      >
        <Form action={noopFormAction}>
          <FormLayout>
            <InputField label="Account name" description="Shown to operators in the sidebar and audit log." />
            <InputField label="Role ARN" />
            <CheckboxField
              label="Trust this account for future policy deployments"
              description="You can revoke deployment trust later from project settings."
            />
            <SubmitButton label="Save connection" />
          </FormLayout>
        </Form>
      </DialogLayout>
    </Dialog>
  ),
};

export const RotateSigningKey: Story = {
  render: () => (
    <Dialog
      role="alertdialog"
      title="Rotate signing key"
      onRequestClose={noop}
      actions={<Dialog.SubmitAction label="Rotate key" />}
    >
      <DialogLayout
        title="This operation issues a new signing key and starts the grace period for the current key immediately."
        aside={
          <>
            <DialogLayout.Logo subtitle="Key Insight" subtitleClassName="custom-subtitle" />
            <DialogLayout.Hint>
              <DialogLayout.Icon icon="warning" />
              Services still using the previous key must be updated before the grace period ends.
            </DialogLayout.Hint>
          </>
        }
      >
        <FormLayout>
          <CheckboxField
            title="Acknowledgement"
            label="I have reviewed the dependent services that still use the active key"
            description="This confirmation is required before a key rotation can proceed."
          />
          <Link href="#">Review dependency report</Link>
        </FormLayout>
      </DialogLayout>
    </Dialog>
  ),
};

export const ReviewDeployment: Story = {
  render: () => (
    <Dialog title="Review deployment plan" onRequestClose={noop} actions={<Dialog.SubmitAction label="Approve" />}>
      <DialogLayout
        title="Deployment will update the selected project and publish the new access policy bundle."
        aside={
          <>
            <DialogLayout.Logo subtitle="Armor" subtitleClassName="custom-subtitle" />
            <DialogLayout.Hint>
              <DialogLayout.Icon icon="status-success" />
              No policy violations were found in the staged environment.
            </DialogLayout.Hint>
          </>
        }
      >
        <FormLayout>
          <p>Project Atlas will receive three updated service policies, one new secret bundle, and one key rotation.</p>
          <p>Operators will continue using the current credentials until the staged health checks finish.</p>
        </FormLayout>
      </DialogLayout>
    </Dialog>
  ),
};
