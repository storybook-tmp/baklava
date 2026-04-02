import preview from '../../../../.storybook/preview.tsx';

import { Spinner } from './Spinner.tsx';

const meta = preview.meta({
  title: 'AI Generated/Simple/Spinner',
  component: Spinner,
});

export default meta;

export const Inline = meta.story({
  args: {
    inline: true,
    size: 'small',
  },
});

export const Large = meta.story({
  args: {
    size: 'large',
  },
});
