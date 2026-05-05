import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card } from './Card.tsx';
import { Icon } from '../../graphics/Icon/Icon.tsx';

const meta = {
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card>
      <Card.Heading>Encryption Key</Card.Heading>
      <p>AES-256, created March 2025</p>
    </Card>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <Card>
      <Card.Heading icon={<Icon icon="key" />}>RSA Key Pair</Card.Heading>
      <p>RSA-4096, expires December 2025</p>
    </Card>
  ),
};

export const Flat: Story = {
  render: () => (
    <Card flat>
      <Card.Heading>Nested Card</Card.Heading>
      <p>This card has no outer border, for use inside other containers.</p>
    </Card>
  ),
};
