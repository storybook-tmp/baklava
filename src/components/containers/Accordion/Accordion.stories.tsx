import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './Accordion';

const meta = {
  title: 'AI Generated/Complex/Accordion',
  component: Accordion,
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Accordion {...args}>
      <Accordion.Item title="Section 1">
        <p>Content for section 1. This can be any React component or text.</p>
      </Accordion.Item>
      <Accordion.Item title="Section 2">
        <p>Content for section 2. Each section can have different content.</p>
      </Accordion.Item>
      <Accordion.Item title="Section 3">
        <p>Content for section 3. Sections can be expanded and collapsed.</p>
      </Accordion.Item>
    </Accordion>
  ),
};

export const NonExclusive: Story = {
  render: (args) => (
    <Accordion {...args}>
      <Accordion.Item title="Feature One">
        <ul style={{ margin: 0, paddingLeft: '20px' }}>
          <li>Description of feature one</li>
          <li>More details about feature one</li>
        </ul>
      </Accordion.Item>
      <Accordion.Item title="Feature Two">
        <ul style={{ margin: 0, paddingLeft: '20px' }}>
          <li>Description of feature two</li>
          <li>More details about feature two</li>
        </ul>
      </Accordion.Item>
      <Accordion.Item title="Feature Three">
        <p>This accordion allows multiple sections to be open at the same time.</p>
      </Accordion.Item>
    </Accordion>
  ),
  args: {
    exclusive: false,
  },
};

export const WithLongContent: Story = {
  render: (args) => (
    <Accordion {...args}>
      <Accordion.Item title="Details">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Accordion.Item>
      <Accordion.Item title="More Information">
        <p>Additional content can be displayed when this section is expanded.</p>
      </Accordion.Item>
    </Accordion>
  ),
};
