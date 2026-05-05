import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card } from './Card';
import { Icon } from '../../graphics/Icon/Icon';

const meta = {
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card>
      <Card.Heading>Security overview</Card.Heading>
      <p>Card content with summary information.</p>
    </Card>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <Card>
      <Card.Heading icon={<Icon icon="key" />}>Encryption keys</Card.Heading>
      <p>Manage your encryption keys and certificates.</p>
    </Card>
  ),
};

export const Flat: Story = {
  render: () => (
    <Card flat>
      <Card.Heading>Nested card</Card.Heading>
      <p>A flat card without border, for use in nested contexts.</p>
    </Card>
  ),
};

export const WithHeadingLink: Story = {
  render: () => (
    <Card>
      <Card.HeadingLink href="#" icon={<Icon icon="settings" />}>
        Settings
      </Card.HeadingLink>
      <p>Click the heading to navigate to settings.</p>
    </Card>
  ),
};
