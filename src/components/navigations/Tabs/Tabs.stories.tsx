import * as React from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import { LayoutDecorator } from '../../../util/storybook/LayoutDecorator.tsx';

import { Tab, Tabs } from './Tabs.tsx';

const meta = {
  component: Tabs,
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => {
    const Example = () => {
      const [activeKey, setActiveKey] = React.useState('overview');

      return (
        <LayoutDecorator size="large">
          <Tabs activeKey={activeKey} onSwitch={setActiveKey}>
            <Tab tabKey="overview" title="Overview">
              <p>Overview content for the selected service.</p>
            </Tab>
            <Tab tabKey="activity" title="Activity">
              <p>Recent activity and audit events.</p>
            </Tab>
            <Tab tabKey="settings" title="Settings">
              <p>Configuration settings for the current scope.</p>
            </Tab>
          </Tabs>
        </LayoutDecorator>
      );
    };

    return <Example />;
  },
  play: async ({ canvas, userEvent }) => {
    await expect(canvas.getByRole('tabpanel')).toHaveTextContent(/overview content/i);

    await userEvent.click(canvas.getByRole('tab', { name: /activity/i }));

    await expect(canvas.getByRole('tabpanel')).toHaveTextContent(/recent activity and audit events/i);
  },
};

export const VerticalSecondary: Story = {
  render: () => {
    const Example = () => {
      const [activeKey, setActiveKey] = React.useState('details');

      return (
        <LayoutDecorator size="large">
          <Tabs
            activeKey={activeKey}
            onSwitch={setActiveKey}
            orientation="vertical"
            variant="secondary"
          >
            <Tab tabKey="details" title="Details">
              <p>Cluster details and ownership information.</p>
            </Tab>
            <Tab tabKey="access" title="Access">
              <p>Access policies and delegated permissions.</p>
            </Tab>
            <Tab tabKey="history" title="History">
              <p>Historical updates and deployment notes.</p>
            </Tab>
          </Tabs>
        </LayoutDecorator>
      );
    };

    return <Example />;
  },
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('tab', { name: /history/i }));

    await expect(canvas.getByRole('tabpanel')).toHaveTextContent(/historical updates and deployment notes/i);
  },
};

export const HiddenTab: Story = {
  render: () => {
    const Example = () => {
      const [activeKey, setActiveKey] = React.useState('visible');

      return (
        <LayoutDecorator size="large">
          <Tabs activeKey={activeKey} onSwitch={setActiveKey}>
            <Tab tabKey="visible" title="Visible tab">
              <p>Visible content stays available to the user.</p>
            </Tab>
            <Tab hide tabKey="hidden" title="Hidden tab">
              <p>This panel should never render while the tab stays hidden.</p>
            </Tab>
            <Tab tabKey="logs" title="Logs">
              <p>Operational logs for this cluster.</p>
            </Tab>
          </Tabs>
        </LayoutDecorator>
      );
    };

    return <Example />;
  },
  play: async ({ canvas, userEvent }) => {
    await expect(canvas.queryByRole('tab', { name: /hidden tab/i })).not.toBeInTheDocument();

    await userEvent.click(canvas.getByRole('tab', { name: /logs/i }));

    await expect(canvas.getByRole('tabpanel')).toHaveTextContent(/operational logs for this cluster/i);
  },
};
