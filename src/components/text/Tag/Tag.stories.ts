import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tag } from './Tag';

const meta = {
  title: 'AI Generated/Simple/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: 'Sample Tag',
  },
};

export const WithRemove: Story = {
  args: {
    content: 'Removable Tag',
    onRemove: () => console.log('Tag removed'),
  },
};
