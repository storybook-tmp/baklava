import type { Meta, StoryObj } from '@storybook/react-vite';
import { Banner } from './Banner';

const meta = {
  component: Banner,
} satisfies Meta<typeof Banner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {
  render: () => (
    <Banner variant="info">
      Your account has been updated successfully.
    </Banner>
  ),
};

export const Warning: Story = {
  render: () => (
    <Banner variant="warning" title="Attention">
      Your session will expire in 5 minutes.
    </Banner>
  ),
};

export const Error: Story = {
  render: () => (
    <Banner variant="error" title="Error">
      Failed to save changes. Please try again.
    </Banner>
  ),
};

export const Success: Story = {
  render: () => (
    <Banner variant="success" title="Done">
      All changes have been saved.
    </Banner>
  ),
};

export const WithCloseAction: Story = {
  render: () => (
    <Banner variant="info" showCloseAction onClose={() => {}}>
      This banner can be dismissed.
    </Banner>
  ),
};

export const Expanded: Story = {
  render: () => (
    <Banner variant="warning" compact={false} title="Maintenance Window">
      Scheduled maintenance will occur on Saturday from 2:00 AM to 6:00 AM UTC.
      During this time, some services may be temporarily unavailable.
    </Banner>
  ),
};
