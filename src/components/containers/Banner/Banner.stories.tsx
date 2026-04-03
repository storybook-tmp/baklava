import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import { LayoutDecorator } from '../../../util/storybook/LayoutDecorator.tsx';

import { Banner } from './Banner.tsx';

const meta = {
  title: 'AI Generated/Medium/Banner',
  component: Banner,
  parameters: {
    layout: 'padded',
  },
  decorators: [
    Story => (
      <LayoutDecorator size="medium">
        <Story />
      </LayoutDecorator>
    ),
  ],
} satisfies Meta<typeof Banner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InfoCompact: Story = {
  args: {
    variant: 'info',
    title: 'Scheduled maintenance',
    children: 'Maintenance starts at 23:00 UTC and should complete within 30 minutes.',
  },
};

export const ErrorWithActions: Story = {
  args: {
    compact: false,
    variant: 'error',
    title: 'Deployment failed',
    children: 'The release pipeline stopped during the database migration step.',
    showCloseAction: true,
    onClose: fn(),
    actions: <Banner.ActionButton kind="secondary" label="View logs" onPress={fn()} />,
  },
};
