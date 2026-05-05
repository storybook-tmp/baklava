import type { Meta, StoryObj } from '@storybook/react-vite';

import { LayoutDecorator } from '../../../util/storybook/LayoutDecorator.tsx';
import { DialogModal } from './DialogModal.tsx';


const meta = {
  title: 'AI Generated/Complex/DialogModal',
  component: DialogModal,
  decorators: [
    Story => (
      <LayoutDecorator size="x-large" style={{ minBlockSize: '36rem' }}>
        <Story />
      </LayoutDecorator>
    ),
  ],
  args: {
    activeDefault: true,
    renderMethod: 'inline',
    title: 'Rotate service credentials',
    children: (
      <p>
        Confirm the next credential rotation window and notify downstream owners before rollout.
      </p>
    ),
    actions: <DialogModal.SubmitAction label="Confirm rotation" />,
  },
} satisfies Meta<typeof DialogModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Centered: Story = {};

export const SlideOver: Story = {
  args: {
    display: 'slide-over',
    size: 'large',
    title: 'Review deployment notes',
    children: (
      <p>
        Inspect release notes, linked incidents, and post-deploy checks before continuing.
      </p>
    ),
    actions: <DialogModal.SubmitAction label="Mark as reviewed" />,
  },
};
