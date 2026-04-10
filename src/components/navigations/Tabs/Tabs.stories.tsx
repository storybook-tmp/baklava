import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent } from 'storybook/test';

import { Tab, Tabs } from './Tabs.tsx';

const meta = {
  component: Tabs,
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

const PrimaryTabsStory = () => {
  const [activeKey, setActiveKey] = React.useState('overview');

  return (
    <Tabs activeKey={activeKey} onSwitch={setActiveKey}>
      <Tab tabKey="overview" title="Overview">
        Overview content for the selected account.
      </Tab>
      <Tab tabKey="activity" title="Activity">
        Recent activity for the selected account.
      </Tab>
      <Tab tabKey="settings" title="Settings">
        Settings content for the selected account.
      </Tab>
    </Tabs>
  );
};

const VerticalTabsStory = () => {
  const [activeKey, setActiveKey] = React.useState('users');

  return (
    <Tabs activeKey={activeKey} onSwitch={setActiveKey} orientation="vertical" variant="secondary">
      <Tab tabKey="users" title="Users">
        Manage workspace members and roles.
      </Tab>
      <Tab tabKey="service-accounts" title="Service accounts">
        Review tokens and service account access.
      </Tab>
      <Tab tabKey="audit" title="Audit">
        Export the latest audit entries.
      </Tab>
    </Tabs>
  );
};

const HiddenTabStory = () => {
  const [activeKey, setActiveKey] = React.useState('summary');

  return (
    <Tabs activeKey={activeKey} onSwitch={setActiveKey}>
      <Tab tabKey="summary" title="Summary">
        Summary content for the policy bundle.
      </Tab>
      <Tab hide tabKey="internal" title="Internal only">
        Hidden internal content.
      </Tab>
      <Tab tabKey="history" title="History">
        Version history for the policy bundle.
      </Tab>
    </Tabs>
  );
};

export const Primary: Story = {
  render: () => <PrimaryTabsStory />,
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('tabpanel')).toHaveTextContent('Overview content for the selected account.');

    await userEvent.click(canvas.getByRole('tab', { name: 'Activity' }));

    await expect(canvas.getByRole('tabpanel')).toHaveTextContent('Recent activity for the selected account.');
    await expect(canvas.getByRole('tab', { name: 'Activity' })).toHaveAttribute('aria-selected', 'true');
  },
};

export const SecondaryVertical: Story = {
  render: () => <VerticalTabsStory />,
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('tabpanel')).toHaveTextContent('Manage workspace members and roles.');

    await userEvent.click(canvas.getByRole('tab', { name: 'Audit' }));

    await expect(canvas.getByRole('tabpanel')).toHaveTextContent('Export the latest audit entries.');
    await expect(canvas.getByRole('tab', { name: 'Audit' })).toHaveAttribute('aria-selected', 'true');
  },
};

export const HiddenTab: Story = {
  render: () => <HiddenTabStory />,
  play: async ({ canvas }) => {
    await expect(canvas.queryByRole('tab', { name: 'Internal only' })).toBeNull();
    await expect(canvas.getByRole('tabpanel')).toHaveTextContent('Summary content for the policy bundle.');

    await userEvent.click(canvas.getByRole('tab', { name: 'History' }));

    await expect(canvas.getByRole('tabpanel')).toHaveTextContent('Version history for the policy bundle.');
  },
};
