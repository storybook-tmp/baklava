import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tabs, Tab } from './Tabs.tsx';

const meta = {
  title: 'AI Generated/Medium/Tabs',
  component: Tabs,
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  args: {
    activeKey: 'tab1',
    orientation: 'horizontal',
    onSwitch: () => {},
    children: [
      React.createElement(Tab, { key: 'tab1', tabKey: 'tab1', title: 'Tab 1' }, 'Content for Tab 1'),
      React.createElement(Tab, { key: 'tab2', tabKey: 'tab2', title: 'Tab 2' }, 'Content for Tab 2'),
      React.createElement(Tab, { key: 'tab3', tabKey: 'tab3', title: 'Tab 3' }, 'Content for Tab 3'),
    ],
  },
};

export const Vertical: Story = {
  args: {
    activeKey: 'tab1',
    orientation: 'vertical',
    variant: 'secondary',
    onSwitch: () => {},
    children: [
      React.createElement(Tab, { key: 'tab1', tabKey: 'tab1', title: 'First' }, 'First tab content'),
      React.createElement(Tab, { key: 'tab2', tabKey: 'tab2', title: 'Second' }, 'Second tab content'),
    ],
  },
};
