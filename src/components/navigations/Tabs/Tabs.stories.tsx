import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tabs, Tab } from './Tabs';

const meta = {
  component: Tabs,
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => {
    const [activeKey, setActiveKey] = useState('overview');
    return (
      <Tabs activeKey={activeKey} onSwitch={setActiveKey}>
        <Tab tabKey="overview" title="Overview">
          <p>Overview content goes here.</p>
        </Tab>
        <Tab tabKey="settings" title="Settings">
          <p>Settings content goes here.</p>
        </Tab>
        <Tab tabKey="logs" title="Logs">
          <p>Logs content goes here.</p>
        </Tab>
      </Tabs>
    );
  },
};

export const Secondary: Story = {
  render: () => {
    const [activeKey, setActiveKey] = useState('details');
    return (
      <Tabs activeKey={activeKey} onSwitch={setActiveKey} variant="secondary">
        <Tab tabKey="details" title="Details">
          <p>Details panel content.</p>
        </Tab>
        <Tab tabKey="permissions" title="Permissions">
          <p>Permissions panel content.</p>
        </Tab>
      </Tabs>
    );
  },
};

export const Vertical: Story = {
  render: () => {
    const [activeKey, setActiveKey] = useState('general');
    return (
      <Tabs activeKey={activeKey} onSwitch={setActiveKey} orientation="vertical">
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
