import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tabs, Tab } from './Tabs';

const meta = {
  component: Tabs,
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [activeKey, setActiveKey] = useState('overview');
    return (
      <Tabs activeKey={activeKey} onSwitch={setActiveKey}>
        <Tab tabKey="overview" title="Overview">
          <p>Overview content goes here.</p>
        </Tab>
        <Tab tabKey="details" title="Details">
          <p>Details content goes here.</p>
        </Tab>
        <Tab tabKey="settings" title="Settings">
          <p>Settings content goes here.</p>
        </Tab>
      </Tabs>
    );
  },
};

export const Secondary: Story = {
  render: () => {
    const [activeKey, setActiveKey] = useState('tab1');
    return (
      <Tabs variant="secondary" activeKey={activeKey} onSwitch={setActiveKey}>
        <Tab tabKey="tab1" title="First">
          <p>First tab content.</p>
        </Tab>
        <Tab tabKey="tab2" title="Second">
          <p>Second tab content.</p>
        </Tab>
      </Tabs>
    );
  },
};

export const Vertical: Story = {
  render: () => {
    const [activeKey, setActiveKey] = useState('general');
    return (
      <Tabs orientation="vertical" activeKey={activeKey} onSwitch={setActiveKey}>
        <Tab tabKey="general" title="General">
          <p>General settings.</p>
        </Tab>
        <Tab tabKey="security" title="Security">
          <p>Security settings.</p>
        </Tab>
        <Tab tabKey="notifications" title="Notifications">
          <p>Notification preferences.</p>
        </Tab>
      </Tabs>
    );
  },
};
