import * as React from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { Icon } from '../../graphics/Icon/Icon.tsx';
import { Card } from './Card.tsx';


const meta = {
  title: 'AI Generated/Medium/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  args: {
    style: {
      maxWidth: '28rem',
    },
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: React.createElement(
      React.Fragment,
      null,
      React.createElement(Card.Heading, null, 'Cluster overview'),
      React.createElement(
        'p',
        null,
        'Review current health, capacity, and recent alerts for the selected cluster.',
      ),
    ),
  },
};

export const FlatLinkedHeading: Story = {
  args: {
    flat: true,
    children: React.createElement(
      React.Fragment,
      null,
      React.createElement(
        Card.HeadingLink,
        {
          href: '#cluster-details',
          icon: React.createElement(Icon, { icon: 'info-filled' }),
        },
        'See deployment details',
      ),
      React.createElement(
        'p',
        null,
        'This card removes outer chrome so it can sit cleanly inside a denser layout.',
      ),
    ),
  },
};
