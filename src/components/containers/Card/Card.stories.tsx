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
      <p>Basic card content.</p>
    </Card>
  ),
};

export const WithHeading: Story = {
  render: () => (
    <Card>
      <Card.Heading icon={<Icon icon="security-object" />}>Security objects</Card.Heading>
      <p>Manage your security objects and encryption keys.</p>
    </Card>
  ),
};

export const Flat: Story = {
  render: () => (
    <Card flat>
      <Card.Heading>Nested card</Card.Heading>
      <p>This card has no border, useful for nested contexts.</p>
    </Card>
  ),
};
