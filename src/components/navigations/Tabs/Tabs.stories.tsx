import * as React from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn } from 'storybook/test';

import { Tab, Tabs } from './Tabs.tsx';


const meta = {
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  args: {
    activeKey: 'overview',
    onSwitch: fn(),
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  render: () => <HorizontalTabs />,
  play: async ({ canvas, userEvent }) => {
    await expect(canvas.getByRole('tabpanel')).toHaveTextContent(/current posture/i);
    
    await userEvent.click(canvas.getByRole('tab', { name: 'Events' }));
    
    await expect(canvas.getByRole('tab', { name: 'Events' })).toHaveAttribute('aria-selected', 'true');
    await expect(canvas.getByRole('tabpanel')).toHaveTextContent(/forwarded to SIEM/i);
  },
};

export const VerticalSecondary: Story = {
  render: () => <VerticalTabs />,
  play: async ({ canvas, userEvent }) => {
    await expect(canvas.getByRole('tabpanel')).toHaveTextContent(/group ownership/i);
    
    await userEvent.click(canvas.getByRole('tab', { name: 'Policies' }));
    
    await expect(canvas.getByRole('tab', { name: 'Policies' })).toHaveAttribute('aria-selected', 'true');
    await expect(canvas.getByRole('tabpanel')).toHaveTextContent(/policy assignments/i);
  },
};

export const HiddenTab: Story = {
  render: () => <HiddenTabExample />,
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('tab', { name: 'Active' })).toBeVisible();
    await expect(canvas.queryByRole('tab', { name: 'Deprecated' })).not.toBeInTheDocument();
    await expect(canvas.getByRole('tabpanel')).toHaveTextContent(/active configuration/i);
  },
};

function HorizontalTabs() {
  const [activeKey, setActiveKey] = React.useState('overview');
  
  return (
    <Tabs activeKey={activeKey} onSwitch={setActiveKey}>
      <Tab tabKey="overview" title="Overview">Current posture summary and unresolved findings.</Tab>
      <Tab tabKey="events" title="Events">Recent activity is forwarded to SIEM every five minutes.</Tab>
      <Tab tabKey="settings" title="Settings">Notification and retention settings are ready.</Tab>
    </Tabs>
  );
}

function VerticalTabs() {
  const [activeKey, setActiveKey] = React.useState('access');
  
  return (
    <Tabs activeKey={activeKey} onSwitch={setActiveKey} orientation="vertical" variant="secondary">
      <Tab tabKey="access" title="Access">Group ownership and role bindings are listed here.</Tab>
      <Tab tabKey="policies" title="Policies">Policy assignments are grouped by environment.</Tab>
      <Tab tabKey="audit" title="Audit">Audit exports are configured for long-term retention.</Tab>
    </Tabs>
  );
}

function HiddenTabExample() {
  const [activeKey, setActiveKey] = React.useState('active');
  
  return (
    <Tabs activeKey={activeKey} onSwitch={setActiveKey}>
      <Tab tabKey="active" title="Active">The active configuration is visible.</Tab>
      <Tab tabKey="deprecated" title="Deprecated" hide>Legacy settings should stay hidden.</Tab>
    </Tabs>
  );
}
