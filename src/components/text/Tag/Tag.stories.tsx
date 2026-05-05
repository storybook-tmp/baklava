import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tag } from './Tag.tsx';

const meta = {
  component: Tag,
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Tag content="JavaScript" />,
};

export const Removable: Story = {
  render: () => <Tag content="Removable Tag" onRemove={() => {}} />,
};

export const MultipleTags: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Tag content="React" />
      <Tag content="TypeScript" />
      <Tag content="Storybook" />
      <Tag content="Vite" />
    </div>
  ),
};
