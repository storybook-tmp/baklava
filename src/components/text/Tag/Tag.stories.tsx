import type { Meta, StoryObj } from '@storybook/react-vite';
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
  render: () => <Tag content="us-west-2" onRemove={() => {}} />,
};

export const Multiple: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Tag content="AES-256" />
      <Tag content="RSA-2048" />
      <Tag content="HMAC-SHA256" />
    </div>
  ),
};
