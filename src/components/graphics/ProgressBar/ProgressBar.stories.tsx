import type { Meta, StoryObj } from '@storybook/react-vite';
import { ProgressBar } from './ProgressBar';

const meta = {
  component: ProgressBar,
} satisfies Meta<typeof meta>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <ProgressBar progress={45} />,
};

export const WithLabel: Story = {
  render: () => <ProgressBar progress={72} label="Upload progress" />,
};

export const WithHint: Story = {
  render: () => (
    <ProgressBar
      progress={30}
      label="Encryption"
      hintText="Processing 30 of 100 files"
    />
  ),
};

export const Complete: Story = {
  render: () => (
    <ProgressBar progress={100} label="Migration" hintText="Complete" />
  ),
};
