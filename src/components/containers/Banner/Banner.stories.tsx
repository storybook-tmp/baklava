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
      This is an informational message for the user.
    </Banner>
  ),
};

export const Warning: Story = {
  render: () => (
    <Banner variant="warning">
      Please review the configuration before proceeding.
    </Banner>
  ),
};

export const Error: Story = {
  render: () => (
    <Banner variant="error">
      An error occurred while processing your request.
    </Banner>
  ),
};

export const Success: Story = {
  render: () => (
    <Banner variant="success">
      The operation completed successfully.
    </Banner>
  ),
};

export const WithTitle: Story = {
  render: () => (
    <Banner variant="info" title="Maintenance Scheduled" compact={false}>
      The system will be undergoing maintenance on Saturday from 2:00 AM to 6:00 AM UTC.
    </Banner>
  ),
};

export const Closable: Story = {
  render: () => (
    <Banner variant="warning" showCloseAction onClose={() => {}}>
      This banner can be dismissed by the user.
    </Banner>
  ),
};
