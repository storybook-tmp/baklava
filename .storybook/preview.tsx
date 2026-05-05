import type { Preview } from '@storybook/react-vite';

// Needs to be first in import order, so that CSS layers will be properly defined
import '../src/styling/main.scss';

import { BaklavaProvider } from '../src/context/BaklavaProvider.tsx';

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
