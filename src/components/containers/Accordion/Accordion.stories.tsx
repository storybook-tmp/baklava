import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Accordion } from './Accordion.tsx';

const meta = {
  title: 'AI Generated/Complex/Accordion',
  component: Accordion,
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Exclusive: Story = {
  args: {
    exclusive: true,
    children: [
      React.createElement(Accordion.Item, { key: '1', title: 'Section 1' }, 'Content of section 1. This section contains detailed information.'),
      React.createElement(Accordion.Item, { key: '2', title: 'Section 2' }, 'Content of section 2. Another area with more details.'),
      React.createElement(Accordion.Item, { key: '3', title: 'Section 3' }, 'Content of section 3. Final section with additional info.'),
    ],
  },
};

export const NonExclusive: Story = {
  args: {
    exclusive: false,
    children: [
      React.createElement(Accordion.Item, { key: '1', title: 'First Item' }, 'First item content can be expanded independently.'),
      React.createElement(Accordion.Item, { key: '2', title: 'Second Item' }, 'Second item content can also be open at the same time.'),
    ],
  },
};
