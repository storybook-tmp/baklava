import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '../../actions/Button/Button.tsx';
import { DialogModal } from './DialogModal.tsx';

const meta = {
  title: 'AI Generated/Complex/DialogModal',
  component: DialogModal,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof DialogModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Center: Story = {
  args: {
    title: 'Modal Dialog',
    display: 'center',
    size: 'medium',
    children: 'This is a centered modal dialog.',
    trigger: (activate) => (
      <Button label="Open Modal" kind="primary" onPress={activate} />
    ),
  },
};

export const SlideOver: Story = {
  args: {
    title: 'Slide Over Panel',
    display: 'slide-over',
    slideOverPosition: 'right',
    children: 'This panel slides in from the right.',
    trigger: (activate) => (
      <Button label="Open Slide Over" kind="secondary" onPress={activate} />
    ),
  },
};
