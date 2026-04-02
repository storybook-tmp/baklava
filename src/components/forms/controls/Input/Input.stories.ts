import * as React from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import { Input } from './Input.tsx';


const meta = {
  title: 'AI Generated/Medium/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  args: {
    style: {
      width: '22rem',
    },
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  args: {
    placeholder: 'Search projects',
  },
};

export const WithPrefixAndAction: Story = {
  args: {
    defaultValue: 'team-alpha',
    icon: 'search',
    iconLabel: 'Search',
    prefix: 'https://',
    actions: React.createElement(Input.Action, {
      icon: 'cross',
      label: 'Clear input',
      onPress: fn(),
    }),
  },
};
