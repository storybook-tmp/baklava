import * as React from 'react';

import preview from '../../../../.storybook/preview.tsx';

import { Accordion, type AccordionProps } from './Accordion.tsx';

const meta = preview.meta({
  title: 'AI Generated/Complex/Accordion',
  component: Accordion,
});

export default meta;

export const Exclusive = meta.story({
  args: {
    exclusive: true,
  },
  render: args => renderAccordion(args, false),
});

export const NonExclusive = meta.story({
  args: {
    exclusive: false,
  },
  render: args => renderAccordion(args, true),
});

function renderAccordion(args: AccordionProps, openSecondItem: boolean) {
  return React.createElement(
    Accordion,
    args,
    [
      React.createElement(
        Accordion.Item,
        {
          key: 'summary',
          open: true,
          title: 'What changed in this release?',
        },
        'The release adds stricter audit logging defaults and updates the backup scheduler.',
      ),
      React.createElement(
        Accordion.Item,
        {
          key: 'impact',
          open: openSecondItem,
          title: 'Who is affected?',
        },
        'Operators managing key rotations and backup policies should review the rollout notes.',
      ),
    ],
  );
}
