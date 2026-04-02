import type { Preview } from '@storybook/react-vite';

import '../src/styling/main.scss';

import { BaklavaProvider } from '../src/context/BaklavaProvider.tsx';

const preview: Preview = {
  decorators: [
    Story => (
      <BaklavaProvider>
        <div style={{ padding: '1.5rem' }}>
          <Story />
        </div>
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
};

export default preview;
