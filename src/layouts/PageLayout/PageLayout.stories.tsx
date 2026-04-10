import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import { Button } from '../../components/actions/Button/Button.tsx';
import { Tabs, Tab } from '../../components/navigations/Tabs/Tabs.tsx';
import { PageLayout } from './PageLayout.tsx';

const meta = {
  component: PageLayout,
} satisfies Meta<typeof PageLayout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <PageLayout>
      <PageLayout.Header title={<PageLayout.Heading>Projects</PageLayout.Heading>}>
        <Button kind="primary" label="New project" />
      </PageLayout.Header>
      <PageLayout.Body>
        <p>Track rollout status and audit activity for each environment.</p>
      </PageLayout.Body>
    </PageLayout>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('heading', { name: 'Projects' })).toBeVisible();
    await expect(canvas.getByRole('button', { name: 'New project' })).toBeVisible();
  },
};

export const WithScopeSwitcher: Story = {
  render: () => (
    <PageLayout>
      <PageLayout.Header
        title={
          <PageLayout.ScopeSwitcher>
            <Button kind="secondary" label="Production" />
          </PageLayout.ScopeSwitcher>
        }
      >
        <Button label="Refresh" />
      </PageLayout.Header>
      <PageLayout.Body>
        <p>Showing the currently selected scope.</p>
      </PageLayout.Body>
    </PageLayout>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('button', { name: 'Production' })).toBeVisible();
    await expect(canvas.getByText('Showing the currently selected scope.')).toBeVisible();
  },
};

export const WithNavigation: Story = {
  render: () => (
    <PageLayout>
      <PageLayout.Header title={<PageLayout.Heading>Key management</PageLayout.Heading>} />
      <PageLayout.Nav>
        <Tabs activeKey="inventory" onSwitch={() => {}}>
          <Tab tabKey="inventory" title="Inventory">
            <p>Inventory panel</p>
          </Tab>
          <Tab tabKey="policies" title="Policies">
            <p>Policies panel</p>
          </Tab>
        </Tabs>
      </PageLayout.Nav>
      <PageLayout.Body>
        <p>Nested page content</p>
      </PageLayout.Body>
    </PageLayout>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('tab', { name: 'Inventory' })).toBeVisible();
    await expect(canvas.getByText('Nested page content')).toBeVisible();
  },
};
