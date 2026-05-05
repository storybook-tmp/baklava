import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, Tab } from './Tabs';
import { useState } from 'react';

const meta = {
  title: 'AI Generated/Medium/Tabs',
  component: Tabs,
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

const TabsWithState = (props: React.ComponentProps<typeof Tabs>) => {
  const [activeKey, setActiveKey] = useState(props.activeKey || 'tab1');

  return (
    <Tabs {...props} activeKey={activeKey} onSwitch={setActiveKey}>
      {props.children}
    </Tabs>
  );
};

export const Default: Story = {
  render: (args) => (
    <TabsWithState {...args}>
      <Tab tabKey="tab1" title="Tab 1">
        Content for Tab 1
      </Tab>
      <Tab tabKey="tab2" title="Tab 2">
        Content for Tab 2
      </Tab>
      <Tab tabKey="tab3" title="Tab 3">
        Content for Tab 3
      </Tab>
    </TabsWithState>
  ),
  args: {
    activeKey: 'tab1',
    onSwitch: () => {},
  },
};

export const Secondary: Story = {
  render: (args) => (
    <TabsWithState {...args}>
      <Tab tabKey="overview" title="Overview">
        Overview content goes here
      </Tab>
      <Tab tabKey="details" title="Details">
        Detailed information
      </Tab>
    </TabsWithState>
  ),
  args: {
    variant: 'secondary',
    activeKey: 'overview',
    onSwitch: () => {},
  },
};

export const Vertical: Story = {
  render: (args) => (
    <TabsWithState {...args}>
      <Tab tabKey="settings" title="Settings">
        Settings panel
      </Tab>
      <Tab tabKey="advanced" title="Advanced">
        Advanced options
      </Tab>
    </TabsWithState>
  ),
  args: {
    orientation: 'vertical',
    activeKey: 'settings',
    onSwitch: () => {},
  },
};
