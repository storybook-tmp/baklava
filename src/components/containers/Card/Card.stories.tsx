import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card } from './Card.tsx';

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
      <p>This is the card body content.</p>
    </Card>
  ),
};

export const Flat: Story = {
  render: () => (
    <Card flat>
      <Card.Heading>Flat Card</Card.Heading>
      <p>A flat card without border/padding, for use in nested contexts.</p>
    </Card>
  ),
};
