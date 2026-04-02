import type { Meta, StoryObj } from '@storybook/react-vite';

import { Icon } from '../../graphics/Icon/Icon.tsx';
import { LayoutDecorator } from '../../../util/storybook/LayoutDecorator.tsx';
import { Card } from './Card.tsx';

const meta = {
  title: 'AI Generated/Medium/Card',
  component: Card,
  decorators: [
    Story => (
      <LayoutDecorator size="small">
        <Story />
      </LayoutDecorator>
    ),
  ],
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => (
    <Card {...args}>
      <Card.Heading icon={<Icon icon="security-dashboard" />}>
        Key Management
      </Card.Heading>
      <p>
        Centralize secrets, keys, and certificates in a single workflow for platform teams.
      </p>
    </Card>
  ),
};

export const FlatLinked: Story = {
  args: {
    flat: true,
  },
  render: args => (
    <Card {...args}>
      <Card.HeadingLink href="https://example.com/docs" icon={<Icon icon="docs" />}>
        API Documentation
      </Card.HeadingLink>
      <p>
        Review integration steps, service limits, and rollout notes before enabling a new environment.
      </p>
    </Card>
  ),
};
