import type { Meta, StoryObj } from '@storybook/react-vite';
import { ProgressBar } from './ProgressBar.tsx';

const meta = {
  component: ProgressBar,
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <ProgressBar progress={45} />,
};

export const WithLabel: Story = {
  render: () => (
    <ProgressBar progress={65} label="Uploading" hintText="file.zip - 65% complete" />
  ),
};

export const Complete: Story = {
  render: () => (
    <ProgressBar progress={100} label="Complete" hintText="All files uploaded" />
  ),
};

export const Empty: Story = {
  render: () => (
    <ProgressBar progress={0} label="Waiting" hintText="Upload not started" />
  ),
};
