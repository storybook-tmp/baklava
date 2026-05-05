import type { Meta, StoryObj } from '@storybook/react-vite';

import { LayoutDecorator } from '../../../util/storybook/LayoutDecorator.tsx';
import { Accordion } from './Accordion.tsx';

const meta = {
  title: 'AI Generated/Complex/Accordion',
  component: Accordion,
  parameters: {
    layout: 'padded',
  },
  render: args => (
    <LayoutDecorator size="small">
      <Accordion {...args}>
        <Accordion.Item open title="General settings">
          Review naming, ownership, and deployment defaults for this service.
        </Accordion.Item>
        <Accordion.Item title="Security posture">
          Configure key rotation, secret access, and environment-specific policies.
        </Accordion.Item>
        <Accordion.Item title="Notifications">
          Choose which changes should trigger alerts for administrators and operators.
        </Accordion.Item>
      </Accordion>
    </LayoutDecorator>
  ),
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Exclusive: Story = {};

export const NonExclusive: Story = {
  args: {
    exclusive: false,
  },
  render: args => (
    <LayoutDecorator size="small">
      <Accordion {...args}>
        <Accordion.Item open title="North America">
          Service health is stable and all scheduled maintenance has completed.
        </Accordion.Item>
        <Accordion.Item open title="Europe">
          Capacity is healthy and no incident response actions are currently open.
        </Accordion.Item>
        <Accordion.Item title="Asia Pacific">
          Expansion work is in progress for the next rollout window.
        </Accordion.Item>
      </Accordion>
    </LayoutDecorator>
  ),
};
