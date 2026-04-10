import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, waitFor, within } from 'storybook/test';

import { LayoutDecorator } from '../../../util/storybook/LayoutDecorator.tsx';
import { Button } from '../../actions/Button/Button.tsx';
import { Panel } from '../../containers/Panel/Panel.tsx';

import { DialogModal } from './DialogModal.tsx';

const meta = {
  component: DialogModal,
} satisfies Meta<typeof DialogModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CenteredTrigger: Story = {
  render: () => (
    <LayoutDecorator size="large">
      <Panel>
        <Panel.Heading>Cluster controls</Panel.Heading>
        <DialogModal
          title="Rotate credentials"
          trigger={({ activate }) => (
            <Button
              label="Open modal"
              onPress={activate}
            />
          )}
        >
          Review the affected workloads before starting the rotation.
        </DialogModal>
      </Panel>
    </LayoutDecorator>
  ),
  play: async ({ canvas, canvasElement, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: /open modal/i }));

    const body = within(canvasElement.ownerDocument.body);
    const dialog = await body.findByRole('dialog', { name: /rotate credentials/i });

    await expect(dialog).toHaveTextContent(/affected workloads/i);

    await userEvent.click(body.getByRole('button', { name: /close dialog/i }));
    await waitFor(() => {
      expect(body.queryByRole('dialog', { name: /rotate credentials/i })).not.toBeInTheDocument();
    });
  },
};

export const SlideOver: Story = {
  render: () => (
    <LayoutDecorator size="large">
      <DialogModal
        title="Connection details"
        display="slide-over"
        size="large"
        trigger={({ activate }) => (
          <Button
            kind="secondary"
            label="Open connection panel"
            onPress={activate}
          />
        )}
      >
        The slide-over keeps related connection metadata available while the
        user continues working in the main layout.
      </DialogModal>
    </LayoutDecorator>
  ),
  play: async ({ canvas, canvasElement, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: /open connection panel/i }));

    const body = within(canvasElement.ownerDocument.body);
    const dialog = await body.findByRole('dialog', { name: /connection details/i });

    await expect(dialog).toHaveTextContent(/related connection metadata/i);

    await userEvent.click(body.getByRole('button', { name: /cancel/i }));
    await waitFor(() => {
      expect(body.queryByRole('dialog', { name: /connection details/i })).not.toBeInTheDocument();
    });
  },
};

export const OpenByDefault: Story = {
  render: () => (
    <LayoutDecorator size="large">
      <DialogModal
        activeDefault
        title="Request approved"
        actions={<DialogModal.SubmitAction label="Done" />}
      >
        The approval details are available immediately when the modal mounts.
      </DialogModal>
    </LayoutDecorator>
  ),
  play: async ({ canvasElement, userEvent }) => {
    const body = within(canvasElement.ownerDocument.body);
    const dialog = await body.findByRole('dialog', { name: /request approved/i });

    await expect(dialog).toHaveTextContent(/approval details are available immediately/i);

    await userEvent.click(body.getByRole('button', { name: /done/i }));
    await waitFor(() => {
      expect(body.queryByRole('dialog', { name: /request approved/i })).not.toBeInTheDocument();
    });
  },
};
