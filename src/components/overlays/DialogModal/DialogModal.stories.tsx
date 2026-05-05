import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '../../actions/Button/Button.tsx';
import { Panel } from '../../containers/Panel/Panel.tsx';
import { Dialog } from '../../containers/Dialog/Dialog.tsx';
import { Prose } from '../../../typography/Prose/Prose.tsx';
import { DialogLayout } from '../../../layouts/DialogLayout/DialogLayout.tsx';
import { DialogModal } from './DialogModal.tsx';

const meta = {
  component: DialogModal,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof DialogModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CenteredOpen: Story = {
  render: () => (
    <div style={{ padding: '2rem' }}>
      <DialogModal
        activeDefault
        renderMethod="inline"
        title="Rotate certificate"
        size="medium"
        actions={<Dialog.SubmitAction label="Rotate now" />}
      >
        <DialogLayout
          title="Production certificate"
          aside={
            <>
              <DialogLayout.Logo subtitle="Data Security Manager" subtitleTrademark />
              <DialogLayout.Hint>Review the maintenance window before applying the new certificate.</DialogLayout.Hint>
            </>
          }
        >
          <Prose>
            <p>Rotation will update the active certificate and notify operators who monitor the production environment.</p>
          </Prose>
        </DialogLayout>
      </DialogModal>
    </div>
  ),
};

export const SlideOverOpen: Story = {
  render: () => (
    <div style={{ padding: '2rem' }}>
      <DialogModal
        activeDefault
        renderMethod="inline"
        display="slide-over"
        slideOverPosition="right"
        title="Account details"
        size="large"
        actions={<Dialog.SubmitAction label="Save" />}
      >
        <Prose>
          <p>Use the slide-over layout when operators need to review account details without losing the surrounding context.</p>
        </Prose>
      </DialogModal>
    </div>
  ),
};

export const TriggerInsidePanel: Story = {
  render: () => (
    <div style={{ padding: '2rem' }}>
      <Panel>
        <Panel.Heading>Managed identities</Panel.Heading>
        <DialogModal
          title="Create service identity"
          trigger={({ activate }) => <Button kind="primary" label="Open modal" onPress={activate} />}
        >
          Provide a descriptive owner, environment scope, and review window before saving this new identity.
        </DialogModal>
      </Panel>
    </div>
  ),
};
