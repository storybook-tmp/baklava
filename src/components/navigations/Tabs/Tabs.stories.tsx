import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import * as React from 'react';
import { Tabs, Tab } from './Tabs.tsx';

const meta = {
  component: Tabs,
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

const ControlledTabs = ({ variant }: { variant?: 'primary' | 'secondary' }) => {
  const [activeKey, setActiveKey] = React.useState('overview');
  return (
    <Tabs activeKey={activeKey} onSwitch={setActiveKey} variant={variant}>
      <Tab tabKey="overview" title="Overview">
        <p>Overview content with summary information.</p>
      </Tab>
      <Tab tabKey="details" title="Details">
        <p>Detailed information and settings.</p>
      </Tab>
      <Tab tabKey="history" title="History">
        <p>Historical log of all events.</p>
      </Tab>
    </Tabs>
  );
};

export const Primary: Story = {
  render: () => <ControlledTabs variant="primary" />,
  play: async ({ canvas, userEvent }) => {
    await expect(canvas.getByRole('tablist')).toBeVisible();
    await expect(canvas.getByRole('tab', { name: /overview/i })).toBeVisible();
    await expect(canvas.getByText('Overview content with summary information.')).toBeVisible();
    await userEvent.click(canvas.getByRole('tab', { name: /details/i }));
    await expect(canvas.getByText('Detailed information and settings.')).toBeVisible();
  },
};

export const Secondary: Story = {
  render: () => <ControlledTabs variant="secondary" />,
  play: async ({ canvas, userEvent }) => {
    await expect(canvas.getByRole('tablist')).toBeVisible();
    await expect(canvas.getByRole('tab', { name: /overview/i })).toBeVisible();
    await userEvent.click(canvas.getByRole('tab', { name: /history/i }));
    await expect(canvas.getByText('Historical log of all events.')).toBeVisible();
  },
};

export const Vertical: Story = {
  render: () => {
    const [activeKey, setActiveKey] = React.useState('overview');
    return (
      <Tabs activeKey={activeKey} onSwitch={setActiveKey} orientation="vertical">
        <Tab tabKey="overview" title="Overview">
          <p>Overview content.</p>
        </Tab>
        <Tab tabKey="settings" title="Settings">
          <p>Settings panel content.</p>
        </Tab>
      </Tabs>
    );
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('tablist')).toBeVisible();
    await expect(canvas.getByText('Overview content.')).toBeVisible();
  },
};
