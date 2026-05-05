import type { Meta, StoryObj } from '@storybook/react-vite';
import { ProgressBar } from './ProgressBar.tsx';

const meta = {
  title: 'AI Generated/Simple/ProgressBar',
  component: ProgressBar,
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    progress: 60,
    label: 'Uploading...',
  },
};

export const Complete: Story = {
  args: {
    progress: 100,
    label: 'Upload complete',
    hintText: 'All files have been uploaded successfully.',
  },
};
