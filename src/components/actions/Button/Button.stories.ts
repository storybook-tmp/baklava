import preview from '../../../../.storybook/preview';

import { Button } from './Button.tsx';

const meta = preview.meta({
  title: 'AI Generated/Simple/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
});

export default meta;

export const Primary = meta.story({
  args: {
    label: 'Save changes',
    kind: 'primary',
    icon: 'check',
  },
});

export const Nonactive = meta.story({
  args: {
    label: 'Saving...',
    kind: 'secondary',
    icon: 'refresh',
    nonactive: true,
  },
});
