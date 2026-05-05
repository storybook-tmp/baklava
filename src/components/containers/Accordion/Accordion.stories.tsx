import type { Meta, StoryObj } from '@storybook/react-vite';

import { LayoutDecorator } from '../../../util/storybook/LayoutDecorator.tsx';
import { Accordion } from './Accordion.tsx';


const meta = {
  title: 'AI Generated/Complex/Accordion',
  component: Accordion,
  decorators: [
    Story => (
      <LayoutDecorator size="large">
        <Story />
      </LayoutDecorator>
    ),
  ],
  render: args => (
    <Accordion {...args}>
      <Accordion.Item title="Identity posture" open>
        <p>Inspect certificate health, key usage, and control alignment for critical services.</p>
      </Accordion.Item>
      <Accordion.Item title="Key lifecycle automation">
        <p>Review rotation policy coverage and check which workloads still need automation.</p>
      </Accordion.Item>
      <Accordion.Item title="Compliance evidence">
        <p>Track the artifacts available for audit review and the owners who maintain them.</p>
      </Accordion.Item>
    </Accordion>
  ),
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Exclusive: Story = {};

export const MultipleOpen: Story = {
  args: {
    exclusive: false,
  },
  render: args => (
    <Accordion {...args}>
      <Accordion.Item title="Runtime telemetry" open>
        <p>Surface current alerts, recent drift, and the workloads requiring operator attention.</p>
      </Accordion.Item>
      <Accordion.Item title="Secrets rotation" open>
        <p>Compare scheduled rotations against actual rollout progress across dependent services.</p>
      </Accordion.Item>
      <Accordion.Item title="Service ownership">
        <p>Map operational responsibility so escalation paths remain clear during incidents.</p>
      </Accordion.Item>
    </Accordion>
  ),
};
