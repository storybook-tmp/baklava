import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Accordion } from './Accordion.tsx';

const meta = {
  title: 'AI Generated/Complex/Accordion',
  component: Accordion,
  parameters: { layout: 'padded' },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Exclusive: Story = {
  args: {
    exclusive: true,
    children: (
      <>
        <Accordion.Item title="Section 1">
          Content for the first section. Only one section can be open at a time.
        </Accordion.Item>
        <Accordion.Item title="Section 2">
          Content for the second section. Opening this closes the other.
        </Accordion.Item>
        <Accordion.Item title="Section 3">
          Content for the third section with more details.
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
        <Accordion.Item title="FAQ 1">
          Multiple sections can be open simultaneously.
        </Accordion.Item>
        <Accordion.Item title="FAQ 2">
          This section can be open at the same time as others.
        </Accordion.Item>
      </>
    ),
  },
};
