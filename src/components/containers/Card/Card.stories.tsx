import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta = {
  title: 'AI Generated/Medium/Card',
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'This is a card with simple content.',
  },
};

export const WithHeading: Story = {
  render: (args) => (
    <Card {...args}>
      <Card.Heading>Card Title</Card.Heading>
      <p>This is card content below the heading.</p>
    </Card>
  ),
};

export const Flat: Story = {
  args: {
    flat: true,
    children: 'This is a flat card without borders.',
  },
};

export const WithMultipleChildren: Story = {
  render: (args) => (
    <Card {...args}>
      <Card.Heading>Features</Card.Heading>
      <ul style={{ margin: 0, paddingLeft: '20px' }}>
        <li>Feature One</li>
        <li>Feature Two</li>
        <li>Feature Three</li>
      </ul>
    </Card>
  ),
};
