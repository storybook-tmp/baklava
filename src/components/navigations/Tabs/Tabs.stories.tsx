import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Tabs, Tab } from './Tabs.tsx';

const meta = {
  title: 'AI Generated/Complex/Tabs',
  component: Tabs,
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  args: {
    activeKey: 'tab1',
    orientation: 'horizontal',
    onSwitch: fn(),
    children: (
      <>
        <Tab tabKey="tab1" title="Overview">
          <p>Overview content goes here.</p>
        </Tab>
        <Tab tabKey="tab2" title="Details">
          <p>Details content goes here.</p>
        </Tab>
        <Tab tabKey="tab3" title="Settings">
          <p>Settings content goes here.</p>
        </Tab>
      </>
    ),
  },
};

export const Vertical: Story = {
  args: {
    activeKey: 'tab1',
    orientation: 'vertical',
    onSwitch: fn(),
    children: (
      <>
        <Tab tabKey="tab1" title="General">
          <p>General settings content.</p>
        </Tab>
        <Tab tabKey="tab2" title="Security">
          <p>Security settings content.</p>
        </Tab>
      </>
    ),
  },
};
