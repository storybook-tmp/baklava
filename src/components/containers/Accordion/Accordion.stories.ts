import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { Accordion } from './Accordion.tsx';


const meta = {
  title: 'AI Generated/Complex/Accordion',
  component: Accordion,
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Exclusive: Story = {
  render: args => renderAccordion(args, false),
};

export const NonExclusive: Story = {
  args: {
    exclusive: false,
  },
  render: args => renderAccordion(args, true),
};

function renderAccordion(args: React.ComponentProps<typeof Accordion>, openMultiple: boolean) {
  return React.createElement(
    'div',
    { style: { maxWidth: '40rem' } },
    React.createElement(
      Accordion,
      args,
      React.createElement(
        Accordion.Item,
        {
          open: true,
          title: 'Authentication',
        },
        'Centralize SSO enforcement, certificate rotation, and service-account access in a single policy set.',
      ),
      React.createElement(
        Accordion.Item,
        {
          open: openMultiple,
          title: 'Workflows',
        },
        'Review queued automation jobs, paused approvals, and recent execution outcomes across teams.',
      ),
      React.createElement(
        Accordion.Item,
        {
          title: 'Audit logs',
        },
        'Inspect event history for key lifecycle changes, admin actions, and policy modifications.',
      ),
    ),
  );
}
