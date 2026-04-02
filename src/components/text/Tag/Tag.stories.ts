import { fn } from 'storybook/test';

import preview from '../../../../.storybook/preview';

import { Tag } from './Tag.tsx';

const meta = preview.meta({
  title: 'AI Generated/Simple/Tag',
  component: Tag,
  args: {
    content: 'Production',
  },
  parameters: {
    layout: 'centered',
  },
});

export default meta;

export const Default = meta.story();

export const Removable = meta.story({
  args: {
    content: 'Removable tag',
    onRemove: fn(),
  },
});
