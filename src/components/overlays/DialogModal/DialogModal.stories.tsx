import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '../../actions/Button/Button.tsx';
import { DialogModal } from './DialogModal.tsx';


const meta = {
  component: DialogModal,
} satisfies Meta<typeof DialogModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Open: Story = {
  render: () => (
    <DialogModal
      title="Modal"
      activeDefault={true}
      trigger={({ activate }) => <Button label="Open modal" onPress={activate} />}
    >
      Test
    </DialogModal>
  ),
};

export const SlideOver: Story = {
  render: () => (
    <DialogModal
      title="Modal"
      activeDefault={true}
      display="slide-over"
      trigger={({ activate }) => <Button label="Open modal" onPress={activate} />}
    >
      Test
    </DialogModal>
  ),
};
