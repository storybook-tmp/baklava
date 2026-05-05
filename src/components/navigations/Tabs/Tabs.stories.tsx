import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { Tabs, Tab } from './Tabs.tsx';

const meta = {
  title: 'AI Generated/Complex/Tabs',
  component: Tabs,
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    activeKey: 'tab1',
    variant: 'primary',
    onSwitch: fn(),
    children: (
      <>
        <Tab tabKey="tab1" title="Tab 1">
          <p>Content for Tab 1</p>
        </Tab>
        <Tab tabKey="tab2" title="Tab 2">
          <p>Content for Tab 2</p>
        </Tab>
        <Tab tabKey="tab3" title="Tab 3">
          <p>Content for Tab 3</p>
        </Tab>
      </>
    ),
  },
};

export const Secondary: Story = {
  args: {
    activeKey: 'tab2',
    variant: 'secondary',
    onSwitch: fn(),
    children: (
      <>
        <Tab tabKey="tab1" title="First">
          <p>First tab content</p>
        </Tab>
        <Tab tabKey="tab2" title="Second">
          <p>Second tab content</p>
        </Tab>
      </>
    ),
  },
};
