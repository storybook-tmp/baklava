import type { Meta, StoryObj } from '@storybook/react-vite';

import { LayoutDecorator } from '../../../util/storybook/LayoutDecorator.tsx';

import { DialogModal } from './DialogModal.tsx';


const meta = {
  title: 'AI Generated/Complex/DialogModal',
  component: DialogModal,
  parameters: {
    layout: 'fullscreen',
  },
  render: args => (
    <LayoutDecorator size="large" style={{ minBlockSize: '32rem' }}>
      <DialogModal {...args} />
    </LayoutDecorator>
  ),
} satisfies Meta<typeof DialogModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CenteredOpen: Story = {
  args: {
    activeDefault: true,
    renderMethod: 'inline',
    showCancelAction: false,
    title: 'Rotate credentials',
    children:
      'Review the impacted workloads before starting the rotation so the owning teams can validate the change.',
    actions: (
      <>
        <DialogModal.CancelAction />
        <DialogModal.SubmitAction label="Start rotation" />
      </>
    ),
  },
};

export const SlideOverLoading: Story = {
  args: {
    activeDefault: true,
    display: 'slide-over',
    renderMethod: 'inline',
    size: 'large',
    state: 'loading',
    title: 'Provisioning environment',
    children:
      'A new sandbox is being prepared. This story keeps the modal mounted so loading visuals can be reviewed.',
    showCancelAction: false,
  },
};
