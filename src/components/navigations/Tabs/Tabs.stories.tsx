import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import { LayoutDecorator } from '../../../util/storybook/LayoutDecorator.tsx';
import { Tab, Tabs } from './Tabs.tsx';

const meta = {
  component: Tabs,
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

const TabsStory = ({
  initialKey,
  orientation = 'horizontal',
}: {
  initialKey: string;
  orientation?: 'horizontal' | 'vertical';
}) => {
  const [activeKey, setActiveKey] = React.useState(initialKey);

  return (
    <LayoutDecorator size="large">
      <Tabs activeKey={activeKey} onSwitch={setActiveKey} orientation={orientation}>
        <Tab tabKey="overview" title="Overview">
          <p>Overview content</p>
        </Tab>
        <Tab tabKey="activity" title="Activity">
          <p>Activity content</p>
        </Tab>
        <Tab tabKey="audit-log" title="Audit log">
          <p>Audit log content</p>
        </Tab>
      </Tabs>
    </LayoutDecorator>
  );
};

export const Default: Story = {
  render: () => <TabsStory initialKey="overview" />,
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('tablist')).toBeVisible();
    await expect(canvas.getByRole('tabpanel')).toHaveTextContent('Overview content');
  },
};

export const SwitchesPanels: Story = {
  render: () => <TabsStory initialKey="overview" />,
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('tab', { name: 'Activity' }));
    await expect(canvas.getByRole('tabpanel')).toHaveTextContent('Activity content');
  },
};

export const Vertical: Story = {
  render: () => <TabsStory initialKey="audit-log" orientation="vertical" />,
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('tab', { name: 'Audit log' })).toHaveAttribute('aria-selected', 'true');
    await expect(canvas.getByRole('tabpanel')).toHaveTextContent('Audit log content');
  },
};
