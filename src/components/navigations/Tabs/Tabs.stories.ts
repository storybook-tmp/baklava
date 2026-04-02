import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { Tab, Tabs } from './Tabs.tsx';


const meta = {
  title: 'AI Generated/Medium/Tabs',
  component: Tabs,
  args: {
    activeKey: 'overview',
  },
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: args => React.createElement(TabsStory, args),
};

export const SecondaryVertical: Story = {
  args: {
    orientation: 'vertical',
    variant: 'secondary',
  },
  render: args => React.createElement(TabsStory, args),
};

function TabsStory(args: React.ComponentProps<typeof Tabs>) {
  const [activeKey, setActiveKey] = React.useState(args.activeKey ?? 'overview');

  React.useEffect(() => {
    setActiveKey(args.activeKey ?? 'overview');
  }, [args.activeKey]);

  return React.createElement(
    'div',
    { style: { maxWidth: '42rem' } },
    React.createElement(
      Tabs,
      {
        ...args,
        activeKey,
        onSwitch: setActiveKey,
      },
      React.createElement(
        Tab,
        {
          tabKey: 'overview',
          title: 'Overview',
        },
        'Track overall account health, active incidents, and policy coverage across environments.',
      ),
      React.createElement(
        Tab,
        {
          tabKey: 'findings',
          title: 'Findings',
        },
        'Review newly detected issues, sort by severity, and assign owners for remediation.',
      ),
      React.createElement(
        Tab,
        {
          tabKey: 'history',
          title: 'History',
        },
        'Compare posture changes over time to understand whether risk is trending up or down.',
      ),
    ),
  );
}
