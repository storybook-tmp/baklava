import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { Tabs, Tab } from './Tabs.tsx';

const meta = {
  title: 'AI Generated/Medium/Tabs',
  component: Tabs,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  args: {
    activeKey: 'tab1',
    onSwitch: fn(),
  },
  render: (args) => (
    <Tabs {...args}>
      <Tab tabKey="tab1" title="First Tab">
        <p>Content of the first tab.</p>
      </Tab>
      <Tab tabKey="tab2" title="Second Tab">
        <p>Content of the second tab.</p>
      </Tab>
      <Tab tabKey="tab3" title="Third Tab">
        <p>Content of the third tab.</p>
      </Tab>
    </Tabs>
  ),
};

export const SecondaryVariant: Story = {
  args: {
    activeKey: 'tab2',
    variant: 'secondary',
    onSwitch: fn(),
  },
  render: (args) => (
    <Tabs {...args}>
      <Tab tabKey="tab1" title="Overview">
        <p>Overview content.</p>
      </Tab>
      <Tab tabKey="tab2" title="Details">
        <p>Details content.</p>
      </Tab>
    </Tabs>
  ),
};
