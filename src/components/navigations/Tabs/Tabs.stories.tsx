import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, Tab } from './Tabs';
import * as React from 'react';

const meta = {
  title: 'AI Generated/Complex/Tabs',
  component: Tabs,
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [activeKey, setActiveKey] = React.useState('tab1');
    return (
      <Tabs activeKey={activeKey} onSwitch={setActiveKey}>
        <Tab tabKey="tab1" title="Tab 1">
          <p>Content for tab 1</p>
        </Tab>
        <Tab tabKey="tab2" title="Tab 2">
          <p>Content for tab 2</p>
        </Tab>
        <Tab tabKey="tab3" title="Tab 3">
          <p>Content for tab 3</p>
        </Tab>
      </Tabs>
    );
  },
};

export const Vertical: Story = {
  render: () => {
    const [activeKey, setActiveKey] = React.useState('tab1');
    return (
      <Tabs activeKey={activeKey} onSwitch={setActiveKey} orientation="vertical">
        <Tab tabKey="tab1" title="Vertical Tab 1">
          <p>Vertical tab 1 content</p>
        </Tab>
        <Tab tabKey="tab2" title="Vertical Tab 2">
          <p>Vertical tab 2 content</p>
        </Tab>
      </Tabs>
    );
  },
};
