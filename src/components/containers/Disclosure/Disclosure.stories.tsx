import type { Meta, StoryObj } from '@storybook/react-vite';
import { Disclosure } from './Disclosure';

const meta = {
  component: Disclosure,
} satisfies Meta<typeof Disclosure>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Disclosure title="What is Baklava?">
      <p>
        Baklava is the Fortanix design system, providing reusable UI components
        for building consistent and accessible applications.
      </p>
    </Disclosure>
  ),
};

export const OpenByDefault: Story = {
  render: () => (
    <Disclosure title="Key management details" open>
      <p>
        Keys are stored securely in a hardware security module (HSM) and can be
        rotated on a configurable schedule.
      </p>
    </Disclosure>
  ),
};

export const MultipleDisclosures: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Disclosure title="Getting started">
        <p>Follow the setup guide to configure your first security group.</p>
      </Disclosure>
      <Disclosure title="API access">
        <p>Generate API keys from the settings page to integrate with your applications.</p>
      </Disclosure>
      <Disclosure title="Support">
        <p>Contact our team for enterprise support and custom configurations.</p>
      </Disclosure>
    </div>
  ),
};
