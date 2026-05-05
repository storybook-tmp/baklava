import type { Meta, StoryObj } from '@storybook/react-vite';

import { Banner } from './Banner.tsx';

const meta = {
  title: 'AI Generated/Medium/Banner',
  component: Banner,
  parameters: {
    layout: 'padded',
  },
  render: args => (
    <Banner {...args}>
      We detected a configuration change. Review the updated settings before continuing.
    </Banner>
  ),
} satisfies Meta<typeof Banner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Info: Story = {
  args: {
    title: 'System update available',
    variant: 'info',
    actions: <Banner.ActionButton kind="secondary" label="Review" />,
  },
};

export const WarningDismissible: Story = {
  args: {
    compact: false,
    title: 'Storage nearing capacity',
    variant: 'warning',
    showCloseAction: true,
    onClose: () => {},
    actions: <Banner.ActionButton kind="secondary" label="Open dashboard" />,
  },
};
