import type { Preview } from '@storybook/react-vite';
import MockDate from 'mockdate';
import 'virtual:svg-icons/register';

import { BaklavaProvider } from '../src/context/BaklavaProvider.tsx';
import { notify } from '../src/components/overlays/ToastProvider/ToastProvider.tsx';
import '../src/styling/main.scss';

const preview: Preview = {
  decorators: [
    (Story) => (
      <BaklavaProvider>
        <Story />
      </BaklavaProvider>
    ),
  ],
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
  async beforeEach() {
    notify.dismissAll();
    MockDate.set('2026-04-11T09:30:00.000Z');
  },
  async afterEach() {
    notify.dismissAll();
    MockDate.reset();
  },
};

export default preview;
