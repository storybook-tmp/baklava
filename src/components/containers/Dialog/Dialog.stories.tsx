import type { Meta, StoryObj } from '@storybook/react-vite';
import { Dialog } from './Dialog';
import { Icon } from '../../graphics/Icon/Icon';

const meta = {
  title: 'AI Generated/Complex/Dialog',
  component: Dialog,
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Confirm Action',
    children: (
      <p>Are you sure you want to proceed with this action?</p>
    ),
    onRequestClose: () => alert('Dialog closed'),
    showCloseIcon: true,
    showCancelAction: true,
  },
};

export const WithActions: Story = {
  args: {
    title: 'Delete Item',
    children: (
      <p>This item will be permanently deleted. This action cannot be undone.</p>
    ),
    onRequestClose: () => alert('Dialog closed'),
    showCloseIcon: true,
    showCancelAction: true,
    actions: (
      <Dialog.SubmitAction onPress={() => alert('Item deleted')} />
    ),
  },
};

export const WithIcon: Story = {
  args: {
    title: 'Success',
    children: (
      <p>Your changes have been saved successfully.</p>
    ),
    onRequestClose: () => alert('Dialog closed'),
    showCloseIcon: true,
    showCancelAction: false,
    iconAside: <Icon icon="check" />,
  },
};

export const Loading: Story = {
  args: {
    title: 'Processing',
    children: (
      <p>Please wait while we process your request...</p>
    ),
    onRequestClose: () => alert('Dialog closed'),
    showCloseIcon: false,
    showCancelAction: false,
    state: 'loading',
  },
};

export const CustomContent: Story = {
  args: {
    title: 'User Settings',
    children: (
      <div>
        <p>Update your preferences below:</p>
        <div style={{ marginTop: '1rem' }}>
          <label>
            <input type="checkbox" defaultChecked /> Enable notifications
          </label>
        </div>
        <div style={{ marginTop: '0.5rem' }}>
          <label>
            <input type="checkbox" defaultChecked /> Save preferences
          </label>
        </div>
      </div>
    ),
    onRequestClose: () => alert('Dialog closed'),
    showCloseIcon: true,
    showCancelAction: true,
    actions: (
      <Dialog.SubmitAction onPress={() => alert('Settings saved')} />
    ),
  },
};
