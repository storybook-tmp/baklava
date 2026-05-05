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
    content: 'Tag Label',
  },
};

export const WithRemove: Story = {
  args: {
    content: 'Removable Tag',
    onRemove: () => console.log('Tag removed'),
  },
};

export const LongContent: Story = {
  args: {
    content: 'This is a longer tag with more content',
  },
};
