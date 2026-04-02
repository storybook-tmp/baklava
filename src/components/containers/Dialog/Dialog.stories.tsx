import type { Meta, StoryObj } from '@storybook/react';
import { Dialog } from './Dialog';
import { useState } from 'react';
import { Button } from '../../actions/Button/Button';

const meta = {
  title: 'AI Generated/Complex/Dialog',
  component: Dialog,
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

const DialogWithState = (props: React.ComponentProps<typeof Dialog>) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        label="Open Dialog"
        kind="primary"
        onPress={() => setIsOpen(true)}
      />
      {isOpen && (
        <Dialog {...props} onRequestClose={() => setIsOpen(false)} open />
      )}
    </>
  );
};

export const Default: Story = {
  render: (args) => (
    <DialogWithState {...args}>
      <p>This is a basic dialog with simple content.</p>
    </DialogWithState>
  ),
  args: {
    title: 'Dialog Title',
  },
};

export const WithLongContent: Story = {
  render: (args) => (
    <DialogWithState {...args}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris.
      </p>
      <p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </DialogWithState>
  ),
  args: {
    title: 'Dialog with Long Content',
  },
};

export const WithoutCloseIcon: Story = {
  render: (args) => (
    <DialogWithState {...args}>
      <p>This dialog has no close icon, only the cancel button.</p>
    </DialogWithState>
  ),
  args: {
    title: 'Dialog Without Close Icon',
    showCloseIcon: false,
  },
};
