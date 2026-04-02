import type { Meta, StoryObj } from '@storybook/react-vite';

import { Accordion } from './Accordion.tsx';

const meta = {
  title: 'AI Generated/Complex/Accordion',
  component: Accordion,
  decorators: [
    (Story) => (
      <div style={{ inlineSize: '34rem' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ExclusiveSections: Story = {
  render: (args) => (
    <Accordion {...args}>
      <Accordion.Item open title="Overview">
        <p>Review service status, owner notes, and upcoming maintenance in one place.</p>
      </Accordion.Item>
      <Accordion.Item title="Audit trail">
        <p>See the latest policy updates and certificate events for this environment.</p>
      </Accordion.Item>
      <Accordion.Item title="Escalation path">
        <p>Reach the security team through the on-call runbook if anything looks suspicious.</p>
      </Accordion.Item>
    </Accordion>
  ),
};

export const MultiOpen: Story = {
  render: (args) => (
    <Accordion {...args} exclusive={false}>
      <Accordion.Item open title="Primary region">
        <p>Healthy and serving traffic with no active incidents.</p>
      </Accordion.Item>
      <Accordion.Item open title="Secondary region">
        <p>Standing by for failover and processing replication updates.</p>
      </Accordion.Item>
    </Accordion>
  ),
};
