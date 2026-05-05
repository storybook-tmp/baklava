import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card } from './Card';
import { Icon } from '../../graphics/Icon/Icon';

const meta = {
  title: 'AI Generated/Medium/Card',
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Card.Heading>Card Title</Card.Heading>
        <p>Card content goes here</p>
      </>
    ),
  },
};

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <Card.Heading icon={<Icon icon="dashboard" />}>Dashboard Card</Card.Heading>
        <p>This card has an icon in the heading</p>
      </>
    ),
  },
};

export const Flat: Story = {
  args: {
    flat: true,
    children: (
      <>
        <Card.Heading>Flat Card</Card.Heading>
        <p>This card has no border or padding</p>
      </>
    ),
  },
};

export const Unstyled: Story = {
  args: {
    unstyled: true,
    children: (
      <>
        <Card.Heading>Unstyled Card</Card.Heading>
        <p>This card has no styling applied</p>
      </>
    ),
  },
};
