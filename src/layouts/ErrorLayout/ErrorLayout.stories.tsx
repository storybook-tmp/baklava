import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent } from 'storybook/test';

import { Button } from '../../components/actions/Button/Button.tsx';
import { Icon } from '../../components/graphics/Icon/Icon.tsx';
import { ErrorLayout } from './ErrorLayout.tsx';

const meta = {
  component: ErrorLayout,
} satisfies Meta<typeof ErrorLayout>;

export default meta;

type Story = StoryObj<typeof meta>;

const RecoverableErrorStory = () => {
  const [recovered, setRecovered] = React.useState(false);

  if (recovered) {
    return <p>Recovery started</p>;
  }

  return (
    <ErrorLayout
      icon={<Icon icon="warning-filled" />}
      title="Connection lost"
      description={<p>The last environment sync failed before it could finish.</p>}
    >
      <ErrorLayout.Actions>
        <Button
          kind="primary"
          label="Retry sync"
          onPress={() => {
            setRecovered(true);
          }}
        />
      </ErrorLayout.Actions>
    </ErrorLayout>
  );
};

export const DefaultState: Story = {
  render: () => (
    <ErrorLayout
      icon={<Icon icon="warning-filled" />}
      title="Request failed"
      description={<p>We were unable to load the latest audit exports.</p>}
    />
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('heading', { name: 'Request failed' })).toBeVisible();
    await expect(canvas.getByText('We were unable to load the latest audit exports.')).toBeVisible();
  },
};

export const WithActions: Story = {
  render: () => <RecoverableErrorStory />,
  play: async ({ canvas }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Retry sync' }));
    await expect(canvas.getByText('Recovery started')).toBeVisible();
  },
};

export const MinimalState: Story = {
  render: () => (
    <ErrorLayout
      icon={<Icon icon="status-failed-filled" />}
      title="Workspace unavailable"
    />
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('heading', { name: 'Workspace unavailable' })).toBeVisible();
    await expect(canvas.queryByRole('button')).toBeNull();
  },
};
