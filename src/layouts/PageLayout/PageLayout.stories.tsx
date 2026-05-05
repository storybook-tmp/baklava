import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ReactNode } from 'react';

import { Button } from '../../components/actions/Button/Button.tsx';
import { Panel } from '../../components/containers/Panel/Panel.tsx';
import { Prose } from '../../typography/Prose/Prose.tsx';
import { PageLayout } from './PageLayout.tsx';

const meta = {
  component: PageLayout,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof PageLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InventoryPage: Story = {
  render: () =>
    renderPageLayout({
      title: <PageLayout.Heading>Security objects</PageLayout.Heading>,
      actions: (
        <>
          <Button kind="secondary" label="Refresh" />
          <Button kind="primary" label="Create object" />
        </>
      ),
      body: (
        <PageLayout.Body>
          <Panel.Heading>Inventory overview</Panel.Heading>
          <Prose>
            <p>Use this page to review current ownership, rotation state, and policy coverage across critical assets.</p>
          </Prose>
        </PageLayout.Body>
      ),
    }),
};

export const ScopedWorkspace: Story = {
  render: () =>
    renderPageLayout({
      title: (
        <>
          <PageLayout.Heading>Key management</PageLayout.Heading>
          <PageLayout.SubHeading>North America Platform</PageLayout.SubHeading>
        </>
      ),
      nav: (
        <PageLayout.Nav>
          <Button kind="tertiary" label="Overview" />
          <Button kind="tertiary" label="Policies" />
          <Button kind="tertiary" label="Activity" />
        </PageLayout.Nav>
      ),
      actions: (
        <>
          <Button kind="secondary" label="Export" />
          <Button kind="primary" label="Rotate key" />
        </>
      ),
      body: (
        <PageLayout.Body>
          <Panel.Heading>Rotation schedule</Panel.Heading>
          <Prose>
            <p>The active scope keeps regional policies, operators, and incident timelines aligned around one workspace.</p>
          </Prose>
        </PageLayout.Body>
      ),
    }),
};

export const ApprovalQueue: Story = {
  render: () =>
    renderPageLayout({
      title: <PageLayout.Heading>Pending approvals</PageLayout.Heading>,
      actions: (
        <>
          <Button kind="secondary" label="Assign owner" />
          <Button kind="primary" label="Approve selected" />
        </>
      ),
      body: (
        <PageLayout.Body>
          <Panel.Heading>Security review</Panel.Heading>
          <Prose>
            <p>Six approvals are waiting on review before deployment windows can be scheduled for production workloads.</p>
          </Prose>
        </PageLayout.Body>
      ),
    }),
};

function renderPageLayout(args: {
  title: ReactNode;
  actions?: ReactNode;
  nav?: ReactNode;
  body: ReactNode;
}) {
  const { title, actions, nav, body } = args;

  return (
    <div style={{ padding: '2rem' }}>
      <PageLayout>
        <PageLayout.Header title={title}>{actions}</PageLayout.Header>
        {nav}
        {body}
      </PageLayout>
    </div>
  );
}
