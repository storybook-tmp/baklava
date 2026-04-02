import type { Meta, StoryObj } from '@storybook/react-vite';

import * as React from 'react';

import { LayoutDecorator } from '../../../util/storybook/LayoutDecorator.tsx';

import { Tab, Tabs } from './Tabs.tsx';


type TabsStoryProps = React.ComponentProps<typeof Tabs>;

const TabsStory = (args: TabsStoryProps) => {
  const [activeKey, setActiveKey] = React.useState(args.activeKey ?? 'overview');

  React.useEffect(() => {
    setActiveKey(args.activeKey ?? 'overview');
  }, [args.activeKey]);

  return (
    <LayoutDecorator size="large">
      <Tabs {...args} activeKey={activeKey} onSwitch={setActiveKey}>
        <Tab tabKey="overview" title="Overview">
          A concise operational summary for the selected environment.
        </Tab>
        <Tab tabKey="alerts" title="Alerts">
          Active incidents, degraded services, and the most recent escalations.
        </Tab>
        <Tab tabKey="history" title="History">
          Review recent changes, audit activity, and timeline events.
        </Tab>
      </Tabs>
    </LayoutDecorator>
  );
};

const meta = {
  title: 'AI Generated/Medium/Tabs',
  component: Tabs,
  args: {
    activeKey: 'overview',
    orientation: 'horizontal',
    variant: 'primary',
  },
  parameters: {
    layout: 'centered',
  },
  render: args => <TabsStory {...args} />,
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const VerticalSecondary: Story = {
  args: {
    activeKey: 'alerts',
    orientation: 'vertical',
    variant: 'secondary',
  },
};
