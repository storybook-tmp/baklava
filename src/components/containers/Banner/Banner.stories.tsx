import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import { LayoutDecorator } from '../../../util/storybook/LayoutDecorator.tsx';
import { Banner } from './Banner.tsx';

const meta = {
  title: 'AI Generated/Medium/Banner',
  component: Banner,
  decorators: [
    Story => (
      <LayoutDecorator size="large">
        <Story />
      </LayoutDecorator>
    ),
  ],
} satisfies Meta<typeof Banner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const InfoWithAction: Story = {
  args: {
    variant: 'info',
    title: 'New policy version available',
    children: 'Review the update to understand the rollout timing and expected operator actions.',
    actions: <Banner.ActionButton label="Read update" kind="secondary" onPress={fn()} />,
  },
};

export const ErrorExpanded: Story = {
  args: {
    compact: false,
    variant: 'error',
    title: 'Connection lost',
    children: 'We could not refresh the latest data. Retry after checking network access or your cluster status.',
    actions: <Banner.ActionButton label="Retry" kind="secondary" onPress={fn()} />,
    showCloseAction: true,
    onClose: fn(),
  },
};
