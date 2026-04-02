import * as React from 'react';

import preview from '../../../../.storybook/preview.tsx';

import { Icon } from '../../graphics/Icon/Icon.tsx';
import { Card, type CardProps } from './Card.tsx';

const meta = preview.meta({
  title: 'AI Generated/Medium/Card',
  component: Card,
  args: {
    'aria-label': 'Status card',
  },
});

export default meta;

export const Overview = meta.story({
  render: args => renderOverviewCard(args),
});

export const FlatLinkCard = meta.story({
  args: {
    flat: true,
  },
  render: args => renderFlatLinkCard(args),
});

function renderOverviewCard(args: CardProps) {
  return React.createElement(
    Card,
    args,
    [
      React.createElement(
        Card.Heading,
        {
          key: 'heading',
          icon: React.createElement(Icon, { icon: 'security-dashboard' }),
        },
        'Control plane status',
      ),
      React.createElement(
        'p',
        { key: 'body' },
        'All services are healthy and policy propagation completed successfully.',
      ),
    ],
  );
}

function renderFlatLinkCard(args: CardProps) {
  return React.createElement(
    Card,
    args,
    [
      React.createElement(
        Card.HeadingLink,
        {
          key: 'heading',
          href: '/',
        },
        'Read the deployment guide',
      ),
      React.createElement(
        'p',
        { key: 'body' },
        'Use flat cards when embedding guidance inside denser dashboards or side panels.',
      ),
    ],
  );
}
