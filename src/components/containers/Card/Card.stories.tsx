import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card } from './Card.tsx';

const meta = {
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card>
      <Card.Heading>Card Title</Card.Heading>
      <p>Card content goes here.</p>
    </Card>
  ),
};

export const Flat: Story = {
  render: () => (
    <Card flat>
      <Card.Heading>Flat Card</Card.Heading>
      <p>This card has no border or padding.</p>
    </Card>
  ),
};

export const WithHeadingLink: Story = {
  render: () => (
    <Card>
      <Card.HeadingLink href="#">Card with Link Heading</Card.HeadingLink>
      <p>Click the heading to navigate.</p>
    </Card>
  ),
};
