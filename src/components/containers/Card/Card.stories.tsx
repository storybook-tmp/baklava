import type { Meta, StoryObj } from '@storybook/react-vite';

import { Icon } from '../../graphics/Icon/Icon.tsx';
import { Card } from './Card.tsx';

const meta = {
  title: 'AI Generated/Medium/Card',
  component: Card,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => (
    <Card {...args}>
      <Card.Heading>Deployment status</Card.Heading>
      <p>All key services are healthy and ready for the next rollout window.</p>
    </Card>
  ),
};

export const WithIconAndFlatStyle: Story = {
  args: {
    flat: true,
  },
  render: args => (
    <Card {...args}>
      <Card.Heading icon={<Icon icon="dashboard" />}>Overview</Card.Heading>
      <p>Use the summary view to monitor adoption, reliability, and account health.</p>
    </Card>
  ),
};
