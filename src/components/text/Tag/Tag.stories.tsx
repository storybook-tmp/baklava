import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tag } from './Tag.tsx';

const meta = {
  component: Tag,
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Tag content="Encryption" />,
};

export const Removable: Story = {
  render: () => <Tag content="AES-256" onRemove={() => {}} />,
};

export const Multiple: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Tag content="Security" />
      <Tag content="Compliance" />
      <Tag content="HSM" />
      <Tag content="Key Management" onRemove={() => {}} />
    </div>
  ),
};
