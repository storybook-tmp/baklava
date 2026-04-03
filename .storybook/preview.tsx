import type { Preview } from '@storybook/react-vite';
import MockDate from 'mockdate';
import { fn } from 'storybook/test';
import 'virtual:svg-icons/register';

import '../src/styling/main.scss';

import { BaklavaProvider } from '../src/context/BaklavaProvider.tsx';
import { globalToastStore } from '../src/components/overlays/ToastProvider/ToastProvider.tsx';


const preview: Preview = {
  decorators: [
    Story => (
      <BaklavaProvider>
        <Story />
      </BaklavaProvider>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
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
    await resetStoryEnvironment();
  },
};

export default preview;

async function resetStoryEnvironment() {
  MockDate.set('2026-04-03T09:00:00.000Z');
  installClipboard();
  installMatchMedia();
  globalToastStore.dismissAllToasts();
  document.body.style.removeProperty('--bk-device-pixel-ratio');
  await waitForToastCleanup();
}

function installClipboard() {
  Object.defineProperty(navigator, 'clipboard', {
    configurable: true,
    value: {
      ...(navigator.clipboard ?? {}),
      writeText: fn(),
    },
  });
}

function installMatchMedia() {
  if (typeof window.matchMedia === 'function') { return; }
  
  Object.defineProperty(window, 'matchMedia', {
    configurable: true,
    writable: true,
    value: (query: string): MediaQueryList => ({
      matches: query === `(resolution: ${window.devicePixelRatio}x)`,
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => true,
    }),
  });
}

function waitForToastCleanup() {
  return new Promise<void>(resolve => {
    window.setTimeout(resolve, 250);
  });
}
