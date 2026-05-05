import type { Preview } from '@storybook/react-vite';
import MockDate from 'mockdate';

import '../src/styling/main.scss';
import { globalToastStore } from '../src/components/overlays/ToastProvider/ToastProvider.tsx';
import { BaklavaProvider } from '../src/context/BaklavaProvider.tsx';

const preview: Preview = {
  decorators: [
    Story => (
      <BaklavaProvider>
        <Story />
      </BaklavaProvider>
    ),
  ],
  async beforeEach() {
    MockDate.set('2026-04-03T10:00:00Z');
    globalToastStore.dismissAllToasts();
  },
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo',
    },
  },
};

export default preview;
