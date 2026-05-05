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
      <Card.Heading>Card title</Card.Heading>
      <p>Card content with some descriptive text.</p>
    </Card>
  ),
};

export const Flat: Story = {
  render: () => (
    <Card flat>
      <Card.Heading>Flat card</Card.Heading>
      <p>A flat card without outer border, for nested contexts.</p>
    </Card>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <Card>
      <Card.Heading icon={<Icon icon="dashboard" />}>Dashboard</Card.Heading>
      <p>Card with an icon in the heading.</p>
    </Card>
  ),
};
