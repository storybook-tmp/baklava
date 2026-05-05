import { fn } from 'storybook/test';

import { config } from '#.storybook/preview';

import { Tag } from './Tag.tsx';

const meta = config.meta({
  title: 'AI Generated/Simple/Tag',
  component: Tag,
});

export const Default = meta.story({
  args: {
    content: 'Production',
  },
});

export const Removable = meta.story({
  args: {
    content: 'Filter: Active',
    onRemove: fn(),
  },
});
