import '../src/styling/main.scss';
import 'virtual:svg-icons/register';

import { definePreview } from '@storybook/react-vite';

import { BaklavaProvider } from '../src/context/BaklavaProvider.tsx';
import { LayoutDecorator } from '../src/util/storybook/LayoutDecorator.tsx';


export const config = definePreview({
  decorators: [
    Story => (
      <BaklavaProvider>
        <LayoutDecorator size="large">
          <Story/>
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

export default config;
