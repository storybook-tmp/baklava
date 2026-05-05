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
  },
  render: (args) => (
    <Accordion {...args}>
      <Accordion.Item title="Section 1">
        Content for section 1. Only one section can be open at a time.
      </Accordion.Item>
      <Accordion.Item title="Section 2">
        Content for section 2. Opening this closes section 1.
      </Accordion.Item>
      <Accordion.Item title="Section 3">
        Content for section 3. Opening this closes the others.
      </Accordion.Item>
    </Accordion>
  ),
};

export const NonExclusive: Story = {
  args: {
    exclusive: false,
  },
  render: (args) => (
    <Accordion {...args}>
      <Accordion.Item title="Section A">
        Content for section A. Multiple sections can be open.
      </Accordion.Item>
      <Accordion.Item title="Section B">
        Content for section B. This can be open alongside section A.
      </Accordion.Item>
      <Accordion.Item title="Section C">
        Content for section C.
      </Accordion.Item>
    </Accordion>
  ),
};
