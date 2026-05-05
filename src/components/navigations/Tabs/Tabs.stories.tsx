import type { Meta, StoryObj } from '@storybook/react-vite';

import * as React from 'react';
import { fn } from 'storybook/test';

import { LayoutDecorator } from '../../../util/storybook/LayoutDecorator.tsx';
import { Tab, Tabs } from './Tabs.tsx';

const TabsExample = ({ activeKey: activeKeyInitial, onSwitch, ...props }: React.ComponentProps<typeof Tabs>) => {
  const [activeKey, setActiveKey] = React.useState(activeKeyInitial);

  React.useEffect(() => {
    setActiveKey(activeKeyInitial);
  }, [activeKeyInitial]);

  const handleSwitch = React.useCallback((tabKey: string) => {
    setActiveKey(tabKey);
    onSwitch(tabKey);
  }, [onSwitch]);

  return (
    <Tabs {...props} activeKey={activeKey} onSwitch={handleSwitch}>
      <Tab tabKey="overview" title="Overview">
        <p>Track rollout status, deployment timing, and current ownership at a glance.</p>
      </Tab>
      <Tab tabKey="activity" title="Activity">
        <p>Review recent changes, audit history, and the latest environment events.</p>
      </Tab>
      <Tab tabKey="settings" title="Settings">
        <p>Adjust service defaults, notification rules, and the access model for this workspace.</p>
      </Tab>
    </Tabs>
  );
};

const meta = {
  title: 'AI Generated/Medium/Tabs',
  component: Tabs,
  decorators: [
    Story => (
      <LayoutDecorator size="medium">
        <Story />
      </LayoutDecorator>
    ),
  ],
  args: {
    activeKey: 'overview',
    onSwitch: fn(),
  },
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: args => <TabsExample {...args} />,
};

export const VerticalSecondary: Story = {
  args: {
    activeKey: 'activity',
    orientation: 'vertical',
    variant: 'secondary',
  },
  render: args => <TabsExample {...args} />,
};
