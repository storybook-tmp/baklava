import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tag } from './Tag.tsx';

const meta = {
  title: 'AI Generated/Simple/Tag',
  component: Tag,
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: 'Label',
  },
};

export const Removable: Story = {
  args: {
    content: 'Removable Tag',
    onRemove: () => {},
  },
};
