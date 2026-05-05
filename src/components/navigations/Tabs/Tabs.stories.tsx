import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';
import { Tabs, Tab } from './Tabs.tsx';

const meta = {
  title: 'AI Generated/Medium/Tabs',
  component: Tabs,
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  args: {
    orientation: 'horizontal',
    variant: 'primary',
  },
  render: (args) => {
    const [activeKey, setActiveKey] = React.useState('tab1');
    return (
      <Tabs {...args} activeKey={activeKey} onSwitch={setActiveKey}>
        <Tab tabKey="tab1" title="Overview">Overview content goes here.</Tab>
        <Tab tabKey="tab2" title="Details">Details content goes here.</Tab>
        <Tab tabKey="tab3" title="Settings">Settings content goes here.</Tab>
      </Tabs>
    );
  },
};

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
    variant: 'secondary',
  },
  render: (args) => {
    const [activeKey, setActiveKey] = React.useState('tab1');
    return (
      <Tabs {...args} activeKey={activeKey} onSwitch={setActiveKey}>
        <Tab tabKey="tab1" title="General">General settings.</Tab>
        <Tab tabKey="tab2" title="Security">Security settings.</Tab>
      </Tabs>
    );
  },
};
