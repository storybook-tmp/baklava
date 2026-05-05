import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Tabs, Tab } from './Tabs.tsx';

const meta = {
  title: 'AI Generated/Complex/Tabs',
  component: Tabs,
  parameters: { layout: 'padded' },
  args: {
    onSwitch: fn(),
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  args: {
    activeKey: 'tab1',
    orientation: 'horizontal',
    children: [
      React.createElement(Tab, { key: 'tab1', tabKey: 'tab1', title: 'Overview' }, 'Overview content goes here.'),
      React.createElement(Tab, { key: 'tab2', tabKey: 'tab2', title: 'Details' }, 'Details content goes here.'),
      React.createElement(Tab, { key: 'tab3', tabKey: 'tab3', title: 'Settings' }, 'Settings content goes here.'),
    ],
  },
};

export const Vertical: Story = {
  args: {
    activeKey: 'tab1',
    orientation: 'vertical',
    variant: 'secondary',
    children: [
      React.createElement(Tab, { key: 'tab1', tabKey: 'tab1', title: 'General' }, 'General settings content.'),
      React.createElement(Tab, { key: 'tab2', tabKey: 'tab2', title: 'Security' }, 'Security settings content.'),
    ],
  },
};
