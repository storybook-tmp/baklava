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
        <p>Content for section 1</p>
      </Accordion.Item>
      <Accordion.Item title="Section 2">
        <p>Content for section 2</p>
      </Accordion.Item>
      <Accordion.Item title="Section 3">
        <p>Content for section 3</p>
      </Accordion.Item>
    </Accordion>
  ),
};

export const NonExclusive: Story = {
  render: () => (
    <Accordion exclusive={false}>
      <Accordion.Item title="First Item">
        <p>First item content. Multiple items can be open at once.</p>
      </Accordion.Item>
      <Accordion.Item title="Second Item">
        <p>Second item content.</p>
      </Accordion.Item>
    </Accordion>
  ),
};
