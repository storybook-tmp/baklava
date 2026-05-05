import * as React from 'react';

import preview from '../../../../../.storybook/preview.tsx';

import { Input, type InputProps } from './Input.tsx';

const meta = preview.meta({
  title: 'AI Generated/Medium/Input',
  component: Input,
  args: {
    placeholder: 'Enter a value',
  },
});

export default meta;

export const SearchField = meta.story({
  args: {
    icon: 'search',
    iconLabel: 'Search',
    placeholder: 'Search policies',
  },
});

export const WithPrefixAndAction = meta.story({
  args: {
    placeholder: 'tenant-a.example.com',
    prefix: 'https://',
  },
  render: args => renderInputWithAction(args),
});

function renderInputWithAction(args: InputProps) {
  return React.createElement(Input, {
    ...args,
    actions: React.createElement(Input.Action, {
      icon: 'copy',
      label: 'Copy endpoint',
      onPress: () => {},
    }),
  });
}
