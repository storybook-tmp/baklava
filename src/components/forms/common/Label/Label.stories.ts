import * as React from 'react';

import { config } from '#.storybook/preview';

import { Label } from './Label.tsx';

const checkbox = React.createElement('input', { type: 'checkbox' });

const meta = config.meta({
  title: 'AI Generated/Simple/Label',
  component: Label,
});

export const InlineStart = meta.story({
  args: {
    label: 'Remember me',
    children: checkbox,
  },
});

export const InlineEnd = meta.story({
  args: {
    label: 'Enable alerts',
    position: 'inline-end',
    children: checkbox,
  },
});
