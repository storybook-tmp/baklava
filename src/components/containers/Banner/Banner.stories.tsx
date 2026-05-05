import type { Meta, StoryObj } from '@storybook/react-vite';
import { Banner } from './Banner';

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
      Please review your settings before proceeding.
    </Banner>
  ),
};

export const Error: Story = {
  render: () => (
    <Banner variant="error" title="Error">
      An error occurred while saving your changes.
    </Banner>
  ),
};

export const Success: Story = {
  render: () => (
    <Banner variant="success" title="Success">
      Your changes have been saved successfully.
    </Banner>
  ),
};

export const WithCloseAction: Story = {
  render: () => (
    <Banner variant="info" title="Dismissible" showCloseAction onClose={() => {}}>
      This banner can be closed.
    </Banner>
  ),
};

export const NonCompact: Story = {
  render: () => (
    <Banner variant="warning" title="Important notice" compact={false}>
      This is a non-compact banner with a longer message body that is displayed below the header
      instead of inline with the title.
    </Banner>
  ),
};

export const WithAction: Story = {
  render: () => (
    <Banner variant="error" title="Connection lost" actions={<Banner.ActionButton kind="secondary" label="Retry" />}>
      Unable to reach the server.
    </Banner>
  ),
};
