import preview from '../../../../.storybook/preview.tsx';

import { Button } from './Button.tsx';

const meta = preview.meta({
  title: 'AI Generated/Medium/Button',
  component: Button,
  args: {
    label: 'Save changes',
  },
});

export default meta;

export const Primary = meta.story({
  args: {
    kind: 'primary',
  },
});

export const SecondaryWithIcon = meta.story({
  args: {
    kind: 'secondary',
    icon: 'download',
    label: 'Export report',
  },
});
