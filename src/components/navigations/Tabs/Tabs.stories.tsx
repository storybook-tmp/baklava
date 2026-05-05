import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tabs, Tab } from './Tabs.tsx';

const meta = {
  component: Tabs,
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [activeKey, setActiveKey] = useState('tab1');
    return (
      <Tabs activeKey={activeKey} onSwitch={setActiveKey}>
        <Tab tabKey="tab1" title="Overview">
          Overview content
        </Tab>
        <Tab tabKey="tab2" title="Details">
          Details content
        </Tab>
        <Tab tabKey="tab3" title="Settings">
          Settings content
        </Tab>
      </Tabs>
    );
  },
};

export const Vertical: Story = {
  render: () => {
    const [activeKey, setActiveKey] = useState('tab1');
    return (
      <Tabs
        activeKey={activeKey}
        onSwitch={setActiveKey}
        orientation="vertical"
      >
        <Tab tabKey="tab1" title="General">
          General settings
        </Tab>
        <Tab tabKey="tab2" title="Security">
          Security settings
        </Tab>
        <Tab tabKey="tab3" title="Advanced">
          Advanced settings
        </Tab>
      </Tabs>
    );
  },
};

export const Secondary: Story = {
  render: () => {
    const [activeKey, setActiveKey] = useState('tab1');
    return (
      <Tabs
        activeKey={activeKey}
        onSwitch={setActiveKey}
        variant="secondary"
      >
        <Tab tabKey="tab1" title="All">
          All items
        </Tab>
        <Tab tabKey="tab2" title="Active">
          Active items
        </Tab>
        <Tab tabKey="tab3" title="Archived">
          Archived items
        </Tab>
      </Tabs>
    );
  },
};
