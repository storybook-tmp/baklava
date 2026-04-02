import type { Meta, StoryObj } from '@storybook/react-vite';

import { ProgressBar } from './ProgressBar.tsx';


const meta = {
  title: 'AI Generated/Simple/ProgressBar',
  component: ProgressBar,
  parameters: {
    layout: 'padded',
  },
  args: {
    label: 'Deployment progress',
    hintText: '3 of 5 services updated',
  },
} satisfies Meta<typeof ProgressBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const InProgress: Story = {
  args: {
    progress: 60,
  },
};

export const Complete: Story = {
  args: {
    label: 'Backup finished',
    hintText: 'All files synced successfully',
    progress: 100,
  },
};
