import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tabs, Tab } from './Tabs.tsx';

const meta = {
  title: 'AI Generated/Complex/Tabs',
  component: Tabs,
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

const TabsWithState = (args: React.ComponentProps<typeof Tabs>) => {
  const [activeKey, setActiveKey] = React.useState('tab1');
  return (
    <Tabs {...args} activeKey={activeKey} onSwitch={setActiveKey}>
      <Tab tabKey="tab1" title="Tab 1">
        <p>Content for Tab 1</p>
      </Tab>
      <Tab tabKey="tab2" title="Tab 2">
        <p>Content for Tab 2</p>
      </Tab>
      <Tab tabKey="tab3" title="Tab 3">
        <p>Content for Tab 3</p>
      </Tab>
    </Tabs>
  );
};

export const Horizontal: Story = {
  render: (args) => <TabsWithState {...args} />,
  args: {
    orientation: 'horizontal',
    variant: 'primary',
    onSwitch: () => {},
  },
};

export const Vertical: Story = {
  render: (args) => <TabsWithState {...args} />,
  args: {
    orientation: 'vertical',
    variant: 'primary',
    onSwitch: () => {},
  },
};

export const Secondary: Story = {
  render: (args) => <TabsWithState {...args} />,
  args: {
    orientation: 'horizontal',
    variant: 'secondary',
    onSwitch: () => {},
  },
};
