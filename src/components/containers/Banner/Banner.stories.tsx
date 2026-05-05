import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import * as React from 'react';

import { Banner } from './Banner.tsx';

const meta = {
  component: Banner,
} satisfies Meta<typeof Banner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {
  render: () => (
    <Banner variant="info" title="System notice">
      Please review your account settings.
    </Banner>
  ),
  play: async ({ canvas }) => {
    const alert = canvas.getByRole('alert');
    await expect(alert).toBeVisible();
    await expect(alert).toHaveTextContent('System notice');
  },
};

export const Warning: Story = {
  render: () => (
    <Banner variant="warning" title="Action required">
      Please review your settings before proceeding.
    </Banner>
  ),
  play: async ({ canvas }) => {
    const alert = canvas.getByRole('alert');
    await expect(alert).toBeVisible();
    await expect(alert).toHaveTextContent('Action required');
  },
};

export const Error: Story = {
  render: () => (
    <Banner variant="error" title="Request failed">
      The operation could not be completed. Please try again.
    </Banner>
  ),
  play: async ({ canvas }) => {
    const alert = canvas.getByRole('alert');
    await expect(alert).toBeVisible();
    await expect(alert).toHaveTextContent('Request failed');
  },
};

export const Success: Story = {
  render: () => (
    <Banner variant="success" title="Changes saved">
      Your changes have been saved successfully.
    </Banner>
  ),
  play: async ({ canvas }) => {
    const alert = canvas.getByRole('alert');
    await expect(alert).toBeVisible();
    await expect(alert).toHaveTextContent('Changes saved');
  },
};

export const WithCloseAction: Story = {
  render: () => (
    <Banner variant="info" title="Dismissible notice" showCloseAction onClose={() => {}}>
      This banner can be dismissed by the user.
    </Banner>
  ),
  play: async ({ canvas }) => {
    const alert = canvas.getByRole('alert');
    await expect(alert).toBeVisible();
    const closeButton = canvas.getByRole('button', { name: /close banner/i });
    await expect(closeButton).toBeVisible();
  },
};
