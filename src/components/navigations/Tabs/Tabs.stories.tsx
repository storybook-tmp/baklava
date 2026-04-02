import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tabs, Tab } from './Tabs.tsx';

const meta = {
  title: 'AI Generated/Medium/Tabs',
  component: Tabs,
  render: (args) => {
    const [activeKey, setActiveKey] = React.useState('tab1');
    return (
      <Tabs {...args} activeKey={activeKey} onSwitch={setActiveKey}>
        <Tab tabKey="tab1" title="Tab 1">Content for Tab 1</Tab>
        <Tab tabKey="tab2" title="Tab 2">Content for Tab 2</Tab>
        <Tab tabKey="tab3" title="Tab 3">Content for Tab 3</Tab>
      </Tabs>
    );
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  args: {
    variant: 'primary',
    orientation: 'horizontal',
    onSwitch: () => {},
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    orientation: 'horizontal',
    onSwitch: () => {},
  },
};
