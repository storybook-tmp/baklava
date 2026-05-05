import type { Meta, StoryObj } from '@storybook/react-vite';

import { Icon } from '../../graphics/Icon/Icon.tsx';
import { Card } from './Card.tsx';

const meta = {
  title: 'AI Generated/Medium/Card',
  component: Card,
  parameters: {
    layout: 'padded',
  },
  render: args => (
    <Card {...args}>
      <Card.Heading icon={<Icon icon="dashboard" />}>Deployment overview</Card.Heading>
      <p>
        Monitor release health, environment readiness, and recent activity from one place.
      </p>
    </Card>
  ),
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const FlatWithLinkedHeading: Story = {
  args: {
    flat: true,
  },
  render: args => (
    <Card {...args}>
      <Card.HeadingLink href="https://example.com" icon={<Icon icon="link-external" />}>
        View integration details
      </Card.HeadingLink>
      <p>
        Connected services, token status, and audit trails are available in the integration dashboard.
      </p>
    </Card>
  ),
};
