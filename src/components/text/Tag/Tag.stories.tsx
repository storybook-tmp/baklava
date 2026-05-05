import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import { Tag } from './Tag.tsx';

const meta = {
  title: 'AI Generated/Simple/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
  },
  args: {
    onRemove: fn(),
  },
} satisfies Meta<typeof Tag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: 'Production',
    onRemove: undefined,
  },
};

export const Removable: Story = {
  args: {
    content: 'Needs review',
  },
};
