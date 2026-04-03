import type { Meta, StoryObj } from '@storybook/react-vite';

import { Banner } from './Banner.tsx';

const meta = {
  component: Banner,
} satisfies Meta<typeof Banner>;

export default meta;
type Story = StoryObj<typeof meta>;

const noop = () => undefined;

export const Informational: Story = {
  render: () => (
    <Banner title="Deployment scheduled">
      The policy bundle is staged and will roll out automatically after the final approval arrives.
    </Banner>
  ),
};

export const WarningWithAction: Story = {
  render: () => (
    <Banner
      variant="warning"
      compact={false}
      title="Manual review required"
      actions={<Banner.ActionButton label="Open audit log" onPress={noop} />}
    >
      One of the target services is still using an older certificate chain and should be reviewed before you continue
      the rollout.
    </Banner>
  ),
};

export const DismissibleError: Story = {
  render: () => (
    <Banner
      variant="error"
      compact={false}
      title="Unable to connect"
      showCloseAction
      onClose={noop}
      actions={<Banner.ActionIcon icon="refresh" label="Retry connection" onPress={noop} />}
    >
      The selected cloud account did not respond to the latest connectivity check. Review the credentials and try
      again.
    </Banner>
  ),
};
