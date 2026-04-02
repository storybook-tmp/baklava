import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Panel } from './Panel.tsx';

const meta = {
  title: 'AI Generated/Medium/Panel',
  component: Panel,
} satisfies Meta<typeof Panel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: React.createElement(
      React.Fragment,
      null,
      React.createElement(Panel.Heading, null, 'Panel Title'),
      React.createElement('p', null, 'This is the panel content area.'),
    ),
  },
};

export const Edgeless: Story = {
  args: {
    edgeless: true,
    children: React.createElement(
      React.Fragment,
      null,
      React.createElement(Panel.Heading, null, 'Edgeless Panel'),
      React.createElement('p', null, 'A panel without borders.'),
    ),
  },
};
