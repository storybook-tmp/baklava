import type { Meta, StoryObj } from '@storybook/react-vite';

import { LayoutDecorator } from '../../../util/storybook/LayoutDecorator.tsx';

import { DialogModal } from './DialogModal.tsx';

const meta = {
  title: 'AI Generated/Complex/DialogModal',
  component: DialogModal,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    Story => (
      <LayoutDecorator size="large" style={{ minBlockSize: '32rem' }}>
        <Story />
      </LayoutDecorator>
    ),
  ],
} satisfies Meta<typeof DialogModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CenteredOpen: Story = {
  args: {
    activeDefault: true,
    renderMethod: 'inline',
    title: 'Promote configuration',
    children: 'Review the staged settings before promoting them to production.',
    actions: <DialogModal.SubmitAction label="Promote" />,
  },
};

export const SlideOverLoading: Story = {
  args: {
    activeDefault: true,
    renderMethod: 'inline',
    display: 'slide-over',
    slideOverPosition: 'right',
    size: 'large',
    title: 'Syncing environments',
    children: 'Policy bundles are being synced to the selected environment.',
    state: 'loading',
    allowUserClose: false,
    showCancelAction: false,
    showCloseIcon: false,
  },
};
