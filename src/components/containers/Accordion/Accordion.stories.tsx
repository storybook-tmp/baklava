import type { Meta, StoryObj } from '@storybook/react-vite';
import { Accordion } from './Accordion.tsx';

const meta = {
  title: 'AI Generated/Complex/Accordion',
  component: Accordion,
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Exclusive: Story = {
  render: () => (
    <Accordion exclusive>
      <Accordion.Item title="Section 1">
        Content for the first section.
      </Accordion.Item>
      <Accordion.Item title="Section 2">
        Content for the second section.
      </Accordion.Item>
      <Accordion.Item title="Section 3">
        Content for the third section.
      </Accordion.Item>
    </Accordion>
  ),
};

export const NonExclusive: Story = {
  render: () => (
    <Accordion exclusive={false}>
      <Accordion.Item title="Section A">
        Multiple sections can be open at once.
      </Accordion.Item>
      <Accordion.Item title="Section B">
        This section can also be open simultaneously.
      </Accordion.Item>
    </Accordion>
  ),
};
