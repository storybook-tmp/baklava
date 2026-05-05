import type { Meta, StoryObj } from '@storybook/react-vite';

import { ProgressBar } from './ProgressBar.tsx';


const meta = {
  title: 'AI Generated/Simple/ProgressBar',
  component: ProgressBar,
  args: {
    label: 'Upload progress',
    progress: 42,
    hintText: '3 files remaining',
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ProgressBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const InProgress: Story = {};

export const Complete: Story = {
  args: {
    hintText: 'All files uploaded',
    progress: 100,
  },
};
