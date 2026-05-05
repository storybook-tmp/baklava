import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { Icon } from '../../graphics/Icon/Icon.tsx';
import { Card } from './Card.tsx';


const meta = {
  title: 'AI Generated/Medium/Card',
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  render: args => renderOverviewCard(args),
};

export const FlatLinkHeading: Story = {
  args: {
    flat: true,
  },
  render: args => renderFlatCard(args),
};

function renderOverviewCard(args: React.ComponentProps<typeof Card>) {
  return React.createElement(
    Card,
    args,
    React.createElement(Card.Heading, {
      icon: React.createElement(Icon, { icon: 'dashboard' }),
      children: 'Security posture',
    }),
    React.createElement(
      'p',
      null,
      'Monitor cloud accounts, investigate alerts, and review the latest assessment changes from one place.',
    ),
  );
}

function renderFlatCard(args: React.ComponentProps<typeof Card>) {
  return React.createElement(
    Card,
    args,
    React.createElement(Card.HeadingLink, {
      href: '#',
      icon: React.createElement(Icon, { icon: 'link-external' }),
      children: 'Read the deployment guide',
    }),
    React.createElement(
      'p',
      null,
      'Use the flat treatment when the card sits inside another bordered container and should feel embedded.',
    ),
  );
}
