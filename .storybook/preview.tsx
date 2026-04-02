import * as React from 'react';
import type { Preview } from '@storybook/react-vite';

import 'virtual:svg-icons/register';
import '../src/styling/main.scss';

import { BaklavaProvider } from '../src/context/BaklavaProvider.tsx';


const StorybookProviders = ({ children }: React.PropsWithChildren) => {
  const isBrowser = typeof window !== 'undefined';

  React.useEffect(() => {
    if (!isBrowser) {
      return;
    }

    document.documentElement.classList.add('bk-theme--light');
    document.body.classList.add('bk-theme--light');

    return () => {
      document.documentElement.classList.remove('bk-theme--light');
      document.body.classList.remove('bk-theme--light');
    };
  }, [isBrowser]);

  if (!isBrowser) {
    return children;
  }

  return <BaklavaProvider>{children}</BaklavaProvider>;
};

const preview: Preview = {
  decorators: [
    Story => (
      <StorybookProviders>
        <Story />
      </StorybookProviders>
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
