import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import { Button } from '../../actions/Button/Button.tsx';
import { LayoutDecorator } from '../../../util/storybook/LayoutDecorator.tsx';
import { DialogModal } from './DialogModal.tsx';

const meta = {
  title: 'AI Generated/Complex/DialogModal',
  component: DialogModal,
  decorators: [
    Story => (
      <LayoutDecorator size="large">
        <Story />
      </LayoutDecorator>
    ),
  ],
} satisfies Meta<typeof DialogModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Triggered: Story = {
  args: {
    title: 'Approve deployment',
    renderMethod: 'inline',
    actions: (
      <DialogModal.Action
        kind="primary"
        label="Approve"
        onPress={fn()}
      />
    ),
    children: (
      <p>
        Review the release notes and confirm that the maintenance window has started before continuing.
      </p>
    ),
  },
  render: args => (
    <DialogModal
      {...args}
      trigger={({ activate }) => (
        <Button label="Open approval dialog" kind="primary" onPress={activate} />
      )}
    />
  ),
};

export const SlideOverOpen: Story = {
  args: {
    title: 'Grant project access',
    activeDefault: true,
    display: 'slide-over',
    slideOverPosition: 'right',
    size: 'large',
    renderMethod: 'inline',
    actions: (
      <>
        <DialogModal.Action kind="secondary" label="Review policy" onPress={fn()} />
        <DialogModal.SubmitAction label="Grant access" onPress={fn()} />
      </>
    ),
    children: (
      <>
        <p>Access will be granted to the project contributors listed in the pending request.</p>
        <p>Use the policy review step to confirm their environment scope before submitting.</p>
      </>
    ),
  },
};
