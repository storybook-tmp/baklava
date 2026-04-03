import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tag } from './Tag.tsx';

const meta = {
  component: Tag,
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Tag content="Status: Active" />,
};

export const Removable: Story = {
  render: () => <Tag content="Filter: Date" onRemove={() => {}} />,
};

export const Multiple: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px' }}>
      <Tag content="React" />
      <Tag content="TypeScript" />
      <Tag content="Storybook" />
    </div>
  ),
};
