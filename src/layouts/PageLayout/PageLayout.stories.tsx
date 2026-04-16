import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '../../components/actions/Button/Button.tsx';
import { Banner } from '../../components/containers/Banner/Banner.tsx';
import { SegmentedControl } from '../../components/forms/controls/SegmentedControl/SegmentedControl.tsx';

import { PageLayout } from './PageLayout.tsx';

const meta = {
  component: PageLayout,
} satisfies Meta<typeof PageLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

const overviewTitle = (
  <>
    <PageLayout.Heading>Security dashboard</PageLayout.Heading>
    <PageLayout.SubHeading>Project Atlas</PageLayout.SubHeading>
  </>
);

const scopedTitle = (
  <>
    <PageLayout.Heading>Access policies</PageLayout.Heading>
    <PageLayout.ScopeSwitcher>
      <SegmentedControl size="small" defaultSelected="workspace">
        <SegmentedControl.Button buttonKey="organization">Organization</SegmentedControl.Button>
        <SegmentedControl.Button buttonKey="workspace">Workspace</SegmentedControl.Button>
      </SegmentedControl>
    </PageLayout.ScopeSwitcher>
  </>
);

export const Overview: Story = {
  render: () => (
    <PageLayout>
      <PageLayout.Header title={overviewTitle}>
        <Button kind="secondary" label="Export report" />
        <Button kind="primary" label="Create deployment" />
      </PageLayout.Header>
      <PageLayout.Body>
        <p>Monitor deployment health, recent account changes, and approval status from the project landing page.</p>
      </PageLayout.Body>
      <PageLayout.Body>
        <p>Use this surface to confirm rollout timing before you open a detailed deployment or audit workflow.</p>
      </PageLayout.Body>
    </PageLayout>
  ),
};

export const ScopedPolicies: Story = {
  render: () => (
    <PageLayout>
      <PageLayout.Header title={scopedTitle}>
        <Button kind="secondary" label="Preview changes" />
        <Button kind="primary" label="Publish policies" />
      </PageLayout.Header>
      <PageLayout.Body>
        <p>The selected workspace inherits organization defaults, then applies the project-specific policy bundle.</p>
      </PageLayout.Body>
    </PageLayout>
  ),
};

export const WithNotice: Story = {
  render: () => (
    <PageLayout>
      <PageLayout.Header title={overviewTitle}>
        <Button kind="primary" label="Resolve drift" />
      </PageLayout.Header>
      <PageLayout.Body>
        <Banner variant="warning" compact={false} title="Policy drift detected">
          Two protected services are running with credentials that no longer match the staged policy bundle.
        </Banner>
      </PageLayout.Body>
      <PageLayout.Body>
        <p>Review the affected services before you continue the rollout.</p>
      </PageLayout.Body>
    </PageLayout>
  ),
};
