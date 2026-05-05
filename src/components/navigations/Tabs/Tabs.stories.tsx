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
    const [activeKey, setActiveKey] = useState('overview');
    return (
      <Tabs activeKey={activeKey} onSwitch={setActiveKey}>
        <Tab tabKey="overview" title="Overview">
          <p>Overview of your security dashboard.</p>
        </Tab>
        <Tab tabKey="keys" title="Keys">
          <p>Manage your encryption keys here.</p>
        </Tab>
        <Tab tabKey="policies" title="Policies">
          <p>Configure access policies.</p>
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
          <p>Key details and metadata.</p>
        </Tab>
        <Tab tabKey="permissions" title="Permissions">
          <p>Who can access this key.</p>
        </Tab>
        <Tab tabKey="audit" title="Audit Log">
          <p>Recent activity for this key.</p>
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
          <p>General settings for your account.</p>
        </Tab>
        <Tab tabKey="security" title="Security">
          <p>Security preferences and two-factor authentication.</p>
        </Tab>
        <Tab tabKey="notifications" title="Notifications">
          <p>Configure notification preferences.</p>
        </Tab>
      </Tabs>
    );
  },
};
