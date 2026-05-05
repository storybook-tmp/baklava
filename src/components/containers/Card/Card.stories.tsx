import type { Meta, StoryObj } from '@storybook/react-vite';

import { Icon } from '../../graphics/Icon/Icon.tsx';
import { Card } from './Card.tsx';

const meta = {
  title: 'AI Generated/Medium/Card',
  component: Card,
  decorators: [
    (Story) => (
      <div style={{ inlineSize: '24rem' }}>
        <Story />
      </div>
    ),
  ],
  render: (args) => <Card {...args} />,
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  render: (args) => (
    <Card {...args}>
      <Card.Heading>Key Management</Card.Heading>
      <p>Manage secrets, audit trails, and access policies from one place.</p>
    </Card>
  ),
};

export const LinkedHeading: Story = {
  render: (args) => (
    <Card {...args} flat>
      <Card.HeadingLink
        href="https://example.com/docs"
        icon={<Icon icon="documentation" />}
      >
        Read the integration guide
      </Card.HeadingLink>
      <p>Open the docs to review setup steps, caveats, and rollout notes.</p>
    </Card>
  ),
};
