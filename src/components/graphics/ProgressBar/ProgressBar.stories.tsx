import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import { ProgressBar } from './ProgressBar.tsx';

const meta = {
  component: ProgressBar,
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  render: () => <ProgressBar progress={0} label="Upload progress" />,
  play: async ({ canvas }) => {
    const progressBar = canvas.getByRole('progressbar');
    await expect(progressBar).toBeVisible();
    await expect(progressBar).toHaveValue(0);
    await expect(canvas.getByText(/upload progress/i)).toBeVisible();
  },
};

export const HalfComplete: Story = {
  render: () => (
    <ProgressBar
      progress={50}
      label="Processing"
      hintText="50% complete"
    />
  ),
  play: async ({ canvas }) => {
    const progressBar = canvas.getByRole('progressbar');
    await expect(progressBar).toBeVisible();
    await expect(progressBar).toHaveValue(50);
    await expect(canvas.getByText(/50% complete/i)).toBeVisible();
  },
};

export const Complete: Story = {
  render: () => (
    <ProgressBar
      progress={100}
      label="Installation"
      hintText="Done!"
    />
  ),
  play: async ({ canvas }) => {
    const progressBar = canvas.getByRole('progressbar');
    await expect(progressBar).toBeVisible();
    await expect(progressBar).toHaveValue(100);
    await expect(canvas.getByText(/done!/i)).toBeVisible();
  },
};
