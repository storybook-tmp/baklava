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
      <p>This card has a flat appearance without the outside border.</p>
    </Card>
  ),
};

export const WithoutHeading: Story = {
  render: () => (
    <Card>
      <p>A card without a heading, containing only body content.</p>
    </Card>
  ),
};
