import type { Meta, StoryObj } from '@storybook/react-vite';
import { Select } from './Select';

const meta = {
  component: Select,
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Select
      label="Region"
      options={
        <>
          <Select.Option itemKey="us-west" label="US West" />
          <Select.Option itemKey="us-east" label="US East" />
          <Select.Option itemKey="eu-west" label="EU West" />
        </>
      }
    />
  ),
};

export const WithDefaultSelected: Story = {
  render: () => (
    <Select
      label="Status"
      defaultSelected="active"
      options={
        <>
          <Select.Option itemKey="active" label="Active" />
          <Select.Option itemKey="inactive" label="Inactive" />
          <Select.Option itemKey="pending" label="Pending" />
        </>
      }
    />
  ),
};

export const WithHeader: Story = {
  render: () => (
    <Select
      label="Encryption Algorithm"
      options={
        <>
          <Select.Header>Symmetric</Select.Header>
          <Select.Option itemKey="aes-256" label="AES-256" />
          <Select.Option itemKey="aes-128" label="AES-128" />
          <Select.Header>Asymmetric</Select.Header>
          <Select.Option itemKey="rsa-2048" label="RSA-2048" />
          <Select.Option itemKey="rsa-4096" label="RSA-4096" />
        </>
      }
    />
  ),
};
