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
    <Banner variant="info">
      This is an informational message.
    </Banner>
  ),
  play: async ({ canvas }: any) => {
    const banner = canvas.getByText(/this is an informational message/i);
    await expect(banner).toBeVisible();
  },
};

export const Success: Story = {
  render: () => (
    <Banner variant="success" title="Success">
      Your action was completed successfully.
    </Banner>
  ),
  play: async ({ canvas }: any) => {
    const content = canvas.getByText(/your action was completed/i);
    await expect(content).toBeVisible();
  },
};

export const Warning: Story = {
  render: () => (
    <Banner variant="warning" title="Warning">
      This action may have consequences.
    </Banner>
  ),
  play: async ({ canvas }: any) => {
    const banner = canvas.getByText(/this action may have consequences/i);
    await expect(banner).toBeVisible();
  },
};

export const Error: Story = {
  render: () => (
    <Banner variant="error" title="Error">
      An error occurred while processing your request.
    </Banner>
  ),
  play: async ({ canvas }: any) => {
    const banner = canvas.getByText(/an error occurred/i);
    await expect(banner).toBeVisible();
  },
};

export const WithCloseAction: Story = {
  render: () => (
    <Banner variant="info" showCloseAction onClose={() => {}}>
      This banner can be dismissed by the user.
    </Banner>
  ),
  play: async ({ canvas }: any) => {
    const banner = canvas.getByText(/this banner can be dismissed/i);
    await expect(banner).toBeVisible();
  },
};

export const Compact: Story = {
  render: () => (
    <Banner variant="info" compact title="Compact Banner">
      Displayed as a single line when possible.
    </Banner>
  ),
  play: async ({ canvas }: any) => {
    const banner = canvas.getByText(/displayed as a single line/i);
    await expect(banner).toBeVisible();
  },
};
