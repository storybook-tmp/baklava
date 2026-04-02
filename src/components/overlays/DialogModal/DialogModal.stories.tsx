import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { DialogModal } from './DialogModal.tsx';
import { Button } from '../../actions/Button/Button.tsx';

const meta = {
  title: 'AI Generated/Complex/DialogModal',
  component: DialogModal,
} satisfies Meta<typeof DialogModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Center: Story = {
  args: {
    activeDefault: true,
    display: 'center',
    size: 'medium',
    title: 'Confirmation',
    children: React.createElement('p', null, 'Are you sure you want to proceed with this action?'),
  },
};

export const SlideOver: Story = {
  args: {
    activeDefault: true,
    display: 'slide-over',
    slideOverPosition: 'right',
    title: 'Details Panel',
    children: React.createElement('p', null, 'This is a slide-over dialog with additional details.'),
  },
};
