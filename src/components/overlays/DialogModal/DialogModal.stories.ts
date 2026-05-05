import * as React from 'react';
import { fn } from 'storybook/test';

import { config } from '#.storybook/preview';

import { DialogModal } from './DialogModal.tsx';

const modalActions = React.createElement(
  React.Fragment,
  null,
  React.createElement(DialogModal.CancelAction, null),
  React.createElement(DialogModal.SubmitAction, { label: 'Confirm', onPress: fn() }),
);

const meta = config.meta({
  title: 'AI Generated/Complex/DialogModal',
  component: DialogModal,
});

export const Centered = meta.story({
  args: {
    activeDefault: true,
    renderMethod: 'inline',
    title: 'Review deployment',
    children: React.createElement('p', null, 'Confirm that the staged deployment should be promoted to production.'),
    actions: modalActions,
  },
});

export const SlideOverLoading = meta.story({
  args: {
    activeDefault: true,
    renderMethod: 'inline',
    display: 'slide-over',
    state: 'loading',
    title: 'Syncing account data',
    children: React.createElement('p', null, 'Fetching the latest status from every connected environment.'),
    actions: React.createElement(DialogModal.Action, {
      kind: 'primary',
      label: 'Refresh',
      onPress: fn(),
    }),
  },
});
