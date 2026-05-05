import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tabs, Tab } from './Tabs.tsx';

const meta = {
  component: Tabs,
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

const HorizontalTabs = () => {
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
};

export const Horizontal: Story = {
  render: () => <HorizontalTabs />,
};

const VerticalTabs = () => {
  const [activeKey, setActiveKey] = useState('general');
  return (
    <Tabs activeKey={activeKey} onSwitch={setActiveKey} orientation="vertical">
      <Tab tabKey="general" title="General">
        <p>General settings content.</p>
      </Tab>
      <Tab tabKey="security" title="Security">
        <p>Security settings content.</p>
      </Tab>
      <Tab tabKey="notifications" title="Notifications">
        <p>Notification preferences content.</p>
      </Tab>
    </Tabs>
  );
};

export const Vertical: Story = {
  render: () => <VerticalTabs />,
};

const SecondaryTabs = () => {
  const [activeKey, setActiveKey] = useState('tab1');
  return (
    <Tabs activeKey={activeKey} onSwitch={setActiveKey} variant="secondary">
      <Tab tabKey="tab1" title="Tab 1">
        <p>First tab content.</p>
      </Tab>
      <Tab tabKey="tab2" title="Tab 2">
        <p>Second tab content.</p>
      </Tab>
    </Tabs>
  );
};

export const Secondary: Story = {
  render: () => <SecondaryTabs />,
};
