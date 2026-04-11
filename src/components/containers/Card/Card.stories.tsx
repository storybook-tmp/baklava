import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { Card } from './Card.tsx';

const meta = {
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card>
      <Card.Heading>Card title</Card.Heading>
      <p>Card body content with some details.</p>
    </Card>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('heading', { name: /card title/i })).toBeVisible();
    await expect(canvas.getByText('Card body content with some details.')).toBeVisible();
  },
};

export const WithHeadingLink: Story = {
  render: () => (
    <Card>
      <Card.HeadingLink href="#">Clickable card title</Card.HeadingLink>
      <p>This card has a heading that is a link.</p>
    </Card>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('link', { name: /clickable card title/i })).toBeVisible();
  },
};

export const Flat: Story = {
  render: () => (
    <Card flat>
      <Card.Heading>Flat card</Card.Heading>
      <p>A flat card without outer border or padding.</p>
    </Card>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('heading', { name: /flat card/i })).toBeVisible();
  },
};
