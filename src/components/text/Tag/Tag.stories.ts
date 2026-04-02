import type { Meta, StoryObj } from '@storybook/react-vite';
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

export const Removable: Story = {
  args: {
    content: 'Removable Tag',
    onRemove: () => alert('Tag removed'),
  },
};

export const LongContent: Story = {
  args: {
    content: 'This is a tag with longer content',
  },
};

export const Unstyled: Story = {
  args: {
    content: 'Unstyled Tag',
    unstyled: true,
  },
};
