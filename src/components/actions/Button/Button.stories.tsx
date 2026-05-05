import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, waitFor } from 'storybook/test';

import { LayoutDecorator } from '../../../util/storybook/LayoutDecorator.tsx';
import { Button } from './Button.tsx';

const meta = {
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => (
    <LayoutDecorator size="small">
      <Button kind="primary" label="Save changes" />
    </LayoutDecorator>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('button', { name: 'Save changes' })).toBeVisible();
  },
};

export const WithIcon: Story = {
  render: () => (
    <LayoutDecorator size="small">
      <Button kind="secondary" icon="download" label="Export report" />
    </LayoutDecorator>
  ),
  play: async ({ canvas }) => {
    const button = canvas.getByRole('button', { name: 'Export report' });

    await expect(button).toBeVisible();
    await expect(button.querySelector('svg')).not.toBeNull();
  },
};

const AsyncButtonStory = () => {
  const [pressed, setPressed] = React.useState(false);

  return (
    <LayoutDecorator size="small">
      <Button
        kind="primary"
        label={pressed ? 'Saved' : 'Run async action'}
        onPress={async () => {
          await Promise.resolve();
          setPressed(true);
        }}
      />
    </LayoutDecorator>
  );
};

export const AsyncAction: Story = {
  render: () => <AsyncButtonStory />,
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Run async action' }));

    await waitFor(async () => {
      await expect(canvas.getByRole('button', { name: 'Saved' })).toBeVisible();
    });
  },
};
