import * as React from 'react';

import { config } from '#.storybook/preview';

import { Card } from './Card.tsx';

const meta = config.meta({
  title: 'AI Generated/Medium/Card',
  component: Card,
});

export const Default = meta.story({
  args: {
    children: React.createElement(
      React.Fragment,
      null,
      React.createElement(Card.Heading, null, 'Service health'),
      React.createElement('p', null, 'All systems are operating normally across production regions.'),
    ),
  },
});

export const Flat = meta.story({
  args: {
    flat: true,
    children: React.createElement(
      React.Fragment,
      null,
      React.createElement(Card.HeadingLink, { href: '#', children: 'View deployment details' }),
      React.createElement('p', null, 'This compact card is intended for dense list layouts and dashboards.'),
    ),
  },
});
