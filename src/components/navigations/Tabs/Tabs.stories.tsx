import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Tabs, Tab } from './Tabs';

const meta = {
  component: Tabs,
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tabs activeKey="overview" onSwitch={fn()}>
      <Tab tabKey="overview" title="Overview">
        <p>Overview content with general information about the project.</p>
      </Tab>
      <Tab tabKey="settings" title="Settings">
        <p>Settings and configuration options.</p>
      </Tab>
      <Tab tabKey="activity" title="Activity">
        <p>Recent activity log.</p>
      </Tab>
    </Tabs>
  ),
};

export const SecondaryVariant: Story = {
  render: () => (
    <Tabs activeKey="keys" variant="secondary" onSwitch={fn()}>
      <Tab tabKey="keys" title="Keys">
        <p>Manage encryption keys.</p>
      </Tab>
      <Tab tabKey="certificates" title="Certificates">
        <p>Manage certificates.</p>
      </Tab>
    </Tabs>
  ),
};

export const Vertical: Story = {
  render: () => (
    <Tabs activeKey="general" orientation="vertical" onSwitch={fn()}>
      <Tab tabKey="general" title="General">
        <p>General settings and preferences.</p>
      </Tab>
      <Tab tabKey="security" title="Security">
        <p>Security and access control settings.</p>
      </Tab>
      <Tab tabKey="notifications" title="Notifications">
        <p>Notification preferences.</p>
      </Tab>
    </Tabs>
  ),
};
