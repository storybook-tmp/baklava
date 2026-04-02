import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
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
        <Accordion.Item title="Section 1">
          <p>Content for section 1. This is the first accordion item.</p>
        </Accordion.Item>
        <Accordion.Item title="Section 2">
          <p>Content for section 2. This is the second accordion item.</p>
        </Accordion.Item>
        <Accordion.Item title="Section 3">
          <p>Content for section 3. This is the third accordion item.</p>
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
        <Accordion.Item title="First Item" open>
          <p>This item is open by default. Multiple items can be open simultaneously.</p>
        </Accordion.Item>
        <Accordion.Item title="Second Item" open>
          <p>This item is also open by default.</p>
        </Accordion.Item>
        <Accordion.Item title="Third Item">
          <p>This item starts closed.</p>
        </Accordion.Item>
      </>
    ),
  },
};
