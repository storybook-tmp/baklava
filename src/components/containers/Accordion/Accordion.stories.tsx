import type { Meta, StoryObj } from '@storybook/react-vite';

import { Accordion } from './Accordion.tsx';

const meta = {
  title: 'AI Generated/Complex/Accordion',
  component: Accordion,
  parameters: {
    layout: 'padded',
  },
  render: args => (
    <Accordion {...args}>
      <Accordion.Item title="Encryption keys" open>
        <p>Manage lifecycle settings, expiry windows, and automated rotation policies.</p>
      </Accordion.Item>
      <Accordion.Item title="Access policies">
        <p>Define who can view, use, and administer protected resources across environments.</p>
      </Accordion.Item>
      <Accordion.Item title="Audit events">
        <p>Review recent actions and export logs for compliance reporting.</p>
      </Accordion.Item>
    </Accordion>
  ),
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Exclusive: Story = {
  args: {
    exclusive: true,
  },
};

export const MultipleOpen: Story = {
  args: {
    exclusive: false,
  },
};
