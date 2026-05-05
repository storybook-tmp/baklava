import type { Meta, StoryObj } from '@storybook/react-vite';

import { ProgressBar } from './ProgressBar.tsx';


const meta = {
  title: 'AI Generated/Simple/ProgressBar',
  component: ProgressBar,
  args: {
    label: 'Deployment progress',
    progress: 45,
  },
} satisfies Meta<typeof ProgressBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const InProgress: Story = {
  args: {
    hintText: '6 of 12 tasks completed',
  },
};

export const Complete: Story = {
  args: {
    hintText: 'All tasks completed',
    progress: 100,
  },
};
