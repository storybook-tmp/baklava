import type { Meta, StoryObj } from '@storybook/react-vite';
import { DialogModal } from './DialogModal.tsx';
import { Button } from '../../actions/Button/Button.tsx';

const meta = {
  title: 'AI Generated/Complex/DialogModal',
  component: DialogModal,
} satisfies Meta<typeof DialogModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Confirm Action',
    trigger: (activate) => (
      <Button label="Open Modal" kind="primary" onPress={activate} />
    ),
    children: <p>Are you sure you want to proceed with this action?</p>,
    actions: (
      <>
        <DialogModal.CancelAction label="Cancel" />
        <DialogModal.SubmitAction label="Confirm" />
      </>
    ),
  },
};

export const SlideOver: Story = {
  args: {
    title: 'Settings Panel',
    display: 'slide-over',
    size: 'large',
    trigger: (activate) => (
      <Button label="Open Settings" kind="secondary" onPress={activate} />
    ),
    children: <p>Configure your settings here.</p>,
  },
};
