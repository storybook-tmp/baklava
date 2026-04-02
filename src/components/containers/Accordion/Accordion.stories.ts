import * as React from 'react';

import { config } from '#.storybook/preview';

import { Accordion } from './Accordion.tsx';

const meta = config.meta({
  title: 'AI Generated/Complex/Accordion',
  component: Accordion,
});

const accordionItems = (exclusive: boolean) => (
  React.createElement(
    Accordion,
    { exclusive },
    React.createElement(
      Accordion.Item,
      { title: 'Cluster status', open: true },
      React.createElement('p', null, 'All nodes are healthy and have completed the latest rolling update.'),
    ),
    React.createElement(
      Accordion.Item,
      { title: 'Pending approvals', open: !exclusive },
      React.createElement('p', null, 'Two requests are waiting for a security review before they can be promoted.'),
    ),
    React.createElement(
      Accordion.Item,
      { title: 'Maintenance window' },
      React.createElement('p', null, 'The next maintenance window is scheduled for Saturday at 02:00 UTC.'),
    ),
  )
);

export const Exclusive = meta.story({
  render: () => accordionItems(true),
});

export const MultipleExpanded = meta.story({
  render: () => accordionItems(false),
});
