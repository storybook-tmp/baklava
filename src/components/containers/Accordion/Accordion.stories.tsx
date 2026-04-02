import type { Meta, StoryObj } from '@storybook/react-vite';
import { Accordion } from './Accordion.tsx';

const meta = {
  title: 'AI Generated/Complex/Accordion',
  component: Accordion,
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Exclusive: Story = {
  args: {
    exclusive: true,
    children: (
      <>
        <Accordion.Item title="Section 1">
          <p>Content for section 1. Only one section can be open at a time.</p>
        </Accordion.Item>
        <Accordion.Item title="Section 2">
          <p>Content for section 2 with more details.</p>
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
        <Accordion.Item title="FAQ Item 1">
          <p>Answer to frequently asked question 1.</p>
        </Accordion.Item>
        <Accordion.Item title="FAQ Item 2">
          <p>Answer to frequently asked question 2.</p>
        </Accordion.Item>
      </>
    ),
  },
};
