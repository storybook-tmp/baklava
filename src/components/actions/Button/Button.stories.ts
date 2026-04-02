import { fn } from 'storybook/test';

import { config } from '#.storybook/preview';

import { Button } from './Button.tsx';

const meta = config.meta({
  title: 'AI Generated/Simple/Button',
  component: Button,
  args: {
    onPress: fn(),
  },
});

export const Primary = meta.story({
  args: {
    label: 'Save changes',
    kind: 'primary',
  },
});

export const Disabled = meta.story({
  args: {
    label: 'Unavailable',
    kind: 'secondary',
    disabled: true,
  },
});
