import { createElement } from 'react';
import { fn } from 'storybook/test';

import { config } from '../../../../../.storybook/preview.tsx';
import { Input } from './Input.tsx';


const meta = config.meta({
  title: 'AI Generated/Medium/Input',
  component: Input,
});

export const WithLeadingIcon = meta.story({
  args: {
    type: 'email',
    placeholder: 'ops-team@fortanix.com',
    icon: 'email',
    iconLabel: 'Email address',
  },
});

export const WithPrefixAndAction = meta.story({
  args: {
    defaultValue: 'console.fortanix.com',
    prefix: 'https://',
    actions: createElement(Input.Action, {
      icon: 'copy',
      label: 'Copy URL',
      onPress: fn(),
    }),
  },
});
