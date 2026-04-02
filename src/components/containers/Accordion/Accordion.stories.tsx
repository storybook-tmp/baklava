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
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ExclusiveSections: Story = {
  args: {
    children: (
      <>
        <Accordion.Item title="Overview" open>
          <p>Summarize the current state, owners, and the most relevant operational context.</p>
        </Accordion.Item>
        <Accordion.Item title="Audit trail">
          <p>Review recent changes, affected secrets, and the user identities involved.</p>
        </Accordion.Item>
        <Accordion.Item title="Follow-up">
          <p>Capture next steps and link them to the owning workflow.</p>
        </Accordion.Item>
      </>
    ),
  },
};

export const IndependentSections: Story = {
  args: {
    exclusive: false,
    children: (
      <>
        <Accordion.Item title="Cluster A" open>
          <p>Primary region nodes are healthy and serving traffic normally.</p>
        </Accordion.Item>
        <Accordion.Item title="Cluster B" open>
          <p>Secondary region is in standby mode with replication caught up.</p>
        </Accordion.Item>
      </>
    ),
  },
};
