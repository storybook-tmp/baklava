import * as React from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn } from 'storybook/test';

import { Button } from '../../components/actions/Button/Button.tsx';
import { Banner } from '../../components/containers/Banner/Banner.tsx';
import { Panel } from '../../components/containers/Panel/Panel.tsx';
import { Tab, Tabs } from '../../components/navigations/Tabs/Tabs.tsx';
import { PageLayout } from './PageLayout.tsx';


const meta = {
  component: PageLayout,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof PageLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeaderAndBody: Story = {
  render: () => (
    <PageLayout>
      <PageLayout.Header title={<PageLayout.Heading>Projects</PageLayout.Heading>}>
        <Button kind="primary" label="Create project" onPress={fn()} />
      </PageLayout.Header>
      <PageLayout.Body>
        <Panel.Heading>Recent projects</Panel.Heading>
        <p>Three production projects have reported activity in the last hour.</p>
      </PageLayout.Body>
    </PageLayout>
  ),
  play: async ({ canvas, userEvent }) => {
    const button = canvas.getByRole('button', { name: 'Create project' });
    
    await expect(canvas.getByRole('heading', { name: 'Projects' })).toBeVisible();
    await expect(canvas.getByRole('heading', { name: 'Recent projects' })).toBeVisible();
    
    await userEvent.click(button);
  },
};

export const ScopedHeader: Story = {
  render: () => (
    <PageLayout>
      <PageLayout.Header
        title={
          <PageLayout.ScopeSwitcher>
            <Button kind="secondary" label="Production account" />
          </PageLayout.ScopeSwitcher>
        }
      >
        <Button kind="secondary" label="Export" />
      </PageLayout.Header>
      <PageLayout.Body>
        <Banner title="Scoped view">Metrics are filtered to the production account.</Banner>
      </PageLayout.Body>
    </PageLayout>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('button', { name: 'Production account' })).toBeVisible();
    await expect(canvas.getByRole('button', { name: 'Export' })).toBeVisible();
    await expect(canvas.getByRole('alert')).toHaveTextContent(/production account/i);
  },
};

export const WithPageNav: Story = {
  render: () => <PageWithTabs />,
  play: async ({ canvas, userEvent }) => {
    await expect(canvas.getByRole('tabpanel')).toHaveTextContent(/open findings/i);
    
    await userEvent.click(canvas.getByRole('tab', { name: 'History' }));
    
    await expect(canvas.getByRole('tabpanel')).toHaveTextContent(/resolved findings/i);
  },
};

function PageWithTabs() {
  const [activeKey, setActiveKey] = React.useState('findings');
  
  return (
    <PageLayout>
      <PageLayout.Header title={<PageLayout.Heading>Security dashboard</PageLayout.Heading>} />
      <PageLayout.Nav>
        <Tabs activeKey={activeKey} onSwitch={setActiveKey} variant="secondary">
          <Tab tabKey="findings" title="Findings">Open findings are grouped by severity.</Tab>
          <Tab tabKey="history" title="History">Resolved findings remain available for audit review.</Tab>
        </Tabs>
      </PageLayout.Nav>
    </PageLayout>
  );
}
