import { createElement, type ComponentProps } from 'react';

import { config } from '../../../../.storybook/preview.tsx';
import { Card } from './Card.tsx';


const renderCard = (args: ComponentProps<typeof Card>) => createElement(
  Card,
  args,
  createElement(Card.Heading, null, args.flat ? 'Nested overview' : 'Cluster overview'),
  createElement('p', null, 'Track service health, pending changes, and operational notes in one compact surface.'),
);

const meta = config.meta({
  title: 'AI Generated/Medium/Card',
  component: Card,
  render: renderCard,
});

export const Default = meta.story({
  args: {},
});

export const Flat = meta.story({
  args: {
    flat: true,
  },
});
