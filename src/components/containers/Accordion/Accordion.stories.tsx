import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';

import { Accordion } from './Accordion.tsx';

const meta = {
  title: 'AI Generated/Complex/Accordion',
  component: Accordion,
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Accordion.Item title="First section">
          Content of the first section. Click to collapse.
        </Accordion.Item>
        <Accordion.Item title="Second section" open>
          Content of the second section, open by default.
        </Accordion.Item>
        <Accordion.Item title="Third section">
          Content of the third section.
        </Accordion.Item>
      </>
    ),
  },
};

export const NonExclusive: Story = {
  args: {
    exclusive: false,
    children: (
      <>
        <Accordion.Item title="Section A" open>
          Multiple sections can be open at the same time.
        </Accordion.Item>
        <Accordion.Item title="Section B" open>
          This one is also open simultaneously.
        </Accordion.Item>
        <Accordion.Item title="Section C">
          This one starts collapsed.
        </Accordion.Item>
      </>
    ),
  },
};
