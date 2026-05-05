import type { Meta, StoryObj } from '@storybook/react-vite';
import { DialogModal } from './DialogModal.tsx';

const meta = {
  title: 'AI Generated/Complex/DialogModal',
  component: DialogModal,
} satisfies Meta<typeof DialogModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    activeDefault: true,
    size: 'medium',
    display: 'center',
    title: 'Dialog Title',
    children: 'This is the dialog content.',
    renderMethod: 'inline',
  },
};

export const SlideOver: Story = {
  args: {
    activeDefault: true,
    display: 'slide-over',
    slideOverPosition: 'right',
    size: 'medium',
    title: 'Slide Over Panel',
    children: 'This dialog slides in from the right.',
    renderMethod: 'inline',
  },
};
