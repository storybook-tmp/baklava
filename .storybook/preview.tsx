import type { Preview } from '@storybook/react-vite';

// Root CSS — must be first so cascade layers are defined before component styles
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
