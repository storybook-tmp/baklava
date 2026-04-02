import * as React from 'react';

import { definePreview } from '@storybook/react-vite';

import '../src/styling/main.scss';

import { BaklavaProvider } from '../src/context/BaklavaProvider.tsx';
import { LayoutDecorator } from '../src/util/storybook/LayoutDecorator.tsx';

const preview = definePreview({
  decorators: [
    Story => (
      <BaklavaProvider>
        <LayoutDecorator size="medium">
          <Story />
        </LayoutDecorator>
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
});

export default preview;
