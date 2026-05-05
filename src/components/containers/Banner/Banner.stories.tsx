import type { Meta, StoryObj } from '@storybook/react-vite';

import { Banner } from './Banner.tsx';

const meta = {
  component: Banner,
} satisfies Meta<typeof Banner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Informational: Story = {
  render: () => (
    <div style={{ maxWidth: '48rem', padding: '2rem' }}>
      <Banner title="Scheduled review" variant="info">
        A weekly approval review is ready for operators to inspect before the next rollout window opens.
      </Banner>
    </div>
  ),
};

export const WarningWithActions: Story = {
  render: () => (
    <div style={{ maxWidth: '48rem', padding: '2rem' }}>
      <Banner
        compact={false}
        title="Certificate rotation due soon"
        variant="warning"
        actions={
          <>
            <Banner.ActionButton kind="secondary" label="Review" />
            <Banner.ActionIcon icon="info" label="More details" />
          </>
        }
      >
        Two connections will require operator approval in the next 48 hours.
      </Banner>
    </div>
  ),
};

export const DismissibleError: Story = {
  render: () => (
    <div style={{ maxWidth: '48rem', padding: '2rem' }}>
      <Banner
        compact={false}
        title="Deployment blocked"
        variant="error"
        showCloseAction
        onClose={() => {}}
        actions={<Banner.ActionButton kind="secondary" label="Inspect policy" />}
      >
        The latest policy update failed validation because one environment is missing the required approval owner.
      </Banner>
    </div>
  ),
};
