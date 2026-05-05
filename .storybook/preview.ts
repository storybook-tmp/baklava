import * as React from 'react';
import { definePreview } from '@storybook/react-vite';

import '../src/styling/main.scss';

import { BaklavaProvider } from '../src/context/BaklavaProvider.tsx';

export const preview = definePreview({
  addons: [],
  decorators: [
    Story => React.createElement(
      BaklavaProvider,
      null,
      React.createElement(Story),
    ),
  ],
});

export const config = preview;

export default preview;
