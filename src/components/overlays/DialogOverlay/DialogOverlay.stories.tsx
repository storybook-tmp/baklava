import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '../../actions/Button/Button.tsx';
import { Dialog } from '../../containers/Dialog/Dialog.tsx';
import { Prose } from '../../../typography/Prose/Prose.tsx';
import { PageLayout } from '../../../layouts/PageLayout/PageLayout.tsx';
import { DialogOverlay } from './DialogOverlay.tsx';

const meta = {
  component: DialogOverlay,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof DialogOverlay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RightDrawer: Story = {
  render: () => (
    <DialogOverlay
      activeDefault
      title="Filter assets"
      actions={<Dialog.SubmitAction label="Apply filters" />}
    >
      <Prose>
        <p>Use a drawer when you want to keep the page visible while narrowing the current result set.</p>
      </Prose>
    </DialogOverlay>
  ),
};

export const LeftDrawer: Story = {
  render: () => (
    <DialogOverlay
      activeDefault
      slideOverPosition="left"
      size="large"
      title="Workspace details"
      actions={<Dialog.SubmitAction label="Update details" />}
    >
      <Prose>
        <p>The left-side drawer is useful for structured workspace metadata, ownership notes, and audit context.</p>
      </Prose>
    </DialogOverlay>
  ),
};

export const TriggerFromPage: Story = {
  render: () => (
    <div style={{ padding: '2rem' }}>
      <PageLayout>
        <PageLayout.Header title={<PageLayout.Heading>Assets</PageLayout.Heading>}>
          <DialogOverlay
            title="Create filter set"
            trigger={({ activate }) => <Button kind="secondary" label="Open overlay" onPress={activate} />}
            actions={<Dialog.SubmitAction label="Save filter" />}
          >
            Save a named filter set so operators can quickly return to the same asset scope later.
          </DialogOverlay>
        </PageLayout.Header>
      </PageLayout>
    </div>
  ),
};
