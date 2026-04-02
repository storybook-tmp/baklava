import type { Meta, StoryObj } from '@storybook/react-vite';

import { LayoutDecorator } from '../../../util/storybook/LayoutDecorator.tsx';
import { DialogModal } from './DialogModal.tsx';

const meta = {
  title: 'AI Generated/Complex/DialogModal',
  component: DialogModal,
  parameters: {
    layout: 'padded',
  },
  render: args => (
    <LayoutDecorator size="large">
      <DialogModal {...args}>
        <p>
          Review the pending changes before applying them to the selected environments.
        </p>
        <p>
          This update will refresh configuration values and restart dependent background workers.
        </p>
      </DialogModal>
    </LayoutDecorator>
  ),
  args: {
    activeDefault: true,
    renderMethod: 'inline',
    title: 'Apply configuration changes',
  },
} satisfies Meta<typeof DialogModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Centered: Story = {
  args: {
    actions: <DialogModal.SubmitAction label="Apply changes" />,
  },
};

export const SlideOverLoading: Story = {
  args: {
    display: 'slide-over',
    size: 'large',
    state: 'loading',
    title: 'Review service details',
  },
};
