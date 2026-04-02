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
        Content for the first accordion section.
      </Accordion.Item>
      <Accordion.Item title="Section 2">
        Content for the second accordion section.
      </Accordion.Item>
      <Accordion.Item title="Section 3">
        Content for the third accordion section.
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
        Multiple sections can be open simultaneously.
      </Accordion.Item>
      <Accordion.Item title="Section B">
        This one can also be open at the same time.
      </Accordion.Item>
    </Accordion>
  ),
};
