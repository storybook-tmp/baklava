import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';

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
        <p>This is the card content with some descriptive text.</p>
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
        <p>This flat card has no outer border or padding.</p>
      </>
    ),
  },
};
