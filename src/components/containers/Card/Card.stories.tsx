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
      <Card.Heading>Card Title</Card.Heading>
      Card content goes here.
    </Card>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <Card>
      <Card.Heading icon={<Icon icon="dashboard" />}>Dashboard</Card.Heading>
      Overview of your dashboard metrics.
    </Card>
  ),
};

export const Flat: Story = {
  render: () => (
    <Card flat>
      <Card.Heading>Flat Card</Card.Heading>
      A flat card without border or padding.
    </Card>
  ),
};

export const WithHeadingLink: Story = {
  render: () => (
    <Card>
      <Card.HeadingLink href="#">View Details</Card.HeadingLink>
      Click the heading to navigate.
    </Card>
  ),
};
