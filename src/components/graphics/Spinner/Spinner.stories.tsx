import type { Meta, StoryObj } from '@storybook/react-vite';
import { Spinner } from './Spinner';
import { ProgressBar } from '../ProgressBar/ProgressBar';

const meta = {
  component: Spinner,
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  render: () => <Spinner size="small" />,
};

export const Medium: Story = {
  render: () => <Spinner size="medium" />,
};

export const Large: Story = {
  render: () => <Spinner size="large" />,
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <Spinner size="small" />
      <Spinner size="medium" />
      <Spinner size="large" />
    </div>
  ),
};

export const ProgressBarDefault: Story = {
  name: 'ProgressBar',
  render: () => <ProgressBar progress={65} label="Uploading files..." hintText="65% complete" />,
};

export const ProgressBarComplete: Story = {
  name: 'ProgressBar (Complete)',
  render: () => <ProgressBar progress={100} label="Upload complete" />,
};

export const ProgressBarEmpty: Story = {
  name: 'ProgressBar (Empty)',
  render: () => <ProgressBar progress={0} label="Waiting..." hintText="0% complete" />,
};
