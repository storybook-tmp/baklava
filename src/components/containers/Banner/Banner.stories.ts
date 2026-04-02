import { fn } from 'storybook/test';

import preview from '../../../../.storybook/preview';

import { Banner } from './Banner.tsx';

const meta = preview.meta({
  title: 'AI Generated/Medium/Banner',
  component: Banner,
  parameters: {
    layout: 'padded',
  },
});

export default meta;

export const Informational = meta.story({
  args: {
    variant: 'info',
    compact: false,
    title: 'Maintenance window',
    children: 'Deployment access will be read-only between 02:00 and 02:30 UTC.',
  },
});

export const DismissibleError = meta.story({
  args: {
    variant: 'error',
    title: 'Action required',
    children: 'Rotate the affected credentials before the next automated sync.',
    showCloseAction: true,
    onClose: fn(),
  },
});
