import type { Preview } from '@storybook/react-vite';
import MockDate from 'mockdate';

import '../src/styling/main.scss';
import { BaklavaProvider } from '../src/context/BaklavaProvider.tsx';
import { notify } from '../src/components/overlays/ToastProvider/ToastProvider.tsx';

const preview: Preview = {
  decorators: [
    (Story) => (
      <BaklavaProvider>
        <Story />
      </BaklavaProvider>
    ),
  ],
  parameters: {
    layout: 'padded',
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
  async beforeEach() {
    localStorage.clear();
    sessionStorage.clear();
    notify.dismissAll();
    MockDate.set('2026-04-10T12:00:00Z');
    document.documentElement.classList.remove('bk-no-globals');

    return async () => {
      notify.dismissAll();
      localStorage.clear();
      sessionStorage.clear();
      MockDate.reset();
    };
  },
};

export default preview;
