import type { Preview } from '@storybook/react-vite';
import type React from 'react';

// Import global styles - must be first
import '../src/styling/main.scss';

// Import providers
import { BaklavaProvider } from '../src/context/BaklavaProvider';

const preview: Preview = {
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
  decorators: [
    (Story: React.ComponentType) => (
      <BaklavaProvider>
        <Story />
      </BaklavaProvider>
    ),
  ],
};

export default preview;
