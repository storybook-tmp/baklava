import { createElement } from 'react';

import { config } from '../../../../.storybook/preview.tsx';
import { DialogModal } from './DialogModal.tsx';


const meta = config.meta({
  title: 'AI Generated/Complex/DialogModal',
  component: DialogModal,
});

export const Centered = meta.story({
  args: {
    activeDefault: true,
    renderMethod: 'inline',
    title: 'Rotate certificate',
    children: 'Review the impacted clusters, verify the staged rollout plan, and confirm the maintenance window.',
    actions: createElement(DialogModal.SubmitAction, {
      label: 'Continue',
    }),
  },
});

export const SlideOverLoading = meta.story({
  args: {
    activeDefault: true,
    renderMethod: 'inline',
    display: 'slide-over',
    size: 'large',
    state: 'loading',
    title: 'Update maintenance window',
    children: 'Preparing the latest status and validating dependencies before the dialog becomes interactive.',
  },
});
