import type { Meta, StoryObj } from '@storybook/react-vite';
import { ProgressBar } from './ProgressBar.tsx';

const meta = {
  title: 'AI Generated/Simple/ProgressBar',
  component: ProgressBar,
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HalfComplete: Story = {
  args: {
    progress: 50,
    label: 'Uploading...',
    hintText: '50% complete',
  },
};

export const FullProgress: Story = {
  args: {
    progress: 100,
    label: 'Done',
    hintText: '100% complete',
  },
};
