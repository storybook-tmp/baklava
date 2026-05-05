import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tabs, Tab } from './Tabs.tsx';

const meta = {
  title: 'AI Generated/Medium/Tabs',
  component: Tabs,
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  render: () => {
    const [activeKey, setActiveKey] = useState('tab1');
    return (
      <Tabs activeKey={activeKey} onSwitch={setActiveKey}>
        <Tab tabKey="tab1" title="Tab 1">Content for tab 1</Tab>
        <Tab tabKey="tab2" title="Tab 2">Content for tab 2</Tab>
        <Tab tabKey="tab3" title="Tab 3">Content for tab 3</Tab>
      </Tabs>
    );
  },
};

export const Vertical: Story = {
  render: () => {
    const [activeKey, setActiveKey] = useState('tab1');
    return (
      <Tabs activeKey={activeKey} onSwitch={setActiveKey} orientation="vertical">
        <Tab tabKey="tab1" title="General">General settings</Tab>
        <Tab tabKey="tab2" title="Security">Security settings</Tab>
      </Tabs>
    );
  },
};
