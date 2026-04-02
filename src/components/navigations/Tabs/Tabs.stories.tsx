import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';

import { Tab, Tabs, type TabsProps } from './Tabs.tsx';

type TabsStoryProps = Omit<TabsProps, 'activeKey' | 'children' | 'onSwitch'>;

const TabsStory = ({ ...props }: TabsStoryProps & { initialActiveKey: string }) => {
  const { initialActiveKey, ...tabsProps } = props;
  const [activeKey, setActiveKey] = React.useState(initialActiveKey);

  return (
    <Tabs {...tabsProps} activeKey={activeKey} onSwitch={setActiveKey}>
      <Tab tabKey="overview" title="Overview">
        <p>Track deployment health, open work, and release readiness across teams.</p>
      </Tab>
      <Tab tabKey="activity" title="Activity">
        <p>Review the most recent approvals, escalations, and environment changes.</p>
      </Tab>
      <Tab tabKey="settings" title="Settings">
        <p>Adjust retention, alerting, and access defaults for the current workspace.</p>
      </Tab>
    </Tabs>
  );
};

const meta = {
  title: 'AI Generated/Complex/Tabs',
  component: Tabs,
  decorators: [
    (Story) => (
      <div style={{ inlineSize: '40rem' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <TabsStory {...args} initialActiveKey="overview" />,
  args: {
    variant: 'primary',
  },
};

export const VerticalSecondary: Story = {
  render: (args) => <TabsStory {...args} initialActiveKey="activity" />,
  args: {
    orientation: 'vertical',
    variant: 'secondary',
  },
};
