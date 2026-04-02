import type { Meta, StoryObj } from '@storybook/react-vite';

import { Icon } from '../../graphics/Icon/Icon.tsx';
import { DialogModal } from './DialogModal.tsx';

const meta = {
  title: 'AI Generated/Complex/DialogModal',
  component: DialogModal,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    activeDefault: true,
    renderMethod: 'inline',
  },
} satisfies Meta<typeof DialogModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Centered: Story = {
  args: {
    title: 'Rotate credentials',
    children: (
      <p>
        Rotating the selected credentials will issue new values and revoke the current set after the grace period.
      </p>
    ),
    actions: <DialogModal.SubmitAction label="Rotate now" />,
  },
};

export const SlideOverLoading: Story = {
  args: {
    title: 'Deployment progress',
    display: 'slide-over',
    slideOverPosition: 'right',
    iconAside: <Icon icon="activity" aria-label="Deployment activity" />,
    state: 'loading',
    children: (
      <p>
        Preparing the deployment plan and validating connected services before applying the update.
      </p>
    ),
    actions: <DialogModal.SubmitAction label="Continue" />,
  },
};
