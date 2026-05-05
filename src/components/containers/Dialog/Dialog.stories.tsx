import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import { LayoutDecorator } from '../../../util/storybook/LayoutDecorator.tsx';
import { Icon } from '../../graphics/Icon/Icon.tsx';
import { Dialog } from './Dialog.tsx';

const meta = {
  title: 'AI Generated/Complex/Dialog',
  component: Dialog,
  decorators: [
    Story => (
      <LayoutDecorator size="large">
        <Story />
      </LayoutDecorator>
    ),
  ],
} satisfies Meta<typeof Dialog>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Confirmation: Story = {
  args: {
    title: 'Delete access token?',
    onRequestClose: fn(),
    children: (
      <p>
        This token is currently used by production automation. Deleting it will immediately stop any workflow that
        still depends on it.
      </p>
    ),
    actions: <Dialog.SubmitAction label="Delete token" onPress={fn()} />,
  },
};

export const LoadingState: Story = {
  args: {
    title: 'Rotating credentials',
    state: 'loading',
    showCloseIcon: false,
    showCancelAction: false,
    iconAside: <Icon icon="refresh" />,
    children: (
      <p>
        We are propagating the new credential set across dependent services. This may take a few moments.
      </p>
    ),
  },
};
