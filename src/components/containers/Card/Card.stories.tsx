import type { Meta, StoryObj } from '@storybook/react-vite';

import { Card } from './Card.tsx';

const meta = {
  title: 'AI Generated/Medium/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Card {...args}>
      <Card.Heading>Card Title</Card.Heading>
      <p>This is some card content.</p>
    </Card>
  ),
};

export const Flat: Story = {
  render: (args) => (
    <Card {...args}>
      <Card.Heading>Flat Card</Card.Heading>
      <p>A flat card without borders, for nested contexts.</p>
    </Card>
  ),
  args: {
    flat: true,
  },
};
