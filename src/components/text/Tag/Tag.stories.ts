import type { Meta, StoryObj } from '@storybook/react-vite';

import { Tag } from './Tag.tsx';


const meta = {
  title: 'AI Generated/Simple/Tag',
  component: Tag,
  args: {
    content: 'Production',
  },
} satisfies Meta<typeof Tag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Removable: Story = {
  args: {
    content: 'Staging',
    onRemove: () => {},
  },
};
