import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import { LayoutDecorator } from '../../../util/storybook/LayoutDecorator.tsx';

import { Banner } from './Banner.tsx';


const meta = {
  title: 'AI Generated/Medium/Banner',
  component: Banner,
  parameters: {
    layout: 'centered',
  },
  render: args => (
    <LayoutDecorator size="medium">
      <Banner {...args} />
    </LayoutDecorator>
  ),
} satisfies Meta<typeof Banner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Informational: Story = {
  args: {
    title: 'Maintenance scheduled',
    variant: 'info',
    children: 'A short maintenance window is planned for tonight at 23:00 UTC.',
    actions: <Banner.ActionButton label="View details" onPress={fn()} />,
  },
};

export const WarningWithClose: Story = {
  args: {
    compact: false,
    title: 'Rotate expiring credentials',
    variant: 'warning',
    children:
      'Three service accounts will expire within the next 48 hours. Rotate them now to avoid deployment failures.',
    showCloseAction: true,
    onClose: fn(),
    actions: <Banner.ActionButton label="Rotate now" onPress={fn()} />,
  },
};
