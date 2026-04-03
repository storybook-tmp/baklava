import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '../../actions/Button/Button.tsx';
import { LayoutDecorator } from '../../../util/storybook/LayoutDecorator.tsx';

import { Card } from './Card.tsx';

const meta = {
  title: 'AI Generated/Medium/Card',
  component: Card,
  parameters: {
    layout: 'padded',
  },
  decorators: [
    Story => (
      <LayoutDecorator size="small">
        <Story />
      </LayoutDecorator>
    ),
  ],
  render: args => (
    <Card {...args}>
      <Card.Heading>Status overview</Card.Heading>
      <p>
        Track rollout progress, owners, and blockers from a single summary card.
      </p>
      <Button kind="secondary" label="Review details" />
    </Card>
  ),
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Flat: Story = {
  args: {
    flat: true,
  },
};
