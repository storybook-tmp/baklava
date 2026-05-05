import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import { Banner } from './Banner.tsx';

const meta = {
  title: 'AI Generated/Medium/Banner',
  component: Banner,
  decorators: [
    (Story) => (
      <div style={{ inlineSize: '38rem' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Banner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Informational: Story = {
  render: (args) => (
    <Banner
      {...args}
      actions={<Banner.ActionButton kind="secondary" label="View details" onPress={fn()} />}
    >
      A scheduled maintenance window starts tonight at 10:00 PM UTC.
    </Banner>
  ),
  args: {
    title: 'Maintenance notice',
    variant: 'info',
  },
};

export const WarningWithCloseAction: Story = {
  render: (args) => (
    <Banner {...args}>
      Certificate rotation is due in less than 24 hours for two production services.
    </Banner>
  ),
  args: {
    compact: false,
    title: 'Action required',
    variant: 'warning',
    showCloseAction: true,
    onClose: fn(),
  },
};
