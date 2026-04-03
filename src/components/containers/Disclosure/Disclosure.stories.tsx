import type { Meta, StoryObj } from '@storybook/react-vite';
import { Disclosure } from './Disclosure.tsx';

const meta = {
  component: Disclosure,
} satisfies Meta<typeof Disclosure>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Disclosure title="Advanced Options">
      <p>Option 1: Enable debug mode</p>
      <p>Option 2: Show verbose output</p>
      <p>Option 3: Use experimental features</p>
    </Disclosure>
  ),
};

export const InitiallyOpen: Story = {
  render: () => (
    <Disclosure title="Details" open>
      <p>This disclosure starts in the open state.</p>
      <p>Users can still toggle it closed.</p>
    </Disclosure>
  ),
};

export const MultipleDisclosures: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Disclosure title="Section 1">
        Content for section one.
      </Disclosure>
      <Disclosure title="Section 2">
        Content for section two.
      </Disclosure>
      <Disclosure title="Section 3">
        Content for section three.
      </Disclosure>
    </div>
  ),
};
