import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './Accordion';

const meta = {
  title: 'AI Generated/Complex/Accordion',
  component: Accordion,
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Accordion>
      <Accordion.Item title="Section 1">
        <p>Content for section 1 goes here.</p>
      </Accordion.Item>
      <Accordion.Item title="Section 2">
        <p>Content for section 2 goes here.</p>
      </Accordion.Item>
      <Accordion.Item title="Section 3">
        <p>Content for section 3 goes here.</p>
      </Accordion.Item>
    </Accordion>
  ),
};

export const Exclusive: Story = {
  render: () => (
    <Accordion exclusive>
      <Accordion.Item title="Only one item can be open">
        <p>This accordion only allows one item to be open at a time.</p>
      </Accordion.Item>
      <Accordion.Item title="Open this item">
        <p>The previous item will automatically close.</p>
      </Accordion.Item>
    </Accordion>
  ),
};
