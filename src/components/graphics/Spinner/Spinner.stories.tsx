import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { Spinner } from './Spinner.tsx';

const meta = {
  component: Spinner,
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  render: () => <Spinner size="small" aria-label="Loading" />,
  play: async ({ canvas }) => {
    await expect(canvas.getByLabelText('Loading')).toBeVisible();
  },
};

export const Medium: Story = {
  render: () => <Spinner size="medium" aria-label="Loading" />,
  play: async ({ canvas }) => {
    await expect(canvas.getByLabelText('Loading')).toBeVisible();
  },
};

export const Large: Story = {
  render: () => <Spinner size="large" aria-label="Loading" />,
  play: async ({ canvas }) => {
    await expect(canvas.getByLabelText('Loading')).toBeVisible();
  },
};

export const Inline: Story = {
  render: () => (
    <span>
      <Spinner inline aria-label="Loading inline" />
      {' Processing...'}
    </span>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByLabelText('Loading inline')).toBeVisible();
    await expect(canvas.getByText(/processing/i)).toBeVisible();
  },
};
