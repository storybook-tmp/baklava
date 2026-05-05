import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '../../components/actions/Button/Button.tsx';
import { Icon } from '../../components/graphics/Icon/Icon.tsx';
import { ErrorLayout } from './ErrorLayout.tsx';

const meta = {
  component: ErrorLayout,
} satisfies Meta<typeof ErrorLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NotFound: Story = {
  render: () => (
    <div style={{ maxWidth: '32rem', margin: '4rem auto' }}>
      <ErrorLayout
        icon={<Icon icon="status-failed-filled" />}
        title="Page unavailable"
        description={<span>The requested workspace route could not be found.</span>}
      >
        <ErrorLayout.Actions>
          <Button kind="primary" label="Return to dashboard" />
        </ErrorLayout.Actions>
      </ErrorLayout>
    </div>
  ),
};

export const AccessDenied: Story = {
  render: () => (
    <div style={{ maxWidth: '32rem', margin: '4rem auto' }}>
      <ErrorLayout
        icon={<Icon icon="warning-filled" />}
        title="Access denied"
        description={<span>Your role does not allow changes in this environment.</span>}
      >
        <ErrorLayout.Actions>
          <Button kind="secondary" label="Request access" />
          <Button kind="primary" label="Back to overview" />
        </ErrorLayout.Actions>
      </ErrorLayout>
    </div>
  ),
};

export const ConnectionLost: Story = {
  render: () => (
    <div style={{ maxWidth: '32rem', margin: '4rem auto' }}>
      <ErrorLayout
        icon={<Icon icon="warning-filled" />}
        title="Connection interrupted"
        description={<span>The tenant service stopped responding while the latest changes were loading.</span>}
      >
        <ErrorLayout.Actions>
          <Button kind="secondary" label="Contact support" />
          <Button kind="primary" label="Retry" />
        </ErrorLayout.Actions>
      </ErrorLayout>
    </div>
  ),
};
