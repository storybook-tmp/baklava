import type { Meta, StoryObj } from '@storybook/react-vite';
import { ProgressBar } from './ProgressBar.tsx';

const meta = {
  title: 'AI Generated/Medium/ProgressBar',
  component: ProgressBar,
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    progress: 50,
  },
};

export const WithLabel: Story = {
  args: {
    progress: 75,
    label: 'Upload progress',
    hintText: '75% complete',
  },
};

export const Complete: Story = {
  args: {
    progress: 100,
    label: 'Completed',
    hintText: 'All done!',
  },
};

export const Empty: Story = {
  args: {
    progress: 0,
    label: 'Not started',
  },
};
