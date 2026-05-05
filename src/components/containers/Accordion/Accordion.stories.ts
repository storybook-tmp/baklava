import { createElement, type ComponentProps } from 'react';

import { config } from '../../../../.storybook/preview.tsx';
import { Accordion } from './Accordion.tsx';


const renderAccordion = (args: ComponentProps<typeof Accordion>) => createElement(
  Accordion,
  args,
  createElement(
    Accordion.Item,
    { title: 'Certificate rotation', open: true },
    createElement('p', null, 'Review expiring certificates and confirm the staged rollout for each environment.'),
  ),
  createElement(
    Accordion.Item,
    { title: 'Audit logging' },
    createElement('p', null, 'Verify that export jobs are running and that retention policies match compliance targets.'),
  ),
  createElement(
    Accordion.Item,
    { title: 'Node maintenance' },
    createElement('p', null, 'Check pending host updates, maintenance windows, and rollback plans before proceeding.'),
  ),
);

const meta = config.meta({
  title: 'AI Generated/Complex/Accordion',
  component: Accordion,
  render: renderAccordion,
});

export const Exclusive = meta.story({
  args: {
    exclusive: true,
  },
});

export const IndependentItems = meta.story({
  args: {
    exclusive: false,
  },
});
