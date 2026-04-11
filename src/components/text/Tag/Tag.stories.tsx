import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import * as React from 'react';
import { Tag } from './Tag.tsx';

const meta = {
  component: Tag,
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Tag content="React" />,
  play: async ({ canvas }) => {
    await expect(canvas.getByText('React')).toBeVisible();
  },
};

export const WithRemoveAction: Story = {
  render: () => {
    const [removed, setRemoved] = React.useState(false);
    if (removed) return <p>Tag removed</p>;
    return <Tag content="Removable tag" onRemove={() => setRemoved(true)} />;
  },
  play: async ({ canvas, userEvent }) => {
    await expect(canvas.getByText('Removable tag')).toBeVisible();
    const removeButton = canvas.getByRole('button', { name: /remove tag/i });
    await expect(removeButton).toBeVisible();
    await userEvent.click(removeButton);
    await expect(canvas.getByText('Tag removed')).toBeVisible();
  },
};

export const MultipleTagsInline: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Tag content="TypeScript" />
      <Tag content="React" />
      <Tag content="Vite" />
      <Tag content="Storybook" />
    </div>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText('TypeScript')).toBeVisible();
    await expect(canvas.getByText('React')).toBeVisible();
    await expect(canvas.getByText('Vite')).toBeVisible();
    await expect(canvas.getByText('Storybook')).toBeVisible();
  },
};
