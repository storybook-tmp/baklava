import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Tag } from './Tag';

const meta = {
  component: Tag,
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Tag content="Production" />,
};

export const Removable: Story = {
  render: () => <Tag content="staging-env" onRemove={fn()} />,
};

export const MultipleItems: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Tag content="encryption" />
      <Tag content="HSM" />
      <Tag content="key-management" />
      <Tag content="compliance" />
    </div>
  ),
};
