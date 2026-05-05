import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card, CardHeading } from './Card';

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
  args: {
    children: 'This is a card with content',
  },
};

export const WithHeading: Story = {
  render: (args) => (
    <Card {...args}>
      <CardHeading>Card Title</CardHeading>
      <p>This is the card content with a heading.</p>
    </Card>
  ),
};
