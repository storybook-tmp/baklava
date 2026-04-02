import * as React from 'react';

import preview from '../../../../.storybook/preview.tsx';

import { DialogModal } from './DialogModal.tsx';

const meta = preview.meta({
  title: 'AI Generated/Complex/DialogModal',
  component: DialogModal,
  args: {
    activeDefault: true,
    renderMethod: 'inline',
    title: 'Rotate backup key',
  },
});

export default meta;

export const Centered = meta.story({
  args: {
    children: 'Confirm the rotation window before applying the new backup key to all clusters.',
    actions: React.createElement(DialogModal.SubmitAction, {
      label: 'Confirm rotation',
    }),
  },
});

export const SlideOverLoading = meta.story({
  args: {
    allowUserClose: false,
    display: 'slide-over',
    size: 'large',
    state: 'loading',
    title: 'Deploying policy bundle',
    children: 'Applying the updated controls to connected environments.',
  },
});
