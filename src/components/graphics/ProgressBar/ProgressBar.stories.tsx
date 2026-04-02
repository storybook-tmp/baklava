import type { Meta, StoryObj } from '@storybook/react-vite';

import { ProgressBar } from './ProgressBar.tsx';


const meta = {
  title: 'AI Generated/Simple/ProgressBar',
  component: ProgressBar,
  args: {
    label: 'Deployment progress',
    progress: 42,
  },
} satisfies Meta<typeof ProgressBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CompleteWithHint: Story = {
  args: {
    progress: 100,
    hintText: 'All regions are in sync.',
  },
};
