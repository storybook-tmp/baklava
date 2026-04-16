import type { Preview } from '@storybook/react-vite';
import MockDate from 'mockdate';
import { initialize, mswLoader } from 'msw-storybook-addon';

import 'virtual:svg-icons/register';
import '../src/styling/main.scss';

import { BaklavaProvider } from '../src/context/BaklavaProvider.tsx';
import { globalToastStore } from '../src/components/overlays/ToastProvider/ToastProvider.tsx';

import { mswHandlers } from './msw-handlers';

initialize({
  onUnhandledRequest: 'bypass',
});

const preview: Preview = {
  decorators: [
    Story => (
      <BaklavaProvider>
        <Story />
      </BaklavaProvider>
    ),
  ],
  loaders: [mswLoader],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'padded',
    msw: {
      handlers: mswHandlers,
    },
    a11y: {
      test: 'todo',
    },
  },
  async beforeEach() {
    MockDate.set('2026-04-03T10:55:46.000Z');
    globalToastStore.dismissAllToasts();

    return () => {
      MockDate.reset();
      globalToastStore.dismissAllToasts();
    };
  },
};

export default preview;
