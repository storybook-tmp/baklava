import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card } from './Card.tsx';

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
        <p>This is the card content. It can contain any arbitrary content.</p>
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
        <p>This card has no border or padding — used in nested contexts.</p>
      </>
    ),
  },
};

export const WithoutHeading: Story = {
  args: {
    children: <p>A simple card with just text content and no heading.</p>,
  },
};
