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
  render: () => <ProgressBar progress={72} label="Uploading files..." />,
};

export const WithHintText: Story = {
  render: () => (
    <ProgressBar
      progress={30}
      label="Processing"
      hintText="3 of 10 items processed"
    />
  ),
};

export const Complete: Story = {
  render: () => (
    <ProgressBar
      progress={100}
      label="Upload Complete"
      hintText="All files have been uploaded successfully"
    />
  ),
};
