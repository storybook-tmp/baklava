import type { Preview } from '@storybook/react-vite';
import * as React from 'react';

// Import styling - must be first in import order for CSS layers to work properly
import '../src/styling/main.scss';

// Import providers
import { BaklavaProvider } from '../src/context/BaklavaProvider';

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
};

export default preview;
