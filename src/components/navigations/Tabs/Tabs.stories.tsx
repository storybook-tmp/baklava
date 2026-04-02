import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import React from 'react';
import { Tabs, Tab } from './Tabs.tsx';

const meta = {
  title: 'AI Generated/Complex/Tabs',
  component: Tabs,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    activeKey: 'tab1',
    onSwitch: fn(),
    children: (
      <>
        <Tab tabKey="tab1" title="Overview">
          <p>Overview content goes here.</p>
        </Tab>
        <Tab tabKey="tab2" title="Details">
          <p>Details content goes here.</p>
        </Tab>
        <Tab tabKey="tab3" title="Settings">
          <p>Settings content goes here.</p>
        </Tab>
      </>
    ),
  },
};

export const Secondary: Story = {
  args: {
    activeKey: 'tab1',
    variant: 'secondary',
    onSwitch: fn(),
    children: (
      <>
        <Tab tabKey="tab1" title="First">
          <p>First tab content.</p>
        </Tab>
        <Tab tabKey="tab2" title="Second">
          <p>Second tab content.</p>
        </Tab>
      </>
    ),
  },
};
