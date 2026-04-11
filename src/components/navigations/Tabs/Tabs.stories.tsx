import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import * as React from 'react';

import { Tabs, Tab } from './Tabs.tsx';

const meta = {
  component: Tabs,
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HorizontalPrimary: Story = {
  render: () => {
    const [activeKey, setActiveKey] = React.useState('overview');
    return (
      <Tabs activeKey={activeKey} onSwitch={setActiveKey} orientation="horizontal" variant="primary">
        <Tab tabKey="overview" title="Overview">
          <div style={{ padding: '16px' }}>Overview content goes here.</div>
        </Tab>
        <Tab tabKey="settings" title="Settings">
          <div style={{ padding: '16px' }}>Settings content goes here.</div>
        </Tab>
        <Tab tabKey="logs" title="Logs">
          <div style={{ padding: '16px' }}>Logs content goes here.</div>
        </Tab>
      </Tabs>
    );
  },
  play: async ({ canvas }) => {
    const tablist = canvas.getByRole('tablist');
    await expect(tablist).toBeVisible();
    const overviewTab = canvas.getByRole('tab', { name: /overview/i });
    await expect(overviewTab).toBeVisible();
    await expect(overviewTab).toHaveAttribute('aria-selected', 'true');
    await expect(canvas.getByText(/overview content/i)).toBeVisible();
  },
};

export const TabSwitching: Story = {
  render: () => {
    const [activeKey, setActiveKey] = React.useState('tab1');
    return (
      <Tabs activeKey={activeKey} onSwitch={setActiveKey}>
        <Tab tabKey="tab1" title="First tab">
          <div style={{ padding: '16px' }}>Content of the first tab.</div>
        </Tab>
        <Tab tabKey="tab2" title="Second tab">
          <div style={{ padding: '16px' }}>Content of the second tab.</div>
        </Tab>
        <Tab tabKey="tab3" title="Third tab">
          <div style={{ padding: '16px' }}>Content of the third tab.</div>
        </Tab>
      </Tabs>
    );
  },
  play: async ({ canvas, userEvent }) => {
    await expect(canvas.getByText(/content of the first tab/i)).toBeVisible();
    const secondTab = canvas.getByRole('tab', { name: /second tab/i });
    await userEvent.click(secondTab);
    await expect(canvas.getByText(/content of the second tab/i)).toBeVisible();
  },
};

export const Secondary: Story = {
  render: () => {
    const [activeKey, setActiveKey] = React.useState('details');
    return (
      <Tabs activeKey={activeKey} onSwitch={setActiveKey} variant="secondary">
        <Tab tabKey="details" title="Details">
          <div style={{ padding: '16px' }}>Details panel content.</div>
        </Tab>
        <Tab tabKey="activity" title="Activity">
          <div style={{ padding: '16px' }}>Activity panel content.</div>
        </Tab>
      </Tabs>
    );
  },
  play: async ({ canvas }) => {
    const tablist = canvas.getByRole('tablist');
    await expect(tablist).toBeVisible();
    await expect(canvas.getByText(/details panel content/i)).toBeVisible();
  },
};
