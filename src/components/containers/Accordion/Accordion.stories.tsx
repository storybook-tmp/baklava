import type { Meta, StoryObj } from '@storybook/react-vite';

import { LayoutDecorator } from '../../../util/storybook/LayoutDecorator.tsx';

import { Accordion } from './Accordion.tsx';


const defaultChildren = (
  <>
    <Accordion.Item open title="How do rotations work?">
      Secrets and certificates can be rotated in place without forcing a manual redeploy.
    </Accordion.Item>
    <Accordion.Item title="Can I scope access by environment?">
      Yes. Policies can target projects, accounts, or specific runtime environments.
    </Accordion.Item>
    <Accordion.Item title="What happens during an outage?">
      Audit logs remain available and recent policy snapshots are preserved for recovery workflows.
    </Accordion.Item>
  </>
);

const meta = {
  title: 'AI Generated/Complex/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  render: args => (
    <LayoutDecorator size="large">
      <Accordion {...args}>{args.children ?? defaultChildren}</Accordion>
    </LayoutDecorator>
  ),
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Exclusive: Story = {};

export const NonExclusive: Story = {
  args: {
    exclusive: false,
    children: (
      <>
        <Accordion.Item open title="How do rotations work?">
          Secrets and certificates can be rotated in place without forcing a manual redeploy.
        </Accordion.Item>
        <Accordion.Item open title="Can I scope access by environment?">
          Yes. Policies can target projects, accounts, or specific runtime environments.
        </Accordion.Item>
        <Accordion.Item title="What happens during an outage?">
          Audit logs remain available and recent policy snapshots are preserved for recovery workflows.
        </Accordion.Item>
      </>
    ),
  },
};
