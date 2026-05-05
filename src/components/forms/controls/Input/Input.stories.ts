import * as React from 'react';
import { fn } from 'storybook/test';

import { config } from '#.storybook/preview';

import { Input } from './Input.tsx';

const meta = config.meta({
  title: 'AI Generated/Medium/Input',
  component: Input,
});

export const Default = meta.story({
  args: {
    placeholder: 'Search certificates',
  },
});

export const WithIconAndAction = meta.story({
  args: {
    defaultValue: 'api.fortanix.test',
    icon: 'search',
    iconLabel: 'Search',
    prefix: 'https://',
    actions: React.createElement(Input.Action, {
      icon: 'cross',
      label: 'Clear input',
      onPress: fn(),
    }),
  },
});
