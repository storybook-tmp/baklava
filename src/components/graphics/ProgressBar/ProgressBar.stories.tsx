import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { ProgressBar } from './ProgressBar.tsx';

const meta = {
  component: ProgressBar,
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  render: () => <ProgressBar progress={0} label="Uploading..." hintText="0% complete" />,
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Uploading...')).toBeVisible();
    await expect(canvas.getByText('0% complete')).toBeVisible();
    const progressEl = canvas.getByRole('progressbar');
    await expect(progressEl).toBeVisible();
  },
};

export const HalfComplete: Story = {
  render: () => <ProgressBar progress={50} label="Installing packages" hintText="50% complete" />,
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Installing packages')).toBeVisible();
    const progressEl = canvas.getByRole('progressbar');
    await expect(progressEl).toBeVisible();
  },
};

export const Complete: Story = {
  render: () => <ProgressBar progress={100} label="Done!" hintText="Installation complete" />,
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Done!')).toBeVisible();
    await expect(canvas.getByText('Installation complete')).toBeVisible();
    const progressEl = canvas.getByRole('progressbar');
    await expect(progressEl).toBeVisible();
  },
};
