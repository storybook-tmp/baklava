import type { Meta, StoryObj } from '@storybook/react-vite';
import { ProgressBar } from './ProgressBar.tsx';

const meta = {
  component: ProgressBar,
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  render: () => <ProgressBar progress={0} />,
};

export const HalfComplete: Story = {
  render: () => <ProgressBar progress={50} />,
};

export const Complete: Story = {
  render: () => <ProgressBar progress={100} />,
};

export const WithLabel: Story = {
  render: () => (
    <ProgressBar progress={75} label="Uploading files" hintText="75% complete" />
  ),
};
