import type { Meta, StoryObj } from '@storybook/react-vite';
import { Banner } from './Banner.tsx';

const meta = {
  component: Banner,
} satisfies Meta<typeof Banner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {
  render: () => (
    <Banner variant="info">
      Your session will expire in 5 minutes.
    </Banner>
  ),
};

export const Warning: Story = {
  render: () => (
    <Banner variant="warning" title="Deprecation Notice">
      This API version will be retired on January 1, 2025.
    </Banner>
  ),
};

export const Error: Story = {
  render: () => (
    <Banner variant="error" title="Action Failed">
      Unable to complete the operation. Please try again.
    </Banner>
  ),
};

export const Success: Story = {
  render: () => (
    <Banner variant="success" title="Deployment Complete">
      All services are running successfully.
    </Banner>
  ),
};

export const NonCompact: Story = {
  render: () => (
    <Banner variant="info" compact={false} title="System Maintenance">
      Scheduled maintenance will occur this weekend. During this time, some services may be temporarily unavailable. Please save your work before the maintenance window begins.
    </Banner>
  ),
};

export const WithActions: Story = {
  render: () => (
    <Banner variant="warning" title="Update Available">
      A new version is available.
      <Banner.ActionButton kind="secondary" label="Update Now" />
    </Banner>
  ),
};
