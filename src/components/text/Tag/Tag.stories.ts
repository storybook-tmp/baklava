import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from './Tag';

const meta = {
  title: 'AI Generated/Simple/Tag',
  component: Tag,
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: 'Technology',
  },
};

export const Removable: Story = {
  args: {
    content: 'Click to remove',
    onRemove: () => alert('Tag removed!'),
  },
};
