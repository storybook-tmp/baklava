import type { Meta, StoryObj } from '@storybook/react-vite';
import { Banner } from './Banner.tsx';

const meta = {
  component: Banner,
} satisfies Meta<typeof Banner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {
  render: () => (
    <Banner variant="info">This is an informational message.</Banner>
  ),
};

export const Warning: Story = {
  render: () => (
    <Banner variant="warning">Please review your settings before proceeding.</Banner>
  ),
};

export const Error: Story = {
  render: () => (
    <Banner variant="error">An error occurred while processing your request.</Banner>
  ),
};

export const Success: Story = {
  render: () => (
    <Banner variant="success">Your changes have been saved successfully.</Banner>
  ),
};
