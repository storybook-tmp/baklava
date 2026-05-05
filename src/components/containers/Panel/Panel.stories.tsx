import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import * as React from 'react';

import { Panel } from './Panel.tsx';
import { Button } from '../../actions/Button/Button.tsx';

const meta = {
  component: Panel,
} satisfies Meta<typeof Panel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Panel>
      <Panel.Heading>Panel heading</Panel.Heading>
      <p>This is the main content of the panel.</p>
    </Panel>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/panel heading/i)).toBeVisible();
    await expect(canvas.getByText(/main content/i)).toBeVisible();
  },
};

export const WithActions: Story = {
  render: () => (
    <Panel>
      <Panel.Heading>Network status</Panel.Heading>
      <p>You have 3 active connections established.</p>
      <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
        <Button kind="primary" label="Add connection" />
        <Button kind="secondary" label="Refresh" />
      </div>
    </Panel>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/network status/i)).toBeVisible();
    await expect(canvas.getByRole('button', { name: /add connection/i })).toBeVisible();
  },
};

export const Edgeless: Story = {
  render: () => (
    <Panel edgeless>
      <Panel.Heading>Edgeless panel</Panel.Heading>
      <p>This panel has no outer edges, for embedding in other containers.</p>
    </Panel>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/edgeless panel/i)).toBeVisible();
    await expect(canvas.getByText(/no outer edges/i)).toBeVisible();
  },
};
