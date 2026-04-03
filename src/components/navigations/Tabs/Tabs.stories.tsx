import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tabs, Tab } from './Tabs.tsx';

const meta = {
  component: Tabs,
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => {
    const [active, setActive] = useState('general');
    return (
      <Tabs activeKey={active} onSwitch={setActive}>
        <Tab tabKey="general" title="General">
          General settings content.
        </Tab>
        <Tab tabKey="security" title="Security">
          Security settings content.
        </Tab>
        <Tab tabKey="notifications" title="Notifications">
          Notification preferences.
        </Tab>
      </Tabs>
    );
  },
};

export const SecondaryVariant: Story = {
  render: () => {
    const [active, setActive] = useState('overview');
    return (
      <Tabs activeKey={active} onSwitch={setActive} variant="secondary">
        <Tab tabKey="overview" title="Overview">
          Overview content.
        </Tab>
        <Tab tabKey="details" title="Details">
          Details content.
        </Tab>
        <Tab tabKey="history" title="History">
          History content.
        </Tab>
      </Tabs>
    );
  },
};

export const Vertical: Story = {
  render: () => {
    const [active, setActive] = useState('profile');
    return (
      <Tabs activeKey={active} onSwitch={setActive} orientation="vertical">
        <Tab tabKey="profile" title="Profile">
          Profile settings.
        </Tab>
        <Tab tabKey="account" title="Account">
          Account settings.
        </Tab>
        <Tab tabKey="billing" title="Billing">
          Billing settings.
        </Tab>
      </Tabs>
    );
  },
};
