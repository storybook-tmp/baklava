import * as React from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, waitFor } from 'storybook/test';

import { LayoutDecorator } from '../../../util/storybook/LayoutDecorator.tsx';

import { Banner } from './Banner.tsx';

const meta = {
  component: Banner,
} satisfies Meta<typeof Banner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const InfoWithAction: Story = {
  render: () => {
    const Example = () => {
      const [reviewed, setReviewed] = React.useState(false);

      return (
        <LayoutDecorator size="large">
          <Banner
            title="Maintenance planned"
            actions={(
              <Banner.ActionButton
                label="Review notice"
                onPress={() => {
                  setReviewed(true);
                }}
              />
            )}
          >
            {reviewed
              ? 'The notice has been reviewed and shared with the team.'
              : 'A short maintenance window is scheduled for this evening.'}
          </Banner>
        </LayoutDecorator>
      );
    };

    return <Example />;
  },
  play: async ({ canvas, userEvent }) => {
    const banner = canvas.getByRole('alert');

    await expect(banner).toHaveTextContent(/maintenance planned/i);
    await expect(banner).toHaveTextContent(/scheduled for this evening/i);

    await userEvent.click(canvas.getByRole('button', { name: /review notice/i }));

    await expect(banner).toHaveTextContent(/reviewed and shared with the team/i);
  },
};

export const WarningExpanded: Story = {
  render: () => (
    <LayoutDecorator size="large">
      <Banner
        compact={false}
        variant="warning"
        title="Configuration drift detected"
      >
        The latest audit found differences between the expected settings and the
        active cluster configuration. Review the reported drift before promoting
        the next rollout.
      </Banner>
    </LayoutDecorator>
  ),
  play: async ({ canvas }) => {
    const banner = canvas.getByRole('alert');

    await expect(banner).toHaveTextContent(/configuration drift detected/i);
    await expect(banner).toHaveTextContent(/review the reported drift/i);
  },
};

export const Dismissible: Story = {
  render: () => {
    const Example = () => {
      const [visible, setVisible] = React.useState(true);

      return (
        <LayoutDecorator size="large">
          {visible && (
            <Banner
              variant="success"
              title="Backup completed"
              showCloseAction
              onClose={() => {
                setVisible(false);
              }}
            >
              A recovery point was captured successfully.
            </Banner>
          )}
        </LayoutDecorator>
      );
    };

    return <Example />;
  },
  play: async ({ canvas, userEvent }) => {
    await expect(canvas.getByRole('alert')).toHaveTextContent(/backup completed/i);

    await userEvent.click(canvas.getByRole('button', { name: /close banner/i }));

    await waitFor(() => {
      expect(canvas.queryByRole('alert')).not.toBeInTheDocument();
    });
  },
};
