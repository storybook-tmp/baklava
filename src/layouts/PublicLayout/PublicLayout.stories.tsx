import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ReactNode } from 'react';

import { Panel } from '../../components/containers/Panel/Panel.tsx';
import { H2 } from '../../typography/Heading/Heading.tsx';
import { Prose } from '../../typography/Prose/Prose.tsx';
import { PublicLayout } from './PublicLayout.tsx';

const meta = {
  component: PublicLayout,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof PublicLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SignIn: Story = {
  render: () =>
    renderPublicLayout({
      headingTitle: 'Sign in to continue',
      headingDescription: 'Use your organization credentials to access Fortanix services.',
      panelTitle: 'Workspace access',
      panelBody: (
        <Prose>
          <p>Continue with your company identity provider to open dashboards, approval queues, and key management tools.</p>
        </Prose>
      ),
    }),
};

export const WelcomeBack: Story = {
  render: () =>
    renderPublicLayout({
      headingTitle: 'Finish your setup',
      headingDescription: 'Confirm your environment before inviting the rest of your team.',
      panelTitle: 'Workspace details',
      panelBody: (
        <Prose>
          <p>Review your tenant region, approval routing, and audit log retention before enabling production traffic.</p>
        </Prose>
      ),
    }),
};

export const StatusNotice: Story = {
  render: () =>
    renderPublicLayout({
      headingTitle: 'Scheduled maintenance',
      headingDescription: 'We are applying an update to the key infrastructure in your region.',
      panelTitle: 'Maintenance window',
      panelBody: (
        <Prose>
          <p>Read-only access will remain available while connections are rotated and background services are restarted.</p>
        </Prose>
      ),
    }),
};

function renderPublicLayout(args: {
  headingTitle: string;
  headingDescription: string;
  panelTitle: string;
  panelBody: ReactNode;
}) {
  const { headingTitle, headingDescription, panelTitle, panelBody } = args;

  return (
    <PublicLayout
      heading={
        <PublicLayout.Heading>
          <PublicLayout.FortanixLogo productName="Data Security Manager" />
          <H2>{headingTitle}</H2>
          <p>{headingDescription}</p>
        </PublicLayout.Heading>
      }
      productInfoCards={
        <>
          <PublicLayout.ProductInfoCard>
            <PublicLayout.ProductInfoCard.Heading>Centralized security operations</PublicLayout.ProductInfoCard.Heading>
            View policies, certificates, and audit trails from one shared workspace.
          </PublicLayout.ProductInfoCard>
          <PublicLayout.ProductInfoCard>
            <PublicLayout.ProductInfoCard.Heading>Trusted infrastructure</PublicLayout.ProductInfoCard.Heading>
            Maintain HSM-backed secrets with clear ownership and operator approval history.
          </PublicLayout.ProductInfoCard>
        </>
      }
    >
      <Panel>
        <Panel.Heading>{panelTitle}</Panel.Heading>
        {panelBody}
      </Panel>
    </PublicLayout>
  );
}
