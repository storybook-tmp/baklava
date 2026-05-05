import type { Preview } from '@storybook/react-vite';

// Must be first to establish CSS layer ordering
import '../src/styling/main.scss';

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
