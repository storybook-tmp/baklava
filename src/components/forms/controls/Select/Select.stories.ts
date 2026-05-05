import { createElement, Fragment } from 'react';
import { fn } from 'storybook/test';

import { config } from '../../../../../.storybook/preview.tsx';
import { Select } from './Select.tsx';


const regionOptions = createElement(
  Fragment,
  null,
  createElement(Select.Header, {
    itemKey: 'regions-header',
    label: 'Regions',
  }),
  createElement(Select.Option, {
    itemKey: 'us-east',
    label: 'US East',
  }),
  createElement(Select.Option, {
    itemKey: 'eu-central',
    label: 'EU Central',
  }),
  createElement(Select.Option, {
    itemKey: 'ap-southeast',
    label: 'AP Southeast',
  }),
  createElement(Select.Action, {
    itemKey: 'manage-regions',
    icon: 'settings',
    label: 'Manage regions',
    onActivate: fn(),
  }),
);

const meta = config.meta({
  title: 'AI Generated/Complex/Select',
  component: Select,
  args: {
    label: 'Deployment region',
    options: regionOptions,
  },
});

export const WithDefaultSelection = meta.story({
  args: {
    defaultSelected: 'eu-central',
  },
});

export const EmptyState = meta.story({
  args: {
    placeholder: 'Select a region',
  },
});
