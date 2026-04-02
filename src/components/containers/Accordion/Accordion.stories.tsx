import type { Meta, StoryObj } from '@storybook/react-vite';
import { Accordion } from './Accordion';
import { Disclosure } from '../Disclosure/Disclosure';

const meta = {
  title: 'AI Generated/Complex/Accordion',
  component: Accordion,
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    exclusive: true,
    children: (
      <>
        <Accordion.Item title="Item 1">
          <p>Content for item 1. Only one accordion item can be open at a time in exclusive mode.</p>
        </Accordion.Item>
        <Accordion.Item title="Item 2">
          <p>Content for item 2.</p>
        </Accordion.Item>
        <Accordion.Item title="Item 3">
          <p>Content for item 3.</p>
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
        <Accordion.Item title="Item 1">
          <p>In non-exclusive mode, multiple items can be open at the same time.</p>
        </Accordion.Item>
        <Accordion.Item title="Item 2">
          <p>This item can be expanded independently.</p>
        </Accordion.Item>
        <Accordion.Item title="Item 3">
          <p>All items can be open together.</p>
        </Accordion.Item>
      </>
    ),
  },
};

export const Unstyled: Story = {
  args: {
    unstyled: true,
    exclusive: true,
    children: (
      <>
        <Accordion.Item title="Item 1">
          <p>Unstyled accordion item.</p>
        </Accordion.Item>
        <Accordion.Item title="Item 2">
          <p>Another unstyled item.</p>
        </Accordion.Item>
      </>
    ),
  },
};

export const WithLongContent: Story = {
  args: {
    exclusive: true,
    children: (
      <>
        <Accordion.Item title="Expandable Section">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </Accordion.Item>
        <Accordion.Item title="Another Section">
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </Accordion.Item>
      </>
    ),
  },
};
