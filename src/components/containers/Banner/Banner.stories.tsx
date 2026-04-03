import type { Meta, StoryObj } from '@storybook/react-vite';
import { Banner } from './Banner.tsx';

const meta = {
  component: Banner,
} satisfies Meta<typeof Banner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {
  render: () => (
    <Banner variant="info" title="Information">
      This is an informational banner message.
    </Banner>
  ),
};

export const Warning: Story = {
  render: () => (
    <Banner variant="warning" title="Warning">
      Please review the settings before continuing.
    </Banner>
  ),
};

export const Error: Story = {
  render: () => (
    <Banner variant="error" title="Error">
      Something went wrong. Please try again.
    </Banner>
  ),
};

export const Success: Story = {
  render: () => (
    <Banner variant="success" title="Success">
      Operation completed successfully.
    </Banner>
  ),
};

export const WithActions: Story = {
  render: () => (
    <Banner variant="info" title="Update available" compact={false}>
      A new version is available. Please update to get the latest features.
      <Banner.ActionButton slot="actions" label="Update now" kind="primary" />
    </Banner>
  ),
};
