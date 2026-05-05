import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';

import { Tabs, Tab } from './Tabs.tsx';

const meta = {
  title: 'AI Generated/Complex/Tabs',
  component: Tabs,
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

const HorizontalTabs = () => {
  const [activeKey, setActiveKey] = React.useState('overview');
  return (
    <Tabs activeKey={activeKey} onSwitch={setActiveKey}>
      <Tab tabKey="overview" title="Overview">
        <p>Overview tab content.</p>
      </Tab>
      <Tab tabKey="details" title="Details">
        <p>Details tab content.</p>
      </Tab>
      <Tab tabKey="settings" title="Settings">
        <p>Settings tab content.</p>
      </Tab>
    </Tabs>
  );
};

const VerticalTabs = () => {
  const [activeKey, setActiveKey] = React.useState('general');
  return (
    <Tabs activeKey={activeKey} onSwitch={setActiveKey} orientation="vertical">
      <Tab tabKey="general" title="General">
        <p>General settings content.</p>
      </Tab>
      <Tab tabKey="security" title="Security">
        <p>Security settings content.</p>
      </Tab>
    </Tabs>
  );
};

export const Horizontal: Story = {
  render: () => <HorizontalTabs />,
};

export const Vertical: Story = {
  render: () => <VerticalTabs />,
};
