import preview from '../../../../.storybook/preview';

import { Spinner } from './Spinner.tsx';

const meta = preview.meta({
  title: 'AI Generated/Simple/Spinner',
  component: Spinner,
  args: {
    size: 'small',
  },
  parameters: {
    layout: 'centered',
  },
});

export default meta;

export const Default = meta.story();

export const LargeInline = meta.story({
  args: {
    inline: true,
    size: 'large',
  },
});
