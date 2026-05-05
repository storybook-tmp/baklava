import type { Meta, StoryObj } from '@storybook/react-vite';

import * as React from 'react';

import { Tabs } from './Tabs.tsx';

const meta = {
  title: 'AI Generated/Medium/Tabs',
  component: Tabs,
  parameters: {
    layout: 'padded',
  },
  args: {
    activeKey: 'overview',
    onSwitch: () => {},
  },
  render: args => {
    const [activeKey, setActiveKey] = React.useState(args.activeKey);

    return (
      <Tabs {...args} activeKey={activeKey} onSwitch={setActiveKey}>
        <Tabs.Tab tabKey="overview" title="Overview">
          <p>Overview metrics, status details, and the latest activity are available here.</p>
        </Tabs.Tab>
        <Tabs.Tab tabKey="members" title="Members">
          <p>Invite teammates, review access, and manage ownership for this workspace.</p>
        </Tabs.Tab>
        <Tabs.Tab tabKey="settings" title="Settings">
          <p>Configure notifications, retention, and deployment preferences.</p>
        </Tabs.Tab>
      </Tabs>
    );
  },
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const SecondaryVertical: Story = {
  args: {
    activeKey: 'members',
    orientation: 'vertical',
    variant: 'secondary',
  },
};
