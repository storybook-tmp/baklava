import type { Meta, StoryObj } from '@storybook/react-vite';
import { Accordion } from './Accordion';

const meta = {
  title: 'AI Generated/Complex/Accordion',
  component: Accordion,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Accordion {...args}>
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
  args: {
    exclusive: false,
  },
  render: (args) => (
    <Accordion {...args}>
      <Accordion.Item title="Section 1">
        <p>Content for section 1</p>
      </Accordion.Item>
      <Accordion.Item title="Section 2">
        <p>Content for section 2</p>
      </Accordion.Item>
    </Accordion>
  ),
};
