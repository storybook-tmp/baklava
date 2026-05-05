import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { Accordion } from './Accordion.tsx';

const meta = {
  title: 'AI Generated/Complex/Accordion',
  component: Accordion,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Exclusive: Story = {
  args: {
    exclusive: true,
    children: (
      <>
        <Accordion.Item title="Section 1">
          <p>Content for section 1.</p>
        </Accordion.Item>
        <Accordion.Item title="Section 2">
          <p>Content for section 2.</p>
        </Accordion.Item>
        <Accordion.Item title="Section 3">
          <p>Content for section 3.</p>
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
        <Accordion.Item title="Section A">
          <p>Content for section A.</p>
        </Accordion.Item>
        <Accordion.Item title="Section B">
          <p>Content for section B.</p>
        </Accordion.Item>
      </>
    ),
  },
};
