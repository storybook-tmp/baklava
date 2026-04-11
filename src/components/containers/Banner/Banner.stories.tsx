import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { Banner } from './Banner.tsx';

const meta = {
  component: Banner,
} satisfies Meta<typeof Banner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {
  render: () => (
    <Banner variant="info" title="Information">
      This is an informational message for the user.
    </Banner>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('alert')).toBeVisible();
    await expect(canvas.getByText('Information')).toBeVisible();
  },
};

export const Warning: Story = {
  render: () => (
    <Banner variant="warning" title="Warning">
      Please review the following before proceeding.
    </Banner>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('alert')).toBeVisible();
    await expect(canvas.getByText('Warning')).toBeVisible();
  },
};

export const Error: Story = {
  render: () => (
    <Banner variant="error" title="Error occurred">
      An error occurred while processing your request.
    </Banner>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('alert')).toBeVisible();
    await expect(canvas.getByText('Error occurred')).toBeVisible();
  },
};

export const Success: Story = {
  render: () => (
    <Banner variant="success" title="Success">
      Your changes have been saved successfully.
    </Banner>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('alert')).toBeVisible();
    await expect(canvas.getByText('Success')).toBeVisible();
  },
};
