import type { Meta, StoryObj } from '@storybook/react-vite';
import { ProgressBar } from './ProgressBar';

const meta = {
  component: ProgressBar,
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <ProgressBar progress={65} />,
};

export const WithLabel: Story = {
  render: () => <ProgressBar progress={42} label="Uploading keys..." />,
};

export const WithHintText: Story = {
  render: () => (
    <ProgressBar progress={80} label="Import progress" hintText="80% complete" />
  ),
};

export const Empty: Story = {
  render: () => <ProgressBar progress={0} label="Not started" />,
};

export const Complete: Story = {
  render: () => <ProgressBar progress={100} label="Complete" hintText="All tasks finished" />,
};
