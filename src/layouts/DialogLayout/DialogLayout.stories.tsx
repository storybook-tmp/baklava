import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ReactNode } from 'react';

import { Dialog } from '../../components/containers/Dialog/Dialog.tsx';
import { Prose } from '../../typography/Prose/Prose.tsx';
import { DialogLayout } from './DialogLayout.tsx';

const meta = {
  component: DialogLayout,
} satisfies Meta<typeof DialogLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CreateConnection: Story = {
  render: () =>
    renderDialog({
      title: 'Create connection',
      subtitle: 'Data Security Manager',
      aside: (
        <>
          <DialogLayout.Logo subtitle="Data Security Manager" subtitleTrademark />
          <DialogLayout.Hint>Choose the connection details you want operators to review before rollout.</DialogLayout.Hint>
        </>
      ),
      content: (
        <Prose>
          <p>Connection setup keeps certificate ownership, network scope, and rotation policy aligned before activation.</p>
        </Prose>
      ),
    }),
};

export const RotationReview: Story = {
  render: () =>
    renderDialog({
      title: 'Review rotation plan',
      subtitle: 'Armor',
      aside: (
        <>
          <DialogLayout.Logo subtitle="Armor" />
          <DialogLayout.Hint>Confirm the maintenance window before rotating production certificates.</DialogLayout.Hint>
        </>
      ),
      content: (
        <Prose>
          <p>Use the review step to confirm operator ownership, fallback plans, and audit requirements for the change.</p>
        </Prose>
      ),
    }),
};

export const ContentOnly: Story = {
  render: () =>
    renderDialog({
      title: 'Inspect request details',
      subtitle: 'Approval request',
      content: (
        <Prose>
          <p>This layout can also focus on narrative content when supporting context is already visible elsewhere in the flow.</p>
        </Prose>
      ),
    }),
};

function renderDialog(args: {
  title: string;
  subtitle: string;
  content: ReactNode;
  aside?: ReactNode;
}) {
  const { title, subtitle, content, aside } = args;

  return (
    <div style={{ maxWidth: '72rem', margin: '2rem auto' }}>
      <Dialog title={title} onRequestClose={() => {}}>
        <DialogLayout title={subtitle} aside={aside}>
          {content}
        </DialogLayout>
      </Dialog>
    </div>
  );
}
