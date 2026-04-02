import type { Preview } from '@storybook/react-vite';
import '../src/styling/main.scss';
import { BaklavaProvider } from '../src/context/BaklavaProvider';
import * as React from 'react';

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
    (Story) => (
      <BaklavaProvider>
        <Story />
      </BaklavaProvider>
    ),
  ],
};

export default preview;
