import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, waitFor, within } from 'storybook/test';

import { LayoutDecorator } from '../../../util/storybook/LayoutDecorator.tsx';
import { notify } from '../../overlays/ToastProvider/ToastProvider.tsx';

import { Button } from './Button.tsx';

const meta = {
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => (
    <LayoutDecorator size="small">
      <Button
        kind="primary"
        icon="check"
        label="Save changes"
      />
    </LayoutDecorator>
  ),
  play: async ({ canvas }) => {
    const button = canvas.getByRole('button', { name: /save changes/i });

    await expect(button).toBeVisible();
    await expect(button).toBeEnabled();
  },
};

export const AsyncAction: Story = {
  render: () => (
    <LayoutDecorator size="small">
      <Button
        kind="secondary"
        label="Run sync"
        onPress={async () => {
          await new Promise<void>((resolve) => {
            window.setTimeout(resolve, 200);
          });
        }}
      />
    </LayoutDecorator>
  ),
  play: async ({ canvas, userEvent }) => {
    const button = canvas.getByRole('button', { name: /run sync/i });

    await userEvent.click(button);

    await expect(button).toHaveAttribute('aria-disabled', 'true');
    await waitFor(async () => {
      await expect(button).not.toHaveAttribute('aria-disabled');
    });
  },
};

export const ShowsToastNotification: Story = {
  render: () => (
    <LayoutDecorator size="small">
      <Button
        label="Show success toast"
        onPress={() => {
          notify.success({
            title: 'Settings saved',
            message: 'Your changes are ready.',
          });
        }}
      />
    </LayoutDecorator>
  ),
  play: async ({ canvas, canvasElement, userEvent }) => {
    const button = canvas.getByRole('button', { name: /show success toast/i });

    await userEvent.click(button);

    const body = within(canvasElement.ownerDocument.body);
    const toast = await body.findByRole('alert');

    await expect(toast).toHaveTextContent(/settings saved/i);
    await expect(toast).toHaveTextContent(/your changes are ready/i);

    await userEvent.click(body.getByRole('button', { name: /close banner/i }));
    await waitFor(() => {
      expect(body.queryByText(/your changes are ready/i)).not.toBeInTheDocument();
    });
  },
};
