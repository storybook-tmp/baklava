import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Accordion } from './Accordion.tsx';

const meta = {
  title: 'AI Generated/Complex/Accordion',
  component: Accordion,
  parameters: { layout: 'padded' },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Exclusive: Story = {
  args: {
    exclusive: true,
    children: React.createElement(
      React.Fragment,
      null,
      React.createElement(Accordion.Item, { title: 'Section 1' }, 'Content for section one.'),
      React.createElement(Accordion.Item, { title: 'Section 2' }, 'Content for section two.'),
      React.createElement(Accordion.Item, { title: 'Section 3' }, 'Content for section three.'),
    ),
  },
};

export const NonExclusive: Story = {
  args: {
    exclusive: false,
    children: React.createElement(
      React.Fragment,
      null,
      React.createElement(Accordion.Item, { title: 'FAQ 1' }, 'Answer to frequently asked question one.'),
      React.createElement(Accordion.Item, { title: 'FAQ 2' }, 'Answer to frequently asked question two.'),
    ),
  },
};
