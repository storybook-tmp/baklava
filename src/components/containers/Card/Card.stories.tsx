import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import * as React from 'react';

import { Card } from './Card.tsx';
import { Button } from '../../actions/Button/Button.tsx';

const meta = {
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card>
      <Card.Heading>Card title</Card.Heading>
      <p>This is the card content with some descriptive text.</p>
    </Card>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/card title/i)).toBeVisible();
    await expect(canvas.getByText(/card content/i)).toBeVisible();
  },
};

export const WithActions: Story = {
  render: () => (
    <Card>
      <Card.Heading>Resource name</Card.Heading>
      <p>Resource description and details appear here.</p>
      <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
        <Button kind="primary" label="View" />
        <Button kind="secondary" label="Edit" />
      </div>
    </Card>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/resource name/i)).toBeVisible();
    await expect(canvas.getByRole('button', { name: /view/i })).toBeVisible();
    await expect(canvas.getByRole('button', { name: /edit/i })).toBeVisible();
  },
};

export const Flat: Story = {
  render: () => (
    <Card flat>
      <Card.Heading>Embedded card</Card.Heading>
      <p>A flat card has no outer border or padding, for use in nested contexts.</p>
    </Card>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/embedded card/i)).toBeVisible();
    await expect(canvas.getByText(/nested contexts/i)).toBeVisible();
  },
};
