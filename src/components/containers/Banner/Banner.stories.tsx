import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import { LayoutDecorator } from '../../../util/storybook/LayoutDecorator.tsx';
import { Banner } from './Banner.tsx';

const meta = {
  component: Banner,
} satisfies Meta<typeof Banner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Info: Story = {
  render: () => (
    <LayoutDecorator>
      <Banner variant="info" title="Deployment scheduled">
        Maintenance starts at 22:00 UTC and affects only the reporting cluster.
      </Banner>
    </LayoutDecorator>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('alert')).toBeVisible();
    await expect(canvas.getByText(/maintenance starts at 22:00 utc/i)).toBeVisible();
  },
};

export const WithActions: Story = {
  render: () => (
    <LayoutDecorator>
      <Banner
        variant="warning"
        title="Expiring certificate"
        actions={<Banner.ActionButton label="Renew now" kind="tertiary" />}
      >
        The certificate for the backup environment expires in 3 days.
      </Banner>
    </LayoutDecorator>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('button', { name: 'Renew now' })).toBeVisible();
    await expect(canvas.getByText(/expires in 3 days/i)).toBeVisible();
  },
};

const DismissibleBannerStory = () => {
  const [hidden, setHidden] = React.useState(false);

  return (
    <LayoutDecorator>
      {!hidden && (
        <Banner
          variant="success"
          title="Settings saved"
          showCloseAction
          onClose={() => setHidden(true)}
        >
          Your audit-log preferences were updated successfully.
        </Banner>
      )}
      {hidden && <p>Banner dismissed</p>}
    </LayoutDecorator>
  );
};

export const Dismissible: Story = {
  render: () => <DismissibleBannerStory />,
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Close banner' }));
    await expect(canvas.getByText('Banner dismissed')).toBeVisible();
  },
};
