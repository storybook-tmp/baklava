import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, waitFor } from 'storybook/test';

import { Banner } from './Banner.tsx';

const meta = {
  component: Banner,
} satisfies Meta<typeof Banner>;

export default meta;

type Story = StoryObj<typeof meta>;

const WarningBannerWithActions = () => {
  const [reviewed, setReviewed] = React.useState(false);

  return (
    <Banner
      variant="warning"
      compact={false}
      title="Certificate rotation required"
      actions={
        <Banner.ActionButton
          label="Review steps"
          onPress={() => {
            setReviewed(true);
          }}
        />
      }
    >
      {reviewed
        ? 'The certificate rotation checklist has been reviewed.'
        : 'Rotate the certificate before the maintenance window begins tonight.'}
    </Banner>
  );
};

const ClosableBanner = () => {
  const [visible, setVisible] = React.useState(true);

  if (!visible) {
    return <p>Banner dismissed</p>;
  }

  return (
    <Banner
      variant="success"
      title="Configuration saved"
      showCloseAction
      onClose={() => {
        setVisible(false);
      }}
    >
      The policy update has been applied successfully.
    </Banner>
  );
};

export const InfoCompact: Story = {
  render: () => (
    <Banner variant="info" title="Deployment scheduled">
      The next deployment window starts at 09:30 UTC.
    </Banner>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('alert')).toBeVisible();
    await expect(canvas.getByText('Deployment scheduled')).toBeVisible();
    await expect(canvas.getByText('The next deployment window starts at 09:30 UTC.')).toBeVisible();
  },
};

export const WarningWithActions: Story = {
  render: () => <WarningBannerWithActions />,
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Rotate the certificate before the maintenance window begins tonight.')).toBeVisible();

    await userEvent.click(canvas.getByRole('button', { name: 'Review steps' }));

    await expect(canvas.getByText('The certificate rotation checklist has been reviewed.')).toBeVisible();
  },
};

export const Closable: Story = {
  render: () => <ClosableBanner />,
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('alert')).toBeVisible();

    await userEvent.click(canvas.getByRole('button', { name: 'Close banner' }));

    await waitFor(() => {
      expect(canvas.queryByRole('alert')).toBeNull();
    });

    await expect(canvas.getByText('Banner dismissed')).toBeVisible();
  },
};
