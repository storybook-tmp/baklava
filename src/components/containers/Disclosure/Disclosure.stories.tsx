import type { Meta, StoryObj } from '@storybook/react-vite';
import { Disclosure } from './Disclosure.tsx';

const meta = {
  component: Disclosure,
} satisfies Meta<typeof Disclosure>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Disclosure title="Click to expand">
      <p>This is the collapsible content inside the disclosure.</p>
    </Disclosure>
  ),
};

export const Open: Story = {
  render: () => (
    <Disclosure title="Already expanded" open>
      <p>This content is visible by default.</p>
    </Disclosure>
  ),
};

export const Multiple: Story = {
  render: () => (
    <div>
      <Disclosure title="Section 1">
        <p>Content for section 1.</p>
      </Disclosure>
      <Disclosure title="Section 2">
        <p>Content for section 2.</p>
      </Disclosure>
      <Disclosure title="Section 3">
        <p>Content for section 3.</p>
      </Disclosure>
    </div>
  ),
};
