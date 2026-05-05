import type { Meta, StoryObj } from '@storybook/react-vite';

import { LayoutDecorator } from '../../../util/storybook/LayoutDecorator.tsx';

import { Accordion } from './Accordion.tsx';

const meta = {
  title: 'AI Generated/Complex/Accordion',
  component: Accordion,
  parameters: {
    layout: 'padded',
  },
  decorators: [
    Story => (
      <LayoutDecorator size="medium">
        <Story />
      </LayoutDecorator>
    ),
  ],
  render: args => (
    <Accordion {...args}>
      <Accordion.Item open title="Cluster health">
        All production services are healthy and replication lag is within the expected threshold.
      </Accordion.Item>
      <Accordion.Item title="Pending tasks">
        Three maintenance items remain open for the weekly infrastructure review.
      </Accordion.Item>
      <Accordion.Item title="Notes">
        Rotate credentials for the reporting integration before the next deployment window.
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
  render: args => (
    <Accordion {...args}>
      <Accordion.Item open title="Cluster health">
        All production services are healthy and replication lag is within the expected threshold.
      </Accordion.Item>
      <Accordion.Item open title="Pending tasks">
        Three maintenance items remain open for the weekly infrastructure review.
      </Accordion.Item>
      <Accordion.Item title="Notes">
        Rotate credentials for the reporting integration before the next deployment window.
      </Accordion.Item>
    </Accordion>
  ),
};
