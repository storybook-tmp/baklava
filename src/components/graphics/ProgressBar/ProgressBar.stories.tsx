import type { Meta, StoryObj } from '@storybook/react-vite';
import { ProgressBar } from './ProgressBar.tsx';

const meta = {
  title: 'AI Generated/Medium/ProgressBar',
  component: ProgressBar,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    progress: 60,
  },
};

export const WithLabelAndHint: Story = {
  args: {
    progress: 75,
    label: 'Uploading files...',
    hintText: '75% complete',
  },
};
