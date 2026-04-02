import type { Meta, StoryObj } from '@storybook/react-vite';

import { LayoutDecorator } from '../../../util/storybook/LayoutDecorator.tsx';
import { Accordion } from './Accordion.tsx';

const meta = {
  title: 'AI Generated/Complex/Accordion',
  component: Accordion,
  decorators: [
    Story => (
      <LayoutDecorator size="medium">
        <Story />
      </LayoutDecorator>
    ),
  ],
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Exclusive: Story = {
  render: args => (
    <Accordion {...args}>
      <Accordion.Item open title="Secrets rotation">
        <p>Rotate credentials on a fixed cadence and keep a short overlap period for clients.</p>
      </Accordion.Item>
      <Accordion.Item title="Access review">
        <p>Run quarterly entitlement reviews and remove dormant access before the next release window.</p>
      </Accordion.Item>
      <Accordion.Item title="Audit export">
        <p>Export recent audit entries for compliance sign-off and archive them with the release notes.</p>
      </Accordion.Item>
    </Accordion>
  ),
};

export const MultipleOpen: Story = {
  args: {
    exclusive: false,
  },
  render: args => (
    <Accordion {...args}>
      <Accordion.Item open title="West region">
        <p>Healthy capacity with no active incidents and a small queue of routine maintenance work.</p>
      </Accordion.Item>
      <Accordion.Item open title="Central region">
        <p>Scaling up during the migration window while the data sync job catches up on backlog.</p>
      </Accordion.Item>
      <Accordion.Item title="East region">
        <p>Standing by for failover drills scheduled later this week.</p>
      </Accordion.Item>
    </Accordion>
  ),
};
