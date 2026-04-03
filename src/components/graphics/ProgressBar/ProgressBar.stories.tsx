import type { Meta, StoryObj } from '@storybook/react-vite';
import { ProgressBar } from './ProgressBar.tsx';

const meta = {
  component: ProgressBar,
} satisfies Meta<typeof meta>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Quarter: Story = {
  render: () => <ProgressBar progress={25} />,
};

export const Half: Story = {
  render: () => <ProgressBar progress={50} label="Uploading files" />,
};

export const AlmostComplete: Story = {
  render: () => (
    <ProgressBar progress={85} label="Processing" hintText="85% complete" />
  ),
};

export const Complete: Story = {
  render: () => (
    <ProgressBar progress={100} label="Upload complete" hintText="All files uploaded" />
  ),
};
