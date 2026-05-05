import { fn } from 'storybook/test';

import preview from '../../../../.storybook/preview';

import { DialogModal } from './DialogModal.tsx';

const meta = preview.meta({
  title: 'AI Generated/Complex/DialogModal',
  component: DialogModal,
  parameters: {
    layout: 'fullscreen',
  },
  render: args => (
    <div style={{ minBlockSize: '100vh', padding: '2rem' }}>
      <DialogModal {...args}>
        Rotating this service account will create a new credential pair and invalidate the existing secret.
      </DialogModal>
    </div>
  ),
});

export default meta;

export const Centered = meta.story({
  args: {
    activeDefault: true,
    renderMethod: 'inline',
    title: 'Rotate service account',
    actions: (
      <DialogModal.Action
        kind="primary"
        label="Rotate now"
        onPress={fn()}
      />
    ),
  },
});

export const SlideOverLoading = meta.story({
  args: {
    activeDefault: true,
    renderMethod: 'inline',
    display: 'slide-over',
    size: 'large',
    title: 'Provisioning cluster',
    state: 'loading',
    allowUserClose: false,
  },
});
