import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tabs, Tab } from './Tabs.tsx';

const meta = {
  title: 'AI Generated/Complex/Tabs',
  component: Tabs,
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => {
    const [activeKey, setActiveKey] = useState('tab1');
    return (
      <Tabs activeKey={activeKey} onSwitch={setActiveKey} variant="primary">
        <Tab tabKey="tab1" title="Tab 1">
          <p>Content for Tab 1</p>
        </Tab>
        <Tab tabKey="tab2" title="Tab 2">
          <p>Content for Tab 2</p>
        </Tab>
        <Tab tabKey="tab3" title="Tab 3">
          <p>Content for Tab 3</p>
        </Tab>
      </Tabs>
    );
  },
};

export const Secondary: Story = {
  render: () => {
    const [activeKey, setActiveKey] = useState('settings');
    return (
      <Tabs activeKey={activeKey} onSwitch={setActiveKey} variant="secondary">
        <Tab tabKey="settings" title="Settings">
          <p>Settings content</p>
        </Tab>
        <Tab tabKey="profile" title="Profile">
          <p>Profile content</p>
        </Tab>
      </Tabs>
    );
  },
};
