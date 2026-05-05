import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta = {
  title: 'AI Generated/Medium/Card',
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card>
      <Card.Heading>Card Title</Card.Heading>
      <p>This is a simple card with some content inside.</p>
    </Card>
  ),
};

export const Flat: Story = {
  render: () => (
    <Card flat>
      <Card.Heading>Flat Card</Card.Heading>
      <p>This is a flat card without borders and padding.</p>
    </Card>
  ),
};
