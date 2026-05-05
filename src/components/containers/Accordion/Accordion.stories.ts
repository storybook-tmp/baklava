import * as React from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { Accordion } from './Accordion.tsx';


const meta = {
  title: 'AI Generated/Complex/Accordion',
  component: Accordion,
  parameters: {
    layout: 'padded',
  },
  args: {
    style: {
      maxWidth: '40rem',
    },
  },
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Exclusive: Story = {
  args: {
    children: buildItems(['Access policy', 'Network settings', 'Audit logs'], [0]),
  },
};

export const MultipleOpen: Story = {
  args: {
    exclusive: false,
    children: buildItems(['Tokens', 'Certificates', 'Approvals'], [0, 2]),
  },
};

function buildItems(titles: string[], openIndexes: number[]): React.ReactNode {
  return titles.map((title, index) =>
    React.createElement(
      Accordion.Item,
      {
        key: title,
        title,
        open: openIndexes.includes(index),
      },
      React.createElement(
        'div',
        null,
        `${title} content is rendered here so the disclosure body has realistic spacing and text flow.`,
      ),
    ),
  );
}
