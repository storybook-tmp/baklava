import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';
import { Tabs, Tab } from './Tabs.tsx';

const meta = {
  title: 'AI Generated/Complex/Tabs',
  component: Tabs,
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

const TabsWithState = (props: { variant?: 'primary' | 'secondary'; orientation?: 'horizontal' | 'vertical' }) => {
  const [activeKey, setActiveKey] = React.useState('tab1');
  return (
    <Tabs activeKey={activeKey} onSwitch={setActiveKey} {...props}>
      <Tab tabKey="tab1" title="Overview">
        Overview content goes here.
      </Tab>
      <Tab tabKey="tab2" title="Details">
        Details content goes here.
      </Tab>
      <Tab tabKey="tab3" title="Settings">
        Settings content goes here.
      </Tab>
    </Tabs>
  );
};

export const Primary: Story = {
  render: () => <TabsWithState variant="primary" />,
};

export const Secondary: Story = {
  render: () => <TabsWithState variant="secondary" />,
};
