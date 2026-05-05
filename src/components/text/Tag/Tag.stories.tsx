import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import { LayoutDecorator } from '../../../util/storybook/LayoutDecorator.tsx';
import { Tag } from './Tag.tsx';

const meta = {
  title: 'AI Generated/Simple/Tag',
  component: Tag,
  decorators: [
    Story => (
      <LayoutDecorator size="x-small">
        <Story />
      </LayoutDecorator>
    ),
  ],
} satisfies Meta<typeof Tag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Static: Story = {
  args: {
    content: 'Production',
  },
};

export const Removable: Story = {
  args: {
    content: 'Critical',
    onRemove: fn(),
  },
};
