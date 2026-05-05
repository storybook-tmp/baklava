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
    <Accordion>
      <Accordion.Item title="Section 1">Content for section 1</Accordion.Item>
      <Accordion.Item title="Section 2">Content for section 2</Accordion.Item>
      <Accordion.Item title="Section 3">Content for section 3</Accordion.Item>
    </Accordion>
  ),
};

export const NonExclusive: Story = {
  render: () => (
    <Accordion exclusive={false}>
      <Accordion.Item title="Section A">Content for section A</Accordion.Item>
      <Accordion.Item title="Section B">Content for section B</Accordion.Item>
    </Accordion>
  ),
};
