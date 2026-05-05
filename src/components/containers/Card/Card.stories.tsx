import type { Meta, StoryObj } from '@storybook/react-vite';

import { Icon } from '../../graphics/Icon/Icon.tsx';
import { Card } from './Card.tsx';


const meta = {
  title: 'AI Generated/Medium/Card',
  component: Card,
  render: args => (
    <Card {...args}>
      <Card.Heading icon={<Icon icon="dashboard" />}>Platform overview</Card.Heading>
      <p>Review posture, active services, and release health from a single surface.</p>
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
