import type { Meta, StoryObj } from '@storybook/react-vite';

import { Form } from '../../forms/context/Form/Form.tsx';
import { SubmitButton } from '../../forms/context/SubmitButton/SubmitButton.tsx';
import { InputField } from '../../forms/fields/InputField/InputField.tsx';
import { DialogLayout } from '../../../layouts/DialogLayout/DialogLayout.tsx';
import { FormLayout } from '../../../layouts/FormLayout/FormLayout.tsx';

import { DialogModal } from './DialogModal.tsx';

const meta = {
  component: DialogModal,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof DialogModal>;

export default meta;
type Story = StoryObj<typeof meta>;

const noopFormAction = async (_formData: FormData) => {};

export const Confirmation: Story = {
  render: () => (
    <DialogModal
      activeDefault
      role="alertdialog"
      renderMethod="inline"
      title="Rotate API key"
      size="small"
      allowUserClose={false}
      actions={
        <>
          <DialogModal.CancelAction label="Keep current key" />
          <DialogModal.SubmitAction label="Rotate key" />
        </>
      }
    >
      Rotating the signing key issues a fresh credential immediately and starts the grace period for the current key.
    </DialogModal>
  ),
};

export const SlideOverEditor: Story = {
  render: () => (
    <DialogModal
      activeDefault
      display="slide-over"
      renderMethod="inline"
      title="Edit policy assignment"
      size="large"
      actions={<DialogModal.SubmitAction label="Save changes" />}
    >
      <DialogLayout
        title="Update the deployment audience before you publish the next access policy bundle."
        aside={
          <>
            <DialogLayout.Logo subtitle="Armor" subtitleTrademark />
            <DialogLayout.Hint>
              <DialogLayout.Icon icon="policy" />
              Changes here only affect the selected workspace until you publish a new organization default.
            </DialogLayout.Hint>
          </>
        }
      >
        <Form action={noopFormAction}>
          <FormLayout>
            <InputField label="Policy set name" defaultValue="Project Atlas - Production" />
            <InputField label="Approval group" defaultValue="Security Engineering" />
            <SubmitButton label="Save policy assignment" />
          </FormLayout>
        </Form>
      </DialogLayout>
    </DialogModal>
  ),
};

export const LoadingState: Story = {
  render: () => (
    <DialogModal activeDefault renderMethod="inline" title="Preparing export" state="loading" size="medium">
      We are collecting audit entries and policy attachments for the selected reporting window.
    </DialogModal>
  ),
};
