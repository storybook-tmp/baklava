import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, waitFor, within } from 'storybook/test';

import { notify } from '../../overlays/ToastProvider/ToastProvider.tsx';
import { Button } from './Button.tsx';
import cl from './Button.module.scss';

const meta = {
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => <Button kind="primary" label="Save changes" />,
  play: async ({ canvas }) => {
    const button = canvas.getByRole('button', { name: 'Save changes' });

    await expect(button).toBeVisible();
    await expect(button).toHaveClass(cl['bk-button--primary']);
  },
};

export const SecondaryWithIcon: Story = {
  render: () => <Button kind="secondary" icon="download" label="Download report" />,
  play: async ({ canvas }) => {
    const button = canvas.getByRole('button', { name: 'Download report' });

    await expect(button).toBeVisible();
    await expect(button).toHaveClass(cl['bk-button--secondary']);
    await expect(button.querySelector('svg')).not.toBeNull();
  },
};

export const NotifyOnPress: Story = {
  render: () => (
    <Button
      kind="primary"
      label="Show success toast"
      onPress={() => {
        notify.success({
          title: 'Saved',
          message: 'Changes have been saved to the draft.',
          options: { autoClose: false },
        });
      }}
    />
  ),
  play: async ({ canvas, canvasElement }) => {
    const button = canvas.getByRole('button', { name: 'Show success toast' });
    const documentBody = within(canvasElement.ownerDocument.body);

    await userEvent.click(button);

    await expect(documentBody.getByRole('alert')).toBeVisible();
    await expect(documentBody.getByText('Changes have been saved to the draft.')).toBeVisible();

    await userEvent.click(documentBody.getByRole('button', { name: 'Close banner' }));

    await waitFor(() => {
      expect(documentBody.queryByText('Changes have been saved to the draft.')).toBeNull();
    });
  },
};
