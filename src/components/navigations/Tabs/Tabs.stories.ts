import * as React from 'react';

import { config } from '#.storybook/preview';

import { Tab, Tabs, type TabsProps } from './Tabs.tsx';

type TabsStoryProps = Omit<TabsProps, 'children' | 'onSwitch'>;

const TabsExample = (args: TabsStoryProps) => {
  const [activeKey, setActiveKey] = React.useState(args.activeKey ?? 'overview');

  React.useEffect(() => {
    setActiveKey(args.activeKey ?? 'overview');
  }, [args.activeKey]);

  return (
    React.createElement(
      Tabs,
      {
        ...args,
        activeKey,
        onSwitch: setActiveKey,
      },
      React.createElement(Tab, {
        tabKey: 'overview',
        title: 'Overview',
        children: React.createElement('p', null, 'Service metrics, alerts, and system health at a glance.'),
      }),
      React.createElement(Tab, {
        tabKey: 'activity',
        title: 'Activity',
        children: React.createElement('p', null, 'Recent changes, audit events, and operator actions.'),
      }),
      React.createElement(Tab, {
        tabKey: 'settings',
        title: 'Settings',
        children: React.createElement('p', null, 'Configuration defaults, feature flags, and integrations.'),
      }),
    )
  );
};

const meta = config.meta({
  title: 'AI Generated/Medium/Tabs',
  component: Tabs,
  render: args => React.createElement(TabsExample, args),
});

export const Primary = meta.story({
  args: {
    activeKey: 'overview',
  },
});

export const VerticalSecondary = meta.story({
  args: {
    activeKey: 'activity',
    orientation: 'vertical',
    variant: 'secondary',
  },
});
