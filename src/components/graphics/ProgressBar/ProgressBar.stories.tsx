import type { Meta, StoryObj } from '@storybook/react-vite';
import { ProgressBar } from './ProgressBar.tsx';

const meta = {
  component: ProgressBar,
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <ProgressBar progress={60} />,
};

export const WithLabel: Story = {
  render: () => <ProgressBar progress={75} label="Upload Progress" />,
};

export const WithHint: Story = {
  render: () => (
    <ProgressBar progress={45} label="Encryption" hintText="Processing 45 of 100 keys" />
  ),
};

export const Complete: Story = {
  render: () => <ProgressBar progress={100} label="Complete" hintText="All tasks finished" />,
};

export const Empty: Story = {
  render: () => <ProgressBar progress={0} label="Waiting" hintText="Not started yet" />,
};
