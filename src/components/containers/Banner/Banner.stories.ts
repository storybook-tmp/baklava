import { createElement } from 'react';
import { fn } from 'storybook/test';

import { config } from '../../../../.storybook/preview.tsx';
import { Banner } from './Banner.tsx';


const meta = config.meta({
  title: 'AI Generated/Medium/Banner',
  component: Banner,
});

export const Info = meta.story({
  args: {
    variant: 'info',
    title: 'Maintenance window',
    children: 'Planned updates begin at 02:00 UTC and are expected to finish within thirty minutes.',
    actions: createElement(Banner.ActionButton, {
      label: 'Review timeline',
      onPress: fn(),
    }),
  },
});

export const WarningWithDismiss = meta.story({
  args: {
    compact: false,
    variant: 'warning',
    title: 'Certificate expires soon',
    children: 'Rotate the expiring certificate before Friday to avoid service interruptions.',
    actions: createElement(Banner.ActionButton, {
      kind: 'secondary',
      label: 'Open runbook',
      onPress: fn(),
    }),
    showCloseAction: true,
    onClose: fn(),
  },
});
